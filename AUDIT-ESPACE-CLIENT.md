# AUDIT-ESPACE-CLIENT.md — audit de l'espace client & refonte en pages par deal

> 2026-07-29. Audit de `espace-client.html` + des 3 espaces chiffrés par niche, de l'offre
> qui y est présentée et de la façon de la présenter. Conclusion : **passer d'une page par
> niche à une page par deal**. Ce document explique pourquoi, ce qui a été changé, et ce
> qui reste à faire. Prix : `PRICING.md` fait foi.

---

## 1. Ce qui existait

- `espace-client.html` : page d'aiguillage publique (liée dans le footer du site), 3 cartes
  → 3 espaces chiffrés, **un mot de passe par niche**.
- `espace-client-{medical,support,helpdesk}.html` : contenu AES-256-GCM, clé PBKDF2-SHA256
  310 000 itérations, déverrouillage navigateur. Techniquement propre.
- Contenu = argumentaire « pourquoi nous » + rate card + conditions, quasi identique d'une
  niche à l'autre.

La **mécanique cryptographique est bonne et reste la base de la refonte**. Ce qui ne va pas,
c'est le découpage (par niche) et le contenu (une brochure, pas un document de closing).

---

## 2. Le défaut structurel : un mot de passe par niche

**Le problème que tu as identifié est le bon, et il est plus large que le prix.**

| Symptôme | Conséquence |
|---|---|
| Tous les partenaires d'une niche partagent le même code | Deux télésecrétariats **concurrents** lisent la même grille. Le premier qui la transmet au second détruit ta capacité à différencier. |
| Le prix se fige **en appel de closing** | Si tu concèdes 1 550 € dès 3 ETP à un partenaire, la page affiche 1 750 €. Soit tu contredis ta propre grille (perte de crédibilité), soit tu ne peux plus déroger (perte de deals). |
| Révocation impossible | Un partenaire part, ou le code fuite → tu fais tourner le mot de passe et **tu casses l'accès de tous les autres**, qu'il faut re-contacter un par un. |
| Aucune traçabilité | Tu ne sais pas qui a ouvert, ni quand, ni combien de fois. Or « il a rouvert le doc trois fois hier » est le meilleur signal de relance qui existe. |
| Document générique | Le partenaire lit une brochure adressée à sa niche, pas à lui. Zéro effet de closing. |

**Verdict : oui, une page par client — plus précisément une page par deal.** Un même
partenaire peut avoir deux offres (une niche médicale, une niche IT ; un pilote puis un
déploiement) : l'unité pertinente est le deal, pas le compte.

### Le vrai gain n'est pas la sécurité, il est commercial

La sécurité, c'est le prétexte. Ce qui change réellement le taux de closing :

- Un document qui **reprend ses mots à lui** (« ce que vous nous avez dit le 24 juillet »)
  place la conversation sur son problème, pas sur ton offre.
- Un tableau qui affiche **sa marge à lui** en euros par mois plutôt que ton prix de gros.
- Un calendrier avec **de vraies dates** plutôt que « opérationnel en ~3 semaines ».
- Une date de validité **réelle**, qui crée une échéance honnête au lieu d'une fausse rareté.

Aucun de ces quatre éléments n'est possible avec une page mutualisée par niche.

---

## 3. Audit de l'offre et de sa présentation

Classé par impact commercial décroissant.

### 3.1 Le prix est présenté nu, sans la marge du revendeur — **défaut n°1**

La rate card affichait `1 ETP → 1 700 €`. Mais un donneur d'ordre en marque blanche
**n'achète pas un prix, il achète un écart**. Ce qu'il veut voir :

| Volume engagé | Prix de gros | Revente conseillée | **Sa marge** |
|---|---|---|---|
| 3 positions | 1 750 € | 2 700 € | **950 €/mois/ETP (35 %)** |

`PRICING.md §3` contient déjà tout ce qu'il faut (direct 2 200-2 800 € pour le helpdesk,
marge donneur d'ordre ~25-35 %) — c'était juste absent de la page. Sur 3 positions, cela
donne **34 200 € de marge brute annuelle**, et c'est ce chiffre-là qui fait signer.

