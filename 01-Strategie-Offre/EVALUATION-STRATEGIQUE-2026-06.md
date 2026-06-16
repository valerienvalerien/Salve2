# ÉVALUATION STRATÉGIQUE SALVERYS — juin 2026

> Audit complet : positionnement (vs marché malgache), benchmarking concurrentiel,
> tarification, cohérence des livrables. Recherche concurrentielle web du 2026-06-10
> (sources en fin de document). Le prévisionnel financier a été **refait from scratch**
> dans `FINANCE-PREVISIONNEL.md` + `tresorerie-salverys.html` (anciennes versions écartées).

---

## 0. Synthèse exécutive (TL;DR)

| Volet | Verdict | En une phrase |
|---|---|---|
| **Positionnement** | ✅ **Bon, à durcir** | Le trou de marché « 1-5 ETP à exigence forte » est réel et inoccupé à Madagascar — mais deux différenciateurs décisifs (continuité électrique, conformité art. 46) ne sont pas assez mis en avant. |
| **Tarifs médical** | ✅ **Tenir, ne pas baisser** | 350/590/950 € = premium offshore assumé (1,06-1,40 €/appel vs 0,50-1 € chez les low-cost malgaches) ; défendable uniquement si la copy vend la conformité + la redondance. |
| **Tarifs Support/Helpdesk** | ⚠️ **Direct au-dessus du corridor malgache** | 1 900-2 800 €/ETP direct vs corridor offshore 600-1 400 € : OK face à des clients finaux qui benchmarkent le CDI FR, risqué face à des acheteurs qui connaissent Madagascar. La grille MB (1 350-2 000 €) est, elle, bien calée. |
| **Marge** | ✅ **Très saine** | Coût complet ~400-450 €/ETP/mois → marge brute 65-80 % selon l'offre. Il y a la place pour payer les agents 40-70 % au-dessus du marché local et casser le turnover. |
| **Cohérence interne** | ❌ **6 corrections urgentes** | 2 fuites de prix marque blanche en cold email, 5 occurrences du seuil 95 % obsolète, et un `<title>` de site qui viole les garde-fous de l'offre. |

---

## 1. Rapport de positionnement — Salverys face au marché malgache

### 1.1 La carte du marché BPO malgache (3 étages)

Le secteur : 230+ entreprises, 40 000+ emplois, croissance >15 %/an. Trois étages :

1. **Les géants du volume** (Vivetic ~1 800, Intelcia ~2 000, Outsourcia 650+, Concentrix,
   ADM Value, Connecteo). Ils visent 20 à 200+ positions par client (télécoms, énergie,
   e-commerce). **Aucun ne vend le télésecrétariat médical comme offre phare.** Le segment
   cabinet médical / petit éditeur SaaS (1-5 ETP) ne les intéresse structurellement pas.
2. **Les petits télésecrétariats offshore low-cost** (Serenity Center, Nosycom,
   Téléservices/Télésecrétariat-Madagascar, TMM, ProCare Call, Telesecretaire-mlg,
   Stylrendez-vous). Ils vendent **du prix** (« -40 à -60 % », 0,50-1 €/appel) mais
   **pas de la fiabilité process** : aucun ne communique sérieusement sur la conformité
   RGPD de transfert, la continuité électrique ou un engagement de service chiffré.
3. **Les substituts technologiques** (Calmedica, Docorga, callbots Doctolib) : ils rognent
   le marché par le bas en automatisant la prise de RDV simple.

### 1.2 Où est le trou — et pourquoi Salverys est dessus

**Le créneau inoccupé : « process de grand plateau, taille d'atelier ».**
Personne à Madagascar ne combine : (a) ciblage 1-5 ETP exigeants, (b) process documentés
(backup +1 agent, QA, reporting), (c) engagement de service chiffré (90 % décroché, avoir
20 %), (d) conformité packagée. La stratégie actuelle (promesse-résultat, réassurance en
deux temps, value stack visible) est **exactement la bonne réponse** à ce trou. Le
positionnement est validé.

### 1.3 Les 3 faiblesses du positionnement actuel

