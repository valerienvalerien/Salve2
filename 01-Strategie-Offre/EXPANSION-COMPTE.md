# Expansion de compte — faire grossir le contrat, pas le prix de la position

Proposition du 2026-09-26, révisée le même jour après relecture. **Ce document ne modifie pas la grille** : `PRICING.md` fait foi pour tout devis. Il décrit comment présenter l'offre marque blanche pour que la première position soit un point d'entrée et non le contrat cible. Les décisions à prendre avant d'en faire une offre sont listées en §9. Les calculs viennent de `tools/finance-model.mjs`, avec les hypothèses de `FINANCE-PREVISIONNEL.md` §2 : agent budgété à 843,04 €/mois, manager à 810,04 €/mois, un manager par tranche de huit positions **dans un même métier**.

## 1. Principes retenus

1. **On vend un niveau de capacité, pas un prix par agent.** La question devient « quelle capacité voulez-vous confier ? » au lieu de « combien coûte un agent ? ».
2. **Le prix d'une configuration est la somme des positions de la grille, plus les services ajoutés, à prix visible.** Une configuration supérieure ne coûte jamais moins cher que ses positions achetées séparément. Le mot « plancher » est réservé au garde-fou de négociation de `PRICING.md` §1 ; on parle ici de **socle**.
3. **On fait payer une responsabilité** : le N1+ (§5) est un supplément par position, rattaché au taux d'escalade N2.
4. **On suit la valeur annuelle et la marge de chaque compte**, pas le prix de la position (§8).
5. **L'expansion s'écrit dans le premier contrat** : options à prix fixés, revue à trois mois, déclencheurs objectifs (§6).

## 2. La base de calcul est la grille : 2 000 € et 1 700 €, pas 1 499 €

Les montants de 1 499 €, 17 988 €, 35 976 € et 53 964 € sont arithmétiquement justes, mais ils partent d'un prix qui n'existe pas dans la grille. `PRICING.md` §1 fixe la position à **2 000 €** en helpdesk IT N1 et **1 700 €** en support applicatif N1, pour les positions 1 à 4.

À 1 499 €, une position seule **perd 154 €/mois** après agent et manager, avant outils. Descendre à 1 499 € est une décision de grille, avec cette conséquence ; ce document ne la prend pas.

| Positions, même métier | CA helpdesk / mois | ACV helpdesk | Contribution helpdesk | CA support / mois | ACV support | Contribution support |
|---:|---:|---:|---:|---:|---:|---:|
| 1 | 2 000 € | 24 000 € | **+347 €** (17 %) | 1 700 € | 20 400 € | **+47 €** (3 %) |
| 2 | 4 000 € | 48 000 € | **+1 504 €** (38 %) | 3 400 € | 40 800 € | **+904 €** (27 %) |
| 3 | 6 000 € | 72 000 € | **+2 661 €** (44 %) | 5 100 € | 61 200 € | **+1 761 €** (35 %) |
| 4 | 8 000 € | 96 000 € | **+3 818 €** (48 %) | 6 800 € | 81 600 € | **+2 618 €** (39 %) |

Contributions mensuelles à régime plein, après agents et manager, **avant** outils (68 €/mois), onboarding, taxes et coûts non renseignés. Le taux entre parenthèses est la contribution rapportée au CA. Les quatre premières positions restent au tarif d'entrée : un partenaire peut quadrupler sa capacité **sans aucune remise**.

## 3. Ce qui baisse quand un compte grossit

Les deux lectures sont vraies, à deux moments différents.

**Au démarrage, c'est le manager.** Le prévisionnel budgète un manager dès la première position d'un métier. Tant que Salverys n'a qu'un ou deux comptes, ce manager pèse **810 €** sur une position seule, 405 € par position sur deux, 101 € par position sur huit. C'est ce qui rend la position support isolée quasi nulle (+47 €).

