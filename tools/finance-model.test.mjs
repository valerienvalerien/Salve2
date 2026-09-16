import assert from 'node:assert/strict';
import { projectCash, pricePerPosition, monthlyAgentCost, monthlyManagerCost, summarize } from './finance-model.mjs';
import { SCENARIOS } from './finance-scenarios.mjs';

assert.equal(pricePerPosition('support', 5), 1500);
assert.equal(pricePerPosition('helpdesk', 9), 1550);
assert.equal(Math.round(monthlyAgentCost()), 843);
assert.equal(Math.round(monthlyManagerCost()), 810);

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
const singleSupport = projectCash([{ signedMonth: 1, metier: 'support', positions: 1 }], 7)[6];
assert.ok(singleSupport.invoiced - singleSupport.expense < 0);
const twoSupport = projectCash([{ signedMonth: 1, metier: 'support', positions: 2 }], 7)[6];
assert.ok(twoSupport.invoiced - twoSupport.expense > 0);

// Les quatre scénarios du document restent reproductibles.
const expected = { attente: -1632, prudent: -4477, median: -5200, expansion: -5918 };
for (const [name, deals] of Object.entries(SCENARIOS)) {
  assert.equal(Math.round(summarize(projectCash(deals)).trough), expected[name], name);
}
console.log('Modèle financier : invariants validés.');
