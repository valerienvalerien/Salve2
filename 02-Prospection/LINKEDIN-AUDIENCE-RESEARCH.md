# LinkedIn — Étude d'audience (Audience Research Engine)

> **Objet :** disséquer les décideurs français qui sous-traitent — ESN, éditeurs SaaS, MSP,
> télésecrétariats médicaux cherchant une capacité en marque blanche — ainsi que les
> dirigeants de PME/TPE qui veulent réduire le coût de leur support. Puis en déduire des
> thèmes de contenu et des angles de post qui captent l'attention **naturellement**.
>
> **Date :** 2026-08-05 · **Pendant opérationnel :** `LINKEDIN-GROWTH-BLUEPRINT.md`
> (système, cadence, KPI, modèles de posts).
> **Alignement :** GTM **marque-blanche-first** (`CLAUDE.md`), **IT priorité n°1**, médical n°2.
> **Source de vérité prix :** `PRICING.md` — rappel : **aucun tarif de marque blanche ne
> peut apparaître sur LinkedIn** (§0/§9, la MB n'est jamais publique).
> **Base de départ :** `IDEAL-CUSTOMER-PROFILE.md` (qualification commerciale). Ce document
> ne le remplace pas : il ajoute la couche **psychologique et éditoriale** qui manque pour
> écrire du contenu.

---

## 0. Ce qui change quand on passe du cold email à LinkedIn

Quatre différences structurelles, qui commandent tout le reste :

1. **On ne parle pas à un prospect, on parle devant lui.** Le cold email s'adresse à une
   personne identifiée avec un déclencheur (`OUTREACH-IT-N1-marque-blanche.md`). Un post
   s'adresse à toute la niche à la fois, y compris à ses concurrents, ses clients et ses
   salariés. Toute phrase doit rester tenable dans ce triple regard.
2. **L'acheteur MB est discret par nature.** Un directeur delivery d'ESN ne va pas liker
   publiquement un post sur la sous-traitance offshore : ça informerait ses clients et ses
   équipes. **Le like n'est pas le signal — la vue de profil et la lecture silencieuse le
   sont.** On écrit pour un lecteur qui ne se manifestera qu'en DM, et souvent 6 semaines
   plus tard. C'est le point le plus contre-intuitif de tout ce document.
3. **La preuve remplace la promesse.** Sans logos clients (interdits en MB : ce sont eux qui
   nous interdisent d'exister publiquement), la seule matière crédible est **l'économie du
   métier** (coûts, délais, ratios) et **le mode opératoire** (QA, PCA, RGPD, SLA).
4. **On vend un sujet honteux.** Personne n'affiche « je sous-traite mon support à
   Madagascar ». Le contenu doit **déstigmatiser sans agresser**, et surtout donner au
   lecteur un vocabulaire présentable en interne : « capacité élastique », « soupape »,
   « couverture 7h-9h », « continuité de service ». On lui écrit ses arguments internes.

---

## 1. Cartographie des 4 personas

| # | Persona | Segment GTM | Priorité | Ce qu'il achète vraiment |
|---|---|---|---|---|
| **P1** | Head of Support / Directeur CX — éditeur SaaS FR (30-200 pers.) | MB (n°1.a) | **1** | Du temps de respiration sur la file de tickets |
| **P2** | DG / Directeur des Opérations — ESN ou MSP (50-300 pers.) | MB (n°1.b) | **1** | La capacité de dire oui au prochain contrat |
| **P3** | Fondateur — télésecrétariat médical FR (< 50 pers.) | MB (n°1.c) | 2 | Les créneaux qu'il perd de l'argent à staffer |
| **P4** | Dirigeant PME/TPE (10-100 pers.) | Direct | 3 | La fin d'une charge mentale + une ligne de coût qui baisse |

> P1 et P2 portent **~70 % de l'effort éditorial** (IT = priorité n°1, et un seul contrat
> place 2-5 ETP). P3 prend ~20 %, P4 ~10 % — P4 sert surtout de **carburant de reach** :
> c'est le segment qui like, commente et partage en public, donc celui qui donne de la
> portée aux posts que P1 et P2 lisent en silence.

---

## 2. P1 — Head of Support / Directeur CX chez un éditeur SaaS français

**Identité :** 32-45 ans, souvent promu depuis le terrain (ex-agent support ou ex-CSM).
Équipe de 3 à 15 personnes. Rattaché au COO ou au VP Customer. Titre variable : Head of
Support, Responsable Support Client, Customer Care Manager, Directeur des Opérations Client.

### Sa semaine, vue de l'intérieur
Lundi : le backlog du week-end. Un point produit où on lui annonce une release qui va
générer des tickets. Un board où on lui redemande le CSAT et le temps de première réponse.
Un recrutement N1 ouvert depuis 11 semaines. Un agent qui démissionne. Et un client
« stratégique » qui a écrit au CEO parce qu'il a attendu 4 jours.

### Frustrations profondes (par ordre d'intensité)
1. **On lui demande un SLA sans lui donner les effectifs.** Il est jugé sur un chiffre
   (première réponse, CSAT) dont il ne contrôle pas l'intrant principal : le nombre de bras.
2. **Le support est vu comme un centre de coût** — jamais comme le lieu où le churn se joue.
   Il n'arrive pas à faire entendre que 3 jours de délai = renouvellements perdus.
3. **Le N1 répétitif dévore son équipe senior.** Ses meilleurs éléments passent 60 % de leur
   temps sur des réinitialisations de mot de passe et des « comment j'exporte mon fichier ».
4. **Le recrutement N1 est un tonneau des Danaïdes** : 2-3 mois pour recruter, 9-14 mois de
   durée de vie moyenne du poste, et il faut reformer à chaque fois.
5. **La saisonnalité le tue** : la release, la période de facturation annuelle, la rentrée.
   Il ne peut pas embaucher pour un pic de 6 semaines.

### Peurs (ce qu'il ne dira jamais en réunion)
- Qu'un incident majeur arrive **pendant** un trou de staffing, et que ce soit tracé.
- Que l'externalisation qu'il aura défendue **dégrade le CSAT** et que ce soit son nom sur
  la décision. **C'est sa peur n°1 : la peur de signature, pas la peur du prix.**
- Que son équipe interprète l'externalisation comme le début d'un plan de remplacement — et
  que deux bons éléments partent en réaction.
- Qu'on lui vende un « offshore low-cost » et qu'il hérite d'agents à l'accent marqué, qui
  tournent tous les 6 mois, avec de la reformation permanente à sa charge.

### Objectifs déclarés / réels
| Ce qu'il dit | Ce qu'il veut vraiment |
|---|---|
| « Tenir nos SLA » | Arrêter de commencer chaque lundi avec un backlog |
| « Améliorer le CSAT » | Ne plus être celui qu'on convoque quand un client râle |
| « Structurer le support » | Passer de pompier à responsable — avoir du temps pour la base de connaissance |
| « Maîtriser les coûts » | Obtenir de la capacité **sans passer par un arbitrage budgétaire de 4 mois** |

### Motivations d'achat (dans l'ordre où elles se déclenchent)
1. **Un pic connu qui arrive** (release, rentrée, migration) — l'urgence datée.
2. **Un départ non remplacé** — il perd 25 % de sa capacité du jour au lendemain.
3. **Un objectif de SLA contractualisé** par le commerce sans qu'on lui demande son avis.
4. **La perspective de récupérer ses seniors** pour le N2 et la documentation.

### Objections — et la vraie phrase derrière
| Objection dite | Ce qu'elle veut dire | Ce qui la désamorce |
|---|---|---|
| « Nos clients sont exigeants, l'offshore ne passera pas » | *Je ne veux pas porter ce risque tout seul* | Périmètre restreint + KPI partagés dès J1 + réversibilité 30 j |
| « Notre produit est trop complexe pour du N1 externe » | *Personne n'a jamais documenté nos process* | Le vrai sujet : la base de connaissance. En parler comme d'un chantier, pas d'un prérequis |
| « On n'a pas le budget cette année » | *Je n'ai pas de ligne, mais j'ai un poste ouvert non pourvu* | Recadrer : ce n'est pas un budget nouveau, c'est un **poste déjà budgété** non pourvu |
| « J'ai déjà été échaudé par un prestataire » | *Le dernier m'a mis 8 agents tournants* | Zéro turnover visé + rémunération ~4,5× le marché local + backup nommé |
| « Il faudrait que j'en parle à mon COO » | *Je n'ai pas les arguments écrits* | Lui donner un contenu qu'il peut **transférer tel quel** en interne |

### Résultat désiré (à lui décrire textuellement)
> « Dans 90 jours, la file du matin est vide à 10h, mes deux seniors sont sur le N2 et la
> KB, et je n'ai plus à expliquer un délai de première réponse en comité. »

### Vocabulaire exact (à réutiliser dans les posts)
Ticket, file, backlog, première réponse, FCR, CSAT, AHT, escalade, N1/N2, macro, KB,
runbook, débordement, Zendesk / Freshdesk / Intercom / HubSpot Service, on-call, release.

### Où il consomme du contenu
LinkedIn en scroll passif (matin tôt, entre deux réunions), quelques communautés Slack CX
FR, les newsletters produit. **Il lit, il ne commente presque pas** — commenter un post sur
l'externalisation du support, c'est signaler à son équipe qu'il y pense.

---

## 3. P2 — DG / Directeur des Opérations d'ESN ou de MSP

**Identité :** 38-55 ans, souvent fondateur ou associé. Structure de 50 à 300 personnes.
Culture commerciale et delivery, pas marketing. Titre : DG, Directeur des Opérations,
Directeur Delivery, Responsable Service Desk. **Ne jamais viser la direction commerciale ni
les RH** (`IDEAL-CUSTOMER-PROFILE.md §1.b`) : les RH voient un concurrent au recrutement.

### Sa réalité
Il vend des jours-hommes et des contrats de service. Sa contrainte n'est pas la demande,
c'est la **capacité** : il doit prouver qu'il peut staffer **avant** de signer. Sa marge est
mangée par le temps mort (agents payés hors des heures productives) et par le recrutement.
Il répond à des appels d'offres où on lui demande une couverture 7h-19h, une astreinte, un
PCA — trois choses coûteuses à tenir avec des CDI français.

### Frustrations profondes
1. **Le 7h-9h.** Personne ne veut travailler à 7h, et payer des primes pour ce créneau détruit
   la rentabilité du contrat. Pourtant c'est là que les incidents bloquants surviennent (le
   collaborateur qui ne se connecte pas à 8h05).
