# PRICING.md — Grille tarifaire & modèle d'offre Salverys

> **Source unique de vérité prix.** Tout chiffre tarifaire dans les emails, le CRM,
> les simulateurs et le site doit être aligné sur ce fichier. En cas de divergence,
> **ce fichier fait foi.**
>
> Dernière révision : 2026-08-14 (**palier haut IT & axes du simulateur — décision direction** :
> palier 3 renommé **Non-stop** avec **plancher de 4 agents** §3.d · axe « Périmètre N2 »
> **supprimé** du simulateur public §3.d · **backup réservé au Non-stop** §3.d · revue de
> service mensuelle **incluse partout**, donc hors différenciation §3.d · fourchette
> d'estimation rattachée au **profil de l'agent** §3.d) ·
> précédente 2026-08-13 (**cohérence offre / simulateurs — décision direction** :
> forfaits IT nommés **Débordement / Poste dédié / Centre de services** §3.c · amplitude
> horaire traitée en **ETP** et astreinte/24·7 passés **sur devis** §3.c · Priority **sans
> argument d'économie sous 3 agents** §3 · badge médical recadré sur le **coût/jour ouvré**
> §1 · mise en route IT **3 à 4 semaines** §3.c. **Reste ouvert : arbitrage n°3** — benchmark
> coût complet IT et claim −40 à −60 %, cf. `AUDIT-OFFRE-PRIX-SIMULATEURS.md §C`) ·
> précédente 2026-08-03 (**recalibrage marque blanche — décision direction** :
> dépôt d'activation MB 900 €/position §3.a · **fin du mois pilote −50 % en MB** remplacé par
> 3 contreparties de risque §3.b · palier 5+ ETP conditionné à un volume ferme facturé §3) ·
> précédente 2026-07-12 (**benchmark coût à battre différencié par métier §3 :
> télésecrétaire 33-42 k€/an · support IT N1 38-50 k€/an, argumentaire « coût complet »**) ·
> précédente 2026-06-22 (**priorité niches revue : IT n°1, médical n°2, relation
> client de toutes sortes en futur non déterminé — labels §1/§3/§4 et récap §8**) ·
> précédente 2026-06-12 (rate card partenaire MB §3, télésec MB par créneau §1.b,
> add-ons amplitude + mise en service §1, pilote IT harmonisé) · précédente 2026-06-06
> (ajout §7 « engagement de décroché ») · base 2026-05-30
> Rapport de réflexion détaillé : `RAPPORT-PRIX.html`

---

## 0. Principes

- **Affichage des prix — règle à 3 paliers** (grille de décision détaillée en §9) :
  - **Médical standard** → **public**, grille ferme + simulateur (350/590/950).
  - **Support N1 & Helpdesk IT en direct** → **estimation publique sans prix ferme** : simulateur en
    **fourchette** + « devis sous 24 h » (capture lead). Pas de tarif ETP exact affiché.
  - **Toute marque blanche** (médical, support, helpdesk) → **jamais publique** : le prix de gros est
    l'input de marge du revendeur. Bailleurs → interne (§4).
- **Forfait, pas à l'appel** côté client (prévisibilité). Le « à l'appel » ne sert
  qu'en référence interne de coût.
- **-40 à -60 %** = fourchette publique **défendable** (cf. §5), calée sur le **coût
  complet** d'un ETP interne (pas le seul salaire chargé). Le plancher -40 % reste le
  claim conservateur ; -60 % correspond au haut de la fourchette de coût complet interne.
- **Marque blanche systématique** : l'équipe répond sous le nom du client. Deux
  go-to-market chiffrés : **en direct** (client final) ou **en marque blanche** comme
  sous-traitant d'un acteur déjà établi (ESN, prestataire BPO) — qui prend une marge de
  **~25-35 %**, donc on capte moins par unité mais avec un coût d'acquisition ~nul.
