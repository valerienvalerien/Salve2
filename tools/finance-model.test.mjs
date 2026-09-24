import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  projectCash, pricePerPosition, resolvePrice, monthlyAgentCost, monthlyManagerCost,
  onboardingCost, managersFor, contributions, breakEvenPositions, summarize, PRICE_FLOOR, ASSUMPTIONS,
  activationFee, depositResidual, revenueReserveRate, fixedMonthlyCost,
  mbRevenue, mbBreakdown, dealRevenue, marginalPrice, breakEvenMb, MB_ENTRY_POSITIONS, OFFERS, DIRECT_REFERENCE,
} from './finance-model.mjs';
import { SCENARIOS } from './finance-scenarios.mjs';
import { PAGES, START, END } from './sync-projection.mjs';

const here = dirname(fileURLToPath(import.meta.url));

/* Hypothèses d'avant l'arbitrage du 2026-09-24 (BMC v1.3) : agent calculé par le brut,
 * aucun coût de structure, dépôt rendu, manager dès la première position, aucune réserve
 * sur CA. Les tests de MÉCANISME (tranches, dépôt, paliers de manager, plancher) tournent
 * sur ce jeu pour rester lisibles ; les valeurs par défaut sont testées plus bas. */
const LEGACY = Object.freeze({
  ...ASSUMPTIONS, agentAllInAr: 0, structureMonthly: 0, equipmentPerPosition: 0, equipmentBase: 0,
  depositPerPosition: 900, invoiceCreditPerPosition: 300, activationFeePerPosition: 0,
  founderSupervisesUpTo: 0, revenueChargeRate: 0, slaReserveRate: 0,
});

assert.equal(Math.round(monthlyAgentCost(LEGACY)), 843);
assert.equal(Math.round(monthlyManagerCost()), 810);

/* ---------- Valeurs par défaut : arbitrages A1, A7 à A10 du 2026-09-24 ---------- */
// A7 : coût complet agent de 3,5 M Ar tout compris, plus la VoIP, sans coussin.
assert.equal(monthlyAgentCost(), 3500000 / 5000 + 30);
// A9 : 2 % d'avoirs SLA + 1 % de banque et change.
assert.equal(revenueReserveRate(), 0.03);
// A8 : la structure ne se paie qu'avec du personnel.
assert.equal(fixedMonthlyCost(0), 68);
assert.equal(fixedMonthlyCost(1), 68 + 2220);
// A1 : 490 € de mise en service par position, acquis ; plus de dépôt.
assert.equal(activationFee(5), 2450);
assert.equal(ASSUMPTIONS.depositPerPosition, 0);
assert.equal(depositResidual(), 0);
// A10 : le fondateur encadre le lancement à 5 positions, un manager arrive à la 6e.
assert.equal(managersFor({ helpdesk: 5, support: 0 }), 0);
assert.equal(managersFor({ helpdesk: 6, support: 0 }), 1);
{
  // Scénario de référence (3 + 2 helpdesk) : même résultat que le BMC v1.3, hors
  // amortissements (123 €), VoIP (150 €) et écart d'outils (86 € contre 68 €).
  const ref = contributions(SCENARIOS.reference);
  assert.equal(Math.round(ref.monthlyResult), Math.round(10000 * 0.97 - 5 * 730 - 2220 - 68));
  assert.equal(Math.round(ref.monthlyResult), 3762);
  const rows = projectCash(SCENARIOS.reference);
  assert.equal(rows[3].activation, 2450, 'mise en service encaissée à la signature');
  assert.equal(rows[3].equipment, 5 * 800, 'postes achetés à la signature');
  assert.equal(rows[4].equipment, 450, 'groupe + UPS au premier mois avec du personnel');
  assert.equal(rows.filter(r => r.equipment === 450).length, 1, 'et une seule fois');
  assert.equal(rows[3].structure, 0, 'pas de loyer avant l\'embauche');
  assert.equal(rows[4].structure, 2220);
}
// Point mort par tranches avec la structure : 2 positions en helpdesk, 3 en support.
assert.equal(breakEvenMb('helpdesk'), 2);
assert.equal(breakEvenMb('support'), 3);

