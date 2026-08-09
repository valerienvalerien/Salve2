# CLOSING J-1 — Signature 4 positions

> Prépa opérationnelle de la veille. Hypothèse de travail : **marque blanche, 4 positions,
> niche IT** (helpdesk N1 ou support N1 SaaS) — vocabulaire « positions » + GTM MB-first
> (`CLAUDE.md`). Les variantes support N1 / direct sont données en parallèle.
>
> Prix : `PRICING.md` fait foi. Contrat : `MODELE-CONTRAT-PRESTATION.md`.
> Devis : `MODELE-DEVIS.md`. Onboarding : `ONBOARDING-CLIENT.md`.

---

## 1. Le deal en chiffres — 4 positions

**4 positions ne donnent PAS le palier 5+.** Le tarif applicable est celui du **palier
3 ETP** (`PRICING.md §3`). C'est le premier chiffre à avoir en tête demain.

| | Helpdesk IT N1 (MB) | Support N1 SaaS (MB) |
|---|---|---|
| Prix/position (palier 3 ETP) | **1 750 €** | **1 500 €** |
| CA mensuel (4 positions) | **7 000 €** | **6 000 €** |
| Coût direct (4 × 700 €) | 2 800 € | 2 800 € |
| **Marge brute** | **4 200 €/mois (60 %)** | **3 200 €/mois (53 %)** |
| CA annualisé | 84 000 € | 72 000 € |
| % du point mort (10 100 €/mois) | **69 %** | 59 % |

**Dépôt d'activation** (`PRICING.md §3.a`) : 900 € × 4 = 3 600 € → **plafonné à 2 700 €**,
encaissé à la signature.

**Coût réel de l'onboarding** : socle partenaire ~400 € + 4 × 400 € = **~2 000 €**
(`AUDIT-ESPACE-CLIENT.md §9.2`). Le dépôt le couvre. C'est exactement ce pour quoi il existe.

**Trésorerie engagée avant la 1re facture** : 4 × 650 € = **2 600 €/mois de fees** pendant
5 à 7 semaines (recrutement 2-4 sem. + formation 2-3 sem.) ⇒ **~3 300 à 4 600 €** sortis
avant le premier euro encaissé, + 650 €/mois si tu recrutes le manager IT.
Le dépôt de 2 700 € couvre l'essentiel — **d'où la règle : rien ne démarre avant encaissement.**

### ⚠️ Le piège du 5e poste — ne le chasse pas demain

| Scénario | CA/mois | Coût | Marge brute |
|---|---|---|---|
| 4 positions @ 1 750 € | 7 000 € | 2 800 € | **4 200 €** |
| 5 positions @ 1 550 € (palier 5+) | 7 750 € | 3 500 € | **4 250 €** |

**+750 € de CA pour +50 € de marge**, contre un recrutement de plus, une formation de plus
et un banc de plus à porter. Le palier 5+ n'a de sens que dans **la durée** (volume ferme
facturé, extension à M+3), pas comme levier de closing demain.
**Reste à 4, et vends le passage à 5 comme une étape d'extension.**

### ⚠️ Deux erreurs de chiffre à ne pas commettre à l'oral

1. **L'imputation du dépôt.** Le contrat (art. 4) et le devis (B.4) disent
   « **300 € par position et par mois** ». À 4 positions ça donne 1 200 €/mois × 3 =
   **3 600 €**, alors que le dépôt encaissé n'est que de **2 700 €** (plafond). La règle
   correcte au-delà de 3 positions est **par tiers** : **900 €/mois sur 3 mois**
   (c'est ce que calcule `tools/deal-build.mjs`, `total / 3`). **Corrige le devis et le
   contrat avant de les imprimer** — un chiffre faux sur la ligne financière décrédibilise
   tout le reste du document.
2. **« Capacité activable en ~3 semaines »** (`ONEPAGER-PARTENAIRE-MB.md`). C'est la durée
   de la **mise en service**, pas du recrutement. Le vrai délai signature → production, à
   vivier non constitué, c'est **5 à 7 semaines** (`FINANCE-PREVISIONNEL.md §5`). Annonce
   5-7 semaines demain. Une date tenue vaut mille fois mieux qu'une date vendue.

---

## 2. Ce qui empêche une signature demain — à traiter ce soir

Cinq points bloquent une signature réelle, pas une poignée de main. Par ordre de gravité.

### 2.1 🔴 Le cocontractant, c'est VJUS — pas Salverys

`MENTIONS-LEGALES.md` : **« Ne jamais contracter ou facturer au nom de Salverys seul. »**
Salverys est un **nom commercial** ; l'entité est **VJUS** (NIF 6018198778 ·
STAT 74908 11 2023 0 06077 · RCS 102071032469).

