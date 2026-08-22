# AUDIT-PLAN-MOBILISATION-ECONOCOM-M6.md — Audit croisé de deux plans de mobilisation

> Deux plans ont été produits pour le même scénario : contrat helpdesk IT N1 en marque
> blanche pour l'ESN **Econocom**, opéré sous sa marque pour son client final **M6**.
>
> - **Plan A** — `05-Process-Delivery/PLAN-MOBILISATION-ECONOCOM-M6.md` (+ `gantt-econocom-m6.html`).
>   Séquencé en semaines calendaires, part **avant** la signature, chiffré en euros.
> - **Plan B** — plan directeur type transition ESN : 50 tâches, 8 phases, 6 gates,
>   « Transition Pack », organigramme projet, J0 → J120.
>
> Cet audit **ne remplace ni l'un ni l'autre**. Il dit ce que chacun apporte, ce que chacun
> rate, et ce que doit contenir le plan retenu.

---

## 0. Verdict en une page

**Les deux plans échouent dans des directions opposées, et sont complémentaires presque
terme à terme.**

- **Le plan B est une excellente méthode de transition, appliquée à une entreprise qui n'a
  aujourd'hui ni la trésorerie ni l'effectif pour l'exécuter.** Il est juste sur *comment on
  pilote*, muet sur *avec quoi on paie*, et dangereux sur *quand on s'engage*.
- **Le plan A est un plan d'entreprise sous contrainte, faible sur la méthode de
  transition.** Il est juste sur les verrous et le cash, incomplet sur les portes de
  décision, la courbe de bascule et le dimensionnement.

**Découverte principale de l'audit : les deux plans sont d'accord sur la durée.**
Plan B : J0 → J120, soit **17 semaines** entre signature et régime nominal.
Plan A : bon de commande fin S6 (02/10) → pleine capacité S23 (25/01), soit **16,5 semaines**.
Le décalage apparent (24 semaines contre 17) vient **entièrement de ce que le plan B ne
compte pas** : les 6 semaines de sécurisation juridique, de référencement fournisseur et de
financement **qui précèdent la signature**. Ils ne divergent donc pas sur le rythme de la
transition, mais sur **ce qu'on fait avant de signer** et sur **qui porte le risque
financier pendant**.

| Critère | Plan A | Plan B |
|---|---|---|
| Méthode de transition (gates, pack, ramp-up, hypercare) | 5/10 | **9/10** |
| Sécurisation juridique amont (rang 2, hors UE) | **8/10** | 3/10 |
| Réalisme financier (trésorerie, prix, conditions de paiement) | **7/10** | 0/10 |
| Dimensionnement de l'équipe | 5/10 | 6/10 |
| Infrastructure physique (plateau, énergie, réseau) | **8/10** | 2/10 |
| Obligations opposables au donneur d'ordre | 3/10 | **7/10** |
| Rigueur du planning (dépendances, durées) | 6/10 | 4/10 |
| Exécutable tel quel par Salverys en 2026 | **6/10** | 3/10 |

---

## 1. Ce que le plan B apporte et qu'il faut reprendre

Cinq éléments sont supérieurs à ce que contient le plan A. Ils sont à intégrer sans
discussion.

### 1.1 Le « Transition Pack » — la meilleure idée des deux plans

Le plan A décrit ce que Salverys doit **construire** ; il ne dit jamais ce qu'il faut
**exiger d'Econocom**, en une liste unique, datée et opposable. Le plan B le fait, et bien :
volumétrie, SLA, catalogue, priorités P1-P4, escalade, outils, accès, documentation,
sécurité, reporting, qualité, planning, organisation, contacts, formation, continuité.

Deux vertus au-delà de la commodité :
- **C'est un filtre d'intention.** Un donneur d'ordre incapable de produire ce pack en deux
  semaines n'est pas prêt à sous-traiter — on le sait avant d'avoir embauché.
