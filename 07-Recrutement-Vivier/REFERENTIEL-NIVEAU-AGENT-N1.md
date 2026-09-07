# REFERENTIEL-NIVEAU-AGENT-N1.md — Quel niveau derrière chaque borne de la fourchette

> **Interne. Ne se transmet pas au client.** (Le client reçoit une **fiche de compétences
> anonymisée**, jamais ce document — cf. §8.)
>
> Répond à une question précise : **quand je vends 2 275 €, je vends qui ? et quand je vends
> 2 725 €, je vends qui ?** — et surtout : **quel est le niveau minimal en dessous duquel on
> ne vend pas du tout.**
>
> **Sources** : bornes de prix et bande ±9 % = `PRICING.md §3, §3.d` · salaires et coût
> employeur = `PRICING.md §3.e` + `01-Strategie-Offre/FINANCE-PREVISIONNEL.md` · grille de
> tri candidat = `MINI-TEST-Qualification.md` · grille QA en production =
> `05-Process-Delivery/PROCESS-QA-DOUBLE-ECOUTE.md §3` · garde-fous juridiques =
> `05-Process-Delivery/GOUVERNANCE-CHAINE-COMMANDEMENT.md §4`.
>
> Périmètre : **helpdesk IT N1** (niche n°1) et **support applicatif N1 SaaS** (n°2). Le
> médical a son propre socle (`MINI-TEST-Qualification.md`, bloc M).

---

## 1. Le problème posé, et la réponse en une ligne

Vendre une fourchette dont le bas serait un débutant, c'est vendre une déception à
6 semaines. Vendre une fourchette dont le haut serait « notre meilleur disponible », c'est
laisser le client définir le standard à notre place.

> **La règle : le bas de la fourchette n'est pas un niveau inférieur, c'est une
> spécialisation absente.** Les deux profils ont le même socle technique et le même français.
> Ce qui manque au profil « socle », ce n'est pas de la compétence — c'est **l'exposition
> préalable à un compte européen**, et c'est nous qui la lui donnons pendant les 6-8 semaines
> de montée en charge.

Conséquence directe, non négociable :

- **Un candidat sous le socle §4 n'est pas embauché.** Pas « embauché moins cher » : pas
  embauché. Il n'existe pas de position vendue en dessous de 2 275 € / 2 000 € MB.
- **Si le vivier n'a pas de profil « confirmé » disponible à la signature, on ne vend pas
  2 725 €.** On vend 2 275 € et on tient parole. Une borne haute qu'on ne peut pas staffer
  est un passif, pas un prix.

---

## 2. Ce que le salaire achète réellement à Antananarivo

| Repère marché (Tana) | Brut mensuel |
|---|---|
| Agent de centre de contact, moyenne | **~700 000 Ar** |
| Recrutement des grands acteurs offshore (Intelcia & co.) | **600 000 - 800 000 Ar** |
| Profils expérimentés / techniques | **900 000 - 2 000 000 Ar** |
| Superviseur / team leader en centre offshore | ~1 500 000 - 2 500 000 Ar |
| **Salverys — agent et manager** | **3 250 000 Ar** (650 €) · coût employeur **~736 €** |

**Lecture opérationnelle : à 3 250 000 Ar de brut, on ne recrute pas dans la moyenne du
marché, on recrute au-dessus de son plafond.** Le salaire Salverys dépasse de **~60 %** le
haut de la fourchette des profils expérimentés locaux, et se situe au niveau d'un
**superviseur** dans les grands centres de Tana.

Ce que ça autorise à exiger — et qu'il faut **effectivement** exiger, sinon on paie 4,5× le
marché pour un profil de marché :

1. Un **niveau de français** qui ne se trouve pas dans le tout-venant du recrutement offshore.
2. Une **expérience technique réelle** (pas « j'ai fait du support » = j'ai lu un script).
3. Un **diplôme informatique bac+2/+3** *ou* une reconversion certifiée et prouvée.
4. Un **équipement et une continuité de service** à la charge de l'agent, tenables (§7).
5. Une **stabilité** : on achète l'hypothèse zéro turnover, elle se vérifie au recrutement
   (parcours sans zapping annuel) autant qu'après.

> ⚠️ **Le piège local n°1 : le faux « support technique ».** Beaucoup de CV à Tana affichent
> « support technique » pour un poste de centre d'appels avec script et zéro acte technique.
> La question qui tranche en 30 secondes : **« Raconte-moi le dernier ticket que tu as résolu
> seul, du début à la fin. »** Un vrai N1 nomme l'outil, la catégorie, ce qu'il a testé, et
> à qui il a escaladé. Un faux N1 raconte une conversation.

