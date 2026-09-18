/** Tarification par tranches d'un deal, pour tools/deal-build.mjs.
 *
 * Depuis le 2026-09-18 (PRICING.md §1), la remise de volume n'est PAS rétroactive :
 * chaque position est facturée au prix de SA tranche, et les premières positions restent
 * au tarif d'entrée quel que soit le volume total. Une remise rétroactive s'applique aussi
 * aux positions déjà vendues et peut coûter plus que la position qu'elle fait gagner : elle
 * faisait reculer le résultat de 1 503 € au passage de 8 à 9 positions
 * (AUDIT-FINANCE-PREVISIONNEL.md §0).
 *
 * Une tranche : { engagement, de, a?, gros, revente?, minimumFacturable?, retenu? }.
 * `a` absent sur la dernière tranche, qui reste ouverte.
 */

/** Nombre de positions du contrat qui tombent dans cette tranche. */
export function positionsDansTranche(tranche, positions) {
  if (positions < tranche.de) return 0;
  return Math.min(positions, tranche.a ?? Infinity) - tranche.de + 1;
}

/** CA mensuel du contrat, tranche par tranche. Jamais `positions × prix`. */
export function caMensuel(grille, positions) {
  return grille.reduce((total, t) => total + positionsDansTranche(t, positions) * t.gros, 0);
}

/** Ce que le partenaire encaisse s'il revend au prix conseillé de chaque tranche. */
export function reventeMensuelle(grille, positions, reventeParDefaut) {
  return grille.reduce(
    (total, t) => total + positionsDansTranche(t, positions) * (t.revente ?? reventeParDefaut ?? 0), 0);
}

/** Détail des tranches actives, pour l'affichage. */
export function detailTranches(grille, positions) {
  return grille
    .map(t => ({ tranche: t, count: positionsDansTranche(t, positions), price: t.gros }))
    .filter(x => x.count > 0);
}

/** La tranche la plus haute atteinte : c'est elle qui porte l'engagement de volume ferme. */
export function trancheHaute(grille, positions) {
  return [...grille].sort((x, y) => y.de - x.de).find(t => positionsDansTranche(t, positions) > 0);
}

/** Prix de la position suivante, ou null si aucune tranche ne la couvre. */
export function prixPositionSuivante(grille, positions) {
  const n = positions + 1;
  return grille.find(t => n >= t.de && n <= (t.a ?? Infinity))?.gros ?? null;
}

/**
 * Les tranches doivent couvrir 1..∞ sans trou ni chevauchement, sinon le document ment.
 * Lève une Error dont le message est destiné à être affiché tel quel.
 */
export function validerTranches(grille) {
  if (!Array.isArray(grille) || grille.length === 0) throw new Error('Grille vide.');

  const sansDe = grille.filter(t => !Number.isInteger(t.de) || t.de < 1);
  if (sansDe.length) {
    throw new Error([
      'Grille sans tranches : chaque ligne doit porter "de" (première position) et "a"',
      '(dernière position, absent sur la dernière ligne qui reste ouverte).',
      'La tarification est passée par tranches non rétroactives le 2026-09-18 (PRICING.md §1).',
      'Exemple :',
      '  {"engagement":"Positions 1 à 4 — tarif d\'entrée","de":1,"a":4,"gros":2000}',
      '  {"engagement":"Positions 5 et suivantes — tarif volume","de":5,"gros":1750}',
      ...sansDe.map(t => `Ligne sans "de" : « ${t.engagement} »`),
    ].join('\n'));
  }

  const tri = [...grille].sort((x, y) => x.de - y.de);
  if (tri[0].de !== 1) throw new Error(`La première tranche doit commencer à la position 1 (trouvé : ${tri[0].de}).`);

  for (let i = 0; i < tri.length - 1; i++) {
    if (!Number.isInteger(tri[i].a) || tri[i].a < tri[i].de) {
      throw new Error(`Tranche « ${tri[i].engagement} » : "a" manquant ou inférieur à "de".`);
    }
    if (tri[i + 1].de !== tri[i].a + 1) {
      throw new Error(
        `Trou ou chevauchement entre « ${tri[i].engagement} » (jusqu'à ${tri[i].a})\n` +
        `et « ${tri[i + 1].engagement} » (à partir de ${tri[i + 1].de}).`);
    }
  }

  if (tri.at(-1).a != null) {
    throw new Error(
      `La dernière tranche « ${tri.at(-1).engagement} » doit rester ouverte : retirer "a".\n` +
      'Sans cela, un contrat plus gros que la grille serait facturé à zéro.');
  }

  for (const t of grille) {
    if (typeof t.gros !== 'number' || !Number.isFinite(t.gros) || t.gros < 0) {
      throw new Error(`Tranche « ${t.engagement} » : prix de gros invalide.`);
    }
  }
}