### 3.2 Aucune ancre de comparaison

La grille démarrait à 1 700 € sans rien en face. Le benchmark « coût complet interne »
(`PRICING.md §5` : 3 200-4 200 €/mois pour un support IT N1) était absent de la page alors
qu'il est l'argument central du dossier. Un prix seul se négocie ; un prix face à une
alternative chiffrée se compare.

### 3.3 Incohérence factuelle : « ~2,5× le marché local »

Les 3 contenus annonçaient **2,5×** alors que la décision direction du 2026-06-10
(`CLAUDE.md`, `FINANCE-PREVISIONNEL.md`) est **3 250 000 Ar ≈ 650 €, soit ~4,5×**. Argument
sous-vendu de moitié, et incohérent avec le reste du dossier. **Corrigé** dans les 3
sources et dans `02-Prospection/ONEPAGER-PARTENAIRE-MB.md`.

> ⚠️ **Périmé depuis le 2026-09-02.** La bande salariale a été révisée (entrée à
> 2 500 000 Ar) : **le multiple à afficher partout est ~3,5×**, plus 4,5×. Les 3 contenus,
> le one-pager, `index.html` et la fiche offre France ont été réalignés. **Les espaces
> client chiffrés (`espace-client-*.html`) restent à régénérer** — voir le point 2 du plan
> ci-dessous, toujours ouvert.

### 3.4 Les 3 contenus sont interchangeables

Mêmes 6 bullets « pourquoi nous », mêmes conditions, seuls les prix et deux mots changent.
Un partenaire qui compare deux propositions Salverys (ou qui a déjà vu ton one-pager) voit
du remplissage. En marque blanche, on n'achète pas des adjectifs : on achète de la
**fiabilité opérationnelle démontrée**.

### 3.5 Ce qui manquait à l'offre elle-même (et qui ne coûte rien)

Ce sont des ajouts d'offre, pas de la copy. Ils traitent la vraie peur du donneur d'ordre :

