# Expansion de compte — faire grossir le contrat, pas le prix de la position

Proposition du 2026-09-26. **Ce document ne modifie pas la grille** : `PRICING.md` fait foi pour tout devis. Il décrit comment présenter l'offre marque blanche pour que la première position soit un point d'entrée et non le contrat cible, et liste en §8 les décisions à prendre avant d'en faire une offre. Les calculs viennent de `tools/finance-model.mjs`, avec les hypothèses de `FINANCE-PREVISIONNEL.md` §2 (agent budgété à 843,04 €/mois, manager à 810,04 €/mois, un manager par tranche de huit positions **dans un même métier**).

## 1. Ce qui est retenu, ce qui est corrigé

| Idée de départ | Verdict | Pourquoi |
|---|---|---|
| Augmenter la valeur par partenaire plutôt que le prix de la position | **Retenu, c'est l'axe principal** | La grille est par tranches non rétroactives : les quatre premières positions restent au tarif d'entrée. Passer de 1 à 4 positions multiplie le CA par quatre **sans aucune remise** |
| Présenter trois configurations au lieu d'un prix unique | **Retenu** | Change la question « combien coûte un agent ? » en « quelle capacité voulez-vous confier ? ». Voir §3 |
| Suivre l'ACV plutôt que le prix par position | **Retenu** | Voir §2 et §7 |
| Offre N1+ rattachée au taux d'escalade N2 | **Retenu, meilleur levier de valeur** | À cadrer sans promesse chiffrée tant qu'aucune base n'est mesurée. Voir §4 |
| Land & expand à partir d'une position | **Retenu, adapté à la marque blanche** | En MB, l'expansion passe surtout par les **clients finaux du partenaire**. Voir §5 |
| Produit d'entrée à **1 499 €** | **Corrigé** | Ce n'est pas le prix en vigueur : la position coûte **2 000 €** en helpdesk et **1 700 €** en support. À 1 499 €, une position isolée **perd 154 €/mois** avant outils |
| Configuration à 2 positions pour **2 990–3 500 €** | **Corrigé** | La grille donne **4 000 €** (helpdesk) ou **3 400 €** (support) pour 2 positions, **sans** les services ajoutés. Le menu proposé enrichissait l'offre tout en baissant le prix |
| Configuration à 3 positions pour **4 500–6 000 €** | **Corrigé** | La grille donne **6 000 €** (helpdesk) ou **5 100 €** (support). Le bas de fourchette abandonnait 1 500 €/mois de contribution |
| « Jusqu'à environ 7 agents par manager » | **Corrigé** | Le prévisionnel budgète **un manager pour 8 positions** dans un métier |
| Onze options vendues à la carte | **Écarté** | Illisible, et la plupart consomment du temps d'agent ou de manager déjà compté dans les 35 h d'une position. Voir §6 |

## 2. Pourquoi la taille du compte compte plus que le prix

Le manager est déclenché dès la première position. Chaque position ajoutée dans le même métier rapporte donc sa marge entière jusqu'à la huitième : **+1 156,96 €/mois** en helpdesk (`2 000 − 843,04`), **+856,96 €/mois** en support (`1 700 − 843,04`).

| Positions, même métier | CA helpdesk / mois | ACV helpdesk | Contribution helpdesk | CA support / mois | ACV support | Contribution support |
|---:|---:|---:|---:|---:|---:|---:|
| 1 | 2 000 € | 24 000 € | **+347 €** (17 %) | 1 700 € | 20 400 € | **+47 €** (3 %) |
| 2 | 4 000 € | 48 000 € | **+1 504 €** (38 %) | 3 400 € | 40 800 € | **+904 €** (27 %) |
| 3 | 6 000 € | 72 000 € | **+2 661 €** (44 %) | 5 100 € | 61 200 € | **+1 761 €** (35 %) |
| 4 | 8 000 € | 96 000 € | **+3 818 €** (48 %) | 6 800 € | 81 600 € | **+2 618 €** (39 %) |
| 5 | 9 750 € | 117 000 € | **+4 725 €** (48 %) | 8 300 € | 99 600 € | **+3 275 €** (39 %) |