2. **Le recrutement N1 : 60 à 90 jours** sur un marché tendu, pour un poste que les candidats
   voient comme un tremplin. Il forme pour perdre.
3. **Il refuse du volume.** Un nouveau client, un débordement, une astreinte : dire non, c'est
   offrir le contrat au concurrent. Dire oui sans capacité, c'est dégrader le service existant.
4. **La saisonnalité et les congés** : août et fin décembre sont des trous structurels, où le
   service doit pourtant tourner.
5. **Les appels d'offres exigent des pièces** (PCA, RGPD, dispositif QA, SLA écrit) qu'il
   reconstruit à chaque fois, dans l'urgence.

### Peurs
- **Que son client final découvre la sous-traitance.** Peur existentielle : c'est sa
  crédibilité et parfois une clause contractuelle. Tout contenu qui « expose » ses futurs
  partenaires le fait fuir définitivement.
- Une dégradation de la qualité qui lui coûte un contrat pluriannuel — le calcul est
  asymétrique : l'économie est mensuelle, la perte est annuelle.
- Dépendre d'un prestataire trop petit qui s'écroule (« et s'ils ferment ? »).
- Le risque pays : coupure électrique, réseau, instabilité. **Objection systématique, jamais
  formulée en premier.**

### Objectifs déclarés / réels
| Ce qu'il dit | Ce qu'il veut vraiment |
|---|---|
| « Développer notre offre managée » | Signer sans avoir à avancer la masse salariale |
| « Améliorer notre taux de marge sur le service desk » | Sortir le temps mort de son P&L |
| « Sécuriser la couverture » | Ne plus dépendre de deux personnes qui peuvent tomber malades |
| « Répondre à plus d'appels d'offres » | Avoir les pièces (PCA/QA/SLA) prêtes en 48 h |

### Motivations d'achat
1. **Un appel d'offres en cours** avec une exigence d'amplitude ou d'astreinte qu'il ne sait
   pas tenir — déclencheur le plus chaud qui existe.
2. **Un gros contrat signé** dont le delivery démarre dans 6 semaines (recruter est
   impossible dans ce délai).
3. **Des postes helpdesk ouverts depuis des mois** (signal public, cf. LinkedIn Jobs).
4. **Un incident de couverture récent** qui a été remonté par un client.

### Objections — et la vraie phrase derrière
| Objection dite | Ce qu'elle veut dire | Ce qui la désamorce |
|---|---|---|
| « Mes clients n'accepteraient pas de l'offshore » | *Je ne veux pas avoir cette conversation avec eux* | Marque blanche totale : il n'a **pas** cette conversation. Son client voit sa marque |
| « J'ai déjà un prestataire » | *Convainc-moi que tu ne veux pas le remplacer* | Se positionner en **soupape** (overflow, 7h-9h, pics), pas en remplaçant |
| « Vous êtes trop petits » | *Qui absorbe le choc si tu tombes ?* | Backup +1 par compte, PCA écrit (double connexion, groupe électrogène), sortie 30 j |
| « Et Madagascar, c'est stable ? » | *Je pense coupures et cyclones* | Répondre **avant** qu'il le demande : PCA, hub de repli, redondance — en contenu public |
| « Vous me faites un geste sur le prix ? » | *Test de professionnalisme* | Non — et l'expliquer : une remise sur son prix de gros ne lui fait gagner **aucun client** (`PRICING.md §3.b`) |

### Résultat désiré
> « Je réponds oui au prochain appel d'offres avec une amplitude 7h-19h et une astreinte,
> sans ouvrir trois postes ni avancer 12 000 € de masse salariale par mois. »

### Vocabulaire exact
Service desk, N1/N2/N3, ITIL, ticket, incident, demande de service, SLA de prise en charge,
GTI/GTR, astreinte, ITSM (ServiceNow, Jira Service Management, GLPI, Freshservice),
infogérance, TMA, MCO, jour-homme, taux d'occupation, appel d'offres, PCA/PRA.

### Où il consomme du contenu
LinkedIn quotidiennement, pour le business development autant que pour la veille. Presse
spécialisée (ChannelNews, LeMagIT, Distributique). **Il commente plus volontiers que P1**,
surtout sur les sujets « métier ESN » (recrutement, marges, appels d'offres) — pas sur
l'offshore.

---

## 4. P3 — Fondateur de télésecrétariat médical français

**Identité :** 35-55 ans, structure de 5 à 50 personnes, souvent créée il y a 5-15 ans.
Décide seul. Connaît son métier au téléphone près, mais gère mal la croissance.

### Frustrations profondes
1. **Les créneaux non rentables** : soir, samedi, ponts, vacances scolaires. Il doit les
   couvrir contractuellement, il ne peut pas les rentabiliser avec des CDI français.
2. **Le recrutement de télésecrétaires** : métier peu attractif, turnover élevé, formation
   au secret médical et aux logiciels (Doctolib, Maiia, Médistory) à refaire sans cesse.
3. **Il refuse des cabinets** faute de capacité — croissance bridée par le staffing.
4. **La guerre des prix** avec les acteurs low-cost, qui tire le marché vers le bas.
5. **Le pic de rentrée et les épidémies** : volumes multipliés sur des semaines précises.

### Peurs
- Perdre un cabinet historique à cause d'un décroché dégradé (le bouche-à-oreille médical
  est impitoyable et local).
- Le secret médical / RGPD : héberger ou faire transiter des données de santé hors cadre.
  **Objection frontale, à traiter en contenu.**
- Que ses clients apprennent qu'il sous-traite (même peur que P2, en plus intime : ses
  clients sont des médecins avec qui il a une relation personnelle).