// pricePerPosition donne le prix de LA n-ième position, pas la moyenne du contrat.
assert.equal(pricePerPosition('support', 4), 1700);
assert.equal(pricePerPosition('support', 5), 1500);
assert.equal(pricePerPosition('helpdesk', 9), 1750);

// Tranches non rétroactives : les quatre premières positions restent au tarif d'entrée.
assert.equal(MB_ENTRY_POSITIONS, 4);
assert.equal(mbRevenue('support', 4), 4 * 1700);
assert.equal(mbRevenue('support', 5), 4 * 1700 + 1500);
assert.equal(mbRevenue('helpdesk', 7), 4 * 2000 + 3 * 1750);
assert.deepEqual(mbBreakdown('helpdesk', 3), [{ count: 3, price: 2000 }]);
assert.deepEqual(mbBreakdown('helpdesk', 7), [{ count: 4, price: 2000 }, { count: 3, price: 1750 }]);
// La grille n'a plus que deux tarifs : le palier 9+ rétroactif est supprimé.
assert.equal(OFFERS.support.mb.length, 2);
assert.equal(OFFERS.helpdesk.mb.length, 2);

// Une remise non rétroactive ne peut jamais faire reculer le CA quand on ajoute une position.
for (const m of ['support', 'helpdesk']) {
  for (let n = 2; n <= 30; n++) {
    assert.ok(mbRevenue(m, n) > mbRevenue(m, n - 1), `${m} : le CA recule à ${n} positions`);
    assert.equal(mbRevenue(m, n) - mbRevenue(m, n - 1), pricePerPosition(m, n), `${m} à ${n}`);
  }
}

// Le seul recul de résultat restant vient du palier de manager, pas du prix.
// Support à 9 positions : 657 € de marge nouvelle contre 810 € de second manager.
{
  const res = n => contributions([{ signedMonth: 1, metier: 'support', positions: n, tarif: 'mb' }], LEGACY).monthlyResult;
  for (let n = 2; n <= 16; n++) {
    const recul = res(n) < res(n - 1);
    assert.equal(recul, n % 8 === 1 && n > MB_ENTRY_POSITIONS + 1, `support : recul inattendu à ${n} positions`);
  }
}

// Les trois modes de tarification résolvent bien trois prix différents.
assert.equal(resolvePrice({ metier: 'helpdesk', positions: 2, tarif: 'mb' }), 2000);
assert.equal(dealRevenue({ metier: 'helpdesk', positions: 7, tarif: 'mb' }), 4 * 2000 + 3 * 1750);
// Au-delà de la tranche d'entrée, le prix moyen n'est aucun des deux tarifs affichés.
assert.equal(resolvePrice({ metier: 'helpdesk', positions: 8, tarif: 'mb' }), 15000 / 8);
// Le prix marginal est celui de la dernière position : c'est lui qu'on compare au plancher.
assert.equal(marginalPrice({ metier: 'helpdesk', positions: 8, tarif: 'mb' }), 1750);
assert.equal(marginalPrice({ metier: 'helpdesk', positions: 3, tarif: 'mb' }), 2000);
assert.equal(marginalPrice({ metier: 'helpdesk', positions: 8, tarif: 'libre', price: 900 }), 900);