---

## 3. Les 8 dimensions qui définissent un N1 — et leurs trois seuils

Notation : **E = éliminatoire (on n'embauche pas)** · **S = socle, vendu au bas de fourchette
(2 275 € / MB 2 000 €)** · **C = confirmé, vendu au haut de fourchette (2 725 €)**.

### D1 — Français (le discriminant n°1, avant toute technique)

| | Exigence |
|---|---|
| **E** | Oral incompréhensible sans effort · fautes d'accord ou de conjugaison dans une phrase simple tapée en direct · calques malgaches à l'écrit |
| **S** | **Oral C1** : débit posé, accent qui ne demande aucun effort d'écoute à un Français · **écrit sans faute** sur une note de clôture de ticket · reformule sans déformer |
| **C** | Idem + **écrit de niveau rédactionnel** : sait écrire un article de base de connaissance et un compte rendu d'incident lisibles par le client final sans relecture |

> L'écrit n'est pas un confort : en helpdesk, **le ticket est le livrable**. Il est lu par
> l'utilisateur final, par le N2 du client, et parfois par le client du client. Une faute
> dans un ticket détruit plus de crédibilité qu'une escalade tardive.

### D2 — Socle technique poste de travail

| | Exigence |
|---|---|
| **E** | Ne sait pas expliquer la différence entre un compte verrouillé, désactivé et un mot de passe expiré |
| **S** | **Windows 10/11** (démarrage, sessions, profils, mises à jour, pilotes) · **annuaire** : réinitialisation de mot de passe, déverrouillage, appartenance à un groupe (**AD / Entra ID**) · **Microsoft 365** : Outlook/Exchange Online, Teams, OneDrive, SharePoint — cas courants · **impression** (file, spouleur, pilote, imprimante réseau) · **périphériques**, casques, écrans, docks · **VPN** poste-à-site : symptômes et vérifications de base · **prise en main à distance** (TeamViewer, AnyDesk, Quick Assist ou équivalent) |
| **C** | Idem + **Intune / MDM** (inscription d'un poste ou d'un mobile, politique de conformité) · **notions d'EDR/antivirus** (traiter une alerte N1, savoir ce qu'on ne touche pas) · **macOS** ou **Linux poste** en second parc · sait dérouler une procédure de **build/réinstallation** de poste |

### D3 — Réseau (niveau N1, pas administrateur)

| | Exigence |
|---|---|
| **E** | Ne sait pas ce que fait `ipconfig` ni distinguer « pas de réseau » de « pas d'internet » |
| **S** | IP / passerelle / DNS / DHCP · `ping`, `tracert`, `nslookup` · distinguer un problème local, un problème de site, un problème de service · Wi-Fi vs filaire · sait dire **ce qui n'est pas de son ressort** |
| **C** | Idem + lecture d'une console Wi-Fi ou d'un portail opérateur en consultation · notions de VLAN et de proxy suffisantes pour **qualifier** proprement avant escalade |

### D4 — Méthode ITSM / ITIL

| | Exigence |
|---|---|
| **E** | Confond incident et demande · ne sait pas ce qu'est une escalade documentée |
| **S** | **Incident vs demande de service** · **priorité = impact × urgence**, avec un exemple concret · notion de **SLA de prise en charge** vs **SLA de résolution** · **escalade N2 documentée** (ce qui a été testé, pas seulement « ça marche pas ») · traçabilité : statut à jour, notes horodatées |
| **C** | Idem + **ITIL Foundation** (certification ou maîtrise équivalente démontrée) · sait alimenter et **corriger** une base de connaissance · comprend ce qu'est une **crise / incident majeur** et son circuit |

### D5 — Outillage

| | Exigence |
|---|---|
| **E** | N'a jamais utilisé d'outil de ticketing en production |
| **S** | A tenu **au moins un ITSM en production** (GLPI, Freshservice, Zendesk, Jira Service Management, ServiceNow, EasyVista…) : catégories, files, macros, SLA · sait qu'un outil s'apprend en 3 jours quand la méthode est là |
| **C** | Idem sur **ServiceNow / EasyVista** ou l'ITSM dominant chez les ESN françaises · sait construire une **macro** ou un **modèle de réponse** et proposer une amélioration de catalogue |

### D6 — Anglais

