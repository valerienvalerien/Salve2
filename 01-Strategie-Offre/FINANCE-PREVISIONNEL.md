# FINANCE-PREVISIONNEL.md — Salverys (v2, refait le 2026-06-10)

> **Modèle acté par la direction (2026-06-10)** : démarrage **100 % freelances** payés
> **3 250 000 Ar/mois chacun** (650 €), **y compris les 2 managers** (1 médical, 1 IT).
> Objectif : **zéro turnover** au lancement. GTM prioritaire : **marque blanche d'abord**
> sur les 3 niches (cf. `CLAUDE.md`). Coûts locaux sourcés (recherche 2026-06-10, détail
> dans `EVALUATION-STRATEGIQUE-2026-06.md`). Simulateur : `tresorerie-salverys.html`.
> Taux : ~5 000 Ar ≈ 1 €.

---

## 1. Équipe (10 freelances) & politique de rémunération

| Rôle | Effectif | Fee mensuel |
|---|---|---|
| Agents productifs (facturables) | **8** | 3 250 000 Ar (650 €) |
| Manager médical | 1 | 3 250 000 Ar (650 €) |
| Manager IT (Support N1 + Helpdesk) | 1 | 3 250 000 Ar (650 €) |
| Direction (fondateurs) | hors équipe | rémunération de lancement modérée |

**Lecture marché** : le salaire moyen d'un agent de call center à Tana est ~700 000 Ar ;
les profils expérimentés plafonnent à 900 000 Ar-2 M Ar. À 3 250 000 Ar (650 €), Salverys paie
**~4,5 fois le marché** — bien au-delà des tout meilleurs profils commissionnés. C'est le
levier zéro-turnover le plus puissant possible localement : l'agent n'a **aucune** offre
concurrente équivalente (Intelcia & co. recrutent à 600-800 k Ar). Hypothèse zéro
turnover **crédible** à ce niveau.

**Statut freelance — points de vigilance** :
- Pas de charges patronales (CNaPS/OSTIE) → le fee est le coût quasi complet.
- **Risque de requalification** en salariat (droit malgache) : contrats de prestation
  cadrés, facturation, autonomie formelle — à verrouiller avec un conseil local.
- **DPA signés** par chaque freelance (RGPD art. 28, déjà prévu `CONFORMITE-HDS-RGPD.md`).
- Disponibilité garantie ≠ freelance pur (angle mort identifié dans `PRICING.md §10`) →
  clause de plages réservées + backfill.

## 2. Structure de coûts mensuelle (base 10 freelances, BYOD + hub)

Modèle BYOD (`PRICING.md §10`) : les agents travaillent dans les SaaS du client via
navigateur. Un **hub léger de repli** (plateau réduit) couvre le risque délestage JIRAMA.

| Poste | Détail | €/mois |
|---|---|---|
| Agents (8) | fee ~3,25 M Ar | **5 200** |
| Managers (2) | fee ~3,25 M Ar | 1 300 |
| Direction (2 fondateurs) | lancement | 1 400 |
| Hub de repli + énergie | petit plateau, groupe électrogène, onduleurs | 500 |
| Connectivité agents | indemnité double connexion + 4G backup (10 × ~20 €) | 200 |
| SaaS | VoIP (~30 €/poste actif), Emelia, facturation | 550 |
| Divers / imprévus (~10 %) | | 950 |
| **Total charges fixes** | | **≈ 10 100** |

- **Coût marginal d'un agent supplémentaire : ~700 €/mois** (fee + connectivité + VoIP).
- vs modèle salarié premium (v1 : ~280 € chargé/agent) : le freelance à 3,25 M Ar coûte
  **~+370 €/agent/mois**, partiellement compensé par l'absence de locaux pleins
  (BYOD) et de charges. Surcoût net total vs v1 : **~+2 500-3 000 €/mois** — c'est le prix
  du zéro turnover. **Soutenable** (cf. §3).

## 3. Rentabilité par offre — vérification au fee freelance

