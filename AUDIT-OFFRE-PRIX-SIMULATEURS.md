# Audit — offre, prix et simulateurs (2026-09-16)

L'audit historique des simulateurs destinés au direct est conservé dans `99-Archives/AUDIT-OFFRE-PRIX-SIMULATEURS-REGISTRE-INTERNE-2026-09-15.md`. Depuis le retrait du direct de la grille active, les trois pages publiques de métier présentent le cadrage partenaire et ne calculent plus un prix direct ou une économie « vs France ».

| Vérification | Résultat actuel |
|---|---|
| Modèle A IT | 1 120 €/mois pour 400 tickets, 2,80 €/ticket au-delà ; aucune position nominative ni présence continue incluse |
| Modèle B IT | 35 h de travail/semaine par position ; tarification **par tranches non rétroactives** depuis le 2026-09-18 — positions 1 à 4 au tarif d'entrée, 5 et suivantes au tarif volume, lié au minimum facturable garanti. Palier 9+ supprimé |
| Médical MB | Prix à l'appel selon créneau, hors projection de marge tant que la durée et la capacité ne sont pas mesurées |
| Comparatif France | Retiré des pages publiques, faute de coût complet sourcé, daté et comparable |
| Trésorerie | Page unique `projection-finances-salverys.html` sur le moteur `tools/finance-model.mjs` ; dépôt crédité sur trois factures ; choix du tarif par contrat (marque blanche, client final, prix libre). `tresorerie-salverys.html` redirige vers elle depuis le 2026-09-17 |
| Plancher de 920 € | **Point ouvert** : il est inférieur au prix minimal de 944,30 €/position en dessous duquel aucun volume ne couvre la supervision (`AUDIT-FINANCE-PREVISIONNEL.md` §1) |
| Documents commerciaux | Les PDF sont régénérés des HTML alignés sur `PRICING.md` et `PRODUIT-ET-OFFRES.md` |

**À tester avec des données réelles :** durée des tickets/appels, prix et disponibilité du pool, cotisations employeur, coût de relève, coût d'onboarding et frais d'outils. Les tableaux historiques ne doivent pas être copiés dans un devis actif.