| | Exigence |
|---|---|
| **E** | Ne peut pas lire une documentation technique en anglais |
| **S** | **Anglais lu courant** : documentation éditeur, release notes, messages d'erreur, KB Microsoft |
| **C** | **Anglais écrit professionnel** (ticket ou échange avec un support éditeur) et **oral opérationnel** si le parc a des utilisateurs anglophones (le simulateur facture cette option ×1,12) |

### D7 — Posture, téléphone, marque blanche

| | Exigence |
|---|---|
| **E** | Se démonte face à un utilisateur agacé · promet un délai qu'il ne tient pas · improvise hors procédure |
| **S** | Accueil sous **la marque du client**, formule convenue · sang-froid sous pression · empathie sans complaisance · **ne promet jamais** ce qui n'est pas engagé · applique le brief marque blanche (`GOUVERNANCE §5`) |
| **C** | Idem + tient un **utilisateur VIP** ou un **incident majeur** sans supervision rapprochée · sait dire non proprement à une demande hors périmètre · peut porter une **revue qualité** devant le référent |

### D8 — Autonomie et débit (le seul critère que le client mesure vraiment)

| | Cible à J+8 semaines (position pleinement autonome) |
|---|---|
| **S** | Traite seul **70-80 % du catalogue N1** du compte · **~25-35 tickets/jour** en flux mixte (ticket + mail + téléphone), selon la complexité du parc · escalade propre sur le reste |
| **C** | Traite seul **85-90 % du catalogue** · prend le **téléphone dès la semaine 2-3** au lieu de la semaine 4-5 · devient **référent du compte** quand une 2e position s'ouvre — c'est ce qui rend le haut de fourchette rentable pour le client au-delà d'une position |

> ⚠️ Les volumes ci-dessus sont des **cibles internes de dimensionnement**, pas un engagement
> client. Le seul chiffre engagé devant un client est le **SLA figé au cadrage**
> (`PRICING.md §7`).

---

## 4. Le socle, en une phrase vendable

> **Socle (bas de fourchette, 2 275 € / MB 2 000 €)** — *Technicien support confirmé,
> bac+2/+3 informatique ou reconversion certifiée, **2 à 3 ans** d'expérience réelle en
> helpdesk ou support applicatif, français oral et écrit C1, ITSM tenu en production,
> anglais lu — formé chez nous à votre parc et à vos procédures.*

> **Confirmé (haut de fourchette, 2 725 €)** — *Idem, avec **4 à 6 ans** dont au moins deux
> **sur un compte européen ou francophone exigeant**, ITIL Foundation ou maîtrise
> équivalente, anglais écrit professionnel, capable de prendre le téléphone dès la semaine 2
> et d'écrire la base de connaissance.*

Ces deux phrases sont **les seules** formulations autorisées en appel et en proposition. Elles
sont reprises telles quelles dans `02-Prospection/FICHE-APPEL-PRIX-POSTE-DEDIE.md §1`.

---

## 5. Le test qui prouve le niveau (à ajouter au mini-test existant)

Le `MINI-TEST-Qualification.md` (/20 : voix & français, technique, mise en situation) **reste
le tri d'entrée**. Il ne suffit pas à séparer S de C : son bloc technique IT vaut 6 points.

**Règle de calage** :

| Résultat mini-test | Décision |
|---|---|
| **< 16/20** | Jamais vendu sur une position dédiée. B = vivier à retravailler, C = pas maintenant |
| **≥ 16/20 (A)** | Éligible — passe au test technique ci-dessous |
| **A + test technique ≥ 14/20** | **Niveau S** — vendable au bas de fourchette |
| **A + test technique ≥ 17/20 + 2 ans de compte européen prouvés + anglais écrit** | **Niveau C** — vendable au haut de fourchette |

### Test technique helpdesk IT N1 — 10 items, /20 (0 / 1 / 2 par item)

