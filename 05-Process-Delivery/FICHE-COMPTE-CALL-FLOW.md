# FICHE-COMPTE-CALL-FLOW.md — Gabarit de fiche de compte (interne)

> **Ce que c'est.** Le résultat **instancié** de `ARBRE-DECISION-ONBOARDING.md` pour **un
> compte donné** : son arbre de décision figé, son call flow, sa chaîne d'escalade, ses
> valeurs de SLA. Une fiche par compte.
>
> **Comment s'en servir.** Copier ce fichier vers
> `05-Process-Delivery/comptes/FICHE-<NOM-DU-COMPTE>.md`, remplir tous les `[...]`.
> **Aucun `[...]` restant** au moment du J1 — un crochet non rempli est un trou de process,
> pas un détail de rédaction.
>
> **Cycle de vie.** Créée en **Phase 0** (cadrage), complétée en **Phase 1** (mise en
> service), figée avant **J1**, revue à la **bascule en régime** puis à chaque **revue de
> mode** (`ARBRE §4.3`).
>
> ⚠️ **Document interne.** Les §1, §2, §7 et §8 ne sortent jamais. Les §4 et §5 peuvent être
> reformulés pour le client, ils ne se transmettent pas tels quels.

---

## 1. Identité du compte

| | |
|---|---|
| **Compte** | `[Raison sociale]` |
| **Archétype** | `[A1 ESN · A2 MSP · A3 SaaS-extension · A3-R reprise · A4 SaaS-création · M1 télésec MB · M2 médical direct]` |
| **GTM** | `[Marque blanche · Direct]` |
| **Niche** | `[Helpdesk IT N1 · Support N1 SaaS · Télésecrétariat médical]` |
| **Marque affichée à l'utilisateur final** | `[Marque]` |
| **Interlocuteur donneur d'ordre** | `[Nom · fonction · email · tél]` |
| **Sponsor / décideur** | `[Nom · fonction]` |
| **Date de cadrage (Phase 0)** | `[JJ/MM/AAAA]` |
| **J1 engagé** | `[JJ/MM/AAAA]` |
| **Fiche rédigée par** | `[Nom]` · dernière revue le `[JJ/MM/AAAA]` |

---

## 2. Sortie de l'arbre de décision

### 2.1 Verrous (étage 0)

| Verrou | Statut | Preuve / note |
|---|---|---|
| **V1** — Régime de sous-traitance (ICP Q7) | `[🟢 autorisation générale · 🟢 accord spécifique obtenu · 🟠 gel · 🔴 clause UE/EEE]` | `[référence du mail / pièce au dossier]` |
| **V1 bis** — Clause de localisation des données | `[absente · levée le … · bloquante]` | `[…]` |
| **V2** — Prix ≥ plancher 840 € · minimum facturable si palier 5+ | `[🟢/🔴]` | `[prix appliqué : … €/ETP · palier : …]` |
| **V3** — Dépôt d'activation encaissé (MB) | `[🟢 encaissé le … · s.o. en direct]` | `[… € — soit … €/position]` |
| **V4** — Canal unique accepté | `[🟢/🟠/🔴]` | `[qui a validé, quand]` |

### 2.2 Variables et verdict

| Variable | Valeur retenue | Points | Justification en une ligne |
|---|---|---|---|
| **D1** — Supervision côté client | `[N2 nommé et joignable · lead peu dispo · personne]` | `[0/2/4]` | `[…]` |
| **D2** — Maturité du référentiel | `[documenté · partiel · inexistant]` | `[0/2/4]` | `[…]` |
| **D4** — Contextes clients finaux | `[1 · 2-5 · 6+]` | `[0/2/4]` | `[…]` |
| **D5** — Amplitude & continuité | `[7h-19h Paris · étendue · astreinte/24-7]` | `[0/2/4]` | `[…]` |
| Bonus **criticité** | `[oui/non]` | `[+2/0]` | `[santé · paiement · prod client final]` |
| Bonus **Priority** | `[oui/non]` | `[+2/0]` | `[…]` |
| | **Total intensité** | **`[…]`** | → `[faible · moyenne · forte]` |
| **D3** — Positions | `[…]` | — | → bande `[1-2 · 3-4 · 5-7 · 8+]` |

