# LinkedIn Growth Blueprint — Salverys

> **Objet :** le système complet de croissance LinkedIn de Salverys — positionnement,
> piliers de contenu, calendrier, mécanique d'acquisition, KPI et plan à 90 jours.
> **Date :** 2026-08-05 · **Étude d'audience associée :** `LINKEDIN-AUDIENCE-RESEARCH.md`
> (personas, frustrations, 60 angles de post prêts à l'emploi).
>
> **Alignement obligatoire :** GTM **marque-blanche-first** et **IT priorité n°1**
> (`CLAUDE.md`) · ciblage `IDEAL-CUSTOMER-PROFILE.md` · **`PRICING.md` fait foi** sur tout
> chiffre — et **aucun prix de marque blanche n'est publiable** (§0/§9).
> **Séquence de développement respectée :** Prospection → Équipe → Infrastructure. LinkedIn
> est un canal de **prospection**, pas un projet de marque.

---

## 0. Arbitrage SaaS-first (règle `CLAUDE.md`) — tranché avant tout

**Rien de ce blueprint ne demande une ligne de code.** L'outillage est acheté, pas construit :

| Besoin | Outil retenu | Coût indicatif | Pourquoi pas du code maison |
|---|---|---|---|
| Ciblage & veille des décideurs | **LinkedIn Sales Navigator** (Core) | ~80-100 €/mois | Les données de ciblage n'existent nulle part ailleurs |
| Programmation + analytics des posts | **Taplio** ou **Shield** (un seul des deux) | ~40-60 €/mois | Scraper l'API LinkedIn soi-même = compte à risque, maintenance permanente |
| Suivi des leads issus de LinkedIn | **CRM existant** (`CRM_Salverys.html`, champ source `linkedin`) | 0 € | Déjà en place, aucun développement |
| Visuels / carrousels | **Canva** | ~12 €/mois | Zéro intérêt à coder un générateur |
| Newsletter | **Newsletter LinkedIn native** | 0 € | Distribution intégrée + notification aux abonnés, imbattable |

**Budget total : ~150-170 €/mois.** À décider **avant** de lancer : Sales Navigator est le
seul poste non négociable (il porte le ciblage ET la veille des déclencheurs).

⛔ **Interdits :** pods d'engagement, automatisation d'envoi de DM/invitations
(Phantombuster, Waalaxy en mode agressif). Le risque de restriction de compte est
disqualifiant quand le compte **est** l'actif. La prospection sortante automatisée reste sur
**Emelia**, par email — canal déjà cadré (`SETUP-COLD-MAILING.md`).

---

## 1. L'objectif réel (et pourquoi ce n'est pas « des followers »)

LinkedIn n'est pas là pour générer des leads entrants à court terme — le cycle MB est de
1 à 3 mois et l'acheteur est discret. LinkedIn sert à **trois** choses, dans cet ordre :

1. **Faire exister Salverys quand le cold email arrive.** Un décideur qui reçoit un email de
   Salverys va regarder le profil de l'expéditeur avant de répondre. Un profil actif, précis,
   avec 6 mois de contenu opérationnel, change mécaniquement le taux de réponse d'Emelia.
   **C'est le retour sur investissement n°1, et il est immédiat.**
2. **Pré-traiter les objections** (offshore, taille, continuité, RGPD) avant le premier appel,
   pour que le RDV de cadrage porte sur le périmètre et non sur la légitimité.
3. **Créer un flux entrant tiède** (DM, vues de profil de comptes cibles, demandes de
   connexion venant d'eux) qui monte progressivement à partir du mois 3-4.

> **La métrique qui compte le plus les 90 premiers jours n'est ni les vues ni les followers :
> c'est le nombre de conversations qualifiées ouvertes en DM, et le taux de réponse du cold
> email avant/après.** Les vues sont le carburant, pas le résultat.

### Objectifs chiffrés (à tenir, révisables à M+3)

| Horizon | Followers (profil dirigeant) | Impressions / mois | Conversations DM qualifiées / mois | RDV de cadrage issus de LinkedIn |
|---|---|---|---|---|
| **M+3** | 800 - 1 200 | 25 000 - 40 000 | 4 - 6 | 1 - 2 |
| **M+6** | 2 000 - 3 000 | 60 000 - 100 000 | 8 - 12 | 3 - 5 |
| **M+12** | 5 000 - 7 000 | 150 000 - 250 000 | 15 - 25 | 6 - 10 |

> Objectifs internes de pilotage, pas des benchmarks de marché. Ils supposent la cadence du
> §6 tenue **sans interruption** — c'est la seule variable qui compte réellement. Un mois
> sauté coûte environ deux mois de reconstruction.

---

## 2. Architecture des comptes : qui parle ?

**Décision : le porte-voix n°1 est le profil personnel du dirigeant.** Sur LinkedIn, un
profil personnel a une portée structurellement supérieure à une page entreprise, et notre
avantage différenciant est **humain** (« une direction qui a géré des équipes de 1 000+
personnes et qui repart de zéro à 10 »). Une page entreprise ne peut pas porter ça.

| Actif | Rôle | Fréquence |
|---|---|---|
| **Profil du dirigeant** | 90 % du contenu, 100 % de l'engagement et des DM | 4 posts/semaine |
| **Page entreprise Salverys** | Vitrine de crédibilité (on la consulte après le profil) : logo, description, lien site, 1 repartage par post | 4 repartages + 1 post propre/semaine |
| **Profils des 2 managers** (médical / IT) | Amplification interne : commentaire sur chaque post, 1 post propre/mois sur leur métier | à partir de M+2 |

> **Si la direction refuse de publier sous son nom** : bascule sur la page entreprise + un
> profil « Responsable des opérations » nommé, avec la même grille éditoriale. Coût :
> environ **2 à 3× moins de portée** et un délai de crédibilité rallongé. Ce n'est pas un
> plan équivalent — c'est un plan dégradé, à assumer explicitement.

### Optimisation du profil dirigeant (à faire **avant** le premier post)

| Élément | Ce qu'on met | Pourquoi |
|---|---|---|
| **Titre (headline)** | `Nous opérons votre support N1 et votre télésecrétariat en marque blanche — équipe francophone, fuseau Paris` | Le titre suit le lecteur dans chaque commentaire : c'est le vrai emplacement publicitaire |
| **Photo** | Portrait pro, fond neutre, visage net en vignette 40px | Testé sur mobile, pas sur écran |
| **Bannière** | Promesse + 3 preuves (français natif · fuseau Paris · marque blanche totale) + `salverys.fr` | Occupe le seul espace visuel gratuit |
| **Section « Infos »** | 3 premières lignes = le problème du lecteur (pas notre histoire), puis pour qui / pas pour qui, puis appel à l'action DM | Seules 3 lignes s'affichent avant « voir plus » |
| **Sélection (Featured)** | 3 blocs : le one-pager partenaire MB, un simulateur (`simulateur-helpdesk-it.html`), le meilleur post du mois | Convertit la vue de profil, qui est notre vrai signal d'intérêt |
| **Expérience** | Poste actuel décrit en résultats opérationnels, historique « équipes de 1 000+ » mis en avant | C'est l'antidote au « vous êtes trop petits » |
| **Coordonnées** | `contact@salverys.fr` + site | Certains préfèrent l'email au DM |
| **Mode Créateur** | Activé, 5 sujets : support client · service desk · externalisation · ITIL · télésecrétariat médical | Débloque newsletter, mise en avant des posts, bouton « Suivre » par défaut |

Lockup et signature conformes à `BRANDING-Salverys.md §4` (forme courte selon la cible :
« Salverys. — Support IT & Applicatif » ou « — Télésecrétariat Médical »).

---

## 3. Positionnement éditorial

**La phrase que Salverys doit posséder sur LinkedIn :**

> **« La capacité doit exister avant le revenu qui la finance. »**

Tout le contenu découle de ce constat (démonstration : `LINKEDIN-AUDIENCE-RESEARCH.md §6`).

**Position de marque assumée : l'opérateur transparent.**
Ni le prestataire qui vante ses « solutions innovantes », ni l'offshore low-cost qui vend un
prix. Salverys publie **l'économie réelle du métier** (coûts, délais, ratios), **son mode
opératoire** (QA, PCA, RGPD, SLA) et **ses décisions** (pourquoi pas de remise, pourquoi un
dépôt d'activation) — y compris quand ça se retourne contre la vente.

**Trois choix de posture qui découlent de la stratégie MB :**

1. **On assume Antananarivo, ouvertement.** Le cacher rendrait tout le reste suspect. Ce
   qu'on met en avant n'est pas le pays mais la **rémunération** (~4,5× le marché local,
   `CLAUDE.md`) et ce qu'elle achète : zéro turnover visé, les mêmes voix dans la durée.
2. **On protège la discrétion du lecteur.** Aucun partenaire nommé, jamais, même après
   signature — et on le dit publiquement. C'est un argument de vente, pas une contrainte.
3. **On se disqualifie volontairement.** Publier « 5 cas où il ne faut pas externaliser » vaut
   plus qu'un an de brochure : c'est ce qui distingue un opérateur d'un revendeur.

---

## 4. Les 5 piliers de contenu

| # | Pilier | Part | Objectif principal | Personas | Thème d'angles |
|---|---|---|---|---|---|
| **1** | **L'économie du support** — coûts complets, délais, ratios, calculs ouverts | **30 %** | Confiance + partages | P1 P2 | Thème A |
| **2** | **Le mode d'emploi de la sous-traitance** — comment cadrer, quoi exiger, quels KPI | **25 %** | Demande (DM) | P1 P2 P3 | Thèmes B + F |
| **3** | **Coulisses de l'opération** — QA, double écoute, PCA, recrutement, rémunération | **20 %** | Preuve / anti-objection | P2 P3 | Thème C |
| **4** | **Le journal du redémarrage** — décisions réelles, erreurs, chiffres internes | **15 %** | Portée + followers | tous | Thème E |
| **5** | **Anti-brochure** — les vérités qui disqualifient, les idées reçues démontées | **10 %** | Portée + autorité | tous | Thème D |

**Règle des 70/30 :** ~70 % du contenu sert le **métier du lecteur** (il en tire quelque chose
même s'il n'achète jamais), ~30 % parle de Salverys. Jamais l'inverse.

**Règle IT-first :** sur 4 posts hebdomadaires, **au moins 2 visent P1/P2 (IT)**, 1 vise le
médical ou le dirigeant PME, 1 est transversal (piliers 4/5).

---

## 5. Formats et leur usage

| Format | Quand l'utiliser | Cadence | Note |
|---|---|---|---|
| **Texte seul (800-1 300 signes)** | Format par défaut : opinion, calcul, aveu, angle contre-consensus | 2/semaine | Le plus rapide à produire, le mieux distribué |
| **Post « document » (carrousel PDF, 6-10 pages)** | Frameworks, checklists, décompositions de coût | 1/semaine | Le format le plus **sauvegardé** — donc le meilleur pour B1, B3, A1 |
| **Capture / tableau annoté** | Reporting hebdo anonymisé, extrait de PCA, grille de calcul | 1 toutes les 2 semaines | Preuve visuelle imbattable pour le pilier 3 |
| **Vidéo native (45-90 s, sous-titrée)** | Coulisses du plateau, réponse à une objection face caméra | 1 toutes les 2-3 semaines | Sous-titres obligatoires : lecture sans son |
| **Sondage** | Uniquement pour ouvrir un sujet ou récolter de la matière | 1/mois max | Portée forte mais audience non qualifiée si surutilisé |
| **Newsletter LinkedIn** | Synthèse mensuelle de 1 200-1 800 mots | 1/mois, dès M+2 | Chaque édition notifie tous les abonnés — c'est de la distribution garantie |

**Règles de rédaction (non négociables) :**
- Accroche sur les **2 premières lignes** (~200 signes) : au-delà, c'est tronqué. Une idée,
  un chiffre, ou une phrase qui dérange.
- Une phrase par ligne, paragraphes de 1-3 lignes. La lecture est mobile.
- **Aucun lien externe dans le corps du post** — le mettre en premier commentaire, et le
  signaler (« lien en commentaire »). Heuristique de distribution largement observée, à
  re-tester tous les trimestres.
- **Zéro emoji décoratif**, maximum 3 hashtags en fin de post (`#supportclient`,
  `#servicedesk`, `#externalisation`, `#ITSM`, `#télésecrétariat`).
- Terminer par une **question ouverte et facile** — celle à laquelle un directeur peut
  répondre en 8 mots sans se compromettre.
- **Aucun jargon Salverys** : « marque blanche », « soupape », « périmètre restreint » sont
  compris ; « MB », « ETP par position », « palier 5+ » ne le sont pas.

---

## 6. Cadence et routine (le vrai moteur)

### Rythme hebdomadaire

| Jour | Post | Pilier type |
|---|---|---|
| **Mardi 8h** | Texte — économie du support | 1 |
| **Mercredi 8h** | Document / carrousel — mode d'emploi | 2 |
| **Jeudi 8h** | Coulisses ou anti-brochure | 3 ou 5 |
| **Lundi ou vendredi 8h** | Journal du redémarrage / opinion | 4 |

Créneau cible : **7h30-9h en semaine** (nos personas ouvrent LinkedIn avant leurs réunions).
Éviter vendredi après-midi et le week-end. **Ne jamais poster deux fois le même jour.**

### Routine quotidienne — 45 minutes, tous les jours ouvrés

| Durée | Action |
|---|---|
| **20 min** | **Commenter 8 à 10 posts** de comptes cibles ou d'audiences adjacentes (DSI, responsables support, dirigeants d'ESN, communautés CX). Commentaires de 2-4 lignes qui **apportent une information**, jamais « super post 👏 » et **jamais un pitch**. C'est le levier de portée n°1 les 60 premiers jours, avant que le contenu ne prenne. |
| **10 min** | **Répondre à tous les commentaires** reçus sur nos posts, dans l'heure si possible, avec une vraie phrase (une réponse d'un mot ne relance rien). |
| **10 min** | **Veille des déclencheurs** (Sales Navigator + LinkedIn Jobs) : postes helpdesk ouverts, levées, nouveaux contrats, changements de poste. Alimenter le CRM. |
| **5 min** | **DM** : suivi des conversations ouvertes, jamais d'ouverture à froid avec un pitch. |

> **Si une seule chose doit tenir, c'est cette routine.** Un mois de posts sans commentaires
> produit une portée quasi nulle au démarrage ; un mois de commentaires sans posts produit
> des vues de profil sans conversion. Les deux ensemble seulement.

### Production : 1 session de 2h30 par semaine
Le lundi matin, écrire les 4 posts de la semaine d'un bloc (les angles sont déjà stockés :
`LINKEDIN-AUDIENCE-RESEARCH.md §9`), les programmer, préparer le carrousel. **Ne jamais
écrire un post le matin où il doit sortir** — c'est ainsi que la cadence meurt.

