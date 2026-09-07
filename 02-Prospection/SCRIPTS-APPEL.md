# SCRIPTS-APPEL.md — Scripts d'appel à froid Salverys

> **Source lisible et éditable** des scripts de cold calling Salverys.
> Miroir de l'objet `CALL_SCRIPTS` du CRM (`CRM_Salverys.html`, ~l. 2636-2832).
> Les séquences `OUTREACH-SEQUENCE.md` référencent ces scripts par leur clé
> (`CALL_SCRIPTS.telemed.opening`, `CALL_SCRIPTS.helpdesk-n1.qualif`, etc.) —
> les ancres ci-dessous reprennent exactement cette nomenclature.
>
> ⚠️ **Synchronisation** : ce fichier et le CRM doivent rester alignés. Toute
> modification de fond ici doit être répercutée dans `CRM_Salverys.html` (et
> inversement).
>
> **Sources de vérité** : prix/SLA/durées = `PRICING.md` · conformité médicale =
> `CONFORMITE-HDS-RGPD.md` · garde-fous marque/discours = `CLAUDE.md`.
>
> **Placeholders** : `{prenom}` = prénom de l'interlocuteur · `{structure}` =
> nom du cabinet / de l'éditeur / de la DSI.

---

## Les 5 étapes de l'appel (`CALL_STEPS`)

| # | id | Étape | Objectif |
|---|----|-------|----------|
| 1 | `opening` | 👋 Ouverture | Les 15 premières secondes |
| 2 | `qualif` | 🔍 Qualification | Vérifier le besoin réel |
| 3 | `pitch` | 🎯 Pitch valeur | Présenter Salverys en 30 sec |
| 4 | `objection` | 🛡️ Objections | Arbre de réponses |
| 5 | `closing` | 🤝 Closing | Obtenir un engagement |

---

# 1. Télésecrétariat médical — `CALL_SCRIPTS.telemed`