- **Modèles de tarification retenus (par ordre de préférence)** : **1) ETP par position ·
  2) à l'heure · 3) à l'interaction**. (Le forfait médical public est un packaging d'ETP.)
- **Mécanique d'entrée dissociée direct / marque blanche (décidé 2026-08-03)** :
  - **En direct** (médical, support & helpdesk client final) → **1er mois à −50 %**, mise en
    service offerte, pas de dépôt (§7).
  - **En marque blanche** → **dépôt d'activation imputable** (§3.a) + **contreparties de
    risque** (§3.b) ; **plus de remise sur le prix de gros**. On ne remise pas un acheteur
    qui revend : la remise gonfle sa marge du mois, elle ne l'aide pas à gagner son client final.
- **SaaS-first** : aucun encaissement maison. Outil de facturation à trancher (§6).

---

## 1. Médical — télésecrétariat (priorité 2) — **GRILLE PUBLIQUE**

Facturation au **forfait mensuel** selon le volume d'appels. Dépassement = bascule
au palier supérieur, **jamais de surfacturation à l'appel**.

| Forfait | Volume inclus | Prix mensuel |
|---|---|---|
| **Essentiel** | jusqu'à ~250 appels/mois | **350 €** |
| **Confort** | jusqu'à ~500 appels/mois | **590 €** |
| **Intensif** | jusqu'à ~900 appels/mois | **950 €** |
| **Sur-mesure** | > 900 appels/mois | sur devis |

- Couverture **8h-20h**, 5j/7 minimum (soir/week-end en option sur-mesure).
- Intégration **Doctolib / Maiia / Médistory / Cegedim**.
- **Prix fermes** (alignés marché FR 2025 : forfaits 300-900 €/mois temps plein — cf.
  §5). On retire la mention « indicatifs à valider ».
- **Offre de lancement** : voir §7 (1er mois à -50 %).
- **Recadrage ROI (à utiliser partout)** : 350 €/mois ≈ **16 €/jour ouvré** — moins d'une
  demi-consultation par jour ; **2 à 3 RDV récupérés** sur des appels manqués paient le
  forfait. C'est le recadrage anti-objection prix le moins cher qui existe.
  - **C'est ce recadrage qui occupe le badge du simulateur (décidé 2026-08-13)**, à la place
    du **−87 %** qui y figurait — hors doctrine (claim public −40 à −60 %) et non crédible
    (il comparait un forfait 250 appels à une secrétaire **temps plein**). Le badge affiche
    le **coût/jour ouvré** et la ligne d'appui « N RDV récupérés paient le forfait », mise à
    l'échelle du forfait : Essentiel **2 à 3** · Confort **4 à 6** · Intensif **6 à 9**.
    Valeur implicite d'un RDV récupéré ≈ **117-175 €** (ancre : « 350 € = 2 à 3 RDV »).
  - ⚠️ **Ne jamais diviser en public au-delà du jour.** 350 € ÷ 250 appels = **1,40 €/appel**,
    soit exactement le haut de la grille de gros marque blanche (§1.b) : un prospect qui
    pousse la division atterrit sur ton prix de revente et se replace mentalement dans une
    logique à l'acte, écartée en §0. On divise **une fois**, par jour, puis on bascule
    aussitôt sur le ROI.

### 1.a Options d'amplitude — add-ons nommés (décidé 2026-06-12)

L'amplitude étendue n'est plus diluée dans le « sur-mesure » : elle devient des **options
nommées et pricées**, cumulables avec n'importe quel forfait. Trois effets : panier moyen
en hausse, grille d'entrée intacte (le 350 € ne bouge pas), et un « give » de négociation
offrable sans toucher au prix du forfait.

| Option | Couverture ajoutée | Prix |
|---|---|---|
| **Samedi matin** | 8h-13h le samedi | **+90 €/mois** |
| **Soirée étendue** | 20h-22h en semaine | +120 €/mois |
| **Samedi complet** | 8h-18h le samedi | +150 €/mois |

- Créneaux mutualisés entre comptes → coût marginal faible, marge préservée.
- **Levier de closing** : « extension samedi matin offerte 3 mois » coûte ~270 € et peut
  débloquer une signature — toujours préférer **offrir une option** plutôt que remiser le
  forfait (le prix de référence reste intact).

### 1.b Médical — marque blanche télésec FR (revente) — **INTERNE, jamais public**

> Prix de gros pour les télésecrétariats français qui sous-traitent leur débordement
> (cible GTM n°1). Tarification **à l'appel traité, par créneau** (décidé 2026-06-12) :
> on vend précisément les créneaux que le partenaire ne peut pas rentabiliser en France —
> c'est là que sa douleur est maximale et notre prix peut monter. Un tarif à plat
> laisserait de la valeur sur la table.

| Créneau | Prix de gros / appel traité |
|---|---|
| Jour semaine (8h-20h) — débordement & pics | **0,90 - 1,10 €** |
| Soir (20h-22h) & samedi | **1,20 - 1,40 €** |
| Capacité réservée sur pics annoncés (rentrée, épidémies) | base créneau **+15-20 %** (engagement de volume) |

- Remplace l'ancienne référence à plat « 0,90-1,40 € » (`FINANCE-PREVISIONNEL.md §3`) :
  mêmes bornes, mais le haut de fourchette est **structuré** (créneaux pénibles) au lieu
  d'être négocié.
- **Plancher inchangé** : jamais sous coût chargé agent + ~20 %.
- Jamais de chiffre en cold email ; grille remise **au cadrage** uniquement.

### 1.c Mise en service — affichée, puis offerte (décidé 2026-06-12)

L'onboarding (2-3 semaines : intégration Doctolib/Maiia, formation aux consignes du
cabinet, paramétrage) était invisible et gratuit. Désormais **affiché à sa valeur sur
chaque devis** :

> **Mise en service : 490 € — offerte.**