---

## 7. Mécanique d'acquisition : du post au RDV de cadrage

Le parcours réel de nos acheteurs, et l'action Salverys correspondante :

```
Post lu en silence (P1/P2 ne likent pas)
        ↓
Vue de profil  ←── LE signal (pas le like)
        ↓
Consultation de la section Sélection (one-pager MB / simulateur)
        ↓
    ┌───────────────┴───────────────┐
    ↓                               ↓
DM entrant                  Réponse au cold email Emelia
    ↓                               ↓
        RDV de cadrage 15 min → périmètre restreint
```

**Règles de conversion :**

1. **Les vues de profil se travaillent, elles ne se subissent pas.** Consulter chaque semaine
   la liste (Sales Navigator / « Qui a consulté votre profil ») : tout compte correspondant à
   l'ICP est **un lead tiède**. Action : demande de connexion **sans note**, puis, s'il
   accepte, un message contextuel **48 h plus tard**, sans pitch.
2. **Le DM n'est jamais un pitch.** Gabarit unique :
   > « Bonjour {Prénom}, merci pour la connexion. Je regarde beaucoup comment les {ESN /
   > éditeurs} tiennent la couverture N1 du matin en ce moment — si c'est un sujet chez
   > {Société}, je serais curieux d'entendre comment vous le gérez. Sinon, ravi d'échanger
   > ici. »

   Objectif : une conversation, pas un RDV. Le RDV arrive au 3e ou 4e échange.
