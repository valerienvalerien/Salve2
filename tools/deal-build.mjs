#!/usr/bin/env node
/**
 * Génère UNE page de closing chiffrée PAR DEAL (et non plus une par niche).
 *
 * Pourquoi : les prix se figent pendant l'appel de closing. Une grille commune
 * à toute une niche oblige soit à afficher un prix qu'on va contredire, soit à
 * ne rien afficher. Une page par deal porte exactement ce qui a été dit, au nom
 * du partenaire, avec SA marge calculée — et se révoque seule.
 *
 * Usage :
 *   node tools/deal-build.mjs tools/deals/<fichier>.json                 # code généré et affiché
 *   node tools/deal-build.mjs tools/deals/<fichier>.json "CODE-EXISTANT" # régénère sans changer le code
 *
 * Le code d'accès n'est JAMAIS écrit sur disque (ni dans le JSON, ni dans le dépôt) :
 * il est affiché une fois dans le terminal, à dicter au partenaire.
 * Le `token` d'URL, lui, est écrit dans le JSON au premier build pour que le lien
 * déjà envoyé reste valable quand on régénère la page.
 *
 * Révoquer un accès : supprimer le JSON du deal + la page dans espace/, puis pousser.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, rmSync } from 'node:fs';
import { dirname, join, basename, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pbkdf2Sync, randomBytes, createCipheriv, createDecipheriv } from 'node:crypto';

const ITER = 310000;
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

/* Garde-fous economiques — FINANCE-PREVISIONNEL.md §2/§3 fait foi.
 * Modele salarie (decision direction 2026-08-14) : brut 3 250 000 Ar (650 €) + charges
 * patronales CNaPS/OSTIE plafonnees a 8 x SME (~86 €/tete) = 736 € de cout employeur,
 * + VoIP ~30 € => cout direct 766 €/ETP. Plancher absolu = cout + ~20 % = 920 €/ETP.
 * (Historique : 840 € sous le modele 100 % freelance jusqu'au 2026-08-14 ; 540 € avant le
 * 2026-07-29, valeur heritee du modele salarie v1 abandonne le 2026-06-10. Negocier avec
 * un plancher perime permet de signer a perte.)
 * Le builder refuse de produire un document sous le plancher : on ne peut pas, sous
 * pression en closing, generer une proposition qui met l'entreprise en perte. */
const COUT_AGENT = 766;
const PLANCHER_ETP = 920;
const MARGE_ALERTE = 0.50;

/* Depot d'activation MB (PRICING.md §3, decide 2026-08-03) : 900 €/position, imputable
 * sur les 3 premieres factures a 300 €/position/mois. Ce n'est pas des
 * frais : le partenaire qui va au bout ne paie rien de plus. Il couvre l'onboarding reel
 * (~1 600 € sur 3 positions) s'il s'arrete, et fait rentrer du cash a J0 au lieu de J+30. */
const DEPOT_PAR_POSITION = 900;
/* Plafond global supprime le 2026-09-14 (PRICING.md §3) : il etait fixe alors que
 * l'imputation est proportionnelle (300 €/position/mois), donc les deux ne se recoupaient
 * qu'a 3 positions exactement. A 9 positions on creditait 8 100 € pour 2 700 € encaisses.
 * Le depot est desormais strictement proportionnel. `plafond` reste lisible par deal pour
 * un cas negocie ; l'imputation suit toujours le montant REELLEMENT verse (total / 3). */
const DEPOT_PLAFOND = Infinity;
const DEPOT_IMPUTATION_MENSUELLE = 300;
const DEPOT_MOIS_IMPUTATION = 3;

/* Volume ferme facturable — generalise a TOUS les paliers (PRICING.md §1, modele B) :
 * chaque tarif s'achete avec un volume engage, pas avec une intention. Sans minimum
 * facturable, Salverys porterait le risque de sous-consommation du partenaire (il annonce
 * 9 positions pour obtenir 1 350 €, en consomme 5, et le banc est a notre charge). En equipe
 * salariee ce banc coute plus cher qu'avant : preavis + indemnite de licenciement s'ajoutent
 * au salaire (FINANCE-PREVISIONNEL.md §7.1). Seuil a 1 = tout palier retenu doit le porter.
 * Paliers en vigueur : 1-4 ETP (standard) · 5-8 ETP (volume) · 9+ ETP (strategique). */
