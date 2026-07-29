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
| 2 | Régénérer les 3 espaces par niche pour propager la correction 4,5× (nécessite les mots de passe en cours), **ou** les retirer du build une fois les partenaires actifs basculés sur des pages par deal. | 🟠 |
| 3 | Renseigner `rdvUrl` dans le gabarit (Cal.com) — sans lien de réservation, le CTA repose sur un `mailto`. | 🟠 |
| 4 | Produire les substituts de preuve (§3.7) : modèle de reporting hebdomadaire, extrait de procédure, profils anonymisés des 2 managers, plan d'onboarding daté. | 🟠 |
| 5 | Décider si le seuil « 5+ ETP » se présente comme capacité rare et chiffrer les places ouvertes par trimestre. | 🟡 |
| 6 | Ajouter la clause de non-sollicitation et la réversibilité à `04-Closing/MODELE-CONTRAT-PRESTATION.md` — la page les promet, le contrat doit les tenir. | 🔴 |

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