> **Mode d'armement retenu : `[M0 · M1 · M2 · M3]`**
> `[Reprendre en une phrase pourquoi : « ESN structurée, 3 positions, un seul client final,
> heures ouvrées — le technique reste chez eux, référent mutualisé suffisant. »]`

**Manager IT dédié : `[OUI · NON]`** — `[si NON : qui porte l'autorité technique côté client,
nommément. Si OUI : condition de volume vérifiée (≥ 5 positions facturées).]`

### 2.3 Contrôle économique

| | |
|---|---|
| CA mensuel du compte | `[… €]` (`[n]` positions × `[… €]`) |
| Coût d'encadrement projeté | `[… €/mois]` |
| **% du CA** | **`[… %]`** — plafond **12 %** (`ARBRE §3.4`) |
| Charge référent projetée | `[… h/semaine]` en régime · `[… h]` en S1 |
| Comptes déjà portés par ce référent | `[liste + positions]` — plafonds : ≤ 8 positions, ≤ 4 comptes |

### 2.4 Concessions accordées

| Contrepartie (`PRICING §3.b`) | Accordée ? | Tracée dans `tools/deals/*.json` |
|---|---|---|
| Sortie à 30 j pendant 3 mois | `[oui/non]` | `[oui/non]` |
| Exclusivité territoire ou segment 12 mois | `[oui/non]` | `[oui/non — ⚠️ vérifier E6 : bloque quels prospects ?]` |
| Appui avant-vente sous 48 h | `[oui/non]` | `[oui/non — kit envoyé le …]` |

> Rappel : **une seule** contrepartie à la fois. Jamais de remise sur le prix de gros.

---

## 3. Périmètre figé

### 3.1 Ce qui est dans le N1 (liste blanche)

`[Lister explicitement. Cette liste devient l'Annexe de niche du contrat.]`

- `[…]`
- `[…]`

### 3.2 Ce qui n'y est jamais

`[Hors périmètre = escalade immédiate, aucune tentative. Lister aussi.]`

- `[…]`

### 3.3 Volumes, plage, engagement

| | |
|---|---|
| Positions | `[n]` — `[dédiées · à l'heure · à l'interaction]` |
| Plage couverte (heure de Paris) | `[…]` → équivalent Tana : `[… ]` (UTC+3, Paris +2 h hiver / +1 h été) |
| Volume attendu | `[… tickets/appels par mois]` |
| **KPI engagé** | `[SLA 1re réponse · SLA prise en charge · décroché ≥ 90 %]` = **`[valeur]`** |
| Sanction | avoir de **20 %** si non tenu (contrat art. 6 / `PRICING §7`) |
| **Le KPI court à partir du** | `[date de bascule en régime — jamais pendant le mois d'entrée]` |
| Périmètre du pilote | `[200-400 tickets · un seul client final · …]` |

---

## 4. Call flow opérationnel

> Reprendre le gabarit de l'archétype (`ARBRE §6.1 à §6.4`) et remplacer **tous** les `[...]`.
> Version affichée au poste de l'agent.

```
1. ENTRÉE          [outil, file/vue, mode d'attribution]
2. PRISE EN CHARGE [action, macro, délai — le chrono du SLA démarre ici]
3. QUALIFICATION   [catégories et matrice de priorités DU CLIENT]
4. PÉRIMÈTRE       [renvoi §3.1 / §3.2]
5. DIAGNOSTIC      [KB/macros autorisées, obligation de traçabilité]
6. ISSUE           résolu → [clôture, confirmation] · non résolu à [T] → étape 7
7. ESCALADE MÉTIER [file N2 du client, contact, délai, contenu de la passation]
8. ESCALADE EXPL.  [référent Salverys : nom, canal, délai] — déclencheurs : [.…]
9. CONTINUITÉ      [kit d'autonomie → hub de repli · info donneur d'ordre sous [délai]]
```

**Spécifique A2 (MSP) — étapes 0.a / 0.b / 0.c à insérer avant l'étape 1 :**

| | |
|---|---|
| Source de vérité tenant | `[PSA / IT-Glue / …]` |
| Liste des contacts autorisés | `[où elle vit, qui la tient à jour]` |
| Que faire si le demandeur n'y figure pas | `[refus poli + notification à …]` |

**Spécifique A3 (éditeur SaaS) :**

