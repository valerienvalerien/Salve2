# Prévisionnel financier Salverys — marque blanche

Version de travail du 2026-09-17. Le modèle historique est conservé dans `99-Archives/FINANCE-PREVISIONNEL-REGISTRE-INTERNE-2026-09-15.md`. Les calculs reproduisibles sont dans `tools/finance-model.mjs` et les scénarios dans `tools/finance-scenarios.mjs` ; la page `projection-finances-salverys.html` utilise ce même moteur, embarqué à l'identique et vérifié par `tools/finance-model.test.mjs`. **Aucun chiffre de cette page ne représente une dépense réellement constatée tant que les factures, la paie et le solde bancaire n'ont pas été rapprochés.**

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
| VoIP par manager | 0 €/mois | **Hypothèse implicite du modèle** : le manager n'a pas de ligne facturée. À corriger si la supervision décroche ou prend des escalades |
| Imprévus salaires et VoIP | 10 % | Coussin de simulation, pas une charge comptable |
| Outils récurrents connus | 68 €/mois dans les scénarios | `REGISTRE-COUTS-OUTILS.md` : 65 €/mois d'abonnements + 36 €/an de domaines ; inclut Claude à 20 €/mois et Ringover à 25 €/mois ; Sales Navigator est inactif |
| Onboarding | **400 € de socle par contrat + 400 € par position** | Décomposition du registre interne. Le forfait unique de 1 600 €/contrat utilisé jusqu'au 2026-09-16 ne valait que pour un contrat de **trois** positions : il surestimait les petits contrats de 800 € et sous-estimerait les gros. Reste à documenter sur temps passé et dépenses engagées |
| Facturation | Première facture en M+2 après signature | Hypothèse de délai ; remplacer par les jalons du devis |
| Encaissement | Un mois après facturation | Hypothèse de règlement à 30 jours, hors retard et impayé |
| Dépôt B | 900 €/position à la signature, puis crédit 300 €/position sur chacune des trois premières factures | Conforme à `PRICING.md` ; **avance de trésorerie, pas revenu supplémentaire** |

Le calcul salarial illustratif donne **736,40 €/mois de salaire chargé** par personne : `(3 250 000 + 18 % × min(3 250 000, 8 × 300 000)) / 5 000`. L'agent est **budgété à 843,04 €/mois** avec VoIP et coussin de 10 % ; un manager à **810,04 €/mois** avec ce coussin. Le coussin est retiré du **cash disponible** dans le simulateur comme réserve prudente, même s'il ne constitue pas une paie effectivement versée. Ces valeurs ne comprennent pas les congés de remplacement, le recrutement, l'équipement, les licences supplémentaires, la comptabilité, l'assurance, les impôts, les frais bancaires et de change. Un manager est budgété dès qu'un métier a une position salariée, puis un manager de plus par tranche de huit agents **dans ce métier**.

Deux hypothèses de supervision restent à trancher, et elles pèsent plus que le prix dans les petits contrats. La première est **optimiste** : le modèle mutualise un manager entre plusieurs partenaires d'un même métier, alors que deux partenaires ont deux jeux d'outils, deux marques et deux engagements de service. La seconde est **prudente** : un manager est budgété dès la première position, alors que le fondateur peut encadrer lui-même les deux ou trois premières. Cette seconde hypothèse porte à elle seule le déficit d'une position support isolée. Le paramètre « positions encadrées par le fondateur » de la page de projection permet de chiffrer l'écart avant de s'engager ; il vaut **0 par défaut**, et toute valeur au-dessus doit correspondre à un temps de supervision réellement disponible, prospection comprise.

**À relever avant validation :** les factures correspondant au tableau d'outils communiqué par le fondateur, le coût employeur des bulletins de l'ancienne commerciale, les paramètres de paie locaux, le justificatif de la rupture déjà payée, le coût d'onboarding, TVA et autres taxes, solde et dettes de départ. Les comparaisons de salaires locaux et de coûts français contenues dans d'anciens supports ne sont pas utilisées ici faute de sources datées et vérifiées.

## 3. Prix et marge par contrat

Les prix des positions dédiées sont ceux de `PRICING.md`, **par tranches non rétroactives** depuis le 2026-09-18 : les quatre premières positions au tarif d'entrée — support **1 700 €**, helpdesk **2 000 €** — puis la cinquième et les suivantes au tarif volume — support **1 500 €**, helpdesk **1 750 €**. Le tarif volume exige le minimum de positions fermes facturables au contrat. Le modèle A à **1 120 € pour 400 tickets** et le médical MB facturé à l'appel ne sont **pas projetés** tant que la capacité nécessaire, le temps par interaction et le staffing partagé ne sont pas chiffrés.