const MINIMUM_FACTURABLE_SEUIL = 1;

/* Plus de remise de lancement en marque blanche (PRICING.md §3, decide 2026-08-03) :
 * sur 3 positions, le mois pilote a -50 % coutait ~2 625 € pour un onboarding reel de
 * ~1 600 €, et une remise sur prix de gros ameliore la marge du revendeur sans l'aider a
 * gagner son client final. Le builder refuse une page qui la reintroduirait. */
/* Le lookbehind evite de confondre une remise (« -50 % ») avec une fourchette (« 25-35 % »). */
const REMISE_INTERDITE = /(?<!\d)\s*(?:−|-)\s*\d{1,2}\s*%|demi[- ]tarif|moiti(?:é|e) prix|gratuit/i;

/* ---------------------------------------------------------------- utilitaires */

const H = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const EUR = (n) => new Intl.NumberFormat('fr-FR').format(Math.round(n)) + ' €';
const PCT = (n) => new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(n * 100) + ' %';

const D = (iso) => new Date(iso + 'T12:00:00Z');
const DFMT = (d) => d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const DSHORT = (d) => d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', timeZone: 'UTC' });
const addDays = (d, n) => new Date(d.getTime() + n * 86400000);

const THEMES = { medical: '', support: 'theme-it', helpdesk: 'theme-it' };
const NICHES = {
  medical: 'Télésecrétariat médical',
  support: 'Support applicatif N1',
  helpdesk: 'Helpdesk IT N1',
};

/* Code d'accès dictable au téléphone : pas de 0/O/1/I/L, groupes de 4. */
function genCode() {
  const A = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  const pick = (n) => Array.from(randomBytes(n)).map((b) => A[b % A.length]).join('');
  return ['SLV', pick(4), pick(4), pick(4)].join('-');
}
const normCode = (s) => String(s).toUpperCase().replace(/[\s\-_.]/g, '');

/* ---------------------------------------------------------------- rendu du document */

function renderPlanning(deal) {
  const sign = D(deal.signaturePrevue);
  const etapes = deal.planning && deal.planning.length ? deal.planning : [
    { jours: 0, titre: 'Cadrage', detail: 'Périmètre, horaires, volumétrie, accès et référents figés avec le partenaire.' },
    { jours: 14, titre: 'Recrutement et préparation', detail: 'Agents identifiés, accès nominatifs ouverts, base de connaissances et escalades cadrées.' },
    { jours: 35, titre: 'Formation et shadowing', detail: 'Procédures du partenaire, double écoute et tests sur des flux accompagnés.' },
    { jours: 42, titre: 'Première prise de tickets accompagnée', detail: 'Premier traitement sous supervision ; la pleine autonomie est visée à 2,5–3,5 mois après la signature. L\'engagement de service devient opposable au premier mois plein en régime.' },
  ];
  const li = etapes.map((e, i) => {
    const d1 = addDays(sign, e.jours);
    const next = etapes[i + 1];
    const d2 = next ? addDays(sign, next.jours - 1) : addDays(sign, e.jours + 3);
    const label = `${DSHORT(d1)} → ${DSHORT(d2)}`;
    return `<li><span class="d">${H(label)}</span><span class="t"><b>${H(e.titre)}</b><span>${H(e.detail)}</span></span></li>`;
  }).join('');
  const prod = addDays(sign, (etapes[etapes.length - 1].jours || 18) + 3);
  return { html: `<ul class="dl-steps">${li}</ul>`, production: prod, signature: sign };
}