Le gabarit de contrat dit encore `[Salverys — raison sociale]`. **À corriger avant impression :**

```
VJUS, [forme juridique], immatriculée sous les numéros NIF 6018198778,
STAT 74908 11 2023 0 06077, RCS 102071032469, dont le siège est [adresse complète],
représentée par [nom, qualité], exploitant le nom commercial « Salverys ».
```

Restent **à compléter ce soir** (marqués « à compléter » dans `MENTIONS-LEGALES.md`) :
forme juridique · adresse complète du siège · représentant légal et sa qualité · email
professionnel · téléphone. **Sans ces cinq champs, il n'y a pas de contrat signable demain.**

### 2.2 🔴 Droit applicable et règlement des litiges

Contrat art. 14 : `[à préciser — français / autre]`. `MENTIONS-LEGALES.md` a tranché :
**droit malgache**, et pour les **gros contrats marque blanche** → **arbitrage CCI, siège
à Maurice** (Convention de New York 1958).

À 84 k€/an, ton deal est un gros contrat MB : **la clause d'arbitrage CCI/Maurice s'applique.**
Écris-la ce soir (l'annexe « Clauses litiges » de `MENTIONS-LEGALES.md` la contient) et
prépare-toi à la défendre — c'est **l'objection juridique la plus probable** de demain (§6.6).

### 2.3 🔴 Le dépôt de 2 700 € doit pouvoir être encaissé

`PRICING.md §6` : outil de facturation **non tranché**. Contrat art. 5 : moyen de paiement
`[à préciser]`. Or tout le dispositif repose sur un encaissement **à J0**.

Minimum vital pour demain : **un IBAN professionnel** au nom de VJUS + une **facture
d'avance** prête à émettre dans la foulée de la signature (numérotée, TVA : prestation
B2B hors UE — cf. `MENTIONS-LEGALES.md`). Pas besoin du SaaS de facturation demain ;
besoin d'un compte qui reçoit 2 700 €.

### 2.4 🟠 Les placeholders du contrat = autant de négociations ouvertes

Chaque `[__]` non rempli devient un point discuté **pendant** l'appel, en position basse.
À figer ce soir (valeurs recommandées entre parenthèses) :

| Article | Champ | Valeur à poser |
|---|---|---|
| art. 3 | Préavis de droit commun MB | **60 jours** |
| art. 5 | Délai de paiement | **30 jours** date de facture |
| art. 5 | Moyen de paiement | virement (IBAN VJUS) |
| art. 5 | Délai de mise en demeure | 15 jours |
| art. 12 | Plafond de responsabilité | **3 derniers mois facturés** |
| art. 13 | Délai de résiliation pour manquement | 30 jours |
| art. 13 | Réversibilité | 15 jours (déjà posé) |
| Annexe B | Positions fermes / palier | **4 positions · 1 750 €** (helpdesk) |
| Annexe B | Dépôt | **2 700 €**, imputé **900 €/mois sur 3 mois** |

### 2.5 🟠 Le plan de continuité n'existe pas — et il est dû contractuellement

Art. 7 : « **Plan de continuité écrit, remis avant démarrage** ». Ce n'est **pas**
conditionné à une contrepartie : c'est dû dans tous les cas. Il est cité dans 8 documents
du dépôt et **n'existe nulle part**. Idem pour la **description client du dispositif QA**
et les **CV anonymisés** (promis sous 48 h ouvrées si tu concèdes l'appui avant-vente,
art. 10 bis). Voir §5.

### 2.6 🟠 Pas de page de deal pour ce prospect

`tools/deals/` ne contient que `exemple-msp.json` (démo, 3 positions). Génère la vraie
page ce soir — elle porte exactement les prix que tu vas dire, au nom du partenaire, avec
**sa marge calculée** :

