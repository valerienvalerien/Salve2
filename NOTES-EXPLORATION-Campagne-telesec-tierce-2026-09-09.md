# NOTES D'EXPLORATION — Campagne télésecrétariat médical proposée par un tiers

**Date : 2026-09-09 · Statut : EXPLORATOIRE — AUCUNE DÉCISION**

> 🔴 **CE DOCUMENT N'ACTE RIEN.**
> Aucun chiffre, aucune configuration, aucune conclusion de ce fichier ne constitue une
> décision, une validation, ni une modification de la doctrine en vigueur.
> **Il ne fait foi sur rien.** En cas de divergence avec `CLAUDE.md`, `PRICING.md` ou
> `01-Strategie-Offre/FINANCE-PREVISIONNEL.md`, **ce sont ces documents qui s'appliquent**.
>
> Ce fichier est une trace de calculs, à relire si le sujet revient. Il ne doit être cité
> ni en interne comme référence, ni en externe.

---

## 1. Ce qui a été exploré

Une annonce Facebook (« Ma Mada Télésecrétariat Médical », page tierce) propose la revente
d'une **campagne de télésecrétariat médical en appels entrants**, réservée aux centres
d'appels. Un premier échange écrit avec le vendeur a donné les éléments ci-dessous.

**Aucun contact n'a été engagé au-delà de cet échange. Aucune suite n'est décidée.**

### Éléments communiqués par le vendeur (non vérifiés)