3. **Le commentaire précède toujours le contact.** Avant toute sollicitation d'un compte
   cible : 2-3 commentaires utiles sur ses posts, étalés sur 2 semaines. Le nom devient
   familier avant d'être un vendeur.
4. **Articulation avec Emelia :** LinkedIn ne remplace pas la séquence cold email, il la
   précède. Règle déjà posée dans `OUTREACH-IT-N1-marque-blanche.md` — *« LinkedIn DM d'abord
   si profil accessible, avant d'envoyer E1 »*. Le contenu publié rend cette règle rentable :
   le prospect qui reçoit E1 a déjà vu un post.
5. **Traçabilité :** toute conversation LinkedIn qualifiée entre dans `CRM_Salverys.html`
   avec la niche correspondante (`helpdesk-it-esn`, etc.) et la source `linkedin`, aux mêmes
   statuts que le cold email (`new` → `contacté` → `réponse` → `rdv` → `pilote` → `client`).
   Sans ça, on ne saura jamais ce que LinkedIn rapporte.

---

## 8. Déclencheurs de croissance (growth triggers)

### 8.1 Déclencheurs de portée (à provoquer)

| Levier | Mécanique | Rythme |
|---|---|---|
| **Le post « chiffre »** | Une décomposition de coût complet est sauvegardée et transférée en interne — la sauvegarde est le signal de portée le plus fort | 2×/mois |
| **Le post « je me disqualifie »** | Dire quand il ne faut pas nous appeler crée du commentaire et de la confiance simultanément | 1×/mois |
| **L'aveu chiffré** | « Cette erreur de ciblage nous a coûté 6 semaines » — le build in public est un vide total dans le BPO FR | 2×/mois |
| **Le commentaire sur un gros compte** | Un commentaire pertinent sous un post à forte audience expose le titre de profil à des milliers de personnes pour 0 € | quotidien |
| **La réponse publique à une objection** | Reprendre une objection réelle d'un prospect (anonymisée) et y répondre en post | 1×/mois |
| **La newsletter mensuelle** | Notification à tous les abonnés = distribution garantie, indépendante du fil | 1×/mois dès M+2 |

