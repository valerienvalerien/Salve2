/** Prévision de trésorerie Salverys, en euros HT. Hypothèses explicites, pas de données réelles.
 * Le coussin de 10 % est soustrait du cash disponible comme réserve prudente,
 * même si ce n'est pas une charge de paie effectivement payée.
 *
 * Ce fichier est la SOURCE DE VÉRITÉ du calcul. Il est recopié à l'identique dans
 * projection-finances-salverys.html (bloc délimité par les marqueurs MODELE FINANCIER)
 * pour que la page fonctionne hors serveur ; finance-model.test.mjs vérifie l'absence de dérive.
 */

/** Grilles de prix par position et par mois.
 * `mb` : [tarif d'entrée, tarif volume] de PRICING.md (grille partenaire en vigueur).
 *   Les tranches ne sont PAS rétroactives : les quatre premières positions restent au
 *   tarif d'entrée quel que soit le volume total, la cinquième et les suivantes passent
 *   au tarif volume. C'est ce qui garantit qu'ajouter une position ajoute toujours de la
 *   marge — une remise rétroactive s'applique aussi aux positions déjà vendues, et peut
 *   coûter plus que la position gagnée (décision 2026-09-18, cf. AUDIT-FINANCE §1).
 *   Le palier 9+ à 1 350 / 1 550 € est supprimé : il faisait décrocher le résultat de
 *   1 503 € (support) et 1 703 € (helpdesk) au passage de 8 à 9 positions.
 *
 * Il n'y a PAS de grille en direct (client final). Un contrat direct se chiffre au prix
 * saisi, contrat par contrat — voir DIRECT_REFERENCE ci-dessous. */
export const OFFERS = Object.freeze({
  support: Object.freeze({ mb: Object.freeze([1700, 1500]) }),
  helpdesk: Object.freeze({ mb: Object.freeze([2000, 1750]) }),
});

/** Nombre de positions facturées au tarif d'entrée avant le passage au tarif volume. */
export const MB_ENTRY_POSITIONS = 4;

/**
 * ⚠️ REPÈRE NON VALIDÉ, PAS UNE GRILLE. Fourchettes [bas, haut] relevées dans
 * `99-Archives/PRICING-REGISTRE-INTERNE-2026-09-15.md` §3, sous le titre « référence
 * interne », issues de l'évaluation stratégique du 2026-06-10.
 *
 * Trois raisons de ne jamais s'en servir pour chiffrer automatiquement :
 *  1. Aucune décision datée ne fixe un tarif direct, contrairement à la grille marque
 *     blanche (révisée le 2026-08-14, plancher arbitré, paliers déplacés le 2026-09-18).
 *  2. Les sources de cette étude sont des sites de télésecrétariat médical et des BPO
 *     généralistes ; aucune ne publie un prix de position dédiée en helpdesk IT ou en
 *     support SaaS en direct. L'étude qualifie elle-même ses valeurs d'« estimations
 *     recoupées ».
 *  3. `CLAUDE.md` interdit tout claim chiffré sans étude datée du métier avec source
 *     vérifiable, et laisse les anciens benchmarks au registre interne.
 *
 * Le moteur ne l'utilise donc jamais pour calculer : un contrat direct porte son prix
 * saisi. Cette constante n'existe que pour être AFFICHÉE comme repère, étiquetée.
 * Le direct est par ailleurs GELÉ en prospection depuis le 2026-09-07 : il sert à
 * chiffrer un entrant, pas à planifier une conquête.
 */
export const DIRECT_REFERENCE = Object.freeze({
  support: Object.freeze([1900, 2400]),
  helpdesk: Object.freeze([2200, 2800]),
});

export const METIER_LABELS = Object.freeze({ support: 'Support applicatif N1', helpdesk: 'Helpdesk IT N1' });

/** Plancher de négociation de PRICING.md §1. Ce n'est PAS un seuil de rentabilité. */
export const PRICE_FLOOR = 920;