### Motivations d'achat
1. **Un pic annoncé** (rentrée de septembre, épidémie hivernale).
2. **Un nouveau cabinet à embarquer** qu'il ne peut pas staffer.
3. **Un créneau qu'il perd de l'argent à tenir** (le samedi matin, le 18h-20h).
4. Un arrêt maladie / une démission qui met un planning par terre.

### Objection majeure (spécifique)
> « J'ai déjà des devis offshore à 0,50 € l'appel. »

⚠️ Point de vigilance déjà tracé (`IDEAL-CUSTOMER-PROFILE.md §1.c`, cas Callmed) : ce
prospect n'est **pas** qualifié tant qu'on n'a pas identifié un **créneau premium** qu'il ne
couvre pas. Le contenu doit donc **pré-qualifier** : parler du coût réel d'un décroché raté
et de la valeur d'un agent stable, pas du prix à l'appel — pour attirer ceux qui achètent de
la qualité et repousser ceux qui achètent du tarif.

### Résultat désiré
> « Je dis oui au prochain cabinet la semaine où il appelle, et mon samedi matin arrête de
> me coûter de l'argent. »

### Vocabulaire exact
Décroché, taux de décroché, permanence téléphonique, débordement, prise de RDV, secret
médical, plage de garde, agenda, Doctolib / Maiia / Médistory / Cegedim, urgence relative,
consigne cabinet, patientèle.