1. **L'objection cachée n°1 n'est pas traitée frontalement : l'électricité.** La crise
   JIRAMA (délestages de 3 h à 24 h+, crise politique fin 2025) est documentée jusque dans
   la presse française. Un médecin qui googlise « Madagascar coupures » avant de signer
   trouve de quoi fuir. Le dispositif existe (`PRICING.md §10` : double FAI + 4G + groupe
   électrogène) mais il est **enterré en interne**. Il doit devenir un bloc public
   « plan de continuité écrit » dans chaque proposition et sur le site.
2. **L'argument tueur de conformité n'est pas exploité.** Quasi aucun concurrent offshore
   ne met en avant : CCT art. 46 RGPD, zéro stockage local, travail dans les outils HDS
   du cabinet. `CONFORMITE-HDS-RGPD.md` contient déjà tout — c'est un différenciateur
   quasi gratuit et un tueur d'objection face aux plateformes « 100 % France ». À
   transformer en « pack conformité » d'une page, brandi en proactif.
3. **Pas de défense préparée contre le low-cost malgache.** Le prospect comparera :
   « Telesecretaire-mlg fait 0,98 €/appel, Callmed 0,50 € — pourquoi Salverys 1,40 € ? »
   Aucun script d'objection n'existe pour ça (les objections traitées visent les
   concurrents français). Voir battle card §2.3.

### 1.4 Point d'attention stratégique — la double casquette Callmed

`TELESEC-TARGETS.md` classe **Callmed cible partenaire marque blanche n°1**, or la
recherche montre que Callmed **vend dès 0,50 € HT/appel** (et sa base opérationnelle est
peut-être déjà offshore — à vérifier). Conséquence : un partenariat de débordement avec
Callmed ne sera économiquement viable que sur les créneaux que son plateau ne couvre pas
(nuit, week-end), à un prix de gros qui passe sous sa propre grille. **Qualifier son prix
d'achat cible dès le 1er échange**, sinon c'est un tunnel de négociation perdant.

---

## 2. Battle cards — concurrents malgaches

### 2.1 Les géants du volume (menace faible, terrain à éviter)

| Concurrent | Taille (Mada) | Positionnement | Où Salverys gagne | Où Salverys perd |
|---|---|---|---|---|
| **Vivetic Group** | ~1 800 collab., pionnier (1996), CA ~15 M€ | Relation client multicanal, back-office, data | Niche médicale, agilité, proximité dirigeant | Références, ancienneté, double implantation FR/Mada |
| **Intelcia Madagascar** | ~2 000 collab., 2 sites, +400 recrut./an | Grands comptes télécoms/énergie | Segment 1-5 ETP qu'ils refusent ; qualité vs masse | Capacité d'absorption, prix au volume |
| **Outsourcia Madagascar** | 650+ collab. (groupe 4 000, 4 pays) | Relation client + back-office + digital | Spécialisation, sur-mesure | Lissage de risque multi-pays |
| **Concentrix (ex-Webhelp)** | ~250+ positions | Service client standardisé | Tout ce qui demande de l'adaptation fine | Marque mondiale rassurante pour grands comptes |
| **ADM Value** | 4 sites Mada (groupe 6 500) | Offshore francophone prix agressifs | Qualité, encadrement, conformité | Guerre des prix pure |
| **Connecteo** | n.c. | Support client + technique | Process, engagement chiffré | Présent sur le support technique (niches 2-3) |

**Règle d'engagement** : ne jamais se battre sur leur terrain (>10 positions, appels
d'offres volume). Eux ne descendront pas sur le nôtre — la guerre des salaires qu'ils
alimentent à Tana (+400 recrutements/an chez Intelcia) est en revanche un **risque RH
direct** : voir politique salariale §3.4.

### 2.2 Les spécialistes télésecrétariat médical offshore (menace principale)