export const ASSUMPTIONS = Object.freeze({
  exchangeArPerEuro: 5000,
  /** Brut mensuel du MANAGER, et de l'agent quand agentAllInAr vaut 0. */
  grossSalaryAr: 3250000,
  /** Coût complet mensuel d'un agent en ariary, TOUT COMPRIS : rémunération, charges
   * employeur, congés, absences, formation non facturable et provision de remplacement
   * (arbitrage A7 du 2026-09-24, BMC v1.3). Quand il est renseigné, il remplace le calcul
   * brut + cotisations + coussin pour l'agent. 0 = revenir au calcul par le brut.
   * À valider par la paie : le brut de 3,25 M Ar chargé (≈ 3,68 M Ar) ne tient pas dedans. */
  agentAllInAr: 3500000,
  smeAr: 300000,
  employerRate: 0.18,
  voipPerAgent: 30,
  voipPerManager: 0,
  contingency: 0.10,
  toolsPerMonth: 68,
  otherMonthlyCost: 0,
  /** Structure décaissée tant qu'au moins un agent est en poste (arbitrage A8, BMC v1.3,
   * hypothèse pessimiste) : encadrement / QA 600 € + loyer 60 m² 720 € + double fibre
   * 300 € + RH / paie / comptable 300 € + énergie 300 €. Les outils restent dans
   * toolsPerMonth. L'encadrement est un forfait prévu pour 5 positions : au-delà, un
   * manager s'ajoute (founderSupervisesUpTo) et le forfait est à recalculer. */
  structureMonthly: 2220,
  /** Poste de travail (laptop + écran, 4 M Ar) acheté à la signature, par position. */
  equipmentPerPosition: 800,
  /** Groupe électrogène + UPS (2,25 M Ar), achetés une fois, au premier recrutement. */
  equipmentBase: 450,
  onboardingBase: 400,
  onboardingPerPosition: 400,
  /** Dépôt rendu par crédit de facture : SUPPRIMÉ de la grille le 2026-09-24 (arbitrage
   * A1), remplacé par les frais de mise en service ci-dessous. Gardé à 0 pour simuler
   * l'ancien mécanisme si besoin. */
  depositPerPosition: 0,
  invoiceCreditPerPosition: 0,
  invoiceCreditMonths: 3,
  /** Frais de mise en service NON remboursables, encaissés à la signature et jamais
   * imputés sur les mensualités : 490 €/position (PRICING.md §3, arbitrage A1 du
   * 2026-09-24). Ils financent recrutement, configuration et formation initiale. */
  activationFeePerDeal: 0,
  activationFeePerPosition: 490,
  paymentDelayMonths: 1,
  hireDelayMonths: 1,
  firstInvoiceDelayMonths: 2,
  managerCapacity: 8,
  /** Nombre de positions que le fondateur encadre lui-même avant d'embaucher un manager.
   * 5 depuis l'arbitrage A10 du 2026-09-24 : le fondateur encadre le lancement (3 + 2
   * positions), le forfait d'encadrement de structureMonthly couvrant la QA. 0 = un
   * manager dès la première position. */
  founderSupervisesUpTo: 5,
  /** Part du CA encaissé perdue en impayés ; 0 par défaut, à régler sur l'expérience réelle. */
  badDebtRate: 0,
  /** Charges proportionnelles au CA encaissé : frais bancaires et risque de change, 1 %
   * (arbitrage A9, BMC v1.3). Taxes non comprises : taux non vérifiés. */
  revenueChargeRate: 0.01,
  /** Provision pour avoirs SLA, en part du CA encaissé : 2 % (arbitrage A9). Un avoir de
   * 20 % au plus un mois sur douze vaut 1,67 % du CA annuel. */
  slaReserveRate: 0.02,
  initialCash: 0,
});

/** Prix marque blanche de la n-ième position (PRICING.md §1, modèle B).
 * Attention : c'est le prix de CETTE position, pas le prix moyen du contrat.
 * Les tranches n'étant pas rétroactives, utiliser mbRevenue() pour un CA. */
export function pricePerPosition(metier, position) {
  if (!OFFERS[metier]) throw new Error(`Métier inconnu : ${metier}`);
  if (!Number.isInteger(position) || position < 1) throw new Error('Nombre de positions invalide');
  return OFFERS[metier].mb[position > MB_ENTRY_POSITIONS ? 1 : 0];
}

/** CA mensuel marque blanche d'un contrat de n positions, tranche par tranche. */
export function mbRevenue(metier, positions) {
  if (!OFFERS[metier]) throw new Error(`Métier inconnu : ${metier}`);
  if (!Number.isInteger(positions) || positions < 1) throw new Error('Nombre de positions invalide');
  const [entree, volume] = OFFERS[metier].mb;
  return Math.min(positions, MB_ENTRY_POSITIONS) * entree + Math.max(0, positions - MB_ENTRY_POSITIONS) * volume;
}

/** Détail des tranches d'un contrat marque blanche, pour l'affichage d'un devis. */
export function mbBreakdown(metier, positions) {
  const [entree, volume] = OFFERS[metier].mb;
  const base = Math.min(positions, MB_ENTRY_POSITIONS);
  const extra = Math.max(0, positions - MB_ENTRY_POSITIONS);
  const lignes = [{ count: base, price: entree }];
  if (extra) lignes.push({ count: extra, price: volume });
  return lignes;
}


