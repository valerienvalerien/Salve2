import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  projectCash, pricePerPosition, directPrice, resolvePrice, monthlyAgentCost, monthlyManagerCost,
  onboardingCost, managersFor, contributions, breakEvenPositions, summarize, PRICE_FLOOR, ASSUMPTIONS,
} from './finance-model.mjs';
import { SCENARIOS } from './finance-scenarios.mjs';

const here = dirname(fileURLToPath(import.meta.url));

assert.equal(pricePerPosition('support', 5), 1500);
assert.equal(pricePerPosition('helpdesk', 9), 1550);
assert.equal(Math.round(monthlyAgentCost()), 843);
assert.equal(Math.round(monthlyManagerCost()), 810);

// Les trois modes de tarification résolvent bien trois prix différents.
assert.equal(resolvePrice({ metier: 'helpdesk', positions: 2, tarif: 'mb' }), 2000);
assert.equal(resolvePrice({ metier: 'helpdesk', positions: 2, tarif: 'direct' }), 2200);
assert.equal(resolvePrice({ metier: 'helpdesk', positions: 2, tarif: 'direct', directLevel: 'haut' }), 2800);
assert.equal(resolvePrice({ metier: 'helpdesk', positions: 2, tarif: 'libre', price: 1234 }), 1234);
assert.equal(directPrice('support', 'median'), 2150);
// Le direct n'a pas de grille de volume : 1 ou 12 positions, même prix.
assert.equal(resolvePrice({ metier: 'support', positions: 12, tarif: 'direct' }), directPrice('support', 'bas'));
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