```bash
cp tools/deals/exemple-msp.json tools/deals/<slug-partenaire>.json
# éditer : partenaire, contact, niche, douleurs, périmètre, etpRetenus: 4,
# grille (retenu sur la ligne "3 positions"), reventeConseillee, concessions[]
node tools/deal-build.mjs tools/deals/<slug-partenaire>.json
```

Le builder **refuse** de produire une proposition sous **840 €/ETP** et alerte si la marge
brute passe sous 50 %. Il affiche un code d'accès **non stocké** — à dicter au partenaire
pendant l'appel. C'est un excellent geste de closing : *« la page est en ligne, le code je
vous le donne maintenant, tout ce qu'on vient de dire y est écrit. »*

---

## 3. Prépa avant l'appel — checklist de ce soir

**Bloc juridique & financier (2 h)**
- [ ] Compléter les 5 champs manquants de `MENTIONS-LEGALES.md` (forme juridique, adresse, représentant, email pro, téléphone)
- [ ] Réécrire l'en-tête du contrat au nom de **VJUS**, Salverys en nom commercial
- [ ] Coller la clause **arbitrage CCI / siège Maurice** en art. 14
- [ ] Remplir **tous** les `[__]` du contrat (tableau §2.4)
- [ ] Corriger l'imputation du dépôt : **900 €/mois sur 3 mois**, pas 300 €/position/mois
- [ ] IBAN VJUS + gabarit de facture d'avance de 2 700 € prêt
- [ ] Imprimer / PDF : contrat + **Annexe B** + **DPA** + devis. Trois documents, une seule signature.

**Bloc commercial (1 h)**
- [ ] Générer la page de deal chiffrée (§2.6), noter le code d'accès
- [ ] Écrire les **3 douleurs du partenaire** dans ses mots à lui, telles qu'il les a dites au 1er appel (c'est l'ouverture, §6.1)
- [ ] Décider **à l'avance** laquelle des 3 contreparties tu concèdes en premier (§6.5) — et t'interdire d'en donner deux
- [ ] Poser la **date de démarrage cible** : signature demain + 5-7 semaines ⇒ **fin septembre**. Écris-la sur le devis avant l'appel.

**Bloc delivery (1 h)**
- [ ] Rédiger le **plan de continuité** (§5.1) — 2 pages, c'est faisable ce soir
- [ ] Instancier le **bloc B hebdo** de `MODELE-REPORTING-CLIENT.md` avec la niche du partenaire, et l'imprimer : c'est le seul livrable qualité que tu peux **montrer** demain

---

## 4. Prépa recrutement — le vrai point dur

### 4.1 État réel du vivier

Snapshot `VIVIER-EXPORT.md` du **2026-06-21** — **7 semaines**. Tous les profils IT sont
marqués « ⚠️ à relancer ». Pour 4 positions il faut **5 têtes** (4 + backup +1 par compte,
art. 7) **+ 1 manager IT**.

| Code | Profil | Note | Verdict pour ce deal |
|---|---|---|---|
| **VIV-0012** Iavo | Helpdesk IT N1 — le plus technique du vivier | **A** | ✅ **À verrouiller en premier.** Prétention 3,22 M Ar ≈ fee standard. Reste à clarifier le passage en vrai freelance (pas de NIF/STAT) |
| **VIV-0014** Fabrice | Support N1 SaaS — Zendesk, escalade L2/L3, macros/KB | **B** | ✅ **Dispo de suite, prétention sous la bande.** Vérifier la profondeur IT pure + le risque de re-pivot BTP |
| **VIV-0011** Eva | Helpdesk IT N1 — parcours téléconseil/support long | **B** | 🟠 Utilisable, mais **préavis 30 j** ⇒ arrive en semaine 4-5. CV pas à jour |
| **VIV-0013** Erantsoa | Support N1 SaaS — **on-niche** (éditeur SaaS FR) | **B** | 🟠 Prétention **15-25 €/h = hors modèle** (marge négative). Tester l'élasticité en forfait mensuel, sinon écarter |
| VIV-0009, VIV-0001 | Helpdesk N1 | C | ❌ Non affectables sur un compte payant (info trop mince / sur-déclaration détectée) |

**Traduction : tu as 2 profils solides pour 5 postes.** C'est le risque n°1 du deal, très
loin devant le prix.