function tarifOf(deal) {
  return deal.tarif ?? (deal.priceOverride != null || deal.price != null ? 'libre' : 'mb');
}

/**
 * CA mensuel d'un contrat selon son mode de tarification.
 * tarif = 'mb' (grille partenaire, par tranches) | 'direct' (client final) | 'libre'.
 * Seul 'mb' a une grille : 'direct' et 'libre' portent le prix saisi, parce qu'aucune
 * grille directe n'a jamais été arbitrée (voir DIRECT_REFERENCE).
 */
export function dealRevenue(deal) {
  const tarif = tarifOf(deal);
  if (tarif === 'mb') return mbRevenue(deal.metier, deal.positions);
  if (tarif === 'direct' || tarif === 'libre') {
    const p = deal.price ?? deal.priceOverride;
    if (typeof p !== 'number' || !Number.isFinite(p) || p < 0) {
      throw new Error(tarif === 'direct'
        ? 'Prix client final à saisir : aucune grille directe n\'est arbitrée'
        : 'Prix libre invalide');
    }
    return deal.positions * p;
  }
  throw new Error(`Mode de tarification inconnu : ${tarif}`);
}

/** Prix MOYEN par position. En marque blanche au-delà de quatre positions, ce n'est
 * aucun des deux prix de la grille : c'est la moyenne des tranches. */
export function resolvePrice(deal) {
  return dealRevenue(deal) / deal.positions;
}

/** Prix de la DERNIÈRE position vendue. C'est lui qui doit rester au-dessus du plancher :
 * c'est le prix auquel on accepterait la position suivante. */
export function marginalPrice(deal) {
  return tarifOf(deal) === 'mb' ? pricePerPosition(deal.metier, deal.positions) : resolvePrice(deal);
}

/** Salaire chargé mensuel d'une personne, en euros, cotisations plafonnées à 8 × SME. */
export function chargedSalary(a = ASSUMPTIONS) {
  return (a.grossSalaryAr + Math.min(a.grossSalaryAr, 8 * a.smeAr) * a.employerRate) / a.exchangeArPerEuro;
}

/** Coût mensuel d'un agent. Avec un coût complet tout compris (agentAllInAr), le coussin
 * ne s'applique pas : les provisions y sont déjà. Sinon, brut chargé + VoIP + coussin. */
export function monthlyAgentCost(a = ASSUMPTIONS) {
  if ((a.agentAllInAr ?? 0) > 0) return a.agentAllInAr / a.exchangeArPerEuro + a.voipPerAgent;
  return (chargedSalary(a) + a.voipPerAgent) * (1 + a.contingency);
}

/** Part du CA retenue en réserves : avoirs SLA + banque et change. */
export function revenueReserveRate(a = ASSUMPTIONS) {
  return (a.slaReserveRate ?? 0) + (a.revenueChargeRate ?? 0);
}

/** Coûts fixes mensuels d'un mois donné : outils et charges toujours, structure
 * seulement quand au moins un agent est en poste. */
export function fixedMonthlyCost(agents, a = ASSUMPTIONS) {
  return a.toolsPerMonth + (a.otherMonthlyCost ?? 0) + (agents > 0 ? (a.structureMonthly ?? 0) : 0);
}

export function monthlyManagerCost(a = ASSUMPTIONS) {
  return (chargedSalary(a) + (a.voipPerManager ?? 0)) * (1 + a.contingency);
}

/** Onboarding d'un contrat : socle partenaire + part par position (registre interne). */
export function onboardingCost(positions, a = ASSUMPTIONS) {
  return a.onboardingBase + positions * a.onboardingPerPosition;
}

/** Frais d'activation d'un contrat : encaissés à la signature, jamais rendus. */
export function activationFee(positions, a = ASSUMPTIONS) {
  return (a.activationFeePerDeal ?? 0) + positions * (a.activationFeePerPosition ?? 0);
}

/**
 * Part du dépôt qui n'est PAS rendue au partenaire, par position.
 * Le dépôt est censé être neutre : `dépôt = crédit × nombre de factures créditées`.
 * Un résidu positif est un frais d'activation déguisé — il devrait être nommé comme tel.
 * Un résidu négatif crédite au partenaire de l'argent jamais encaissé.
 */
export function depositResidual(a = ASSUMPTIONS) {
  return a.depositPerPosition - a.invoiceCreditPerPosition * a.invoiceCreditMonths;
}

