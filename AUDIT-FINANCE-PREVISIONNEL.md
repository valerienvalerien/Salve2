# Audit du prévisionnel financier — 2026-09-17

Périmètre de cette passe : `01-Strategie-Offre/FINANCE-PREVISIONNEL.md`, la page `tresorerie-salverys.html` et le moteur `tools/finance-model.mjs` qui les alimente. L'audit du 2026-09-16 est repris en §3 ; l'audit antérieur, lié au modèle abandonné, reste dans `99-Archives/AUDIT-FINANCE-PREVISIONNEL-REGISTRE-INTERNE-2026-09-15.md`.

## 1. Ce que cette passe a corrigé

| # | Constat | Effet chiffré | Suite donnée |
|---|---|---|---|
| 1 | **Le plancher de 920 €/position n'est rentable à aucun volume.** Huit positions à 920 € rapportent `8 × 76,96 = 615,68 €` et déclenchent un manager à `810,04 €` : chaque tranche de huit creuse le résultat d'environ 194 €/mois. Le prévisionnel disait « garde-fou, pas seuil de rentabilité » sans dire que la perte **grandit** avec le volume | Prix minimal au-delà duquel un volume rattrape la structure : `843,04 + 810,04 / 8 = **944,30 €**` | §3 du prévisionnel réécrit ; **relèvement du plancher de `PRICING.md` mis en décision ouverte** (§5). La page de projection affiche l'alerte contrat par contrat |
| 2 | **L'onboarding était un forfait de 1 600 € par contrat**, quel que soit le nombre de positions. Le registre interne le décompose pourtant en socle ~400 € + ~400 €/position : les 1 600 € ne valaient que pour un contrat de **trois** positions | Un contrat d'une position était surchargé de 800 € ; un contrat de six l'était de −1 200 € | Moteur passé à `onboardingBase` + `onboardingPerPosition`. Creux recalculés : prudent **−4 477 → −3 677 €**, médian **−5 200 → −4 800 €**, expansion inchangé |
| 3 | **`tresorerie-salverys.html` ne fonctionnait pas en ouverture directe** : elle importait `./tools/finance-model.mjs` comme module, ce que le navigateur bloque en protocole `file://`. Elle n'était utilisable que servie par un serveur web | Page blanche au double-clic, sans message | Remplacée par `projection-finances-salverys.html`, qui embarque le moteur. `tools/sync-projection.mjs` l'y recopie et `tools/finance-model.test.mjs` échoue si la copie dérive |
| 4 | **Un manager était supposé mutualisable entre partenaires** d'un même métier, et **obligatoire dès la première position**. La première hypothèse est optimiste (deux partenaires = deux jeux d'outils, deux marques, deux engagements de service), la seconde est prudente et portait à elle seule le déficit d'une position support isolée | La supervision pèse 810,04 €/mois sur un contrat à 1 700 € | Les deux hypothèses sont nommées en §2 du prévisionnel. Un paramètre « positions encadrées par le fondateur » permet de chiffrer l'écart, à 0 par défaut |
| 5 | **Le VoIP du manager était implicitement nul** sans que ce soit écrit nulle part | 810,04 € au lieu de 843,04 € par manager | Ligne ajoutée au tableau d'hypothèses du §2 et champ dédié dans la page |
| 6 | **L'audit du 2026-09-16 se contredisait avec le prévisionnel** : il chiffrait une position support isolée à « −83 €/mois » là où le calcul donne **−21 €** | 62 € d'écart sur l'argument qui justifie de ne pas vendre une position support seule | Corrigé ; la valeur est recalculée par le moteur et affichée dans la page |
| 7 | **Impayés, taxes sur CA encaissé et allongement du délai de règlement n'étaient pas modélisables**, seulement mentionnés en prose | Les scénarios supposaient 100 % de recouvrement à 30 jours | Trois paramètres ajoutés au moteur, à **zéro par défaut** : les laisser à zéro est désormais une décision visible, pas un oubli |
| 8 | **Deux simulateurs allaient coexister** sur le même moteur, avec des jeux d'hypothèses exposés différents | — | `tresorerie-salverys.html` devient une redirection. Une seule page de calcul, une seule source de vérité |