function renderGrille(deal) {
  const revDef = deal.reventeConseillee;
  let noteMinimum = '';
  const rows = deal.grille.map((r) => {
    const rev = r.revente ?? revDef;
    const marge = rev ? rev - r.gros : null;
    const hi = r.retenu ? ' class="hi"' : '';
    /* Palier a volume ferme : le prix ne s'obtient pas sur une intention de volume.
     * La note nomme le prix de repli au lieu de renvoyer a « palier inferieur » : le
     * partenaire doit pouvoir chiffrer la consequence sans relire le tableau. */
    const min = r.minimumFacturable;
    if (min) {
      noteMinimum = `<b>Le tarif de ${EUR(r.gros)} est conditionné à ${min} positions fermes
        facturables chaque mois.</b> Ce minimum reste dû même si vous utilisez moins de
        positions. Une réduction du minimum nécessite un avenant ; le tarif du palier
        correspondant s'applique à compter de sa date d'effet.`;
    }
    return `<tr${hi}>
      <td>${H(r.engagement)}${min ? ' <span style="opacity:.7">— volume ferme facturé</span>' : ''}</td>
      <td class="num">${EUR(r.gros)}</td>
      <td class="num">${rev ? EUR(rev) : '—'}</td>
      <td class="num">${marge != null ? `<b>${EUR(marge)}</b> <span style="opacity:.65">(${PCT(marge / rev)})</span>` : '—'}</td>
    </tr>`;
  }).join('');
  return `<div class="dl-scroll"><table class="dl-table">
    <thead><tr>
      <th>Volume engagé</th>
      <th class="num">Votre prix de gros<br /><span style="font-weight:400">€/mois/ETP</span></th>
      <th class="num">Revente conseillée<br /><span style="font-weight:400">€/mois/ETP</span></th>
      <th class="num">Votre marge<br /><span style="font-weight:400">€/mois/ETP</span></th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table></div>${noteMinimum ? `<p class="dl-note">${noteMinimum}</p>` : ''}`;
}

/* Depot d'activation : montant, plafond et imputation mensuelle (PRICING.md §3). */
function calcDepot(deal) {
  if (deal.depot === false) return null;
  const n = deal.etpRetenus || 1;
  const parPosition = deal.depot?.parPosition ?? DEPOT_PAR_POSITION;
  const plafond = deal.depot?.plafond ?? DEPOT_PLAFOND;
  const total = Math.min(parPosition * n, plafond);
  return { n, parPosition, plafond, total, mensuel: total / DEPOT_MOIS_IMPUTATION, plafonne: parPosition * n > plafond };
}

function renderDepot(deal) {
  const d = calcDepot(deal);
  if (!d) return '';
  return `
  <h2>L'activation</h2>
  <div class="dl-box">
    <p><b>Dépôt d'activation : ${EUR(d.total)}</b> — ${EUR(d.parPosition)} par position${d.plafonne ? `, plafonné à ${EUR(d.plafond)}` : ''}, réglé à la signature.</p>
    <p><b>Vous ne le payez pas, vous l'avancez.</b> Il est déduit de vos ${DEPOT_MOIS_IMPUTATION} premières
    factures, à raison de ${EUR(d.mensuel)} par mois. Si le contrat suit son cours, il ne vous coûte
    rien de plus — ce ne sont pas des frais.</p>
    <p>Il couvre le recrutement et la formation que nous engageons pour vous avant votre premier
    ticket. Il vous est <b>intégralement restitué</b> si vous annulez avant le démarrage de la mise
    en service, et ne nous reste acquis que si vous annulez <b>après</b>, une fois les agents
    recrutés et formés.</p>
    <p class="dl-note">Le cadrage et la mise en place restent offerts. Nous ne pratiquons pas de
    remise de lancement : vous revendez notre prestation, une remise gonflerait votre marge d'un
    mois sans vous aider à gagner un client. Ce que nous vous accordons à la place figure ci-dessous.</p>
  </div>`;
}

function renderGain(deal) {
  const r = deal.grille.find((x) => x.retenu) || deal.grille[0];
  const rev = r.revente ?? deal.reventeConseillee;
  if (!rev) return '';
  const n = deal.etpRetenus || 1;
  const mensuel = (rev - r.gros) * n;
  const annuel = mensuel * 12;
  const [ci1, ci2] = deal.coutInterneMensuel || [];
  const compare = ci1
    ? `<div class="s">À titre de comparaison, la même capacité recrutée en France vous coûte
       <b>${EUR(ci1)} à ${EUR(ci2)}</b> par mois et par poste, en coût complet (salaire chargé, congés,
       absences, recrutement, encadrement, matériel, locaux) — soit
       <b>${EUR(ci1 * n)} à ${EUR(ci2 * n)}</b> par mois pour ${n} poste${n > 1 ? 's' : ''}, avec 60 à 90 jours de délai de recrutement.</div>`
    : '';
  return `<div class="dl-gain">
    <div class="k">${EUR(annuel)}</div>
    <div class="l">de marge brute par an sur ${n} position${n > 1 ? 's' : ''} — soit ${EUR(mensuel)}/mois,
      sans recrutement, sans encadrement et sans risque social côté vous.</div>
    ${compare}
  </div>`;
}