### 4.2 Le trou manager IT

`PROCESS-QA-DOUBLE-ECOUTE.md` fait porter la double écoute au **manager de niche**.
À 4 agents, la charge S1 est de **4 × 5 = 20 double écoutes** avec restitution sous 48 h
chacune, puis **8/semaine** en régime. **Aucun candidat manager IT** au vivier
(VIV-0008 est la piste manager *médical*).

Deux options, à trancher **avant** l'appel parce qu'elles changent ce que tu promets :
- **(a)** Tu tiens la QA toi-même les 2 premiers mois → tenable à 4 agents, et tu peux le
  dire tel quel demain : *« les deux premiers mois, c'est moi qui écoute. »* C'est un
  argument, pas un aveu.
- **(b)** Tu recrutes un manager IT tout de suite → +650 €/mois avant le premier euro,
  et un recrutement de plus à réussir en 5 semaines.

**Recommandation : (a).** À 4 positions, la charge est absorbable, et la présence directe
du dirigeant sur la QA du premier compte est un vrai signal de sérieux.

### 4.3 Plan de recrutement — les 7 prochains jours

| Quand | Action |
|---|---|
| **Ce soir** | MP à **VIV-0012** et **VIV-0014** : « un contrat se signe demain, es-tu dispo pour un démarrage fin septembre à temps plein ? » — réponse attendue sous 24 h |
| **Ce soir** | Republier `OUTREACH-Post-Groupes-FB.md` sur les groupes FB, orienté **helpdesk IT N1 / support applicatif** |
| **J+1 (après le oui)** | Relancer **VIV-0011** (préavis 30 j → à lancer immédiatement) et tester l'élasticité tarifaire de **VIV-0013** en forfait mensuel |
| **J+2 à J+5** | Screening des retours FB (`Script-MP-Screening-Freelances-N1.html`) → viser **8-10 nouveaux profils** pour en retenir 3 |
| **J+5 à J+8** | Mini-tests `/20` (`MINI-TEST-Qualification.md` + `MINI-TEST-Scripts-Reponses.md`) — ne retenir que **A ou B** |
| **J+10** | 5 contrats de prestation + NDA + DPA freelance signés (gabarits VIV-0010 réutilisables) |

**Garde-fou absolu** (`ONBOARDING-CLIENT.md`) : **aucun contrat freelance signé avant
l'encaissement du dépôt.** Les relances de ce soir sont des **pré-engagements**, pas des
promesses d'embauche — et dis-le aux candidats en ces termes.

**Verrou à ne pas oublier** : clause de **plages réservées + backfill** dans les contrats
freelances (`FINANCE-PREVISIONNEL.md §1`, angle mort « disponibilité garantie ≠ freelance
pur »). C'est ce qui rend l'engagement SLA de l'art. 6 tenable.

---

## 5. Prépa procédures qualité — ce qui manque, ce qui se montre

### 5.1 À écrire — Plan de continuité (PCA) · **bloquant, dû avant démarrage**

Contractuellement dû (art. 7), cité partout, inexistant. 2 pages suffisent :

1. **Connectivité** — double connexion par agent (fibre + 4G), procédure de bascule, délai de bascule cible
2. **Énergie** — hub de repli, onduleurs, groupe électrogène, autonomie en heures
3. **Ressources humaines** — backup +1 agent par compte, règle de remplacement, délai de reprise
4. **Escalade incident** — qui prévient le partenaire, sous quel délai, par quel canal
5. **Test** — fréquence de test de bascule et preuve fournie au partenaire

C'est aussi le document qui **rend tangible** le « on ne dépend ni d'une ligne ni du réseau
électrique local ». Sans lui, cette phrase est du marketing.

### 5.2 À écrire — Description client du dispositif QA (1 page)

La grille interne (`PROCESS-QA-DOUBLE-ECOUTE.md`) **ne se transmet pas au client**. Il faut
sa version cliente, qui décrit le dispositif sans livrer le référentiel :