| Offre | Prix | Coût direct | Marge brute |
|---|---|---|---|
| Télésec MB (à l'appel **par créneau**, 0,90-1,40 €, `PRICING.md §1.b`) | agent mutualisé ~1 800 appels ⇒ 1 620-2 520 €/agent | ~700 € | **~57-72 %** |
| Support N1 SaaS — MB | 1 350-1 700 €/ETP | ~700 € | **~48-59 %** |
| Helpdesk IT N1 — MB | 1 550-2 000 €/ETP | ~700 € | **~55-65 %** |
| Médical direct (Confort, ~4 forfaits/agent) | 2 360 €/agent | ~700 € | **~70 %** |
| Support/Helpdesk direct | 1 900-2 800 €/ETP | ~700 € | **~63-75 %** |

**Verdict : la rentabilité tient sur le direct et le médical ; les MB plancher sont sous pression.** Fee (3,25 M Ar = 650 €) ×
prix MB plancher Support N1 (1 350 €) ⇒ marge brute ~48 %. Le plancher absolu de `PRICING.md`
(coût + 20 % ≈ **840 €/ETP**) est désormais proche du bas de la grille MB — renégocier à la hausse si nécessaire. La condition
de survie n'est pas la marge unitaire, c'est le **remplissage** : chaque agent payé
3,25 M Ar non staffé brûle ~700 €/mois — d'où l'intérêt de **démarrer avec un noyau
réduit** et de monter à 8 agents au rythme des contrats MB (les freelances le permettent).

## 4. Seuil de rentabilité (GTM marque-blanche-first)

Charges fixes ≈ 10 100 €/mois ⇒ exemples de mix au point mort, **en MB pur** :

| Mix 100 % MB | CA |
|---|---|
| 7 ETP IT MB (moy. 1 500 €) | 10 500 € |
| 5 ETP IT MB + 2 agents télésec MB (~2 000 €) | 9 500-11 500 € |
| 6 agents télésec MB à l'appel | 9 700-15 100 € |

**Point mort ≈ 10 100 €**, soit **~7 ETP placés en marque blanche**. Avantage décisif du
MB : **un seul donneur d'ordre peut placer 2-5 ETP d'un coup** (Metaline : 75 postes
ouverts ; Callmed : 1 M appels/an) — le point mort peut être atteint avec **2-3 contrats**,
contre 10-15 clients finaux en direct. CAC quasi nul, cycle 1-3 mois.

## 5. Trajectoire 12 mois — 3 scénarios (MB-first)

Hypothèses : prospection M1 (séquences déjà prêtes), 1er contrat MB M3-M4, encaissement
à 30 j. **Démarrage à 4 agents + 2 managers**, montée à 8+ agents au fil des placements
(recrutement freelance ≈ 2-4 semaines, formation 2-3 semaines).

| | Prudent | Médian | Ambitieux |
|---|---|---|---|
| Placements ETP MB | +1/trimestre dès M4 | +1/mois dès M4 | +2/mois dès M3 |
| Direct (médical) | 0 la 1re année | +1 client/mois dès M6 | +2/mois dès M5 |
| CA mensuel M6 | ~1 600 € | ~4 600 € | ~9 500 € |
| CA mensuel M12 | ~4 800 € | ~13 000 € | ~24 000 € |
| Point mort | **M+14-16** ⚠️ | **M+8-9** | **M+5-6** |
| Effectif M12 | 8 | 11-12 | 16-18 |

⚠️ **Le scénario prudent ne passe pas le point mort la 1re année** : avec une équipe
payée ~4,5× le marché, la lenteur commerciale coûte cher. Deux protections : (1) démarrer
à **4 agents** et n'activer les suivants qu'au contrat signé (flexibilité freelance) ;
(2) prioriser les donneurs d'ordre à gros volume (Metaline, Callmed, Thelem) qui placent
plusieurs ETP d'un coup.

## 6. Trésorerie & BFR

- Encaissement à 30 j ⇒ BFR ≈ 1 mois de CA en permanence dehors.
- **Creux de trésorerie maximal** (médian, démarrage à 4 agents) : **~35-45 k€** vers
  M+7-8. **Capital de départ recommandé : 50-60 k€** (creux + coussin 30 %). En
  démarrage à 8 agents d'emblée : creux ~55-65 k€ → 75 k€ de capital. **Recommandation
  ferme : noyau de 4 agents, montée au contrat.**
- Leviers anti-creux :
  - ✅ **Acompte au cadrage MB — ACTÉ le 2026-08-03** sous forme de **dépôt d'activation
    imputable : 900 €/position, plafond 2 700 €**, encaissé **à la signature**, déduit des
    3 premières factures (300 €/position/mois) — `PRICING.md §3.a`. Effet trésorerie :
    encaissement **à J0 au lieu de J+30**, soit **2 700 € par deal de 3 positions** entrés
    un mois plus tôt, et le **coût d'onboarding couvert (~1 600 €)** si le partenaire
    s'arrête. L'ancienne contradiction avec « ne jamais facturer la mise en service »
    (`ONBOARDING-CLIENT.md`) est levée : un dépôt **imputable** n'est pas des frais.
  - ✅ **Fin de la remise de lancement en MB — ACTÉE le 2026-08-03** (`PRICING.md §3.b`) :
    le mois pilote à −50 % coûtait **~2 625 €** sur un deal de 3 positions, pour un
    onboarding réel de ~1 600 €, et sortait le mois d'entrée à **≈ −1 075 €**. Supprimée,
    ce mois passe **à l'équilibre positif** (3 × 1 750 € encaissés contre 3 × 700 € de fees).
    Remplacée par 3 contreparties à coût ~nul. **Conservée en direct** (`PRICING.md §7`).
  - ✅ **Palier 5+ ETP conditionné à un volume ferme facturé** (`PRICING.md §3`) : supprime
    le risque de banc payé sur le palier le moins margé (~48 %).
  - Prélèvement SEPA dès le 1er mois, gel du 2e salaire de direction, fee d'attente réduit
    pour les agents en banc (à négocier au contrat freelance : plein fee dès staffing).
- Simulation interactive : `tresorerie-salverys.html` (paramètres par défaut alignés
  sur ce modèle v2).

## 7. Risques financiers spécifiques au modèle

1. **Banc improductif** : agents payés non staffés = ~700 €/mois brûlés chacun. Mitigé
   par le démarrage à 4 et la montée au contrat.
2. **Concentration donneurs d'ordre** : en MB, 1-2 contrats peuvent porter 60-80 % du
   CA. Exiger préavis 60-90 j, viser 3+ donneurs d'ordre dès M9.
3. **Requalification freelance** : provisionner un conseil juridique local (~500 €
   one-shot) pour blinder les contrats de prestation.
4. **Change Ar/€ et inflation locale** : fees en ariary, revenus en € — surveiller ;
   la marge à 65-80 % absorbe largement les variations historiques.
5. **Avoirs qualité** (engagement décroché/SLA 20 %, max 1/12) : au pire ~1,7 % du CA
   annuel d'un contrat — négligeable.

---

*v1 (modèle salarié premium) remplacée le 2026-06-10 par décision direction : freelances
3 250 000 Ar (650 €), zéro turnover, GTM marque-blanche-first. Sources coûts locaux :
lagazette-madagascar.com, lexpress.mg, newsmada.com — cf. `EVALUATION-STRATEGIQUE-2026-06.md`.*