| Manque | Ce que ça traite | Coût pour toi |
|---|---|---|
| **Non-sollicitation des clients finaux** | « Tu vas me piquer mes clients » — LA peur n°1 en marque blanche. Elle n'était traitée nulle part. | 0 € |
| **Réversibilité écrite** (préavis, restitution des procédures et de l'historique) | « Je deviens captif » | 0 € |
| **Exclusivité de territoire / de niche** | Levier de closing très fort tant que tu as peu de clients | 0 € aujourd'hui |
| **Ce qu'on attend de lui** (référent, accès, volumétrie) | Raccourcit le cycle, évite les démarrages qui dérapent | 0 € |
| **Seuil du SLA chiffré** | « 20 % d'avoir » était annoncé sans le seuil ni la mécanique. Une garantie floue ne rassure personne. | 0 € |

### 3.6 Le « mois pilote à −50 % » est mal calibré en marque blanche

Le −50 % vient du GTM médical direct (`PRICING.md §7`), où le client final est sensible au
prix. Un donneur d'ordre, lui, **ne cherche pas une remise : il cherche à ne pas exploser
devant son propre client**. Le « give » doit porter sur le risque, pas sur le prix —
c'est d'ailleurs la règle déjà écrite en `PRICING.md §1.a` (« toujours préférer offrir une
option plutôt que remiser »).

Reformulation retenue dans le nouveau gabarit : *pilote sur **un seul** de ses clients
finaux, réversible à quatre semaines, procédures restituées, rien dû au-delà du mois
entamé*. Le −50 % reste, mais il n'est plus l'argument principal.

### 3.7 Zéro preuve, et zéro substitut à la preuve

Pas de logo, pas de chiffre réel, pas de nom — normal au démarrage. Mais rien ne vient
combler le vide. Ce qui se substitue à des références quand on n'en a pas encore :
procédures écrites montrées, modèle de reporting hebdomadaire, profils anonymisés des deux
managers, plan d'onboarding daté. **À produire** (cf. §6).

### 3.8 Le pallier « 5+ ETP » n'est pas cadré par la capacité réelle

L'équipe cible est de 10 personnes dont 2 managers, soit **8 agents**. Afficher « 5+ ETP à
1 550 € » sans contexte, c'est vendre 62 % de la capacité totale à un seul compte sans le
dire. À présenter comme une **rareté vraie** (« deux positions de 3 ouvertes ce
trimestre »), ce qui est à la fois honnête et un levier de closing.

---

## 4. Audit technique et sécurité

| # | Constat | Gravité | État |
|---|---|---|---|
| 1 | **Le dépôt GitHub est public** : `PRICING.md` et `tools/espace-contenu-*.html` exposent les prix MB en clair. **Tout le chiffrement AES ne sert à rien tant que ce point n'est pas réglé.** | 🔴 bloquant | ⚠️ **à faire — passer le dépôt en privé** |
| 2 | La page d'aiguillage était **publique et liée depuis le footer du site**, et annonçait les 3 niches (« débordement pour télésecrétariats français ») : elle révélait à n'importe quel visiteur que Salverys est sous-traitant marque blanche. Contradiction directe avec la promesse de discrétion. | 🔴 | ✅ corrigé (page neutralisée, lien retiré du footer) |
| 3 | Un mot de passe par niche : pas de révocation individuelle, fuite latérale entre concurrents. | 🔴 | ✅ résolu par les pages par deal |
| 4 | Le payload chiffré est servi à tous : attaque hors ligne possible, sans limite de tentatives. Le builder n'exigeait qu'**12 caractères**, sans contrainte d'entropie — un code humain type `Salverys2026!` est cassable. | 🟠 | ✅ le nouveau builder **génère** le code (alphabet de 31 caractères sans ambiguïtés, 12 caractères ⇒ ~59 bits, hors de portée d'un brute-force PBKDF2 310k) |
| 5 | Le mot de passe était stocké **en clair dans `sessionStorage`**. | 🟡 | ⚠️ inchangé (même origine, risque faible ; à traiter si on ajoute du JS tiers) |
| 6 | Pas de `Referrer-Policy` : l'URL pouvait fuiter vers un tiers via un clic sortant. Critique maintenant que l'URL contient un token. | 🟠 | ✅ `no-referrer` en meta + en-tête Netlify |
| 7 | Le PDF imprimé sortait sans marque du destinataire : une fois diffusé, intraçable. | 🟠 | ✅ filigrane nominatif répété sur chaque page imprimée |
| 8 | Aucune date d'expiration. | 🟡 | ✅ validité affichée, bandeau « conditions à reconfirmer » au-delà |

---

## 5. Ce qui a été livré

### Architecture retenue

```
tools/deals/<partenaire>.json     → les données du deal (prix décidés en appel)
tools/deal-template.html          → le gabarit chiffré (coquille publique)
tools/deal-build.mjs              → génère espace/<slug>-<token>.html
```

Deux facteurs d'accès : une **URL non devinable** (token aléatoire de 72 bits, listée nulle
part) **plus** un **code d'accès généré** qui déchiffre le contenu. Le code n'est jamais
écrit sur disque : il s'affiche une fois dans le terminal, tu le dictes au partenaire.

```bash
# nouveau deal
cp tools/deals/exemple-msp.json tools/deals/ardenor.json   # puis éditer
node tools/deal-build.mjs tools/deals/ardenor.json          # → URL + code affichés
git add tools/deals/ardenor.json espace/ && git commit && git push

# régénérer après renégociation, sans casser le lien ni le code déjà donnés
node tools/deal-build.mjs tools/deals/ardenor.json "SLV-XXXX-XXXX-XXXX"

# révoquer un accès (lui seul)
git rm tools/deals/ardenor.json espace/ardenor-*.html && git commit && git push
```

Le build Netlify publie `espace/*.html` avec `noindex/no-store/no-referrer`, et **échoue**
si un contenu de deal non chiffré s'y retrouve.