### 8.2 Déclencheurs saisonniers (calendrier à armer)

| Période | Tension du marché | Contenu à sortir |
|---|---|---|
| **Fin août - septembre** | Rentrée : pic médical, retours de congés, budgets N+1 en préparation | F2, F1, A2, T1 |
| **Octobre - novembre** | Arbitrages budgétaires 2027, appels d'offres | A1, A5, B13, D11 |
| **Décembre** | Pics de charge + congés = trous de couverture | C4, C12, D10 |
| **Janvier** | Nouveaux objectifs SLA, nouveaux postes ouverts | A6, B1, B3 |
| **Mai - juin** | Préparation de l'été : le trou structurel d'août | C3, C4, F1 |
| **Juillet - août** | Effectifs réduits, incidents non couverts | E-series (build in public, moins de concurrence dans le fil) |

### 8.3 Déclencheurs de compte (réactifs, quotidiens)
Grille complète dans `LINKEDIN-AUDIENCE-RESEARCH.md §11` : offre d'emploi helpdesk publiée,
levée de fonds, nouveau contrat annoncé, changement de poste d'un décideur, post d'un cible
sur sa charge. **Règle : un déclencheur détecté = une action dans les 48 h**, éditoriale
(post générique sur le sujet) ou commerciale (CRM + séquence), jamais un commentaire
opportuniste sous son annonce de recrutement.