---

## 5. P4 — Dirigeant de PME/TPE qui veut réduire le coût de son support

**Identité :** 35-60 ans, 10 à 100 salariés. Le support/standard n'est pas son métier : c'est
une charge qu'il subit. Décide vite, paie au forfait, déteste les process lourds.

### Frustrations profondes
1. **Le téléphone qui sonne dans le vide** — et les affaires perdues qu'il ne mesure même pas.
2. **Une personne clé qui « fait aussi le standard »** et qui est interrompue toute la journée.
3. **Impossible de recruter à mi-temps** pour un besoin de 3 h/jour réparties sur 10 h.
4. **Les congés et arrêts maladie** : une absence = le service à l'arrêt.
5. **Il paie un temps plein pour un besoin partiel.**

### Peurs
- Que l'externalisation donne une impression « plateau d'appels » à ses clients.
- Un engagement long avec un prestataire médiocre.
- La complexité : il n'a ni DSI, ni service achats, ni temps pour un projet de 3 mois.

### Motivation d'achat
Une **ligne de coût qui baisse tout de suite** et une **charge mentale qui disparaît**. Il
achète une tranquillité, pas une transformation.

### Résultat désiré
> « Le téléphone est décroché à chaque fois, sous mon nom, et je n'y pense plus. »

### Rôle éditorial de P4
C'est **le seul persona qui réagit publiquement**. Il like, commente, tague son associé. Le
contenu « dirigeant » (coût caché d'un poste, arithmétique simple, franc-parler) génère la
portée qui expose ensuite les posts techniques à P1 et P2. **On ne l'écrit pas pour vendre —
on l'écrit pour être vu.** Sur cette cible, les prix médicaux publics sont utilisables
(`PRICING.md §1` : 350/590/950 €), contrairement à toute la MB.

---

## 6. Le dénominateur commun (le socle narratif de la marque)

Les quatre personas vivent la **même** équation, formulée différemment :

> **La capacité doit exister avant le revenu qui la finance — et le seul moyen connu de
> créer de la capacité (recruter) prend 60 à 90 jours, coûte un temps plein, et se paie
> même quand la charge est nulle.**

Tout le contenu Salverys découle de cette phrase. C'est **le problème**, et il est
suffisamment structurel pour tenir 12 mois de publication sans se répéter.

Corollaires exploitables à l'infini :
- Le coût réel d'un ETP n'est pas son salaire (`PRICING.md §3` : 33-42 k€/an télésec,
  38-50 k€/an support IT N1 en coût complet).
- Un poste ouvert non pourvu est **déjà** une ligne budgétaire — donc l'objection budget est
  presque toujours fausse.
- Le temps mort (créneaux creux) est payé plein tarif en interne.
- La qualité offshore n'est pas une question de pays mais de **rémunération et de rotation**.
- Un service sans backup n'est pas un service, c'est un pari.

---

## 7. Les vides de contenu (content gaps) — l'opportunité éditoriale

Ce que **personne ne publie** sur LinkedIn FR autour de ce sujet, et qui est à nous :

| # | Vide constaté | Pourquoi il est vide | Ce que Salverys y met |
|---|---|---|---|
| **G1** | **L'économie chiffrée du support** (coût complet, coût par ticket, coût du temps mort) | Les prestataires veulent vendre, pas éduquer ; les cabinets de conseil facturent cette info | Publier les calculs, ouvertement, avec les hypothèses |
| **G2** | **Le mode d'emploi de la sous-traitance réussie** (comment cadrer, quoi exiger, quels KPI) | Écrire le mode d'emploi, c'est armer l'acheteur contre soi | Le publier quand même : c'est ce qui distingue un opérateur d'un revendeur |
| **G3** | **Les coulisses réelles d'un centre offshore** (salaires, QA, double écoute, PCA) | Le secteur cache ses conditions, car elles sont souvent indéfendables | Assumer : ~4,5× le marché local, freelances, zéro turnover visé |
| **G4** | **Les cas où il ne faut PAS externaliser** | Personne ne se disqualifie volontairement | Le faire — c'est le contenu qui crée le plus de confiance par unité de risque |
| **G5** | **Le build in public d'un opérateur de services** (arbitrages, prix, refus de clients) | Le build in public FR est monopolisé par la tech/SaaS, quasi absent du BPO | Raconter les décisions réelles (pourquoi on ne remise pas, pourquoi un dépôt d'activation) |
| **G6** | **Le vocabulaire pour vendre l'externalisation en interne** | Les prestataires parlent à l'acheteur, jamais à ses contraintes politiques | Fournir des formulations transférables telles quelles à un COO |