### Contenu du nouveau gabarit

1. Bandeau nominatif + date de validité réelle
2. **« Ce que vous nous avez dit le [date] »** — ses mots, en tête de document
3. Périmètre en deux colonnes : ce qu'on prend / ce qui reste chez lui
4. Grille **prix de gros · revente conseillée · sa marge €/mois et %**
5. Bloc **marge brute annuelle** + comparaison au coût complet d'un recrutement France
6. **Calendrier daté** de la signature à la mise en production
7. Format d'entrée (pilote centré risque, pas remise)
8. Garanties : SLA chiffré · non-sollicitation · réversibilité · exclusivité · PCA · RGPD
9. Ce qu'on attend de lui
10. CTA : lien de réservation + email pré-rempli
11. Filigrane nominatif à l'impression

Démo générée : `espace/exemple-msp-M9vJj_ZqmYFf.html` (code `SLV-DEMO-2026-TEST`).

### Corrections annexes

- `espace-client.html` : page neutre, ne nomme plus aucune niche.
- Lien « Espace client » retiré du footer de `index.html`.
- « 2,5× » → « 4,5× » dans les 3 sources de contenu et le one-pager partenaire.

---

## 6. Ce qui reste à faire

| # | Action | Priorité |
|---|---|---|
| 1 | **Passer le dépôt GitHub en privé.** Rien d'autre ne compte tant que ce n'est pas fait. | 🔴 |
| 2 | ~~Régénérer les 3 espaces par niche, **ou** les retirer du build une fois les partenaires actifs basculés sur des pages par deal.~~ ✅ **Soldé le 2026-09-02** : les 3 espaces sont **décommissionnés** (pages, générateur et sources en clair supprimés du dépôt, retirés de `tools/build-site.sh`). Aucun partenaire à basculer — pas de contrat signé, le seul deal du dépôt est le gabarit de démonstration. Détail : `ESPACE-CLIENT-CANDIDAT.md §1`. | ✅ |
| 3 | Renseigner `rdvUrl` dans le gabarit (Cal.com) — sans lien de réservation, le CTA repose sur un `mailto`. | 🟠 |
| 4 | Produire les substituts de preuve (§3.7) : modèle de reporting hebdomadaire, extrait de procédure, profils anonymisés des 2 managers, plan d'onboarding daté. | 🟠 |
| 5 | Décider si le seuil « 5+ ETP » se présente comme capacité rare et chiffrer les places ouvertes par trimestre. | 🟡 |
| 6 | Ajouter la clause de non-sollicitation et la réversibilité à `04-Closing/MODELE-CONTRAT-PRESTATION.md` — la page les promet, le contrat doit les tenir. | 🔴 |
| 7 | **Trancher les 4 décisions de recalibrage MB (§9.4)** : dépôt d'activation, sort du −50 % en MB, palier 5+, périmètre de propagation. | 🔴 |

---

## 7. Arbitrage SaaS-first (règle `CLAUDE.md`)

**À dire en premier : des SaaS font exactement ça.** PandaDoc, Qwilr, Better Proposals
(~35-60 €/mois) génèrent des propositions personnalisées, et surtout ils apportent les deux
choses que le code maison ne peut pas donner : le **tracking de lecture** (qui a ouvert,
quand, combien de temps, sur quelle section) et la **signature électronique**.

Pourquoi le maison se justifie **quand même ici, et seulement pour l'instant** :

- La mécanique de chiffrement existait déjà et fonctionne — le coût marginal de la refonte
  était faible.
- À 0 client signé et sans volume de propositions, un abonnement de plus est prématuré.
- Le document reste sous ton domaine, à ta charte, sans logo d'un tiers en bas de page —
  ce qui compte quand tout le pitch repose sur la discrétion de la marque blanche.

**Bascule à prévoir sans état d'âme :**

- **Signature électronique dès le premier contrat** → **Yousign** (français, eIDAS, ~9-25 €/mois).
  Ne pas coder ça.