**À l'échelle, ce sont les coûts fixes du compte.** Une fois huit agents en poste dans un métier, tous partenaires confondus, le manager coûte environ 101 € par position, quelle que soit la taille de chaque compte. Le prévisionnel suppose d'ailleurs ce partage entre partenaires, et le qualifie d'**optimiste** (`FINANCE-PREVISIONNEL.md` §2). Ce qui se dilue alors avec la taille du compte, c'est ce qu'on paie **une fois par partenaire** :

| Coût fixe par compte | Chiffré aujourd'hui ? |
|---|---|
| Socle d'onboarding | **Oui : 400 €** par contrat, plus 400 € par position |
| Apprentissage des outils du partenaire (ticketing, accès, procédures) | Partiellement, dans l'onboarding |
| Gestion du compte, revues mensuelles, reporting | **Non** : temps du fondateur ou du manager, non valorisé |
| Sécurité, accès, conformité propres au partenaire | **Non** |

Conséquence : suivre la **marge par compte**, coûts fixes du compte compris (§8), et pas seulement la marge par position.

## 4. Le menu en trois configurations

Le prix de chaque configuration est le **socle de positions de la grille**, plus un **pack de services** facturé à part et visible sur le devis. Les montants des packs sont des propositions à arbitrer (§9, décision n° 2).

| | **Démarrage** | **Standard** — configuration recommandée | **Étendue** |
|---|---|---|---|
| Positions dédiées (35 h/semaine chacune) | 1 | 2 | 3 à 4 |
| Socle helpdesk IT N1 | 2 000 € | 4 000 € | 6 000 à 8 000 € |
| Socle support applicatif N1 | 1 700 € | 3 400 € | 5 100 à 6 800 € |
| Pack de services | — | **Pilotage : +500 €/mois** | **Pilotage étendu : +1 000 à 1 500 €/mois** |
| **Total helpdesk / mois** | **2 000 €** | **4 500 €** | **7 000 à 7 500 €** (3 positions) |
| **Total support / mois** | **1 700 €** | **3 900 €** | **6 100 à 6 600 €** (3 positions) |
| Contribution helpdesk / mois | +347 € | +2 004 € | +3 661 à +4 161 € |
| Contribution support / mois | +47 € | +1 404 € | +2 761 à +3 261 € |

Contributions calculées en supposant que les packs ne créent pas de coût décaissé supplémentaire. Ce n'est vrai qu'en partie : ils consomment du temps d'agent sur les 35 h, du temps de manager et du temps de fondateur. Il faudra mesurer ce temps avant de fixer les montants définitifs.

**Contenu** :

| | Démarrage | Standard | Étendue |
|---|---|---|---|
| Niveau 1 sous la marque et dans les outils du partenaire | Oui | Oui | Oui |
| Contrôle qualité (script, double écoute), reporting mensuel et revue de service | Oui | Oui | Oui |
| Engagement ≥ 90 % sur l'indicateur du métier, avoir de 20 % | Oui | Oui | Oui |
| Continuité en cas d'absence | **Minimum écrit** (ci-dessous) | **Continuité assurée** par un second agent formé au périmètre | Idem, avec plus de redondance |
| Base de connaissance du partenaire tenue à jour | — | Pack Pilotage | Oui |
| Revue mensuelle des escalades N2 : motifs, tickets récurrents, escalades évitables | — | Pack Pilotage | Oui, avec plan d'amélioration suivi |
| Présence possible dans la semaine | 35 h, placées dans la fenêtre convenue | 70 h : 8 h–20 h en semaine avec 10 h de marge, ou 6 h–20 h sans marge | 105 à 140 h, samedi selon planning au devis |
| FR/EN, engagement de service prioritaire | — | — | **Activables après la revue à trois mois**, au prix fixé dans le contrat (§6) |
| N1+ (§5) | — | Supplément par position | Supplément par position |

**Pourquoi FR/EN et le service prioritaire ne sont pas dans le prix de départ d'Étendue.** L'équipe est à zéro salarié. Aucun historique de service n'existe pour garantir un délai plus court que le standard, et l'anglais des candidats n'est encore qu'auto-évalué (« anglais ~70 % » dans le vivier). Les deux se chiffrent dès le premier contrat et s'activent par avenant une fois mesurés ou testés. Les vendre au démarrage exposerait à l'avoir de 20 % ou à une promesse non tenue.

