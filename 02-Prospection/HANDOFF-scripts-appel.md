# HANDOFF — Scripts d'appel (cold calling)

> Note de passage de relais pour une session ultérieure. Objectif : produire une version
> markdown éditable des scripts d'appel et garder le CRM aligné sur les sources de vérité.
>
> ⚠️ Mise à jour 2026-06-14 : les **2 incohérences** décrites plus bas ont **déjà été
> corrigées** dans `CRM_Salverys.html` (voir section « Déjà corrigé »). Le travail restant
> est donc surtout la **création du `02-Prospection/SCRIPTS-APPEL.md`** (extraction propre).

---

## 📋 Résumé

Les scripts d'appel ne sont **pas manquants** : ils vivent dans `CRM_Salverys.html` sous
l'objet JS `CALL_SCRIPTS` (3 niches × 5 étapes) + objections (`OBJECTIONS_TELEMED/SUPPORT/
HELPDESK`). Deux problèmes identifiés : (a) pas de **doc markdown éditable** dans
`02-Prospection/` (les séquences `OUTREACH-SEQUENCE.md` y renvoient par
`CALL_SCRIPTS.telemed.opening` etc., sans fichier source lisible) ; (b) **2 incohérences**
avec les sources de vérité — **désormais corrigées dans le CRM**. Reste à créer un
`02-Prospection/SCRIPTS-APPEL.md` propre, miroir des scripts CRM, aligné sur `PRICING.md`
et `CONFORMITE-HDS-RGPD.md`.

## 🎯 Prompt (à coller dans la nouvelle session)

> Crée le fichier `02-Prospection/SCRIPTS-APPEL.md` : une version markdown éditable et
> structurée des scripts d'appel à froid de Salverys, miroir de l'objet `CALL_SCRIPTS` déjà
> présent dans `CRM_Salverys.html` (lignes ~2636-2832). Couvre les 3 niches
> (télésecrétariat médical, support N1 SaaS, helpdesk IT N1), chacune avec les 5 étapes
> (ouverture, qualification, pitch valeur, objections, closing) et l'arbre d'objections
> complet. Ce fichier doit être la source lisible/éditable que `OUTREACH-SEQUENCE.md`
> référence (`CALL_SCRIPTS.telemed.opening`, etc.).
>
> Vérifie l'alignement de tous les chiffres/promesses sur `PRICING.md` (décroché **90 %**,
> **20 % d'avoir**, **1er mois à −50 %**, pilote support/IT **200-400 tickets**, « dès 3 mois
> puis 12 mois », forfaits 350/590/950). Respecte les garde-fous `CLAUDE.md` : marque
> **Salverys** uniquement, **« forfait »** jamais « abonnement » côté médical, **aucun claim
> « 1 000 collaborateurs »**, **zéro enregistrement** d'appel patient (`CONFORMITE-HDS-RGPD.md
> §2`), prix MB jamais en clair côté public. Commit + push sur la branche de travail. Pas de
> PR sauf demande.

## 🗂️ Contexte

**Fichiers**
- Source existante : `CRM_Salverys.html` — `CALL_STEPS` (~l. 2636), `CALL_SCRIPTS`
  (~l. 2644-2703), `OBJECTIONS_TELEMED` (~l. 2705), `OBJECTIONS_SUPPORT` (~l. 2748),
  `OBJECTIONS_HELPDESK` (~l. 2791).
- À créer : `02-Prospection/SCRIPTS-APPEL.md`.
- Référence les scripts : `02-Prospection/OUTREACH-SEQUENCE.md` (l. 156, 217, 294, 296,
  699, 761, 841, 844).

**Sources de vérité**
- `PRICING.md` — prix, SLA 90 %, avoir 20 %, offre −50 %, pilote 200-400 tickets, durées.
- `CONFORMITE-HDS-RGPD.md` — zéro enregistrement, zéro stockage, sous-traitant art. 28.
- `CLAUDE.md` — marque, niches, garde-fous (forfait ≠ abonnement, pas de claim 1 000 collab.).

**Branche de travail** : `claude/remaining-tasks-email-b9hnsf` (ou la branche active).

## ✅ Déjà corrigé dans `CRM_Salverys.html` (2026-06-14)

1. **Objection « accent » (télémed)** : *« vos patients appellent, vous écoutez les
   enregistrements »* → remplacé par *« vos patients sont accueillis pour de vrai, vous jugez
   sur vos propres appels »* (respecte le **zéro enregistrement**, `CONFORMITE-HDS-RGPD.md §2`).
2. **Pitch support-n1 (tip)** : périmètre pilote *« ~80 tickets »* → **« 200-400 tickets »**
   (`PRICING.md §3`).

> Le reste des scripts est déjà aligné (90 %, 20 % d'avoir, 1er mois −50 %, « dès 3 mois puis
> 12 mois ») : l'extraction en markdown sera un transfert fidèle.