- **Tracking de lecture dès ~5 propositions en parallèle** → PandaDoc ou Tilkee. Savoir
  qu'un prospect a rouvert le document vaut plus que l'abonnement.
- **Espace client post-signature** (reporting, SLA du mois, factures) : c'est un **autre
  produit**, à ne pas confondre avec ces pages de closing. Là aussi SaaS : Looker Studio ou
  un Notion partagé pour le reporting. Ne rien coder.

---

## 8. Deux objets à ne plus confondre

L'appellation « espace client » couvrait un seul objet alors qu'il en faut deux :

| | **Espace de cadrage** (avant-vente) | **Espace client** (après-vente) |
|---|---|---|
| Destinataire | prospect en closing | client signé |
| Contenu | ses mots, ses prix, sa marge, le calendrier | reporting, SLA du mois, factures, contacts |
| Durée de vie | quelques semaines | la durée du contrat |
| Outil | ces pages par deal | Looker Studio / Notion partagé |

C'est le premier qui vient d'être refait. Le second n'existe pas encore et n'a pas à être
codé.

---

## 9. Recalibrage marque blanche — dossier de décision (2026-07-29)

> ✅ **Statut : APPLIQUÉ — décision direction du 2026-08-03.** Les quatre arbitrages ont été
> tranchés (A, B, C, D ci-dessous) et propagés à l'ensemble du corpus (§9.7).

### 9.1 Deux contradictions corrigées

| Sujet | `PRICING.md §3` (avant) | `FINANCE-PREVISIONNEL.md` | Retenu |
|---|---|---|---|
| Plancher MB | « coût + 20 % ≈ **540 €** » | « ≈ **840 €/ETP** » (§3) | **840 €** — le 540 € vient du modèle salarié v1 abandonné le 2026-06-10 |
| Point mort | « ~**5 ETP** » | « ~**7 ETP** » (§4) | **7 ETP** |

Le 540 € était le plus dangereux : négocier avec ce plancher en tête permet de signer à
perte. Corrigé, et **codé en dur dans `tools/deal-build.mjs`** — le builder refuse
désormais de générer une proposition sous 840 €/ETP, et alerte si la marge brute d'un
palier passe sous 50 %.

### 9.2 L'économie réelle d'un deal MB (3 positions helpdesk)

Base : coût marginal agent ~700 €/mois (`FINANCE §2`), onboarding 2-3 semaines
(`ONBOARDING-CLIENT.md` phase 1).

| Poste | Montant |
|---|---|
| Onboarding réel : socle partenaire (~400 €) + ~400 €/position | ~1 600 € |
| Remise consentie par le pilote −50 % | ~2 625 € |
| Recette du mois pilote (3 × 875 €) | +2 625 € |
| Coût agents pendant le pilote (3 × 700 €) | −2 100 € |
| **Résultat du mois pilote** | **≈ −1 075 €** |

Trois conclusions :
1. **Le −50 % coûte plus cher que l'onboarding qu'il compense** (2 625 € contre ~1 600 €).
2. Si le partenaire s'arrête après le pilote : ~1 075 € brûlés **plus** 3 agents au banc à
   700 €/mois, sans contrepartie.
3. En MB, une remise sur le prix de gros améliore la **marge du mois** du partenaire ; elle
   ne l'aide pas à **gagner son client final**. Valeur jetée sur un acheteur qui revend.

### 9.3 L'arbitrage déjà latent, jamais tranché

- `FINANCE-PREVISIONNEL.md §6` liste « **acompte au cadrage MB** » comme premier levier
  anti-creux (creux max 35-45 k€ vers M+7-8).
- `PRICING.md §1.c` et `ONBOARDING-CLIENT.md` (garde-fous) l'interdisent : « Ne jamais
  facturer la mise en service ».

**Il faut trancher.** Recommandation : un **dépôt d'activation**, pas des frais.

### 9.4 Les quatre décisions