> **G4 et G6 sont les plus sous-exploités du marché.** G4 achète la crédibilité, G6 achète la
> gratitude — et déclenche des DM.

---

## 8. Les 6 tensions narratives (matrice génératrice d'angles)

Une tension = une opposition que le lecteur ressent déjà. Chaque tension produit des dizaines
d'angles sans jamais paraître répétitive.

| # | Tension | Formulation courte | Personas |
|---|---|---|---|
| **T1** | Capacité vs recrutement | « Vous n'avez pas un problème de budget, vous avez un problème de délai » | P1 P2 P3 |
| **T2** | Coût affiché vs coût complet | « Le salaire, c'est la moitié de la facture » | tous |
| **T3** | Prix bas vs stabilité | « À 0,50 € l'appel, vous payez la reformation tous les 6 mois » | P2 P3 |
| **T4** | Externaliser vs contrôler | « On ne perd pas le contrôle en externalisant, on le perd en n'exigeant pas de KPI » | P1 P2 |
| **T5** | Discrétion vs transparence | « Votre client n'a pas à savoir. Vous, si. » | P2 P3 |
| **T6** | Urgence vs structure | « Le support est le seul service qu'on ne dimensionne qu'après l'incident » | P1 P4 |

---

## 9. Thèmes de contenu → 60 angles de post

Codes : **Objectif** = `R` portée/notoriété · `C` confiance/preuve · `D` demande (DM, RDV).
Les piliers (P1…P5) sont définis dans `LINKEDIN-GROWTH-BLUEPRINT.md §4`.