| # | Question | Ce qu'on attend (réponse à 2 points) |
|---|---|---|
| 1 | *« Un utilisateur ne peut plus se connecter à sa session ce matin. Quelles questions avant toute manipulation ? »* | Bon identifiant/domaine · mot de passe **expiré** vs compte **verrouillé** vs **désactivé** · verr. maj / verr. num / disposition clavier · même poste ou autre poste · changement récent de mot de passe · en télétravail, VPN requis pour joindre le contrôleur de domaine |
| 2 | *« Incident ou demande de service ? »* | Incident = interruption ou dégradation **non planifiée** d'un service. Demande = requête **standard du catalogue** (accès, matériel, nouveau compte). Ça change la file, le SLA et le circuit d'approbation |
| 3 | *« Comment se calcule une priorité ? »* | **Impact × urgence**, avec un exemple : un utilisateur bloqué ≠ un site entier hors service |
| 4 | *« Personne n'imprime plus sur l'imprimante du 2e étage. »* | Périmètre (un ou tous) · réseau ou local · file bloquée · spouleur · pilote · connectivité de l'imprimante · page de test · **ce qu'on documente avant d'escalader** |
| 5 | *« Où réinitialise-t-on un mot de passe et comment déverrouille-t-on un compte ? »* | AD (console ADUC / PowerShell) ou **Entra ID** (portail / self-service) · différence verrouillé / désactivé / expiré · vérification d'identité de l'appelant **avant** l'action |
| 6 | *« Un utilisateur ne reçoit plus de mails. Trois causes N1 ? »* | Quarantaine / spam · règle de boîte ou redirection · boîte pleine ou quota · licence expirée · mot de passe changé non répercuté sur le mobile |
| 7 | *« "Je n'ai pas internet" — votre démarche ? »* | `ipconfig` (IP valide ou APIPA) · passerelle · DNS · `ping` IP publique vs `ping` nom (= DNS) · Wi-Fi ou câble · **un poste ou tout le monde** |
| 8 | *« Le VPN ne monte pas depuis le domicile. »* | Connexion internet locale d'abord · identifiants et **MFA** · certificat · heure système · version du client · blocage FAI ou box |
| 9 | *« Quand escaladez-vous en N2 ? »* | Hors catalogue N1 · temps cible dépassé · droits qu'on n'a pas · impact multi-utilisateurs ou serveur · doute sur une action destructive — **et toujours avec le ticket documenté** : symptôme, périmètre, tests faits, résultat |
| 10 | **Écrit en direct** : *« Rédigez la note de clôture du ticket n°4. »* | Français impeccable · symptôme, cause, action, vérification, message à l'utilisateur — en 4 lignes maximum |

**Mise en situation (non notée sur 20, mais éliminatoire)** — *« Bonjour, je n'arrive plus à
me connecter, j'ai une réunion client dans 10 minutes ! »* → on observe : prise en charge
calme, **priorisation annoncée**, questions de diagnostic dans le bon ordre, aucune promesse
hasardeuse, escalade si le temps cible ne tient pas.

> Pour le **support N1 SaaS**, remplacer les items 4, 5, 7 et 8 par : reproduction d'un bug,
> lecture d'une release note en anglais, distinction bug / mauvais usage / demande d'évolution,
> et remontée qualifiée vers l'équipe produit.

---

## 6. Calage salarial — **arbitrage à trancher (direction)**

État actuel (`CLAUDE.md`, `PRICING.md §3.e`) : **salaire uniforme 3 250 000 Ar** pour un agent
comme pour un manager. Or on vend deux niveaux à deux prix. Deux options :

### Option A — Salaire uniforme maintenu (statu quo)

La fourchette est **purement commerciale** : le profil confirmé rapporte +450 €/mois pour un
coût identique.

| | Bas de fourchette | Haut de fourchette |
|---|---|---|
| Prix vendu (direct) | 2 275 € | 2 725 € |
| Coût direct agent (`PRICING.md §3`) | 766 € | 766 € |
| **Marge brute / position** | **1 509 €** | **1 959 €** |

- ✅ Simple, cohérent avec le discours « on paie tout le monde 4,5× le marché ».
- ❌ **Risque réel de départ des meilleurs** : un profil confirmé rodé aux comptes européens
  est exactement celui qui a d'autres options. Payer pareil un profil rare et un profil socle
  fragilise l'hypothèse **zéro turnover** — hypothèse sur laquelle repose toute la doctrine de
  continuité (`PRICING.md §3.e`).

### Option B — Un **grade** « confirmé », financé par le haut de fourchette *(recommandé)*

| Grade | Brut | Coût employeur* | Vendu à |
|---|---|---|---|
| **Socle (S)** | 3 250 000 Ar (650 €) | ~766 € | 2 275 € (direct) · 2 000 € (MB) |
| **Confirmé (C)** | **4 000 000 Ar (~800 €)** | **~916 €** | 2 725 € (direct) |

\* Les charges patronales CNaPS/OSTIE (~86 €) sont **plafonnées à 8 × SME** : au-delà du
plafond, +150 € de brut coûtent ~+150 €, pas davantage.

- Le surcoût (**+150 €**) est financé par le delta de prix (**+450 €**) : **marge haut de
  fourchette 1 809 € > marge bas de fourchette 1 509 €**. Le haut de fourchette reste le plus
  rentable *après* la hausse.
