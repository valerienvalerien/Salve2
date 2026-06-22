# VIVIER de talents — Kit Airtable (gratuit)

> Objectif : répertorier, qualifier et suivre les profils repérés **sur Facebook**
> (sourcing **sortant**), pour avoir un vivier préqualifié **prêt à affecter dès qu'un
> client signe**. Distinct du flux **entrant** (`espace-candidat.html`) où le candidat
> postule lui-même.

**Outil retenu :** Airtable, tier **gratuit** (3 éditeurs, recherche/filtres puissants,
Kanban, formulaire de saisie). Fichier d'import : `vivier-template.csv` (à côté de ce guide).

**Limites du gratuit à garder en tête :** 1 000 lignes/base · 100 automatisations/mois ·
5 éditeurs max. Largement suffisant pour des centaines de profils *actifs* (le vivier est un
actif : on **archive** plutôt qu'on supprime, cf. §9). Déclencheur de bascule en §10.

---

## 1. Principe : une seule base pour commencer

Commence avec **UNE base** `Vivier Salverys`, avec un champ **Niche** (médical / support /
helpdesk). Plus simple, et recherche **transverse** aux 3 niches.
→ Tu ne passes à **1 base par niche** que si tu approches ~900 lignes (cf. §8).

## 2. Créer le compte et inviter l'équipe (gratuit, 3 éditeurs)

1. Crée un compte sur airtable.com → un **workspace** `Salverys`.
2. **Share → invite** : ajoute les 2 managers (médical, IT) en rôle **Editor**.
   → 3 éditeurs = dans le quota gratuit (max 5).
3. **Comptes nominatifs**, pas de login partagé.

## 3. Importer le template → crée la base et les champs

1. Dans le workspace : **Add a base → Import data → CSV file** → `vivier-template.csv`.
2. Airtable crée la table avec **toutes les colonnes** + 3 lignes de démo.
3. **Supprime les 3 lignes de démo** (VIV-0001/0002/0003) une fois que tu as compris la structure.

## 4. Régler le TYPE de chaque champ (important)

À l'import tout est en « texte ». Convertis les champs clés (clic sur l'entête → **Edit field**) :

| Champ | Type Airtable | Options / notes |
|---|---|---|
| Code interne | Single line text | Format `VIV-0001`, `VIV-0002`… (incrément manuel) |
| Lien Facebook | **URL** | cliquable |
| **Lien CV** | **URL** | **lien Google Drive** vers le CV (le fichier reste dans Drive, **pas** stocké dans Airtable) — cf. §9 |
| Email / WhatsApp | Email / Phone | |
| Date repérage · Date relance · Info candidat faite | **Date** | |
| Repéré par | Single select | `Valérien`, `Manager médical`, `Manager IT` |
| **Niche** | Single select | `Télésecrétariat médical`, `Support N1 SaaS`, `Helpdesk IT N1`, `Manager`, `Relation Clients` (branche future) |
| Niveau français | Single select | `Natif (oral+écrit)`, `Natif (oral) / Bon (écrit)`, `Bon`, `À tester` |
| Expérience (années) | Number | |
| **Compétences** | **Multiple select** | la conversion **découpe sur les virgules** → 1 option par compétence |
| Disponibilité | Single select | `Immédiate`, `Sous préavis`, `À confirmer` |
| Prétention (Ar/mois) | Number | repère vs grille **3 250 000 Ar (650 €)** |
| **Note qualif** | Single select | `A`, `B`, `C` (+ couleurs : A vert, B orange, C gris) |
| **Étape pipeline** | **Single select** | voir §5 (mets les couleurs, ça pilote le Kanban) |

Les champs texte libre (Points forts, Points de vigilance, Historique / Notes,
Besoin/client potentiel, Prochaine action) → **Long text**.

## 5. Le pipeline (Single select « Étape pipeline »)

Crée ces options **dans cet ordre** :

`Repéré` → `À contacter` → `En discussion` → `Préqualifié` → `Testé` →
`✅ Vivier validé` → `Affecté / en mission` → `⛔ Écarté`

