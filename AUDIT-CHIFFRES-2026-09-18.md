# Tri des chiffres du dépôt — 2026-09-18

Audit d'origine et de validité des valeurs chiffrées qui circulent dans les **fichiers actifs**. Déclenché par une erreur constatée le 2026-09-18 : une estimation marché archivée avait été promue en grille tarifaire sélectionnable dans un outil (`AUDIT-FINANCE-PREVISIONNEL.md` §0.b).

Quatre verdicts : **vérifié**, **hypothèse assumée**, **estimation non validée**, **faux aujourd'hui**. Un chiffre « faux aujourd'hui » n'était pas faux quand il a été écrit : une décision postérieure l'a invalidé.

## 1. Inventé — aucune source, même pas une estimation

| Valeur | Où | Verdict |
|---|---|---|
| **2 150 €** et **2 500 €** — « milieu de fourchette » du tarif direct | Ex-`projection-finances-salverys.html` | Calculés comme le point médian d'une fourchette elle-même estimée, le 2026-09-17, puis affichés comme un cran sélectionnable. **Supprimés le 2026-09-18.** |

## 2. Faux aujourd'hui — invalidés par une décision postérieure

| Valeur | Où | Ce qui l'invalide |
|---|---|---|
| **Coût complet ~400-450 €/ETP/mois** | `EVALUATION-STRATEGIQUE-2026-06.md` §0 | Le modèle freelance a été abandonné le **2026-08-14** au profit du salariat. Le coût réel d'une position est **843,04 €** — salaire chargé 736,40 € + VoIP 30 € + coussin 10 %. La valeur de juin est **la moitié** du coût actuel |
| **Marge brute 65-80 %** | `EVALUATION-STRATEGIQUE-2026-06.md` §0 et §3 | Découle du coût ci-dessus. Marges réelles sur la grille en vigueur : support **50,4 %** à 1 700 € et **43,8 %** à 1 500 € ; helpdesk **57,8 %** à 2 000 € et **51,8 %** à 1 750 €. Écart de **24,6 points** |
| **« Payer les agents 40-70 % au-dessus du marché coûte ~60-100 €/ETP/mois »** | `EVALUATION-STRATEGIQUE-2026-06.md` §3 | Repose sur le coût faux et sur une marge surestimée. Le salaire retenu depuis le 2026-08-14 est déjà de 3 250 000 Ar brut ; la marge disponible pour aller au-delà est de 44-58 %, pas de 65-80 % |
| **« Le plancher coût chargé + 20 % est très loin sous tous les prix »** | `EVALUATION-STRATEGIQUE-2026-06.md` §3 | Le plancher de 920 € n'est rentable **à aucun volume** : chaque tranche de huit positions à ce prix rapporte 615,68 € et coûte un manager à 810,04 € (`AUDIT-FINANCE-PREVISIONNEL.md` §1) |
| **Grille 1-4 / 5-8 / 9+ ETP** | `99-Archives/FICHE-OFFRE-ACTUELLE-REGISTRE-INTERNE-2026-09-15.html`, `RAPPORT-PRIX.html` | Remplacée le **2026-09-18** par deux tranches non rétroactives. Le palier 9+ est supprimé |
| **« −40 à −60 % » d'économie** | Divers supports anciens | Déjà abrogé par le registre interne. `CLAUDE.md` interdit tout claim chiffré d'économie vs France sans étude datée du métier avec source vérifiable |

## 3. Estimation non validée — à ne pas utiliser pour chiffrer

Toutes issues de la recherche concurrentielle du **2026-06-10**, dont la note de sources avertit elle-même : *« Plusieurs sites concurrents bloquent la lecture automatisée : leurs prix proviennent des pages indexées ; les coûts complets par ETP sont des estimations recoupées. »*

