# CAC-LTV.md — Coût d'acquisition vs valeur vie client (Salverys)

> Établi le **2026-08-09**. Adossé à `FINANCE-PREVISIONNEL.md` (v2, coûts et scénarios),
> `PRICING.md` (source de vérité prix), `tools/deals/exemple-msp.json` (deal de référence),
> `remuneration-vololoniaina.html` (coût force de vente), `SETUP-COLD-MAILING.md` (outils).
> Simulateur interactif : **`cac-ltv-salverys.html`**.
>
> ⚠️ **Zéro client signé à date.** Aucun chiffre ci-dessous n'est mesuré — ce sont des
> hypothèses construites sur les décisions déjà actées. La valeur de ce document n'est pas
> dans les ratios, elle est dans les **seuils de décision** (§6) et dans **ce qu'il faut
> instrumenter dès le premier contrat** (§8).

---

## 0. À retenir en 30 secondes

1. **L'économie unitaire de Salverys n'est pas le problème.** Sur le deal de référence
   (helpdesk MB, 3 positions), le CAC se rembourse en **~2 mois** et le ratio LTV/CAC est
   de **11,4×** au scénario médian. Même au rythme le plus lent imaginable (1 deal/an),
   le ratio reste **>3×**.
2. **Donc LTV/CAC est une métrique qui ne décide rien ici.** Elle est flatteuse par
   construction : coût de service bas (700 €/position), revenu récurrent, CAC dominé par
   un budget fixe modeste (~1 600 €/mois = **16 % des charges**). Un ratio à 11× coexiste
   parfaitement avec la faillite : à 1 deal actif, le CA annuel est de 63 k€ contre
   **121 k€ de charges**.
3. **Ce qui décide, c'est le nombre de deals et le remplissage.** Le CAC n'est pas un prix
   qu'on paie par client, c'est **un coût fixe divisé par un nombre de signatures**. Le seul
   levier qui bouge les ratios, c'est le dénominateur.
4. **Trois seuils concrets sortent du calcul** (§6) : le plancher de prix devrait être
   **~1 050 €/position et non 840 €** une fois le CAC intégré · le minimum facturable du
   palier 5+ est **vital sur Support N1** (LTV/CAC 1,8× sans lui) et seulement confortable
   sur helpdesk · le dépôt d'activation **réduit le point bas de trésorerie de 32 %** par deal.
5. **Le médical direct a une meilleure économie unitaire que la marque blanche**
   (LTV/CAC ~14×, payback 2,6 mois) mais exige **17 closings au lieu de 2-3** pour le même
   point mort. Le MB-first reste le bon arbitrage — pour la **charge commerciale**, pas pour
   la marge unitaire.

---

## 1. Le budget d'acquisition (le numérateur)

En phase de lancement, l'acquisition Salverys coûte un **forfait mensuel**, pas un montant
par client. C'est la nature du poste qui explique tout le reste de l'analyse.