// Point mort marque blanche, tranches comprises (hypothèses d'avant le 2026-09-24).
assert.equal(breakEvenMb('helpdesk', LEGACY), 1);
assert.equal(breakEvenMb('support', LEGACY), 2);
// Le direct n'a AUCUNE grille : un prix saisi est exigé, et le repère archivé ne sert jamais à calculer.
assert.equal(resolvePrice({ metier: 'helpdesk', positions: 2, tarif: 'direct', price: 2300 }), 2300);
assert.throws(() => dealRevenue({ metier: 'helpdesk', positions: 2, tarif: 'direct' }), /Prix client final à saisir/);
assert.equal(OFFERS.helpdesk.direct, undefined, 'la grille directe ne doit plus exister');
assert.deepEqual(DIRECT_REFERENCE.helpdesk, [2200, 2800]);
assert.deepEqual(DIRECT_REFERENCE.support, [1900, 2400]);
assert.equal(resolvePrice({ metier: 'helpdesk', positions: 2, tarif: 'libre', price: 1234 }), 1234);
// Le direct n'a pas de grille de volume : 1 ou 12 positions, même prix saisi.
assert.equal(resolvePrice({ metier: 'support', positions: 12, tarif: 'direct', price: 2000 }), 2000);
// L'ancienne clé priceOverride reste acceptée.
assert.equal(resolvePrice({ metier: 'support', positions: 1, priceOverride: 1000 }), 1000);
assert.throws(() => resolvePrice({ metier: 'support', positions: 1, tarif: 'inconnu' }), /tarification/);

// Onboarding : socle partenaire + part par position, et non un forfait par contrat.
assert.equal(onboardingCost(1), 800);
assert.equal(onboardingCost(3), 1600);

// Le dépôt accélère l'encaissement, sans ajouter une recette à trois mois de service.
const d = { signedMonth: 1, metier: 'helpdesk', positions: 2 };
const rows = projectCash([d], 7, LEGACY);
assert.equal(rows[0].deposit, 1800);
assert.deepEqual(rows.slice(2, 5).map(r => r.invoiced), [3400, 3400, 3400]);
assert.equal(rows[5].invoiced, 4000);
assert.equal(rows[0].deposit + rows.slice(2, 5).reduce((n, r) => n + r.invoiced, 0), 12000);

// Frais d'activation : encaissés à la signature, jamais rendus, et nuls par défaut.
assert.equal(activationFee(5, LEGACY), 0);
assert.equal(rows[0].activation, 0);
{
  const a = { ...LEGACY, activationFeePerDeal: 400, activationFeePerPosition: 400 };
  assert.equal(activationFee(2, a), 400 + 2 * 400);
  const r = projectCash([d], 7, a);
  assert.equal(r[0].activation, 1200, 'encaissés au mois de la signature');
  assert.equal(r[1].activation, 0, 'et une seule fois');
  // Ils améliorent le cash de leur montant exact, sans toucher à la facturation.
  const sans = projectCash([d], 7, LEGACY);
  assert.deepEqual(r.map(x => x.invoiced), sans.map(x => x.invoiced));
  assert.equal(Math.round(r.at(-1).cash - sans.at(-1).cash), 1200);
}

// Le dépôt doit rester neutre : dépôt = crédit × nombre de factures créditées.
assert.equal(depositResidual(LEGACY), 0, 'l\'ancien dépôt était intégralement rendu');
assert.equal(depositResidual({ ...LEGACY, depositPerPosition: 1200 }), 300, 'résidu = frais caché');
assert.equal(depositResidual({ ...LEGACY, invoiceCreditMonths: 4 }), -300, 'crédit supérieur à l\'encaissé');

// La supervision apparaît dès le premier métier et un second manager au 9e agent.
assert.equal(projectCash([{ signedMonth: 1, metier: 'support', positions: 1 }], 4, LEGACY)[1].managers, 1);
assert.equal(projectCash([{ signedMonth: 1, metier: 'support', positions: 9 }], 4, LEGACY)[1].managers, 2);
// La supervision n'est pas mutualisée entre deux métiers.
assert.equal(managersFor({ support: 1, helpdesk: 1 }, LEGACY), 2);
// Le fondateur peut encadrer lui-même les premières positions.
assert.equal(managersFor({ support: 2, helpdesk: 0 }, { managerCapacity: 8, founderSupervisesUpTo: 2 }), 0);
assert.equal(managersFor({ support: 3, helpdesk: 0 }, { managerCapacity: 8, founderSupervisesUpTo: 2 }), 1);