## 6. Créer les vues (le cœur de « facilement recherchable »)

Sur la table, **Create view** :

1. **Kanban — Pipeline** : Kanban groupé par `Étape pipeline`. Tu fais glisser un profil
   d'une colonne à l'autre. C'est ta vue de pilotage quotidienne.
2. **✅ Prêts à affecter** : Grid, filtre `Étape pipeline = ✅ Vivier validé`.
   → **La vue qui vaut de l'or le jour où un client signe.** Tu filtres en plus par Niche.
3. **🔔 Relances dues** : Grid, filtre `Date relance` *is on or before* `today`, trié par
   Date relance. Ta to-do du jour.
4. **Par niche** : 3 vues Grid filtrées sur `Niche` (médical / support / helpdesk), pour
   que chaque manager voie son périmètre.
5. **🗄️ Écartés (archive)** : Grid, filtre `Étape pipeline = ⛔ Écarté`. Garde tes vues
   actives propres **sans rien supprimer** — le vivier reste un actif.

Recherche transverse : la **barre de recherche** (loupe) + les filtres combinés
(niche × niveau français × compétence × dispo × localisation) couvrent tous tes critères.

## 7. Saisie rapide depuis le mobile (sourcing Facebook)

1. **Create view → Form**. Garde **4 champs** seulement : `Lien Facebook`, `Niche`,
   `Note qualif`, `Repéré par` (+ un champ libre « Première impression »).
2. **Share form** → copie le lien → **épingle-le sur l'écran d'accueil de ton tel**.
3. Quand tu repères un profil en scrollant : tu colles le lien + 1 note en **20 s**.
   La qualification détaillée se fait plus tard, à froid, depuis le desktop.

> ❌ Pas de scraping automatisé de Facebook (contraire aux CGU Meta). Repérage **manuel ciblé**.

## 8. Automatisation : digest des relances (1/jour, gratuit)

**Automations → Create → Trigger : « At scheduled time »** (tous les jours à 8h) →
**Action : Find records** (vue `🔔 Relances dues`) → **Action : Send email** vers toi.
→ ~1 run/jour, très loin du quota de 100/mois.

## 9. Hygiène données (pratique, pas juridique)

- **Minimisation** : stocke le **lien** Facebook, pas la photo ni des captures du mur.
- **CV** : range le fichier dans un dossier **Google Drive** (`CV-Vivier`) et ne mets que
  le **lien** dans le champ `Lien CV`. On évite de dupliquer le fichier dans Airtable (ça
  économise le 1 Go d'attachments gratuit, et le CV reste maître au même endroit).
- **Information au 1er contact** : dis à la personne que tu as noté son profil et que tu
  le conserves pour un éventuel poste (et comment se faire retirer).
- **Pas de suppression programmée** : le vivier est un actif. On **archive** (statut
  `⛔ Écarté`) au lieu de supprimer. Le `Code interne VIV-XXXX` permet d'en parler en interne
  sans manipuler l'identité.

## 10. Quand quitter Airtable (déclencheur)

Reste sur Airtable tant que c'est confortable. Bascule si :
- une base **active** approche **~900 lignes** (1ʳᵉ parade : passer à **1 base par niche**,
  3 × 1 000 gratuits) ;
- *ou* tu veux ta **marque / propriété totale / intégration** avec le reste de l'outillage.

Dans ce cas : on rebâtit un outil maison **avec le même schéma** (ce CSV) → migration =
simple export/import. À décider seulement quand le gratuit bloque réellement.

---

### Checklist de démarrage
1. ☐ Compte + workspace `Salverys`, inviter les 2 managers (Editor).
2. ☐ Importer `vivier-template.csv`, supprimer les 3 lignes de démo.
3. ☐ Régler les types de champs (§4) + options des Single/Multiple select.
4. ☐ Créer les 5 vues (§6).
5. ☐ Publier le formulaire de saisie rapide + l'épingler sur le mobile (§7).
6. ☐ Activer le digest de relances (§8).
7. ☐ Archiver les profils inactifs en `⛔ Écarté` (pas de suppression — §9).