- **C'est la base d'une clause de décalage.** Chaque jour de retard du pack doit décaler le
  go-live d'un jour, contractuellement. Sans ça, le retard d'Econocom devient une pénalité
  pour Salverys.

### 1.2 Les 6 gates — supérieurs aux jalons du plan A

Les jalons J1 à J10 du plan A sont des **dates**. Les gates G1 à G6 du plan B sont des
**questions à laquelle il faut répondre oui**, avec un décideur. C'est structurellement
meilleur : une date se rate en silence, une porte se franchit ou se ferme. La règle
« go-live impossible tant que G1 → G5 ne sont pas validés » est exactement le garde-fou qui
manque au plan A.

### 1.3 Le ramp-up de charge 25 / 50 / 75 / 100 %

Le plan A monte par **vagues d'embauche**. Le plan B monte par **paliers de volume basculé**.
Ce sont **deux courbes différentes**, et le plan A les confond — c'est une vraie lacune :
Econocom et M6 basculeront le périmètre par lots (une population d'utilisateurs, un
périmètre applicatif), pas d'un coup. Il faut les deux courbes, synchronisées, et la seconde
doit être **négociée avec Econocom**, pas subie.

### 1.4 L'hypercare borné

Le plan A prévoit une « double écoute renforcée S13-S14 » sans la nommer ni la sortir de la
production normale. Le plan B en fait une phase distincte, datée, avec une sortie explicite
vers le RUN. C'est le vocabulaire qu'attend un service delivery manager d'ESN, et c'est
aussi ce qui évite que le mode projet dure indéfiniment.

### 1.5 Le principe de dimensionnement « pic + SLA + absentéisme + shrinkage + backup »

**C'est la critique la plus juste adressée au plan A** (voir §3.1). Le plan B ne le chiffre
pas, mais il pose la bonne méthode.

**À reprendre aussi, plus mineur** : les *background checks* du personnel (tâche 31), absents
du plan A et probablement exigés par M6 ; et le principe qu'un contrat de cette taille ne
peut pas être porté par le dirigeant seul (§2.6).

---

## 2. Ce que le plan B rate — par ordre de gravité

### 2.1 Aucun euro, nulle part — défaut majeur

50 tâches, 8 phases, 6 gates, un organigramme à 8 rôles : **zéro chiffre de coût, zéro
trésorerie, zéro prix, zéro condition de paiement, aucune tâche de facturation.**

Pour Salverys — **une salariée**, un fondateur non rémunéré, ~30 k€ de capital recommandé
(`FINANCE-PREVISIONNEL.md §6`) — un plan de mobilisation sans plan de trésorerie n'est pas un
plan, c'est une intention. Le plan B fait démarrer le recrutement en tâche 29 à **J20** sans
jamais dire **avec quel argent** ni **quand tombe la première facture**. Or c'est précisément
là que ce contrat peut tuer l'entreprise, pas dans la qualité du runbook.

Le chiffrage du plan A (marge, investissement, creux de trésorerie, acompte de mobilisation,
plafond de pénalités) n'a **aucun équivalent** dans le plan B et doit être conservé intégralement.

### 2.2 Il démarre à la signature — erreur structurelle en sous-traitance de rang 2

`J0 = signature du contrat`. Le RGPD/DPA (14), la cyber M6 (16) et la validation des
sous-traitants (17) sont traités **après**, comme des chantiers d'exécution.

En rang 2, l'**autorisation de M6** pour un traitement hors UE n'est pas une tâche projet :
c'est une **condition de validité du contrat**. Si l'on découvre à J20 que le contrat
Econocom ↔ M6 impose une clause de localisation UE/EEE, le contrat signé à J0 est
inexécutable — et le recrutement est déjà lancé depuis la tâche 29. Le gate G1 ne protège
pas de ça : sa question est « contrat + responsabilités + SLA signés ? », à laquelle on
répond oui **en ayant signé**, pas en ayant vérifié l'amont.

