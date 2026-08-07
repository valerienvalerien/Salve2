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
 * Cout marginal d'un agent : ~700 €/mois. Plancher absolu = cout + ~20 % = 840 €/ETP.
 * (PRICING.md §3 annoncait 540 €, valeur heritee du modele salarie v1 abandonne le
 * 2026-06-10 : negocier avec ce chiffre en tete permet de signer a perte.)
 * Le builder refuse de produire un document sous le plancher : on ne peut pas, sous
 * pression en closing, generer une proposition qui met l'entreprise en perte. */
const COUT_AGENT = 700;
const PLANCHER_ETP = 840;
const MARGE_ALERTE = 0.50;

/* Depot d'activation MB (PRICING.md §3.a, decide 2026-08-03) : 900 €/position, plafond
 * 2 700 €, imputable sur les 3 premieres factures a 300 €/position/mois. Ce n'est pas des
 * frais : le partenaire qui va au bout ne paie rien de plus. Il couvre l'onboarding reel
 * (~1 600 € sur 3 positions) s'il s'arrete, et fait rentrer du cash a J0 au lieu de J+30. */
const DEPOT_PAR_POSITION = 900;
const DEPOT_PLAFOND = 2700;
const DEPOT_IMPUTATION_MENSUELLE = 300;
const DEPOT_MOIS_IMPUTATION = 3;

/* Palier 5+ conditionne a un volume ferme facture (PRICING.md §3, decide 2026-08-03) :
 * le prix le plus bas de la grille s'achete avec un volume engage, pas avec une intention.
 * Sans minimum facturable, le palier le moins marge (~48 %) porterait en plus le risque de
 * sous-consommation du partenaire. */
const MINIMUM_FACTURABLE_SEUIL = 5;

/* Plus de remise de lancement en marque blanche (PRICING.md §3.b, decide 2026-08-03) :
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
/* Libelles lus par des non-informaticiens : on decrit le service, on n'empile pas les
 * sigles metier. « Support applicatif N1 » et « Helpdesk IT N1 » ne disent rien a une
 * direction ou a une comptabilite — et c'est ce libelle qui compose le titre du document. */