- Le grade doit être **objectif et affiché** (ancienneté + note QA + certification ITIL +
  test technique ≥ 17/20), jamais négocié au cas par cas — sinon on remplace un problème de
  rétention par un problème d'équité interne, plus destructeur encore.

> ⚠️ **Conséquence à regarder avant de trancher** : la rate card MB annonce les tarifs *« pour
> les profils de la fourchette haute »* (`PRICING.md §3`). Un grade « confirmé » à 916 € de
> coût laisse **1 084 €** de marge au palier standard (2 000 €) et **634 €** au palier
> stratégique 9+ ETP (1 550 €). Tenable, mais ça impose de **ne pas rendre le grade C
> systématique** sur les gros volumes — ou de réviser le palier 9+. À arbitrer avec
> `AUDIT-FINANCE-PREVISIONNEL.md` avant application.
>
> **Aucun changement de politique salariale n'est appliqué par ce document** : il pose
> l'arbitrage, la décision et sa date se tracent dans `CLAUDE.md` et `PRICING.md §3.e`.

---

## 7. Spécificités Madagascar à intégrer au recrutement (sinon le niveau ne tient pas)

| Point | Exigence | Pourquoi c'est un critère de niveau, pas un détail |
|---|---|---|
| **Électricité (délestages JIRAMA)** | Onduleur ou batterie couvrant au moins 1 h · plan B connu (site de repli, tiers-lieu) | Une position dédiée qui saute deux heures par jour ne tient aucun SLA. C'est le **premier** motif d'échec, avant la compétence |
| **Connexion** | Fibre ou 4G stable **+ un second lien de secours** (opérateur différent) · test de débit et de latence documenté au recrutement | Le partage d'écran et la voix ne pardonnent pas la gigue |
| **Poste de travail** | Machine capable de tenir ITSM + prise en main à distance + softphone simultanément · casque à réduction de bruit · **environnement silencieux** | Le bruit de fond est le marqueur immédiat de l'offshore bas de gamme |
| **Fuseau horaire** | Aucun décalage réel avec la France sur les plages de bureau (Mada = UTC+3, France UTC+1/+2) | C'est un **avantage** à faire jouer, pas une contrainte |
| **Vérification du parcours** | CV réclamé systématiquement, contrôle de cohérence CV / discours, pièges d'outils (citer une stack jamais utilisée pour voir si le « oui » est réflexe) | Cf. `ROUTINE-Evaluation-Candidat.md §2` — la surévaluation est la norme, pas l'exception |
| **Stabilité** | Parcours sans changement d'employeur annuel · comprendre *pourquoi* il quitte son poste actuel | On vend « le même technicien dans trois ans ». Ça se vérifie avant, pas après |

---

## 8. ⛔ Ce qui ne se transmet jamais au client — et ce qui le rassure à la place

**Interdit** (marqueur de **mise à disposition de personnel**, art. 8 bis / 10 bis —
`GOUVERNANCE-CHAINE-COMMANDEMENT.md §4`) :

- CV **nominatifs**
- **Entretien de sélection individuel** du client avec l'agent
- Le client qui **choisit** la personne, fixe ses horaires, la recadre ou la sanctionne

**Autorisé et suffisant** :

| Ce qu'on donne | Format |
|---|---|
| **Fiche de compétences anonymisée** | Le socle §4 décliné sur les 8 dimensions, sans identité — réutilisable par le partenaire MB dans ses propres réponses d'appel d'offres |
| **CV anonymisés** | Déjà prévu dans l'appui avant-vente sous 48 h (`PRICING.md §3.b`) |
| **Dispositif QA** | Grille QA armée et double écoute planifiées **avant le premier ticket** (`PROCESS-QA-DOUBLE-ECOUTE.md §3`) |
| **Reporting** | Hebdo avec KPI + revue de service mensuelle écrite, incluse dans tous les forfaits |
| **Visio de lancement** | Acceptée — organisée par le donneur d'ordre. **Présentation, pas sélection** |
| **Demande de remplacement** | Recevable **comme demande**, décidée par Salverys : « on tient le SLA, on choisit les moyens » |

**Formulation type quand le client insiste pour choisir sa tête :**

> « On passe par le référent : c'est ce qui vous garantit que l'engagement de service reste
> opposable. Vous validez le **niveau** et le **dispositif qualité**, on répond du **résultat**.
> Si on vous laissait choisir la personne, vous n'auriez plus d'engagement de service — vous
> auriez un intérimaire. »