> 8 critères notés à chaque écoute, dont **2 critères bloquants** (respect du SLA,
> traçabilité du ticket) : un manquement sur l'un des deux met la fiche au rouge quel que
> soit le score. Trois zones : **≥ 85 %** conforme · **70-84 %** plan d'amélioration ciblé
> avec re-contrôle sous une semaine · **< 70 %** plan d'action immédiat et double écoute
> rapprochée. **≥ 5 écoutes par agent la première semaine**, **≥ 2 par agent et par semaine**
> en régime, systématiquement après toute réclamation. **Restitution à l'agent sous 48 h.**

### 5.3 À écrire — Engagement SLA écrit (1 page) + CV anonymisés

- **Engagement SLA** : reprise de l'art. 6 sur papier à en-tête — KPI, seuil figé, avoir
  20 % automatique, plafond 1 mois sur 12, conditions de défense. 30 minutes de travail.
- **CV anonymisés** : 4-5 CV du vivier IT, anonymisés (initiales, années d'expérience,
  stack, employeurs décrits par secteur et non nommés). **Ne prépare que des profils que tu
  es prêt à affecter** — un CV envoyé est une promesse implicite.

### 5.4 À instancier au cadrage (après signature, avant J1)

- **Grille QA adaptée** aux macros et au ton du partenaire (variante support/helpdesk, §3 du process)
- **Chaîne d'escalade N1 → N2 → client** : noms, canaux, délais — figée au cadrage
- **Planning de double écoute S1** nominatif (20 créneaux)
- **Base de connaissances de départ** : récupérer les procédures du partenaire « même
  incomplètes », les mettre au propre — c'est ce que tu lui restitueras au titre de la
  réversibilité (art. 13), et c'est un actif de rétention

### 5.5 Ce que tu montres demain (et ce que tu ne montres pas)

| Tu montres | Tu ne montres pas |
|---|---|
| Le **gabarit de reporting hebdo** instancié à sa niche (`MODELE-REPORTING-CLIENT.md` bloc B) | La **grille QA interne** (référentiel interne, jamais transmis) |
| La **description** du dispositif QA (§5.2) | Le vivier, les noms, les prétentions |
| Le **DPA** et le contrat complets | La `FINANCE-PREVISIONNEL.md`, la marge, le coût agent |
| Le **plan de continuité** si tu l'as écrit ce soir | La rate card des **autres** paliers si tu ne veux pas ouvrir la négociation volume |

**Règle** : le partenaire mesure, il ne croit pas sur parole. Tout ce que tu montres doit
être un document qu'il pourrait remettre tel quel à son propre client.

---

## 6. Le closing — ce qui se dit

### 6.1 Ouverture — ne revends rien (2 min)

Le rendez-vous de closing n'est pas un rendez-vous de vente. Ouvre sur ce qui est **déjà acté** :

> « On s'est parlé le [date]. Vous m'avez dit trois choses : [douleur 1 dans ses mots],
> [douleur 2], [douleur 3]. J'ai construit la proposition sur ces trois points-là.
> Aujourd'hui je ne viens pas vous re-vendre — je viens **figer le périmètre, la date de
> démarrage et les modalités**. À la fin de cet appel, soit on a un contrat signé et une
> date, soit on sait précisément ce qui manque. Ça vous va comme cadre ? »

Ce cadrage fait deux choses : il annonce que **la signature est le résultat attendu** de
l'appel, et il rend le « je vais réfléchir » plus coûteux à sortir.

### 6.2 Les trois chiffres qui convainquent

**① Ce que ça lui coûte de ne pas signer**

> « Quatre techniciens N1 en France, en coût complet — salaire, charges, congés, absences,
> recrutement, formation, supervision, matériel, licences, locaux — c'est **38 à 50 k€ par
> an et par poste**. Sur quatre postes, **12 800 à 16 800 € par mois**. Ma proposition,
> c'est **7 000 €**. L'écart, c'est **5 800 à 9 800 € par mois** — entre **70 et 118 k€ par
> an**. Et je ne compare pas à un salaire brut : je compare à ce que vous coûte vraiment
> un poste tenu. »

**② Ce que ça lui rapporte** — le vrai argument en marque blanche

> « Vous revendez. Sur la base d'un N1 francophone dédié à 2 700 €, vous facturez
> **10 800 €** ce qui vous en coûte **7 000**. **3 800 € de marge par mois, 45 600 € par an,
> sans embaucher personne, sans avancer de masse salariale et sans porter le turnover.**
> Et si un client s'arrête, vous ne restez pas avec quatre CDI sur les bras. »