Contributions mensuelles à régime plein, après agents et manager, **avant** outils (68 €/mois), onboarding, taxes et coûts non renseignés. Le taux entre parenthèses est la contribution rapportée au CA.

Deux conséquences :

1. **Le ticket et la marge montent ensemble.** Le taux de contribution passe de 17 % à 48 % en helpdesk entre une et quatre positions, à prix unitaire identique.
2. **En support, une position seule ne se vend pas comme contrat cible** : elle contribue 47 €/mois avant outils. Le prévisionnel l'écrit déjà (§3). Mettre la configuration à deux positions au centre du menu n'est pas qu'un levier d'upsell ; c'est le seuil où le contrat support devient sain.

## 3. Le menu en trois configurations

Trois configurations, **toutes au prix de la grille**. Ce qui distingue les configurations est d'abord la capacité ; les services supplémentaires sont ceux que cette capacité permet réellement de tenir. Chaque configuration s'annonce en **total mensuel**, jamais en prix par position seul (`PRICING.md` §1).

| | **Démarrage** | **Standard** — configuration cible | **Étendue** |
|---|---|---|---|
| Positions dédiées (35 h/semaine chacune) | 1 | 2 | 3 à 4 |
| Helpdesk IT N1 | **2 000 €/mois** | **4 000 €/mois** | **6 000 à 8 000 €/mois** |
| Support applicatif N1 | **1 700 €/mois** | **3 400 €/mois** | **5 100 à 6 800 €/mois** |
| Présence possible dans la semaine | 35 h, placées dans la fenêtre convenue | 70 h : **8 h–20 h** en semaine (60 h) avec 10 h de marge, ou **6 h–20 h** (70 h) sans marge | 105 à 140 h : amplitude élargie, samedi selon planning au devis |
| Niveau 1 sous la marque et dans les outils du partenaire | Oui | Oui | Oui |
| Contrôle qualité (script, double écoute) et reporting mensuel avec revue de service | Oui | Oui | Oui |
| Engagement ≥ 90 % sur l'indicateur du métier, avoir de 20 % | Oui | Oui | Oui |
| Absences | Le manager prend les absences ponctuelles | Deux agents formés au même périmètre : la file reste tenue pendant une absence, à capacité réduite | Idem, avec plus de redondance |
| Base de connaissance du partenaire tenue à jour | — | Oui, sur le temps des positions | Oui |
| Revue mensuelle des escalades N2 (motifs, tickets récurrents, escalades évitables) | — | Oui | Oui, avec plan d'amélioration suivi |
| N1+ (§4) | — | En option, si décidé | En option, si décidé |

Règles de présentation :

- **La configuration Standard est celle qu'on recommande** et qu'on détaille en premier. Démarrage existe pour qu'un partenaire prudent ait une porte d'entrée ; il ne doit pas être le point de comparaison implicite.
- **L'amplitude n'est pas une option, c'est de la capacité.** Couvrir 8 h–20 h en semaine demande 60 h, soit 1,71 position (`PRICING.md` §1, horaires) : c'est la configuration Standard, pas une position unique avec supplément.
- **La « couverture des absences » ne se vend pas comme garantie.** `PRICING.md` §4 exclut un remplacement nominatif gratuit. Avec deux positions, on décrit ce qui se passe réellement : la file continue, à capacité réduite.
- **Rien d'une configuration n'est présenté comme déjà en service** : l'équipe est à zéro salarié. Première prise de tickets visée vers six semaines après signature, autonomie visée 2,5 à 3,5 mois, jalons datés au devis.
- **Au-delà de quatre positions**, la cinquième et les suivantes passent au tarif volume sur minimum ferme ; à partir de douze, devis sur coût réel (`PRICING.md` §1).

## 4. N1+ : prendre en charge la charge évitable du N2

C'est l'option qui fait passer Salverys de la vente de capacité à la prise en charge d'un résultat opérationnel. Elle parle directement à la douleur des ESN/MSP : des techniciens N2 occupés par du N1 (`PRODUIT-ET-OFFRES.md` §1).