### Continuité minimale dans Démarrage

Un partenaire à une position ne doit pas se retrouver sans service le jour où l'agent est absent. C'est le compte le plus fragile, et l'argument le plus facile pour un concurrent. Le minimum écrit au contrat :

- **Absence ponctuelle ou congé planifié** : le manager formé au compte tient la file **dès le premier jour**, à capacité réduite. C'est déjà dans `PRICING.md` §4. Sur un compte d'une position, le manager a la disponibilité pour le faire.
- **Congés** : planifiés et annoncés au partenaire au moins [X] semaines à l'avance.
- **Absence longue imprévue** (au-delà de [N] jours ouvrés) : remplacement par un agent formé au compte sous [X] jours ouvrés. Salverys ne peut promettre ce délai **que lorsqu'un second agent du même métier est en poste** et formé en croisé sur ce compte. D'ici là, le manager reste la solution, et le devis le dit.

Les valeurs entre crochets sont à fixer (décision n° 3). Dans Standard, un second agent est formé au même périmètre : la file ne dépend plus d'une seule personne.

**À corriger dans le modèle** : le manager n'a pas de ligne téléphonique budgétée (`FINANCE-PREVISIONNEL.md` §2). S'il tient la file pendant les absences, il en faut une.

### Règles de présentation

- **Standard est la configuration qu'on recommande** et qu'on présente en premier. Démarrage est la porte d'entrée d'un partenaire prudent, pas le point de comparaison.
- **Toujours annoncer un total mensuel**, jamais un prix par position isolé (`PRICING.md` §1).
- **L'amplitude horaire est de la capacité, pas une option.** Couvrir 8 h–20 h en semaine demande 60 h, soit 1,71 position (`PRICING.md` §1).
- **Rien n'est présenté comme déjà en service.** Première prise de tickets visée vers six semaines après signature, autonomie visée à 2,5 à 3,5 mois, jalons datés au devis.
- **Au-delà de quatre positions**, la cinquième et les suivantes passent au tarif volume, contre un minimum ferme. À partir de douze positions, devis sur coût réel (`PRICING.md` §1).

## 5. N1+ : un supplément par position, pas une offre à part

Le N1+ fait passer Salverys de la vente de capacité à la prise en charge d'un résultat opérationnel. Il répond à la douleur principale des ESN/MSP : des techniciens N2 occupés par du N1 (`PRODUIT-ET-OFFRES.md` §1).

**Prix proposé : +250 à +400 € par position et par mois**, ajouté au socle de la grille. Deux positions helpdesk en N1+ reviennent à 4 500 à 4 800 € avant pack. Ce montant couvre le temps de diagnostic et de base de connaissance. Si le N1+ exige un profil plus qualifié que le salaire uniforme de 3 250 000 Ar brut, le supplément doit aussi couvrir ce surcoût (décision n° 4).

| | Support N1 | N1+ |
|---|---|---|
| Traitement | Qualification, procédure, résolution, escalade | Idem, plus diagnostic poussé avant escalade, dans les limites de droits convenues |
| Ticket escaladé | Qualifié | **Enrichi** : diagnostic, étapes tentées, pièces jointes, hypothèse |
| Base de connaissance | Consultée | **Complétée** à chaque cas résolu non documenté |
| Tickets récurrents | Traités | **Identifiés** et remontés avec leur volume |
| Revue mensuelle | Service et qualité | Plus : **taux d'escalade évitable**, motifs, actions décidées avec le partenaire |

**Phrase commerciale :**
« Vous pouvez nous confier de la capacité N1. Vous pouvez aussi nous confier un périmètre avec un objectif : réduire progressivement ce qui arrive à votre N2 alors que le N1 aurait pu le traiter. On mesure d'abord votre point de départ, puis on le suit chaque mois avec vous. »

**Cadre contractuel** (annexe de niche du contrat, `04-Closing/MODELE-CONTRAT-PRESTATION.md`) :

