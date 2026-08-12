# SCRIPTS-APPEL-2026 — Barrage standard & Inbound (post-11 août 2026)

> Créé le **2026-08-12**, au lendemain de l'entrée en vigueur de la nouvelle loi sur le
> démarchage téléphonique (**loi n° 2025-594 du 30 juin 2025, art. 13** → nouvelle rédaction
> de l'**article L. 223-1 du code de la consommation**, applicable depuis le **11/08/2026**).
>
> Complète — ne remplace pas — `02-Prospection/SCRIPTS-APPEL.md` (les 3 niches × 5 étapes).
> Ici : **2 scripts transverses** qui encadrent l'appel proprement dit.
>
> - **Script A — Barrage / accueil standard** : franchir l'accueil et **repartir avec les
>   coordonnées de l'ICP** (nom, fonction, email direct, ligne directe ou créneau).
> - **Script B — Inbound / on nous rappelle** : le prospect nous appelle ou nous rappelle
>   (cold email Emelia, message vocal, simulateur, LinkedIn) → **on qualifie et on close un RDV**.
>
> **Sources de vérité** : prix/SLA = `PRICING.md` · conformité médicale =
> `CONFORMITE-HDS-RGPD.md` · garde-fous marque/discours = `CLAUDE.md`.
>
> ⚠️ **Sync CRM** : ces deux scripts ne sont **pas encore** dans l'objet `CALL_SCRIPTS` de
> `CRM_Salverys.html`. À intégrer (clés proposées : `CALL_SCRIPTS.barrage.*` et
> `CALL_SCRIPTS.inbound.*`).

---

## 0. Ce que la loi change réellement pour nous

### 0.1 En une phrase

**Non, le B2B n'est pas interdit.** Ce qui est interdit depuis le 11/08/2026, c'est
d'appeler un **consommateur** (particulier) sans son **consentement préalable**. Notre
prospection — éditeurs SaaS, ESN/MSP, télésecrétariats, cabinets médicaux, sur des lignes
professionnelles et pour un sujet lié à leur activité — **reste licite**.

La confusion vient de la presse grand public : « toutes les entreprises sont concernées »
signifie *toutes les entreprises qui appellent des particuliers*, pas *tous les appels
entre entreprises*.

### 0.2 Le régime consommateur (B2C) — ce à quoi on ne touche pas

| Point | Règle depuis le 11/08/2026 |
|---|---|
| Principe | **Opt-in** : interdiction d'appeler un consommateur qui n'a pas consenti au préalable |
| Consentement | Libre, spécifique, éclairé, univoque, **révocable**, par acte positif clair |
| Preuve | **À la charge du professionnel**, conservée **3 ans min.**, communicable sur demande |
| Exception | Sollicitation dans le cadre de **l'exécution d'un contrat en cours** et en rapport avec son objet (y c. produits liés/complémentaires) |
| Bloctel | **Supprimé** (la logique d'opposition n'a plus d'objet) |
| Jours/horaires | Lundi-vendredi, **10h-13h / 14h-20h**, hors jours fériés |
| Sanctions | Amende administrative jusqu'à **75 000 €** (personne physique) / **375 000 €** (personne morale) |

### 0.3 Le régime B2B — ce qui s'applique à nous

Pas d'opt-in, mais **pas une zone franche**. Ce qui reste opposable :

1. **RGPD, base légale = intérêt légitime** (art. 6.1.f). Admise par la CNIL **à condition
   que l'objet de la sollicitation soit en rapport avec la fonction** de la personne appelée.
   → Nos offres (support N1, helpdesk, télésecrétariat) le sont par construction. **Ne jamais
   dériver** vers une offre hors périmètre métier.
2. **Identification immédiate** : nom + société **dans la première phrase**. Pas de « enquête »,
   pas de faux prétexte, pas de numéro masqué.
3. **Droit d'opposition immédiat et gratuit** : « ne me rappelez plus » = **stop définitif**,
   enregistré au CRM le jour même, y compris pour l'email.
4. **Traçabilité du fichier** : origine de chaque contact documentée (LinkedIn, site,
   annuaire pro, salon…), information RGPD accessible, durée de conservation définie.
5. **Sous-traitance** : si un prestataire appelle pour nous, contrat art. 28 RGPD.

### 0.4 La vraie zone de risque pour Salverys : les **lignes mixtes**

C'est notre **niche médicale** qui est exposée : médecin libéral, kiné, sage-femme,
micro-entrepreneur — **un seul téléphone** pour le pro et le perso. Un professionnel
libéral appelé sur un mobile personnel peut, selon le contexte, se prévaloir du **régime
consommateur**.

**Règles internes Salverys (non négociables) :**

- ✅ On appelle **le numéro publié par la structure** : standard du cabinet, ligne du
  secrétariat, numéro sur le site / la fiche Doctolib / l'annuaire pro / le Kbis.
- ⛔ **Jamais** un mobile personnel non publié, jamais un numéro « trouvé » sans source.
- ✅ L'objet de l'appel est **strictement lié à l'exercice** : gestion des appels patients,
  support, service desk. Jamais une offre transposable au grand public.
- ✅ **On applique les horaires B2C par prudence** : lundi-vendredi 10h-13h / 14h-20h, hors
  fériés. Ce n'est pas exigé pour une personne morale, mais c'est notre garantie en cas de
  requalification — et c'est de toute façon la plage où on joint quelqu'un.
- ✅ **Une trace CRM par appel** : numéro appelé, origine de la donnée, qualité de
  l'interlocuteur (personne morale / pro sur ligne pro), objet, issue, opposition éventuelle.
- ⛔ **Aucun appel** vers un particulier, aucun fichier de particuliers, jamais.

### 0.5 L'effet de bord commercial (à utiliser en prospection)

Le B2C sortant s'effondre côté France. Les plateaux qui vivaient de l'émission grand public
doivent se replier sur **la réception, le support et le service client** — exactement le
terrain de nos donneurs d'ordre (télésecrétariats, prestataires support, ESN/MSP). Deux
conséquences exploitables :

- **Argument d'accroche MB** : la valeur se déplace vers l'inbound qualifié ; leur enjeu
  n'est plus de sortir des appels mais de **tenir la charge entrante à coût maîtrisé**.
- **Argument interne** : notre modèle est 100 % réception → **zéro exposition** à la réforme.
  À dire tel quel quand un prospect nous teste sur le sujet (voir objection C1).

---

## 1. Script A — Barrage / accueil standard (`CALL_SCRIPTS.barrage`)

**Objectif unique de l'appel : sortir avec 3 informations.**

| # | Info | Formulation cible |
|---|---|---|
| 1 | **Nom + fonction exacte** de l'ICP | « c'est bien {prenom nom} qui pilote le service desk ? » |
| 2 | **Email direct** (pas `contact@`) | « c'est prenom.nom@… ou une autre logique ? » |
| 3 | **Ligne directe OU créneau de rappel accepté** | « je le rappelle jeudi 11h, c'est un bon moment ? » |

> ⚠️ On **ne pitche jamais** au standard. L'accueil n'achète rien et ne transmet bien qu'un
> message court, factuel, sans odeur commerciale. Un pitch = un « envoyez un mail à contact@ ».

### `barrage.opening` — Ouverture (les 10 premières secondes)

**Variante 1 — on connaît le nom de l'ICP (cas normal : LinkedIn / CRM)**

> Bonjour, **Valérien Rakotoson, société Salverys**. Je cherche à joindre **{prenom nom}**,
> c'est bien lui/elle qui s'occupe du **{service desk / support client / planning}** chez
> **{structure}** ? Vous me le/la passez ?

**Variante 2 — on ne connaît pas le nom**

> Bonjour, **Valérien Rakotoson, société Salverys**. Question rapide avant que je dérange
> qui que ce soit : chez **{structure}**, **qui pilote le {support N1 / service desk /
> débordement d'appels}** aujourd'hui ?

💡 **Tip** — Trois marqueurs à tenir : **ton posé et lent** (le commercial parle vite),
**prénom + nom** (le commercial ne donne que son prénom), **une seule question fermée**.
La variante 2 marche mieux qu'on ne croit : on demande **une information**, pas un transfert
— l'accueil est là pour ça, il répond souvent sans réfléchir.

⛔ **Danger** — Ne dis jamais « je suis bien chez… ? », « comment allez-vous ? », ni
« je vous appelle pour vous présenter… ». Les trois déclenchent le réflexe de filtrage.

### `barrage.mandat` — Faire de l'accueil un allié (l'étape que tout le monde saute)

Dès que la personne hésite, **on la nomme et on la met dans la boucle** :

> Je préfère être honnête avec vous, ça ira plus vite : je suis **prestataire**, on opère des
> équipes **support N1 et télésecrétariat francophones** pour des structures comme la vôtre.
> Je ne vais pas vous vendre quoi que ce soit, **c'est {prenom} qui doit juger si c'est
> pertinent**. Vous me dites juste : je passe par vous, ou je le/la joins directement ?

💡 **Tip** — Annoncer soi-même qu'on est prestataire **désamorce** le filtrage : la personne
n'a plus à te démasquer. Et ça respecte l'obligation d'identification (§0.3).

### `barrage.capture` — Capturer les coordonnées (le cœur du script)

Trois demandes, **dans cet ordre**, jamais les trois d'un coup :

**1. Le nom (et son orthographe — c'est ça qui donne l'email)**

> Parfait. **{prenom nom}**, ça s'écrit comment exactement ? … Et son titre exact, c'est
> **{Responsable support}** ou il y a une autre formulation en interne ?

**2. L'email direct — technique du format**

> Merci. Pour lui envoyer quelque chose d'utile plutôt qu'un truc générique : vos adresses
> c'est **prenom.nom@{domaine}**, ou une autre logique ?

> *(Si refus de donner l'adresse mais confirmation du format → tu as l'email. Note-le comme
> **format confirmé**, pas comme email vérifié, et fais-le valider par Emelia.)*

**3. Le créneau — on transforme un cold call en rappel attendu**

> Dernière chose et je vous libère : plutôt que de rappeler au hasard et de le/la déranger en
> réunion, **quel est le bon moment ? Plutôt le matin tôt, ou en fin d'après-midi ?**

💡 **Tip** — Le créneau vaut plus cher que la ligne directe : au rappel suivant, la phrase
devient **« je rappelle {prenom} comme convenu avec l'accueil jeudi 11h »**. Ce n'est plus
un cold call, et le taux de passage double.

⚠️ **Conformité** — Un créneau donné par l'accueil **n'est pas un consentement** au sens de
la loi (on n'en a pas besoin en B2B), mais **c'est une trace de légitimité**. Note-la au CRM :
`accueil / {nom accueil} / créneau accordé le {date}`.

### `barrage.message` — Le message de 20 secondes (si transfert impossible)

À dicter **lentement**, en répondeur ou à l'accueil qui prend note :

> **Valérien Rakotoson, Salverys, {numéro}.** On opère des équipes **support N1 francophones**
> pour des {éditeurs SaaS / ESN}, en **marque blanche**. J'appelle {prenom} pour savoir si le
> **débordement N1** est un sujet chez vous en ce moment. Si c'est non, un mot et je n'insiste
> pas. **{numéro}**, je répète : **{numéro}**.

💡 **Tip** — « Si c'est non, un mot et je n'insiste pas » fait rappeler. Ça donne le contrôle
à l'autre — et ça matérialise le droit d'opposition (§0.3), donc c'est vrai **et** conforme.

### `barrage.closing` — Sortie propre (toujours, même sur un échec)

> Merci **{prénom de l'accueil}**, vous m'avez fait gagner du temps. Bonne journée.

💡 **Tip** — Retenir et réutiliser le prénom de l'accueil. Au 2e appel : « Bonjour Sandrine,
Valérien de Salverys, on s'est parlé mardi » → tu es dans le cercle.

---

### Arbre d'objections — `OBJECTIONS_BARRAGE`

#### B1 — « C'est à quel sujet ? »

**Réponse** — **Support client, sur la partie opérationnelle.** On opère des équipes N1
francophones pour des {éditeurs / ESN} qui n'arrivent plus à absorber leur volume entrant.
Je veux **2 minutes de {prenom}** pour savoir si le sujet existe chez vous — s'il n'existe
pas, je n'insiste pas.

- Si « c'est commercial alors » → « **Oui.** Et c'est pour ça que je demande 2 minutes et pas
  30. {prenom} est là ? »
- Si « je vous passe » → passe en `barrage.capture` dès qu'il/elle décroche.

> 💡 **Assume le commercial.** Nier = tu perds la personne à la seconde suivante. Assumer +
> borner le temps = tu passes dans ~1 cas sur 3.

#### B2 — « Envoyez un mail à contact@… »

**Réponse** — **Je vais le faire.** Sauf que `contact@`, en général, personne ne le lit —
et vous allez recevoir un message de plus pour rien. **Je vous propose l'inverse** : donnez-moi
le nom de la personne, je lui écris **directement**, court, spécifique, et je mets `contact@`
en copie si vous voulez. Elle s'appelle comment ?

- Si le nom vient → `barrage.capture` étape 2 (le format email).
- Si toujours `contact@` → « OK, j'envoie. **Je mets quoi en objet pour que ça arrive à la
  bonne personne ?** » — la réponse révèle presque toujours le service, parfois le nom.

#### B3 — « On ne communique pas les coordonnées, c'est le RGPD. »

**Réponse** — **Vous avez raison de le protéger, et je ne vous demande pas de fichier.**
Je vous demande une seule chose, qui est **publique** : la **fonction** de la personne à qui
je dois parler. Le reste, je le trouve. C'est le **responsable du service desk** ou ça passe
par la direction des opérations chez vous ?

- Si la fonction vient → tu as l'entrée LinkedIn → ICP identifié, rappel ciblé.
- Si blocage total → passe en `barrage.message` puis sors proprement.

> ⚠️ Ne **jamais** contredire quelqu'un qui invoque le RGPD, et ne jamais argumenter « la loi
> le permet ». Tu as tort commercialement même si tu as raison juridiquement.

#### B4 — « De toute façon le démarchage téléphonique est interdit depuis le 11 août. »

**Réponse** — **C'est la réforme du 11 août, et elle est réelle — mais elle vise les appels
aux particuliers.** Elle ne s'applique pas aux appels entre professionnels sur un sujet lié à
votre activité, ce qui est le cas ici. Cela dit : **si vous me dites de ne plus appeler, je
l'enregistre et vous n'entendez plus parler de nous, aujourd'hui.** Vous préférez que je note
ça, ou je peux poser ma question à {prenom} ?

- Si « notez-le » → **opposition immédiate** : CRM `NE PAS APPELER` + désinscription email
  Emelia le jour même. **Aucune relance, jamais.** Et on remercie.
- Si « non non, allez-y » → tu viens de gagner en crédibilité, enchaîne `barrage.capture`.

> 🔒 **Garde-fou** : la réponse ci-dessus est la **seule** autorisée sur ce sujet. Ne jamais
> dire « on a le droit », « ça ne nous concerne pas », ni citer un article de loi à
> l'interlocuteur. On informe **une fois**, on offre le stop, on n'argumente pas.

#### B5 — « Il/elle est en réunion / en congés / pas là. »

**Réponse** — **Pas de souci, je ne vais pas le/la traquer.** Deux options : soit vous me
dites quand c'est le bon moment et je rappelle **à ce moment-là précisément**, soit vous me
donnez son email et je lui écris. **Le plus simple pour vous, c'est lequel ?**

- Créneau donné → note-le au CRM comme rappel **accordé par l'accueil**.
- Email donné → envoi le jour même, objet ultra-court, et rappel J+3 en citant l'email.

#### B6 — « On travaille déjà avec un prestataire. »

**Réponse** — **C'est plutôt bon signe, ça veut dire que le sujet est identifié chez vous.**
Je ne cherche pas à le remplacer aujourd'hui. Je veux juste que {prenom} sache qu'il existe
une capacité **francophone, sur le fuseau France**, mobilisable en débordement. **Deux minutes
avec lui/elle et je disparais si ce n'est pas le moment.**

- Si passage → en qualif, cherche la **date de fin de contrat** (rappel J-90).
- Si blocage → `barrage.message`, puis séquence email.

#### B7 — SVI / serveur vocal (« tapez 1 pour… »)

**Tactique** — Ne jamais prendre le choix « commercial / nouveau client » (redirige vers un
tunnel de vente entrant). Prendre **« service technique »**, **« support »** ou **« autre
demande »** : ce sont des humains proches de notre ICP, et ils **connaissent le nom** du
responsable. Puis :

> Bonjour, je suis mal tombé, désolé — **Valérien, société Salverys**. Vous pouvez me dire qui
> pilote le support N1 chez vous, que je ne fasse pas perdre de temps à tout le monde ?

---

## 2. Script B — Inbound / on nous rappelle (`CALL_SCRIPTS.inbound`)

**Contexte** : le prospect **nous** appelle — retour de cold email Emelia, rappel après
message vocal, formulaire des simulateurs (`simulateur-helpdesk-it.html`,
`simulateur-salverys.html`), demande LinkedIn, ou recommandation.

**Ce qui change par rapport au cold call :** l'intention est déjà là. **Le risque n'est plus
d'être raccroché au nez, c'est de gâcher un appel chaud en pitchant trop vite.**

> ⚠️ Un appel entrant est **hors du champ du démarchage** — c'est le prospect qui sollicite.
> Aucune contrainte d'horaire, aucune question de consentement. **On décroche toujours**, y
> compris hors 10h-20h. Un inbound non décroché, c'est un lead mort.

**Objectif de l'appel** : qualifier en 6 minutes, puis **poser un RDV daté** (visio 30 min).
Pas de devis au téléphone, pas de prix MB au téléphone (§2.5).

### `inbound.opening` — Décrocher (les 15 premières secondes)

> **Salverys, Valérien Rakotoson, bonjour.**
>
> *(après sa phrase)* Très bien, merci de me rappeler. **Avant que je vous raconte quoi que
> ce soit — qu'est-ce qui vous a fait décrocher votre téléphone ?**

💡 **Tip** — C'est **la** question de l'inbound. Elle donne en 30 secondes : le déclencheur,
le niveau d'urgence, et souvent le budget implicite. Celui qui parle en premier de son
problème a déjà commencé à acheter.

⛔ **Danger** — Ne jamais répondre à « c'est pour quoi votre mail ? » par un pitch. Réponds
en une ligne puis **rends la parole** :

> On opère des équipes **support N1 et télésecrétariat francophones** depuis Madagascar, en
> marque blanche pour des structures comme la vôtre. **Mais dites-moi d'abord ce qui a
> accroché de votre côté — je m'adapte.**

### `inbound.ancrage` — Identifier la source en 10 secondes

Si ce n'est pas déjà clair, une seule question :

> Vous m'appelez suite à **l'email de la semaine dernière**, ou vous êtes passé par le
> **simulateur** sur le site ?

| Source | Ce que ça dit | Angle à prendre |
|---|---|---|
| **Cold email Emelia** | Curiosité, sujet latent | Creuser le déclencheur, ne rien supposer |
| **Simulateur** (helpdesk/télésec) | **Intention forte**, budget en tête | Repartir de sa simulation : « vous avez saisi combien de postes ? » |
| **Message vocal** | Il a rappelé un inconnu → **douleur active** | Aller vite en qualif, le RDV se pose presque seul |
| **LinkedIn / recommandation** | Vérification de crédibilité | Références, conformité, mode de fonctionnement |

💡 **Tip** — Sur un retour de **simulateur**, ouvre le CRM pendant l'appel : reprendre ses
propres chiffres (« vous avez simulé 3 positions sur 400 postes ») crée un effet de suivi
que personne ne fait.

### `inbound.qualif` — Qualification express (6 questions max)

**Tronc commun (toutes niches)**

> - Vous êtes **combien** à traiter ça aujourd'hui, et c'est **interne ou sous-traité** ?
> - Qu'est-ce qui **casse** en premier quand ça déborde — le délai, la qualité, ou les nerfs
>   de l'équipe ?
> - C'est un sujet pour **quand** : maintenant, ou vous préparez la rentrée / le prochain
>   exercice ?
> - Sur une décision comme celle-là, **qui d'autre est autour de la table** ?

**Puis la question de nature — la plus importante :**

> Dernière chose : vous cherchez ça **pour vous**, ou **pour un de vos clients** ?

| Réponse | Régime | Conséquence immédiate |
|---|---|---|
| « pour nous » | **Direct** | 1er mois à **−50 %**, mise en service offerte, pas de dépôt (`PRICING.md §7`) |
| « pour un client à nous » | **Marque blanche** (priorité GTM) | **Pas de remise.** Dépôt d'activation 900 €/position (plafond 2 700 €, imputable) + 3 contreparties : sortie 30 j les 3 premiers mois, exclusivité 12 mois, appui avant-vente 48 h (`PRICING.md §3.a/§3.b`) |

⛔ **Danger** — Ne jamais annoncer « 1er mois à −50 % » avant d'avoir posé cette question.
En marque blanche, l'offre n'existe plus (`PRICING.md §7`).

**Compléments par niche** — reprendre les blocs `qualif` de `SCRIPTS-APPEL.md` :
`CALL_SCRIPTS.support-n1.qualif` (tickets/sem, FRT réel, outil, composition équipe) ·
`CALL_SCRIPTS.helpdesk-n1.qualif` (postes, tickets/mois, SLA contractuel, ITIL, outil) ·
`CALL_SCRIPTS.telemed.qualif` (appels/jour, taux de manqués, logiciel, qui décroche).

### `inbound.pitch` — Reformuler avant de pitcher

> Si je résume : **{reformulation en une phrase de SON problème, avec SES chiffres}**.
> C'est bien ça ?
>
> *(attendre le « oui »)*
>
> Alors voilà ce qu'on fait exactement pour ce cas-là : **{pitch de la niche —
> `CALL_SCRIPTS.{niche}.pitch`}**.

💡 **Tip** — Le « oui » sur la reformulation vaut plus que trois arguments. Ne pitche
**jamais** avant de l'avoir obtenu, même en inbound — surtout en inbound : il a une idée
précise de ce qu'il veut, et elle n'est pas toujours celle que tu imagines.

**Les 3 points à toujours dire, quelle que soit la niche :**

1. **Français langue maternelle**, équipe à Antananarivo, **fuseau compatible France** (UTC+3 :
   notre journée couvre vos horaires, et déborde naturellement sur votre soirée).
2. **Process documentés** : script, **double écoute**, reporting KPI hebdomadaire — c'est le
   cadrage qualité qui tient le service, pas la bonne volonté.
3. **~40 % sous le coût complet** d'un poste interne ou d'un prestataire hexagonal
   (benchmark : télésec 33-42 k€/an · support IT N1 38-50 k€/an, `PRICING.md §3/§5`).

⛔ **Interdit** (`CLAUDE.md`) : aucun argument fondé sur le parcours de la direction
(« a piloté des équipes de 1 000+ », « direction expérimentée »). Ni vérifiable, ni vendeur.

### `inbound.prix` — Que dire au téléphone (règle des 3 paliers, `PRICING.md §0/§9`)

| Cas | Ce qu'on dit au téléphone |
|---|---|
| **Médical direct** | Grille **publique** : « forfaits **350 / 590 / 950 €** selon le volume, mise en service **490 € offerte**, **1er mois à −50 %** ». Recadrage : « 350 €, c'est **16 € par jour ouvré** — 2 à 3 RDV récupérés paient le forfait. » |
| **Support N1 / Helpdesk IT direct** | **Fourchette uniquement** + « devis ferme sous 24 h après cadrage ». Pas de tarif ETP exact au téléphone. |
| **Toute marque blanche** | **Aucun chiffre.** « La grille de gros se remet **au cadrage, sous NDA** — c'est votre input de marge, ça ne s'échange pas au téléphone. » Puis enchaîner sur le dépôt imputable et les 3 contreparties. |

> 🔒 **Garde-fou** : un prix MB lâché au téléphone circule chez ses concurrents dans la
> semaine. **Aucune exception**, même sous pression, même « juste un ordre de grandeur ».

### `inbound.closing` — Poser le RDV

> On fait comme ça : je vous envoie **aujourd'hui** {le mémo 2 pages / le one-pager + 2
> références anonymisées / le dossier conformité}, et on bloque **30 minutes en visio** pour
> cadrer le périmètre chiffré.
>
> **Mardi 11h ou mercredi 15h ?**

💡 **Tip** — Toujours **deux créneaux fermés**, jamais « quand êtes-vous dispo ». Et envoie
l'invitation calendrier **pendant** l'appel, à voix haute : « je vous l'envoie là,
maintenant — vous l'avez ? » Le RDV posé et confirmé en direct ne se no-show quasiment pas.

**Si le décideur n'est pas au bout du fil** (voir `OBJECTIONS_SUPPORT` #5) : viser
directement la visio à 3 plutôt que la transmission d'un document.

---

### Arbre d'objections — `OBJECTIONS_INBOUND`

#### C1 — « Attendez, vous, vous faites du démarchage ? C'est interdit maintenant. »

**Réponse** — **Deux choses.** Un : la réforme du 11 août vise les appels **aux
particuliers** — nous n'en faisons pas, et nous n'en ferons pas. Deux, plus important pour
vous : **nos équipes ne font que de la réception** — support, helpdesk, appels patients.
**Zéro émission commerciale.** Donc si votre question de fond c'est « est-ce que ce que vous
me vendez est exposé à la réforme », la réponse est **non, pas du tout**.

- Si « OK, et sur mes données ? » → enchaîne sur C2.
- Si le sujet l'intéresse → « c'est même plutôt l'inverse : le volume se déplace vers
  l'entrant, c'est exactement ce qu'on opère. »

> 💡 Objection **fréquente depuis le 11/08/2026**. Bien traitée, elle est un **accélérateur**
> de confiance : elle prouve qu'on maîtrise le cadre de notre propre métier.

#### C2 — « Et mes données / celles de mes clients, elles partent à Madagascar ? »

**Réponse** — **Question centrale, et on l'a cadrée.** Trois points : **(1)** société
française, contrat français, **juridiction française** ; **(2)** **données hébergées en UE**,
Salverys intervient comme **sous-traitant au sens de l'article 28** — **DPA signé**, pas de
stockage local sur les postes agents ; **(3)** côté médical, **par défaut zéro enregistrement**
des appels patients (`CONFORMITE-HDS-RGPD.md §2`). Je vous envoie le dossier conformité, vous
le faites lire à qui vous voulez.

- Si DSI/RSSI dans la boucle → propose la visio à 3, **c'est un signal d'achat**.
- Si secteur médical → **ne jamais improviser** sur l'hébergement HDS ou l'enregistrement en
  option → **escalade direction**.

#### C3 — « Je voulais juste savoir combien ça coûte. »

**Réponse** — **Je vous le dis, et honnêtement.** Mais si je vous donne un chiffre sans savoir
si c'est **1 position ou 4**, en **débordement ou en plateau dédié**, je vous donne un chiffre
faux — et vous allez comparer une pomme et une poire. **Trois questions, deux minutes**, et je
vous donne une fourchette dont vous pouvez vous servir. Ça marche ?

- Si OK → 3 questions de `inbound.qualif` → fourchette selon `inbound.prix`.
- Si « non, juste un ordre de grandeur » → donne la **borne publique** de la niche (médical :
  350-950 € ; IT direct : fourchette du simulateur) et **rien de plus si c'est de la MB**,
  puis reviens au cadrage.

#### C4 — « Je réponds surtout pour que vous arrêtiez de m'écrire. »

**Réponse** — **Reçu, et merci de me le dire directement.** Je vous sors de la séquence
**aujourd'hui**, vous n'aurez plus rien de notre part. **Une seule question avant que je
raccroche, et vous répondez par oui ou non** : le sujet du débordement N1, il est mort chez
vous, ou juste pas maintenant ?

- « pas maintenant » → **demande la permission** : « je vous recontacte en {mois} ? » → si
  oui, **note la date au CRM avec l'accord**. C'est la meilleure relance qui existe.
- « mort » → **désinscription immédiate** Emelia + CRM `NE PAS CONTACTER`. On remercie, on
  raccroche. **Pas de dernière tentative.**

> 🔒 Le retrait doit être **effectif le jour même**, tous canaux. C'est une obligation
> (droit d'opposition, §0.3) **et** la seule manière de garder une réputation d'expéditeur
> propre sur Emelia.

#### C5 — « Vous êtes à Madagascar… on a déjà essayé l'offshore, ça s'est mal passé. »

→ Voir `OBJECTIONS_SUPPORT` #2 dans `SCRIPTS-APPEL.md`. En inbound, ajouter :

**Réponse** — **Et pourtant vous m'avez rappelé** — donc le sujet est réel de votre côté.
Dites-moi précisément **ce qui a raté la dernière fois**, je vous dis en face si on sait
l'éviter ou pas. Si on ne sait pas, je vous le dirai.

- Le prospect qui raconte son échec précédent **se qualifie tout seul**. Écoute, note, ne
  coupe pas.

#### C6 — « Envoyez-moi une proposition et je vous rappelle. »

**Réponse** — **Je l'envoie aujourd'hui.** Mais l'expérience dit qu'une proposition sans
cadrage part à la corbeille : je vais chiffrer un périmètre que je devine. **Donnez-moi
30 minutes en visio**, je repars avec le vrai périmètre, et la proposition que vous recevez
est **signable en l'état**. **Mardi 11h ou mercredi 15h ?**

- Si toujours « envoyez d'abord » → envoie **le one-pager, pas le devis**, et pose un rappel
  daté à voix haute : « je vous rappelle vendredi 11h, notez-le de votre côté. »

---

## 3. Traçabilité CRM — champs obligatoires (conformité + pilotage)

À renseigner **à chaque appel**, entrant ou sortant :

| Champ | Valeurs | Pourquoi |
|---|---|---|
| `origine_donnee` | LinkedIn · site · annuaire pro · salon · inbound | Preuve de licéité du fichier (§0.3) |
| `numero_appele` | le numéro + sa **source publique** | Défense de la zone grise ligne mixte (§0.4) |
| `qualite_interlocuteur` | personne morale · pro sur ligne pro | Défense en cas de requalification |
| `objet_appel` | libellé lié à l'activité | Base légale = intérêt légitime (§0.3) |
| `issue` | barrage · ICP joint · RDV posé · refus | Pilotage |
| `opposition` | **oui/non + date** | Obligation absolue — bloque appels **et** emails |
| `creneau_accorde` | date/heure + par qui | Transforme le rappel en rendez-vous attendu |

> ⚠️ `opposition = oui` doit **automatiquement** couper la séquence Emelia. Si ce n'est pas
> câblé aujourd'hui, c'est le **premier chantier CRM** à ouvrir.

---

## 4. Rappel des garde-fous (`CLAUDE.md`)

- **Marque** : « Salverys » uniquement. Jamais Nesvalo / Vinlo.
- **Médical** : on dit **forfait**, jamais « abonnement ».
- **Aucun claim** sur le parcours de la direction (« 1 000 collaborateurs », etc.).
- **Zéro enregistrement** des appels patients par défaut (`CONFORMITE-HDS-RGPD.md §2`) ;
  l'option existe mais **ne s'improvise pas** → escalade direction.
- **Tarifs marque blanche** : jamais en clair, jamais au téléphone, jamais en email.
- **Priorité niches** : 1) Support N1 SaaS & Helpdesk IT · 2) médical · 3) relation client
  (futur non déterminé). **MB-first** sur les trois.

---

## 5. Sources (consultées le 2026-08-12)

- [Article L223-1 du code de la consommation, version en vigueur au 11/08/2026 — Légifrance](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051830285/2026-08-11)
- [Chapitre III « Consentement au démarchage téléphonique », art. L223-1 à L223-7 — Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032221441/2026-08-11)
- [Interdiction du démarchage téléphonique sans consentement préalable du consommateur — CMS Francis Lefebvre](https://cms.law/fr/fra/news-information/interdiction-prochaine-du-demarchage-telephonique-sans-consentement-prealable-du-consommateur)
- [Démarchage téléphonique B2B & cas hybrides (micro-entrepreneurs, professions libérales) — Cabinet Lacour](https://www.lacour-avocat.fr/%F0%9F%93%9E-demarchage-telephonique-b2b-cas-hybrides-securiser-vos-appels-aux-entreprises-micro-entrepreneurs-et-professions-liberales/)
- [Prospection téléphonique BtoB en 2026 : RGPD, fichier professionnel et sanctions — Kohen Avocats](https://kohenavocats.fr/2026/05/06/prospection-telephonique-btob-2026-rgpd-fichier-professionnel-sanctions/)
- [Prospection commerciale par téléphone (hors automate d'appel) : quelles règles ? — CNIL](https://www.cnil.fr/fr/prospection-commerciale-par-telephone-hors-automate-dappel-quelles-sont-les-regles)
- [Professionnels : comment respecter la réglementation sur le démarchage téléphonique — economie.gouv.fr](https://www.economie.gouv.fr/entreprises/developper-son-entreprise/innover-et-numeriser-son-entreprise/professionnels-comment-respecter-la-reglementation-sur-le-demarchage)
- [Le démarchage téléphonique désormais interdit si vous n'y avez pas consenti — DGCCRF](https://www.economie.gouv.fr/dgccrf/actualites-dgccrf/le-demarchage-telephonique-desormais-interdit-si-vous-ny-avez-pas-consenti)
- [Les nouvelles règles issues de la loi du 30 juin 2025 — Village de la Justice](https://www.village-justice.com/articles/demarchage-telephonique-les-nouvelles-regles-issues-loi-juin-2025,54618.html)
- [Démarchage téléphonique, fin de Bloctel : ce qui change le 11 août — Blog du Modérateur](https://www.blogdumoderateur.com/demarchage-telephonique-fin-bloctel-11-aout/)

> ⚠️ Cette synthèse est un **cadrage opérationnel**, pas un avis juridique. Avant toute
> montée en volume d'appels sortants (ou si un prospect conteste formellement), faire
> valider le dispositif par un avocat.