const NICHES = {
  medical: 'Secrétariat médical à distance',
  support: 'Assistance aux utilisateurs de votre logiciel',
  helpdesk: 'Assistance informatique aux utilisateurs',
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
    { jours: 0, titre: 'On fixe le cadre', detail: 'Nous décidons ensemble de ce que nous prenons en charge et de ce qui reste chez vous. Vous nous ouvrez les accès, chacun désigne son interlocuteur, et nous relevons les volumes de départ.' },
    { jours: 4, titre: 'Nous formons l\'équipe', detail: 'Nous mettons par écrit les réponses aux cas courants, la marche à suivre, les situations à vous transmettre et le ton à employer. Tout est écrit avant le premier contact avec un utilisateur.' },
    { jours: 11, titre: 'Démarrage accompagné', detail: 'Nos agents commencent à traiter vos demandes, avec un contrôle qualité tous les jours et des corrections immédiates.' },
    { jours: 18, titre: 'Fonctionnement normal', detail: 'L\'équipe travaille en autonomie, vous recevez un compte rendu chaque semaine, et notre engagement de délai s\'applique.' },
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
  const rows = deal.grille.map((r, i) => {
    const rev = r.revente ?? revDef;
    const marge = rev ? rev - r.gros : null;
    const hi = r.retenu ? ' class="hi"' : '';
    /* Palier a volume ferme : le prix ne s'obtient pas sur une intention de volume.
     * La note nomme le prix de repli au lieu de renvoyer a « palier inferieur » : le
     * partenaire doit pouvoir chiffrer la consequence sans relire le tableau. */
    const min = r.minimumFacturable;
    if (min) {
      const repli = deal.grille[i - 1];
      noteMinimum = `<b>Le prix de ${EUR(r.gros)} suppose que vous vous engagiez fermement
        sur ${min} postes.</b> Vous payez ces ${min} postes tous les mois, même si vous n'en
        utilisez que ${min - 2} ou ${min - 1} : c'est cet engagement qui permet le prix bas.`
        + (repli
          ? ` Si un mois vous en facturez moins de ${min}, ce mois-là vous est facturé
             ${EUR(repli.gros)} par poste utilisé, soit le prix de la ligne « ${repli.engagement} ».`
          : ` Si un mois vous en facturez moins de ${min}, ce mois-là vous est facturé au prix
             de la ligne du dessus, pour les postes réellement utilisés.`);
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
      <th>Nombre de postes</th>
      <th class="num">Ce que vous nous payez<br /><span style="font-weight:400">par poste et par mois</span></th>
      <th class="num">Ce que vous pouvez facturer<br /><span style="font-weight:400">par poste et par mois</span></th>
      <th class="num">Ce qu'il vous reste<br /><span style="font-weight:400">par poste et par mois</span></th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table></div>${noteMinimum ? `<p class="dl-note">${noteMinimum}</p>` : ''}`;
}

/* Depot d'activation : montant, plafond et imputation mensuelle (PRICING.md §3.a). */
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
  <h2>Le versement de départ</h2>
  <div class="dl-box">
    <p><b>Versement de départ : ${EUR(d.total)}</b> — ${EUR(d.parPosition)} par poste${d.plafonne ? `, avec un maximum de ${EUR(d.plafond)}` : ''}, réglé à la signature.</p>
    <p><b>Vous ne le payez pas, vous l'avancez.</b> Il est déduit de vos ${DEPOT_MOIS_IMPUTATION} premières
    factures, à raison de ${EUR(d.mensuel)} par mois. Au bout de ${DEPOT_MOIS_IMPUTATION} mois, vous
    l'avez entièrement récupéré : ce ne sont pas des frais en plus, c'est une avance.</p>
    <p>Elle couvre les personnes que nous recrutons et formons pour vous avant même la première
    demande traitée. Vous la récupérez <b>en totalité</b> si vous renoncez avant que nous ayons
    commencé à recruter. Elle ne nous reste que si vous renoncez <b>après</b>, une fois les
    personnes recrutées et formées pour votre compte.</p>
    <p class="dl-note">La mise en place, elle, reste offerte. Nous ne faisons pas de remise pour
    démarrer : vous revendez notre prestation, une remise augmenterait votre marge pendant un mois
    sans vous aider à gagner un client. Ce que nous vous accordons à la place figure plus bas.</p>
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
    ? `<div class="s">Pour comparer : les mêmes personnes recrutées en France vous coûteraient
       <b>${EUR(ci1)} à ${EUR(ci2)}</b> par mois et par poste, tout compris — salaire, charges,
       congés, absences, recrutement, encadrement, matériel et bureaux. Soit
       <b>${EUR(ci1 * n)} à ${EUR(ci2 * n)}</b> par mois pour ${n} poste${n > 1 ? 's' : ''}, et 2 à 3 mois
       d'attente avant que quelqu'un soit en poste.</div>`
    : '';
  return `<div class="dl-gain">
    <div class="k">${EUR(annuel)}</div>
    <div class="l">c'est ce qu'il vous reste par an sur ${n} poste${n > 1 ? 's' : ''}, soit ${EUR(mensuel)} par mois.
      Sans recrutement à mener, sans personne à encadrer, et sans embauche à porter.</div>
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

  /* Ces cinq garanties sont lues par des gens qui ne font pas d'informatique (direction,
   * comptabilite, juridique). Elles sont donc redigees sans sigle ni terme metier : ce qui
   * est promis doit se comprendre a la premiere lecture, sinon ce n'est pas une garantie. */
  const garanties = [
    deal.sla && {
      t: `Nous nous engageons sur un délai : ${deal.sla.kpi}`,
      d: `L'objectif convenu est de ${deal.sla.seuil}. Si nous ne le tenons pas sur un mois, vous recevez ${deal.sla.avoir || '20 %'} de remise sur la facture du mois suivant. C'est automatique : vous n'avez aucune démarche à faire, aucun courrier à envoyer.`,
    },
    {
      t: 'Nous ne démarchons jamais vos clients',
      d: `Le contrat nous interdit de contacter commercialement les clients que vous nous confiez, pendant toute la durée du contrat et ${deal.nonSollicitationMois || 24} mois après son terme. Vous restez leur seul interlocuteur.`,
    },
    {
      t: 'Vous pouvez partir sans rester bloqué',
      d: `Si vous décidez d'arrêter, vous nous prévenez ${deal.preavisJours || 60} jours à l'avance et nous vous rendons tout ce qui a été construit pendant le contrat : vos façons de faire mises par écrit, la documentation accumulée et l'historique de ce qui a été traité. Nous accompagnons aussi la reprise par vos équipes ou par un autre prestataire.`,
    },
    {
      t: 'Le service ne s\'arrête pas',
      d: 'Chaque personne travaille avec deux connexions internet indépendantes, pour qu\'une panne de l\'une n\'arrête rien. Nos locaux ont un groupe électrogène en cas de coupure de courant. Et pour chaque client, une personne de remplacement est déjà formée et prête à prendre le relais en cas d\'absence.',
    },
    {
      t: 'Vos données restent chez vous',
      d: 'Nous travaillons directement dans vos logiciels : rien n\'est copié ni conservé chez nous, et le téléchargement de fichiers est bloqué sur nos postes. Chaque personne a son propre compte à son nom. Le contrat de protection des données exigé par la réglementation européenne est signé avec vous.',
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

  <h2>Qui fait quoi</h2>
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

  <h2>Vos prix</h2>
  <p>${H(deal.grilleIntro || 'Prix arrêtés lors de notre échange. Plus vous engagez de postes, moins le poste vous coûte. La colonne « ce que vous pouvez facturer » est un repère de marché — vous restez libre de votre prix de vente.')}</p>
  ${renderGrille(deal)}
  <p class="dl-note">Un poste, c'est une personne à temps plein — ${H(deal.heuresSemaine || '35 h par semaine')} — formée à vos façons de faire et qui répond sous votre nom.
  ${H(deal.grilleNote || 'Les horaires en dehors de ce qui est prévu ci-dessus (soirée, week-end, très tôt le matin) sont chiffrés à part. Facturation mensuelle, prélèvement automatique. Les prix sont revus une fois par an, avec un préavis de 90 jours.')}</p>

  <h2>Ce que ça vous rapporte</h2>
  ${renderGain(deal)}

  <h2>Le calendrier de démarrage</h2>
  <p>Si nous nous mettons d'accord le ${H(DFMT(plan.signature))}, l'équipe travaille seule à partir
  du <b>${H(DFMT(plan.production))}</b>. Chaque étape se termine par un document écrit que vous recevez.</p>
  ${plan.html}

  ${deal.pilote ? `
  <h2>Comment on commence</h2>
  <div class="dl-box">
    <p>${H(deal.pilote)}</p>
  </div>` : ''}

  ${renderDepot(deal)}

  <h2>Vos garanties</h2>
  <div class="dl-g">
    ${garanties.map((g) => `<div><b>${H(g.t)}</b><span>${H(g.d)}</span></div>`).join('')}
  </div>

  ${deal.concessions && deal.concessions.length ? `
  <h2>Ce que nous vous accordons en plus</h2>
  <p>En plus des garanties ci-dessus, et uniquement dans le cadre de cet accord :</p>
  <div class="dl-accord"><ul>
    ${deal.concessions.map((c) => `<li><b>${H(c.titre)}</b> — ${H(c.detail)}</li>`).join('')}
  </ul></div>
  ` : ''}

  ${deal.attendus && deal.attendus.length ? `
  <h2>Ce dont nous avons besoin de votre côté</h2>
  <p>Le calendrier tient si nous recevons ces éléments au moment de la signature :</p>
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

/* Deal archive (signe ou perdu) : la page sort du depot, donc du build Netlify. */
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
 * facture a l'appel traite par creneau (PRICING.md §1.b) : refuser explicitement plutot
 * que produire un document faux. */
if (deal.niche === 'medical') {
  console.error('✗ Le modele « a l\'appel par creneau » (PRICING.md §1.b) n\'est pas encore');
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

/* Palier a volume ferme (PRICING.md §3) : un deal retenu a 5 positions ou plus doit porter
 * un minimum facturable, sinon le palier le moins marge encaisse en plus le risque de
 * sous-consommation du partenaire (5 annoncees, 3 consommees, banc a notre charge). */
{
  const retenue = deal.grille.find((r) => r.retenu);
  const n = deal.etpRetenus || 0;
  if (n >= MINIMUM_FACTURABLE_SEUIL && retenue && !retenue.minimumFacturable) {
    console.error(`✗ Palier a ${n} positions retenu sans minimum facturable (PRICING.md §3, decision 2026-08-03).`);
    console.error(`  Ajouter "minimumFacturable": ${MINIMUM_FACTURABLE_SEUIL} sur la ligne « ${retenue.engagement} »,`);
    console.error('  ou retenir le palier inferieur. Le prix de volume s\'achete avec un volume ferme.');
    process.exit(1);
  }
  for (const r of deal.grille) {
    if (r.minimumFacturable != null && !(Number.isInteger(r.minimumFacturable) && r.minimumFacturable > 0)) {
      console.error(`✗ minimumFacturable invalide sur « ${r.engagement} » : entier positif attendu.`);
      process.exit(1);
    }
  }
}

/* Plus de remise de lancement en marque blanche (PRICING.md §3.b) : intercepter une remise
 * reintroduite dans le texte du pilote ou de la note de grille. Le pilote reste un perimetre
 * restreint, au tarif du palier. */
for (const [champ, texte] of [['pilote', deal.pilote], ['grilleIntro', deal.grilleIntro], ['grilleNote', deal.grilleNote]]) {
  if (texte && REMISE_INTERDITE.test(texte)) {
    console.error(`✗ Remise detectee dans « ${champ} » : "${texte.match(REMISE_INTERDITE)[0]}".`);
    console.error('  Plus de remise sur le prix de gros en marque blanche (PRICING.md §3.b, 2026-08-03).');
    console.error('  Le pilote est un PERIMETRE restreint au tarif du palier. Pour donner quelque chose,');
    console.error('  utiliser concessions[] : sortie 30 j · exclusivite 12 mois · appui avant-vente 48 h.');
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
    console.log('  Depot    : AUCUN (depot:false) — verifier que c\'est bien voulu (PRICING.md §3.a).');
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
