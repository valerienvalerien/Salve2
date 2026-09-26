# Indicateurs appariés — aucun KPI sans son contre-indicateur

Référence du 2026-09-26. Tout indicateur qui se lit seul peut être atteint en dégradant le service. Chaque indicateur de Salverys, qu'il soit engagé au contrat, reporté au partenaire ou utilisé en interne, est donc suivi **avec un contre-indicateur** qui détecte cette dégradation. Un progrès sur l'indicateur accompagné d'une dégradation du contre-indicateur **n'est pas un progrès**.

La règle vaut pour toute nouvelle proposition : offre, contrat, reporting, grille QA, objectif d'agent, prime. `CLAUDE.md` la rappelle.

## 1. Question à poser avant d'adopter un indicateur

> **Comment un agent, un manager, Salverys ou le partenaire pourrait-il atteindre ce chiffre en rendant un moins bon service ?**

Si la réponse existe, et elle existe presque toujours, l'indicateur n'est adopté qu'avec le contre-indicateur qui la détecte, mesuré par la même source et présent dans le même reporting.

## 2. Paires de référence

| Indicateur | Comment on l'atteint en dégradant le service | Contre-indicateur appairé |
|---|---|---|
| **Première réponse dans le délai** (support, engagé) | Répondre vite par un accusé de réception vide ou une question inutile | Délai de **résolution** ; part des premières réponses sans contenu utile, contrôlée par la grille QA |
| **Prise en charge dans le délai** (helpdesk, engagé) | S'assigner le ticket sans le traiter | Délai entre prise en charge et première action réelle ; délai de résolution par priorité |
| **Taux de décroché** (médical, engagé) | Décrocher puis mettre en attente longue ou raccrocher | Durée d'attente après décroché ; appels abandonnés après décroché ; rappels du même patient dans la journée |
| **Taux de résolution N1** | Clore trop tôt, ou garder au N1 un ticket qui devait partir au N2 | **Réouvertures** après clôture N1 ; délai de résolution de bout en bout |
| **Taux d'escalade N2** (N1+) | Retenir des tickets au N1 | **Qualité des escalades** (tickets que le N2 requalifie ou renvoie) ; réouvertures ; délai de bout en bout |
| **Qualité des escalades** | Escalader tard, après un diagnostic trop long | Délai avant escalade |
| **Durée moyenne de traitement** | Écourter les échanges, transférer, clore trop tôt | Réouvertures ; note QA |
| **Tickets traités par agent** | Choisir les tickets faciles, clore sans résoudre | Note QA ; réouvertures ; âge des tickets restant en file |
| **File en attente faible** | Clore en masse des tickets anciens | Réouvertures ; motifs de clôture |
| **Satisfaction du client final** | Faible taux de réponse, sondage envoyé aux seuls tickets réussis | Taux de réponse ; envoi systématique |

## 3. Engagé, reporté, interne

- **Engagé au contrat** : un seul indicateur par compte, celui du métier (`PRICING.md` §4, `04-Closing/DOSSIER-AVANT-VENTE/02-ENGAGEMENT-SLA.md`). Son contre-indicateur est **reporté** chaque semaine à côté de lui, même s'il n'est pas engagé.
- **Taux de résolution N1 et taux d'escalade : suivis et reportés, jamais engagés avec avoir.** Un avoir sur ces taux paie Salverys pour retenir des tickets. Un objectif de tendance peut figurer dans la revue de service (N1+, `01-Strategie-Offre/EXPANSION-COMPTE.md` §5), toujours avec ses contre-indicateurs.
- **Interne** (objectifs d'agent, primes) : jamais un indicateur de volume ou de vitesse seul. Toujours la note QA à côté.

## 4. Définitions à écrire à l'annexe de chaque compte

Chaque contre-indicateur se mesure dans l'outil du partenaire, avec une définition écrite avant la fin de la transition :

- **Réouverture** : ticket clos par le N1 puis rouvert, par le demandeur ou par le N2, sur le même problème, dans un délai de [N] jours ouvrés.
- **Escalade requalifiée** : ticket escaladé que le N2 renvoie au N1, recatégorise, ou dont il doit refaire la qualification.
- **Délai de bout en bout** : de la création du ticket à sa résolution définitive, escalades comprises.
