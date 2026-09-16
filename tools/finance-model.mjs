/** Prévision de trésorerie Salverys, en euros HT. Hypothèses explicites, pas de données réelles.
 * Le coussin de 10 % est soustrait du cash disponible comme réserve prudente,
 * même si ce n'est pas une charge de paie effectivement payée. */
export const OFFERS = Object.freeze({ support: [1700, 1500, 1350], helpdesk: [2000, 1750, 1550] });
export const ASSUMPTIONS = Object.freeze({
  exchangeArPerEuro: 5000,
  grossSalaryAr: 3250000,
  smeAr: 300000,
  employerRate: 0.18,
  voipPerAgent: 30,
  contingency: 0.10,
  toolsPerMonth: 68,
  onboardingPerDeal: 1600,
  depositPerPosition: 900,
  invoiceCreditPerPosition: 300,
  paymentDelayMonths: 1,
  hireDelayMonths: 1,
  firstInvoiceDelayMonths: 2,
  managerCapacity: 8,
  initialCash: 0,
});

export function pricePerPosition(metier, positions) {
  if (!OFFERS[metier]) throw new Error(`Métier inconnu : ${metier}`);
  if (!Number.isInteger(positions) || positions < 1) throw new Error('Nombre de positions invalide');
  return OFFERS[metier][positions >= 9 ? 2 : positions >= 5 ? 1 : 0];
}

export function monthlyAgentCost(a = ASSUMPTIONS) {
  const charged = (a.grossSalaryAr + Math.min(a.grossSalaryAr, 8 * a.smeAr) * a.employerRate) / a.exchangeArPerEuro;
  return (charged + a.voipPerAgent) * (1 + a.contingency);
}

export function monthlyManagerCost(a = ASSUMPTIONS) {
  return (a.grossSalaryAr + Math.min(a.grossSalaryAr, 8 * a.smeAr) * a.employerRate) / a.exchangeArPerEuro * (1 + a.contingency);
}

/**
 * deal = {signedMonth, métier, positions, priceOverride?}; les positions restent fermes.
 * Le dépôt est une avance créditée : flux positif à la signature, puis négatif sur trois factures.
 * Les montants d'onboarding sont des sorties de cash au mois de signature, si effectivement engagés.
 */
export function projectCash(deals, months = 24, a = ASSUMPTIONS) {
  if (!Number.isInteger(months) || months < 1) throw new Error('Horizon invalide');
  const accepted = deals.map(d => {
    if (!Number.isInteger(d.signedMonth) || d.signedMonth < 1 || !Number.isInteger(d.positions) || d.positions < 1 || !OFFERS[d.metier]) throw new Error('Deal invalide');
    return { ...d, price: d.priceOverride ?? pricePerPosition(d.metier, d.positions) };
  });
  const rows = [];
  let cash = a.initialCash;
  for (let m = 1; m <= months; m++) {
    const active = accepted.filter(d => m >= d.signedMonth + a.hireDelayMonths);
    const staffByMetier = Object.fromEntries(Object.keys(OFFERS).map(k => [k, active.filter(d => d.metier === k).reduce((n, d) => n + d.positions, 0)]));
    const agents = Object.values(staffByMetier).reduce((x, y) => x + y, 0);
    const managers = Object.values(staffByMetier).reduce((n, positions) => n + (positions ? Math.ceil(positions / a.managerCapacity) : 0), 0);
    const payroll = agents * monthlyAgentCost(a) + managers * monthlyManagerCost(a);
    const overhead = a.toolsPerMonth;
    const onboarding = accepted.filter(d => d.signedMonth === m).length * a.onboardingPerDeal;
    const deposit = accepted.filter(d => d.signedMonth === m).reduce((n, d) => n + d.positions * a.depositPerPosition, 0);
    const invoices = accepted.filter(d => m >= d.signedMonth + a.firstInvoiceDelayMonths).map(d => {
      const invoiceNumber = m - (d.signedMonth + a.firstInvoiceDelayMonths);
      const credit = invoiceNumber < 3 ? d.positions * a.invoiceCreditPerPosition : 0;
      return d.positions * d.price - credit;
    });
    const invoiced = invoices.reduce((n, v) => n + v, 0);
    const receipt = accepted.filter(d => m >= d.signedMonth + a.firstInvoiceDelayMonths + a.paymentDelayMonths).reduce((n, d) => {
      const invoiceNumber = m - a.paymentDelayMonths - (d.signedMonth + a.firstInvoiceDelayMonths);
      const credit = invoiceNumber < 3 ? d.positions * a.invoiceCreditPerPosition : 0;
      return n + d.positions * d.price - credit;
    }, 0);
    const expense = payroll + overhead + onboarding;
    cash += deposit + receipt - expense;
    rows.push({ month: m, agents, managers, payroll, overhead, onboarding, deposit, invoiced, receipt, expense, cash });
  }
  return rows;
}

export function summarize(rows) {
  const low = rows.reduce((a, b) => b.cash < a.cash ? b : a);
  const last = rows.at(-1);
  return { trough: low.cash, troughMonth: low.month, endCash: last.cash, endAgents: last.agents, endManagers: last.managers, endInvoices: last.invoiced, runwayNeedWith30pctBuffer: Math.max(0, -low.cash) * 1.3 };
}