function renderDoc(deal) {
  const niche = NICHES[deal.niche] || deal.niche;
  const plan = renderPlanning(deal);
  const emis = D(deal.dateEmission);
  const expire = addDays(emis, deal.validiteJours ?? 21);
  const expired = Date.now() > expire.getTime();

  const li = (arr) => (arr || []).map((x) => `<li>${H(x)}</li>`).join('');

  const garanties = [
    deal.sla && {
      t: `Engagement de service : ${deal.sla.kpi}`,
      d: `Seuil convenu ${deal.sla.seuil}, mesuré sur le périmètre cadré. En deçà sur un mois civil, ${deal.sla.avoir || '20 %'} d'avoir automatique sur la facture suivante — vous n'avez rien à réclamer.`,
    },
    {
      t: 'Non-sollicitation de vos clients finaux',
      d: `Salverys s'interdit contractuellement toute approche directe des clients finaux confiés, pendant le contrat et ${deal.nonSollicitationMois || 24} mois après. Vous restez le seul interlocuteur commercial.`,
    },
    {
      t: 'Réversibilité écrite',
      d: `Sur préavis de ${deal.preavisJours || 60} jours : restitution complète des procédures, de la base de connaissances et de l'historique, et accompagnement du transfert. Vous ne devenez jamais captif.`,
    },
    {
      t: 'Continuité de service',
      d: 'Chaque agent en double connexion (fibre + 4G), hub de repli sous onduleur et groupe électrogène, backup identifié par compte. Plan de continuité écrit et annexé au contrat.',
    },
    {
      t: 'Conformité',
      d: 'Sous-traitant au sens de l\'article 28 RGPD : DPA signé, clauses de transfert art. 46, comptes nommés, MFA, zéro téléchargement, aucune donnée stockée chez nous — nous travaillons dans vos outils.',
    },
  ].filter(Boolean);

  return `<div class="dl-doc">

  <div class="dl-band${expired ? ' dl-expired' : ''}">
    <span>Confidentiel — préparé pour ${H(deal.partenaire)}${deal.contact ? `, à l'attention de ${H(deal.contact)}` : ''}</span>
    <span class="dl-exp">${expired
      ? `Conditions à reconfirmer (validité dépassée le ${H(DFMT(expire))})`
      : `Conditions valables jusqu'au ${H(DFMT(expire))}`}</span>
  </div>

  <h1>${H(deal.partenaire)} × Salverys — ${H(niche)} en marque blanche</h1>
  <p class="dl-lead">${H(deal.accroche)}</p>

  ${deal.douleurs && deal.douleurs.length ? `
  <h2>Ce que vous nous avez dit le ${H(DFMT(D(deal.dateAppel)))}</h2>
  <div class="dl-quote"><ul>${li(deal.douleurs)}</ul></div>
  <p class="dl-note">Si un point est mal retranscrit, dites-le nous : tout ce qui suit en découle.</p>
  ` : ''}

  <h2>Le périmètre proposé</h2>
  <div class="dl-two">
    <div class="dl-box">
      <h3>Ce que nous prenons en charge</h3>
      <ul>${li(deal.perimetre?.inclus)}</ul>
    </div>
    <div class="dl-box out">
      <h3>Ce qui reste chez vous</h3>
      <ul>${li(deal.perimetre?.exclus)}</ul>
    </div>
  </div>

  <h2>Vos conditions tarifaires</h2>
  <p>${H(deal.grilleIntro || 'Prix arrêtés lors de notre échange, dégressifs selon le volume engagé. La colonne « revente conseillée » est un repère de marché — vous restez libre de votre prix de vente.')}</p>
  ${renderGrille(deal)}
  <p class="dl-note">ETP = position dédiée ${H(deal.heuresSemaine || '35 h/semaine')}, formée à vos procédures, sous votre marque.
  ${H(deal.grilleNote || 'Amplitudes étendues (soir, week-end, 7h-9h) chiffrées séparément. Facturation mensuelle, prélèvement SEPA. Grille révisable annuellement avec préavis de 90 jours.')}</p>

  <h2>Ce que ça vous rapporte</h2>
  ${renderGain(deal)}

  <h2>Démarrage — calendrier</h2>
  <p>Sur la base d'un accord au ${H(DFMT(plan.signature))}, vos flux sont traités en autonomie
  le <b>${H(DFMT(plan.production))}</b>. Chaque étape a un livrable écrit.</p>
  ${plan.html}

  ${deal.pilote ? `
  <h2>Le format d'entrée</h2>
  <div class="dl-box">
    <p>${H(deal.pilote)}</p>
  </div>` : ''}

  ${renderDepot(deal)}

  <h2>Vos garanties</h2>
  <div class="dl-g">
    ${garanties.map((g) => `<div><b>${H(g.t)}</b><span>${H(g.d)}</span></div>`).join('')}
  </div>

  ${deal.concessions && deal.concessions.length ? `
  <h2>Ce que nous vous accordons</h2>
  <p>Au-delà des garanties ci-dessus, accordé dans le cadre de cet accord précis :</p>
  <div class="dl-accord"><ul>
    ${deal.concessions.map((c) => `<li><b>${H(c.titre)}</b> — ${H(c.detail)}</li>`).join('')}
  </ul></div>
  ` : ''}

  ${deal.attendus && deal.attendus.length ? `
  <h2>Ce dont nous avons besoin de votre côté</h2>
  <p>Le calendrier ci-dessus tient si ces éléments sont disponibles à la signature :</p>
  <ul>${li(deal.attendus)}</ul>
  ` : ''}

  <div class="dl-cta">
    <h3>${H(deal.ctaTitre || 'La suite')}</h3>
    <p>${H(deal.ctaTexte || 'Un dernier point de 20 minutes pour valider le périmètre et la date de démarrage, puis nous envoyons le contrat et le DPA.')}</p>
    <div class="row">
      ${deal.rdvUrl ? `<a class="btn btn-primary" href="${H(deal.rdvUrl)}" target="_blank" rel="noopener">Réserver le créneau</a>` : ''}
      <a class="btn btn-outline" href="mailto:${H(deal.emailContact || 'valerien@salverys.fr')}?subject=${encodeURIComponent('Proposition ' + deal.partenaire + ' — suite')}">Répondre par email</a>
    </div>
    <p class="dl-note" style="margin-top:16px">${H(deal.signataire || 'Valérien Rakotosalama — Salverys')} · ${H(deal.emailContact || 'valerien@salverys.fr')}${deal.telephone ? ' · ' + H(deal.telephone) : ''}</p>
  </div>

  <div class="dl-wm">${Array.from({ length: 12 }, () => H(deal.partenaire) + ' · confidentiel · ' + H(DFMT(emis))).join('<br />')}</div>
</div>`;
}

/* ---------------------------------------------------------------- build */

const [, , jsonPath, codeArg] = process.argv;
if (!jsonPath) {
  const dir = join(root, 'tools/deals');
  let dispo = [];
  try { dispo = readdirSync(dir).filter((f) => f.endsWith('.json')); } catch (_) {}
  console.error('Usage : node tools/deal-build.mjs tools/deals/<deal>.json ["CODE-EXISTANT"]');
  if (dispo.length) console.error('Deals disponibles : ' + dispo.join(', '));
  process.exit(1);
}

const deal = JSON.parse(readFileSync(resolve(root, jsonPath), 'utf8'));
for (const champ of ['slug', 'partenaire', 'niche', 'dateEmission', 'signaturePrevue', 'grille']) {
  if (!deal[champ]) { console.error(`✗ Champ manquant dans ${jsonPath} : ${champ}`); process.exit(1); }
}

/* Deal archive (signe ou perdu) : la page sort du depot, donc du prochain build (tools/build-site.sh). */
if (deal.archive) {
  const cible = join(root, `espace/${deal.slug}-${deal.token}.html`);
  if (deal.token && existsSync(cible)) {
    rmSync(cible);
    console.log(`✓ Deal archive : espace/${deal.slug}-${deal.token}.html supprime, acces revoque.`);
  } else {
    console.log('✓ Deal archive : aucune page publiee.');
  }
  process.exit(0);
}

/* Le gabarit actuel est concu pour le modele ETP (colonnes €/mois/ETP). Le telesec MB se
 * facture a l'appel traite par creneau (PRICING.md §2) : refuser explicitement plutot
 * que produire un document faux. */
if (deal.niche === 'medical') {
  console.error('✗ Le modele « a l\'appel par creneau » (PRICING.md §2) n\'est pas encore');
  console.error('  couvert par ce gabarit, concu pour le modele ETP. Ne pas forcer.');
  process.exit(1);
}

/* Plancher : aucune proposition sous le cout marginal + 20 %. */
const sousPlancher = deal.grille.filter((r) => r.gros < PLANCHER_ETP);
if (sousPlancher.length) {
  console.error(`✗ Plancher viole (${PLANCHER_ETP} € = cout agent ${COUT_AGENT} € + 20 %, FINANCE-PREVISIONNEL.md §3) :`);
  for (const r of sousPlancher) console.error(`  · ${r.engagement} a ${EUR(r.gros)}`);
  console.error('  Document non genere. Remonter le prix, ou assumer la decision et ajuster PLANCHER_ETP.');
  process.exit(1);
}

/* Alerte non bloquante : marge brute Salverys sous le seuil de confort. */
for (const r of deal.grille) {
  const marge = (r.gros - COUT_AGENT) / r.gros;
  if (marge < MARGE_ALERTE) {
    console.warn(`⚠ ${r.engagement} a ${EUR(r.gros)} : marge brute ${PCT(marge)} (< ${PCT(MARGE_ALERTE)}) — palier sous pression.`);
  }
}

/* Palier a volume ferme (PRICING.md §1, modele B) : tout palier retenu doit
 * porter un minimum facturable, sinon Salverys encaisse le risque de sous-consommation du
 * partenaire (positions annoncees pour obtenir le prix, moins consommees, banc a notre
 * charge — et en salariat le banc porte un cout de sortie). */
{
  const retenue = deal.grille.find((r) => r.retenu);
  const n = deal.etpRetenus || 0;
  if (n >= MINIMUM_FACTURABLE_SEUIL && retenue && !retenue.minimumFacturable) {
    console.error(`✗ Palier a ${n} positions retenu sans minimum facturable (PRICING.md §1, modele B).`);
    console.error(`  Ajouter "minimumFacturable" sur la ligne « ${retenue.engagement} » — le minimum du palier`);
    console.error('  (1-4 ETP : 1 · 5-8 ETP : 5 · 9+ ETP : 9), ou retenir le palier inferieur.');
    console.error('  Chaque tarif s\'achete avec un volume ferme, pas avec une intention.');
    process.exit(1);
  }
  for (const r of deal.grille) {
    if (r.minimumFacturable != null && !(Number.isInteger(r.minimumFacturable) && r.minimumFacturable > 0)) {
      console.error(`✗ minimumFacturable invalide sur « ${r.engagement} » : entier positif attendu.`);
      process.exit(1);
    }
  }
}

/* Plus de remise de lancement en marque blanche (PRICING.md §3) : intercepter une remise
 * reintroduite dans le texte du pilote ou de la note de grille. Le pilote reste un perimetre
 * restreint, au tarif du palier. */
for (const [champ, texte] of [['pilote', deal.pilote], ['grilleIntro', deal.grilleIntro], ['grilleNote', deal.grilleNote]]) {
  if (texte && REMISE_INTERDITE.test(texte)) {
    console.error(`✗ Remise detectee dans « ${champ} » : "${texte.match(REMISE_INTERDITE)[0]}".`);
    console.error('  Plus de remise sur le prix de gros en marque blanche (PRICING.md §3, 2026-08-03).');
    console.error('  Le pilote est un PERIMETRE restreint au tarif du palier. Pour donner quelque chose,');
    console.error('  utiliser concessions[] : sortie 30 j · exclusivite nominative · appui avant-vente 48 h.');
    process.exit(1);
  }
}

/* Token d'URL : généré une fois, conservé dans le JSON pour ne pas casser un lien déjà envoyé. */
let tokenNouveau = false;
if (!deal.token) {
  deal.token = randomBytes(9).toString('base64url');
  tokenNouveau = true;
  writeFileSync(resolve(root, jsonPath), JSON.stringify(deal, null, 2) + '\n');
}

const code = codeArg ? normCode(codeArg) : normCode(genCode());
const codeAffiche = codeArg || code.replace(/^SLV(.{4})(.{4})(.{4})$/, 'SLV-$1-$2-$3');

const contenu = renderDoc(deal);
const template = readFileSync(join(root, 'tools/deal-template.html'), 'utf8');

const salt = randomBytes(16);
const iv = randomBytes(12);
const key = pbkdf2Sync(code, salt, ITER, 32, 'sha256');
const cipher = createCipheriv('aes-256-gcm', key, iv);
const chiffre = Buffer.concat([cipher.update(contenu, 'utf8'), cipher.final(), cipher.getAuthTag()]);

const vault = JSON.stringify({
  salt: salt.toString('base64'), iv: iv.toString('base64'), iter: ITER, data: chiffre.toString('base64'),
});

const page = template
  .replaceAll('__BASE__', '../')
  .replaceAll('__THEME__', THEMES[deal.niche] ?? '')
  .replaceAll('__SLUG__', deal.slug)
  .replace('__VAULT__', vault);

mkdirSync(join(root, 'espace'), { recursive: true });
const out = `espace/${deal.slug}-${deal.token}.html`;
writeFileSync(join(root, out), page);

/* Vérification systématique : le déchiffré doit être identique et contenir les prix du deal. */
{
  const buf = Buffer.from(JSON.parse(vault).data, 'base64');
  const d = createDecipheriv('aes-256-gcm', pbkdf2Sync(code, salt, ITER, 32, 'sha256'), iv);
  d.setAuthTag(buf.subarray(buf.length - 16));
  const clair = Buffer.concat([d.update(buf.subarray(0, buf.length - 16)), d.final()]).toString('utf8');
  if (clair !== contenu) { console.error('✗ Vérification : le déchiffré ne correspond pas.'); process.exit(1); }
  const manquants = deal.grille.map((r) => EUR(r.gros)).filter((p) => !clair.includes(p));
  if (manquants.length) { console.error('✗ Vérification : prix absents du document : ' + manquants.join(', ')); process.exit(1); }
  const dep = calcDepot(deal);
  if (dep && !clair.includes(EUR(dep.total))) {
    console.error(`✗ Vérification : dépôt d'activation (${EUR(dep.total)}) absent du document.`); process.exit(1);
  }
  if (clair.includes('__') ) { console.error('✗ Vérification : placeholder non remplacé dans le document.'); process.exit(1); }
}