**③ Le délai — sa contrainte réelle**

> « Recruter un N1 en France, c'est **60 à 90 jours**. Quatre en même temps, ça n'arrive
> pas. Moi je vous mets en production en **5 à 7 semaines** à partir de la signature :
> deux à quatre semaines pour constituer l'équipe, deux à trois pour l'intégrer à vos
> outils et vos procédures. Si vous signez aujourd'hui, on démarre **[date]**. »

> ⚠️ **Ne dis jamais 3 semaines.** Le délai est de 5 à 7 semaines et tu n'as pas encore le
> vivier. Une date tenue est le premier livrable de la relation.

### 6.3 Le prix — ancrer sur le palier, pas sur le total

> « Sur quatre positions, le prix est de **1 750 € par position et par mois**, soit
> **7 000 €**. La grille est dégressive au volume ferme engagé : une position seule c'est
> 2 000 €, à partir de trois c'est 1 750 €, et il existe un palier à cinq positions à
> 1 550 €. Vous êtes à quatre : **le palier trois s'applique**. »

Dire le palier 5+ **toi-même** vaut mieux qu'il le découvre : ça pose que le prix baisse par
**volume ferme**, pas par négociation, et ça installe l'extension future comme la voie
naturelle.

**S'il demande le tarif 5+ à quatre positions :**

> « Non, et c'est structurel. Le palier cinq, c'est un **prix de volume engagé** : il
> s'achète avec cinq positions **facturées chaque mois, consommées ou non**. Si je vous
> l'accorde sur quatre, c'est moi qui porte le risque de la cinquième — je paie l'agent
> qu'elle soit utilisée ou non. Le jour où vous engagez cinq positions fermes, le prix
> tombe à 1 550 € et je vous le donne sans discuter. »

### 6.4 Le dépôt — la phrase, puis le silence

C'est le moment le plus délicat de l'appel. Une phrase, pas trois.

> « À la signature, il y a un **dépôt d'activation de 2 700 €**. Vous ne le payez pas :
> **vous l'avancez**. Il revient dans vos trois premières factures, à 900 € par mois. Un
> partenaire qui va au bout du contrat ne paie **rien de plus** — ce n'est pas des frais,
> c'est une avance. Il ne reste chez nous que si vous annulez **après** qu'on ait recruté
> et formé quatre personnes pour vous. »

Puis **tais-toi**. La justification supplémentaire donne l'impression que le dépôt est
négociable. S'il pousse :

> « Je le comprends. Mais mettez-vous à ma place : à la signature, j'engage quatre
> recrutements et cinq à sept semaines de formation, avant la première facture. Si vous vous
> arrêtez en route, c'est perdu. Ce dépôt, c'est la seule chose qui me permet de démarrer
> le recrutement **le jour même** au lieu d'attendre votre premier règlement à trente jours.
> C'est ce qui vous fait gagner un mois. »

### 6.5 Le refus de remise — et ce que tu donnes à la place

C'est le cœur du positionnement MB. Réponse déjà écrite, à dire telle quelle :

> « Non, et c'est volontaire. Vous **revendez** notre prestation : une remise sur votre prix
> de gros améliore votre marge d'un mois, elle ne vous fait gagner **aucun client**. Ce que
> je peux vous donner, c'est du **risque en moins** et de quoi **gagner vos propres appels
> d'offres**. Sur le prix, c'est le volume que vous engagez fermement qui le fait baisser,
> pas la négociation. »

Puis tu concèdes **une seule** contrepartie, choisie à l'avance :

| Contrepartie | Quand la donner | Ce qu'elle te coûte |
|---|---|---|
| **Sortie à 30 jours** les 3 premiers mois | S'il bloque sur le **risque** (« je ne vous connais pas ») | Faible — le dépôt couvre l'onboarding |
| **Exclusivité territoire/segment 12 mois** | S'il bloque sur la **concurrence** (« vous allez servir mes rivaux ») | **0 €** aujourd'hui |
| **Appui avant-vente sous 48 h** | S'il bloque sur le **prix** — c'est la meilleure des trois | ~0 € marginal, mais **impose d'écrire le PCA** (§5.1) |

