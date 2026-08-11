# PLAN DE CONTINUITÉ D'ACTIVITÉ — Salverys

> **SPÉCIMEN** — pièce 1 du dossier avant-vente. Version remise au partenaire et à son
> client final. Compléter les `[...]` au cadrage ; les délais chiffrés ci-dessous sont les
> valeurs de référence Salverys et deviennent contractuels **s'ils sont repris dans
> l'Annexe de niche** du contrat.
>
> Version [1.0] — [date] · Responsable du plan : le **référent d'exploitation** du compte.

---

## 1. Ce que ce plan protège

La prestation est rendue **à distance**, depuis Antananarivo, **dans les outils du client**
(modèle BYOD : les agents travaillent dans les SaaS du client via navigateur, en comptes
nominatifs). Deux conséquences structurantes, et elles sont favorables :

- **Aucune donnée n'est stockée chez Salverys.** Une panne chez nous n'entraîne donc
  **aucune perte de données** — l'objectif de point de reprise (RPO) est **nul par
  construction**, puisqu'il n'y a rien à restaurer de notre côté.
- Le seul objet à protéger est la **capacité à travailler** : des agents, du courant, du
  réseau, un accès. Ce plan ne traite que de ça.

Ce plan couvre les moyens de Salverys. Il ne couvre pas l'indisponibilité des systèmes du
client (ligne, ticketing, téléphonie), exclue du périmètre de l'engagement de service
(art. 6 et art. 8 du contrat).

## 2. Registre des risques et parades

| # | Risque | Probabilité | Parade en place | Délai de reprise (RTO) |
|---|---|---|---|---|
| R1 | **Coupure électrique** (délestage réseau national) | Élevée — récurrente à Antananarivo | Onduleurs par poste au hub ; **groupe électrogène** avec réserve de carburant [X] h ; agents en BYOD sur batterie | **≤ 15 min** (bascule onduleur immédiate, groupe en relais) |
| R2 | **Coupure Internet d'un agent** (FAI domicile) | Moyenne | **Double connexion par agent** : fibre + **4G de secours** (indemnité contractualisée) | **≤ 10 min** (bascule 4G) |
| R3 | **Panne opérateur / câble sous-marin** (Madagascar dépend de liaisons sous-marines) | Faible, impact fort | **Deux opérateurs distincts** au hub ; agents sur un FAI différent de celui du hub | **≤ 2 h** (bascule opérateur) |
| R4 | **Absence d'un agent** (maladie, imprévu) | Élevée | **Backup +1 agent par compte**, formé au compte et en double écoute régulière | **≤ 1 h**, sans jour d'arrêt |
| R5 | **Absence du référent d'exploitation** | Faible | Suppléance nommée ([second référent / direction]) ; procédures écrites, pas de savoir oral | **≤ 4 h** |
| R6 | **Cyclone / intempérie majeure** (saison nov.–avril) | Saisonnière | Bascule **100 % domicile** (BYOD) ; hub non nécessaire à la production ; pré-alerte météo à J-3 | **≤ 4 h** |
| R7 | **Indisponibilité du hub** (incendie, accès bloqué, trouble local) | Faible | Le hub est un **repli**, pas le lieu de production : la production est distribuée | **≤ 1 h** |
| R8 | **Perte d'accès aux outils du client** (identifiants, MFA) | Moyenne | Comptes nominatifs + procédure de réattribution convenue au cadrage avec le client | Dépend du client — **à figer au cadrage** |
| R9 | **Départ d'un agent** | Faible (politique de rémunération anti-turnover) | Backup déjà formé (R4) + vivier de recrutement actif ; préavis contractuel | **≤ [X] jours** pour un remplacement à effectif plein |

## 3. Architecture de continuité

**Production distribuée, repli centralisé.** Le mode nominal est le travail à domicile
(BYOD) : il n'y a **pas de point de défaillance unique** — la panne d'un agent n'affecte
qu'un agent. Le hub n'est pas le lieu de production ; c'est le **point de repli alimenté**
(groupe électrogène, onduleurs, double opérateur) vers lequel on rapatrie tout ou partie de
l'équipe quand la panne devient collective (R1 étendu, R3).

Trois postures, dans cet ordre :

1. **Nominal** — agents à domicile, fibre, outils du client.
2. **Dégradé** — bascule 4G individuelle (R2) ou rapatriement partiel au hub (R1, R3). Le
   service tourne, les SLA restent engagés.
3. **Repli** — rapatriement de l'équipe au hub sous alimentation autonome. Priorisation des
   flux convenue au cadrage : **[à définir — ex. appels avant tickets, ou comptes prioritaires]**.

## 4. Qui décide, et sous quel délai

| Décision | Qui | Délai |
|---|---|---|
| Bascule d'un agent en dégradé (4G) | L'agent, sans validation | Immédiat |
| Rapatriement au hub | **Référent d'exploitation** | ≤ 30 min après constat |
| Activation du mode repli complet | Référent d'exploitation + direction | ≤ 1 h |
| **Information du partenaire** | Référent d'exploitation | **≤ 30 min** après activation du mode dégradé collectif ou du repli |
| Retour au mode nominal | Référent d'exploitation | Après 1 h de stabilité constatée |

**L'information du partenaire n'attend pas la résolution.** Un incident signalé en 30 minutes
est un incident maîtrisé ; le même incident découvert par le client final est une perte de
confiance. Canal et destinataire figés au cadrage.

## 5. Maintien en condition

- **Test annuel** du mode repli (bascule réelle, hors heures ouvrées) — compte rendu écrit
  remis au partenaire.
- **Test trimestriel** de la bascule 4G, par agent, sur un créneau creux.
- **Vérification mensuelle** du groupe électrogène (démarrage, niveau de carburant) et des
  onduleurs.
- **Revue du plan** à chaque nouveau compte, et au minimum **une fois par an**.
- Tout incident de niveau dégradé ou repli fait l'objet d'un **retour d'expérience écrit**
  intégré au reporting mensuel (`MODELE-REPORTING-CLIENT.md`).

## 6. Ce que ce plan ne couvre pas

Dit franchement, parce qu'un plan qui prétend tout couvrir n'est pas crédible :

- L'**indisponibilité des systèmes du client** (leur ticketing, leur téléphonie, leurs
  accès) — hors périmètre de l'engagement de service (art. 6).
- Une **crise nationale prolongée** (troubles majeurs, coupure réseau de plusieurs jours) :
  au-delà de **[X] jours** d'interruption continue, la clause de force majeure du contrat
  s'applique (art. [12/13]) et les modalités de reprise se traitent avec le partenaire.
- Le plan garantit une **capacité à produire**, pas un résultat indépendant du volume : un
  pic exceptionnel hors périmètre relève de l'avenant, pas de la continuité.

---

*Document remis au titre de l'art. 10 bis du contrat de prestation. Propriété de Salverys,
couvert par l'art. 9 (confidentialité). Réutilisable par le partenaire dans ses réponses
d'appels d'offres.*
