import assert from 'node:assert/strict';
import {
  positionsDansTranche, caMensuel, reventeMensuelle, detailTranches,
  trancheHaute, prixPositionSuivante, validerTranches,
} from './deal-pricing.mjs';
import { OFFERS, MB_ENTRY_POSITIONS, mbRevenue } from './finance-model.mjs';

/** Grille standard helpdesk, telle que PRICING.md §1 la décrit. */
const grille = [
  { engagement: 'Positions 1 à 4 — tarif d\'entrée', de: 1, a: 4, gros: 2000, minimumFacturable: 1 },
  { engagement: 'Positions 5 et suivantes — tarif volume', de: 5, gros: 1750, minimumFacturable: 5 },
];

// Répartition des positions entre les tranches.
assert.equal(positionsDansTranche(grille[0], 3), 3);
assert.equal(positionsDansTranche(grille[0], 9), 4, 'la tranche d\'entrée est plafonnée à 4');
assert.equal(positionsDansTranche(grille[1], 3), 0, 'le tarif volume ne s\'applique pas sous 5 positions');
assert.equal(positionsDansTranche(grille[1], 9), 5);

// Le CA est la somme des tranches, jamais positions × prix du palier atteint.
assert.equal(caMensuel(grille, 1), 2000);
assert.equal(caMensuel(grille, 4), 8000);
assert.equal(caMensuel(grille, 5), 4 * 2000 + 1750);
assert.equal(caMensuel(grille, 9), 4 * 2000 + 5 * 1750);
assert.notEqual(caMensuel(grille, 5), 5 * 1750, 'un calcul rétroactif donnerait 8 750 €');

// La grille du deal et le moteur doivent donner le même CA tant que les prix coïncident.
for (let n = 1; n <= 20; n++) assert.equal(caMensuel(grille, n), mbRevenue('helpdesk', n), `${n} positions`);
assert.equal(grille[0].gros, OFFERS.helpdesk.mb[0]);
assert.equal(grille[1].gros, OFFERS.helpdesk.mb[1]);
assert.equal(grille[0].a, MB_ENTRY_POSITIONS);

// Ajouter une position augmente toujours le CA, exactement du prix de sa tranche.
for (let n = 2; n <= 40; n++) {
  const delta = caMensuel(grille, n) - caMensuel(grille, n - 1);
  assert.ok(delta > 0, `le CA recule à ${n} positions`);
  assert.equal(delta, prixPositionSuivante(grille, n - 1), `prix de la position ${n}`);
}

// Affichage et engagement.
assert.deepEqual(detailTranches(grille, 3).map(x => [x.count, x.price]), [[3, 2000]]);
assert.deepEqual(detailTranches(grille, 7).map(x => [x.count, x.price]), [[4, 2000], [3, 1750]]);
assert.equal(trancheHaute(grille, 3), grille[0]);
assert.equal(trancheHaute(grille, 5), grille[1], 'c\'est la tranche haute qui porte le volume ferme');
assert.equal(prixPositionSuivante(grille, 4), 1750, 'la 5e position passe au tarif volume');

// Revente : prix par défaut, et prix spécifique à une tranche s'il est fourni.
assert.equal(reventeMensuelle(grille, 5, 2700), 5 * 2700);
const grilleRevente = [{ ...grille[0], revente: 2800 }, { ...grille[1], revente: 2500 }];
assert.equal(reventeMensuelle(grilleRevente, 6, 9999), 4 * 2800 + 2 * 2500);

// Validation : une grille correcte passe.
validerTranches(grille);

// Validation : ce qui doit être refusé.
const refus = [
  [[{ engagement: 'sans de', gros: 2000 }], /tranches/],
  [[{ engagement: 'commence à 2', de: 2, gros: 2000 }], /position 1/],
  [[{ engagement: 'A', de: 1, a: 4, gros: 2000 }, { engagement: 'B', de: 6, gros: 1750 }], /Trou ou chevauchement/],
  [[{ engagement: 'A', de: 1, a: 5, gros: 2000 }, { engagement: 'B', de: 5, gros: 1750 }], /Trou ou chevauchement/],
  [[{ engagement: 'A', de: 1, gros: 2000 }, { engagement: 'B', de: 5, gros: 1750 }], /"a" manquant/],
  [[{ engagement: 'fermée', de: 1, a: 4, gros: 2000 }], /rester ouverte/],
  [[{ engagement: 'prix absent', de: 1 }], /prix de gros invalide/],
  [[], /vide/],
];
for (const [g, motif] of refus) assert.throws(() => validerTranches(g), motif, JSON.stringify(g));

// Une dernière tranche fermée laisserait un gros contrat facturé en dessous du réel :
// c'est précisément ce que la validation empêche.
const tronquee = [{ engagement: 'A', de: 1, a: 4, gros: 2000 }];
assert.equal(caMensuel(tronquee, 9), 8000, 'les positions hors grille seraient offertes');

console.log('Tarification par tranches : invariants validés.');