const singleSupport = projectCash([{ signedMonth: 1, metier: 'support', positions: 1 }], 7, LEGACY)[6];
assert.ok(singleSupport.invoiced - singleSupport.expense < 0);
const twoSupport = projectCash([{ signedMonth: 1, metier: 'support', positions: 2 }], 7, LEGACY)[6];
assert.ok(twoSupport.invoiced - twoSupport.expense > 0);

// Contribution à régime plein : le manager n'est compté qu'une fois par métier.
const c = contributions([
  { signedMonth: 1, metier: 'support', positions: 2 },
  { signedMonth: 4, metier: 'support', positions: 2 },
], LEGACY);
assert.equal(c.lines[0].marginalManagers, 1);
assert.equal(c.lines[1].marginalManagers, 0);
assert.equal(Math.round(c.monthlyResult), Math.round(4 * 1700 - 4 * monthlyAgentCost(LEGACY) - monthlyManagerCost() - 68));

// Le plancher de 920 € ne franchit le point mort à AUCUN volume : chaque tranche de huit
// positions rapporte 8 × 76,96 € et coûte un manager à 810,04 €.
assert.equal(breakEvenPositions(PRICE_FLOOR, LEGACY), null);
assert.ok(PRICE_FLOOR < monthlyAgentCost(LEGACY) + monthlyManagerCost() / 8);
assert.equal(breakEvenPositions(2000, LEGACY), 1);
assert.equal(breakEvenPositions(1550, LEGACY), 2);
// Avec l'agent à 730 € et 3 % de réserves, le seuil sans structure devient
// (730 + 810,04 / 8) / 0,97 ≈ 857 € : 920 € repasse au-dessus, mais il faut 40 positions
// pour couvrir la structure du lancement.
assert.equal(breakEvenPositions(PRICE_FLOOR), 40);

// Impayés et charges sur CA réduisent bien l'encaissement.
const withRisk = projectCash([d], 7, { ...LEGACY, badDebtRate: 0.1 })[3];
assert.ok(withRisk.receipt < withRisk.receiptGross);

// Les quatre scénarios du document restent reproductibles.
// Creux publiés dans FINANCE-PREVISIONNEL.md §4 (hypothèses du 2026-09-24).
const expected = { reference: -16948, attente: -1632, prudent: -27272, median: -14118, expansion: -16973 };
for (const [name, deals] of Object.entries(SCENARIOS)) {
  assert.equal(Math.round(summarize(projectCash(deals)).trough), expected[name], name);
}
// Les creux d'avant l'arbitrage restent reproductibles sous LEGACY.
const legacy = { attente: -1632, prudent: -3677, median: -4800, expansion: -5918 };
for (const [name, v] of Object.entries(legacy)) {
  assert.equal(Math.round(summarize(projectCash(SCENARIOS[name], 24, LEGACY)).trough), v, `${name} (LEGACY)`);
}

// Chaque page embarque une copie EXACTE du moteur : pas de dérive silencieuse.
const source = readFileSync(join(here, 'finance-model.mjs'), 'utf8').trim();
for (const nom of PAGES) {
  const page = readFileSync(join(here, '..', nom), 'utf8');
  const i = page.indexOf(START), j = page.indexOf(END);
  assert.ok(i > 0 && j > i, `Marqueurs du moteur introuvables dans ${nom}`);
  assert.equal(page.slice(i + START.length, j).trim(), source, `La copie du moteur dans ${nom} a dérivé de tools/finance-model.mjs`);
}

console.log(`Modèle financier : invariants validés, ${PAGES.length} pages synchronisées.`);