> ⚠️ **Une seule.** Trois contreparties données d'un coup, ce n'est plus une concession,
> c'est une braderie — et il ne te reste rien pour la prochaine objection. Coche dans le
> devis (B.7) celle que tu accordes, **devant lui**. Ce qui est concédé doit être vu, pas subi.

Formulation de l'appui avant-vente, si c'est celle-là :

> « Je vous remets sous 48 h notre plan de continuité, notre DPA, la description de notre
> dispositif qualité, des CV anonymisés et un engagement SLA écrit — **réutilisables tels
> quels dans vos propres réponses d'appels d'offres**. C'est le seul de ces trois points qui
> vous aide à **gagner** un client, pas seulement à en économiser un. »

### 6.6 Les objections probables

| Objection | Réponse |
|---|---|
| **« Vous êtes trop petits, pas assez de références »** | « C'est exact, et c'est pour ça que la proposition est construite comme ça : périmètre restreint au départ, **sortie à 30 jours** les trois premiers mois, et un **avoir de 20 %** si le SLA n'est pas tenu en régime. Vous n'avez pas besoin de me croire — vous avez besoin de KPI sur **vos** tickets et de pouvoir arrêter. Je mets mon argent sur le résultat. » |
| **« Mes clients n'accepteraient pas de l'offshore »** | « Marque blanche totale : vos outils, vos scripts, vos SLA, **votre nom**. Votre client final ne voit que vous, et je m'interdis contractuellement toute approche de vos clients finaux pendant le contrat et 24 mois après. Ce qu'on absorbe, c'est le N1 répétitif — exactement là où le risque qualité est le plus faible. » |
| **« D'autres malgaches sont à moitié prix »** | « Exact, et c'est assumé. À ce prix-là l'agent est payé au minimum local et tourne en six mois — **votre** qualité part avec lui, sous **votre** marque. Nous, on paie nos agents très au-dessus du marché local pour les garder, et on s'engage contractuellement sur le SLA avec un avoir automatique. La question n'est pas le prix de la position : c'est le coût du client final que vous perdez quand votre sous-traitant ne tient pas. » |
| **« Droit malgache ? Arbitrage à Maurice ? »** ⚠️ *la plus probable* | « Je comprends la réticence — c'est précisément pour ça que je propose un **arbitrage CCI avec siège à Maurice** plutôt que les tribunaux d'Antananarivo. C'est une juridiction neutre, une procédure internationale standard, et une sentence exécutable en France au titre de la Convention de New York. Vous n'êtes ni chez moi ni à devoir plaider à 9 000 km. » |
| **« Et si un de vos agents part ? »** | « Deux réponses. La structurelle : nos agents sont payés très au-dessus du marché local, c'est le levier anti-turnover. L'opérationnelle : **backup +1 agent par compte**, formé sur vos procédures, qui prend le relais sans jour d'arrêt. Et la base de connaissances constituée reste — c'est ce qui fait qu'un remplacement ne vous coûte pas trois semaines. » |
| **« Je veux démarrer avec une position, pour voir »** | « On peut, mais alors c'est le tarif d'une position, 2 000 €. Ce que je vous propose à la place, c'est de garder les quatre positions au tarif de 1 750 € et de **restreindre le périmètre** : un seul de vos clients finaux, ou un lot de 200 à 400 tickets. Vous jugez sur vos vrais flux, en petit, sans payer le prix du volume unitaire. C'est le **périmètre** qui limite votre risque, pas le nombre de positions. » |
| **« Il faut que j'en parle à mon associé »** | « Bien sûr. Deux questions alors : **qu'est-ce qui, dans ce qu'on vient de voir, mérite qu'il dise non ?** Et **quand vous voyez-vous ?** Je bloque la capacité de recrutement jusqu'à [date + 5 jours ouvrés] ; au-delà je ne peux plus garantir un démarrage [date]. » |
| **« Envoyez-moi ça, je regarde »** | « C'est déjà en ligne — je vous donne le code d'accès maintenant, tout ce qu'on vient de dire y est écrit, avec votre marge calculée. Regardez-le avec moi deux minutes, comme ça ce qui bloque, on le voit tout de suite plutôt que dans dix jours. » |

### 6.7 La demande — explicite, puis silence

Ne termine pas sur « qu'en pensez-vous ». Termine sur une demande précise et **deux**
décisions, pas une :