| # | Décision | **Arbitrage retenu (2026-08-03)** | Alternatives écartées |
|---|---|---|---|
| A | Frais d'activation MB | ✅ **Dépôt imputable 900 €/position**, plafond 2 700 €, déduit des 3 premières factures (300 €/position/mois), acquis si annulation après début de mise en service | frais fermes · statu quo |
| B | Pilote −50 % en MB | ✅ **Supprimé en MB**, remplacé par les 3 contreparties de risque (§9.5). **Conservé en direct** | gardé en plus du dépôt · gardé seul |
| C | Palier 5+ ETP | ✅ **Conditionné à un volume ferme facturé** : 5 positions facturées, consommées ou non ; en deçà, tarif du palier 3 ETP | remonter le prix · statu quo |
| D | Propagation | ✅ **Tout le corpus** (§9.7) | PRICING + outil · PRICING seul |

**Pourquoi un dépôt imputable plutôt que des frais fermes** : coût nul pour le partenaire
qui va au bout, donc pas de friction sur le prix total face à un acheteur professionnel
sans référence à lui opposer ; couvre le coût réel s'il s'arrête ; filtre d'intention
majeur (qui refuse 900 € imputables ne signera pas — su en 48 h au lieu de 3 semaines) ;
encaissement J0 au lieu de J+30, ce qui attaque directement le creux de trésorerie.

### 9.5 Ce qui remplacerait le −50 % en MB

| Give | Pourquoi | Coût |
|---|---|---|
| **Sortie à 30 j** les 3 premiers mois (vs préavis 60 j) | Du risque, pas du prix — le vrai « sans risque » en MB | Faible si le dépôt couvre l'onboarding |
| **Exclusivité territoire/segment 12 mois** | Valeur perçue forte | **0 €** aujourd'hui |
| **Appui avant-vente sous 48 h** : PCA, DPA, CV anonymisés, dispositif QA, engagement SLA écrit — réutilisables dans SA réponse d'appel d'offres | **Seul give qui lui fait gagner du CA**, et rend Salverys difficile à remplacer | ~0 € marginal |

Le troisième est le meilleur : c'est le seul qui aide le partenaire à **vendre** plutôt
qu'à économiser.

### 9.6 Correction — l'argument de capacité était faux

L'ancienne rédaction de `PRICING.md §3` justifiait le recalibrage du palier 5+ par
« 5 positions = **62 % de la capacité totale (8 agents)** ». **L'arithmétique était juste
contre un chiffre qui n'est pas un plafond.** Les 8 agents de `FINANCE-PREVISIONNEL.md §1`
sont le **modèle de référence** du prévisionnel v2, pas une limite : le même document
prévoit un démarrage à 4 agents, une montée « au fil des placements », et un effectif M12
de **8 / 11-12 / 16-18** selon le scénario (§5). Le modèle est **100 % freelance**,
précisément pour être élastique.

La vraie contrainte sur un engagement de 5 positions est double, et elle est **plus forte** :

- **Trésorerie** — creux maximal **35-45 k€** vers M+7-8 (`FINANCE §6`).
- **Délai** — **~5 à 7 semaines** entre la signature et la première facture
  (recrutement freelance 2-4 sem. + formation 2-3 sem., `FINANCE §5`), soit
  **~3 500 €/mois de fees engagés** avant le premier euro encaissé.

C'est cet argument-là qui fonde le minimum facturable, pas un plafond d'effectif : le
risque créé par un engagement non tenu doit rester chez celui qui le crée. Corrigé dans
`PRICING.md §3`.

### 9.7 Propagation — fichiers modifiés (2026-08-03)