console.log(`✓ ${out}`);
console.log(`  URL      : https://salverys.fr/${out}`);
console.log(`  Code     : ${codeAffiche}${codeArg ? ' (fourni)' : '  ← à dicter au partenaire, non stocké'}`);
console.log(`  Chiffré  : ${chiffre.length} octets · PBKDF2 ${ITER} itérations`);

/* Recapitulatif economique avant envoi : ce qui est engage et ce qui est concede doit etre
 * vu, pas subi. */
{
  const dep = calcDepot(deal);
  if (dep) {
    console.log(`  Depot    : ${EUR(dep.total)} a la signature (${EUR(dep.parPosition)} × ${dep.n} position${dep.n > 1 ? 's' : ''}${dep.plafonne ? `, plafonne a ${EUR(dep.plafond)}` : ''})`);
    console.log(`             impute ${EUR(dep.mensuel)}/mois sur ${DEPOT_MOIS_IMPUTATION} mois — ne pas lancer le recrutement avant encaissement.`);
  } else {
    console.log('  Depot    : AUCUN (depot:false) — verifier que c\'est bien voulu (PRICING.md §3).');
  }
  const retenue = deal.grille.find((r) => r.retenu);
  if (retenue?.minimumFacturable) {
    console.log(`  Minimum  : ${retenue.minimumFacturable} positions facturees/mois, consommees ou non (palier « ${retenue.engagement} »).`);
  }
}
if (deal.concessions && deal.concessions.length) {
  console.log(`  Concessions accordées (${deal.concessions.length}) :`);
  for (const c of deal.concessions) console.log(`   · ${c.titre}`);
}
if (tokenNouveau) console.log(`  Token d'URL écrit dans ${basename(jsonPath)} — ne plus le modifier, le lien en dépend.`);