## 2. Ce qui a été vérifié et tenu

Les valeurs suivantes ont été recalculées et sont reproduites par `node tools/finance-model.test.mjs` :

- Salaire chargé **736,40 €**, agent **843,04 €**, manager **810,04 €** — le plafond de cotisations à 8 × SME s'applique bien, les 18 % portent sur 2 400 000 Ar et non sur 3 250 000 Ar.
- Contributions à régime plein du §3 : helpdesk seul **+279 €**, support seul **−21 €**, 2 support **+836 €**, 5 support à 1 500 € **+2 407 €**, 9 support à 1 350 € **+2 875 €** avec deux managers.
- Le dépôt reste une avance neutre : `1 800 + 3 × 3 400 = 12 000 €`, soit exactement trois mois à 4 000 €.
- Les crédits de dépôt sont bien déduits au bon rang de facture, et l'encaissement suit la facture du délai de règlement.

## 3. Corrections antérieures, maintenues (passe du 2026-09-16)

| Sujet | Erreur corrigée | État actuel |
|---|---|---|
| Canal | Le direct médical et le poste commercial figuraient encore dans la trésorerie après leur retrait de la stratégie active | Scénarios marque blanche, fondateur seul au départ ; le direct n'est plus qu'un mode de chiffrage pour un entrant |
| Rentabilité | +421 € pour 5 positions à 1 350 € et +2 450 € à 9, sans coûts actualisés ni second manager | Calcul par contrat et par métier, reproduit par le moteur |
| Dépôt | Lu comme une couverture définitive de l'onboarding | Avance de cash créditée sur trois factures, distincte du coût d'onboarding |
| Besoin de capital | 25–30 k€ issu de scénarios caducs | Retiré ; creux calculés sur dates de signature explicites et solde de départ 0 € |
| Coûts réglementaires | Taux, plafond et comparatifs français cités sans validation | Paramètres de simulation, à vérifier sur pièces |

## 4. Limites qui restent à lever

Aucune facture, aucun bulletin de paie, aucun relevé bancaire n'a été fourni. Les paramètres CNaPS et d'organisme de santé, les coûts de recrutement et d'onboarding, les licences, l'assurance, la comptabilité, les frais de change, la TVA et les autres taxes, l'équipement et les liaisons de secours, les congés et le remplacement, les indemnités de rupture, le solde et les dettes de départ ne sont pas renseignés. **Ces prévisions ne sont donc pas des comptes et ne peuvent soutenir une décision de financement.**

Restent hors projection : le **modèle A mutualisé** (1 120 € pour 400 tickets) et le **télésecrétariat médical facturé à l'appel**, tant que le temps par interaction et le staffing partagé ne sont pas mesurés. Les chiffrer suppose une unité d'œuvre qui n'existe pas encore dans le moteur — un pool partagé, pas des positions dédiées.

Deux points de méthode à ne pas perdre de vue :

- Le **coussin de 10 %** est soustrait du cash comme s'il était dépensé. C'est prudent pour dimensionner un besoin, mais cela signifie qu'un scénario « à l'équilibre » l'est avec une réserve non consommée. Ne pas le lire comme une charge.
- Le **solde initial de 0 €** mesure un besoin théorique. Il n'est pas le solde réel de Salverys, et la rupture de contrat déjà payée (1 000 000 Ar) est dans le solde bancaire, pas dans le cash futur.

Pour valider un deal : rapprocher le devis de `PRICING.md`, saisir ses positions, ses dates et son tarif réels dans `projection-finances-salverys.html`, puis tester un retard d'encaissement et un impayé avant de signer. Conserver le registre d'hypothèses et sa date de vérification avec chaque version présentée à un partenaire ou à un financeur.