| | Support N1 | N1+ |
|---|---|---|
| Traitement | Qualification, procédure, résolution, escalade | Idem, plus diagnostic poussé avant escalade dans les limites de droits convenues |
| Ticket escaladé | Qualifié | **Enrichi** : diagnostic fait, étapes tentées, pièces jointes, hypothèse |
| Base de connaissance | Consultée | **Complétée** à chaque cas résolu non documenté |
| Tickets récurrents | Traités | **Identifiés** et remontés avec leur volume |
| Revue mensuelle | Service et qualité | Plus : **taux d'escalade évitable**, motifs, actions décidées avec le partenaire |

**Phrase commerciale :**
« Vous pouvez nous confier de la capacité N1. Vous pouvez aussi nous confier un périmètre avec un objectif : réduire progressivement ce qui arrive à votre N2 alors que le N1 aurait pu le traiter. On mesure d'abord votre point de départ, puis on le suit chaque mois avec vous. »

Garde-fous :

- **Aucun pourcentage de réduction promis.** Aucune base n'existe tant qu'on n'a pas mesuré le périmètre. Les deux premiers mois en régime servent à établir le taux d'escalade de départ et la définition d'une escalade « évitable », écrite avec le partenaire.
- **Obligation de moyens, pas de résultat.** L'objectif figure dans la revue de service, pas dans l'avoir contractuel. Le taux d'escalade dépend aussi des droits accordés, de la qualité de la base et des décisions du N2.
- **Droits d'accès et limite d'intervention écrits au devis.** Un diagnostic plus poussé veut souvent dire des droits plus larges ; c'est un sujet de sécurité à cadrer avec le partenaire, pas à supposer.
- **Profil et coût à vérifier.** Si le N1+ exige des agents plus qualifiés que le profil actuel, le salaire uniforme de 3 250 000 Ar brut ne tient plus pour ces postes : le supplément de prix doit alors couvrir le surcoût salarial en plus du temps passé sur la base.
- **Bénéfice contractuel :** confier un périmètre avec objectifs et encadrement Salverys renforce la lecture « prestation de support », et non mise à disposition de personnel (`PRODUIT-ET-OFFRES.md` §1).

## 5. Land & expand en marque blanche

En marque blanche, le partenaire ne grossit pas seulement son besoin : il **signe de nouveaux clients finaux**. Chaque client final qu'une ESN ou un éditeur intègre est une occasion de position supplémentaire. Le compte s'étend par ses clients, pas seulement par ses pics.

Trajectoire visée, calée sur le contrat de `PRICING.md` §3 (trois mois initiaux, puis douze mois renouvelables) :

| Jalon | Étape | Appui de la conversation |
|---|---|---|
| Signature | 1 à 2 positions sur un premier client final ou périmètre pilote | Configuration Standard recommandée, Démarrage accepté |
| ~6 semaines | Première prise de tickets | — |
| Fin des trois mois initiaux | Passage à la période de 12 mois : **proposer la 2e position** à ce moment | Données mesurées : file en attente, tickets hors plage couverte, temps N2 encore pris par du N1 |
| ~6 mois | N1+ ou base de connaissance étendue, si la base de départ est mesurée | Taux d'escalade de départ et motifs récurrents |
| ~9 mois | Deuxième client final du partenaire, ou second périmètre | Réemploi du process déjà rodé sur le premier client |
| 12 mois | Amplitude élargie, bilingue si validé, renouvellement | Revue annuelle de service |

Ce calendrier est une intention commerciale, pas une promesse au partenaire ni une hypothèse de trésorerie : aucune expansion n'est intégrée dans les scénarios de `FINANCE-PREVISIONNEL.md` §4.

**Deuxième périmètre : attention au manager.** Le prévisionnel ne mutualise pas la supervision entre deux métiers. Ajouter **une** position support chez un partenaire qui a deux positions helpdesk déclenche un second manager : cette position contribue **+47 €/mois**. À CA proche, une troisième position helpdesk contribue **+1 157 €/mois**. Ordre de préférence : d'abord approfondir le même métier ; ouvrir un second métier à partir de **deux positions**, ou après avoir décidé qu'un manager peut couvrir deux métiers chez un même partenaire (décision n° 6, §8).

