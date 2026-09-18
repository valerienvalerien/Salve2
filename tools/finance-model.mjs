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
 * `direct` : fourchette client final du registre interne archivé (bas / médian / haut).
 *   Le direct n'a PAS de grille de volume documentée : le prix ne dépend pas du nombre
 *   de positions, seulement du point choisi dans la fourchette.
 *   Le direct est GELÉ en prospection depuis le 2026-09-07 : ces prix servent à chiffrer
 *   un entrant, pas à planifier une conquête. */
export const OFFERS = Object.freeze({
  support: Object.freeze({ mb: Object.freeze([1700, 1500]), direct: Object.freeze([1900, 2150, 2400]) }),
  helpdesk: Object.freeze({ mb: Object.freeze([2000, 1750]), direct: Object.freeze([2200, 2500, 2800]) }),
});

/** Nombre de positions facturées au tarif d'entrée avant le passage au tarif volume. */
export const MB_ENTRY_POSITIONS = 4;

export const METIER_LABELS = Object.freeze({ support: 'Support applicatif N1', helpdesk: 'Helpdesk IT N1' });
export const DIRECT_LEVELS = Object.freeze(['bas', 'median', 'haut']);

/** Plancher de négociation de PRICING.md §1. Ce n'est PAS un seuil de rentabilité. */
export const PRICE_FLOOR = 920;

export const ASSUMPTIONS = Object.freeze({
  exchangeArPerEuro: 5000,
  grossSalaryAr: 3250000,
  smeAr: 300000,
  employerRate: 0.18,
  voipPerAgent: 30,
  voipPerManager: 0,
  contingency: 0.10,
  toolsPerMonth: 68,
  otherMonthlyCost: 0,
  onboardingBase: 400,
  onboardingPerPosition: 400,
  depositPerPosition: 900,
  invoiceCreditPerPosition: 300,
  invoiceCreditMonths: 3,
  paymentDelayMonths: 1,
  hireDelayMonths: 1,
  firstInvoiceDelayMonths: 2,
  managerCapacity: 8,
  /** Nombre de positions que le fondateur encadre lui-même avant d'embaucher un manager.
   * 0 = un manager dès la première position (hypothèse prudente par défaut). */
  founderSupervisesUpTo: 0,
  /** Part du CA encaissé perdue en impayés ; 0 par défaut, à régler sur l'expérience réelle. */
  badDebtRate: 0,
  /** Charges proportionnelles au CA encaissé non détaillées ailleurs : taxes, frais de
   * change et frais bancaires. 0 par défaut car non vérifié. */
  revenueChargeRate: 0,
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

/** Prix client final selon le point retenu dans la fourchette du registre interne. */
export function directPrice(metier, level = 'bas') {
  if (!OFFERS[metier]) throw new Error(`Métier inconnu : ${metier}`);
  const i = DIRECT_LEVELS.indexOf(level);
  if (i < 0) throw new Error(`Niveau de fourchette inconnu : ${level}`);
  return OFFERS[metier].direct[i];
}

function tarifOf(deal) {
  return deal.tarif ?? (deal.priceOverride != null || deal.price != null ? 'libre' : 'mb');
}

/**
 * CA mensuel d'un contrat selon son mode de tarification.
 * tarif = 'mb' (grille partenaire, par tranches) | 'direct' (client final) | 'libre' (prix saisi).
 */
export function dealRevenue(deal) {
  const tarif = tarifOf(deal);
  if (tarif === 'mb') return mbRevenue(deal.metier, deal.positions);
  if (tarif === 'direct') return deal.positions * directPrice(deal.metier, deal.directLevel ?? 'bas');
  if (tarif === 'libre') {
    const p = deal.price ?? deal.priceOverride;
    if (typeof p !== 'number' || !Number.isFinite(p) || p < 0) throw new Error('Prix libre invalide');
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

export function monthlyAgentCost(a = ASSUMPTIONS) {
  return (chargedSalary(a) + a.voipPerAgent) * (1 + a.contingency);
}

export function monthlyManagerCost(a = ASSUMPTIONS) {
  return (chargedSalary(a) + (a.voipPerManager ?? 0)) * (1 + a.contingency);
}

/** Onboarding d'un contrat : socle partenaire + part par position (registre interne). */
export function onboardingCost(positions, a = ASSUMPTIONS) {
  return a.onboardingBase + positions * a.onboardingPerPosition;
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
    const invoiced = accepted
      .filter(d => m >= d.signedMonth + a.firstInvoiceDelayMonths)
      .reduce((n, d) => n + invoiceAmount(d, m - (d.signedMonth + a.firstInvoiceDelayMonths), a), 0);
    const receiptGross = accepted
      .filter(d => m >= d.signedMonth + a.firstInvoiceDelayMonths + a.paymentDelayMonths)
      .reduce((n, d) => n + invoiceAmount(d, m - a.paymentDelayMonths - (d.signedMonth + a.firstInvoiceDelayMonths), a), 0);
    const badDebt = receiptGross * (a.badDebtRate ?? 0);
    const receipt = receiptGross - badDebt;
    const revenueCharges = receipt * (a.revenueChargeRate ?? 0);
    const overhead = a.toolsPerMonth + (a.otherMonthlyCost ?? 0) + revenueCharges;
    const expense = payroll + overhead + onboarding + acquisition;
    cash += deposit + receipt - expense;
    rows.push({ month: m, agents, managers, payroll, overhead, revenueCharges, onboarding, acquisition, deposit, invoiced, receiptGross, badDebt, receipt, expense, result: receipt - expense, cash });
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
    return {
      deal: d, revenue, agentCost, managerCost, marginalManagers,
      contribution: revenue - agentCost - managerCost,
      perPositionMargin: d.marginal - monthlyAgentCost(a),
      belowFloor: d.marginal < PRICE_FLOOR,
    };
  });
  const fixed = a.toolsPerMonth + (a.otherMonthlyCost ?? 0);
  const total = lines.reduce((n, l) => n + l.contribution, 0);
  return { lines, fixedCost: fixed, totalContribution: total, monthlyResult: total - fixed };
}

/** Nombre de positions d'un métier nécessaires, à un prix donné, pour couvrir
 * les coûts fixes connus et la supervision. Renvoie null si la contribution
 * par position est nulle ou négative : aucun volume ne rattrape un prix en dessous du coût. */
export function breakEvenPositions(price, a = ASSUMPTIONS) {
  const perPosition = price - monthlyAgentCost(a);
  if (perPosition <= 0) return null;
  const fixed = a.toolsPerMonth + (a.otherMonthlyCost ?? 0);
  for (let n = 1; n <= 200; n++) {
    const managers = (a.founderSupervisesUpTo ?? 0) >= n ? 0 : Math.ceil(n / a.managerCapacity);
    if (n * perPosition - managers * monthlyManagerCost(a) - fixed >= 0) return n;
  }
  return null;
}

/** Nombre de positions nécessaires pour équilibrer un contrat marque blanche, tranches comprises. */
export function breakEvenMb(metier, a = ASSUMPTIONS) {
  const fixed = a.toolsPerMonth + (a.otherMonthlyCost ?? 0);
  for (let n = 1; n <= 200; n++) {
    const managers = (a.founderSupervisesUpTo ?? 0) >= n ? 0 : Math.ceil(n / a.managerCapacity);
    const result = mbRevenue(metier, n) - n * monthlyAgentCost(a) - managers * monthlyManagerCost(a) - fixed;
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
