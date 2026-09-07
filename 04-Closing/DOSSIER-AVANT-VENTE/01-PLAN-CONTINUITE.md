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
| R1 | **Coupure électrique** (délestage réseau national) | Élevée — récurrente à Antananarivo | **Kit d'autonomie individuel** par agent (solaire ou batterie), sur lequel il bascule dès la coupure. Si l'autonomie du kit est dépassée : **report du trafic sur les agents non affectés** — le délestage est **zonal et tournant**, les agents ne résident pas dans le même quartier, ils ne sont donc pas coupés en même temps | **≤ 5 min** (bascule sur kit) · **≤ 30 min** (report du trafic) |
| R2 | **Coupure Internet d'un agent** (FAI domicile) | Moyenne | **Partage de connexion mobile** (opérateur distinct du FAI domicile), configuré et testé à l'entrée sur le compte ; à défaut, report du trafic sur les agents disponibles | **≤ 10 min** |
| R3 | **Panne opérateur / câble sous-marin** (Madagascar dépend de liaisons sous-marines) | Faible, impact fort | Aucune parade locale : la reprise dépend du rétablissement opérateur. Information du partenaire sous 30 min et priorisation des flux à la reprise (§3) | **Non garanti** — dépend de l'opérateur ; traité en force majeure au-delà de [X] h (§6) |
| R4 | **Absence ponctuelle d'un agent** (congé, arrêt court) | Élevée | Sur position dédiée : **le manager qui supervise déjà le compte prend le relais** — il connaît les procédures, assure la double écoute et n'occupe aucune position facturée. Sur débordement mutualisé : le pool absorbe, l'agent n'étant pas nominatif | **≤ 1 h** |
| R5 | **Absence du référent d'exploitation** | Faible | Suppléance nommée ([second référent / direction]) ; procédures écrites, pas de savoir oral | **≤ 4 h** |
| R6 | **Cyclone / intempérie majeure** (saison nov.–avril) | Saisonnière | Le domicile **est** le mode nominal : aucune bascule de site à opérer. Pré-alerte météo à J-3, kits rechargés et trafic reporté par avance sur les zones épargnées | **≤ 4 h** |
| R7 | **Perte d'accès aux outils du client** (identifiants, MFA) | Moyenne | Comptes nominatifs + procédure de réattribution convenue au cadrage avec le client | Dépend du client — **à figer au cadrage** |
| R8 | **Départ d'un agent** | Faible (rémunération à ~4,5× le marché local, CDI, objectif zéro turnover) | Reprise par le manager du compte pendant le préavis (R4) + vivier de recrutement actif ; procédures écrites, aucun savoir purement oral | **≤ [X] jours** pour un remplacement à effectif plein |

## 3. Architecture de continuité

**Production distribuée, sans site central.** Le mode nominal est le travail à domicile
(BYOD) : il n'y a **pas de point de défaillance unique** — la panne d'un agent n'affecte
qu'un agent. C'est une propriété du modèle, pas un palliatif : là où un plateau concentre
le risque sur un bâtiment, une équipe distribuée le **décorrèle**. Le délestage
d'Antananarivo étant **zonal et tournant**, des agents de quartiers différents ne sont
jamais coupés au même moment.

Trois postures, dans cet ordre :

1. **Nominal** — agents à domicile, sur secteur, outils du client.
2. **Dégradé** — bascule sur le **kit d'autonomie individuel** (R1) ou sur le **partage de
   connexion mobile** (R2) : l'agent reste à son poste, le service tourne sans
   interruption, les SLA restent engagés.
3. **Report** — quand l'autonomie du kit est dépassée ou que l'agent perd tout accès, son
   trafic est **reporté sur les agents disponibles**, selon une priorisation convenue au
   cadrage : **[à définir — ex. appels avant tickets, ou comptes prioritaires]**. Sur une
   position dédiée, c'est le **manager du compte** qui reprend (R4).

Le **kit d'autonomie** (solaire ou batterie, selon l'agent) est **dû à l'agent au titre de
son contrat de travail** — son coût est couvert par la rémunération, fixée à ~4,5× le
marché local précisément pour absorber énergie et connexion à domicile. Il est vérifié à
l'entrée sur le compte et contrôlé périodiquement (§5). C'est lui qui absorbe le délestage,
qui est le risque quotidien.

## 4. Qui décide, et sous quel délai

| Décision | Qui | Délai |
|---|---|---|
| Bascule sur le kit d'autonomie individuel | L'agent, sans validation | Immédiat |
| Report du trafic vers les agents disponibles | **Référent d'exploitation** | ≤ 30 min après constat |
| Activation du report collectif (incident de zone) | Référent d'exploitation + direction | ≤ 1 h |
| **Information du partenaire** | Référent d'exploitation | **≤ 30 min** après activation du mode dégradé collectif ou du report |
| Retour au mode nominal | Référent d'exploitation | Après 1 h de stabilité constatée |

**L'information du partenaire n'attend pas la résolution.** Un incident signalé en 30 minutes
est un incident maîtrisé ; le même incident découvert par le client final est une perte de
confiance. Canal et destinataire figés au cadrage.

## 5. Maintien en condition

- **Test annuel** du report de trafic (bascule réelle, hors heures ouvrées) — compte rendu
  écrit remis au partenaire.
- **Test trimestriel** de la bascule sur kit d'autonomie, par agent, sur un créneau creux :
  bascule réelle, autonomie constatée, état de la batterie.
- **Test semestriel** du partage de connexion mobile de chaque agent (R2).
- **Revue du plan** à chaque nouveau compte, et au minimum **une fois par an**.
- Tout incident de niveau dégradé ou report fait l'objet d'un **retour d'expérience écrit**
  intégré au reporting mensuel (`MODELE-REPORTING-CLIENT.md`).

## 6. Ce que ce plan ne couvre pas

Dit franchement, parce qu'un plan qui prétend tout couvrir n'est pas crédible :

- L'**indisponibilité des systèmes du client** (leur ticketing, leur téléphonie, leurs
  accès) — hors périmètre de l'engagement de service (art. 6).
- Une **panne opérateur ou de liaison sous-marine** (R3) : elle affecte le pays entier et
  aucune parade locale n'y répond. On s'engage sur l'**information sous 30 minutes** et sur
  la priorisation des flux à la reprise, pas sur un délai de rétablissement qui ne nous
  appartient pas.
- Une **crise nationale prolongée** (troubles majeurs, coupure réseau de plusieurs jours) :
  au-delà de **[X] jours** d'interruption continue, la clause de force majeure du contrat
  s'applique (art. [12/13]) et les modalités de reprise se traitent avec le partenaire.
- Le plan garantit une **capacité à produire**, pas un résultat indépendant du volume : un
  pic exceptionnel hors périmètre relève de l'avenant, pas de la continuité.

---

*Document remis au titre de l'art. 10 bis du contrat de prestation. Propriété de Salverys,
couvert par l'art. 9 (confidentialité). Réutilisable par le partenaire dans ses réponses
d'appels d'offres.*