Le plan A place ce point en tâche 0.1, bloquante, **avant** signature. C'est non négociable.

Corollaire du même angle mort : le plan B ignore le **référencement fournisseur**. Chez un
grand compte, on ne signe pas avant d'être référencé (pièces légales, assurances, KYC,
souvent via une plateforme type e-Attestations). Compter 4 à 6 semaines, qui sont hors du
J0 → J120 et n'apparaissent nulle part.

### 2.3 Les dépendances déclarées contredisent les dates — le planning ne tient pas dans MS Project

Vérification faite ligne à ligne : **56 des 85 liens déclarés sont violés** si on les lit en
fin-début (le prédécesseur finit après le démarrage du successeur). Exemples :

| Tâche | Dépend de | Prédécesseur finit | Mais démarre |
|---|---|---|---|
| 35 Certification | 32/33 Formation | J50 | **J45** |
| 36 Préparation du pilote | 35 Certification | J50 | **J45** |
| 22 Comptes / SSO / MFA | 21 Réseau/VPN | J40 | **J30** |
| 32 Formation produit M6 | 26 SOP | J42 | **J35** |
| 48 Ajustement capacité | 47 Audit SLA | J115 | **J100** |

Ce n'est pas nécessairement une faute de conception : un plan de transition **chevauche**
volontairement ses tâches (on prépare le pilote pendant que la certification s'achève). Mais
alors les liens sont des **début-début avec décalage**, pas des fin-début, et cela doit être
**déclaré**. Saisi tel quel dans MS Project avec des liens fin-début, l'outil recalcule :
en prenant les durées telles qu'annoncées — hypothèse la plus favorable — le **go-live passe
de J73 à J112 (+39 jours)** et le **régime nominal de J120 à J163 (+43 jours)**.

Autrement dit : le J120 n'est pas le résultat du réseau de dépendances, c'est une **cible
posée à côté**. Tant que ce n'est pas réconcilié, le planning ne peut pas servir d'engagement
vis-à-vis d'Econocom.

*Point de convention à corriger au passage* : les bornes sont en jours calendaires et les
durées en jours ouvrés — cohérent sur la quasi-totalité des lignes, sauf 37 et 38 (pilote et
monitoring, comptés en calendaire). À homogénéiser avant toute saisie.

### 2.4 Aucun plateau

Tâches 19 à 24 : architecture IT, postes, réseau/VPN, comptes, ITSM, téléphonie. **Aucune
ligne pour le local** : bail, aménagement, cloisonnement, contrôle d'accès physique,
onduleurs et groupe électrogène, redondance opérateur.

À Antananarivo et pour un client final média, c'est le poste **le plus long** (bail +
aménagement : 5 à 9 semaines) et une **condition d'homologation** — un grand compte ne
validera pas 16 agents en télétravail sans contrôle physique. Le plan A le met sur le chemin
critique ; le plan B ne le voit pas.

### 2.5 Aucune gestion du risque d'entreprise

Le plan B s'arrête au « projet clôturé / BAU ». Rien sur :
- ce qui se passe **si Econocom perd M6** (19 CDI à porter) ;
- le **plafond des pénalités** SLA, alors que les SLA sont contractualisés en tâche 5 ;
- la **réversibilité**, exigence quasi systématique d'un grand compte et souvent une annexe
  obligatoire ;
- la **concentration** à ~100 % du CA sur un seul donneur d'ordre.

C'est un plan de **projet**, pas un plan d'**entreprise**. À la taille de Salverys, les deux
ne se séparent pas.

### 2.6 Un organigramme calibré pour une entreprise qui n'existe pas

Sponsor, Project Manager, Operations Manager, IT/Security Lead, Recruitment Lead, Training
Manager, Quality Manager, Team Leaders : **8 rôles**. Salverys a **1 fondateur + 1 salariée
commerciale**.