| Fichier | Ce qui a changé |
|---|---|
| `PRICING.md` | §0 mécanique d'entrée dissociée direct/MB · §1.c portée de la mise en service offerte · §3 palier 5+ conditionné + correction capacité · **§3.a dépôt d'activation** · **§3.b fin du pilote −50 % en MB** · §7 portée restreinte au direct · §8 trois lignes de récap |
| `tools/deal-build.mjs` | constantes `DEPOT_*` / `MINIMUM_FACTURABLE_SEUIL` / `REMISE_INTERDITE` · `calcDepot()` + `renderDepot()` · minimum facturable rendu dans la grille · **refus de build** si palier ≥5 retenu sans `minimumFacturable`, ou si une remise réapparaît dans `pilote`/`grilleIntro`/`grilleNote` · vérification que le dépôt figure dans le déchiffré · récap dépôt/minimum au terminal |
| `tools/deals/exemple-msp.json` | `minimumFacturable: 5` sur le palier 5+ · `pilote` réécrit sans remise · concession « sortie à 30 jours » ajoutée |
| `04-Closing/MODELE-CONTRAT-PRESTATION.md` | art. 3 sortie 30 j · art. 4 dépôt d'activation · art. 10 non-sollicitation · **art. 10 bis contreparties de risque** · art. 13 réversibilité + sort du dépôt · Annexe B minimum facturable |
| `04-Closing/MODELE-DEVIS.md` | B.2/B.3 palier 5+ à volume ferme · **B.4 dépôt d'activation** (+ phrase de closing) · B.6 sortie 30 j · **B.7 contreparties à cocher** |
| `04-Closing/ONBOARDING-CLIENT.md` | phase 0 encaissement du dépôt + palier figé + contreparties · phase 4 imputation et contrôle du minimum · garde-fous (ne pas recruter avant encaissement, jamais de remise MB) |
| `02-Prospection/ONEPAGER-PARTENAIRE-MB.md` | mécanique d'entrée réécrite, les 3 contreparties, avance d'activation **sans montant** (règle « aucun prix ») |
| `02-Prospection/OUTREACH-IT-N1-marque-blanche.md` | email 4 et objection « pas de références » réécrits · **nouvelle objection « un geste sur le prix ? »** · statut CRM `pilote` reformulé |
| `02-Prospection/OUTREACH-telesec-marque-blanche.md` | email 3 (sortie 30 j) · 2 objections ajoutées (remise, avance) |
| `02-Prospection/SCRIPTS-APPEL.md` · `HANDOFF-scripts-appel.md` | table des chiffres : −50 % scopé au direct, 4 lignes MB ajoutées |
| `tools/espace-contenu-{medical,support,helpdesk}.html` | conditions réécrites (dépôt, minimum facturable, plus de remise) + bloc **« Ce que nous vous accordons »** |
| `01-Strategie-Offre/FINANCE-PREVISIONNEL.md` | §6 : acompte MB **acté**, effet trésorerie chiffré, fin de la remise MB chiffrée |

⚠️ **Reste à faire manuellement** : régénérer les trois espaces partenaires chiffrés
(`espace-client-{medical,support,helpdesk}.html`) — les mots de passe ne sont stockés nulle
part :

```
node tools/espace-client-build.mjs medical  "<mot de passe>" --verify
node tools/espace-client-build.mjs support  "<mot de passe>" --verify
node tools/espace-client-build.mjs helpdesk "<mot de passe>" --verify
```

---

## 10. Découpage du contenu en 3 couches (appliqué)

Une page par deal ne suffit pas : sans règle, chaque deal réinvente tout et le pouvoir de
négociation se dissout.

| Couche | Contenu | Où | Négociable |
|---|---|---|---|
| **1. Socle** | Garanties, RGPD/DPA, PCA, réversibilité, non-sollicitation, QA, reporting | **En dur** dans `tools/deal-template.html` | **Jamais** — c'est la marque |
| **2. Paramètres** | Prix ETP, volume, créneaux, seuil SLA, durée | JSON, **bornés** (plancher 840 €) | Oui, dans les bornes |
| **3. Concessions** | Exclusivité, appui avant-vente, options offertes | JSON `concessions[]`, bloc « Ce que nous vous accordons » | Oui, une à la fois |

La couche 3 est **affichée au partenaire** (le give devient visible au lieu d'être subi),
**récapitulée dans le terminal** au build (contrôle avant envoi), et **tracée dans git**
(historique de tout ce qui a été concédé, deal par deal).