Le **palier 9+ à 1 350 / 1 550 € est supprimé**, et la remise n'est plus rétroactive. Motif : une remise appliquée à toutes les positions coûte plus que la position qu'elle fait gagner. En support, la neuvième position déclenchait 1 200 € de remise sur les huit déjà vendues pour 507 € de marge nouvelle, plus 810 € de second manager — un contrat de 9 positions rapportait **1 503 € de moins** qu'un contrat de 8, et il fallait 12 positions pour revenir au résultat de 8. Par tranches, ajouter une position ajoute toujours de la marge. Le seul recul qui subsiste est celui du **palier de manager**, toutes les huit positions : en support il coûte 153 €/mois à la neuvième position, parce que 657 € de marge nouvelle ne couvrent pas 810 € de supervision. C'est un coût d'escalier réel, pas un défaut de grille.

Une marge de contrat doit inclure **tous les agents et managers déclenchés**, les outils supplémentaires, le risque d'absence et l'onboarding amorti. Le seuil historique de **920 €/position** est seulement un garde-fou de négociation ; il n'est pas un seuil de rentabilité. À 920 €, la contribution par agent après coût variable n'est que `920 − 843,04 = 76,96 €`, avant manager et structure.

**Plus grave que « insuffisant » : 920 € ne devient jamais rentable, à aucun volume.** Huit positions à ce prix rapportent `8 × 76,96 = 615,68 €` et déclenchent un manager à `810,04 €`. Chaque tranche de huit positions vendues à 920 € creuse donc le résultat d'environ 194 € de plus par mois — la perte grandit avec le volume au lieu de se résorber. Le prix en dessous duquel aucun volume ne rattrape la structure est `843,04 + 810,04 / 8 = 944,30 €/position`. Le plancher de `PRICING.md` est **sous ce seuil** : il doit être relevé au-dessus de 944,30 €, et en pratique bien plus haut pour couvrir les outils, l'onboarding et les coûts non renseignés. En attendant cet arbitrage, aucun devis ne doit être approuvé sur le seul critère du plancher.

| Contrat isolé, un métier | CA mensuel | Agents + manager + outils (68 €) | Résultat indicatif mensuel |
|---|---:|---:|---:|
| 1 helpdesk | `1 × 2 000` = 2 000 € | 1 721 € | **+279 €** |
| 1 support | `1 × 1 700` = 1 700 € | 1 721 € | **−21 €** |
| 2 support | `2 × 1 700` = 3 400 € | 2 564 € | **+836 €** |
| 5 support | `4 × 1 700 + 1 × 1 500` = 8 300 € | 5 093 € | **+3 207 €** |
| 7 helpdesk | `4 × 2 000 + 3 × 1 750` = 13 250 € | 6 779 € | **+6 471 €** |
| 9 support | `4 × 1 700 + 5 × 1 500` = 14 300 € | 9 275 € (9 agents, **2 managers**) | **+5 025 €** |

Ces résultats sont des contributions **à régime plein, hors onboarding, taxes et coûts non renseignés**. Ils remplacent ceux calculés sur la grille rétroactive : 5 support donnaient **+2 407 €** au lieu de +3 207 €, et 9 support **+2 875 €** au lieu de +5 025 €. L'écart n'est pas un gain nouveau — c'est le montant que la remise rétroactive prélevait sur des positions déjà vendues au prix fort.

Le prix **moyen** d'un contrat n'est jamais un des deux tarifs de la grille dès la cinquième position : sept positions helpdesk se facturent 13 250 €, soit 1 893 € en moyenne. Ne jamais annoncer une moyenne comme un prix unitaire, ni comparer une moyenne au plancher — c'est le tarif de la tranche la plus basse qui dit à quel prix on accepterait la position suivante.

## 4. Trésorerie sur 24 mois — scénarios explicites

Les scénarios suivants sont **des combinaisons de signatures à tester**, sans probabilité ni cadence commerciale attestée. Les positions sont embauchées en M+1, facturées à partir de M+2, encaissées en M+3. Les managers démarrent avec les agents. L'onboarding est payé à chaque signature, socle plus part par position ; le dépôt B est encaissé le même mois et crédité sur les trois premières factures. Les outils connus coûtent 68 €/mois même en attente. Aucun nouveau deal n'est supposé après les dates décrites.