| Concurrent | Localisation | Prix connus | Forces | Faiblesses exploitables |
|---|---|---|---|---|
| **Serenity Center** | Madagascar | À l'heure (base 40 h/sem) ou à la performance | Le plus proche de notre niche 1 ; flexibilité de facturation | Pas d'engagement de service chiffré, pas de discours conformité |
| **Téléservices / Télésecrétariat-Madagascar** | Tana (Ankorondrano) + Maurice | À l'appel (n.p.), claim « -40 à -60 % » | Bi-site Mada/Maurice, amplitude 8h-20h + sam. matin | Vend du prix, zéro réassurance process |
| **Nosycom** | Tana, depuis 2013 | n.p. | 10+ ans d'ancienneté médicale | Visibilité faible, pas de garantie |
| **Telesecretaire-mlg** | Madagascar | **0,98 €/appel** | Prix simple et lisible | Aucun discours qualité/continuité |
| **Stylrendez-vous** | offshore | **0,70 € TTC/appel**, abo min. 30 €/mois | Entrée à très bas coût, sans engagement | Volume low-cost, pas de dédié |
| **Callmed** | vitrine FR, base offshore à vérifier | **dès 0,50 € HT/appel** | Prix plancher du marché, 1M+ appels/an | Densité extrême = tension qualité (c'est d'ailleurs notre angle partenaire) |

### 2.3 Script de défense anti-low-cost (à ajouter aux objections)

> **« X fait 0,50-1 €/appel, vous êtes à 1,18-1,40 €. »**
> « Exact — et c'est volontaire. À 0,50 € l'appel, l'agent est payé au minimum local,
> tourne en 6 mois, et personne ne vous garantit un taux de décroché. Nous, on s'engage
> contractuellement : ≥ 90 % d'appels décrochés, sinon 20 % d'avoir automatique. Plan de
> continuité écrit (double connexion par agent, hub de repli alimenté), conformité RGPD
> documentée (clauses art. 46, zéro donnée stockée chez nous), backup +1 agent. La
> question n'est pas le prix de l'appel, c'est le prix du patient perdu quand le
> prestataire à 0,50 € ne décroche pas. »

### 2.4 Le substitut (menace à 3 ans) : le callbot

Calmedica, Docorga, la prise de RDV en ligne Doctolib automatisent l'appel simple.
**Défense** : se positionner sur ce que l'IA gère mal — régulation d'urgence, patients
âgés, consignes complexes par praticien, débordement imprévisible — et assumer un modèle
**hybride humain + outils du client** (cohérent avec le réflexe SaaS-first). À 3 ans,
l'offre médicale doit se vendre comme « le niveau humain au-dessus de votre bot », pas
contre lui.

### 2.5 Matrice prix/valeur (synthèse)

```
  Valeur perçue (process, garantie, conformité)
  ▲
  │              ┌────────────┐
  │              │  SALVERYS  │   ← seul dans ce quadrant offshore
  │              └────────────┘
  │   Plateformes FR (Thelem, Médiphone…)        ← plus chères, « 100 % France »
  │
  │   Serenity · Nosycom · Téléservices          ← milieu mou
  │
  │   Callmed 0,50 € · Stylrendez 0,70 €
  │   Telesecretaire-mlg 0,98 €                  ← guerre des prix
  └──────────────────────────────────────────▶ Prix
```

---

## 3. Évaluation tarifaire

### 3.1 Médical (350/590/950 €) — **tenir le prix, durcir la justification**

| Forfait | €/appel implicite | Corridor offshore Mada | Plateformes FR |
|---|---|---|---|
| Essentiel 350 € / ~250 appels | **1,40 €** | 0,50-1,00 € | 1,00-2,50 € (petits volumes) |
| Confort 590 € / ~500 appels | **1,18 €** | idem | budget cabinet typique 300-900 €/mois |
| Intensif 950 € / ~900 appels | **1,06 €** | idem | solution couplée Doctolib ~400 €/mois+ |

- La grille place Salverys en **premium offshore** : 1,5-2× les low-cost malgaches, sous
  les pure players français à service équivalent. **C'est le bon endroit** — cohérent avec
  le garde-fou « en santé, trop pas cher = pas sérieux ».
- **Ne pas baisser** : descendre sous ~0,80 €/appel implicite (≈ 280 € le forfait
  Essentiel) signalerait de la mauvaise qualité et alignerait Salverys sur une guerre des
  prix perdue d'avance contre des structures à coût marginal plus bas.
