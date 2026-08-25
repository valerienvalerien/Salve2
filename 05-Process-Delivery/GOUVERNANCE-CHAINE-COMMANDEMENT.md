# GOUVERNANCE-CHAINE-COMMANDEMENT.md — Qui encadre qui (interne)

> Process **interne** : qui donne les ordres à un agent Salverys, qui parle à qui, et ce
> qu'on accepte ou refuse quand le client final veut entrer en contact direct avec les
> agents. Complète `PROCESS-QA-DOUBLE-ECOUTE.md` (qui traite du *contrôle qualité*, pas de
> la *chaîne d'autorité*) et donne la contrepartie opérationnelle de l'**art. 8 bis** du
> `MODELE-CONTRAT-PRESTATION.md`.
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

Parce que la chaîne n'est pas censée être secrète : le **DPA** (`MODELE-DPA-RGPD.md art. 6`)
repose sur une **autorisation générale du Client** pour les sous-traitants ultérieurs, avec
information préalable à 5 jours ouvrés et droit d'opposition — obligation RGPD (art. 28 §2),
pas option commerciale. **Au niveau contractuel, le client final sait qu'il y a un
sous-traitant.** Ce qui est invisible, c'est la marque affichée à l'utilisateur final, pas
l'existence de la chaîne.

Coût du mensonge, s'il se découvre : on perd le compte, le donneur d'ordre perd son client,
et les deux sont en faute vis-à-vis d'un contrat qui prévoyait déjà la sous-traitance.

**Formule à donner à l'agent**, si la question tombe :

> « Je fais partie de l'équipe support de [Marque]. Sur l'organisation interne, le mieux est
> de voir directement avec [contact donneur d'ordre]. »

Vrai, poli, et ça renvoie la question à celui à qui elle appartient.

## 6. Point de vigilance — un seul risque depuis le passage en salariat

> Réécrit le 2026-08-25. La version précédente raisonnait sur le modèle « 100 % freelances »,
> abandonné le **2026-08-14** au profit d'une **équipe 100 % salariée en CDI** (`CLAUDE.md`).
> Elle décrivait une tension entre deux risques opposés ; **il n'en reste qu'un**.

**Ce qui a disparu.** Le risque de requalification d'un indépendant en salarié n'existe plus :
les agents *sont* salariés, déclarés CNaPS/OSTIE. La contrainte « ne pas trop encadrer, sinon
lien de subordination » tombe — le lien de subordination est désormais **voulu, assumé et
interne à Salverys**. Il est même l'actif qui tient le montage.

**Ce qui reste, et devient le seul sujet.** Trop peu d'autorité exercée par Salverys → la
prestation ressemble à une **mise à disposition de personnel**, requalifiable en **prêt de
main-d'œuvre illicite** vis-à-vis du client français (art. **L.8241-1** du Code du travail),
voire en **marchandage** (art. **L.8231-1**) si le montage cause un préjudice au salarié ou
contourne le droit applicable. Le prêt de main-d'œuvre **à but lucratif** est interdit hors
des cadres autorisés — intérim, portage salarial, groupement d'employeurs, travail à temps
partagé — dont **aucun** ne correspond à Salverys.

Le juge raisonne sur les **faits**, pas sur l'intitulé du contrat. Trois marqueurs pèsent :

| Marqueur | Qui doit le détenir | Où c'est verrouillé |
|---|---|---|
| Choix des personnes affectées | Salverys | CV anonymisés (art. 10 bis) · §4 ci-dessus |
| Ordres quotidiens, horaires, priorités individuelles | Salverys | Canal unique (§2) · art. 8 bis |
| Discipline, évaluation, rémunération | Salverys | Autorité d'exploitation (§1) |

**Ligne de conduite, inchangée sur le fond :** encadrer le **résultat et la qualité**, pas le
pointage du client sur l'agent. Le dispositif QA reste positionné en « **coaching, pas
contrôle-sanction** » (`PROCESS-QA-DOUBLE-ECOUTE.md §5`) — mais désormais parce que c'est du
bon management, plus pour esquiver une requalification.

**Deux éléments qui jouent en faveur du montage**, à connaître sans s'y reposer :

- Les agents sont **salariés d'une société malgache et travaillent depuis Antananarivo** :
  jamais de badge, de bureau ni de réunion d'équipe chez le client. L'**intégration à la
  communauté de travail** du client — un des marqueurs les plus lourds en jurisprudence — est
  structurellement absente, à la différence d'une régie sur site.
- Salverys s'engage sur un **résultat opposable** (SLA, art. 6), pas sur du temps passé. Un
  engagement de résultat est l'antithèse de la mise à disposition.

⚠️ **À faire valider par un conseil (FR + MG) avant le premier contrat cadre.** Les deux
éléments ci-dessus sont un raisonnement, pas une garantie.

## 7. Vocabulaire

### 7.a Nommer l'encadrement

| Terme | Où l'employer |
|---|---|
| **« manager de niche »** | docs internes, scripts d'appel, copy commerciale — compris vite à l'oral |
| **« référent d'exploitation »** | **contrat et DPA uniquement** — c'est le mot qui engage, il décrit un pilotage de prestation et non une hiérarchie salariale |

Ne pas mélanger les deux registres dans un même document remis au client.

### 7.b Nommer ce qu'on vend — mots à tenir, mots à bannir

Deux plans à ne jamais confondre : **comment on facture** (plan commercial) et **qui détient
l'autorité sur l'agent** (plan juridique). Les mots ci-dessous appartiennent à des plans
différents, et c'est ce qui fait qu'on les mélange.

| Terme | Plan | Ce qu'il désigne vraiment | Usage chez Salverys |
|---|---|---|---|
| **Position dédiée** / capacité dédiée | commercial | un agent affecté à 100 % au compte, facturé à la position, sous engagement de résultat | ✅ **le mot à tenir**, à l'oral comme à l'écrit |
| **Prestation de services** | juridique | engagement sur un résultat ; l'autorité reste chez le prestataire | ✅ mot du contrat (art. 8 bis) |
| **Régie** / assistance technique | commercial | facturation **au temps passé**, sans engagement de résultat, pilotage fonctionnel par le client | ❌ **jamais** — ce n'est pas notre modèle de facturation |
| **Mise à disposition** / prêt de main-d'œuvre | **juridique** | l'autorité d'employeur **bascule** vers le client — interdit à but lucratif hors cadres autorisés (L.8241-1) | ❌ **jamais**, y compris pour décrire ce qu'on ne fait pas dans un document remis au client |
| **Détachement**, « on vous met quelqu'un », « notre techos chez vous » | oral | même chose, en plus flou | ❌ à corriger dès qu'un commercial l'emploie |

**Le piège à comprendre une fois pour toutes.** « Régie » n'est pas illicite : c'est un mode
de facturation, parfaitement légal tant que le prestataire garde l'autorité. « Mise à
disposition » n'est pas un mode de facturation : c'est la **qualification** que retient un
juge quand l'autorité a basculé. Le lien entre les deux : **la régie est le format qui fait
glisser vers la mise à disposition**, parce qu'un consultant facturé au temps passé, sans
résultat opposable, finit en pratique piloté par le client.

Salverys ne vend ni l'un ni l'autre : **position dédiée, au forfait, avec SLA opposable.**

**En rendez-vous**, si le prospect demande « c'est de la mise à dispo ? » :

> « Non — vous achetez une position dédiée avec un engagement de service. L'agent est notre
> salarié, c'est nous qui l'encadrons, et c'est précisément ce qui rend le SLA opposable :
> vous avez un résultat garanti, pas une personne à gérer. »

S'il insiste pour choisir le CV, fixer les horaires ou piloter l'agent directement, il
demande une **mise à disposition** : c'est cela qu'on refuse (cf. §4), pas le vocabulaire.
