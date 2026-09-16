# Prévisionnel financier Salverys — marque blanche

Version de travail du 2026-09-16. Le modèle historique est conservé dans `99-Archives/FINANCE-PREVISIONNEL-REGISTRE-INTERNE-2026-09-15.md`. Les calculs reproduisibles sont dans `tools/finance-model.mjs` et les scénarios dans `tools/finance-scenarios.mjs` ; `tresorerie-salverys.html` utilise ce même moteur. **Aucun chiffre de cette page ne représente une dépense réellement constatée tant que les factures, la paie et le solde bancaire n'ont pas été rapprochés.**

## 1. Situation et périmètre

Le fondateur prospecte seul ; aucun agent, manager ni commercial n'est salarié dans le scénario de départ. La prospection active vise les partenaires français en marque blanche. Les offres directes, les clients médicaux directs et la rémunération d'un commercial ne figurent donc pas dans les projections. Un contrat signé peut changer ces hypothèses : il faut alors saisir ses positions, son prix, ses dates et ses coûts dans le simulateur.

Le scénario de trésorerie part de **0 € de solde initial pour mesurer le besoin théorique**. Ce zéro n'est pas le solde réel de Salverys. Le capital disponible, les créances, les dettes et les taxes sont à renseigner avant toute décision de financement. Le fondateur a indiqué le 2026-09-16 que **la rupture du contrat de l'ancienne commerciale, de 1 000 000 Ar, a déjà été payée** (environ 200 € au taux de simulation) et que son **salaire net mensuel était de 2 800 000 Ar** jusqu'à son départ fin août. Ce salaire historique ne remplace pas l'hypothèse de salaire **brut** des futurs agents/managers. La rupture payée n'est pas ajoutée une seconde fois au cash futur ; son effet est déjà dans le solde bancaire réel, encore non renseigné.

## 2. Hypothèses chiffrées à vérifier

| Paramètre | Hypothèse du dépôt | Statut et vérification |
|---|---:|---|
| Brut mensuel agent et manager | 3 250 000 Ar chacun | Politique interne, confirmer avec contrat et bulletins de paie |
| Change de calcul | 5 000 Ar / € | Convention de simulation, remplacer par le taux de paiement réel et ses frais |
| Cotisations employeur | 18 % sur le brut plafonné à 8 × SME ; SME supposé 300 000 Ar | **Hypothèse réglementaire non vérifiée** ; obtenir assiette et taux applicables auprès du gestionnaire de paie/CNaPS/organisme de santé avant embauche |
| VoIP par agent | 30 €/mois | Devis ou facture à obtenir, coût susceptible de varier selon les outils du partenaire |
| Imprévus salaires et VoIP | 10 % | Coussin de simulation, pas une charge comptable |
| Outils récurrents connus | 68 €/mois dans les scénarios | `REGISTRE-COUTS-OUTILS.md` : 65 €/mois d'abonnements + 36 €/an de domaines ; inclut Claude à 20 €/mois et Ringover à 25 €/mois ; Sales Navigator est inactif |
| Onboarding | 1 600 € **par contrat** | Ordre de grandeur ancien ; documenter le temps, les outils, le recrutement et les dépenses engagées |
| Facturation | Première facture en M+2 après signature | Hypothèse de délai ; remplacer par les jalons du devis |
| Encaissement | Un mois après facturation | Hypothèse de règlement à 30 jours, hors retard et impayé |
| Dépôt B | 900 €/position à la signature, puis crédit 300 €/position sur chacune des trois premières factures | Conforme à `PRICING.md` ; **avance de trésorerie, pas revenu supplémentaire** |

Le calcul salarial illustratif donne **736,40 €/mois de salaire chargé** par personne : `(3 250 000 + 18 % × min(3 250 000, 8 × 300 000)) / 5 000`. L'agent est **budgété à 843,04 €/mois** avec VoIP et coussin de 10 % ; un manager à **810,04 €/mois** avec ce coussin. Le coussin est retiré du **cash disponible** dans le simulateur comme réserve prudente, même s'il ne constitue pas une paie effectivement versée. Ces valeurs ne comprennent pas les congés de remplacement, le recrutement, l'équipement, les licences supplémentaires, la comptabilité, l'assurance, les impôts, les frais bancaires et de change. Un manager est budgété dès qu'un métier a une position salariée, puis un manager de plus par tranche de huit agents **dans ce métier**.

**À relever avant validation :** les factures correspondant au tableau d'outils communiqué par le fondateur, le coût employeur des bulletins de l'ancienne commerciale, les paramètres de paie locaux, le justificatif de la rupture déjà payée, le coût d'onboarding, TVA et autres taxes, solde et dettes de départ. Les comparaisons de salaires locaux et de coûts français contenues dans d'anciens supports ne sont pas utilisées ici faute de sources datées et vérifiées.

## 3. Prix et marge par contrat