- La décision d'écarter un palier « Starter » < 350 € est **confirmée** par le benchmark
  (Stylrendez-vous occupe l'entrée de gamme à 30 €/mois — terrain non rentable).
- **Condition de tenue du prix** : la value stack (§3 d'`OFFRE-MEDICAL.md`) + le pack
  conformité + le plan de continuité doivent être **visibles avant le prix** dans chaque
  parcours (site, one-pager, emails). Sinon le prospect compare des €/appel nus, et on
  perd.

### 3.2 Support N1 SaaS & Helpdesk IT — **direct correct, vigilance acheteurs avertis**

- Corridor du marché offshore malgache : **600-1 400 €/ETP/mois** (régie ~600 €, dédié
  premium encadré ~1 400 €). Tarif horaire pratiqué : ~9-10 €/h.
- **Marque blanche Salverys (1 350-2 000 €)** : cale sur le haut du corridor → **bien
  positionnée**. Un donneur d'ordre (ESN, plateau) connaît les prix malgaches ; on est
  négociable mais crédible.
- **Direct Salverys (1 900-2 800 €)** : au-dessus du corridor malgache, mais le benchmark
  du client final est le CDI FR chargé (3 200-3 800 €/mois) → le « -40 % » tient.
  **Risque** : un éditeur SaaS qui a déjà benchmarké Madagascar verra l'écart. Défense =
  même logique que §2.3 (encadrement, backup, SLA contractuel, conformité) + le tier
  Priority pour monter en gamme. **Ne pas publier de prix ferme** (la règle des 3 paliers
  de `PRICING.md §9` est la bonne).
- Le tarif horaire interne (12-15 €/h direct, 8-11 €/h MB) est au-dessus du 9-10 €/h
  marché : acceptable en direct, **serré en MB** — préférer systématiquement le modèle
  ETP en MB (déjà la doctrine).

### 3.3 Marge & plancher — confirmé par les coûts réels

Coût complet estimé d'un ETP qualité à Tana : **~400-450 €/mois** (salaire chargé premium
280-350 € + quote-part locaux/énergie/IT/encadrement — détail dans
`FINANCE-PREVISIONNEL.md`). Marges brutes résultantes :

| Offre | Prix | Marge brute |
|---|---|---|
| Médical Confort (agent mutualisé ~4 forfaits) | 590 € | **~75-80 %** |
| Support N1 MB | 1 350-1 700 € | **~67-74 %** |
| Helpdesk direct | 2 200-2 800 € | **~80 %+** |

Le plancher « coût chargé + 20 % » de `PRICING.md` est très loin sous tous les prix
pratiqués : **aucune offre n'est en danger de marge**. Le vrai risque n'est pas la marge
unitaire, c'est le **remplissage** (cf. prévisionnel).

### 3.4 Recommandation structurante : payer les agents au-dessus du marché

Marché local : salaire moyen agent ~700 000 Ar (~140 €), turnover sectoriel 15-30 %/an,
guerre des salaires alimentée par les géants. Avec 65-80 % de marge brute, **payer
1 000 000-1 200 000 Ar (40-70 % au-dessus du marché)** coûte ~60-100 €/ETP/mois et :
casse le turnover (l'ennemi n°1 de la promesse qualité), sécurise le backup +1, et rend
le discours premium **vrai**. C'est l'arbitrage le plus rentable du modèle. Intégré au
prévisionnel refait.

---

## 4. Audit de cohérence interne (copy vs PRICING.md)

### 4.1 Critique — fuites de prix marque blanche en cold email

| Fichier | Problème | Correction |
|---|---|---|
| `OUTREACH-SEQUENCE.md:389` | « Dès 1 525 €/agent/mois en marque blanche » dans l'Email 1 SaaS | Retirer le chiffre MB ; fourchette directe uniquement |
| `OUTREACH-SEQUENCE.md:549` | Les deux barèmes (MB 1 525-1 700 € + direct 2 100-2 400 €) exposés | Formulation générique + devis |
| `OUTREACH-IT-N1-marque-blanche.md:5` et `:117` | « 1 550-2 000 €/ETP/mois » en en-tête et dans l'Email 2 | Retirer les chiffres, renvoyer au devis |

La règle `PRICING.md §0/§9` (« toute MB jamais publique ») est violée précisément là où
ça coûte le plus : des emails envoyés à des revendeurs potentiels, qui voient notre marge.

### 4.2 Majeur — seuil de décroché obsolète (95 % au lieu de 90 %)

`PRICING.md §7` a tranché : **90 %** (95 % « écarté — trop ambitieux en phase de
démarrage »). Occurrences à corriger : `OUTREACH-SEQUENCE.md:240` et `:255`,
`index.html:240`, **`OFFRE-MEDICAL.md §2`** (« ≥ 95 % » avec 90 % en « repli »),
**`CHAPITRE-Offre-irresistible.md §3.4 et §4`**. Risque concret : un commercial promet
95 % par écrit → avoirs de 20 % en série dès le mois 2.

### 4.3 Majeur — le site viole ses propres garde-fous

`index.html` : le `<title>` et la meta description disent « **à 40 % du coût** »
(sémantiquement = payer 40 %, soit **-60 %**, claim non défendable) alors que le claim
officiel est « -40 % » — et le garde-fou de `CHAPITRE-Offre-irresistible.md` interdit de
mettre le prix **en titre**. Correction : titre orienté résultat, ex. « Salverys — Vos
appels décrochés en français, sans recruter », le -40 % restant dans le corps.

### 4.4 Bien aligné (à ne pas toucher)

Grille 350/590/950 € cohérente partout (simulateur, one-pager, outreach médical) · offre
« 1er mois -50 % » propagée · tier Priority correctement renommé · marque Salverys propre
(Nesvalo/Vinlo limités au localStorage) · simulateurs publics sans fuite MB · benchmarks
RH révisés utilisés partout · « forfait » (jamais « abonnement ») respecté côté client.

---

## 5. Plan d'action priorisé

| # | Action | Pourquoi maintenant | Statut |
|---|---|---|---|
| 1 | **Corriger les 2 fuites MB** (`OUTREACH-SEQUENCE.md`, `OUTREACH-IT-N1`) | Chaque envoi Emelia expose la marge aux revendeurs | ✅ fait 2026-06-10 |
| 2 | **Harmoniser 90 %** (OUTREACH-SEQUENCE ×2, OUTREACH-cabinets ×3, ONEPAGER, index.html, OFFRE-MEDICAL, CHAPITRE, CRM script pitch) | Une promesse écrite à 95 % = avoirs en série | ✅ fait 2026-06-10 (9 occurrences) |
| 3 | **Corriger le `<title>` d'index.html** (résultat, pas prix ; tuer le « à 40 % du coût ») | Claim faux + garde-fou violé, visible sur Google | ✅ fait 2026-06-10 |
| 4 | **Publier le bloc « Continuité & Conformité »** (double FAI, groupe électrogène, CCT art. 46, zéro stockage) sur le site + one-pager | Les 2 différenciateurs les plus forts du marché sont invisibles | ✅ fait 2026-06-10 (index.html value stack + ONEPAGER) |
| 5 | **Ajouter le script anti-low-cost malgache** (§2.3) aux objections des séquences | La comparaison à 0,50-1 €/appel arrivera dès les 1ers calls | ✅ fait 2026-06-10 (OUTREACH-cabinets + telesec-MB) |
| 6 | **Politique de rémunération** — décision direction 2026-06-10 : **100 % freelances à 1,8-2 M Ar** (~2,5× marché), managers inclus, objectif zéro turnover. Rentabilité vérifiée (marges 65-82 %, point mort ~7 100 €) | Anti-turnover = la promesse qualité devient tenable | ✅ acté + prévisionnel v2 refait |
| 7 | **Mettre à jour la note concurrentielle `TELESEC-TARGETS.md`** : corridor 0,50-1 €/appel, nouveaux acteurs, alerte prix d'achat Callmed avant tout E1 | Base de prospection fiable | ✅ fait 2026-06-10 |
| 8 | **Veille décret souveraineté HDS** — décision : simple rappel planifié (août 2026), exposition réduite par le GTM MB-first | Peut restreindre l'accès offshore encadré | ✅ rappel inscrit (`CONFORMITE-HDS-RGPD.md §4`) |
| 9 | **Narratif anti-callbot** — décision : **hybride assumé** (« le niveau humain au-dessus de votre bot ») | Substitut principal à 3 ans | ✅ fait (`NARRATIF-HYBRIDE-CALLBOT.md` + objections) |
| 10 | **Tarif marginal simulateur >900 appels** : affichage passé en « ≈ estimation » (disclaimer déjà présent) | Cohérence « prix fermes » | ✅ fait 2026-06-10 |
| — | Bonus : « paient l'abonnement » → « paient le forfait » (langage client, `PRICING.md §7`) dans OUTREACH-cabinets + OFFRE-MEDICAL | Règle « jamais abonnement » côté client | ✅ fait 2026-06-10 |

> **Décision GTM structurante (2026-06-10, postérieure au rapport)** : l'objectif
> prioritaire est de **démarrer en marque blanche sur les 3 niches** — le direct vient en
> 2e temps. Inscrite dans `CLAUDE.md` ; le prévisionnel v2 et le simulateur de trésorerie
> sont alignés (mix MB 100 % par défaut, point mort ≈ 5 ETP placés ≈ 2-3 contrats
> donneurs d'ordre). La lecture du rapport (notamment §3.1 « tenir les prix » médical
> direct) reste valable pour le 2e temps.

---

## 6. Risques & opportunités

### Risques (par probabilité × impact)

1. **Électricité / instabilité (élevé)** — crise JIRAMA + crise politique fin 2025.
   Mitigation : agents en double connexion (fibre + 4G) + hub de repli alimenté (groupe
   électrogène, onduleurs) + **plan de continuité écrit vendu comme un atout** (action 4).
2. **Décret souveraineté HDS, sept. 2026 (moyen, impact fort)** — l'hébergement UE est
   déjà obligatoire ; si l'accès depuis pays tiers se durcit, le modèle « zéro stockage
   local + CCT » est la seule architecture défendable. Veille active (action 8).
3. **Guerre salariale à Tana (élevé, impact moyen)** — Intelcia +400 recrutements/an.
   Mitigation : politique salariale premium (action 6).
4. **Guerre des prix low-cost (certain, impact faible si défendu)** — ne jamais suivre ;
   défendre par le risque, pas le prix (script §2.3).
5. **Callbots (moyen terme)** — hybride humain + outils du client (action 9).

### Opportunités

1. **Le trou 1-5 ETP premium est inoccupé** — fenêtre ouverte tant qu'aucun géant ne
   descend ni qu'aucun petit ne se structure. La vitesse de constitution de la preuve
   (5 clients fondateurs, cas client chaîne 3+ sites) est le facteur limitant.
2. **La conformité comme arme commerciale** — différenciateur quasi gratuit, personne ne
   l'exploite sur le marché offshore.
3. **La marge finance la qualité** — 65-80 % de marge brute permettent les salaires
   premium ET les prix tenus : cercle vertueux inaccessible aux low-cost.
4. **Secteur en croissance >15 %/an** — vivier RH et crédibilité destination en hausse
   (7e d'Afrique en débit internet, câble 2Africa).

---

## Sources principales (recherche du 2026-06-10)

Concurrents : vivetic-group.com · lagazette-dgi.com (Intelcia 2 000 collab.) · 2424.mg ·
outsourcia.com · relationclientmag.fr (Webhelp Mada) · admvalue.com · serenitycenter.fr ·
telesecretariat-madagascar.fr · teleservices.fr · nosycom.com · callmed-france.com/tarifs ·
telesecretaire-mlg.fr/tarifs · secretariat-distance.com · accueilpro-medical.fr ·
thelem.fr/tarifs · gethumancall.fr/tarifs. Salaires/coûts : lagazette-madagascar.com
(700 000 Ar moyen agent) · lexpress.mg (salaires call centers ; SME 300 000 Ar fév. 2026).
Secteur : capmad.com · sourcefit.com · revolution-energetique.com (crise JIRAMA) ·
axian-telecom.com (2Africa). Réglementaire : vigier-avocats.com & derriennic.com (décret
HDS 24/03/2026) · cnil.fr · loi malgache 2014-038. ⚠️ Plusieurs sites concurrents bloquent
la lecture automatisée : leurs prix proviennent des pages indexées par les moteurs ; les
coûts complets par ETP sont des estimations recoupées.