---

## 9. Mesure — le tableau de bord mensuel

| Niveau | Indicateur | Cible M+3 | Où le lire |
|---|---|---|---|
| **Portée** | Impressions/mois | 25-40 k | Analytics LinkedIn / Shield |
| **Portée** | Followers nets/mois | +250 à +400 | Analytics |
| **Engagement** | Taux d'engagement moyen | ≥ 3 % | Shield |
| **Engagement** | Commentaires reçus / post | ≥ 5 | Analytics |
| **Qualité d'audience** | % de followers correspondant à l'ICP (fonction + secteur) | ≥ 40 % | Démographie des followers |
| **Intention** | Vues de profil / semaine | ≥ 60 | LinkedIn |
| **Intention** | Vues de profil **par des comptes ICP** | ≥ 15/semaine | Sales Navigator |
| **Demande** | Conversations DM qualifiées / mois | 4-6 | CRM (source `linkedin`) |
| **Demande** | RDV de cadrage issus de LinkedIn | 1-2/mois | CRM |
| **Effet croisé** | Taux de réponse Emelia avant / après LinkedIn actif | +2 pts | Emelia |

**Revue mensuelle (30 min, le 1er lundi) :** les 3 posts les plus performants → quel pilier,
quel format, quelle accroche ; les 3 plus faibles → pourquoi. On **remonte les angles
gagnants** dans `LINKEDIN-AUDIENCE-RESEARCH.md §9` et on double la mise sur le format qui
génère des vues de profil ICP (pas sur celui qui génère le plus de likes — ce n'est presque
jamais le même).