| | |
|---|---|
| Tag / groupe de traçabilité | `[nom exact — sans lui, le SLA n'est pas opposable]` |
| Répartition de la file | `[par plage horaire · par catégorie]` — jamais « les tickets faciles » |
| Référent produit côté éditeur | `[nom]` — `[… h/semaine pendant … semaines]` |
| Template de reproduction de bug | `[où il vit]` |
| Présence aux rituels | `[daily : écoute oui / ordres non]` |

---

## 5. Chaîne d'escalade instanciée

| Niveau | Qui | Canal | Délai | Déclencheurs |
|---|---|---|---|---|
| **N1** | l'agent | — | — | traite selon script et liste blanche |
| **N2 métier** | `[contact client]` | `[file / canal]` | `[…]` | hors périmètre, non résolu à `[T]` |
| **N2 exploitation** | `[référent Salverys]` | `[…]` | `[…]` | doute process, réclamation, doute RGPD, instruction adressée à la personne |
| **N3 client** | `[nom · fonction]` | `[…]` | `[…]` | incident majeur, litige SLA |
| **Continuité** | `[référent + direction]` | `[…]` | `[…]` | coupure, panne, indisponibilité agent |

**Interdits explicites sur ce compte :**
- L'agent ne contacte jamais `[client final du donneur d'ordre]` directement (contrat art. 10).
- Aucune instruction quotidienne ne descend hors du canal référent (`GOUVERNANCE §2`).
- `[autres interdits propres au compte]`

---

## 6. Qualité

| | |
|---|---|
| Grille QA appliquée | `[variante MÉDICAL · variante SUPPORT/HELPDESK]` (`PROCESS-QA §2/§3`) |
| **Critères KO ajoutés pour ce compte** | `[ex. A2 : « action engagée sans identification de tenant validée » = fiche rouge]` |
| Cadence de double écoute | S1 : `[≥ 5/agent]` · régime : `[≥ 2 ou ≥ 3 selon le mode]` |
| Cadence de reporting client | `[hebdo MB · mensuel médical]` |
| Format de reporting | `MODELE-REPORTING-CLIENT.md`, instancié avec le KPI de §3.3 |

---

## 7. Équipe affectée

| Rôle | Personne | Statut | Note |
|---|---|---|---|
| Référent d'exploitation | `[nom]` | `[dédié · mutualisé sur n comptes]` | |
| Lead technique N1.5 (M3 uniquement) | `[nom]` | **position facturée** | |
| Doc owner (M3 uniquement) | `[nom]` | 0,2 ETP, inclus | |
| Agents | `[noms]` | `[n positions]` | |
| Backup | `[nom]` | | kit d'autonomie testé le `[date]` |

**Séquencement du J1** (plafond : ≤ 3 positions en onboarding simultané) :

| Vague | Positions | Démarrage | Plein régime attendu |
|---|---|---|---|
| 1 | `[…]` | `[…]` | `[…]` |
| 2 | `[…]` | `[…]` | `[…]` |

---

## 8. Journal de revue de mode

| Date | Événement déclencheur | Ancien mode | Nouveau mode | Décidé par | Client informé ? |
|---|---|---|---|---|---|
| `[…]` | `[bascule en régime · ±2 positions · +1 client final · 2 fiches rouges/30 j]` | `[…]` | `[…]` | `[…]` | `[oui/non — une descente de mode s'écrit toujours]` |

---

## 9. Checklist avant J1

- [ ] Les 4 verrous au vert (§2.1)
- [ ] Aucun `[...]` restant dans cette fiche
- [ ] Périmètre §3.1/§3.2 recopié dans l'Annexe de niche du contrat
- [ ] Contrat + DPA signés · dépôt encaissé (MB)
- [ ] Accès outils créés — **comptes nominatifs + MFA**, droits au strict nécessaire
- [ ] Grille QA armée avec ses critères KO propres au compte
- [ ] Planning de double écoute S1 posé dans l'agenda du référent
- [ ] Gabarit de reporting instancié
- [ ] Kit d'autonomie de chaque agent **testé** (bascule réelle) + hub de repli
- [ ] Test de bout en bout (ticket/appel fictif) réussi
- [ ] Call flow §4 affiché au poste, brief agent fait (`GOUVERNANCE §5`)
- [ ] Charge référent recalculée et sous les plafonds (§2.3)