| Scénario | Signatures hypothétiques | Factures M12 | Charges M12 | Creux de cash sur 24 mois | Cash M24, solde initial 0 € |
|---|---|---:|---:|---:|---:|
| Attente | Aucune | 0 € | 68 € | −1 632 € (M24) | −1 632 € |
| Prudent | 1 helpdesk en M4 | 2 000 € | 1 721 € | **−3 677 € (M9)** | +506 € |
| Médian | 2 helpdesk en M4 ; 2 support en M9 | 6 800 € (crédits du second contrat) | 5 060 € | **−4 800 € (M6)** | +24 804 € |
| Expansion | 3 helpdesk en M3 ; 3 support en M7 ; 3 helpdesk en M10 | 16 200 € (crédits en cours) | 9 275 € | **−5 918 € (M5)** | +93 772 € |

Ces valeurs sont la sortie du moteur de calcul, arrondie à l'euro. Elles remplacent les creux de **−4 477 €** (prudent) et **−5 200 €** (médian) publiés jusqu'au 2026-09-16, qui reposaient sur un onboarding forfaitaire de 1 600 € appliqué même à un contrat d'une seule position. Le scénario d'expansion, à trois positions par contrat, est inchangé. Le modèle d'expansion suppose **trois contrats** et neuf agents recrutés ; il ne décrit pas le pipeline réel. Les factures M12 comprennent les crédits de dépôt encore en cours. À partir du quatrième mois facturé de chaque deal, le plein tarif reprend ; le dépôt n'a jamais augmenté le total contractuel. Les résultats positifs peuvent être effacés par un retard de paiement, un coût d'embauche supérieur ou des charges non renseignées.

Le **creux + coussin de 30 %** serait d'environ **4,8 k€ / 6,2 k€ / 7,7 k€** pour les scénarios prudent / médian / expansion. Ce sont des besoins *illustratifs au solde initial zéro*, **pas une recommandation de capital**. L'ancien montant de **25–30 k€** résultait d'une trajectoire avec un poste commercial supprimé et du direct ; il ne doit plus être repris. Le besoin réel est `max(0, −creux − trésorerie disponible)`, augmenté d'un coussin choisi et des dettes/charges non incluses.

Trois risques que ces scénarios **ne chiffrent pas** tant qu'ils restent à zéro dans les hypothèses : un impayé ou un défaut de partenaire, les taxes et frais de change sur le CA encaissé, et un allongement du délai de règlement au-delà de 30 jours. Les trois champs existent dans la page de projection ; les laisser à zéro est une décision, pas une absence de risque.

## 5. Décisions et mise à jour

Avant signature, chiffrer le contrat avec le volume **ferme**, la date d'embauche, les coûts d'installation, la couverture horaire et le minimum de marge après supervision. Ne pas embaucher sur des volumes espérés ou sur un pilote sans engagement payé. Avant de présenter ce prévisionnel à un financeur, rapprocher le solde initial et au moins deux mois de coûts réels, vérifier les cotisations et remplacer les dates de scénario par le pipeline signé. Le simulateur offre un point de départ contrôlable ; le suivi comptable mensuel reste la source des faits.

**Décision en attente, à prendre avant le prochain devis :** relever le plancher de négociation de `PRICING.md`, aujourd'hui à 920 €/position, au-dessus de 944,30 € (§3). Tant que ce n'est pas fait, le document tarifaire autorise un prix dont on sait qu'il perd de l'argent à tous les volumes.

Un entrant en direct se chiffre avec le même outil : la page de projection permet de choisir, contrat par contrat, la grille marque blanche, un prix client final, ou un prix libre. Le mode direct sert à répondre à une demande entrante ; il ne rouvre pas la prospection directe, gelée depuis le 2026-09-07. Il ne porte pas de coût d'acquisition par défaut : en direct, ce coût existe et se saisit dans le champ prévu.

> ⚠️ **Aucun tarif direct n'est arbitré, et il ne faut pas faire comme s'il l'était.** Les valeurs de **1 900–2 400 €** (support) et **2 200–2 800 €** (helpdesk) qui circulent dans les documents proviennent de `99-Archives/PRICING-REGISTRE-INTERNE-2026-09-15.md` §3, sous le titre « référence interne », issues de l'évaluation stratégique du 2026-06-10. Elles ne correspondent à **aucune décision datée**, contrairement à la grille marque blanche. Les sources de cette étude sont des sites de télésecrétariat médical et des BPO généralistes : **aucune ne publie un prix de position dédiée en helpdesk IT ou en support SaaS en direct**, et l'étude qualifie elle-même ses chiffres d'« estimations recoupées ». Conformément à `CLAUDE.md`, elles restent au registre interne. La page de projection les affiche en filigrane, étiquetées comme repère non validé, et **exige un prix saisi** pour calculer. Avant de chiffrer un entrant, partir du coût réel et de la marge visée, pas de ce repère.
