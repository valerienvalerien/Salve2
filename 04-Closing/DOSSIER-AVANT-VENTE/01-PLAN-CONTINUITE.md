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
| R1 | **Coupure électrique** (délestage réseau national) | Élevée — récurrente à Antananarivo | **Kit d'autonomie individuel** par agent (solaire ou batterie), sur lequel il bascule dès la coupure ; si l'autonomie du kit est dépassée, **repli au hub** (groupe électrogène, onduleurs) | **≤ 5 min** (bascule sur kit) · **≤ 1 h** si repli au hub — délai de trajet, agent résidant à Antananarivo |
| R2 | **Coupure Internet d'un agent** (FAI domicile) | Moyenne | **Repli au hub**, raccordé indépendamment du domicile de l'agent | **≤ 1 h** (trajet, agent résidant à Antananarivo) |
| R3 | **Panne opérateur / câble sous-marin** (Madagascar dépend de liaisons sous-marines) | Faible, impact fort | Aucune parade locale : la reprise dépend du rétablissement opérateur. Information du partenaire sous 30 min et priorisation des flux à la reprise (§3) | **Non garanti** — dépend de l'opérateur ; traité en force majeure au-delà de [X] h (§6) |
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
(groupe électrogène, onduleurs) vers lequel on rapatrie tout ou partie de l'équipe quand
l'incident dépasse le kit d'autonomie individuel ou devient collectif (R1 étendu, R2).

Trois postures, dans cet ordre :

1. **Nominal** — agents à domicile, sur secteur, outils du client.
2. **Dégradé** — bascule sur le **kit d'autonomie individuel** (R1) : l'agent reste à son
   poste, le service tourne sans interruption, les SLA restent engagés.
3. **Repli** — rapatriement au hub sous alimentation autonome, quand l'autonomie du kit est
   dépassée ou que la connexion du domicile est perdue. Priorisation des flux convenue au
   cadrage : **[à définir — ex. appels avant tickets, ou comptes prioritaires]**.

Le **kit d'autonomie** (solaire ou batterie, selon l'agent) est fourni ou indemnisé par
Salverys, vérifié à l'entrée sur le compte et contrôlé périodiquement (§5). C'est lui qui
absorbe le délestage, qui est le risque quotidien ; le hub ne sert qu'aux incidents longs.

## 4. Qui décide, et sous quel délai

| Décision | Qui | Délai |
|---|---|---|
| Bascule sur le kit d'autonomie individuel | L'agent, sans validation | Immédiat |
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
- **Test trimestriel** de la bascule sur kit d'autonomie, par agent, sur un créneau creux :
  bascule réelle, autonomie constatée, état de la batterie.
- **Vérification mensuelle** du groupe électrogène (démarrage, niveau de carburant) et des
  onduleurs.
- **Revue du plan** à chaque nouveau compte, et au minimum **une fois par an**.
- Tout incident de niveau dégradé ou repli fait l'objet d'un **retour d'expérience écrit**
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