> « De mon côté c'est clair : quatre positions à 1 750 €, démarrage le [date], sortie à
> 30 jours les trois premiers mois, SLA engagé avec avoir de 20 %. Il me faut deux choses de
> votre part aujourd'hui : **votre signature sur le contrat et le DPA**, et **le virement du
> dépôt** — parce que c'est lui qui déclenche le recrutement, et le recrutement, c'est le
> chemin critique de votre date de démarrage. On y va ? »

Puis **tu ne parles plus.** Le premier qui parle après la demande a perdu la fin de la
négociation.

### 6.8 S'il ne signe pas demain

Ne pars pas avec « je vous relance ». Pars avec une **date et une condition** :

> « D'accord. Deux choses avant qu'on raccroche : **qu'est-ce qui manque exactement** pour
> que ce soit oui ? Et **on se reparle quand** — pas "dans quelques jours", une date.
> Je bloque la capacité jusqu'au [date + 5 jours ouvrés] ; après, la date de démarrage de
> fin septembre saute, parce que le recrutement prend cinq semaines et qu'il ne démarre pas
> tout seul. »

---

## 7. Après le « oui » — les 72 premières heures

`ONBOARDING-CLIENT.md` phase 0-1, resserré au cas 4 positions :

| Quand | Action |
|---|---|
| **Immédiat** | Facture d'avance du dépôt émise **pendant l'appel**. Le dépôt encaissé conditionne tout le reste |
| **H+2** | Dicter le code d'accès de la page de deal + envoyer contrat, Annexe B, DPA signés en PDF |
| **J+1** | Kit avant-vente sous **48 h ouvrées** si la contrepartie a été concédée (PCA, DPA, dispositif QA, CV anonymisés, engagement SLA) — hors délai, elle ne vaut rien |
| **Dès encaissement** | Lancer le recrutement : verrouiller VIV-0012 et VIV-0014, relancer VIV-0011 (préavis 30 j → chemin critique), sourcing FB pour les 2-3 restants |
| **Semaine 1** | Cadrage technique : accès nominatifs + MFA, volumétrie des 6 derniers mois par client final, procédures existantes « même incomplètes », référent technique **3 h/semaine pendant 3 semaines** |
| **Semaines 2-4** | Recrutement, contrats de prestation + NDA + DPA freelances, **clause de plages réservées et backfill** |
| **Semaines 4-6** | Formation aux procédures, armement QA (grille instanciée, planning de double écoute S1, chaîne d'escalade nominative), test de bout en bout |
| **J1** | Premier ticket sous le nom du partenaire. **Ne jamais démarrer sans QA armée et escalades documentées** |
| **Fin mois 1** | Vérifier l'imputation du dépôt (900 €) sur la facture 1. Activation de l'engagement de service au 1er mois plein en régime |

---

## 8. Les cinq phrases à retenir

1. **« Quatre positions, c'est le palier trois : 1 750 €. Le palier cinq s'achète avec un volume ferme, pas avec une intention. »**
2. **« Le dépôt, vous ne le payez pas — vous l'avancez. Il revient dans vos trois premières factures. »**
3. **« Je ne remise pas : vous revendez, une remise vous ferait gagner une marge, pas un client. Je vous donne du risque en moins. »**
4. **« Cinq à sept semaines. Pas trois. »**
5. **« Il me faut votre signature et le virement du dépôt aujourd'hui — c'est le dépôt qui déclenche le recrutement, et le recrutement, c'est votre date de démarrage. »**

---

*Sources : `PRICING.md` §3/§3.a/§3.b/§5 · `FINANCE-PREVISIONNEL.md` §1/§2/§3/§5/§6 ·
`MODELE-CONTRAT-PRESTATION.md` · `MODELE-DEVIS.md` B.2/B.3/B.4/B.7 · `ONBOARDING-CLIENT.md` ·
`PROCESS-QA-DOUBLE-ECOUTE.md` · `MODELE-REPORTING-CLIENT.md` · `VIVIER-EXPORT.md` ·
`MENTIONS-LEGALES.md` · `AUDIT-ESPACE-CLIENT.md` §9.2 · `ONEPAGER-PARTENAIRE-MB.md` ·
`OUTREACH-IT-N1-marque-blanche.md` · `tools/deal-build.mjs`.*