| Poste | €/mois | Source |
|---|---|---|
| Business dev — OTE à la cible | 1 000 | `remuneration-vololoniaina.html` |
| Emelia (envoi + warm-up) | 99 | `tresorerie-salverys.html` |
| Boîtes cold GWS (6 × 6 €) | 36 | `SETUP-COLD-MAILING.md §6` |
| Domaines cold (3 × ~12 €/an) | 3 | `SETUP-COLD-MAILING.md §4` |
| Quote-part direction (≈ ⅓ de l'enveloppe direction — temps gérant sur prospection/closing) | 460 | `FINANCE §2` (1 400 € pour 2 fondateurs) |
| **Budget d'acquisition retenu** | **1 600 €/mois** | |

**Trois lectures importantes :**

- **C'est un petit poste** : 1 600 € sur 10 100 € de charges fixes = **16 %**. Salverys n'est
  pas une entreprise qui dépense pour acquérir, c'est une entreprise qui **paie une équipe en
  attente d'être staffée**. Le vrai coût de la lenteur commerciale n'est pas le CAC, c'est le
  **banc** (~700 €/mois par agent non staffé, `FINANCE §7`).
- **C'est un coût quasi entièrement fixe** : ~1 100 € sont dus qu'il y ait 0 ou 4 signatures
  (fixe BD + outils + direction). Seule la part variable de la rému BD suit les résultats.
- **Non inclus, à trancher** : LinkedIn Sales Navigator (~80 €/mois) si le social selling
  s'industrialise · un conseil juridique local one-shot (~500 €, `FINANCE §7.3`) qui relève
  du setup, pas de l'acquisition.

### 1.a Le tunnel qui produit le dénominateur

Le nombre de deals n'est pas un vœu : il découle mécaniquement du tunnel cold.

| Étape | Hypothèse | Volume mensuel |
|---|---|---|
| Contacts nouveaux mis en séquence | limité par la **taille de la liste qualifiée**, pas par la capacité d'envoi | 150-250 |
| Taux de réponse (séquence ciblée, niche étroite, douleur forte) | 5-8 % | 10-18 réponses |
| Réponses → RDV donneur d'ordre | ~1,5 % des contactés | **2-3 RDV/mois** |
| RDV → contrat signé (MB, cycle 1-3 mois) | 15-20 % | **3,5-7 deals/an** |

- **Objectif opérationnel qui en découle : 2 à 3 RDV donneur d'ordre par mois.** C'est le seul
  chiffre à suivre en hebdo — tout le reste est une conséquence.
- **La capacité d'envoi n'est pas le goulot** : 4 boîtes chauffées à 25 mails/j supportent
  ~500 nouveaux contacts/mois avec une séquence à 4 mails. Le goulot est la **liste** — ce que
  le rétroplanning identifiait déjà en T2.

---

## 2. Le deal de référence

On raisonne par **donneur d'ordre** (le contrat), pas par client final : en marque blanche,
c'est l'unité économique réelle. Référence = `tools/deals/exemple-msp.json`, le gabarit maison.

**Helpdesk IT N1 en marque blanche · 3 positions · palier 3 ETP à 1 750 €/mois/position**

| | Montant |
|---|---|
| MRR du deal | 5 250 € |
| Coût direct (3 × 700 €, `FINANCE §2`) | −2 100 € |
| **Marge brute mensuelle** | **3 150 €/mois (60 %)** |
| Onboarding réel (socle 400 € + 400 €/position, `AUDIT §9.2`) | 1 600 € one-shot |
| Dépôt d'activation encaissé à J0 (900 €/pos, plafond 2 700 €, `PRICING §3.a`) | +2 700 €, imputable |
| Remise de lancement | **0 €** — supprimée en MB le 2026-08-03 (`PRICING §3.b`) |

---

## 3. CAC : trois niveaux, un seul dénominateur

**CAC commercial** = budget d'acquisition annuel (19 200 €) ÷ deals signés dans l'année.
**CAC chargé** = CAC commercial + onboarding réel (1 600 € pour 3 positions).

| Rythme (deals MB/an) | CAC commercial | CAC chargé | Lecture |
|---|---|---|---|
| **1 — quasi-échec commercial** | 19 200 € | 20 800 € | ratio encore correct, entreprise en perte lourde |
| **1,5 — scénario prudent** `FINANCE §5` | 12 800 € | 14 400 € | |
| 3 | 6 400 € | 8 000 € | |
| **4 — scénario médian** `FINANCE §5` | 4 800 € | **6 400 €** | **référence retenue** |
| 6 | 3 200 € | 4 800 € | |
| **8 — scénario ambitieux** | 2 400 € | 4 000 € | |

> **Le CAC n'est pas piloté par le prix ni par l'efficacité de la prospection. Il est piloté
> par le nombre de signatures.** Passer de 1,5 à 4 deals/an divise le CAC par 2,3 sans dépenser
> un euro de moins.

**Deux repères de marché sur le scénario médian :**
- CAC chargé = **1,2 mois de MRR** du deal (seuil de santé usuel : < 12 mois). ✅
- CAC chargé = **10 % de l'ARR année 1** (63 000 €). ✅

---

## 4. LTV : la durée de vie est la seule vraie inconnue

Pas de donnée réelle. On modélise la durée de vie en deux temps, parce que le contrat le
structure ainsi : une **fenêtre de mortalité précoce** (la concession « sortie à 30 jours
pendant les 3 premiers mois », `PRICING §3.b`), puis une vie longue pour les survivants
(engagement 12 mois renouvelable, préavis 60 j).

| Scénario | Arrêt ≤ 3 mois | Durée des survivants | **Durée de vie moyenne** |
|---|---|---|---|
| Prudent | 40 % | 18 mois | **12,0 mois** |
| **Médian** | 25 % | 30 mois | **23,3 mois** |
| Ambitieux | 15 % | 42 mois | **36,2 mois** |

> Le médian correspond à un churn annuel des survivants d'environ **33 %** — plus pessimiste
> que le marché BPO (15-25 %/an sur des contrats N1 externalisés). Volontaire : sans références,
> le premier renouvellement est le vrai test.

**LTV = marge brute mensuelle × durée de vie** (pas de coût d'expansion modélisé — l'upsell en
MB se fait par ajout de positions, déjà capté par le rythme de deals).

| Scénario | Durée | LTV du deal (3 positions) | LTV par position |
|---|---|---|---|
| Prudent | 12,0 mois | **37 800 €** | 12 600 € |
| **Médian** | 23,3 mois | **73 200 €** | 24 400 € |
| Ambitieux | 36,2 mois | **113 900 €** | 38 000 € |

---

## 5. Le verdict : LTV/CAC et payback

Chaque scénario associe **son rythme de signature et sa durée de vie** (un marché qui signe
lentement est aussi un marché qui retient moins bien — les découpler donnerait des ratios faux).

| | Prudent | **Médian** | Ambitieux |
|---|---|---|---|
| Deals MB/an | 1,5 | **4** | 8 |
| CAC chargé | 14 400 € | **6 400 €** | 4 000 € |
| Durée de vie | 12,0 mois | **23,3 mois** | 36,2 mois |
| LTV | 37 800 € | **73 200 €** | 113 900 € |
| **LTV / CAC** | **2,6×** ⚠️ | **11,4×** ✅ | **28,5×** ✅ |
| **Payback du CAC** | 4,6 mois | **2,0 mois** | 1,3 mois |

- Seuil de santé usuel : **LTV/CAC ≥ 3×** et **payback ≤ 12 mois**. Les deux sont tenus dès le
  scénario médian, et le payback l'est **dans tous les scénarios**.
- Le scénario prudent passe sous 3× — mais il est déjà disqualifié pour une autre raison :
  `FINANCE §5` y place le point mort à **M+14-16**.

### 5.a La courbe de trésorerie réelle d'un deal (médian)

Le ratio ne dit rien du cash. Voici ce qu'un deal coûte vraiment avant de rapporter, dépôt
d'activation et encaissement à 30 jours inclus.

| Moment | Mouvement | Cumul |
|---|---|---|
| J0 — signature | −4 800 € (CAC) +2 700 € (dépôt) | **−2 100 €** |
| M0 — mise en service (5-7 sem.) | −1 600 € (onboarding) | −3 700 € |
| M1 — 1er mois de production | −2 100 € (fees) ; facture 4 350 € encaissée à M2 | **−5 800 €** ⟵ point bas |
| M2 | −2 100 € +4 350 € | −3 550 € |
| M3 | −2 100 € +4 350 € | −1 300 € |
| **M4** | −2 100 € +4 350 € | **+950 €** ⟵ retour à zéro |
| M5 et suivants | −2 100 € +5 250 € (fin d'imputation du dépôt) | +3 150 €/mois |

**Trois chiffres à retenir :**
- **~5 800 € de trésorerie immobilisée par deal**, au plus bas au mois 1.
- **Retour à zéro au mois 4** après signature.
- **Sans le dépôt d'activation**, le point bas serait de **−8 500 €** : le dépôt réduit le cash
  au risque de **32 %** sans décaler le retour à zéro. Décision `PRICING §3.a` validée.
- **Ce que ça pèse dans le creux de trésorerie** : au rythme médian (4 deals/an, retour à zéro
  à M4), ~1,3 deal se chevauche en permanence dans la fenêtre de payback, soit **~7,7 k€
  immobilisés en continu** ; au rythme ambitieux (8 deals/an), ~2,7 deals et **~15 k€**. Le
  creux prévu de 35-45 k€ (`FINANCE §6`) est donc **majoritairement du banc et des charges
  fixes, pas de l'acquisition** — un argument de plus pour n'activer les agents qu'au contrat signé.

### 5.b Et si le partenaire sort à 30 jours ?

C'est la concession la plus engageante de `PRICING §3.b`. Chiffrée : dépenses 8 500 €
(CAC 4 800 + onboarding 1 600 + fees M1 2 100), recettes 6 300 € (dépôt acquis 2 700 +
facture M1 3 600). **Perte nette ≈ 2 200 €**, plus les agents au banc jusqu'à réaffectation.

> La concession est **abordable** — le dépôt et la première facture couvrent l'essentiel du
> coût. Ce qui coûte cher n'est pas la sortie, c'est **le banc qu'elle laisse derrière**.
> C'est l'argument pour ne jamais recruter au-delà des positions fermement facturées.

---

## 6. Trois seuils de décision qui sortent du calcul

### 6.a Le plancher de prix à 840 € ignore le CAC — le vrai plancher est ~1 050 €

`PRICING §3` fixe un plancher absolu à **840 €/position** (coût marginal 700 € + 20 %), codé
en dur dans `tools/deal-build.mjs`. Ce plancher ne couvre que le coût de service : il ne paie
**ni l'acquisition, ni l'onboarding**.

| Prix/position | Marge/mois (3 pos.) | Payback du CAC chargé | LTV/CAC (23 mois) |
|---|---|---|---|
| **840 €** (plancher actuel) | 420 € | **15,2 mois** ❌ | **1,5×** ❌ |
| 1 050 € | 1 050 € | **6,1 mois** | 3,8× |
| 1 350 € (palier 5+ Support N1) | 1 950 € | 3,3 mois | 7,1× |
| 1 750 € (deal de référence) | 3 150 € | 2,0 mois | 11,4× |

- **Pour un payback ≤ 6 mois : P ≥ 1 056 €/position.**
- **Pour un LTV/CAC ≥ 3× : P ≥ 975 €/position.**

> **Recommandation : remonter le plancher absolu de 840 € à 1 050 €/position** et le répercuter
> dans `tools/deal-build.mjs`. Signer à 840 € revient à travailler 15 mois pour rembourser
> l'acquisition d'un contrat dont la durée de vie médiane est de 23 mois. **Décision direction
> requise** — ce document ne modifie pas `PRICING.md`, qui reste la source de vérité.

### 6.b Le minimum facturable du palier 5+ est vital sur Support N1, confortable sur helpdesk

Le palier 5+ est le **meilleur ratio de la grille** quand il est consommé — le volume écrase
le CAC malgré la marge unitaire la plus faible. Il est aussi le plus fragile.

| Palier 5+ | Consommé à 5/5 | Sous-consommé à 3/5 (sans minimum facturable) |
|---|---|---|
| **Helpdesk @ 1 550 €** | marge 4 250 €/mois · payback **1,7 mois** · **13,7×** | marge 1 150 €/mois · payback 6,3 mois · **3,7×** ⚠️ |
| **Support N1 @ 1 350 €** | marge 3 250 €/mois · payback **2,2 mois** · **10,5×** | marge **550 €/mois** · payback **13,1 mois** · **1,8×** ❌ |

> Le minimum facturable décidé le 2026-08-03 ne protège pas « un peu » la marge : sur
> **Support N1**, il est **la différence entre 10,4× et 1,8×**. Sur helpdesk, la sous-consommation
> est absorbable. **À défendre sans concession sur Support N1** ; négociable à la marge sur helpdesk
> si c'est le dernier point bloquant d'un gros deal.

### 6.c Le coût réel d'un mois de retard commercial

Un mois sans signature coûte **1 600 €** de budget d'acquisition — mais surtout **700 €/mois
par agent déjà recruté et non staffé**. À 4 agents au démarrage, un trimestre de retard sur le
premier contrat vaut **~13 200 €** (4 800 € d'acquisition + 8 400 € de banc). C'est ce que
`FINANCE §6` recommande d'éviter en n'activant les agents **qu'au contrat signé**.

---

## 7. Marque blanche vs direct : le vrai arbitrage n'est pas la marge

| | **MB helpdesk** (3 pos. @ 1 750 €) | **Médical direct** (Confort 590 €) |
|---|---|---|
| MRR par client | 5 250 € | 590 € |
| Marge brute | 3 150 €/mois (60 %) | 415 €/mois (70 %) |
| CAC chargé | 6 400 € | ~1 075 €¹ |
| Durée de vie retenue | 23,3 mois | 36,2 mois² |
| LTV | 73 200 € | 15 000 € |
| **LTV / CAC** | **11,4×** | **14,0×** |
| **Payback** | **2,0 mois** | **2,6 mois** |
| CAC en % de l'ARR an 1 | **10,2 %** | 15,2 % |
| **Closings pour atteindre le point mort** (10 100 €/mois) | **2-3 contrats** | **17 cabinets** |
| CAC cumulé jusqu'au point mort | ~16 000 € | ~18 300 € |

¹ Quote-part d'acquisition (~480 €) + remise de lancement −50 % du 1er mois (295 €, `PRICING §7`)
+ coût réel de la mise en service offerte (~300 €).
² Cabinets très collants une fois Doctolib/Maiia paramétré et les protocoles intégrés ; le
mécanisme d'avoir de `PRICING §7` favorise explicitement la rétention.

**Ce que ça dit :**
- L'économie unitaire du **médical direct est légèrement meilleure** que celle de la marque
  blanche. Ce n'est pas un argument contre le MB-first.
- Le CAC cumulé pour atteindre le point mort est **quasi identique** (16 k€ vs 18 k€). Ce qui
  diffère radicalement, c'est la **charge commerciale** : 2-3 négociations à mener contre 17.
  Avec un seul business dev, c'est décisif.
- **Le MB-first se justifie par le débit de closing, pas par la rentabilité.** L'argument à
  utiliser en interne est celui-là — pas « le MB rapporte plus », qui est faux par position.
- Corollaire : le médical direct reste un **excellent complément de portefeuille** (rétention
  longue, marge haute, diversification du risque de concentration `FINANCE §7.2`), à activer
  quand la charge commerciale le permet — cohérent avec la priorité n°2 qui lui est donnée.

---

## 8. Ce qu'il faut instrumenter dès le premier contrat

Tous les chiffres ci-dessus sont des hypothèses. Six mesures les remplacent, par ordre d'impact :

| # | À mesurer | Hypothèse actuelle | Pourquoi c'est le plus important |
|---|---|---|---|
| 1 | **Taux de survie à 3 mois** | 75 % (médian) | C'est l'input qui fait varier la LTV du simple au triple |
| 2 | **Contacts → RDV → signature**, par niche | 1,5 % / 15-20 % | Donne le dénominateur réel du CAC |
| 3 | **Délai signature → 1re facture** | 5-7 semaines | Chaque semaine de plus = ~175 €/position de banc |
| 4 | **Coût d'onboarding réel** (heures manager + fees formation) | 400 €/position | Sous-estimé, il fausse le payback |
| 5 | **Positions facturées vs consommées** | 100 % | Le risque de banc, chiffré en §6.b |
| 6 | **Motif des deals perdus après RDV** (prix / références / capacité) | — | Dit si le problème est le prix ou la crédibilité |

**Où les suivre** : le CRM (`CRM_Salverys_Unifie.html`) porte déjà les leads et le pipeline —
il suffit d'y tracer date de RDV, date de signature, date de 1re facture et date de sortie.
Pas de nouvel outil à construire (`CLAUDE.md`, règle SaaS-first).

---

## 9. Limites assumées

- **Aucun client signé** : le taux de survie à 3 mois, la durée de vie et le taux de closing
  sont des postulats, pas des mesures.
- **Le CAC est amorti sur une base fixe** : c'est correct en phase de lancement, ça devient
  faux dès que la rému BD devient majoritairement variable ou qu'un second canal s'ouvre.
- **Pas de coût d'expansion modélisé** : l'ajout de positions chez un donneur d'ordre existant
  a un CAC quasi nul, ce qui **améliore** les ratios ci-dessus. L'analyse est donc conservatrice.
- **Pas de valeur de référral** : les 5 « clients fondateurs » (`PRICING §7`) sont explicitement
  achetés contre témoignages et mises en relation, pour ~1 660 € — un CAC de preuve sociale que
  ce document ne cherche pas à valoriser.
- **Change Ar/€** : les coûts sont en ariary, les revenus en euros. À 60 % de marge brute, une
  variation de ±10 % du taux déplace la LTV de ±4 %.

---

*Ce document ne modifie aucun prix. `PRICING.md` reste la source unique de vérité tarifaire ;
la recommandation de §6.a (plancher 1 050 €) est un arbitrage à trancher par la direction.*