- Matérialise la value stack (le client voit ce qu'il ne paie pas).
- Justifie le refus de l'essai gratuit (un onboarding a un coût réel).
- Crée un « give » de closing à coût nul.
- **Toujours offerte en direct** (la facturer contredirait le « sans engagement ») : c'est un
  affichage de valeur, pas une ligne de revenu. Vaut aussi pour Support N1 / Helpdesk
  **en direct** (afficher « cadrage & mise en place : offerts » sur les propositions).
- ⚠️ **Ne vaut pas en marque blanche** (précision 2026-08-03) : la mise en service y reste
  **affichée à 0 €**, mais l'activation est couverte par un **dépôt imputable** (§3.a). La
  règle « ne jamais facturer la mise en service » n'est pas contredite — un dépôt imputable
  n'est **pas** des frais : il est déduit des premières factures et ne coûte rien au
  partenaire qui va au bout.

---

## 2. Médical — pas de palier d'entrée bas (décision)

Un forfait « Starter » < 350 € a été écarté pour l'instant : marge trop fine vs coût
de setup, et risque de tirer le positionnement vers le bas. Les très petits cabinets
sont adressés par l'offre de lancement (-50 % le 1er mois) plutôt qu'un prix plancher.

---

## 3. Support N1 SaaS & Helpdesk IT (priorité 1) — **INTERNE**

> Ne pas publier. Deux GTM : **en direct** (client final) ou **en marque blanche**
> (sous-traitant d'un acteur établi). Modèle **ETP dédié** en marque blanche.

**Modèles de tarification retenus (par ordre de préférence)**
1. **ETP par position** (seat dédié) — modèle principal.
2. **À l'heure** — périmètres variables / débordement.
3. **À l'interaction** (par ticket) — volumes mesurables.

**Tarif ETP par position (référence interne, €/mois/ETP)**

| Segment | En direct | En marque blanche (sous-traitant)* |
|---|---|---|
| Support N1 SaaS | 1 900 - 2 400 € | 1 350 - 1 700 € |
| Helpdesk IT N1 (ITIL) | 2 200 - 2 800 € | 1 550 - 2 000 € |

\* Le donneur d'ordre établi prend ~25-35 % de marge : on capte moins par ETP, mais le
coût d'acquisition est ~nul et le volume est apporté. **Plancher absolu** : jamais sous
le coût marginal agent + ~20 %, soit **840 €/ETP** (`FINANCE-PREVISIONNEL.md §2/§3` :
coût marginal 700 €/mois au fee freelance de 3 250 000 Ar).

> ⚠️ **Correction 2026-07-29** : ce plancher était annoncé à **540 €** ci-dessous — valeur
> héritée du **modèle salarié v1, abandonné le 2026-06-10**. Négocier avec 540 € en tête
> permet de signer à perte. **Le plancher est 840 €.** Il est désormais codé en dur dans
> `tools/deal-build.mjs`, qui refuse de générer une proposition en dessous.

**Rate card partenaire MB — dégressif par engagement (décidé 2026-06-12)**

Remplace le « prix donné en cadrage » au cas par cas : un donneur d'ordre qui revend a
besoin de **visibilité** pour construire sa propre marge — le flou rallonge le cycle de
closing. Grille **confidentielle** (PDF remis au cadrage, sous NDA — jamais en email),
où le dégressif **achète du volume** au lieu d'être concédé en négociation :

| Engagement | Support N1 SaaS MB (€/mois/ETP) | Helpdesk IT N1 MB (€/mois/ETP) |
|---|---|---|
| 1 ETP | 1 700 € | 2 000 € |
| 3 ETP | 1 500 € | 1 750 € |
| **5+ ETP** — *sous volume ferme facturé* | 1 350 € | 1 550 € |

- Bornes identiques à la fourchette historique ci-dessus — on **structure** la fourchette,
  on ne baisse rien. **Plancher : 840 €** (coût marginal 700 € + ~20 %), cf. encadré ci-dessus.
- Aligné sur le point mort (`FINANCE-PREVISIONNEL.md §4` : **~7 ETP placés**) : le palier 5+
  est conçu pour qu'un seul donneur d'ordre type Metaline/Thelem puisse l'atteindre.
- 🔒 **Palier 5+ conditionné à un volume ferme facturé (décidé 2026-08-03)** — le prix de
  1 350 € / 1 550 € n'est accordé **que** contre un **minimum facturable de 5 positions**,
  dues **qu'elles soient consommées ou non**. En deçà de 5 positions facturées, le prix
  appliqué est celui du **palier 3 ETP** (1 500 € / 1 750 €). À défaut, le palier le moins
  margé de la grille — **~48 % de marge brute** à 1 350 € (`FINANCE-PREVISIONNEL.md §3`) —
  supporterait en plus le **risque de sous-consommation du partenaire** : il annoncerait
  5 positions pour obtenir le prix, en consommerait 3, et Salverys porterait le banc.
  Le minimum facturable remet ce risque chez celui qui le crée.
  - **Ce que ça engage vraiment** : 5 positions, ce sont **~5 à 7 semaines** entre la
    signature et la première facture (recrutement freelance 2-4 sem. + formation 2-3 sem.,
    `FINANCE-PREVISIONNEL.md §5`) et **~3 500 €/mois de fees engagés** avant le premier euro
    encaissé. La contrainte n'est pas un plafond d'effectif — le modèle 100 % freelance est
    élastique (effectif M12 : 8 / 11-12 / 16-18 selon scénario) — c'est la **trésorerie**
    (creux 35-45 k€ vers M+7-8, `FINANCE §6`) et le **délai de montée en charge**.
  - Formulation partenaire : « le palier 5+ est un **prix de volume engagé** — il s'achète
    avec un volume ferme, pas avec une intention. »

### 3.a Dépôt d'activation — marque blanche uniquement (décidé 2026-08-03)

> **Dépôt de 900 € par position, plafonné à 2 700 €**, encaissé **à la signature** et
> **entièrement imputable** : déduit des **trois premières factures** à raison de
> **300 €/position/mois**. Le partenaire qui va au bout ne paie **rien de plus**.

- **Acquis à Salverys** si le partenaire annule **après le démarrage de la mise en service**
  (recrutement engagé, formation lancée). Avant ce démarrage, il est intégralement restitué.
- **Pourquoi un dépôt imputable et non des frais fermes** :
  - **Coût nul** pour le partenaire qui va au bout ⇒ aucune friction sur le prix total face
    à un acheteur professionnel à qui on n'a **aucune référence** à opposer.
  - **Couvre le coût réel** s'il s'arrête : l'onboarding d'un deal MB coûte ~**1 600 €**
    (socle partenaire ~400 € + ~400 €/position) — `AUDIT-ESPACE-CLIENT.md §9.2`.
  - **Filtre d'intention majeur** : qui refuse 900 € imputables ne signera pas. On le sait
    en 48 h au lieu de 3 semaines de cadrage.
  - **Encaissement à J0 au lieu de J+30** : attaque directement le creux de trésorerie
    (`FINANCE-PREVISIONNEL.md §6`, levier « acompte au cadrage MB » — désormais acté).
- **Jamais en direct** : le médical et le support/helpdesk client final gardent
  « mise en service offerte, 1er mois à −50 %, sans dépôt » (§7).

### 3.b Fin du mois pilote −50 % en marque blanche (décidé 2026-08-03)

**Le mois pilote à −50 % est supprimé en marque blanche.** Il reste en vigueur **en direct**
(médical §7, support & helpdesk client final).

**Pourquoi** (chiffrage complet : `AUDIT-ESPACE-CLIENT.md §9.2`) — sur un deal type de
3 positions helpdesk : la remise consentie vaut **~2 625 €** pour un onboarding réel de
**~1 600 €**. Elle **coûte donc plus cher que ce qu'elle compense**, et le mois pilote sort
à **≈ −1 075 €**. Surtout : en MB, une remise sur le **prix de gros** améliore la **marge du
mois** du partenaire — elle ne l'aide **pas à gagner son client final**. C'est de la valeur
jetée sur un acheteur qui revend.

**Ce qui la remplace — trois contreparties de risque, pas de prix :**

| Contrepartie | Ce qu'elle donne au partenaire | Coût pour Salverys |
|---|---|---|
| **Sortie à 30 jours** pendant les 3 premiers mois (au lieu du préavis de 60 j) | Le vrai « sans risque » en MB : de la **réversibilité**, pas de la remise | Faible — le dépôt (§3.a) couvre l'onboarding |
| **Exclusivité territoire ou segment, 12 mois** | Valeur perçue forte, argument de différenciation face à ses concurrents | **0 €** aujourd'hui (aucun autre partenaire sur la zone) |
| **Appui avant-vente sous 48 h** : PCA, DPA, CV anonymisés, dispositif QA, engagement SLA écrit — **réutilisables tels quels dans SES réponses d'appels d'offres** | **Le seul give qui lui fait gagner du CA** au lieu d'en économiser — et qui rend Salverys difficile à remplacer | ~0 € marginal (documents déjà produits) |

- Le **pilote comme périmètre restreint reste** (débordement, un seul client final, lot de
  **200-400 tickets**) : c'est le **cadrage** qui limite le risque du partenaire, plus la remise.
- Les contreparties se concèdent **une à la fois**, sont **affichées** au partenaire (bloc
  « Ce que nous vous accordons » des pages de deal) et **tracées** dans
  `tools/deals/*.json` (`concessions[]`) — cf. `AUDIT-ESPACE-CLIENT.md §10`.
- **Canal de remise** : espaces partenaires protégés du site, **un par niche avec son
  propre mot de passe** (`espace-client-support.html` / `espace-client-helpdesk.html` /
  `espace-client-medical.html` pour la grille télésec §1.b — pages chiffrées, mot de
  passe donné au cadrage) ou impression « PDF de cadrage » depuis la page — procédure
  dans `ESPACE-CLIENT-CANDIDAT.md`.

- **À l'heure** : ~12-15 €/h (direct) · ~8-11 €/h (marque blanche).
- **À l'interaction** : ~2,5-4 €/ticket N1 (direct) · ~1,8-2,8 € (marque blanche).
- **Benchmark interne (coût à battre côté client) — différencié par métier (révisé
  2026-07-12)**. L'ancienne valeur unique (~38-46 k€/an appliquée aux deux métiers) est
  abandonnée : les prix ne sont pas les mêmes pour les deux métiers, un benchmark par
  poste est plus crédible.

  **Télésecrétaire médicale (CDI)** — salaire brut : 23 à 30 k€/an selon l'expérience et
  la région. Coût employeur total (charges patronales + congés + mutuelle + absences +
  gestion RH) : **33 à 42 k€/an**, soit environ **2 750 à 3 500 €/mois**. Si le client
  passe par une société spécialisée de télésecrétariat médical en France, le coût réel
  est souvent bien supérieur (marge du prestataire incluse).

  **Technicien support IT N1 (CDI)** — salaire brut : 26 à 34 k€/an. Coût employeur
  complet : **38 à 50 k€/an**, soit environ **3 200 à 4 200 €/mois**. Dans les grandes
  ESN d'Île-de-France, le coût dépasse facilement 50 k€/an une fois intégrés : congés,
  management, formation, turnover, matériel, licences, locaux.

  **Présentation retenue pour Salverys :**

  | Poste | Coût complet interne France | Objectif Salverys |
  |---|---|---|
  | Télésecrétaire médicale | **33-42 k€/an** (~2 750-3 500 €/mois) | **≈ -40 % à -60 %** |
  | Support IT N1 | **38-50 k€/an** (~3 200-4 200 €/mois) | **≈ -40 % à -60 %** |

  **Le vrai concurrent n'est pas le seul coût salarial mais le coût complet d'un ETP
  interne**, que les décideurs comparent réellement : salaire + charges, congés et
  absences, recrutement, formation, supervision, matériel, licences, locaux, risque de
  turnover. Dans l'argumentaire commercial BPO, c'est ce **coût complet** qu'on met en
  avant — il reflète le véritable coût d'un recrutement interne.
- **Durée de contrat (révisée)** : engagement initial **3 mois**, puis **12 mois
  renouvelable** ; 24-36 mois réservés aux grands comptes avec dégressif.
  ⚠️ La copy dit « contrats 12 à 36 mois » → reformuler en « dès 3 mois, puis 12 mois ».
- **Pilote — en direct (client final)** : **1er mois à −50 %**, périmètre N1 cadré
  (**200-400 tickets**), sans engagement — même mécanique que le médical (§7). Les
  anciennes formules « pilote 15 j (~80 tickets) » et « pilote 60 jours » sont
  **abandonnées partout**.
- **Pilote — en marque blanche** : **plus de remise** (décision 2026-08-03, §3.b). Périmètre
  restreint identique (**200-400 tickets** ou un client final), **dépôt d'activation** (§3.a)
  et **contreparties de risque** (§3.b) à la place. Copy alignée :
  `OUTREACH-IT-N1-marque-blanche.md`, `OUTREACH-telesec-marque-blanche.md`,
  `ONEPAGER-PARTENAIRE-MB.md`, espaces partenaires.

### Tier « Priority » (ex-« Premium ITIL+ ») — service critique

Le niveau de service haut de gamme des simulateurs Support N1 / Helpdesk IT est
renommé **Priority** (remplace « Premium »/« Premium ITIL+ »). Ce n'est plus
« un dédié en mieux » mais un **service critique** : capacité **réservée non
mutualisée**, **traitement prioritaire systématique**, **redondance intégrée
(backup permanent)**, **supervision renforcée**, **tolérance zéro rupture**.

- **Tarification — multiplicateur dégressif** (le backup réservé s'amortit avec la taille) :

  ```
  priorityMult(n) = 1,10 + 0,90 / n      (n = nombre d'agents)
  ```
  | n | 1 | 2 | 3 | 4 | 6 | 10 |
  |---|---|---|---|---|---|----|
  | ×base | 2,00 | 1,55 | 1,40 | 1,33 | 1,25 | 1,19 |

  Un agent **seul** porte un backup quasi complet (~×2, zéro rupture même en solo) ;
  à 6+ agents le surcoût retombe vers ~×1,2 (≈ ancien plat ×1,25, d'où la continuité).
  Plancher **1,10** = priorité de traitement + supervision renforcée, jamais nul.

- **Équivalence résilience** (argument d'appel) : pour garantir `g` agents productifs
  **sans rupture**, le **Dédié** doit prévoir un sur-effectif de ≈ **1 remplaçant pour 3 agents**
  (`g + ⌈g/3⌉` personnes facturées au tarif plein), alors que **Priority** inclut le remplaçant. À garantie égale,
  **`g` Priority ≡ `g + ⌈g/3⌉` Dédiés** (ex. 2 Priority ≡ 3 Dédiés, 6 Priority ≡ 8 Dédiés).
  Sur le **coût**, Priority bascule **moins cher à partir de ~4 agents garantis** ;
  en dessous, l'avantage est ailleurs : backup **géré par nous** (zéro planning) et
  surtout **faisabilité** — à 1-2 agents, se sur-assurer en dédié revient à embaucher
  un backup à temps plein (×2), impossible à demi-doser.
- **Affichage sous 3 agents — pas d'argument d'économie (décidé 2026-08-13)**. À 1-2 agents,
  `priorityMult` vaut ×2,00 / ×1,55 : le backup permanent est littéralement **une tête de
  plus**, et l'offre coûte alors **plus cher** qu'un recrutement France. Le simulateur
  n'affiche donc **aucun pourcentage d'économie** dans cette zone — il affiche
  « **Continuité de N postes, sans en recruter N** » (N = `g + ⌈g/3⌉`). Priority **reste vendable et
  sélectionnable à 1-2 agents** : ce qui change est l'argument, pas le périmètre de l'offre.
  L'argument juste y est la **faisabilité** — en interne on ne recrute pas un demi-backup.
  > ⚠️ Corollaire à connaître en rendez-vous : **le claim public « −40 à −60 % » est un claim
  > du tier Dédié**, pas de Priority. Même au-delà de 3 agents, Priority ressort à ~10-17 %
  > d'économie faciale. Ne jamais adosser Priority au claim public.
- Source d'implémentation : `priorityMult()` dans `assets/site.js` ; arguments
  d'appel détaillés dans `ARGUMENTS-APPEL-priority.md`.

### 3.c Forfaits IT publics — nommage & amplitude (décidé 2026-08-13)

> Comble un trou de la source de vérité : les packages IT existaient **sur le site
> uniquement** (« Support Starter / Pro / Centre N1 Scale » côté SaaS, « Helpdesk
> Starter / Pro / Scale » côté helpdesk), sans arbitrage tracé, en anglais, et
> différents d'un simulateur à l'autre. Ils sont désormais définis ici.

**Nommage retenu — trio FR métier, identique dans les deux simulateurs IT :**

| Palier | Nom | Contenu type |
|---|---|---|
| 1 | **Débordement** | 1 agent mutualisé · 20 h/sem · tickets + email |
| 2 | **Poste dédié** | 1 agent 100 % dédié · 35 h/sem · escalade N2 cadrée |
| 3 | **Centre de services** | 2 agents dédiés · superviseur · couverture étendue |

- Vocabulaire des acheteurs ESN / MSP / DSI, cohérent avec l'argument n°1 de la marque
  (**français langue maternelle**) — « Starter / Pro / Scale » disait l'inverse.
- Règle au passage la **collision de vocabulaire** : « Dédié » ne désignait à la fois un
  niveau de service et un forfait que parce que le forfait s'appelait « Pro ».
- Le médical **ne change pas** (Essentiel / Confort / Intensif, §1).

**Amplitude horaire = multiplicateur de présence, pas majoration (décidé 2026-08-13).**
L'amplitude impose des **têtes supplémentaires** ; la traiter en pourcentage de confort
produisait des devis à perte. Le simulateur calcule désormais des **ETP** :

| Amplitude | Fenêtre | ETP par position | Affichage public |
|---|---|---|---|
| Bureau | ~45 h/sem | ×1,00 | **public** |
| Étendu 8h-20h | 60 h/sem | **×1,33** | **public** |
| Astreinte soir + WE | ~90 h/sem | ×2,00 | **sur devis** |
| 24·7 | 168 h/sem | **×3,73** | **sur devis** |

- Astreinte et 24·7 sont **retirés du simulateur public**. Motif : **non staffables** à
  l'effectif de démarrage (un contrat 24·7 = ~4,8 ETP, soit toute la capacité de la
  phase 1), et un panier à ~12 000 €/mois relève du devis négocié, pas du curseur.
  Le prix, lui, est sain (~−40 % vs une équipe interne 24·7 à 17,5-21 k€/mois) : c'est
  la **livrabilité** qui commande le retrait, pas la marge.
- L'exposant correctif `FR_PEN = 1,35` du benchmark France est **supprimé** : l'amplitude
  coûte des ETP **des deux côtés** de la comparaison, donc le % d'économie est désormais
  **invariant à l'amplitude** — ce qui est le comportement correct.

**Promesse de mise en route — « opérationnel en 3 à 4 semaines ».** Remplace « lancé en
10 jours » et « onboarding 5 jours », intenables face à `FINANCE-PREVISIONNEL.md §5`
(recrutement 2-4 sem. + formation 2-3 sem.). Aligne l'IT sur le médical (§1.c).

### 3.d Palier haut « Non-stop » & axes du simulateur (décidé 2026-08-14)

**Le palier 3 « Centre de services » devient « Non-stop »** (§3.c mis à jour) : le nom dit
la promesse achetée — la continuité — au lieu de décrire une organisation interne.

| Palier | Nom | Contenu type |
|---|---|---|
| 1 | **Débordement** | 1 agent mutualisé · base 20 h/sem · tickets + email |
| 2 | **Poste dédié** | agent 100 % dédié, 35 h ou 40 h/sem · escalade N2 cadrée · se vend à la position |
| 3 | **Non-stop** | **≥ 4 agents** en rotation · superviseur dédié · 6h-20h ou 3×8 · backup inclus |

- **Plancher de 4 agents, opposable.** En dessous, la rotation n'existe pas : le forfait
  n'est ni staffable ni tenable. Le simulateur **verrouille le bouton** du Non-stop sous
  4 agents et affiche la raison au survol, plutôt que d'ouvrir un devis impossible.
- **Prix : pas d'estimation, un « à partir de » sur devis** — 11 000 €/mois (helpdesk IT) ·
  10 000 €/mois (support N1 SaaS). Base : 4 agents au tarif direct (§3), dégressif volume
  inclus, plus la réserve de backup (~100 €/position, §10) et la supervision dédiée. Au-delà,
  l'amplitude (6h-20h, 3×8) se chiffre au devis — cohérent avec le retrait des paliers
  astreinte / 24·7 du simulateur public (§3.c).
- **Le backup n'est plus affiché au Poste dédié.** « Dédié » et « quelqu'un d'autre prend le
  relais » se contredisent, et le backup permanent est ce que facture le tier Priority
  (`priorityMult`, §3). Il devient exclusif au Non-stop, où il est structurel : à 4 agents en
  rotation, la continuité est mécanique. ⚠️ Reste adossé à l'arbitrage ouvert de §10
  (réserve partagée non financée à ce jour).
- **Axe « Périmètre N2 » supprimé du simulateur.** Il majorait le prix (+8 % / +22 %) pour
  une évidence : un N1 escalade toujours. La vraie variable est le **profil de l'agent**.
- **La fourchette d'estimation (±5 %) porte désormais le profil de l'agent** : bas de
  fourchette = profil formé chez nous aux process du client ; haut = profil confirmé, déjà
  rodé aux exigences de comptes européens. ⚠️ **Ouvert** : ±5 % est étroit pour un écart
  junior → confirmé ; élargir la bande (±10 %) est à trancher.
- **Revue de service mensuelle (compte rendu écrit) : incluse dans tous les forfaits**, donc
  retirée des lignes de différenciation. Le suivi commercial et les évolutions de périmètre
  sont assurés par la direction pour tous les comptes — ce n'est pas un poste qui se
  débloque au palier 3.

---

## 4. Bailleurs sociaux & grandes structures — relation client de toutes sortes (futur non déterminé) — **INTERNE**

> ⚠️ **Niche repoussée à un futur non déterminé (décision 2026-06-22)** : élargie à la
> « relation client de toutes sortes », elle n'est plus une priorité de prospection active.
> Grille conservée comme référence de chiffrage pour le jour où on l'activera.
> Ne pas publier. Positionnement = **capacité d'appoint** (débordement du CRC), pas
> remplacement. Toujours présenté en sur-devis. Deux GTM : direct ou marque blanche.

**Modèles de tarification retenus (même ordre de préférence)**
1. **ETP par position** (mutualisé sur les pics).
2. **À l'heure**.
3. **À l'interaction** (par appel traité).

**Références internes de chiffrage**

| Modèle | En direct | En marque blanche (sous-traitant)* |
|---|---|---|
| ETP / capacité réservée (€/mois) | 1 800 - 3 500 € | 1 300 - 2 500 € |
| À l'appel traité | 1,20 - 1,80 € | 0,90 - 1,40 € |

\* Marge donneur d'ordre ~25-35 %. **Plancher** : coût chargé agent + ~20 %.

- **Pilote** : sur **1 pic prévisible** (rentrée, hiver, période de charges), facturé
  au forfait selon l'enveloppe — **pas de pilote gratuit** (volumes trop lourds pour
  10 agents).
- **KPI engagés** : taux de décroché, taux d'abandon, délai moyen, NPS.

---

## 5. Benchmarks RH France (révisés & sourcés) — argumentaire coût

> Chiffres **révisés à la baisse** vs l'ancienne copy, pour rester **défendables**.
> Méthode : brut moyen marché × charges patronales (~+42 %) + poste de travail +
> formation + coût de turnover/recrutement amortis.

| Poste | Ancienne copy | **Nouveau repère** | Base de calcul |
|---|---|---|---|
| Télésecrétaire médicale (interne) | 35-45 k€/an | **33 à 42 k€/an** (~2 750-3 500 €/mois) | brut 23-30 k€/an ⇒ coût employeur total (charges + congés + mutuelle + absences + gestion RH) |
| Technicien support IT N1 (interne) | — | **38 à 50 k€/an** (~3 200-4 200 €/mois) | brut 26-34 k€/an ⇒ coût employeur complet ; ESN Île-de-France facilement > 50 k€ (management, formation, turnover, matériel, licences, locaux) |
| Téléconseiller CDI (CRC — relation client) | 48-55 k€/an | **38 à 46 k€/an** | ~21 900 €/brut/an ⇒ ~31 k€ coût employeur + encadrement + turnover ~25 %/an |

> **Benchmark différencié par métier (décision 2026-07-12)** : une valeur unique appliquée
> aux deux métiers prioritaires n'était pas crédible. On distingue désormais télésecrétaire
> (33-42 k€) et support IT N1 (38-50 k€). Le vrai concurrent n'est pas le seul coût
> salarial mais le **coût complet d'un ETP interne** (salaire + charges, congés/absences,
> recrutement, formation, supervision, matériel, licences, locaux, turnover) — c'est ce
> coût complet qu'on met en avant dans l'argumentaire BPO.

- Délai de recrutement conservé : **60 à 90 jours**.
- Turnover CRC conservé : **~25 %/an**.
- **Sources marché 2025** (à citer dans le rapport) : forfaits télésecrétariat FR
  300-900 €/mois ; salaires Indeed/Talent.com/HelloWork ; modèles BPO (per-seat/FTE,
  per-minute, per-ticket).

**Calcul du -40 à -60 % (défendable)** : un forfait Confort (590 €/mois ≈ 7,1 k€/an) face à
une secrétaire interne en coût complet (~33-42 k€/an) représente une économie bien
supérieure à 40 %. On annonce le **plancher -40 %** parce que le client compare parfois à un
**mi-temps** ou à un **appoint** (scénario où -40 % est exact et incontestable) ; face au
**coût complet d'un ETP plein**, l'économie monte vers **-60 %** — d'où la fourchette
affichée -40 à -60 %.

---

## 6. Facturation / encaissement (SaaS-first) — **décision reportée**

Comparatif documenté dans `RAPPORT-PRIX.html`. Aucun outil figé à ce stade.

| Critère | Stripe Billing + SEPA | GoCardless | Pennylane |
|---|---|---|---|
| Abonnement récurrent | ✅ natif | ✅ natif | ⚠️ via module |
| Prélèvement SEPA B2B FR | ✅ | ✅ (spécialiste) | ✅ |
| CB / self-service | ✅ fort | ⚠️ limité | ⚠️ |
| Compta/facturation FR | ⚠️ à coupler | ❌ | ✅ intégré (expert-comptable) |
| Mise en route | rapide | rapide | moyenne |

Critère de choix : si priorité **encaissement récurrent automatisé** → Stripe ou
GoCardless ; si priorité **facturation + compta FR intégrée** → Pennylane + un PSP.

---

## 7. Offre de lancement — **1er mois à -50 %** (remplace l'essai gratuit) — **EN DIRECT UNIQUEMENT**

> ⚠️ **Portée restreinte le 2026-08-03** : cette offre s'applique **au direct** (médical,
> support N1 & helpdesk client final). **En marque blanche, elle est supprimée** et
> remplacée par le dépôt d'activation (§3.a) + les trois contreparties de risque (§3.b).
> Raison : un partenaire **revend** — une remise sur son prix de gros gonfle sa marge du
> mois sans l'aider à décrocher son client final, pour un coût supérieur à l'onboarding
> qu'elle est censée compenser (~2 625 € contre ~1 600 € sur 3 positions).

**Décision : remplacer « essai 15 jours gratuit » par « 1er mois à -50 % ».**
Repli si friction commerciale trop forte en cold : « 7 jours offerts, périmètre limité »
(lève au passage l'incohérence 15j/7j).

**Pourquoi -50 % plutôt qu'un essai gratuit :**
1. **Couvre le mois d'acquisition** : le demi-tarif éponge en grande partie le coût de
   service + l'onboarding du premier mois, là où l'essai gratuit les laisse entièrement
   à perte.
2. **Protège la capacité rare** (agents + bande passante d'onboarding) — contrainte
   n°1 à 10 agents.
3. Garde un message **« sans risque »** fort (demi-tarif, sans engagement, résiliable).
4. **Filtre les non-sérieux** (engagement de paiement = signal d'intention) ⇒ meilleur
   taux de conversion qu'un essai 100 % gratuit.

### Engagement de décroché (réassurance en régime, décidée 2026-06-06)

Le mois pilote -50 % couvre la réassurance **« essayer sans risque »**. Une **seconde**
réassurance s'applique **une fois le service en régime** (intégration stabilisée), **sans
remboursement cash** :

- **Engagement** : viser **≥ 90 % d'appels patients décrochés** sur les plages couvertes
  (8h-20h), dans la limite du volume du forfait souscrit.
- **Remède si le seuil n'est pas atteint sur un mois civil** : **avoir de 20 %** sur la
  facture du mois suivant, **automatique** (le client n'a pas à le réclamer), **dans la
  limite d'un mois sur douze** (plafond annuel — protège la marge si creux saisonnier
  prolongé). **Pas de remboursement en cash** — un avoir protège la trésorerie et
  favorise la rétention.
- **Conditions de défense** (anti-abus / risque non maîtrisé) : mesuré sur les **appels
  présentés** pendant les plages couvertes ; **hors débordement** au-delà du forfait
  (un dépassement = bascule palier, pas une pénalité) ; **hors indisponibilités côté
  client** (ligne, logiciel, coupure). Périmètre et seuil **figés au cadrage**.
- **Pourquoi pas pendant le mois pilote** : durant l'onboarding (paramétrage, formation),
  le décroché n'est pas encore stabilisé — l'engagement ne court qu'à partir du **1er mois
  plein en régime**. Le pilote reste couvert par le « sans engagement ».
- **Seuil retenu : 90 %** (standard marché FR BPO médical, atteignable dès le mois 2 ;
  95 % écarté — trop ambitieux en phase de démarrage). Plafond du remède gelé à
  **20 % d'avoir, max 1 mois/12** quelle que soit l'ampleur du manqué.
- **Déclinaison par niche (même mécanique, KPI adapté, 20 % d'avoir, mêmes conditions)** :
  Support N1 SaaS → **SLA de première réponse** ; Helpdesk IT N1 → **SLA de prise en
  charge** ; Bailleurs (débordement) → **taux de décroché** sur le périmètre convenu ;
  télésec marque blanche → **taux de décroché**. Le seuil exact se fige au cadrage.

### Clients fondateurs — 5 premiers logos, tarif dégressif 3 mois (décidé 2026-06-08)

Mécanique d'amorçage inspirée du « give it away to get your first customers »
(Hormozi), **adaptée à un service à coût marginal réel** (agents payés) et à un
**contexte médical** où le gratuit peut signaler un manque de sérieux. On ne donne pas
gratuitement : on consent un **tarif de lancement renforcé contre des contreparties**.

- **Cible** : les **5 premiers cabinets** (badge « clients fondateurs »). S'applique aussi
  par niche (support N1, helpdesk) avec le KPI adapté.
- **Tarif dégressif sur 3 mois** (réf. Essentiel 350 €) :

  | Mois | Remise | Prix payé |
  |---|---|---|
  | 1 | −50 % | 175 € |
  | 2 | −30 % | 245 € |
  | 3 | −15 % | 297,50 € |
  | 4+ | plein tarif | 350 € |

  Dégressif **préféré au −50 % sec** : la montée en prix par paliers doux évite le saut
  175 €→350 € qui déclenche des résiliations ; au mois 4 le client est déjà habitué à ~297 €.
- **Coût d'acquisition** : ~**332 € de remise cumulée / fondateur** sur 3 mois, soit
  **~1 660 € pour 5 logos** + 5 témoignages + des référrals. CAC dérisoire pour amorcer
  la preuve sociale.
- **Engagement réciproque 3 mois** (≠ le « sans engagement » du mass-market, **inchangé**) :
  c'est un échange explicite, opt-in, avec contreparties — pas un lock-in caché.
- **Contreparties client** : **témoignage à 60 j** + **1 mise en relation** si satisfait.
- **Garantie décroché ≥ 90 %** incluse (équilibre l'engagement : donnant-donnant).
- **Bascule auto** en forfait standard **sans engagement** après les 3 mois.
- **Langage client** : « forfait » / « contrat de service », **jamais « abonnement »**
  (connotation télécom/grand public, dévalorise en médical). Le modèle reste de fait
  récurrent mensuel — on le pense « abonnement » en interne, on le dit « forfait » dehors.

**Garde-fou** : si le taux réponse→souscription en cold s'effondre vs l'essai gratuit,
basculer sur le repli « 7 jours offerts, périmètre limité ».

---

## 8. Récapitulatif des changements à propager

| Élément | Avant | Après |
|---|---|---|
| Essai | « 15 jours gratuit » / « 7 jours » (incohérent) | **« 1er mois à -50 % »** (repli : 7j offerts cadrés) |
| Amorçage | — | **Deal « clients fondateurs »** : 5 logos, dégressif −50/−30/−15 % sur 3 mois, engagement réciproque + témoignage 60 j + référral |
| Benchmark coût à battre (2026-07-12) | valeur unique 38-46 k€/an (2 métiers) | **différencié : télésecrétaire 33-42 k€/an (~2 750-3 500 €/mois) · support IT N1 38-50 k€/an (~3 200-4 200 €/mois)** ; argument « coût complet ETP » |
| Claim économie public | « -40 % » | **« -40 à -60 % » vs coût complet interne** |
| Téléconseiller CDI (CRC, benchmark relation client) | 48-55 k€/an | **38-46 k€/an** |
| Grille médical | « indicatifs à valider » | **prix fermes** (350/590/950 + sur-devis) |
| Contrats helpdesk | « 12 à 36 mois » | **« dès 3 mois, puis 12 mois renouvelable »** |
| Grilles bailleurs / SaaS-helpdesk | éparses en email | **centralisées ici (interne)** |
| Priorités niches (→2026-06-12) | Bailleurs n°2, SaaS/Helpdesk n°3 | SaaS/Helpdesk n°2, Bailleurs n°3 |
| Priorités niches (2026-06-22) | médical n°1 · SaaS/Helpdesk n°2 · Bailleurs n°3 | **IT (Support N1 + Helpdesk) n°1 · médical n°2 · relation client de toutes sortes (futur non déterminé) n°3** |
| Modèles de tarification | implicites | **ETP/position > à l'heure > à l'interaction** |
| Go-to-market | direct uniquement | **direct + marque blanche (sous-traitance)** |
| Affichage public | « hybride » (médical public, reste interne) | **3 paliers (§9)** : médical public ferme · support/helpdesk **direct = estimation** · **toute MB jamais publique** |
| Simulateurs IT (helpdesk/informatique) | prix **ETP marque blanche** affiché publiquement (fuite de marge) | **estimation directe (fourchette)** + « devis sous 24 h », chiffres MB retirés |
| Pilote Support/Helpdesk (2026-06-12) | « 15 j (~80 tickets) » / « 60 jours » (incohérent) | **1er mois à −50 %, 200-400 tickets, sans engagement** |
| Prix MB Support/Helpdesk (2026-06-12) | fourchette donnée « en cadrage » au cas par cas | **rate card partenaire 1/3/5+ ETP** (confidentielle, NDA, §3) |
| Télésec MB à l'appel (2026-06-12) | tarif à plat 0,90-1,40 € | **par créneau** : jour 0,90-1,10 € · soir/samedi 1,20-1,40 € · pics réservés +15-20 % (§1.b) |
| Amplitude médical (2026-06-12) | diluée dans « sur-mesure » | **add-ons nommés** : samedi matin +90 € · soirée +120 € · samedi complet +150 € (§1.a) |
| Onboarding (2026-06-12) | invisible, gratuit | **« Mise en service : 490 € — offerte »** sur chaque devis (§1.c) |
| **Activation MB (2026-08-03)** | rien encaissé avant J+30 ; onboarding ~1 600 € à fonds perdus si le partenaire s'arrête | **Dépôt d'activation imputable 900 €/position, plafond 2 700 €**, déduit des 3 premières factures (300 €/position/mois), acquis si annulation après démarrage de la mise en service (§3.a) |
| **Pilote MB (2026-08-03)** | mois pilote à **−50 %** (≈ −1 075 € sur 3 positions) | **Supprimé en MB** — remplacé par 3 contreparties de risque : sortie 30 j les 3 premiers mois · exclusivité territoire/segment 12 mois · appui avant-vente sous 48 h (§3.b). **Conservé en direct** (§7) |
| **Palier 5+ ETP (2026-08-03)** | prix le plus bas accordé sur une **intention** de volume | **Conditionné à un volume ferme facturé** : minimum 5 positions facturées, consommées ou non ; en deçà, prix du palier 3 ETP (§3) |
| **Forfaits IT (2026-08-13)** | « Support/Helpdesk Starter · Pro · Scale » — inventés côté site, en anglais, différents d'un simulateur à l'autre | **Débordement · Poste dédié · Centre de services**, identiques dans les deux simulateurs et **définis en §3.c** |
| **Amplitude horaire IT (2026-08-13)** | majoration de confort (+15 % étendu, +28 % astreinte, +45 % 24·7) ⇒ devis 24·7 **à perte** | **multiplicateur d'ETP** : étendu ×1,33 **public** · astreinte ×2,00 et 24·7 ×3,73 **sur devis** (§3.c) ; exposant `FR_PEN` supprimé |
| **Priority sous 3 agents (2026-08-13)** | badge public **« Économie : −24 % / −35 % »** — l'outil vendait le recrutement en France | **aucun % d'économie affiché** sous 3 agents ⇒ « Continuité de N postes, sans en recruter N » ; l'offre reste vendable à 1-2 agents (§3) |
| **Badge médical (2026-08-13)** | **−87 %** vs une secrétaire temps plein | **coût/jour ouvré** + « N RDV récupérés paient le forfait » (§1) |
| **Mise en route IT (2026-08-13)** | « lancé en 10 jours » / « onboarding 5 jours » | **« opérationnel en 3 à 4 semaines »** (§3.c), aligné sur `FINANCE-PREVISIONNEL.md §5` |
| **Palier 3 IT (2026-08-14)** | « Centre de services », sans effectif minimum | **« Non-stop »**, **plancher 4 agents** opposable (bouton verrouillé sous ce seuil), prix **« à partir de » sur devis** : 11 000 € helpdesk · 10 000 € support (§3.d) |
| **Backup agent (2026-08-14)** | affiché comme inclus dans le **Poste dédié** | **exclusif au Non-stop** — « dédié » et « quelqu'un d'autre prend le relais » se contredisent, et le backup permanent est ce que facture Priority (§3.d) |
| **Périmètre N2 (2026-08-14)** | axe de simulateur majorant le prix (+8 % / +22 %) | **supprimé** — un N1 escalade toujours ; la variable réelle est le **profil de l'agent**, que porte la fourchette d'estimation (§3.d) |
| **Revue de service (2026-08-14)** | « Account manager dédié » au palier 3 | **revue mensuelle avec compte rendu écrit, incluse dans tous les forfaits** — hors différenciation (§3.d) |

---

## 9. Affichage public des prix — grille de décision (synthèse)

Système de points (8 critères pondérés, max 50). Détail et interprétation dans `RAPPORT-PRIX.html §9`.

| Segment | Score /50 | % | Décision |
|---|---|---|---|
| Médical — standard | 45,5 | 91 % | **Afficher** (grille ferme + simulateur) |
| Support N1 — standard (direct) | 31 | 62 % | **Estimation** sans prix ferme + capture lead |
| Helpdesk IT — standard (direct) | 29,5 | 59 % | **Estimation** sans prix ferme + capture lead |
| Médical — marque blanche | 22,5 | 45 % | **Jamais public** |
| Support N1 — marque blanche | 17,5 | 35 % | **Jamais public** |
| Helpdesk IT — marque blanche | 17,5 | 35 % | **Jamais public** |

**3 paliers** : ≥70 % = grille ferme publique · 50-69 % = estimation (fourchette) sans prix ferme +
« devis sous 24 h » · <50 % = jamais public. **Ligne de fracture = 2 axes** : direct vs marque blanche
(toute MB privée, conflit de marge) ET produit packagé vs ETP sur-mesure.

---

## 10. Modèle d'exécution & infra (freelance / BYOD, SaaS-first)

> Réflexe : **SaaS-first**, aucune infra télécom maison. Le modèle **freelances + équipes dédiées** est
> viable sous conditions. Détail (tableaux par domaine) dans `RAPPORT-PRIX.html §10`.

- **Infra transversale** : VoIP cloud (Aircall/Ringover/3CX, pas de standard physique) ; **kit d'autonomie
  individuel par agent (solaire ou batterie) + hub de repli avec onduleur/groupe électrogène** (point dur Tana) ; gouvernance d'accès (comptes nommés, MFA,
  **zéro download**) ; RGPD art. 28 (DPA, registre) ; WFM/Erlang ; QA/double écoute ; **un agent de
  remplacement en plus par client** ; documentation écrite dès le client n°1.
  > ⚠️ **Règle non financée à ce jour** : `FINANCE-PREVISIONNEL.md §2` compte **8 agents sur 8
  > facturés à des clients** — personne n'est donc disponible pour remplacer un absent. Prévoir un
  > remplaçant par client doublerait le coût de chaque compte. **Arbitrage ouvert** : soit on paie
  > une réserve partagée (~1 personne pour 6-8 positions, ~700 €/mois), soit on retire la promesse
  > de remplacement des forfaits — cf. `AUDIT-OFFRE-PRIX-SIMULATEURS.md §I`.
- **BYOD freelance & santé** : viable façon **SECRETEL** — l'agent consulte des **SaaS HDS dans un
  navigateur** (Doctolib Pro → Ubicentrex) ; les données restent chez l'hébergeur HDS, jamais sur le
  poste ; Salverys est **sous-traitant (art. 28)**, pas hébergeur. Le VDI strict ne devient nécessaire que
  pour un **logiciel lourd installé** (ex. Médistory local).
- **Enregistrement des appels** : **disponible sur demande, zéro par défaut ; non facturé en add-on.**
  Hébergement HDS **selon la stack client** — HDS du donneur d'ordre en **marque blanche** (coût ~0) ;
  en **direct**, hébergeur HDS dédié (OVHcloud/Scaleway), **coût d'hébergement absorbé dans le forfait**
  (ordre de grandeur interne ~100-500 €/mois, **à absorber, pas un prix client**). Cadre conformité :
  `CONFORMITE-HDS-RGPD.md §2`.
- **Angle mort** : disponibilité garantie ≠ freelance pur → cadrer juridiquement et prévoir des remplaçants.