### Thème A — L'économie du support (pilier 1 · gap G1 · tensions T1/T2)

| # | Angle | Cible | Obj. |
|---|---|---|---|
| A1 | Le coût complet d'un technicien N1 en France, ligne par ligne (salaire, charges, congés, formation, supervision, matériel, turnover) | P1 P2 | C |
| A2 | Pourquoi un poste ouvert depuis 3 mois coûte plus cher qu'un poste pourvu | P1 P2 | R |
| A3 | Le prix du temps mort : ce que vous payez entre 14h et 16h | P2 P3 | C |
| A4 | Combien coûte réellement un ticket N1 chez vous (méthode de calcul en 4 lignes) | P1 | D |
| A5 | « On n'a pas le budget » : la phrase qui cache un poste déjà budgété | P1 P2 | R |
| A6 | 60-90 jours de recrutement : ce que ça coûte en revenu non signé, pas en RH | P2 | C |
| A7 | Le coût d'un appel manqué chez un médecin (2-3 RDV récupérés = le forfait) | P3 P4 | D |
| A8 | Pourquoi le coût par ticket baisse quand le volume monte (et où est le palier) | P1 P2 | C |
| A9 | Le vrai coût du turnover support : la reformation, pas le recrutement | P1 P3 | C |
| A10 | Trois façons de facturer du support (ETP / heure / ticket) et à qui chacune profite | P1 P2 | D |
| A11 | Ce que votre CFO ne voit pas dans la ligne « support » | P1 | R |
| A12 | Le support est le seul poste où on mesure le coût et jamais la perte évitée | tous | R |

### Thème B — Le mode d'emploi de la marque blanche (pilier 2 · gap G2/G6 · T4/T5)

| # | Angle | Cible | Obj. |
|---|---|---|---|
| B1 | Les 7 questions à poser à un sous-traitant support avant de signer | P1 P2 | D |
| B2 | Comment cadrer un périmètre restreint pour tester sans risque (200-400 tickets) | P1 P2 | D |
| B3 | Les 4 KPI à exiger dès J1 — et celui qui ne sert à rien | P1 P2 | C |
| B4 | Un engagement de service sans pénalité n'est pas un engagement | P2 | C |
| B5 | Marque blanche : ce que votre client final doit voir, et ce qu'il ne doit pas voir | P2 P3 | C |
| B6 | La réversibilité vaut mieux que la remise : comment négocier une sortie à 30 jours | P2 | D |
| B7 | RGPD et sous-traitance : le DPA, l'article 28, les transferts hors UE — en clair | P1 P3 | C |
| B8 | Données de santé : ce qu'un télésecrétariat peut et ne peut pas déléguer | P3 | C |
| B9 | Comment présenter l'externalisation à son équipe interne sans déclencher la panique | P1 | R |
| B10 | Le document que vous devriez exiger avant tout démarrage : le plan de continuité | P2 | C |
| B11 | Pourquoi les meilleurs contrats de sous-traitance commencent par un lot de tickets ridiculement petit | P1 P2 | D |
| B12 | Externaliser le N1 sans externaliser la connaissance : la règle de la KB | P1 | C |
| B13 | Ce qu'un partenaire doit vous fournir pour vos propres appels d'offres (PCA, QA, SLA, CV anonymisés) | P2 | D |
| B14 | Combien de temps avant qu'un agent externe soit rentable ? (courbe de montée en charge) | P1 P2 | C |

### Thème C — Coulisses de l'opération (pilier 3 · gap G3 · T3)

| # | Angle | Cible | Obj. |
|---|---|---|---|
| C1 | Pourquoi on paie nos agents ~4,5× le marché local (et ce que ça achète) | tous | R |
| C2 | La double écoute : à quoi ressemble vraiment un contrôle qualité | P1 P2 | C |
| C3 | Notre plan de continuité, en détail : double connexion, hub de repli, groupe électrogène | P2 | C |
| C4 | Le backup +1 par compte : pourquoi un service sans doublure n'est pas un service | P2 P3 | C |
| C5 | UTC+3 : pourquoi le 7h-9h français est une heure de bureau normale chez nous | P2 | R |
| C6 | Ce qu'on documente avant le premier ticket (et pourquoi ça prend 2 semaines) | P1 | C |
| C7 | Français langue maternelle : ce que ça change concrètement sur un appel patient | P3 P4 | R |
| C8 | Le reporting hebdo qu'on envoie : ce qu'il contient, capture à l'appui | P1 P2 | C |
| C9 | Comment on recrute un agent N1 (et pourquoi on en refuse 9 sur 10) | tous | R |
| C10 | Zéro turnover visé : le pari économique derrière, chiffres à l'appui | P2 P3 | C |
| C11 | Une journée type dans notre plateau, heure par heure | tous | R |
| C12 | Ce qui se passe quand un agent est absent (et pourquoi le client ne le voit pas) | P2 P3 | C |