/** Nombre de managers budgétés pour un effectif donné, réparti par métier.
 * Un manager par tranche de `managerCapacity` positions DANS CHAQUE MÉTIER : la supervision
 * n'est pas supposée mutualisable entre deux métiers. Elle l'est en revanche entre deux
 * partenaires d'un même métier, ce qui reste une hypothèse optimiste. */
export function managersFor(staffByMetier, a = ASSUMPTIONS) {
  const total = Object.values(staffByMetier).reduce((x, y) => x + y, 0);
  if (total === 0 || total <= (a.founderSupervisesUpTo ?? 0)) return 0;
  return Object.values(staffByMetier).reduce((n, positions) => n + (positions ? Math.ceil(positions / a.managerCapacity) : 0), 0);
}

function normalize(deals, a) {
  return deals.map(d => {
    if (!Number.isInteger(d.signedMonth) || d.signedMonth < 1) throw new Error('Mois de signature invalide');
    if (!Number.isInteger(d.positions) || d.positions < 1) throw new Error('Nombre de positions invalide');
    if (!OFFERS[d.metier]) throw new Error('Métier invalide');
    const revenue = dealRevenue(d);
    return {
      ...d, revenue, price: revenue / d.positions, marginal: marginalPrice(d),
      acquisitionCost: d.acquisitionCost ?? 0,
      onboarding: d.onboarding ?? onboardingCost(d.positions, a),
    };
  });
}

/** Montant facturé pour un contrat à sa n-ième facture (n commence à 0), crédits de dépôt déduits. */
function invoiceAmount(deal, invoiceNumber, a) {
  const credit = invoiceNumber < a.invoiceCreditMonths ? deal.positions * a.invoiceCreditPerPosition : 0;
  return deal.revenue - credit;
}

/**
 * deal = {signedMonth, metier, positions, tarif?, directLevel?, price?, acquisitionCost?, label?}
 * Le dépôt est une avance créditée : flux positif à la signature, puis négatif sur les
 * trois premières factures. L'onboarding et le coût d'acquisition sortent au mois de signature.
 */
export function projectCash(deals, months = 24, a = ASSUMPTIONS) {
  if (!Number.isInteger(months) || months < 1) throw new Error('Horizon invalide');
  const accepted = normalize(deals, a);
  const rows = [];
  let cash = a.initialCash;
  for (let m = 1; m <= months; m++) {
    const active = accepted.filter(d => m >= d.signedMonth + a.hireDelayMonths);
    const staffByMetier = Object.fromEntries(Object.keys(OFFERS).map(k => [k, active.filter(d => d.metier === k).reduce((n, d) => n + d.positions, 0)]));
    const agents = Object.values(staffByMetier).reduce((x, y) => x + y, 0);
    const managers = managersFor(staffByMetier, a);
    const payroll = agents * monthlyAgentCost(a) + managers * monthlyManagerCost(a);
    const signedThisMonth = accepted.filter(d => d.signedMonth === m);
    const onboarding = signedThisMonth.reduce((n, d) => n + d.onboarding, 0);
    const acquisition = signedThisMonth.reduce((n, d) => n + d.acquisitionCost, 0);
    const deposit = signedThisMonth.reduce((n, d) => n + d.positions * a.depositPerPosition, 0);
    // Équipement : postes achetés à la signature, groupe + UPS au premier mois avec du personnel.
    const firstStaffMonth = agents > 0 && !rows.some(r => r.agents > 0);
    const equipment = signedThisMonth.reduce((n, d) => n + d.positions * (a.equipmentPerPosition ?? 0), 0)
      + (firstStaffMonth ? (a.equipmentBase ?? 0) : 0);
    // Les frais d'activation ne sont pas une avance : ils entrent et ne ressortent jamais.
    const activation = signedThisMonth.reduce((n, d) => n + activationFee(d.positions, a), 0);
    const invoiced = accepted
      .filter(d => m >= d.signedMonth + a.firstInvoiceDelayMonths)
      .reduce((n, d) => n + invoiceAmount(d, m - (d.signedMonth + a.firstInvoiceDelayMonths), a), 0);
    const receiptGross = accepted
      .filter(d => m >= d.signedMonth + a.firstInvoiceDelayMonths + a.paymentDelayMonths)
      .reduce((n, d) => n + invoiceAmount(d, m - a.paymentDelayMonths - (d.signedMonth + a.firstInvoiceDelayMonths), a), 0);
    const badDebt = receiptGross * (a.badDebtRate ?? 0);
    const receipt = receiptGross - badDebt;
    const revenueCharges = receipt * revenueReserveRate(a);
    const structure = agents > 0 ? (a.structureMonthly ?? 0) : 0;
    const overhead = fixedMonthlyCost(agents, a) + revenueCharges;
    const expense = payroll + overhead + onboarding + acquisition + equipment;
    cash += deposit + activation + receipt - expense;
    rows.push({ month: m, agents, managers, payroll, overhead, structure, revenueCharges, onboarding, acquisition, equipment, deposit, activation, invoiced, receiptGross, badDebt, receipt, expense, result: receipt + activation - expense, cash });
  }
  return rows;
}

