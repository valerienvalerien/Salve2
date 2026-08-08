#!/usr/bin/env node
/**
 * Export CSV de tous les prospects/leads du CRM (France + Canada).
 *
 * Principe : on ré-exécute la partie « données » de chaque CRM
 * (seed + migrations d'enrichissement) dans un bac à sable Node avec un
 * localStorage en mémoire, puis on relit le stockage. On obtient donc
 * exactement ce qu'un CRM fraîchement ouvert affiche — enrichissements
 * inclus — sans jamais dupliquer les données dans un second fichier.
 *
 * Sortie : exports/CRM-prospects-complet.csv (séparateur ; + BOM, Excel FR)
 *
 * Usage : node tools/export-crm-csv.js
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'exports', 'CRM-prospects-complet.csv');

// ─── Bac à sable ──────────────────────────────────────────────
function runDataSection(code) {
    const store = new Map();
    const localStorage = {
        getItem: k => (store.has(k) ? store.get(k) : null),
        setItem: (k, v) => store.set(k, String(v)),
        removeItem: k => store.delete(k),
        clear: () => store.clear()
    };
    // Stub DOM : les sections « données » n'affichent rien, mais quelques
    // lignes de câblage UI y traînent. On les neutralise.
    const el = new Proxy(function () {}, {
        get: (t, p) => {
            if (p === 'classList') return { add() {}, remove() {}, toggle() {}, contains: () => false };
            if (p === 'dataset' || p === 'style') return {};
            if (p === 'then') return undefined;
            return el;
        },
        set: () => true,
        apply: () => el
    });
    const document = {
        querySelectorAll: () => [],
        querySelector: () => el,
        getElementById: () => el,
        addEventListener() {},
        createElement: () => el,
        body: el
    };
    const sandbox = {
        localStorage, document, console,
        window: { addEventListener() {}, localStorage },
        alert() {}, confirm: () => false, prompt: () => null,
        setTimeout, clearTimeout, setInterval, clearInterval
    };
    sandbox.globalThis = sandbox;
    vm.createContext(sandbox);
    // Les `const` de haut niveau d'un script vm ne sont pas sur globalThis :
    // on les ré-expose depuis le même script pour récupérer les libellés
    // (NICHES, STATUTS) du CRM au lieu de les recopier ici.
    const epilogue = `
        try { globalThis.__NICHES = NICHES; } catch (e) {}
        try { globalThis.__STATUTS = STATUTS; } catch (e) {}
    `;
    vm.runInContext(code + '\n' + epilogue, sandbox, { filename: 'crm-data.js' });
    return { store, niches: sandbox.__NICHES, statuts: sandbox.__STATUTS };
}

function sliceLines(file, from, to) {
    const lines = fs.readFileSync(path.join(ROOT, file), 'utf8').split('\n');
    return lines.slice(from - 1, to).join('\n');
}

// ─── Bornes des sections « données » de chaque CRM ────────────
// (juste avant le bloc NAVIGATION / Init, où commence l'UI)
function endBefore(file, marker) {
    const lines = fs.readFileSync(path.join(ROOT, file), 'utf8').split('\n');
    const i = lines.findIndex(l => l.includes(marker));
    if (i < 0) throw new Error(`Repère introuvable dans ${file} : ${marker}`);
    return i; // 1-indexé : ligne précédente
}

function startAfter(file, marker) {
    const lines = fs.readFileSync(path.join(ROOT, file), 'utf8').split('\n');
    const i = lines.findIndex(l => l.includes(marker));
    if (i < 0) throw new Error(`Repère introuvable dans ${file} : ${marker}`);
    return i + 2; // 1-indexé, ligne suivante
}

const FR_FILE = 'CRM_Salverys.html';
const CA_FILE = 'CRM_Salverys_Canada.html';

const frCode = sliceLines(FR_FILE, startAfter(FR_FILE, '<script>'), endBefore(FR_FILE, '─── NAVIGATION'));
const caCode = sliceLines(CA_FILE, startAfter(CA_FILE, '<script>'), endBefore(CA_FILE, '── Init ──'));

const fr = runDataSection(frCode);
const ca = runDataSection(caCode);

const frLeads = JSON.parse(fr.store.get('salverys_leads_v4') || '[]');
const caLeads = JSON.parse(ca.store.get('salverys_ca_leads_v1') || '[]');

if (!frLeads.length || !caLeads.length) {
    throw new Error(`Extraction vide (FR ${frLeads.length}, CA ${caLeads.length}) — bornes de découpe à revoir.`);
}

// ─── Normalisation ────────────────────────────────────────────
// Libellés repris du CRM lui-même (pas de table recopiée à maintenir).
const label = (map, key) => (map && map[key] && map[key].label) || key || '';

// Les outils d'enrichissement (Dropcontact, Kaspr, Emelia…) travaillent au
// domaine. Le CRM France n'a pas de champ « site », mais l'email société le
// donne — sauf quand c'est une boîte perso (gmail & co), qui n'apprend rien.
const FREE_MAIL = new Set([
    'gmail.com', 'googlemail.com', 'hotmail.com', 'hotmail.fr', 'outlook.com',
    'outlook.fr', 'live.fr', 'live.com', 'yahoo.com', 'yahoo.fr', 'free.fr',
    'orange.fr', 'wanadoo.fr', 'sfr.fr', 'laposte.net', 'bbox.fr', 'aol.com',
    'icloud.com', 'me.com', 'protonmail.com', 'proton.me', 'gmx.fr', 'numericable.fr'
]);

function domaine(site, ...emails) {
    if (site) {
        const m = String(site).match(/^(?:https?:\/\/)?(?:www\.)?([^/\s?#]+)/i);
        if (m) return m[1].toLowerCase();
    }
    for (const e of emails) {
        const m = String(e || '').match(/@([^\s,;>]+)/);
        if (!m) continue;
        const d = m[1].toLowerCase().replace(/[.,;]+$/, '');
        if (!FREE_MAIL.has(d)) return d;
    }
    return '';
}

// Le champ « notes » du CRM France concatène localisation, taille, angle,
// décideur, source… séparés par « | ». On en extrait la localisation pour
// obtenir une colonne exploitable, sans toucher à la note d'origine.
//
// Règle volontairement stricte : mieux vaut une case vide qu'une fausse ville,
// car les autres segments décrivent le métier, pas le lieu (« Dentaire chaîne »,
// « Helpdesk locataires »…). On ne retient donc qu'un segment portant un numéro
// de département — « Lyon (Rhône (69)) », « Boulogne-Billancourt (92) » — ou
// réduit à un nom de ville / zone connu.
const LIEUX_CONNUS = new Set([
    'paris', 'lyon', 'marseille', 'toulouse', 'nice', 'nantes', 'montpellier',
    'strasbourg', 'bordeaux', 'lille', 'rennes', 'reims', 'toulon', 'grenoble',
    'dijon', 'angers', 'nîmes', 'villeurbanne', 'clermont-ferrand', 'le mans',
    'aix-en-provence', 'brest', 'tours', 'amiens', 'limoges', 'annecy',
    'perpignan', 'metz', 'besançon', 'orléans', 'rouen', 'caen', 'nancy',
    'avignon', 'poitiers', 'la rochelle', 'pau', 'lens', 'saint-étienne',
    // zones et régions telles qu'écrites dans les notes
    'idf', 'île-de-france', 'ile-de-france', 'paca', 'occitanie', 'bretagne',
    'normandie', 'auvergne', 'nouvelle-aquitaine', 'hauts-de-france',
    'grand est', 'grand ouest', 'grand sud', 'centre-val de loire',
    'pays de la loire', 'bourgogne', 'aura', 'seine-maritime',
    'auvergne-rhône-alpes', 'rhône-alpes', 'sud-ouest', 'sud-est',
    'bouches-du-rhône', 'nanterre', 'cergy-pontoise',
    'national', 'france', 'france entière', 'multi-villes'
]);

// Numéro de département ou code postal entre parenthèses — « (92) », « (69760) » —
// ou arrondissement — « Lyon 9e », « Paris 5e ».
const GEO = /\(\s*\d{2,5}\s*\)|^(?:Paris|Lyon|Marseille)\s+\d{1,2}\s*(?:e|er|ème)\b/i;

// « Île-de-France + Auvergne », « PACA + Occitanie », « France (ville à
// qualifier) » : on valide sur le premier terme, hors parenthèse.
function estLieu(seg) {
    const tete = seg.split(/[+/(]/)[0].trim().toLowerCase().replace(/\s+/g, ' ');
    return LIEUX_CONNUS.has(tete);
}

function villeFromNotes(notes) {
    if (!notes) return '';
    for (const raw of String(notes).split('|')) {
        const seg = raw.trim();
        if (!seg) continue;
        if (/^MB\b/i.test(seg)) continue;
        if (/^(Source|Angle|Décideur|Ordre d'approche|Format email|Fiche|À qualifier)/i.test(seg)) continue;
        // Le lieu ouvre le segment ; l'adresse ou le commentaire suit un tiret cadratin.
        const tete = seg.split(/\s+—\s+/)[0].replace(/^Siège\s+/i, '').trim();
        if (!tete || tete.length > 70) continue;
        if (GEO.test(tete) || estLieu(tete)) return tete;
    }
    return '';
}

const rows = [];

for (const l of frLeads) {
    const d = l.decideur || {};
    const d2 = l.decideur2 || {};
    rows.push({
        'Marché': 'France',
        'ID CRM': l.id || '',
        'Entreprise': l.nom || l.structure || '',
        'Niche': label(fr.niches, l.niche),
        'Statut': label(fr.statuts, l.statut),
        'Score': l.score === undefined || l.score === null ? '' : String(l.score),
        'Canal': l.canal || '',
        'Ville / Localisation': villeFromNotes(l.notes),
        'Province / Région': '',
        'Secteur': '',
        'Effectif': '',
        'CA estimé': '',
        'Site web': l.site || '',
        'Domaine (déduit)': domaine(l.site, l.email, d.emailPro, d2.emailPro),
        'Email société': l.email || '',
        'Téléphone société': l.tel || '',
        'Décideur — Nom': d.nom || '',
        'Décideur — Titre': d.titre || '',
        'Décideur — Email': d.emailPro || d.email || '',
        'Décideur — Téléphone': d.tel || '',
        'Décideur — LinkedIn': d.linkedin || '',
        'Décideur — Statut recherche': d.statut || '',
        'Décideur — Ancienneté': d.anciennete || '',
        'Décideur 2 — Nom': d2.nom || '',
        'Décideur 2 — Titre': d2.titre || '',
        'Décideur 2 — Email': d2.emailPro || '',
        'Décideur 2 — LinkedIn': d2.linkedin || '',
        'Signaux d’achat': d.signauxAchat || '',
        'Source (URL)': d.sourceUrl || d2.sourceUrl || '',
        'Date de contact': l.dateContact || '',
        'Prochaine action': '',
        'Notes': l.notes || ''
    });
}

for (const l of caLeads) {
    const d = l.decideur || {};
    rows.push({
        'Marché': 'Canada',
        'ID CRM': l.id || '',
        'Entreprise': l.entreprise || '',
        'Niche': l.niche || '',
        'Statut': l.statut || '',
        'Score': l.pertinence === undefined || l.pertinence === null ? '' : String(l.pertinence),
        'Canal': l.type || '',
        'Ville / Localisation': '',
        'Province / Région': l.province || '',
        'Secteur': l.secteur || '',
        'Effectif': l.effectif || '',
        'CA estimé': l.ca || '',
        'Site web': l.site || '',
        'Domaine (déduit)': domaine(l.site, d.email),
        'Email société': '',
        'Téléphone société': '',
        'Décideur — Nom': d.nom || '',
        'Décideur — Titre': d.titre || '',
        'Décideur — Email': d.email || '',
        'Décideur — Téléphone': d.tel || '',
        'Décideur — LinkedIn': d.linkedin || '',
        'Décideur — Statut recherche': '',
        'Décideur — Ancienneté': '',
        'Décideur 2 — Nom': '',
        'Décideur 2 — Titre': '',
        'Décideur 2 — Email': '',
        'Décideur 2 — LinkedIn': '',
        'Signaux d’achat': l.signal || '',
        'Source (URL)': '',
        'Date de contact': l.dateContact || '',
        'Prochaine action': l.action || '',
        'Notes': l.justif || ''
    });
}

// ─── Écriture CSV ─────────────────────────────────────────────
const SEP = ';';
const clean = v => String(v == null ? '' : v).replace(/\r?\n/g, ' ').replace(/\s+/g, ' ').trim();
const q = v => '"' + clean(v).replace(/"/g, '""') + '"';

const headers = Object.keys(rows[0]);
const csv = [headers.map(q).join(SEP)]
    .concat(rows.map(r => headers.map(h => q(r[h])).join(SEP)))
    .join('\r\n');

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, '﻿' + csv + '\r\n', 'utf8');

const withEmail = rows.filter(r => r['Email société'] || r['Décideur — Email']).length;
const withPhone = rows.filter(r => r['Téléphone société'] || r['Décideur — Téléphone']).length;
const withDec = rows.filter(r => r['Décideur — Nom']).length;
const withLi = rows.filter(r => r['Décideur — LinkedIn']).length;
const withDom = rows.filter(r => r['Domaine (déduit)']).length;

console.log(`✔ ${path.relative(ROOT, OUT)} — ${rows.length} lignes ` +
    `(${frLeads.length} France + ${caLeads.length} Canada), ${headers.length} colonnes`);
console.log(`  email ${withEmail}/${rows.length} · tél ${withPhone}/${rows.length} · ` +
    `décideur nommé ${withDec}/${rows.length} · LinkedIn ${withLi}/${rows.length} · domaine ${withDom}/${rows.length}`);