⚠️ **Piège à éviter :** le pilier 4 (journal du redémarrage) fera toujours plus de vues que
le pilier 2 (mode d'emploi). Ce n'est pas une raison pour basculer dessus : le pilier 2
génère les DM. **Optimiser la portée au détriment de la demande est l'échec classique de ce
canal.**

---

## 10. Plan à 90 jours

### Semaines 1-2 — Fondations (aucun post)
- [ ] Profil dirigeant refondu intégralement (§2), mode Créateur activé.
- [ ] Page entreprise Salverys complétée (description, bannière, lien, secteur, 3 spécialités).
- [ ] Sales Navigator souscrit + 4 listes de comptes créées : `Éditeurs SaaS FR`,
      `ESN-MSP FR 50-300`, `Télésecrétariats FR`, `PME cibles`. Sources de départ :
      `SAAS-SUPPORT-TARGETS.md`, `ESN-TARGETS.md`, `TELESEC-TARGETS.md`.
- [ ] Section Sélection alimentée (one-pager MB, simulateur, page métier).
- [ ] 12 premiers angles choisis dans `LINKEDIN-AUDIENCE-RESEARCH.md §9` et rédigés d'avance.
- [ ] Routine quotidienne de commentaires démarrée **dès le jour 1**, avant le premier post.

### Semaines 3-6 — Cadence et crédibilité
- [ ] 4 posts/semaine, sans exception. Ordre de lancement recommandé : **A1** (coût complet),
      **E1** (repartir de zéro à 10), **D1** (quand ne pas externaliser), **B1** (7 questions).
- [ ] 8-10 commentaires/jour sur les comptes cibles.
- [ ] Premier carrousel en semaine 4 (A1 en format document).
- [ ] Les 2 managers commencent à commenter chaque post.
- [ ] Première revue à S6 : quels piliers génèrent des vues de profil ICP.

### Semaines 7-12 — Amplification et conversion
- [ ] Lancement de la **newsletter LinkedIn mensuelle** (« L'économie du support » —
      nom à valider) ; annoncer sur 2 posts.
- [ ] Première vidéo native (coulisses plateau ou réponse à objection).
- [ ] Démarrage systématique du traitement des vues de profil ICP (§7, règle 1).
- [ ] Croisement Emelia × LinkedIn : toute cible de séquence reçoit une demande de connexion
      **avant** E1.
- [ ] Revue à 90 jours : arbitrer la reconduction du budget outils, ajuster la répartition
      des piliers, mettre à jour les deux documents.

---

## 11. Modèles de posts prêts à publier

> À adapter, pas à copier tels quels : la voix du dirigeant prime. **Aucun ne contient de
> tarif de marque blanche** (`PRICING.md §0/§9`). Les seuls chiffres publiables sont les
> coûts de marché (`PRICING.md §3`) et la grille médicale publique (`§1`).

### Modèle 1 — Pilier 1 · angle A1 · éditeurs SaaS & ESN

> Un technicien support N1 à 30 000 € brut par an vous coûte entre 38 000 et 50 000 €.
>
> La différence, c'est tout ce qui ne figure pas sur la fiche de paie :
>
> — charges patronales
> — congés, RTT, arrêts (≈ 20 % du temps payé, non produit)
> — recrutement : 60 à 90 jours, pendant lesquels la charge ne baisse pas
> — formation initiale : 3 à 6 semaines avant d'être autonome sur un périmètre
> — supervision : un manager ne pilote pas gratuitement
> — matériel, licences ITSM, poste de travail
> — turnover : sur un poste N1, on reforme tous les 12 à 18 mois
>
> C'est pour ça que la question « est-ce qu'on a le budget ? » est presque toujours la
> mauvaise question.
>
> La bonne : est-ce qu'on a 90 jours devant nous ?
>
> Parce que le budget, la plupart du temps, existe déjà — il dort sur un poste ouvert que
> personne n'arrive à pourvoir.
>
> Vous le calculez comment, vous, le coût complet d'un poste support ?

---

### Modèle 2 — Pilier 5 · angle D1 · tous personas

> Cinq situations où il ne faut pas externaliser son support. Je les dis alors que c'est mon
> métier de le vendre.
>
> 1. Vos process ne sont écrits nulle part. Externaliser ne documente rien — ça révèle
> juste ce qui n'existait pas.
>
> 2. Votre volume est trop faible et trop irrégulier. En dessous d'un certain flux, un
> agent dédié n'a pas de quoi tenir une compétence.
>
> 3. Votre support est votre produit. Si le conseil expert est ce que le client achète, le
> N1 externe ne s'applique qu'à la partie répétitive — et il faut avoir tracé la frontière.
>
> 4. Vous cherchez d'abord une économie. Une externalisation motivée uniquement par le coût
> se négocie vers le bas jusqu'à ce que la qualité casse.
>
> 5. Personne en interne n'a le temps de piloter le prestataire. Un partenaire sans
> interlocuteur dérive en trois mois.
>
> Dans ces cinq cas, on préfère le dire au premier appel plutôt qu'au troisième mois.
>
> Il en manque une dans la liste ?

---

### Modèle 3 — Pilier 3 · angle C1 · ESN/MSP & télésecrétariats

> On paie nos agents environ 4,5 fois le salaire moyen de leur marché local.
>
> Ce n'est pas de la générosité. C'est un calcul.
>
> Dans ce métier, le coût qui fait mal n'est pas le salaire — c'est la rotation. Un agent
> qui part à 6 mois, c'est : un recrutement, 3 semaines de formation, une courbe de qualité
> qui redémarre à zéro, et un client qui réentend une voix nouvelle pour la quatrième fois
> de l'année.
>
> Un plateau à bas coût ne vend pas un prix bas. Il vend un prix bas **et** votre
> reformation permanente, facturée en qualité.
>
> Nous, on a fait l'autre pari : payer très au-dessus du marché, et viser zéro turnover sur
> les comptes.
>
> Quand c'est votre marque qui décroche, ce n'est pas le tarif à l'appel qui compte. C'est
> de savoir si dans dix-huit mois, c'est toujours la même personne qui répond.

---

### Modèle 4 — Pilier 2 · angle B1 · carrousel (structure des pages)

**Titre :** *Les 7 questions à poser à un sous-traitant support avant de signer*

| Page | Contenu |
|---|---|
| 1 | Titre + « La plupart des mauvaises expériences se jouent avant le démarrage. » |
| 2 | **1. Sur quel périmètre exact peut-on démarrer petit ?** Si la réponse est « tout de suite, à l'échelle », fuyez. |
| 3 | **2. Quels KPI seront partagés dès le premier jour ?** Pas au 3e mois : dès J1. |
| 4 | **3. Que se passe-t-il si le SLA n'est pas tenu ?** Un engagement sans contrepartie financière n'est pas un engagement. |
| 5 | **4. Comment je sors ?** Le préavis pendant les 3 premiers mois est le vrai indicateur de confiance du prestataire en lui-même. |
| 6 | **5. Qu'est-ce qui se passe si un agent est absent ?** Demandez le nom du backup. |
| 7 | **6. Où sont stockées mes données, et sous quel cadre ?** DPA, article 28, transferts. Par écrit. |
| 8 | **7. Que se passe-t-il en cas de coupure chez vous ?** Exigez le plan de continuité **avant** de signer, pas après l'incident. |
| 9 | « Si votre prestataire répond aux 7, le reste est une question de prix. S'il en esquive deux, le prix n'a plus d'importance. » + Salverys. — Support IT & Applicatif |

---

### Modèle 5 — Pilier 4 · angle E4 · build in public

> On a arrêté d'offrir le premier mois à nos partenaires. Décision prise ce trimestre, et
> elle nous a coûté deux conversations.
>
> Le raisonnement : nos partenaires **revendent** notre prestation. Une remise sur leur prix
> d'achat améliore leur marge d'un mois. Elle ne leur fait gagner aucun client.
>
> Ce qu'on leur donne à la place, et qui coûte plus cher à produire :
>
> — la possibilité d'arrêter en prévenant 30 jours pendant les 3 premiers mois
> — une exclusivité sur leur segment pendant 12 mois
> — sous 48 h, notre plan de continuité, notre DPA, notre dispositif qualité et notre
> engagement de service écrit — réutilisables tels quels dans **leurs** réponses d'appels
> d'offres
>
> Le troisième point est le seul qui les aide à gagner un client, au lieu d'en économiser un.
>
> On a échangé une remise contre du risque en moins et un dossier d'avant-vente. Je crois
> que c'est le bon échange. On saura dans six mois.

---

### Modèle 6 — Pilier 1 · angle A2 · ESN/MSP

> Qui répond chez vous à 7h45 ?
>
> C'est l'heure où un collaborateur n'arrive pas à se connecter, où une imprimante de site
> bloque une chaîne, où un VPN refuse un accès. Et c'est presque toujours l'heure où
> personne n'est encore au service desk.
>
> Deux façons de couvrir ce créneau en interne : payer des primes de décalage, ou demander à
> quelqu'un de commencer à 7h — jusqu'à ce qu'il parte.
>
> À Antananarivo, il est 9h45. C'est une heure de bureau ordinaire. Pas de prime, pas
> d'astreinte, pas de rotation à négocier.
>
> Le décalage horaire, dans ce sens-là, cesse d'être un problème pour devenir la solution.
>
> Combien d'incidents bloquants tombent chez vous avant 9h ?

---

### Modèle 7 — Pilier 2 · angle F1 · télésecrétariats médicaux

> Le samedi matin est probablement le créneau qui vous coûte le plus cher.
>
> Un cabinet le demande, vous ne pouvez pas le refuser sans fragiliser la relation. Alors
> vous le staffez : majoration, planning à négocier, une personne qui accepte trois mois
> puis demande à sortir de la rotation.
>
> Sur le papier, la ligne est facturée. Dans les faits, le créneau est structurellement peu
> rentable — et il pèse sur le moral de l'équipe qui tient la semaine.
>
> C'est exactement le type de créneau qu'on prend en charge, sous votre nom, sans que vos
> cabinets voient passer quoi que ce soit.
>
> Pas pour remplacer votre plateau. Pour lui enlever ce qu'il ne peut pas rentabiliser.
>
> Vous les gérez comment, vos week-ends ?

---

### Modèle 8 — Pilier 5 · angle D5 · réponse à objection

> « Nos clients n'accepteraient jamais de l'offshore. »
>
> C'est la phrase que j'entends le plus. Elle contient une vérité et un malentendu.
>
> La vérité : leurs clients n'ont pas à le savoir. En marque blanche, l'agent répond au nom
> de l'entreprise, dans ses outils, avec ses scripts et son ton. Il n'y a pas de conversation
> à avoir avec le client final, parce qu'il n'y a rien de visible à expliquer.
>
> Le malentendu : ce que les gens rejettent, ce n'est pas un pays. C'est une expérience —
> l'agent qui lit un script sans comprendre, qui change tous les six mois, qu'on n'a pas
> formé.
>
> Ça, ce n'est pas une question de géographie. C'est une question de combien on paie
> l'agent, de combien de temps on le forme, et de s'il reste.
>
> Un plateau mal payé produit une mauvaise expérience à Paris aussi.

---

## 12. Garde-fous (à relire avant chaque publication)

1. **Aucun tarif de marque blanche.** Rate card ETP, prix par créneau, planchers, paliers,
   dépôt d'activation chiffré : jamais publics (`PRICING.md §0/§9`). Seules exceptions
   publiables : les **coûts de marché** (33-42 k€ / 38-50 k€, `§3`) et la **grille médicale
   publique** (350/590/950 €, `§1`).
2. **Aucun nom de client ou de partenaire, aucun logo, aucune capture identifiable.** Les cas
   se racontent dé-identifiés (« un éditeur SaaS d'une centaine de personnes »).
3. **Aucune donnée de santé, aucun verbatim d'appel médical** (`CONFORMITE-HDS-RGPD.md`).
4. **Aucun résultat client inventé.** Avant le premier contrat signé : on publie la méthode
   et les coûts de marché, jamais des « résultats obtenus ».
5. **Aucune attaque nominative de concurrent.** On critique des pratiques.
6. **Aucune promesse non tenue à date** (24/7, multilingue, certifications non obtenues).
7. **Cohérence de marque** : lockup `Salverys.` conforme à `BRANDING-Salverys.md` — forme
   courte selon la cible, jamais de sous-marque « Salverys IT » autonome.
8. **Sujet sensible = 24 h de recul.** Tout post qui pourrait exposer un futur partenaire ou
   toucher au pays d'implantation attend une relecture le lendemain.

---

## 13. Ce que ce plan ne fait pas (limites assumées)

- **Il ne remplace pas la prospection sortante.** Emelia reste le canal de volume ; LinkedIn
  augmente son taux de réponse et récupère les tièdes. Les deux se financent mutuellement.
- **Il ne produit presque rien avant 8 à 10 semaines.** Toute décision d'arrêt prise avant
  M+3 rendra l'investissement des 3 premiers mois intégralement perdu.
- **Il dépend d'une seule personne.** Si le dirigeant ne peut pas tenir 45 min/jour + 2h30 de
  production hebdo, il faut réduire la cadence à 2 posts/semaine **et l'assumer** dans les
  objectifs du §1, plutôt que de démarrer à 4 et s'arrêter à la semaine 5.
- **Il ne dit rien du contenu de recrutement.** Le sourcing d'agents à Antananarivo relève de
  `07-Recrutement-Vivier/` et suit une logique d'audience différente : à traiter séparément,
  sur le même profil mais sans mélanger les fils (le contenu recrutement dilue l'audience
  décideurs).

---

## 14. À revoir

- **À M+3 :** répartition des piliers selon ce qui génère réellement des vues de profil ICP ;
  reconduction du budget outils ; passage éventuel de 4 à 5 posts/semaine.
- **Au premier contrat MB signé :** un pilier « preuve » devient possible (KPI réels,
  anonymisés et validés par le partenaire) — il prendra une part du pilier 1.
- **Si la direction ouvre la niche « relation client de toutes sortes »** (aujourd'hui
  repoussée, `CLAUDE.md`) : ajouter un persona et un jeu d'angles, sans toucher aux piliers.