| Valeur | Où | Pourquoi elle ne vaut pas |
|---|---|---|
| **Direct : 1 900-2 400 € (support), 2 200-2 800 € (helpdesk)** | Registre archivé §3, `EVALUATION-STRATEGIQUE-2026-06.md` | Aucune décision datée ne les fixe. Les sources listées sont des sites de télésecrétariat médical et des BPO généralistes — **aucune ne publie un prix de position dédiée en helpdesk IT ou en support SaaS en direct** |
| **Tarif horaire : 12-15 €/h direct, 8-11 €/h MB** | Registre archivé, `RAPPORT-PRIX.html` | Même passe de recherche, jamais arbitré. Aucun devis ni aucune vente ne l'a confirmé |
| **À l'interaction : 2,5-4 € direct, 1,8-2,8 € MB** | Registre archivé | Idem. À rapprocher du **2,80 €/ticket** au-delà du forfait, lui arbitré dans `PRICING.md` §1 |
| **Corridor offshore malgache 600-1 400 €/ETP** | `EVALUATION-STRATEGIQUE-2026-06.md` §3 | Recoupement de prix concurrents partiellement non lisibles. Utilisable comme ordre de grandeur de positionnement, **jamais dans un argumentaire chiffré** |
| **Salaire moyen agent ~700 000 Ar** | `EVALUATION-STRATEGIQUE-2026-06.md` §3 | Source nommée (lagazette-madagascar.com) mais non datée dans le document. Plausible, à revérifier avant toute citation externe |
| **Turnover sectoriel 15-30 %/an** | `EVALUATION-STRATEGIQUE-2026-06.md` §3 | Ordre de grandeur sans source individuelle attachée |

## 4. Vérifié ou hypothèse assumée — utilisable

| Valeur | Source | Statut |
|---|---|---|
| Grille MB **1 700 / 1 500 €** support, **2 000 / 1 750 €** helpdesk, tranches non rétroactives | `PRICING.md` §1 | **Décision datée** du 2026-09-18, historique d'arbitrages traçable |
| Dépôt **900 €/position**, crédit **300 € × 3 factures** | `PRICING.md` §3 | Décision datée, neutralité vérifiée par test |
| Modèle A : **1 120 €** / 400 tickets, **2,80 €** au-delà | `PRICING.md` §1 | Décision datée |
| Outils récurrents **68 €/mois** | `01-Strategie-Offre/REGISTRE-COUTS-OUTILS.md` | **Montants déclarés** par le fondateur le 2026-09-16, non rapprochés de factures |
| Onboarding **400 € de socle + 400 €/position** | `AUDIT-ESPACE-CLIENT.md` §9.2 | Source active, ordre de grandeur non documenté sur temps passé |
| Coût position **843,04 €** | Calculé par `tools/finance-model.mjs` | **Hypothèse** : cotisations 18 % plafonnées à 8 × SME, SME 300 000 Ar, change 5 000 Ar/€. Aucun de ces trois paramètres n'est vérifié sur la paie réelle |
| SME **300 000 Ar** (fév. 2026) | lexpress.mg, cité dans l'évaluation de juin | Hypothèse réglementaire, à confirmer auprès du gestionnaire de paie |

## 5. Ce qu'il faut en faire

1. **`EVALUATION-STRATEGIQUE-2026-06.md` est annoté, pas réécrit.** La règle de `99-Archives/README.md` s'applique : une archive de raisonnement datée ne se réécrit pas a posteriori. Un bandeau en tête renvoie ici.
2. **Ne jamais citer une marge brute à un tiers** avant d'avoir recalculé sur 843,04 €. Le chiffre de 65-80 % circule dans plusieurs supports ; il est faux de 25 points.
3. **Aucun tarif direct, horaire ou à l'interaction n'est arbitré.** Un entrant se chiffre au coût réel, dans `grille-negociation-salverys.html`.
4. **Les trois hypothèses de paie** — taux de cotisation, plafond, taux de change — pèsent directement sur le coût de 843,04 € et donc sur toute marge annoncée. Les faire confirmer par le gestionnaire de paie est le premier chantier de fiabilisation.
