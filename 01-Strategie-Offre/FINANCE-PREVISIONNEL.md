# FINANCE-PREVISIONNEL.md — Salverys (v3.2, mis à jour le 2026-09-15)

> 🔴 **Audit de cohérence du 2026-09-15 — trois corrections.**
> - **§7.5 — sensibilité au plafond CNaPS fausse d'un facteur 10.** Il était écrit
>   « +100 000 Ar de SME = +14 400 Ar de charges/agent » ; l'assiette étant le **plafond**
>   (8 × SME), c'est **+144 000 Ar (~29 €)**. Le risque n°5, présenté comme structurant,
>   était minimisé par 10 — et contredisait §1.a. **Bonne nouvelle au passage : le risque
>   est borné**, le coût agent sature à **767 €** au-delà d'un SME de 406 250 Ar.
> - **§6 — le burn y était resté à 755 €/mois**, valeur de la v3 (poste commercial compris),
>   contre **110-155 €** en §2.b. Facteur 5 à 7, dans la phrase qui porte la conclusion de
>   la section trésorerie.
> - **§6 — la « recommandation ferme : provisionner 30 k€ » ne portait aucun avertissement**,
>   alors que §5 déclare caduques les trajectoires dont elle tire ses creux. Le chiffre le
>   plus lourd du document reposait sur une base annulée deux sections plus haut. Il est
>   désormais **explicitement non opposable en attendant recalcul**, avec les charges M12
>   recalculées et les deux effets contraires à intégrer.
>
> 🔴 **Répercussion du licenciement du poste commercial (précisé le 2026-09-15).** Le poste
> supprimé le 2026-08-27 l'a été **par licenciement** : le risque n°1 du modèle salarié
> (rigidité de l'effectif, §7.1) **s'est donc déjà matérialisé une fois**, et il portait sur
> le seul poste qui produisait du pipeline. Trois effets dans ce document : §1 et §1.a
> requalifiés en grille de référence (le poste n'est pas « non pourvu », il est supprimé) ·
> §6 — le levier « part variable indexée sur les contrats encaissés » sort des leviers
> actifs, la règle étant conservée pour un futur recrutement · §7.1 et §8 — **le coût de
> sortie réellement payé est à relever** et doit servir de base de provision, à la place de
> la ligne « à chiffrer ».

> 🔴 **Mise à jour du 2026-08-28 — le poste de développement commercial a pris fin le
> 2026-08-27. Effectif : 0 salarié.** Effets chiffrés, répercutés dans tout le document :
> - **Burn avant premier contrat : ~710-755 € → ~65 €/mois** (§2.b). Sans salaire ni
>   Emelia (non souscrit), il ne reste que les abonnements outils. ⚠️ **Chiffre corrigé
>   en fin de journée à ~110-155 €/mois** : il omettait l'abonnement **Sales Navigator**,
>   actif et non budgété — voir l'encadré rouge du §2.b. L'ordre de grandeur ne change pas
>   la conclusion, mais Sales Navigator est le premier poste de dépense de la structure.
> - **Socle fixe après le 1er contrat : 2 114 € → ~920 €** (1 métier actif) (§2.c).
> - **Point mort : 2-6 ETP → 1-2 ETP placés** (§4), soit **~2 000 à 3 400 €** de CA mensuel.
> - **Conséquence commerciale : un seul contrat MB de 2 positions passe le point mort.**
> - **Conséquence de pilotage : il n'y a plus d'horloge de trésorerie.** La contrainte
>   n'est plus le cash, c'est le **temps d'une seule personne** (§7).
> ⚠️ Les **trajectoires 12 mois (§5)** n'ont pas été recalculées : elles supposaient une
> prospection à temps plein. Elles sont désormais **optimistes sur le rythme de signature**
> et doivent être relues comme telles (voir l'avertissement en tête de §5).
>
> **Modèle acté par la direction (2026-08-14)** : bascule du 100 % freelance vers une
> **équipe 100 % salariée**. Salaire **brut** d'un agent : **3 250 000 Ar/mois (650 €)**,
> **charges patronales en sus** (CNaPS/OSTIE, §1). **Un seul fondateur**, **sans
> rémunération** au lancement. **Aucun plafond d'effectif** : la structure se dimensionne
> sur les contrats signés. GTM prioritaire inchangé : **marque blanche d'abord**
> (cf. `CLAUDE.md`). Simulateur : `tresorerie-salverys.html` — ⚠️ **son curseur
> « Commercial » doit être mis à 0** tant qu'il n'y a pas de recrutement commercial.
> Taux : ~5 000 Ar ≈ 1 €.
>
> *v2 (100 % freelances, 8 agents + 2 managers, direction rémunérée, hub de repli, kits
> d'autonomie) remplacée. Les écarts de la v2 relevés dans `AUDIT-FINANCE-PREVISIONNEL.md`
> sont traités ici : ventilation fixe/variable (§2), point mort par palier tarifaire (§4),
> délai signature → facture intégré aux trajectoires (§5), besoin de financement par
> scénario (§6).*

---

## 1. Équipe salariée & politique de rémunération

| Rôle | Brut mensuel | Statut |
|---|---|---|
| Agent productif (facturable) | **3 250 000 Ar (650 €)** | CDI |
| Manager métier (1 médical, 1 IT) | **3 250 000 Ar (650 €)** | CDI, non facturable |
| ~~Développement commercial~~ | ~~fixe ~500 € + variable, OTE 1 000 €~~ | **Poste supprimé le 2026-08-27 — salariée licenciée, poste non pourvu depuis.** Grille conservée comme référence pour un futur recrutement : `remuneration-vololoniaina.html` |
| Direction | **0 €** | fondateur unique, non rémunéré au lancement |

**Lecture marché** : le salaire moyen d'un agent de call center à Tana est ~700 000 Ar ;
les profils expérimentés plafonnent à 900 000 Ar-2 M Ar. À 3 250 000 Ar **de brut**,
Salverys paie **~4,5 fois le marché** — bien au-delà des tout meilleurs profils
commissionnés. L'agent n'a **aucune** offre concurrente équivalente (Intelcia & co.
recrutent à 600-800 k Ar). Hypothèse **zéro turnover crédible** à ce niveau.

### 1.a Charges patronales (CNaPS / OSTIE)

| Cotisation | Taux employeur | Assiette |
|---|---|---|
| **CNaPS** (retraite, prestations familiales, risques professionnels) | **13 %** | brut, **plafonné à 8 × SME** |
| **OSTIE** (santé au travail) | **5 %** | brut, **plafonné à 8 × SME** |
| **Total employeur** | **18 %** | dans la limite du plafond |

Avec un **SME à 300 000 Ar** (fév. 2026, cf. `EVALUATION-STRATEGIQUE-2026-06.md`), le
plafond de cotisation est **8 × 300 000 = 2 400 000 Ar**.

> ⚠️ **Effet de plafond — c'est la caractéristique structurante du modèle.** Le brut de
> 3 250 000 Ar dépasse le plafond. Les charges patronales ne sont donc **pas** 18 % du
> salaire, mais **18 % de 2 400 000 Ar = 432 000 Ar ≈ 86 €**, quel que soit le brut
> au-delà du plafond. **Taux effectif : 13,3 %** sur un agent. Au-dessus de 2,4 M Ar de
> brut, la charge patronale est un **forfait de ~86 €/tête**.

| | Brut | Charges patronales | **Coût employeur** |
|---|---|---|---|
| Agent / manager | 3 250 000 Ar (650 €) | 432 000 Ar (86 €) | **3 682 000 Ar ≈ 736 €** |
| *Poste commercial — fixe seul* **(référence, poste supprimé)** | ~2 500 000 Ar (500 €) | 432 000 Ar (86 €) | *≈ 586 €* |
| *Poste commercial — à l'OTE* **(référence, poste supprimé)** | 5 000 000 Ar (1 000 €) | 432 000 Ar (86 €) | *≈ 1 086 €* |

- **Retenues salariales** (CNaPS 1 % + OSTIE 1 % + IRSA progressive) : à la charge du
  salarié, **sans impact sur le coût employeur**. Elles réduisent le net perçu — à
  vérifier lors du chiffrage d'une offre d'embauche, l'argument « 4,5× le marché » se
  compare en brut.
- **Congés payés** : 2,5 jours ouvrables/mois (30 j/an). Payés dans le salaire mensuel,
  donc **sans surcoût de paie** — mais avec un **coût de capacité** (§7).
- ⚠️ **Chiffres à confirmer avec un conseil social local** avant la première embauche :
  taux, assiette et surtout **niveau exact du plafond** conditionnent tout le modèle
  (un plafond relevé fait passer le coût agent de 736 € à ~767 €).

### 1.b Conformité — ce qui change avec le salariat

Les DPA individuels signés par chaque intervenant (ancien montage freelance) n'ont plus
lieu d'être : les engagements RGPD passent désormais par la **clause de confidentialité du
contrat de travail** + le **DPA Salverys ↔ client** (art. 28), Salverys restant
sous-traitant. **À répercuter dans `CONFORMITE-HDS-RGPD.md`.**

---

## 2. Structure de coûts mensuelle

Plus de plafond d'effectif et plus de tableau à 10 têtes : la structure se **dimensionne
sur les contrats**. Trois blocs — coût unitaire, structure actuelle, règle de montée.

### 2.a Coût unitaire par tête

| Poste | Coût employeur | + quote-part imprévus (10 %) |
|---|---|---|
| **Agent placé** (736 € + VoIP ~30 €) | **766 €** | **~843 €** |
| **Manager métier** | 736 € | ~810 € |
| *Développement commercial (poste non pourvu depuis le 2026-08-27)* | *586 € / 1 086 € à l'OTE* | *~645 € / ~1 195 €* |

### 2.b Charges de structure — situation au 2026-08-28

| Poste | Détail | €/mois |
|---|---|---|
| Salaires | **aucun** — 0 salarié, fondateur non rémunéré | **0** |
| **LinkedIn Sales Navigator** | 🔴 **abonnement actif, jamais budgété jusqu'au 2026-08-28.** Ordre de 80-100 € en mensuel, moins en annuel — **à relever sur la facture** | **~80-100** |
| Google Workspace (cold) | ~6 €/boîte · 2 domaines × 1-2 boîtes — **nombre exact de boîtes à confirmer** | ~12-24 |
| Microsoft 365 (`salverys.fr`) | 1 boîte, Business Basic/Standard | ~6-12 |
| Noms de domaine | `salverys.fr` + `salverys-bpo.fr` + `salverys-groupe.fr`, ~10-15 €/an chacun | ~3 |
| Airtable · Netlify | offres gratuites, suffisantes à ce stade | 0 |
| *Emelia* | *~40 € — **non souscrit**, reporté (décision 2026-08-28, cf. `CLAUDE.md`)* | *0* |
| *Frais de change Wise* | *~0,5-1 % de la masse transférée — **nul tant qu'il n'y a pas de salaire à verser*** | *0* |
| Divers / imprévus (10 %) | | ~10-14 |
| **Total — burn actuel** | | **≈ 110-155 €/mois** |

> 🔴 **Correction du 2026-08-28, en fin de journée.** Le chiffre de **~65 €/mois** publié
> plus haut dans ce document **omettait l'abonnement Sales Navigator**, qui est actif et
> qui est aujourd'hui — et de loin — **le premier poste de dépense de l'entreprise** : à lui
> seul, il pèse plus que tout le reste réuni. La ligne « SaaS socle ~20 € » sous-estimait
> par ailleurs GWS (facturé **par boîte**, pas par domaine).
>
> **Ce que ça ne change pas :** l'ordre de grandeur reste dérisoire face à un point mort à
> 1-2 ETP, et la conclusion tient — il n'y a pas d'horloge de trésorerie.
> **Ce que ça change :** Sales Navigator devient le seul arbitrage de dépense qui mérite
> d'être posé. Il ne se justifie que s'il est **réellement utilisé** (alertes quotidiennes,
> résolution des 42 décideurs manquants — `PLAYBOOK-SALES-NAVIGATOR.md` §11 et §13).
> Un mois sans s'en servir coûte plus cher que tout le reste de la structure.
>
> **À faire :** relever les trois factures réelles (Sales Navigator, GWS, M365) et
> remplacer les fourchettes ci-dessus par les montants exacts.

> **Ce que ça change vraiment.** À ~110-155 €/mois, **le temps ne coûte presque plus rien**. L'urgence
> commerciale n'est plus financière : elle est stratégique (occuper le terrain, apprendre
> vite). Toute décision qui achète du temps contre du cash — souscrire un outil, sous-traiter
> — doit désormais se justifier par un gain de **temps fondateur**, pas par un gain de burn.

### 2.c Règle de montée

| Déclencheur | Effet sur les charges |
|---|---|
| 1ᵉʳ contrat signé (quel que soit le métier) | + **manager métier** (810 €) |
| Chaque position ferme signée | + **843 €/mois**, à compter de **l'embauche**, soit ~1 mois **avant** la 1ʳᵉ facture |
| 2ᵉ métier activé | + **1 manager métier** (810 €) |
| Au-delà de **8 agents par manager** | + **1 manager** (810 €) |
| Recrutement d'un commercial (non planifié) | + **645 € au fixe seul**, jusqu'à **~1 195 € à l'OTE** |

**Socle fixe résultant** — c'est ce qui porte le point mort (§4) :

| Configuration | Commercial | Manager(s) | SaaS | Imprévus | **Fixe** |
|---|---|---|---|---|---|
| **1 métier actif** (IT seul — priorité n°1) | 0 € | 736 € | 100 € | 84 € | **≈ 920 €** |
| **2 métiers actifs** (IT + médical) | 0 € | 1 472 € | 100 € | 157 € | **≈ 1 730 €** |
| *(rappel v3, avec un commercial à l'OTE — 1 métier)* | *1 086 €* | *736 €* | *100 €* | *192 €* | *≈ 2 114 €* |

> **Ce qui a disparu de la v2** : rémunération de la direction (−1 400 €), hub de repli et
> énergie (−500 €), indemnité de connexion domicile (−150 €), kits d'autonomie (capex).
> **La continuité de service reste promise** (`04-Closing/DOSSIER-AVANT-VENTE/01-PLAN-CONTINUITE.md`,
> risque R1 délestage) : le kit d'autonomie de l'agent est **réputé couvert par le salaire**,
> qui est à 4,5× le marché local précisément pour absorber énergie et connexion domicile.
> ⚠️ **Cette contrepartie doit être écrite noir sur blanc dans le PCA et dans le contrat de
> travail** — sinon une promesse remise aux partenaires en avant-vente n'a plus de
> financement identifiable.

- **Coût marginal d'un agent supplémentaire : ~766 €/mois** (843 € imprévus compris).
- vs modèle freelance v2 (~700 €/agent) : **+66 €/agent/mois**, soit +9 %. Le surcoût des
  charges patronales est **très inférieur** à ce que laisserait attendre un taux de 18 %,
  grâce au plafonnement (§1.a).
- **Le vrai basculement n'est pas le coût unitaire, c'est la rigidité** : un salarié ne se
  « désactive » pas au contrat perdu (§7).

---

## 3. Rentabilité par offre — vérification au coût salarié

Base : **coût direct d'un ETP placé = 766 €** (salaire chargé 736 € + VoIP 30 €).

| Offre | Prix | Coût direct | Marge brute |
|---|---|---|---|
| Télésec MB — **créneau jour** (0,90-1,10 €, `PRICING.md §1.b`) — ~1 800 appels ⇒ 1 620-1 980 € | 1 620-1 980 € | 766 € | **~53-61 %** |
| Télésec MB — **créneau soir/samedi** (1,20-1,40 €) ⇒ 2 160-2 520 € | 2 160-2 520 € | 766 € | **~65-70 %** |
| Support N1 SaaS — MB (paliers 9+ → 1-4) | 1 350-1 700 €/ETP | 766 € | **~43-55 %** |
| Helpdesk IT N1 — MB (paliers 9+ → 1-4) | 1 550-2 000 €/ETP | 766 € | **~51-62 %** |
| Médical direct (Confort, ~4 forfaits/agent) | 2 360 €/agent | 766 € | **~68 %** |
| Support/Helpdesk direct | 1 900-2 800 €/ETP | 766 € | **~60-73 %** |

**Verdict** : la rentabilité tient partout, mais **le palier 9+ Support (1 350 €) tombe à
43 % de marge brute** — c'est le point bas absolu de la grille, et il n'est accordé que
contre 9 positions fermes (`PRICING.md §3`), ce qui le rend largement bénéficiaire en
valeur absolue (cf. §4). **Nouveau plancher absolu : coût direct + 20 % = 766 × 1,2 ≈
920 €/ETP** (remplace les 840 € du modèle freelance ; codé en dur dans
`tools/deal-build.mjs`).

> ⚠️ **Ces marges sont des marges à saturation** : elles supposent l'agent rempli. Pendant
> la montée en charge, un agent qui sert un seul cabinet médical (590 €) est **en marge
> négative**. Les 3 à 6 premiers mois d'un métier ne ressemblent à aucune ligne de ce
> tableau.

---

## 4. Seuil de rentabilité — par palier tarifaire

Le point mort n'est pas un chiffre unique : il dépend du **prix du palier vendu**.

**Point mort = fixe ÷ (prix ETP − 843 €)**, où 843 € est le coût variable d'un agent
placé, imprévus compris (§2.a).

| Palier (`PRICING.md §3`) | Prix ETP | Contribution | **1 métier actif** (fixe 920 €) | **2 métiers** (fixe 1 730 €) |
|---|---|---|---|---|
| Helpdesk 1-4 ETP | 2 000 € | 1 157 € | **1 ETP** | 2 ETP |
| Helpdesk 5-8 ETP | 1 750 € | 907 € | **2 ETP** | 2 ETP |
| Support 1-4 ETP | 1 700 € | 857 € | **2 ETP** | 3 ETP |
| Helpdesk 9+ ETP | 1 550 € | 707 € | **2 ETP** | 3 ETP |
| Support 5-8 ETP | 1 500 € | 657 € | **2 ETP** | 3 ETP |
| Support 9+ ETP | 1 350 € | 507 € | **2 ETP** | 4 ETP |

**Point mort réel : 1 à 2 ETP placés** (1 métier actif), soit **~2 000 à 3 400 € de CA
mensuel** ; 2 à 4 ETP si les deux métiers tournent. Le socle fixe est passé de ~3 830 €
(v2, modèle freelance) à 2 114 € (v3) puis à **920 €** depuis la fin du poste commercial.

**Trois lectures commerciales immédiates :**

1. **Un seul contrat MB de 2 positions au palier standard passe le point mort** — et même
   **1 seule position** sur le palier helpdesk 1-4 ETP. C'est le message à tenir en
   prospection MB : on n'a plus besoin d'un donneur d'ordre à 3-4 positions pour être à
   l'équilibre, ce qui **ouvre les MSP régionaux de 11-50 personnes** (contrats de 1-2 ETP)
   comme cibles rentables à part entière, et non plus comme lots de consolation.
2. **Corollaire à ne pas oublier :** le point mort baisse parce qu'il n'y a plus personne
   pour vendre. On a échangé du coût fixe contre de la capacité commerciale — le risque a
   changé de nature, il n'a pas disparu (§7).
3. **La nouvelle structure de paliers sécurise le bas de grille.** Le prix plancher
   (1 350 €) n'est plus accordé à 5 positions mais à **9**. Au coût salarié, 5 positions à
   1 350 € dégageraient **+421 €/mois** — soit +6 %, une marge de manœuvre nulle : une
   absence non couverte ou un mois de sous-consommation suffit à la faire basculer. À 9
   positions, le même tarif dégage **+2 450 €/mois**. Détail et comparaison des bases de
   coûts : `AUDIT-FINANCE-PREVISIONNEL.md §A`.

---

## 5. Trajectoire 12 mois — 3 scénarios (MB-first)

> ⚠️ **À relire avec le correctif du 2026-08-28.** Ces trois scénarios ont été construits
> avec **une commerciale à temps plein**. Depuis le 2026-08-27, la prospection repose sur le
> fondateur seul, qui porte aussi le juridique, le recrutement, l'infra et la delivery.
> **Les rythmes de placement ci-dessous sont donc optimistes** — le scénario médian
> (+1 ETP/mois dès M4) suppose une cadence commerciale qui n'existe plus.
> Les **charges** et le **point mort**, eux, sont désormais plus favorables (§2.b, §4) :
> le creux de trésorerie se creuse moins vite. À recalculer quand deux mois d'activité
> réelle en solo auront donné un vrai taux de transformation.

**Hypothèses communes** : prospection dès M1 (séquences prêtes) · **délai signature →
1ʳᵉ facture intégré** : recrutement 2-4 sem. + formation 2-3 sem. ⇒ l'agent est **payé à
partir de M+1** et **facturé à partir de M+2** · encaissement à 30 j · dépôt d'activation
MB encaissé à la signature (900 €/position, imputé 300 €/position sur 3 factures,
`PRICING.md §3.a`) · offre de lancement −50 % le 1ᵉʳ mois **en direct** uniquement ·
1 manager par métier actif, +1 au-delà de 8 agents.

| | Prudent | Médian | Ambitieux |
|---|---|---|---|
| Placements ETP MB | +1/trimestre dès M4 | +1/mois dès M4 | +2/mois dès M3 |
| Prix ETP MB retenu | 1 700 € (palier 1-4) | 1 600 € (mix 1-4 / 5-8) | 1 500 € (palier 5-8) |
| Direct (médical) | 0 la 1ʳᵉ année | +1 client/mois dès M6 | +2/mois dès M5 |
| **CA mensuel M12** | **5 100 €** | **13 900 €** | **30 500 €** |
| **Charges mensuelles M12** | 4 640 € | 11 350 € | 22 270 € |
| **Point mort (CA ≥ charges)** | **M12** | **M10** | **M8** |
| **Creux de trésorerie** | −18,0 k€ (M15) | −23,0 k€ (M11) | −22,5 k€ (M10) |
| Effectif M12 | 3 agents + 1 manager + 1 | 10 agents + 2 managers + 1 | 22 agents + 3 managers + 1 |

**Les trois scénarios passent le point mort dans l'année.** C'est le changement majeur vs
la v2, où le scénario prudent ne l'atteignait pas avant M+18 : un socle fixe divisé par
~1,8 et une direction non rémunérée déplacent le point mort de 6 mois.

⚠️ **La contrainte n'est plus la trésorerie, c'est le recrutement.** Le scénario ambitieux
exige d'embaucher et former **~2 agents/mois pendant 10 mois** (22 agents à M12), avec un
seul manager pour 8 agents. `PRICING.md §3.e` fixe le seuil pratique à **un remplacement
long à la fois par métier** : au-delà, la supervision se dégrade et la qualité avec elle.
C'est là qu'il faut mettre le garde-fou, pas sur le cash.

---

## 6. Trésorerie & BFR

- Encaissement à 30 j ⇒ BFR ≈ 1 mois de CA en permanence dehors, **plus** ~1 mois de
  salaires payés avant la première facture de chaque position.
- **Besoin de financement, par scénario** (creux + coussin 30 %) :

  | Scénario | Creux max | Mois du creux | **Capital recommandé** |
  |---|---|---|---|
  | Prudent | −18,0 k€ | M15 | **~23 k€** |
  | Médian | −23,0 k€ | M11 | **~30 k€** |
  | Ambitieux | −22,5 k€ | M10 | **~29 k€** |

  > **Le besoin de financement est quasi indépendant du scénario : ~25-30 k€.** Croître
  > plus vite fait rentrer le CA plus tôt, mais fait aussi payer plus de salaires avant
  > facturation — les deux effets se compensent presque exactement. (v2 : 50-60 k€, et
  > insuffisant dans le scénario prudent.)

  > 🔴 **Ce chiffre n'est plus opposable en l'état — recalcul requis avant toute citation
  > (2026-09-15).** Les creux ci-dessus sont ceux des trajectoires de §5, que §5 déclare
  > lui-même caduques depuis le 2026-08-28. Cette section en tirait une *« recommandation
  > ferme : provisionner 30 k€ »* **sans porter l'avertissement** — le chiffre le plus lourd
  > du document, celui qu'on présente à un prêteur ou à un associé, reposait sur une base
  > annulée deux sections plus haut.
  >
  > **Ce qui a changé et n'est pas répercuté** : les trois scénarios portent chacun un poste
  > de développement commercial à l'OTE (**~1 195 €/mois**), qui n'existe plus depuis le
  > 2026-08-27.
  >
  > | Scénario | Charges M12 affichées (§5) | Recalculées sans ce poste | CA M12 − charges réelles |
  > |---|---|---|---|
  > | Prudent | 4 640 € | **3 439 €** | **+1 661 €/mois** |
  > | Médian | 11 350 € | **10 150 €** | **+3 750 €/mois** |
  > | Ambitieux | 22 270 € | **21 076 €** | **+9 424 €/mois** |
  >
  > **Ordre de grandeur de l'écart sur le cumulé** : ~1 200 €/mois sur toute la période
  > précédant le creux (M10 à M15 selon le scénario) représente **12 à 18 k€**, soit le même
  > ordre de grandeur que le creux lui-même. Autrement dit : **les 30 k€ sont probablement
  > très surestimés**, mais personne ne peut dire de combien sans refaire le modèle mois par
  > mois — et c'est exactement pour ça qu'on ne peut pas continuer à citer le chiffre.
  >
  > ⚠️ **Deux effets jouent en sens inverse** et doivent entrer ensemble dans le recalcul :
  > les **charges baissent** (ci-dessus, et socle fixe 2 114 € ⇒ 920 €), mais le **CA rentre
  > plus tard** — la prospection repose sur le fondateur seul (§7, risque n°0), donc les
  > rythmes de placement de §5 sont optimistes. Un creux moins profond mais **plus long**
  > reste possible. Ne pas conclure « on n'a plus besoin de financement » sur la seule
  > lecture des charges.
  >
  > **En attendant le recalcul** : citer une **fourchette explicitement provisoire**, jamais
  > une recommandation ferme. Le recalcul devient possible dès que deux mois d'activité
  > réelle en solo auront donné un vrai taux de transformation (§5).

- **Le creux ne se creuse plus en cas de lenteur commerciale.** En v2, un démarrage lent
  brûlait ~6 900 €/mois d'équipe payée sans contrat. Ici le burn de départ est de
  **110-155 €/mois** tant qu'aucun contrat n'est signé (§2.b) : le coût de l'attente n'est
  pas « marginal », il est **quasi nul**. C'est l'effet principal de la bascule.
  > 🔴 **Corrigé le 2026-09-15 — il était écrit « 755 €/mois ».** Valeur de la v3, poste
  > commercial compris. Depuis la fin de ce poste le 2026-08-27, le burn est de
  > **110-155 €/mois** (§2.b et encadré de tête), soit **5 à 7 fois moins**. Le bon chiffre
  > renforce la conclusion de cette section au lieu de l'affaiblir.
- Leviers anti-creux (inchangés, tous actés) :
  - ✅ **Dépôt d'activation MB** — **900 €/position** (plafond global supprimé le
    2026-09-14, `PRICING.md §3.a`), encaissé **à la
    signature**, déduit des 3 premières factures (300 €/position/mois), `PRICING.md §3.a`.
    Effet trésorerie : encaissement **à J0 au lieu de J+30**, et **coût d'onboarding
    couvert (~1 600 €)** si le partenaire s'arrête. Le dépôt tombe désormais **~2 mois
    avant** la première facture (§5), ce qui le rend encore plus utile qu'en v2.
  - ✅ **Fin de la remise de lancement en MB** (`PRICING.md §3.b`) : le mois pilote à −50 %
    coûtait **~2 625 €** sur un deal de 3 positions, pour un onboarding réel de ~1 600 €, et
    sortait le mois d'entrée à **≈ −1 075 €**. Supprimée, ce mois d'entrée ressort à
    **≈ +1 550 €** (5 250 € encaissés − 3 × 766 € de salaires chargés − 1 600 € d'onboarding).
    **Conservée en direct** (`PRICING.md §7`).
  - ✅ **Tarif conditionné à un volume ferme facturable** sur **tous** les paliers
    (`PRICING.md §3`) : supprime le risque de banc payé, désormais bien plus coûteux
    qu'en freelance (§7).
  - Prélèvement SEPA dès le 1er mois.
  - ⚠️ *Le levier « part variable indexée sur les contrats encaissés, pas signés » a été
    retiré de cette liste le 2026-09-15 : il portait sur le poste commercial, supprimé le
    2026-08-27. **La règle reste bonne et doit être reprise telle quelle** au prochain
    recrutement commercial — c'est ce qui évite de payer une commission sur un contrat qui
    ne sera jamais encaissé.*
- Simulation interactive : `tresorerie-salverys.html`.

---

## 7. Risques financiers spécifiques au modèle salarié

> 🔴 **Risque n°0, ajouté le 2026-08-28 — capacité commerciale nulle en propre.**
> Depuis la fin du poste de développement commercial, **la totalité de la prospection repose
> sur le fondateur**, qui porte déjà le juridique, le recrutement, l'infrastructure et la
> future delivery. Ce n'est pas un risque de coût — le burn tombe à ~110-155 €/mois (§2.b) — c'est
> un **risque de calendrier** : chaque semaine sans contact décideur repousse le premier
> contrat, et donc l'embauche du premier manager, et donc la delivery.
> **Ce qui rend ce risque tenable :** avec ~110-155 €/mois de burn, on peut absorber un
> allongement de plusieurs mois sans mettre la structure en danger. **Ce qui le rend
> dangereux :** au premier contrat signé, le fondateur devra basculer sur l'onboarding et la
> delivery — et la prospection s'arrêtera net, créant un trou de pipeline juste après la
> première signature. **Mitigation à décider avant le 1er contrat, pas après** : soit le
> premier manager métier recruté prend une part de la relation client, soit un commercial
> est ré-embauché sur le variable dès que le CA le finance (le poste coûte 645 € au fixe
> seul, soit moins d'un ETP placé).

1. 🔴 **Rigidité de l'effectif — le risque n°1 du modèle salarié.** En freelance, un agent
   non staffé se désactivait. Un salarié ne se désactive pas : il faut un motif, un
   **préavis** et une **indemnité de licenciement** (droit du travail malgache). Un contrat
   perdu ne coûte plus 766 €/mois pendant qu'on cherche à le remplacer — il coûte cela
   **plus** le coût de sortie. **Mitigation** : n'embaucher qu'**après** signature d'un
   volume ferme facturable (§2.c), utiliser la **période d'essai** comme fenêtre
   d'ajustement, et provisionner les indemnités dès 6 mois d'ancienneté.

   > ⚠️ **Ce risque s'est déjà matérialisé une fois — il n'est plus théorique (2026-09-15).**
   > La suppression du poste de développement commercial le 2026-08-27 s'est faite par
   > **licenciement**, donc avec préavis et, selon l'ancienneté, indemnité. C'est le premier
   > coût de sortie réellement supporté par la structure, et il portait sur le **seul** poste
   > qui produisait du pipeline.
   >
   > **Deux enseignements à inscrire au modèle, pas seulement à la mémoire :**
   > 1. **Le coût de sortie réel est à relever** (préavis versé + indemnité + solde de tout
   >    compte) et à reporter en §8, à la place de la ligne « à chiffrer ». C'est la seule
   >    donnée observée dont on dispose pour calibrer la provision des futures embauches —
   >    **⚠️ montant à renseigner, il n'est pas dans ce document.**
   > 2. **La séquence « embaucher puis chercher les contrats » a été validée par l'échec.**
   >    La mitigation ci-dessus (n'embaucher qu'après un volume ferme facturable) n'est pas
   >    une précaution de principe : c'est la leçon de ce licenciement. Elle vaut d'abord
   >    pour le prochain recrutement commercial, qui se fera **sur variable dès que le CA le
   >    finance** (§7, risque n°0), pas sur un fixe payé avant le premier contrat.
2. **Coût de capacité des absences** : 5 semaines de congés + ~3 % de maladie ≈ **13 %**
   d'absence (`PRICING.md §3.e`). Un salarié est payé 12 mois et produit ~10,4 mois. La
   doctrine de continuité fait porter ce remplacement par le **manager métier**, déjà
   financé et non facturable — donc **pas de surcoût direct**, mais un **plafond** :
   à 13 % d'absence, 8 agents génèrent ~1 ETP d'absence à couvrir, soit tout le temps
   disponible d'un manager. **Au-delà de ~8 agents par métier, prévoir un agent volant
   (+766 €/mois)** plutôt que de dégrader la supervision.
3. **Concentration donneurs d'ordre** : en MB, 1-2 contrats peuvent porter 60-80 % du CA.
   Aggravé par le point 1 — perdre un donneur d'ordre en salariat coûte plus cher qu'en
   freelance. Exiger préavis 60-90 j, viser 3+ donneurs d'ordre dès M9.
4. **Droit du travail & paie** : déclarations CNaPS/OSTIE mensuelles, IRSA, registre du
   personnel, médecine du travail. Provisionner un **conseil social local** (~500 €
   one-shot pour le cadrage des contrats) + une **prestation de paie** récurrente.
5. **Plafond de cotisation** : tout le modèle repose sur un plafond CNaPS/OSTIE à
   8 × SME = 2,4 M Ar (§1.a). **Une revalorisation du SME renchérit mécaniquement chaque
   tête** — **+100 000 Ar de SME = +144 000 Ar de charges/agent/mois (~29 €)**.

   > 🔴 **Corrigé le 2026-09-15 — il était écrit « +14 400 Ar », soit 10 fois moins.**
   > L'assiette est le **plafond**, pas le SME : +100 000 Ar de SME relève le plafond de
   > **800 000 Ar** (8 ×), et les charges de `18 % × 800 000 =` **144 000 Ar**.
   >
   > | SME | Plafond (8 × SME) | Assiette retenue | Charges patronales | Coût agent |
   > |---|---|---|---|---|
   > | 300 000 Ar *(aujourd'hui)* | 2 400 000 Ar | 2 400 000 Ar | 432 000 Ar (86 €) | **736 €** |
   > | 400 000 Ar | 3 200 000 Ar | 3 200 000 Ar | 576 000 Ar (115 €) | **765 €** *(+4,0 %)* |
   > | ≥ 406 250 Ar | ≥ 3 250 000 Ar | **brut 3 250 000 Ar** | 585 000 Ar (117 €) | **767 €** *(plafond de sensibilité)* |
   >
   > **Le risque est donc borné** : au-delà d'un SME de **406 250 Ar**, le plafond dépasse
   > le brut, l'assiette devient le brut lui-même et le coût agent sature à **767 €** — quoi
   > qu'il arrive ensuite au SME. C'est ce que §1.a écrivait déjà (« un plafond relevé fait
   > passer le coût agent de 736 € à ~767 € ») : les deux sections se contredisaient, puisque
   > avec +14 400 Ar il aurait fallu un SME de ~1,37 M Ar pour y arriver.
   >
   > **Ce que ça change** : le poste reste à surveiller, mais le pire cas est **+31 €/agent**
   > (+4,2 %), pas un risque ouvert. Un plancher à 920 €/ETP l'absorbe sans réviser la grille.
6. **Change Ar/€ et inflation locale** : salaires en ariary, revenus en euros. Le risque
   réel est une **appréciation de l'ariary**, qui renchérit la masse salariale en euros ;
   une dépréciation, elle, l'allège. Marges de couverture réelles : **43 % (palier 9+
   Support)** à **73 % (direct)** — et non 65-80 % comme l'annonçait la v2. Le palier
   Support 9+ est celui qui absorbe le moins.
7. **Absence d'indexation** : le brut de 3 250 000 Ar est figé alors que l'inflation locale
   court. Le « 4,5× le marché » est le **seul** appui de l'hypothèse zéro turnover
   (§1) — prévoir une **revalorisation annuelle de 5-8 %** de la masse salariale au budget,
   sinon l'hypothèse n'est vraie que la première année.
8. **Avoirs qualité** (engagement décroché/SLA 20 %, max 1/12) : au pire ~1,7 % du CA
   annuel d'un contrat — négligeable.

---

## 8. Postes à chiffrer (non encore budgétés)

Reste du périmètre non couvert par la ligne « divers/imprévus » et à intégrer dès que les
montants sont connus :

| Poste | Nature | Statut |
|---|---|---|
| Impôt sur les sociétés (entité malgache) | % du résultat | à chiffrer |
| Prestation de paie / expert-comptable | récurrent | à chiffrer |
| Frais de change et transfert EUR→MGA (Wise Business) | ~0,5-1 % de la masse transférée | ~10-30 €/mois aujourd'hui |
| Assurance RC professionnelle | récurrent — **souvent exigée en appel d'offres MB** | à chiffrer |
| Conseil social local (cadrage des contrats de travail) | ~500 € one-shot | §7.4 |
| Onboarding d'un deal MB | **~1 600 €** par deal (`AUDIT-ESPACE-CLIENT.md §9.2`) | variable, couvert par le dépôt §3.a |
| Remise « clients fondateurs » | ~1 660 € pour 5 logos (`PRICING.md §7`) | variable |
| Hébergement HDS en **direct** | 100-500 €/mois (`PRICING.md §10`) | déclenché au 1ᵉʳ client médical direct |
| Provision indemnités de licenciement | à partir de 6 mois d'ancienneté | §7.1 — ⚠️ **un cas réel est déjà survenu** (poste commercial, 2026-08-27) : **relever le coût de sortie effectivement payé** et l'utiliser comme base de provision, au lieu de laisser cette ligne « à chiffrer » |

---

*v2 (100 % freelances, 3 250 000 Ar de fee, 8 agents + 2 managers, direction rémunérée,
hub de repli, kits d'autonomie) remplacée le 2026-08-14 par décision direction : équipe
100 % salariée, brut 3 250 000 Ar + charges patronales, fondateur unique non rémunéré,
effectif dimensionné sur les contrats. Sources coûts locaux : lagazette-madagascar.com,
lexpress.mg, newsmada.com — cf. `EVALUATION-STRATEGIQUE-2026-06.md`. Taux et plafonds
CNaPS/OSTIE à confirmer avec un conseil social local (§1.a).*