> Niche **priorité n°2** (depuis 2026-06-22 ; l'IT est passé n°1). Côté médical, on parle
> toujours de **forfait** (jamais « abonnement »).

### `CALL_SCRIPTS.telemed.opening` — Ouverture

**Script**

> Bonjour, **{prenom}** ? Je m'appelle Valérien, je suis directeur chez Salverys, on travaille avec des cabinets médicaux comme le vôtre sur la gestion des appels patients.
>
> **Vous avez 2 minutes ?** Je vous appelle parce qu'on aide les cabinets à ne plus rater d'appels pendant les consultations — je voulais vous demander : ça vous parle, ou c'est déjà résolu chez vous ?

💡 **Tip** — Ne dis JAMAIS « je sais que vous êtes occupé ». Affirme la valeur en 1 phrase, puis demande la permission de continuer.

⛔ **Danger** — Ne pitche pas. La 1re phrase doit être courte et ouvrir une question.

### `CALL_SCRIPTS.telemed.qualif` — Qualification

**Script**

> Concrètement chez {structure} :
>
> - Combien d'appels patients par jour environ ?
> - Sur ces appels, combien finissent en répondeur ou sans réponse pendant les consultations ?
> - Vous utilisez Doctolib, Maiia, Médistory… ?
> - La secrétaire qui gère les appels aujourd'hui, c'est en interne, en libéral, ou personne ?

💡 **Tip** — Pose UNE question à la fois. Note les réponses. Reformule avant de continuer : « Si je comprends bien, vous perdez environ X appels par jour, c'est ça ? »

### `CALL_SCRIPTS.telemed.pitch` — Pitch valeur

**Script**

> Ce qu'on propose c'est simple : **une télésecrétaire médicale francophone dédiée à {structure}**, formée à votre logiciel, qui prend vos appels de 8h à 20h, sans congés, sans arrêt maladie.
>
> La différence avec une secrétaire classique : on est à Madagascar, donc le tarif est environ 40 % inférieur à un prestataire en France — sans perte de qualité, le français est langue maternelle ici.
>
> Forfait à partir de 350€/mois, **1er mois à -50 %** pour qu'on prouve la valeur avant que vous vous engagiez. Et une fois en régime, on s'engage sur le décroché : sous 90 % d'appels pris sur un mois, vous avez 20 % d'avoir le mois suivant.

💡 **Tip** — Termine TOUJOURS par une question fermée : « Est-ce que cet ordre de grandeur vous semble cohérent par rapport à ce que vous payez aujourd'hui ? »

### `CALL_SCRIPTS.telemed.objection` — Objections

→ Voir l'**arbre d'objections télémed** ci-dessous (`OBJECTIONS_TELEMED`).

### `CALL_SCRIPTS.telemed.closing` — Closing

**Script**

> Très bien {prenom}. Je vous propose qu'on fasse les choses dans l'ordre :
>
> **Étape 1** — je vous envoie aujourd'hui un mémo de 2 pages : ce qu'on fait exactement, prix, conditions, contrat type.
>
> **Étape 2** — on se reparle **jeudi à 14h ou vendredi à 11h** pour décider de lancer l'offre 1er mois à -50 %. Lequel des deux vous arrange ?

💡 **Tip** — Donne TOUJOURS deux options fermées de RDV. Jamais « quand êtes-vous dispo ? » → c'est une porte de sortie.

### Arbre d'objections — `OBJECTIONS_TELEMED`

#### Objection 1 — « On a déjà une secrétaire physique au cabinet. »

**Réponse** — **Parfait, ce n'est pas l'un ou l'autre.** La plupart de nos cabinets gardent leur secrétaire physique et nous délèguent uniquement les pics d'appels et les heures creuses où elle est en consultation avec vous. Combien d'appels votre secrétaire ne peut pas prendre aujourd'hui pendant les rendez-vous ?

- Si « presque aucun » → « OK très bien. Et le midi entre 12h et 14h ? » — creuse pour trouver un trou.
- Si « pas mal en fait » → « C'est exactement notre cas d'usage. On prend le relais uniquement sur ces moments-là, avec un forfait mensuel calé sur votre volume. »

#### Objection 2 — « Vous êtes à Madagascar, l'accent ça va poser problème aux patients âgés. »

**Réponse** — **C'est la question qu'on entend le plus.** Le français est ma langue maternelle, comme pour toutes nos télésecrétaires. **Je vous propose le 1er mois à -50 %** : vos patients appellent, et vous jugez en direct — écoute en double ligne quand vous voulez, ou un appel test de 5 min avec la télésecrétaire avant même de démarrer. Par défaut on n'enregistre pas les appels patients (conformité RGPD), donc tout se vérifie en temps réel. Si un seul patient se plaint de l'accent, on arrête, sans engagement.

- Si « OK pour tester » → Passe au closing → fixe RDV pour démarrer le pilote.
- Si « même comme ça non » → « Je comprends. Acceptez juste un appel téléphonique avec une de nos secrétaires pour vous faire votre opinion. 5 minutes. »

> 🔒 **Garde-fou conformité** (`CONFORMITE-HDS-RGPD.md §2`) : **par défaut, zéro
> enregistrement des appels patients**. La preuve qualité se fait en **double écoute /
> double ligne** ou par **appel test** — ne pas proposer « vous écoutez les
> enregistrements ». Ne pas non plus promettre « jamais d'enregistrement possible » :
> c'est une **option sur demande**, portée par la stack / le HDS du client (jamais sur le
> poste de l'agent), **à ne pas improviser** → escalade direction.

#### Objection 3 — « C'est trop cher pour un cabinet de notre taille. »

**Réponse** — **Vous payez aujourd'hui combien pour gérer vos appels — y compris le coût des rendez-vous manqués ?** Un patient qui ne peut pas vous joindre, en moyenne, c'est 30€ de consultation perdue. Si on évite 15 appels manqués par mois, on est déjà à 450€. Notre forfait commence à 350€.

- Si silence ou « je n'ai jamais calculé » → « Je vous propose de regarder ça ensemble. Sur le mois pilote à -50 %, on chiffre exactement. »
- Si « pas tant de manqués que ça » → « Alors le plus petit forfait suffit largement — et le 1er mois à -50 % vous le confirme sans engagement. »

#### Objection 4 — « Envoyez-moi un email, je regarderai. »

**Réponse** — **Bien sûr je l'envoie aujourd'hui.** Pour qu'il vous soit utile : je vous le fais sur-mesure pour votre cas, mais j'ai besoin de 5 minutes maintenant pour comprendre votre volume. Sinon je vais vous envoyer un truc générique que vous allez supprimer en 30 secondes. **5 minutes là, ça marche ?**

- Si OK → Repasse en qualif rapide → 3 questions max → puis closing.
- Si toujours « envoyez quand même » → « OK je vous envoie. Je vous rappelle vendredi à 11h pour en discuter ? » — bloque le RDV maintenant.

#### Objection 5 — « Ce n'est pas moi qui décide, c'est mon associé. »

**Réponse** — **Très bien, c'est important qu'il soit dans la boucle.** Du coup je vous propose qu'on fixe directement une visio à 3 — vous, lui et moi — 20 minutes maximum. Plutôt jeudi ou vendredi cette semaine ?

- Si OK → Pose immédiatement les 2 créneaux.
- Si « je vais lui en parler d'abord » → « OK je vous laisse mes coordonnées. Je vous relance lundi à 10h, ça vous va ? »

---

# 2. Support N1 SaaS — `CALL_SCRIPTS.support-n1`

> Support applicatif N1 pour éditeurs SaaS français.

### `CALL_SCRIPTS.support-n1.opening` — Ouverture

**Script**

> Bonjour {prenom}, Valérien de Salverys. Je m'occupe d'équipes support N1 pour des éditeurs SaaS français — on est basés à Madagascar mais l'équipe est francophone native.
>
> **Vous avez 2 minutes ?** Je vous appelle parce que je vois que {structure} grandit côté produit — et c'est en général là que la file d'attente sur le N1 explose. C'est encore gérable chez vous, ou ça commence à tirer ?

💡 **Tip** — Pour les SaaS, mentionne la croissance produit comme déclencheur de pain. C'est un signal qui résonne avec les Heads of CS.

### `CALL_SCRIPTS.support-n1.qualif` — Qualification

**Script**

> Pour me caler sur votre réalité :
>
> - Combien de tickets N1 par semaine en ce moment ?
> - Quel est votre First Response Time moyen — réaliste, pas l'objectif SLA ?
> - Vous êtes sur Zendesk, Freshdesk, Intercom ?
> - L'équipe N1, c'est en CDI interne, freelances, autre prestataire ?
> - Quelle est la prochaine étape qui vous bloque — plus de tickets, plus de langues, horaires étendus ?

💡 **Tip** — Note le KPI exact (FRT, CSAT) — tu t'en serviras pour chiffrer le ROI au pitch.

### `CALL_SCRIPTS.support-n1.pitch` — Pitch valeur

**Script**

> Ce qu'on fait : **une équipe N1 dédiée à {structure}**, sur vos outils (Zendesk/Freshdesk/Intercom), formée à votre produit en 2 semaines, KPI documentés chaque semaine — FRT, CSAT, taux de résolution.
>
> Le levier économique : ~**40 % de coût en moins qu'un CDI en France**, sans charges RH côté Salverys, démarrage en 2 semaines.
>
> On commence par un **1er mois à -50 %** — vous comparez nos KPI aux vôtres avant de signer. Et on engage le service : si le SLA de première réponse convenu n'est pas tenu sur un mois, 20 % d'avoir le mois suivant.
>
> Ça correspond au type de scaling que vous cherchez ?

💡 **Tip** — Toujours chiffrer le pilote : « 1er mois à -50 %, périmètre 200-400 tickets, demi-tarif. »

### `CALL_SCRIPTS.support-n1.objection` — Objections

→ Voir l'**arbre d'objections support** ci-dessous (`OBJECTIONS_SUPPORT`).

### `CALL_SCRIPTS.support-n1.closing` — Closing

**Script**

> OK {prenom}. Mon process habituel :
>
> **1.** Je vous envoie un one-pager + 2 références anonymisées.
> **2.** On bloque **mardi 11h ou mercredi 15h** une visio de 30 min avec un de vos lead techs pour qu'ils valident l'approche.
> **3.** Si OK on lance le pilote (1er mois à -50 %) lundi suivant.
>
> Mardi 11h ou mercredi 15h ?

💡 **Tip** — Implique le lead tech dans le 2e RDV — ça raccourcit le cycle de validation interne.

### Arbre d'objections — `OBJECTIONS_SUPPORT`

#### Objection 1 — « On préfère garder le N1 en interne, c'est stratégique. »

**Réponse** — **Je l'entends souvent et c'est juste : 50 % du temps c'est la bonne réponse.** Notre proposition : on prend uniquement le débordement et les horaires étendus — vous gardez les tickets stratégiques et la culture produit en interne. Vous avez combien de tickets aujourd'hui qui dorment > 24h ?

- Si « beaucoup » → « C'est exactement la zone qu'on couvre — pas votre cœur, juste le surplus. »
- Si « très peu » → « OK, vous êtes peut-être pas mûrs encore. Je vous recontacte dans 6 mois quand le volume aura grossi. »

#### Objection 2 — « L'offshore, on a essayé, ça s'est mal passé. »

**Réponse** — **C'est le réflexe normal — la plupart des SaaS qu'on signe ont eu une mauvaise expérience avant.** 3 différences chez nous : **(1)** français langue maternelle, pas LV1 ; **(2)** KPI hebdomadaires partagés en transparence — vous voyez tout ; **(3)** 1er mois à -50 %, pas d'engagement. Qu'est-ce qui s'était mal passé exactement la dernière fois ?

- Si « qualité de langue » → « Faites le test : on vous met en relation avec un de nos agents demain, vous évaluez. »
- Si « tickets jamais résolus » → « Notre KPI clé c'est le taux de résolution N1 — on l'engage par contrat, avec 20 % d'avoir si le seuil convenu n'est pas tenu. »

#### Objection 3 — « On utilise [outil obscur] comme support, pas Zendesk. »

**Réponse** — **Pas un problème.** Nos agents sont formés à 4-5 outils en moyenne et apprennent un nouvel outil en moins d'une semaine. C'est plus une question de votre **process** que de l'outil. Vous pouvez me décrire un ticket type — de la création à la résolution ?

- Process simple → « OK on est dans notre zone, on s'adapte sans souci. »
- Process complexe / outil très spécifique → « Très bien, on planifie 2 semaines de formation au lieu d'1 dans le contrat. »

#### Objection 4 — « Je n'ai pas le budget en ce moment. »

**Réponse** — **OK, mais le budget n'est pas la vraie question.** Si je vous montre que sur 6 mois vous économisez 30 % par rapport à votre solution actuelle, vous trouvez le budget ou pas ? Sinon ça veut dire qu'on n'est pas le bon prestataire à ce stade.

- Si « oui si ROI prouvé » → « Parfait. Le 1er mois est à -50 %, vous mesurez vous-même. »
- Si « non c'est gelé » → « OK, je vous recontacte au prochain trimestre fiscal. C'est quand ? »

#### Objection 5 — « Il faut que j'en parle à mon CTO / Head of Eng. »

**Réponse** — **Excellent, c'est lui le décideur opérationnel.** Je vous propose qu'on bloque une visio à 3 directement — 30 minutes, je présente, il challenge. C'est beaucoup plus efficace que vous transmettiez un document. **Mardi prochain 14h ?**

- Si OK → Bloque le créneau, envoie l'invite calendrier dans la foulée.
- Si « je préfère lui transmettre » → « OK, je vous envoie un one-pager spécial CTO — focus archi/sécurité. »

---

# 3. Helpdesk IT N1 — `CALL_SCRIPTS.helpdesk-n1`

> Helpdesk IT N1 distant pour DSI et ESN françaises.

### `CALL_SCRIPTS.helpdesk-n1.opening` — Ouverture

**Script**

> Bonjour {prenom}, Valérien de Salverys. On opère des plateaux helpdesk IT N1 distants pour des DSI et ESN françaises depuis Madagascar.
>
> **Vous avez 3 minutes ?** Je vous appelle parce que sur une structure comme {structure}, le N1 c'est en général le poste où on a le plus de mal à tenir les SLA tout en gardant les coûts sous contrôle. Vous êtes plutôt où sur ce sujet aujourd'hui ?

💡 **Tip** — Les DSI parlent SLA, ticket volume, et CSAT. Adopte leur vocabulaire dès la 1re phrase.

### `CALL_SCRIPTS.helpdesk-n1.qualif` — Qualification

**Script**

> Pour bien comprendre votre setup :
>
> - Combien de postes utilisateurs à supporter ?
> - Combien de tickets N1 par mois ?
> - Quel est votre SLA contractuel sur la prise en charge N1 ?
> - Vous êtes sur ServiceNow, JIRA Service Desk, ManageEngine, GLPI ?
> - Le N1 est fait en interne, infogéré, ou mix ?
> - Vous avez un référentiel ITIL en place ?

💡 **Tip** — Le SLA et le volume sont les 2 chiffres clés pour dimensionner ton offre. Note-les noir sur blanc.

### `CALL_SCRIPTS.helpdesk-n1.pitch` — Pitch valeur

**Script**

> On opère du **helpdesk IT N1 distant 100% francophone** :
>
> - Profils **ITIL**, formés à vos outils (ServiceNow, JIRA Service Desk, ManageEngine)
> - **SLA documenté et signé** dans le contrat — non tenu sur un mois, 20 % d'avoir
> - Contrats dès 3 mois, puis 12 mois renouvelable, dimensionnement progressif
> - **~40 % de coût en moins** qu'un prestataire hexagonal — sans perte de qualité de service
> - Plateaux dédiés ou mutualisés selon vos besoins
>
> On peut démarrer petit, par exemple 1 ETP sur 3 mois, et monter en charge si le ROI est là.
>
> Ça rentre dans vos critères budgétaires actuels ?

💡 **Tip** — Pour les DSI grandes structures, mentionne **contrat dès 3 mois puis 12 mois** tôt — ça les rassure sur la sécurité du prestataire.

### `CALL_SCRIPTS.helpdesk-n1.objection` — Objections

→ Voir l'**arbre d'objections helpdesk** ci-dessous (`OBJECTIONS_HELPDESK`).

### `CALL_SCRIPTS.helpdesk-n1.closing` — Closing

**Script**

> Parfait {prenom}. Voici comment je vous propose qu'on avance :
>
> **1.** Je vous envoie demain un dossier complet : références, modèle de SLA, grille tarifaire.
> **2.** On fait un **atelier de cadrage de 1h** avec votre responsable support — **jeudi prochain ou mardi de la semaine d'après**.
> **3.** Si on s'aligne, je vous remets une proposition chiffrée sous 5 jours.
>
> Jeudi prochain ou mardi 10 ?

💡 **Tip** — Pour les contrats long-terme, propose un atelier d'1h plutôt qu'un appel — c'est plus engageant et ça signale le sérieux.

### Arbre d'objections — `OBJECTIONS_HELPDESK`

#### Objection 1 — « On a déjà un contrat avec [ESN concurrente]. »

**Réponse** — **Très bien, et ça se passe comment ?** Je vous pose 2 questions : **(1)** Êtes-vous au-dessus ou en-dessous du SLA contractuel ? **(2)** Quand le contrat se termine ? Si tout va bien, je vous recontacte 3 mois avant l'échéance. Si ça pèche, on peut être complémentaires.

- Tout va bien → Note la date de fin de contrat → calendrier J-90.
- Ça coince → « OK, on peut prendre un débordement sans casser votre contrat actuel. On en parle ? »

#### Objection 2 — « Madagascar c'est trop loin pour la confiance, on préfère un prestataire FR. »

**Réponse** — **Légitime.** 3 points concrets : **(1)** société française, contrat français, juridiction française ; **(2)** données hébergées en UE, conformité RGPD documentée ; **(3)** votre interlocuteur direct est en France. Madagascar c'est uniquement la production. Vous voulez qu'on regarde la doc juridique ensemble ?

- Si « OK pour voir la doc » → Envoie le dossier conformité, fixe un rappel J+3.
- Si « c'est une question de principe » → « Je comprends. Je vous laisse mes coordonnées, on se reparle quand vous êtes prêts. »

#### Objection 3 — « On a besoin de profils certifiés ITIL. »

**Réponse** — **Tous nos chefs de plateau sont certifiés ITIL Foundation minimum, et nous avons des profils Intermediate sur les plateaux clés.** On peut vous garantir contractuellement le ratio de certifiés par plateau. Combien d'ETP certifiés ITIL vous avez besoin sur votre périmètre ?

- Volume défini → Note → reviens dans le pitch avec le dimensionnement précis.
- Pas défini → « OK, on fait un atelier d'1h pour cadrer ensemble. »

#### Objection 4 — « C'est un appel d'offres public, vous ne pouvez pas y répondre seul. »

**Réponse** — **Exact, et c'est pour ça qu'on travaille en sous-traitance avec des ESN établies sur les marchés publics.** On peut soit candidater avec votre prestataire historique, soit vous mettre en relation avec une ESN partenaire qui porte le marché. Quel est votre besoin sur l'AO ?

- Ils ont déjà un porteur → « Parfait, présentez-nous au porteur, on le rassure sur la capacité. »
- Pas de porteur → « On vous met en relation avec une de nos ESN partenaires sous 48h. »

#### Objection 5 — « Le N1 doit être 24/7, vous ne pourrez pas couvrir la nuit. »

**Réponse** — **Si, et c'est même un de nos points forts.** Madagascar est UTC+3, donc notre journée couvre votre soirée naturellement. Pour la nuit profonde (2h-6h Paris), on a une équipe rotative dédiée. Vous avez quel volume de tickets sur la nuit ?

- Faible volume nuit → « On peut faire une astreinte mutualisée, beaucoup moins cher. »
- Fort volume nuit → « Plateau dédié 24/7 — on cadre dans l'atelier. »

---

# 4. Appel de déplacement — « il a déjà un prestataire »

> Ajouté le **2026-08-28**. Transversal aux trois niches. Applique à l'IT la doctrine que
> `TELESEC-TARGETS.md` posait déjà pour le médical : *« si la réponse est oui, l'angle est
> la qualité et la redondance, pas la découverte »*.
>
> **Ce n'est pas un cas de repli, c'est le meilleur cas.** Le make-or-buy est tranché, le
> budget existe, la peur de l'offshore est passée. Et même si la vente ne se fait pas,
> l'appel vaut d'être passé : c'est la seule source d'intelligence de première main qu'on
> ait sur nos concurrents et sur le prix réel du marché.

## Ce qu'on cherche à obtenir, dans l'ordre

1. **Qui** opère aujourd'hui, **depuis quand**, **combien d'ETP**.
2. **Ce qui marche** — à ne surtout pas dénigrer : c'est le socle de ce qu'il faudra égaler.
3. **Ce qui ne marche pas** — la vraie matière.
4. **L'échéance ou le préavis du contrat.** ← le seul déclencheur réel. Sans elle, on ne
   sait pas si on prépare un closing à 2 mois ou à 14.
5. **Le prix d'achat**, si l'échange le permet. Sinon, la fourchette.

À reporter dans Airtable, champ **`Prestataire actuel & échéance`**.

## `CALL_SCRIPTS.deplacement.opening` — Ouverture

> « Bonjour {{prenom}}, Valérien Rakotosalama, Salverys. J'appelle des {{ESN / éditeurs}}
> comme {{societe}} qui font tourner un N1 externalisé. Avant de vous proposer quoi que ce
> soit — **est-ce que le vôtre est déjà confié à quelqu'un, ou tenu en interne ?** »

**Pourquoi ça marche :** on annonce d'emblée qu'on ne va pas dérouler un pitch. La question
est facile à répondre, elle ne l'engage à rien, et sa réponse oriente tout le reste.

## `CALL_SCRIPTS.deplacement.qualif` — Les cinq questions

> 1. « Vous travaillez avec eux depuis combien de temps, et sur combien de positions ? »
> 2. « **Qu'est-ce qui marche bien** chez eux ? » ← *poser celle-ci en premier, toujours*
> 3. « Et s'il y avait une chose à corriger demain matin, ce serait quoi ? »
> 4. « Le contrat court jusqu'à quand ? Il y a un préavis ? »
> 5. « Sur ce type de prestation, vous êtes plutôt sur quelle base tarifaire ? »

**La question 2 avant la 3, sans exception.** Demander d'abord ce qui marche fait deux
choses : ça désamorce le réflexe de défense (personne n'aime s'entendre dire qu'il a mal
choisi), et ça donne le **standard à égaler**. Un dirigeant qui vient d'expliquer ce qu'il
apprécie enchaîne presque toujours de lui-même sur ce qui le gêne.

**Sur la question 5 :** s'il ne veut pas donner de chiffre, ne pas insister —
proposer une fourchette à confirmer ou infirmer. Le refus est lui-même une information.

## `CALL_SCRIPTS.deplacement.pitch` — Le positionnement

**Ne jamais attaquer le prestataire en place.** On attaque un **risque**, jamais une
personne, et on se positionne d'abord en second, pas en remplaçant :

> « Je ne vais pas vous dire de les quitter — vous avez un truc qui tourne. Ce que je vois
> souvent, c'est que sur ce type de prestation, tout repose sur **un seul plateau et un seul
> pays**. S'ils tombent, ou si la qualité glisse sur un trimestre, vous n'avez pas de
> plan B — et c'est vous que vos clients appellent, pas eux. »

Trois angles, à choisir selon ce qui est ressorti de la qualification :

| Ce qu'il a dit | L'angle |
|---|---|
| Qualité / turnover / accent | **Français langue maternelle + double écoute + reporting.** On mesure ce qu'ils ne mesurent pas |
| Réactivité, créneaux non couverts | **UTC+3 : le 7h-9h France est une heure de bureau chez nous**, sans prime de nuit |
| Prix | ⚠️ **Ne pas s'aligner par le bas.** Le prix est le point d'entrée, pas l'argument. Voir §Piège ci-dessous |
| Rien de précis, tout va bien | **Second source / redondance** sur un périmètre restreint. On ne remplace rien, on sécurise |

## `CALL_SCRIPTS.deplacement.closing` — La sortie

**Le closing d'un appel de déplacement n'est pas un rendez-vous de vente**, c'est une porte
laissée ouverte sur une date :

> « Écoutez, vous êtes servis, c'est très bien. Je vous propose deux choses : je vous laisse
> mes coordonnées pour le jour où ça coince — et si votre contrat arrive à échéance
> en {{mois}}, je vous rappelle deux mois avant pour que vous ayez une comparaison sous la
> main. Ça vous va ? »

Puis, dans Airtable : `Prochaine action` = « rappel pré-échéance », **datée deux mois avant
la fin de contrat**. C'est le rappel le plus rentable du pipeline — on arrive au moment
exact où la question se pose vraiment.

**Si une douleur nette est sortie**, ne pas attendre l'échéance :

> « Sur {{la douleur citée}}, on peut faire un test sur un périmètre restreint — les
> débordements, ou un créneau qu'ils ne couvrent pas — sans rien changer à votre contrat
> actuel. Vous comparez sur pièces. »

C'est le **second source** : le prospect n'a rien à résilier, donc rien à risquer. C'est
la porte d'entrée la plus large sur un compte déjà servi.

## Le piège à éviter — l'ancrage prix

Un prospect qui achète déjà en offshore **connaît le prix du marché**. L'argument
« jusqu'à -50 % vs un poste interne en France » (`CLAUDE.md`) **ne fonctionne pas sur lui** :
sa référence n'est pas un salaire français, c'est la facture de son prestataire actuel.

Conséquences directes :
- **Ne jamais utiliser le comparatif France sur ce profil** — il sonne à côté de la plaque
  et signale qu'on n'a pas écouté.
- **Ne pas casser le prix pour prendre la place.** Le plancher reste le plancher
  (`PRICING.md` §3) ; le corridor offshore constaté sur le médical est de 0,50-1 €/appel
  (`TELESEC-TARGETS.md`), et s'y aligner détruirait la marge sans garantir le deal.
- Le cas **Callmed** est l'exemple type : vend dès 0,50 €/appel, donc un partenariat n'est
  viable que sur **les créneaux que son plateau ne couvre pas**. Qualifier son prix d'achat
  cible **dès le premier échange**, sinon on entre dans un tunnel de négociation perdant.

## Le cas du prospect satisfait — on n'insiste pas, on apprend

Il a un sous-traitant, ça marche, il ne veut pas changer. **Ce n'est pas un échec d'appel :
c'est l'interlocuteur le mieux informé de tout le marché.** Il sait exactement pourquoi son
montage tient — donc ce qu'il faudra tenir pour gagner les autres.

**Basculer immédiatement de la vente vers l'entretien, et le dire :**

> « D'accord — et honnêtement, tant mieux pour vous, c'est un montage que beaucoup ratent.
> Je ne vais pas essayer de vous faire changer. **En revanche, si vous avez cinq minutes,
> ça m'intéresse de comprendre ce qui fait que ça marche chez vous** — je monte une étude
> sur la façon dont les ESN françaises organisent leur N1, et je vous en enverrai la
> synthèse. »

Puis les quatre questions du protocole (`BAROMETRE-EXTERNALISATION-N1.md` §4), en terminant
par celle qui rapporte le plus :

> « Si vous deviez en changer un jour, ce serait pour quelle raison ? »

**Ce qu'on obtient :** le standard de qualité et de prix à égaler, le déclencheur qui le
ferait bouger, et une porte ouverte à l'échéance de son contrat.

**Ce qu'on ne fait pas :** repitcher. Un prospect qui vient d'expliquer que tout va bien et
qu'on relance quand même perd toute envie de répondre à la synthèse — et le milieu des
dirigeants d'ESN français est petit. La sortie est un rappel daté, pas une insistance :

> « Vous m'avez dit que le contrat courait jusqu'à {{mois}}. Je vous rappelle deux mois
> avant, histoire que vous ayez une comparaison sous la main. Ça vous va ? »

## Le cas de la filiale propre (captive)

S'il opère son propre plateau à Tunis, Casablanca ou Maurice, **on ne le déplace pas** :
nous choisir signifierait licencier ses propres salariés, souvent devant celui qui a monté
la filiale. Deux angles restent ouverts, et l'appel garde toute sa valeur :

- **Le débordement et les créneaux non couverts** — sa filiale a des horaires et un
  plafond de capacité comme tout le monde.
- **La découverte pure.** Personne ne connaît mieux le coût réel d'un plateau offshore que
  quelqu'un qui en fait tourner un. Ce qu'il dira du recrutement, du turnover et du coût
  par position vaut, pour nous, plus qu'un rendez-vous.

---

## Garde-fous (rappel `CLAUDE.md`)

- **Marque** : « Salverys » uniquement. Jamais Nesvalo / Vinlo.
- **Médical** : on dit **forfait**, jamais « abonnement ».
- **Aucun claim** « direction issue d'une structure de 1 000 collaborateurs ».
- **Conformité médicale** (`CONFORMITE-HDS-RGPD.md §2`) : **par défaut, zéro
  enregistrement des appels patients** — la preuve qualité se fait en double écoute /
  appel test. L'enregistrement existe en **option sur demande** (stack/HDS du client).
- **Tarifs MB** (marque blanche) : **jamais en clair côté public**. Les forfaits
  cités ici (350/590/950) sont les prix **médical standard publics** (`PRICING.md`).

## Chiffres & promesses — alignés `PRICING.md`

| Élément | Valeur | Réf. |
|---------|--------|------|
| Forfaits médical | **350 / 590 / 950 €** | `PRICING.md` §1 |
| SLA décroché médical | **≥ 90 %** sur le mois | `PRICING.md` §7 |
| Remède si seuil non tenu | **20 % d'avoir** (mois suivant, max 1 mois/12) | `PRICING.md` §7 |
| Offre de lancement — **en direct uniquement** | **1er mois à -50 %** (sans engagement) | `PRICING.md` §7 |
| Pilote support / helpdesk **en direct** | **200-400 tickets**, 1er mois à -50 % | `PRICING.md` §3 |
| **Pilote en marque blanche** | **200-400 tickets, PAS de remise** — périmètre restreint au tarif du palier | `PRICING.md` §3.b |
| **Dépôt d'activation MB** | **900 €/position**, plafond 2 700 €, imputé sur les 3 premières factures | `PRICING.md` §3.a |
| **Contreparties MB** (à la place de la remise) | sortie **30 j** les 3 premiers mois · exclusivité **12 mois** · appui avant-vente **48 h** | `PRICING.md` §3.b |
| **Palier MB 5+ ETP** | **volume ferme facturé** : 5 positions dues, consommées ou non | `PRICING.md` §3 |
| Durée contrats IT | **dès 3 mois, puis 12 mois** renouvelable | `PRICING.md` §3 |
| Avantage coût | **~40 %** sous un prestataire FR | `CLAUDE.md` |