Les prix des positions dédiées sont ceux de `PRICING.md` : support applicatif **1 700 / 1 500 / 1 350 €** et helpdesk **2 000 / 1 750 / 1 550 €** par position selon les paliers 1–4 / 5–8 / 9+. La remise de palier exige le minimum de positions fermes facturables au contrat. Le modèle A à **1 120 € pour 400 tickets** et le médical MB facturé à l'appel ne sont **pas projetés** tant que la capacité nécessaire, le temps par interaction et le staffing partagé ne sont pas chiffrés.

Une marge de contrat doit inclure **tous les agents et managers déclenchés**, les outils supplémentaires, le risque d'absence et l'onboarding amorti. Le seuil historique de **920 €/position** est seulement un garde-fou de négociation ; il n'est pas un seuil de rentabilité. À 920 €, la contribution par agent après coût variable n'est que `920 − 843,04 = 76,96 €`, avant manager et structure. Aucun devis ne doit être approuvé sur ce seul critère.

| Contrat isolé, un métier | CA mensuel | Agents + manager + outils (68 €) | Résultat indicatif mensuel |
|---|---:|---:|---:|
| 1 helpdesk à 2 000 € | 2 000 € | 1 721 € | **+279 €** |
| 1 support à 1 700 € | 1 700 € | 1 721 € | **−21 €** |
| 2 support à 1 700 € | 3 400 € | 2 564 € | **+836 €** |
| 5 support au palier 5–8, à 1 500 € | 7 500 € | 5 093 € | **+2 407 €** |
| 9 support au palier 9+, à 1 350 € | 12 150 € | 9 275 € (9 agents, **2 managers**) | **+2 875 €** |

Ces résultats sont des contributions **à régime plein, hors onboarding, taxes et coûts non renseignés**. L'ancien prévisionnel annonçait **+421 € pour 5 positions à 1 350 €** ; avec les coûts actuels, même ce prix non contractuel au palier 5 donnerait environ **+1 657 €** avant coûts manquants. L'ancien **+2 450 € à 9 positions** n'est pas reproductible avec la règle de manager supplémentaire. Ces assertions ont été retirées, sans les remplacer par une promesse de marge.

## 4. Trésorerie sur 24 mois — scénarios explicites

Les scénarios suivants sont **des combinaisons de signatures à tester**, sans probabilité ni cadence commerciale attestée. Les positions sont embauchées en M+1, facturées à partir de M+2, encaissées en M+3. Les managers démarrent avec les agents. Un coût d'onboarding supposé de 1 600 € est payé à chaque signature ; le dépôt B est encaissé le même mois et crédité sur les trois premières factures. Les outils connus coûtent 68 €/mois même en attente. Aucun nouveau deal n'est supposé après les dates décrites.

| Scénario | Signatures hypothétiques | Factures M12 | Charges M12 | Creux de cash sur 24 mois | Cash M24, solde initial 0 € |
|---|---|---:|---:|---:|---:|
| Attente | Aucune | 0 € | 68 € | −1 632 € (M24) | −1 632 € |
| Prudent | 1 helpdesk en M4 | 2 000 € | 1 721 € | **−4 477 € (M9)** | −294 € |
| Médian | 2 helpdesk en M4 ; 2 support en M9 | 6 800 € (crédits du second contrat) | 5 060 € | **−5 200 € (M6)** | +24 004 € |
| Expansion | 3 helpdesk en M3 ; 3 support en M7 ; 3 helpdesk en M10 | 16 200 € (crédits en cours) | 9 275 € | **−5 918 € (M5)** | +93 772 € |

Ces valeurs sont la sortie du moteur de calcul, arrondie à l'euro. Le modèle d'expansion suppose **trois contrats** et neuf agents recrutés ; il ne décrit pas le pipeline réel. Les factures M12 comprennent les crédits de dépôt encore en cours. À partir du quatrième mois facturé de chaque deal, le plein tarif reprend ; le dépôt n'a jamais augmenté le total contractuel. Les résultats positifs peuvent être effacés par un retard de paiement, un coût d'embauche supérieur ou des charges non renseignées.

Le **creux + coussin de 30 %** serait d'environ **5,8 k€ / 6,8 k€ / 7,7 k€** pour les scénarios prudent / médian / expansion. Ce sont des besoins *illustratifs au solde initial zéro*, **pas une recommandation de capital**. L'ancien montant de **25–30 k€** résultait d'une trajectoire avec un poste commercial supprimé et du direct ; il ne doit plus être repris. Le besoin réel est `max(0, −creux − trésorerie disponible)`, augmenté d'un coussin choisi et des dettes/charges non incluses.

## 5. Décisions et mise à jour

Avant signature, chiffrer le contrat avec le volume **ferme**, la date d'embauche, les coûts d'installation, la couverture horaire et le minimum de marge après supervision. Ne pas embaucher sur des volumes espérés ou sur un pilote sans engagement payé. Avant de présenter ce prévisionnel à un financeur, rapprocher le solde initial et au moins deux mois de coûts réels, vérifier les cotisations et remplacer les dates de scénario par le pipeline signé. Le simulateur offre un point de départ contrôlable ; le suivi comptable mensuel reste la source des faits.