Leviers déjà dans la grille pour appuyer l'expansion : le **tarif volume à partir de la 5e position**, contre minimum ferme, et l'**exclusivité par verticale de client final à partir de cinq positions fermes** (`PRICING.md` §5).

## 6. Les onze leviers, un par un

| Levier | Traitement proposé | Condition avant de le vendre |
|---|---|---|
| Plus de positions | **Cœur du menu** (§3) | Aucune : c'est la grille |
| Amplitude étendue | **Capacité**, intégrée aux configurations Standard et Étendue | Planning écrit au devis ; week-ends, fériés et astreintes sur devis |
| Deuxième périmètre | Expansion à 9 mois (§5), à 2 positions minimum | Décision n° 6 sur le manager |
| Capacité flexible en pic | Proposer le **modèle A** (1 120 €/400 tickets, 2,80 € au-delà) en complément d'un poste dédié | A n'est pas encore dimensionné : mesurer temps de traitement et capacité du pool avant de le vendre (`PRODUIT-ET-OFFRES.md` §3) |
| Engagement de service renforcé | **Pas avant trois mois de mesure** | Aucun historique de service n'existe. Vendre un délai plus court avant d'avoir tenu le délai standard expose à l'avoir de 20 % |
| Reporting avancé | Intégré à Standard : revue des escalades | Modèle : `05-Process-Delivery/MODELE-REPORTING-CLIENT.md` |
| Gestion de la base de connaissance | Intégrée à Standard, sur le temps des positions | Dire qu'elle consomme de la capacité, pas qu'elle est gratuite |
| Onboarding / migration documentaire | Frais d'activation à décider (décision n° 5) | `PRICING.md` §3 exclut aujourd'hui tout frais de mise en service ; les activer change la grille |
| N1+ | **Option principale** (§4) | Décisions n° 2 et 3 |
| Bilingue FR/EN | Option pour les partenaires canadiens ou à clients internationaux | Niveau d'anglais **testé** à l'embauche ; le vivier ne comporte qu'une auto-évaluation (« anglais ~70 % »). Supplément à décider (décision n° 4) |
| Couverture des absences | **Conséquence de la 2e position**, pas une garantie vendue | `PRICING.md` §4 : ni seconde position simultanée ni remplaçant nominatif gratuit |

## 7. Indicateurs commerciaux

Le prix par position reste celui de la grille ; on suit la **taille des comptes** :

- **ACV par partenaire** : CA mensuel du contrat × 12, hors dépôt (le dépôt est une avance, pas du CA).
- **Positions par partenaire** : à la signature, puis à 3, 6 et 12 mois.
- **Taux d'expansion** : positions à 6 mois ÷ positions à la signature.
- **Contribution par compte** : calculée dans `projection-finances-salverys.html` à chaque avenant, pas seulement à la signature.

Ces champs s'ajoutent à la table `Comptes` de la base Airtable **au premier contrat signé**, pas avant : une colonne vide sur des comptes non signés n'apporte rien.

## 8. Décisions à prendre (direction)

1. **Adopter le menu en trois configurations** pour le cadrage remis au partenaire (`04-Closing/FICHE-OFFRE-FRANCE-cadrage.html`), avec Standard comme recommandation.
2. **Prix du N1+** : supplément par position, à fixer pour couvrir au moins le temps de base de connaissance et, si le profil change, le surcoût salarial.
3. **Profil N1+** : même grille salariale que le N1 ou poste distinct.
4. **Bilingue FR/EN** : supplément et test de langue à l'embauche.
5. **Frais d'activation** couvrant l'onboarding réel (400 € de socle + 400 €/position) : voir `FINANCE-PREVISIONNEL.md` §4 pour l'effet sur la trésorerie.
6. **Supervision multi-métier** : un manager peut-il couvrir helpdesk et support chez un même partenaire ? La réponse fixe la taille minimale d'un second périmètre.
7. **Modèle A comme capacité de pic** pour un client en poste dédié, une fois le pool mesuré.