/** Contribution mensuelle à régime plein, contrat par contrat.
 * Le coût de manager attribué à un contrat est son coût MARGINAL : le manager déclenché
 * par le premier contrat d'un métier n'est pas recompté sur le suivant. L'ordre des
 * contrats suit leur mois de signature, donc le premier signé porte le manager. */
export function contributions(deals, a = ASSUMPTIONS) {
  const accepted = normalize(deals, a).sort((x, y) => x.signedMonth - y.signedMonth);
  const staff = Object.fromEntries(Object.keys(OFFERS).map(k => [k, 0]));
  let managersSoFar = 0;
  const lines = accepted.map(d => {
    staff[d.metier] += d.positions;
    const managersNow = managersFor(staff, a);
    const marginalManagers = managersNow - managersSoFar;
    managersSoFar = managersNow;
    const revenue = d.revenue;
    const agentCost = d.positions * monthlyAgentCost(a);
    const managerCost = marginalManagers * monthlyManagerCost(a);
    const reserves = revenue * revenueReserveRate(a);
    return {
      deal: d, revenue, agentCost, managerCost, marginalManagers, reserves,
      contribution: revenue - agentCost - managerCost - reserves,
      perPositionMargin: d.marginal * (1 - revenueReserveRate(a)) - monthlyAgentCost(a),
      belowFloor: d.marginal < PRICE_FLOOR,
    };
  });
  const positions = lines.reduce((n, l) => n + l.deal.positions, 0);
  const fixed = fixedMonthlyCost(positions, a);
  const total = lines.reduce((n, l) => n + l.contribution, 0);
  return { lines, fixedCost: fixed, totalContribution: total, monthlyResult: total - fixed };
}

/** Nombre de positions d'un métier nécessaires, à un prix donné, pour couvrir
 * les coûts fixes connus et la supervision. Renvoie null si la contribution
 * par position est nulle ou négative : aucun volume ne rattrape un prix en dessous du coût. */
export function breakEvenPositions(price, a = ASSUMPTIONS) {
  const perPosition = price * (1 - revenueReserveRate(a)) - monthlyAgentCost(a);
  if (perPosition <= 0) return null;
  const fixed = fixedMonthlyCost(1, a);
  for (let n = 1; n <= 200; n++) {
    const managers = (a.founderSupervisesUpTo ?? 0) >= n ? 0 : Math.ceil(n / a.managerCapacity);
    if (n * perPosition - managers * monthlyManagerCost(a) - fixed >= 0) return n;
  }
  return null;
}

/** Nombre de positions nécessaires pour équilibrer un contrat marque blanche, tranches comprises. */
export function breakEvenMb(metier, a = ASSUMPTIONS) {
  const fixed = fixedMonthlyCost(1, a);
  for (let n = 1; n <= 200; n++) {
    const managers = (a.founderSupervisesUpTo ?? 0) >= n ? 0 : Math.ceil(n / a.managerCapacity);
    const result = mbRevenue(metier, n) * (1 - revenueReserveRate(a)) - n * monthlyAgentCost(a) - managers * monthlyManagerCost(a) - fixed;
    if (result >= 0) return n;
  }
  return null;
}

export function summarize(rows) {
  const low = rows.reduce((a, b) => b.cash < a.cash ? b : a);
  const last = rows.at(-1);
  const positive = rows.find(r => r.month > 1 && r.result > 0);
  const cashPositive = rows.find(r => r.cash >= 0 && r.month > low.month);
  return {
    trough: low.cash, troughMonth: low.month,
    endCash: last.cash, endAgents: last.agents, endManagers: last.managers, endInvoices: last.invoiced,
    firstPositiveMonth: positive ? positive.month : null,
    cashPositiveMonth: low.cash < 0 && cashPositive ? cashPositive.month : null,
    runwayNeedWith30pctBuffer: Math.max(0, -low.cash) * 1.3,
  };
}