Le principe est juste — le dirigeant seul ne peut pas être directeur de projet, négociateur,
recruteur et architecte à la fois. Mais un organigramme qui ne dit pas **qui on embauche ou
loue en premier pour tenir ces rôles, et combien ça coûte**, reste une plaquette.
Traduction opérationnelle à faire : le référent d'exploitation IT (plan A, tâche 4.2, en poste
S6) cumule Ops + Training + Quality ; le rôle de Transition Manager se prend soit en
prestation ponctuelle chiffrée, soit par la direction — auquel cas il faut alléger ailleurs.

### 2.7 Deux points de détail à corriger

- **Tâche 2 « Nommer l'équipe projet Econocom »**, portée par Salverys : on ne nomme pas
  l'équipe du client. C'est une **demande** à formuler, avec une date d'échéance côté
  Econocom.
- **Tâche 30 « Recrutement réserve / backup », J25 → J50** : en équipe 100 % salariée
  (`CLAUDE.md`), un « pool de remplacement » est un **banc payé** — ~736 €/mois par tête
  inoccupée. La doctrine maison résout la continuité autrement : manager métier comme premier
  backup, rotation au palier Non-stop, capacité réservée facturée en Priority
  (`PRICING.md §3.e`). Le plan B importe ici un réflexe de grand centre d'appels qui, à cette
  échelle, coûte cher sans être vendu.

### 2.8 Le pilote n'est pas positionné commercialement

Tâche 37, pilote J56 → J65, avec l'équipe complète formée et payée. Le plan B ne dit pas s'il
est **facturé**. Trois semaines de pilote avec 16 agents payés représentent ~9 000 € de masse
salariale : s'il n'est pas facturé, c'est une perte sèche. La doctrine maison tranche déjà
(`PRICING.md §3.b`) : **en marque blanche, pas de remise** — le pilote est un **périmètre
restreint facturé**, protégé par un dépôt d'activation et des contreparties de risque.

---

## 3. Ce que le plan A rate — audit du plan A par le plan B

### 3.1 Le shrinkage — correction matérielle du dimensionnement

**Le plan A est faux sur ce point et le plan B a raison.** Le plan A calcule
`12 positions × 1,33 (amplitude 8h-20h) = 16 ETP` et s'arrête là. Il manque l'absentéisme :
congés (2,5 j ouvrables/mois, soit 30 j/an), maladie (~3 %), formation continue, pauses —
**~13 % au total**, valeur déjà retenue par la maison (`PRICING.md §3.e`).

Couvrir 16 ETP de présence effective demande donc **~18 ETP recrutés** (16 ÷ 0,87 = 18,4).
Conséquence sur l'économie du contrat :

| | CA mensuel | Coût mensuel | Marge |
|---|---|---|---|
| Plan A tel qu'écrit — 16 recrutés, 16 facturés | 24 800 € | 19 810 € | **+4 990 € (20 %)** |
| Corrigé — **18 recrutés**, 16 facturés | 24 800 € | 21 490 € | **+3 310 € (13 %)** |
| Corrigé — **18 recrutés, 18 facturés** | 27 900 € | 21 490 € | **+6 410 € (23 %)** |

*(coût = 18 × 843 € de variable + 3 encadrants × 736 € + 2 110 € de socle fixe + 2 000 € de plateau)*

**La marge de 20 % annoncée dans le plan A tombe à 13 % si le shrinkage n'est pas facturé.**
La réponse commerciale n'est pas de rogner : c'est de **facturer la couverture, pas la
présence** — 18 ETP au contrat, ou 12 positions à un prix qui intègre le coefficient.

> **Proposition de doctrine, à porter dans `PRICING.md §3.c`** : la formule de conversion
> devient `ETP facturés = positions × coefficient d'amplitude × coefficient de shrinkage`,
> avec **shrinkage = 1,15**. Le §3.c traite déjà l'amplitude en ETP plutôt qu'en majoration ;
> l'absentéisme doit l'être pour la même raison — il impose des têtes, pas un pourcentage de
> confort.

