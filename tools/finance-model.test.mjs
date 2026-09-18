import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  projectCash, pricePerPosition, resolvePrice, monthlyAgentCost, monthlyManagerCost,
  onboardingCost, managersFor, contributions, breakEvenPositions, summarize, PRICE_FLOOR, ASSUMPTIONS,
  mbRevenue, mbBreakdown, dealRevenue, marginalPrice, breakEvenMb, MB_ENTRY_POSITIONS, OFFERS, DIRECT_REFERENCE,
} from './finance-model.mjs';
import { SCENARIOS } from './finance-scenarios.mjs';

const here = dirname(fileURLToPath(import.meta.url));

assert.equal(Math.round(monthlyAgentCost()), 843);
assert.equal(Math.round(monthlyManagerCost()), 810);

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
  const res = n => contributions([{ signedMonth: 1, metier: 'support', positions: n, tarif: 'mb' }]).monthlyResult;
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

// Point mort marque blanche, tranches comprises.
assert.equal(breakEvenMb('helpdesk'), 1);
assert.equal(breakEvenMb('support'), 2);
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
const rows = projectCash([d], 7);
assert.equal(rows[0].deposit, 1800);
assert.deepEqual(rows.slice(2, 5).map(r => r.invoiced), [3400, 3400, 3400]);
assert.equal(rows[5].invoiced, 4000);
assert.equal(rows[0].deposit + rows.slice(2, 5).reduce((n, r) => n + r.invoiced, 0), 12000);

// La supervision apparaît dès le premier métier et un second manager au 9e agent.
assert.equal(projectCash([{ signedMonth: 1, metier: 'support', positions: 1 }], 4)[1].managers, 1);
assert.equal(projectCash([{ signedMonth: 1, metier: 'support', positions: 9 }], 4)[1].managers, 2);
// La supervision n'est pas mutualisée entre deux métiers.
assert.equal(managersFor({ support: 1, helpdesk: 1 }), 2);
// Le fondateur peut encadrer lui-même les premières positions.
assert.equal(managersFor({ support: 2, helpdesk: 0 }, { managerCapacity: 8, founderSupervisesUpTo: 2 }), 0);
assert.equal(managersFor({ support: 3, helpdesk: 0 }, { managerCapacity: 8, founderSupervisesUpTo: 2 }), 1);

const singleSupport = projectCash([{ signedMonth: 1, metier: 'support', positions: 1 }], 7)[6];
assert.ok(singleSupport.invoiced - singleSupport.expense < 0);
const twoSupport = projectCash([{ signedMonth: 1, metier: 'support', positions: 2 }], 7)[6];
assert.ok(twoSupport.invoiced - twoSupport.expense > 0);

// Contribution à régime plein : le manager n'est compté qu'une fois par métier.
const c = contributions([
  { signedMonth: 1, metier: 'support', positions: 2 },
  { signedMonth: 4, metier: 'support', positions: 2 },
]);
assert.equal(c.lines[0].marginalManagers, 1);
assert.equal(c.lines[1].marginalManagers, 0);
assert.equal(Math.round(c.monthlyResult), Math.round(4 * 1700 - 4 * monthlyAgentCost() - monthlyManagerCost() - 68));

// Le plancher de 920 € ne franchit le point mort à AUCUN volume : chaque tranche de huit
// positions rapporte 8 × 76,96 € et coûte un manager à 810,04 €.
assert.equal(breakEvenPositions(PRICE_FLOOR), null);
assert.ok(PRICE_FLOOR < monthlyAgentCost() + monthlyManagerCost() / 8);
assert.equal(breakEvenPositions(2000), 1);
assert.equal(breakEvenPositions(1550), 2);

// Impayés et charges sur CA réduisent bien l'encaissement.
const withRisk = projectCash([d], 7, { ...ASSUMPTIONS, badDebtRate: 0.1 })[3];
assert.ok(withRisk.receipt < withRisk.receiptGross);

// Les quatre scénarios du document restent reproductibles.
const expected = { attente: -1632, prudent: -3677, median: -4800, expansion: -5918 };
for (const [name, deals] of Object.entries(SCENARIOS)) {
  assert.equal(Math.round(summarize(projectCash(deals)).trough), expected[name], name);
}

// La page de projection embarque une copie EXACTE du moteur : pas de dérive silencieuse.
const page = readFileSync(join(here, '..', 'projection-finances-salverys.html'), 'utf8');
const start = '// === MODELE FINANCIER : copie synchronisee de tools/finance-model.mjs ===';
const end = '// === FIN MODELE FINANCIER ===';
const i = page.indexOf(start), j = page.indexOf(end);
assert.ok(i > 0 && j > i, 'Marqueurs du moteur introuvables dans projection-finances-salverys.html');
const embedded = page.slice(i + start.length, j).trim();
const source = readFileSync(join(here, 'finance-model.mjs'), 'utf8').trim();
assert.equal(embedded, source, 'La copie du moteur dans la page a dérivé de tools/finance-model.mjs');

console.log('Modèle financier : invariants validés, page synchronisée.');