1. **Période de référence de 60 à 90 jours en régime**, avant tout objectif. Elle commence après la transition, pas à la signature. Le taux d'escalade mesuré pendant cette période sert de point de départ.
2. **Définition écrite de l'« escalade évitable »**, arrêtée avec le partenaire avant la fin de la période de référence : catégories de tickets concernées, droits dont dispose le N1, cas exclus. Sans cette définition, chaque revue devient un débat.
3. **Engagement de moyens** : diagnostic avant escalade, enrichissement du ticket, mise à jour de la base, revue mensuelle. L'objectif porte sur une **tendance** du taux d'escalade évitable, jamais sur un résultat garanti. Il n'entre pas dans l'avoir de 20 %, qui reste attaché à l'indicateur N1 du métier.
4. **Droits d'accès et limites d'intervention écrits.** Un diagnostic plus poussé demande souvent des droits plus larges ; c'est un sujet de sécurité à cadrer avec le partenaire.
5. **Aucun pourcentage de réduction promis** avant la fin de la période de référence, ni dans la prospection ni dans le devis.

Confier un périmètre avec objectifs et encadrement Salverys renforce aussi la lecture « prestation de support », plutôt que mise à disposition de personnel (`PRODUIT-ET-OFFRES.md` §1).

## 6. Écrire l'expansion dans le premier contrat

En marque blanche, le partenaire ne grossit pas seulement par ses pics : il **signe de nouveaux clients finaux**, et chacun peut appeler une position de plus. Pour que l'extension ait lieu, elle doit être prévue dans le contrat initial.

**1. Options à prix fixés dans le premier contrat.** Une annexe « Extensions » liste la position supplémentaire au tarif de la grille, les packs, le supplément N1+, FR/EN et le service prioritaire, chacun avec son prix. Ces prix sont garantis pendant la durée du contrat, douze mois renouvelables, sous réserve de révision annuelle. Activer une option devient un **avenant**, pas une nouvelle négociation.

**2. Revue à trois mois, prévue au contrat.** Elle coïncide avec la fin des trois mois initiaux et le passage à la période de douze mois (`PRICING.md` §3). Elle s'appuie sur les données du compte : file en attente, indicateur de service, escalades, tickets hors plage couverte. C'est le moment prévu pour proposer l'extension.

**3. Déclencheurs objectifs**, définis dans l'annexe avec leur mode de mesure dans l'outil du partenaire :

| Déclencheur | Seuil proposé | Proposition associée |
|---|---|---|
| File en attente | Tickets de plus de [N] jours ouvrés au-dessus de [X] % de la file, 4 semaines de suite | Position supplémentaire |
| Taux d'occupation | Plus de **85 %** sur 4 semaines glissantes. Taux d'occupation = temps de traitement ÷ temps de présence planifié | Position supplémentaire |
| Tickets hors plage | Plus de [X] % des tickets arrivés hors des heures couvertes | Amplitude étendue, donc capacité |
| Escalades | Taux d'escalade évitable stable ou en hausse après la période de référence | N1+ |
| Nouveau client final du partenaire | Signature annoncée par le partenaire | Position dédiée à ce client, ou extension de la capacité |

Un déclencheur **ouvre une proposition**, il ne facture rien automatiquement. Une nouvelle position demande environ six semaines de recrutement et de formation. Les seuils doivent donc alerter **avant** la saturation, pas après.

**4. Trajectoire visée** — intention commerciale, pas hypothèse de trésorerie : aucune expansion n'est intégrée aux scénarios de `FINANCE-PREVISIONNEL.md` §4.

| Jalon | Étape |
|---|---|
| Signature | 1 à 2 positions sur un premier client final ou un périmètre pilote |
| Vers 6 semaines | Première prise de tickets |
| 3 mois | Revue prévue au contrat ; début de la période de référence N1+ si l'autonomie est atteinte |
| 6 mois | Fin de la période de référence ; N1+ ou pack Pilotage |
| 9 mois | Deuxième client final du partenaire, ou second périmètre |
| 12 mois | Renouvellement ; FR/EN ou service prioritaire si testés |

