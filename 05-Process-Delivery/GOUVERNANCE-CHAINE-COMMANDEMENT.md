# GOUVERNANCE-CHAINE-COMMANDEMENT.md — Qui encadre qui (interne)

> Process **interne** : qui donne les ordres à un agent Salverys, qui parle à qui, et ce
> qu'on accepte ou refuse quand le client final veut entrer en contact direct avec les
> agents. Complète `PROCESS-QA-DOUBLE-ECOUTE.md` (qui traite du *contrôle qualité*, pas de
> la *chaîne d'autorité*) et donne la contrepartie opérationnelle de l'**art. 8 bis** du
> `MODELE-CONTRAT-PRESTATION.md`. Pour la **rédaction des engagements** (comment écrire un
> objectif pour qu'il prouve la prestation au lieu de décrire une régie), voir
> `MATRICE-REGIE-PRESTATION-SMART.md`.
>
> Audience : direction, référents d'exploitation (ex-« managers de niche » : 1 médical,
> 1 IT), et brief agent au §5. **Ne se transmet pas au client.**
>
> ⚠️ Support opérationnel, **pas un avis juridique**. Le §6 appelle une validation par un
> conseil, côté français **et** malgache.

---

## 1. Un seul manager — le mot recouvre deux autorités différentes

La confusion vient du mot « manager », qui désigne deux choses que le montage sépare
strictement :

| | Qui la détient | Contenu |
|---|---|---|
| **Autorité d'exploitation** | **Salverys, exclusivement** | affectation, planning, encadrement qualité, coaching, discipline, rémunération |
| **Autorité fonctionnelle (métier)** | **Le donneur d'ordre** | périmètre, procédures, scripts, priorités, SLA — qu'il tient lui-même de son client final |

**Un agent Salverys n'a donc qu'un seul manager : son référent d'exploitation.**

Le delivery manager de l'ESN et le head of support du client final **ne sont pas ses
managers**. Ce sont des *prescripteurs de règles*, et ces règles lui parviennent par un
canal — le cadrage, les scripts, les procédures — jamais par des ordres quotidiens.

## 2. La règle du canal unique

> **Les instructions descendent par le référent d'exploitation, jamais directement du client
> à l'agent.**

Ce qui reste normal au quotidien : un commentaire sur un ticket, une précision technique,
un échange dans l'outil partagé. C'est de la matière de travail, pas du commandement.

Ce qui ne l'est pas : le client qui fixe les horaires d'un agent, priorise sa journée, le
recadre, ou lui demande un compte rendu personnel.

La chaîne d'escalade est déjà définie et ne doit **pas** être redéfinie ici — voir
`PROCESS-QA-DOUBLE-ECOUTE.md §6` : **N1 agent → N2 référent d'exploitation → N3 client**
(interlocuteur, canal et délai instanciés par compte au cadrage,
cf. `ONBOARDING-CLIENT.md` phase 1).

Cette rigidité n'est pas du confort d'organisation : c'est la ligne qui sépare une
**prestation de services** d'une **mise à disposition de personnel**. Le référent
d'exploitation n'est pas une couche administrative — c'est la pièce qui tient le montage
(art. 8 bis du contrat).

## 3. Contact avec le client final : par défaut, jamais

En marque blanche de rang 2, l'interlocuteur de Salverys est **le donneur d'ordre**. Le
référent d'exploitation ne parle pas au client final.

La raison est contractuelle avant d'être juridique : l'**art. 10** du contrat interdit toute
approche des clients finaux confiés (non-sollicitation, pendant le contrat et 24 mois après)
et pose que le Client reste le **seul interlocuteur commercial** de ses clients finaux.

**Exceptions admises** — incident majeur, escalade N3, revue qualité : toujours **à
l'initiative du donneur d'ordre et en sa présence**. Une réunion tripartite ponctuelle est
acceptable ; un canal direct qui s'installe ne l'est pas.

## 4. Ce qu'on accepte, ce qu'on refuse

| Demande du client final | Réponse | Pourquoi |
|---|---|---|
| Session de calibrage, revue qualité, double écoute conjointe | ✅ Oui, référent présent | Prévu à l'art. 8 bis |
| Visio de lancement pour « rencontrer l'équipe » | ✅ Oui, organisée par le donneur d'ordre | Présentation, pas sélection |
| Entretien de sélection individuel, CV nominatifs | ❌ Non — **CV anonymisés** | Choisir les personnes = marqueur de mise à disposition (art. 10 bis) |
| Fixer les horaires ou les priorités du jour d'un agent | ❌ Non — passe par le référent | Marqueur de subordination |
| Recadrer ou sanctionner un agent | ❌ Non — remonte au référent | L'autorité disciplinaire reste chez Salverys |
| Exiger le remplacement d'un agent | ⚠️ Recevable **comme demande**, décidée par Salverys | On tient le SLA, on choisit les moyens |

Le refus ne se formule jamais comme un refus juridique. Formulation type au donneur
d'ordre : *« On passe par le référent, c'est ce qui vous garantit que l'engagement de service
reste opposable. »*

## 5. Marque blanche ≠ secret — brief agent

Deux choses à ne pas confondre :

- **Se présenter sous la marque du client** → normal, contractuel, honnête. « Bonjour,
  [Prénom], support [Marque]. » L'agent *est* le support de cette marque : c'est le service
  qu'il rend.
- **Nier avoir un employeur si on le lui demande frontalement** → mensonge. **On ne le
  demande jamais à un agent.**

Parce que la chaîne n'est pas censée être secrète : le contrat dit noir sur blanc que
Salverys, **sous-traitant RGPD** (art. 28), opère depuis Madagascar **avec ses propres
salariés** (`MODELE-DPA-RGPD.md` art. 1 et 7 — transfert hors UE). Les agents étant des
**salariés de Salverys** et non des tiers indépendants, il n'y a **pas de sous-traitant
ultérieur** à déclarer au Client à leur sujet (`MODELE-DPA-RGPD.md art. 6`) : la chaîne
s'arrête à Salverys. **Au niveau contractuel, le client final sait qu'il confie sa
prestation à une équipe salariée basée à Madagascar.** Ce qui est invisible, c'est la
marque affichée à l'utilisateur final, pas l'existence de la chaîne.

Coût du mensonge, s'il se découvre : on perd le compte, le donneur d'ordre perd son client,
et les deux sont en faute vis-à-vis d'un contrat qui prévoyait déjà la sous-traitance.

**Formule à donner à l'agent**, si la question tombe :

> « Je fais partie de l'équipe support de [Marque]. Sur l'organisation interne, le mieux est
> de voir directement avec [contact donneur d'ordre]. »

Vrai, poli, et ça renvoie la question à celui à qui elle appartient.

## 6. Point de vigilance — modèle salarié : le risque a changé de camp

Depuis le passage à une équipe **100 % salariée** (CDI, décision direction 2026-08-14,
`CLAUDE.md`), le risque de requalification **côté Salverys a disparu** : un salarié est,
par nature, subordonné à son employeur — l'autorité d'exploitation de Salverys sur ses
agents (§1) n'est plus une zone grise à protéger, c'est l'objet même du contrat de travail.
La tension à deux risques opposés qui existait avec le modèle freelance (trop peu
d'encadrement vs trop d'encadrement) n'a plus lieu d'être en interne.

Le risque restant est **entièrement du côté du client** : que la prestation, vue depuis lui,
ressemble à une **mise à disposition de personnel** plutôt qu'à un service — requalifiable
en **prêt de main-d'œuvre illicite** vis-à-vis du Code du travail français (art. L.8241-1 et
L.8231-1), *quand bien même* Salverys encadre correctement ses salariés en interne. C'est
exactement ce que couvrent l'**art. 8 bis** du contrat et le **canal unique** (§2 ci-dessus) :
si le client donne des ordres individuels, fixe les horaires ou choisit les personnes,
l'opération devient requalifiable **indépendamment** du fait que Salverys soit un bon
employeur.

Ligne de conduite : **le client achète un résultat sur un périmètre, jamais des heures d'une
personne nommée** — voir `MATRICE-REGIE-PRESTATION-SMART.md` pour la formulation des
objectifs contractuels (SLA, remède, agrégation). Le dispositif QA reste positionné comme
« **coaching, pas contrôle-sanction** » (`PROCESS-QA-DOUBLE-ECOUTE.md §5`) — ce n'est plus
une prudence anti-requalification interne, c'est un choix de management au service de
l'objectif **zéro turnover**.

**À faire valider par un conseil (FR + MG) avant le premier contrat cadre en équipe
salariée.**

## 7. Vocabulaire

| Terme | Où l'employer |
|---|---|
| **« manager de niche »** | docs internes, scripts d'appel, copy commerciale — compris vite à l'oral |
| **« référent d'exploitation »** | **contrat et DPA uniquement** — c'est le mot qui engage, il décrit un pilotage de prestation et non une hiérarchie salariale |

Ne pas mélanger les deux registres dans un même document remis au client.