### Thème D — Anti-brochure : les vérités qui disqualifient (pilier 5 · gap G4 · T3/T6)

| # | Angle | Cible | Obj. |
|---|---|---|---|
| D1 | 5 situations où il ne faut **pas** externaliser son support | tous | R |
| D2 | Pourquoi on refuse les prospects qui achètent au moins-disant | P3 | R |
| D3 | Si votre support n'est pas documenté, l'externaliser ne le réparera pas | P1 | C |
| D4 | On ne fait pas de remise. Voici pourquoi (et ce qu'on donne à la place) | P2 | C |
| D5 | L'offshore low-cost fonctionne — pour ceux dont la marque n'a pas de valeur | P2 P3 | R |
| D6 | Ce qu'un prestataire ne vous dira jamais sur le taux d'occupation | P1 P2 | R |
| D7 | Externaliser pour « faire des économies » est la pire raison de le faire | tous | R |
| D8 | Les 3 promesses commerciales qui devraient vous faire raccrocher | P1 P2 | R |
| D9 | Un pilote gratuit est un mauvais signal : ce que ça dit du prestataire | P1 P2 | C |
| D10 | Pourquoi « on peut démarrer lundi » est une réponse inquiétante | P2 | R |
| D11 | Le mythe du support 24/7 : la plupart des boîtes ont besoin de 7h-19h, pas de la nuit | P2 P4 | R |
| D12 | Ce que je réponds quand on me dit « vous êtes trop petits » | P2 | C |

### Thème E — Décisions ouvertes (pilier 4 · gap G5 · T1/T6)

| # | Angle | Cible | Obj. |
|---|---|---|---|
| E1 | Les 3 arbitrages qu'impose le premier mois d'une opération de support (et ce qu'ils coûtent) | tous | R |
| E2 | Notre première décision structurante : 100 % freelances, payés très au-dessus du marché | tous | R |
| E3 | Pourquoi j'ai supprimé notre offre d'essai gratuit | P1 P2 | C |
| E4 | La décision de demander un dépôt d'activation — et les 3 objections qu'elle a créées | P2 | C |
| E5 | Ce que j'ai appris en 30 appels de découverte ce trimestre | tous | R |
| E6 | Le prospect que j'ai refusé cette semaine (et le calcul derrière) | P3 | R |
| E7 | Comment on a écrit notre grille de prix : la méthode, pas les chiffres | P1 P2 | C |
| E8 | 3 mois de prospection : ce qui a marché, ce qui n'a rien donné | tous | R |
| E9 | Pourquoi on commence par la sous-traitance avant d'aller au client final | P2 | R |
| E10 | L'erreur de ciblage qui nous a coûté 6 semaines | tous | R |
| E11 | Recruter à Antananarivo quand on paie 4,5× le marché : ce que ça change au sourcing | tous | R |
| E12 | Ce que je répondrai « oui » à la prochaine question qu'on me pose 3 fois | tous | R |

### Thème F — Médical (pilier 2 bis · priorité 2)

| # | Angle | Cible | Obj. |
|---|---|---|---|
| F1 | Le samedi matin : le créneau qui coûte le plus cher à tenir en interne | P3 | D |
| F2 | Rentrée de septembre : le pic qu'on prépare en juin, jamais en août | P3 | D |
| F3 | Un patient qui n'a pas eu de réponse ne rappelle pas — il prend un autre praticien | P3 P4 | R |
| F4 | Secret médical et externalisation : le cadre exact, sans jargon | P3 | C |
| F5 | Taux de décroché : le seul KPI qui compte vraiment en télésecrétariat | P3 | C |
| F6 | Ce que change un agent stable sur une patientèle habituée à une voix | P3 | R |
| F7 | Chaîne de cabinets : pourquoi l'accueil hétérogène entre sites coûte plus cher que le standard | P4 | D |
| F8 | Le calcul à 16 € par jour ouvré (forfait d'entrée public, `PRICING.md §1`) | P4 | D |

> **Total : 60 angles.** Au rythme de 4 posts/semaine, ce stock couvre ~15 semaines sans
> réutilisation — et chaque angle se recycle en format différent (texte → carrousel → vidéo)
> après 8 à 12 semaines.

---

## 10. Formules d'accroche qui fonctionnent sur ces personas

Ces personas sont **opérationnels et pressés**. Ils réagissent au **concret chiffré** et au
**contre-consensus**, pas au storytelling inspirant.

| Formule | Gabarit | Exemple |
|---|---|---|
| **Le chiffre nu** | « [Chiffre]. C'est [ce que c'est]. » | « 38 à 50 k€. C'est ce que coûte vraiment un technicien N1 en France. » |
| **La correction** | « Vous croyez payer X. Vous payez Y. » | « Vous croyez payer un salaire. Vous payez un salaire + 40 %. » |
| **L'aveu** | « On a fait [erreur]. Voilà ce que ça a coûté. » | « On a visé les DG pendant 6 semaines. Aucun ne décidait. » |
| **La disqualification** | « Si [situation], ne nous appelez pas. » | « Si votre support n'est pas documenté, n'externalisez pas. » |
| **La question interdite** | « Qui répond chez vous à 7h45 ? » | idem |
| **Le renversement** | « [Croyance]. C'est l'inverse. » | « Externaliser fait perdre le contrôle. C'est l'inverse : ça force les KPI. » |
| **Le calcul ouvert** | « Prenez [X], divisez par [Y]. » | « Prenez votre masse salariale support, divisez par vos tickets traités. » |

**À bannir sur cette audience :** l'accroche « J'ai une nouvelle incroyable à vous annoncer »,
le storytelling personnel sans lien métier, les emojis en début de ligne, les
« 🔥 THREAD 🔥 », et toute formulation qui donnerait à P2 le sentiment d'être exposé.

---

## 11. Signaux d'achat observables sur LinkedIn (à surveiller quotidiennement)

| Signal | Où le voir | Réaction éditoriale | Réaction commerciale |
|---|---|---|---|
| Offre d'emploi support/helpdesk N1 publiée | LinkedIn Jobs, page entreprise | Poster sur le délai de recrutement dans les 48 h | Ajouter au CRM avec `trigger_recrutement` |
| Annonce de levée de fonds / nouveau contrat | Post de l'entreprise | Angle « la croissance arrive avant la capacité » | Séquence outreach, déclencheur chaud |
| Post du décideur sur sa charge / son recrutement | Fil personnel | **Commentaire utile**, jamais de pitch | Vue de profil → DM contextuel J+3 |
| Publication d'un appel d'offres / réponse à un AO | Post ou actualité | Angle « les pièces qu'on vous demande » (PCA, QA, SLA) | DM avec l'appui avant-vente |
| Changement de poste (nouveau Head of Support / DirOps) | Notification LinkedIn | Aucun post dédié | Fenêtre de 90 jours : il veut marquer son passage |
| Avis clients « injoignable » / commentaires négatifs | Google, posts | Angle F3 (patient perdu) | Direct P4 |
| Publication sur les congés d'été / la continuité | Fil du décideur | Angle « août : le trou structurel » | Relance saisonnière |

---

## 12. Ce qu'on ne dira jamais publiquement (garde-fous)

1. **Aucun tarif de marque blanche** — rate card ETP, prix par créneau, planchers, paliers
   (`PRICING.md §0/§9`). Ce sont les intrants de marge de nos partenaires : les publier les
   grillerait et nous grillerait.
2. **Aucun nom de client ou de partenaire**, aucun logo, aucune capture reconnaissable. La MB
   implique une invisibilité contractuelle. Les cas se racontent anonymisés et
   dé-identifiés (« un éditeur SaaS d'une centaine de personnes »).
3. **Aucune donnée patient, aucun verbatim d'appel médical**, jamais, même anonymisé
   (`CONFORMITE-HDS-RGPD.md`).
4. **Aucun chiffre de résultat inventé** — tant qu'il n'y a pas de contrat signé, on publie
   la **méthode** et les **coûts de marché**, jamais des « résultats clients ».
5. **Aucune attaque nominative** d'un concurrent. On critique des pratiques, jamais des
   sociétés.
6. **Aucun argument fondé sur le parcours de la direction** (« direction expérimentée »,
   taille d'équipes dirigées, « repart de zéro avec 10 personnes ») — garde-fou `CLAUDE.md` /
   `SCRIPTS-APPEL.md`. L'objection « vous êtes trop petits » se traite par le **dispositif**
   (backup +1, PCA écrit, KPI partagés dès J1, sortie à 30 jours, SLA chiffré), pas par un CV.
7. **Aucune promesse de disponibilité qu'on ne tient pas encore** (24/7, multilingue,
   certifications non obtenues).
8. **Les prix médicaux publics sont autorisés** (350/590/950 €, `PRICING.md §1`) — c'est la
   seule grille publiable, et uniquement sur les contenus P4/P3 en direct.

---

## 13. À revoir

Ce document est une **hypothèse structurée**, bâtie sur l'ICP, les séquences outreach et les
retours de prospection à date. À réviser :
- après **30 appels de découverte** (les objections réelles priment sur celles listées ici) ;
- après **90 jours de publication** (les angles qui performent réellement doivent remonter en
  tête du §9) ;
- dès la **signature du premier partenaire MB** (les résultats mesurés remplacent les
  benchmarks de marché, et un pilier « preuve » devient possible).