**Deuxième périmètre : attention au manager.** Le prévisionnel ne mutualise pas la supervision entre deux métiers. Une position support ajoutée chez un partenaire qui a deux positions helpdesk déclenche un second manager et contribue **+47 €/mois**. Une troisième position helpdesk contribue **+1 157 €/mois**. Approfondir d'abord le même métier, et ouvrir un second métier à partir de deux positions, sauf décision contraire sur la supervision (décision n° 7).

## 7. Panier moyen : une hypothèse de répartition, pas une prévision

Répartition proposée pour raisonner : **50 % Démarrage, 35 % Standard, 15 % Étendue**, milieu de fourchette pour Étendue à trois positions.

| Base | Ticket moyen / mois | ACV moyen | Contribution moyenne / mois | Contribution annuelle / compte |
|---|---:|---:|---:|---:|
| Prix de la proposition initiale (1 499 / 3 490 / 5 690 €) | 2 825 € | 33 894 € | **+623 €** | 7 481 € |
| **Grille helpdesk** (2 000 / 4 500 / 7 250 €) | **3 663 €** | **43 950 €** | **+1 461 €** | **17 537 €** |
| **Grille support** (1 700 / 3 900 / 6 350 €) | **3 168 €** | **38 010 €** | **+966 €** | **11 597 €** |

Contributions avant outils, onboarding, coûts fixes de compte et temps de pack non mesuré.

Lecture :

- **À 1 499 €, la moitié des comptes (Démarrage) perd de l'argent**, et la contribution moyenne est inférieure de moitié à celle de la grille pour un ticket moyen plus faible de 23 %.
- **Il n'y a pas encore de ticket moyen « d'aujourd'hui »** : aucun contrat n'est signé. La répartition est une hypothèse à remplacer par les contrats réels dès le premier trimestre de ventes. Elle ne doit pas entrer dans le prévisionnel ni dans un document remis à un financeur.

## 8. Indicateurs commerciaux

- **ACV par partenaire** : CA mensuel × 12, hors dépôt (le dépôt est une avance, pas du CA).
- **Marge par compte** : contribution après agents, manager attribué, onboarding amorti et temps de gestion du compte (§3). Calculée dans `projection-finances-salverys.html` à la signature et à chaque avenant.
- **Positions par partenaire** : à la signature, puis à 3, 6 et 12 mois.
- **Taux d'expansion** : positions à 6 mois ÷ positions à la signature.
- **Répartition réelle** entre Démarrage, Standard et Étendue, à comparer à l'hypothèse du §7.

Ces champs s'ajoutent à la table `Comptes` de la base Airtable **au premier contrat signé**, pas avant : une colonne vide sur des comptes non signés n'apporte rien.

## 9. Décisions à prendre (direction)

1. **Adopter le menu en trois configurations** dans le cadrage remis au partenaire (`04-Closing/FICHE-OFFRE-FRANCE-cadrage.html`), avec Standard comme recommandation.
2. **Montants des packs** : Pilotage à +500 €/mois, Pilotage étendu à +1 000 à 1 500 €/mois, après mesure du temps qu'ils consomment.
3. **Continuité minimale de Démarrage** : délai de prévenance des congés, seuil d'absence longue et délai de remplacement.
4. **N1+** : supplément entre +250 et +400 €/position, et profil (même grille salariale que le N1 ou poste distinct).
5. **Annexe « Extensions » au modèle de contrat** : liste des options à prix fixés, revue à trois mois, déclencheurs et leurs seuils.
6. **Prix FR/EN et service prioritaire**, à fixer dans l'annexe même s'ils ne s'activent qu'après test ou mesure.
7. **Supervision multi-métier** : un manager peut-il couvrir helpdesk et support chez un même partenaire ?
8. **Frais d'activation** couvrant l'onboarding réel (400 € de socle + 400 €/position) : voir `FINANCE-PREVISIONNEL.md` §4.
9. **Débordement mutualisé (modèle A) comme capacité de pic** pour un partenaire en poste dédié, une fois le pool mesuré.