| Élément | Ce qui a été dit |
|---|---|
| Prix d'une position | 6 000 000 Ar |
| Prix campagne complète | 30 000 000 Ar (⇒ 5 positions) |
| Paiement du ticket | 3 tranches : réservation · démarrage (début oct.) · 1ᵉʳ paiement client |
| Rémunération | **5 €/h par agent** |
| Amplitude | **8h–18h heure France, en continu** (⚠️ l'affiche indique **8h–19h** — divergence non levée) |
| Client final | français |
| Volume d'appels | **« pas encore d'idée »** — non communiqué |
| Démarrage | début octobre / « dans 4 semaines » |
| Formation | assurée par le client final |

### Points restés sans réponse

- Volume d'appels réel (jour/mois) — **jamais communiqué**
- Durée d'engagement du client final sur les positions
- Le ticket d'entrée est-il imputable sur les premières factures ?
- Amplitude exacte : 8h–18h (message) ou 8h–19h (affiche) ?
- Identité du client final, existence d'un contrat en amont
- Conditions de sortie, préavis

---

## 2. Hypothèses de calcul retenues pour l'exploration

Reprises de `01-Strategie-Offre/FINANCE-PREVISIONNEL.md` (v3.1) sauf mention contraire.

| Paramètre | Valeur |
|---|---|
| Taux de change | 5 000 Ar = 1 € |
| Jours ouvrés | 21,7 j/mois |
| Besoin par position (8h–18h) | 10 h × 21,7 = **217 h/mois** |
| CA par position à 5 €/h | **1 085 €/mois** |
| Coût employeur agent (grille en vigueur) | 736 € (3 250 000 Ar brut + 86 € CNaPS/OSTIE plafonnées) |
| VoIP / poste | 30 €/tête |
| Absences (congés 30 j + maladie) | 13 % |
| Durée légale Madagascar | 40 h/sem = 173,33 h/mois |
| Structure mensuelle | ~165 € (SaaS, change, imprévus) |
| Manager métier | 766 € — déclenché **au-delà de 8 agents** (§2.c) |

---

## 3. Résultats des calculs — modèle SALARIÉ (doctrine en vigueur)

### 3.a Constat de départ

À la grille en vigueur (3 250 000 Ar brut), le montage est **structurellement déficitaire** :

- Ratio **exigé** par la couverture du service : **1,44 personne/position**
- Ratio **supportable** à marge nulle : **1,42** (1 085 € ÷ 766 €)
- Ratio supportable au plancher §3 (coût + 20 %) : **1,13**

⇒ à 5 €/h, la grille salariale actuelle est hors d'atteinte **dans toutes les configurations**
(équivalent d'une marge brute de **−41 %**). Prix d'équilibre estimé : **~8,50 €/h**,
cohérent avec la fourchette MB de `PRICING.md` (8–11 €/h).

### 3.b Configurations testées (salaire ajusté pour tenir 20 % de marge brute)

Règle de placement identifiée : avec deux équipes (matin/soir) sur une amplitude de 10 h,
il faut **N têtes au début ET N têtes à la fin** ⇒ **agents = 2 × positions**.

| Positions | Agents | Contrat | Brut/tête | Résultat net | Tient un congé ? |
|---|---|---|---|---|---|
| 2 | 4 | 30 h | 1 712 000 Ar | +69 €/mois | ✅ |
| 3 | 6 | 30 h | 1 712 000 Ar | +186 €/mois | ✅ (bascule journée coupée) |
| **4** | **8** | **30 h** | **1 712 000 Ar** | **+303 €/mois** | ✅ |
| 5 | 9 | 30 h | 1 916 000 Ar | −346 €/mois | ❌ |
| 5 | 10 | 30 h | 1 712 000 Ar | −346 €/mois | ✅ |

**Optimum observé en salariat : 4 positions / 8 agents** — dernier point sous le seuil de
déclenchement du manager métier. Au-delà, une position rapporte 217 € et déclenche 766 € de
coût fixe.

### 3.c Mécanisme de couverture des congés (proposé en séance)

Semaine où un agent est en congé : un agent de l'autre équipe bascule en **journée coupée**
(8h–11h puis 15h–18h, même durée). Vérifié heure par heure : couverture complète, mais
**zéro marge** (les 4 pauses s'enchaînent sans battement dans la fenêtre 11h–15h) et
**effondrement à la 2ᵉ absence**.

### 3.d Limites relevées (non résolues)

- 30 h/semaine = **temps partiel à 75 %** — attractivité au recrutement
- Salaires de 1,7 à 2,4 M Ar = **2,4× à 3,3× le marché local**, contre 4,5× dans la grille
  ⇒ l'argument « zéro turnover » (`FINANCE-PREVISIONNEL.md §7.7`) ne tient plus
- **Double barème** avec les futures embauches IT à 3 250 000 Ar (écart jusqu'à 1,9×)
- Coupure de 4 h sur contrat à temps partiel : **légalité à vérifier** (conseil social, §7.4)

---

## 4. Résultats des calculs — variante FREELANCE (exploration seule)

> ⚠️ **Cette variante contredit frontalement la décision de direction du 2026-08-14**
> (bascule vers le 100 % salarié, `CLAUDE.md`). Elle a été calculée à titre de comparaison
> chiffrée. **Elle n'est ni proposée ni retenue.**

Hypothèse : indépendants à 40 h/semaine (173,33 h/mois facturables), paiement à l'heure
livrée. Disparaissent : congés payés, charges patronales, contrainte de journée de 8 h.

| Ratio | **1,25 freelance par position** (contre 2,0 en salariat) |
|---|---|

| Positions | Freelances | Ticket | CA/mois | Marge brute 25 % | Résultat net |
|---|---|---|---|---|---|
| 2 | 3 | 12 000 000 Ar | 10 850 000 Ar | 2 713 000 Ar | — |
| 4 | 5 | 24 000 000 Ar | 21 700 000 Ar | **5 425 000 Ar** | +2 600 000 Ar |
| 5 | 7 | 30 000 000 Ar | 27 125 000 Ar | 6 781 000 Ar | +3 456 000 Ar |

À **3,75 €/h** (marge brute 25 %), la rémunération atteint **3 250 000 Ar/mois** — soit le
niveau exact de la grille Salverys — et le manager n'est pas déclenché avant 8 têtes.

**Réserves majeures, non levées :**
1. **Requalification** — horaires imposés, outils du donneur d'ordre, supervision,
   exclusivité de fait : faisceau d'indices complet. Coût rétroactif (CNaPS/OSTIE, CDI,
   indemnités). Le risque n'est pas neutralisable par accord des parties.
2. Contredit la décision du 2026-08-14 et le vocabulaire proscrit par `CLAUDE.md`.
3. Continuité de service : un indépendant peut cesser sans préavis — risque n°1 du modèle
   sur une prestation médicale avec formation client.

---

## 5. Trésorerie — chiffre à retenir

Pour 4 positions, avant le premier encaissement :

| | |
|---|---|
| Tranche 1 (réservation) | 8 000 000 Ar |
| Tranche 2 (démarrage) | 8 000 000 Ar |
| 1 mois de production à avancer (paiement à 30 j) | 16 275 000 Ar |
| **Total immobilisé** | **≈ 32 275 000 Ar (6 455 €)** |

À rapporter au burn actuel de **110–155 €/mois** (`FINANCE-PREVISIONNEL.md §2.b`) :
l'équivalent d'environ **40 mois de fonctionnement**, engagés sans contrat avec le client
final, sans engagement de durée et sans volume connu.

---

## 6. Cohérence avec la doctrine — points de friction relevés

Listés pour mémoire, **sans conclusion** :

- **Priorité de niche** : le médical est n°3 ; l'entrée validée passe par les
  **télésecrétariats FR qui sous-traitent**, pas par un revendeur de campagne malgache.
- **Temps du fondateur** : ressource rare identifiée (`FINANCE-PREVISIONNEL.md §7`) — ce
  dossier la consommerait intégralement sur la niche n°3.
- **Grille tarifaire** : 5 €/h est très en dessous de la fourchette MB de `PRICING.md`
  (8–11 €/h) et du plancher « coût direct + 20 % ».
- **Modèle d'équipe** : toute configuration testée exige de descendre sous la grille
  3 250 000 Ar, sauf la variante freelance — écartée par la décision du 2026-08-14.
- **Rang de sous-traitance** : position de sous-traitant de rang 2, sans lien contractuel
  avec le donneur d'ordre final.

---

## 7. Si le sujet revient — à obtenir avant tout calcul

1. Volume d'appels réel et engagement de durée du client final
2. Amplitude contractuelle exacte (8h–18h ou 8h–19h)
3. Ticket d'entrée imputable ou non sur les factures
4. Identité du client final et nature du contrat en amont
5. Avis du conseil social sur : coupure de 4 h en temps partiel · modulation horaire ·
   exposition à la requalification si montage indépendant
6. Position de la direction sur un salaire inférieur à la grille pour ce contrat

---

*Fichier de travail. Ne pas transformer en document de référence sans décision explicite.*