### 3.2 Les jalons du plan A ne sont pas des portes

J1 à J10 portent des dates et une phrase « ce qu'il conditionne », mais aucun **critère de
sortie** ni **décideur nommé**. À convertir en gates au format du plan B.

### 3.3 Pas de Transition Pack, pas de tâche à propriétaire Econocom

Le plan A suppose qu'Econocom fournit périmètre, KB, accès et volumétrie (tâches 2.1 à 2.6)
sans jamais l'exiger en livrable daté. **Les deux plans partagent d'ailleurs ce défaut** : les
50 tâches du plan B sont toutes portées par Salverys. Or une transition rate presque toujours
du côté du donneur d'ordre. Il faut des lignes de Gantt **au nom d'Econocom**, avec échéance
opposable.

### 3.4 Pas de courbe de bascule du volume, pas d'hypercare nommé, pas de background check

Voir §1.3, §1.4 et la fin du §1. Trois manques réels, tous repris du plan B.

---

## 4. Ce que doit contenir le plan retenu

Le plan A garde le **squelette** (séquence, verrous, cash, vagues d'embauche) ; le plan B
fournit la **méthode** (pack, gates, ramp-up, hypercare, dimensionnement). Neuf modifications :

| # | Modification | Origine |
|---|---|---|
| 1 | **Phase −1 : conditions suspensives.** Signature conditionnée à l'autorisation écrite de M6 (sous-traitance rang 2 + hors UE) et au référencement fournisseur abouti. | A, renforcé |
| 2 | **Convertir J1-J10 en G1-G6**, avec critère de sortie et décideur nommé ; go-live impossible tant que G1 → G5 ne sont pas franchis. | **B** |
| 3 | **Transition Pack** exigé d'Econocom, échéance J+10 après signature, avec **clause de décalage** : un jour de retard du pack = un jour de go-live. | **B** |
| 4 | **Shrinkage 1,15** au dimensionnement ⇒ 18 ETP recrutés, **18 facturés**. Porter la formule dans `PRICING.md §3.c`. | **B** (correction du A) |
| 5 | **Deux courbes distinctes** : vagues d'embauche (A) **et** paliers de bascule du volume 25/50/75/100 % négociés avec Econocom (B). | **B** |
| 6 | **Hypercare borné** — 4 semaines après le go-live, sortie formelle vers le RUN, puis **audit SLA à J+90**. | **B** |
| 7 | **Background checks** du personnel avant accès aux environnements M6. | **B** |
| 8 | **Lignes de Gantt à propriétaire Econocom**, distinguées visuellement, avec échéances opposables. | nouveau |
| 9 | Conserver **intégralement** du plan A : financement 60 k€, plateau sur le chemin critique, acompte de mobilisation 25 k€, paiement à 30 j, volume ferme, plafond de pénalités 5 %, réversibilité, provision de sortie, re-prospection en parallèle. | A |

**Sur le calendrier** : les deux plans convergent sur ~17 semaines entre signature et régime
nominal. Le plan retenu doit donc afficher **deux horizons distincts**, et ne jamais
communiquer le second seul à Econocom :

- **Horizon interne : ~24 semaines**, en comptant les 6 semaines de sécurisation amont.
- **Horizon contractuel : ~17 semaines après bon de commande**, dont pilote à S+7 et pleine
  capacité à S+17 — sous réserve de la remise du Transition Pack dans les délais.

Deux réserves à porter dans le plan, l'une et l'autre issues de cet audit : le réseau de
dépendances doit être **recalculé et cohérent** avant tout engagement de date (§2.3), et les
**10 à 20 % de marge de sécurité** proposés par le plan B sur le recrutement, les accès, la
formation et le pilote sont à retenir — mais comme **marge de délai**, pas comme sur-effectif
payé (§2.7).
