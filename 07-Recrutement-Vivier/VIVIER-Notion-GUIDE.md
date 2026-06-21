# VIVIER de talents — Kit Notion (gratuit, **mono-user**)

> Variante **mono-utilisateur**. En **solo**, le plan gratuit Notion = **blocs illimités**
> (le plafond de 1 000 blocs ne s'applique qu'à partir de **2 membres**). Donc le volume
> n'est **pas** un frein, même pour des centaines de profils.
>
> ⚠️ **Tradeoff assumé** : en mono-user, **les 2 managers ne co-éditent pas** le vivier (au
> mieux invités en *lecture/commentaire* comme guests). Si tu veux qu'ils qualifient
> eux-mêmes les profils de leur niche, prends plutôt le **kit Airtable** (`VIVIER-Airtable-GUIDE.md`,
> 3 éditeurs gratuits). Les deux partagent le **même schéma** → tu peux changer d'avis sans
> tout refaire.

**Fichier d'import :** le **même** `vivier-template.csv` (à côté de ce guide).

---

## 1. Compte et workspace

1. Crée un compte Notion → un workspace perso. **Reste le seul membre** (sinon le plafond
   de 1 000 blocs s'active).
2. Si tu veux montrer le vivier aux managers : invite-les en **guests** sur la page, en
   **lecture** — ça ne déclenche pas le plafond, mais ils ne co-gèrent pas.

## 2. Importer le template → crée la database

1. Dans la sidebar : **Import → CSV → `vivier-template.csv`**.
2. Notion crée une **database** avec toutes les colonnes + 3 lignes de démo.
3. Ouvre-la en pleine page (**Open as page**) et **supprime les 3 lignes de démo**
   (VIV-0001/0002/0003).

## 3. Régler le TYPE de chaque propriété

À l'import tout est en « Text ». Clique sur l'entête de colonne → **Edit property → Type** :

| Propriété | Type Notion | Options / notes |
|---|---|---|
| Lien Facebook | **URL** | cliquable |
| Email / WhatsApp | Email / Phone | |
| Date repérage · Date relance · Info candidat faite | **Date** | |
| Repéré par | Select | `Valérien`, `Manager médical`, `Manager IT` |
| **Niche** | **Select** | `Télésecrétariat médical`, `Support N1 SaaS`, `Helpdesk IT N1`, `Manager`, `Relation Clients` (branche future) |
| Niveau français | Select | `Natif (oral+écrit)`, `Natif (oral) / Bon (écrit)`, `Bon`, `À tester` |
| Expérience (années) · Prétention (Ar/mois) | **Number** | |
| **Compétences** | **Multi-select** | Notion crée 1 tag par valeur séparée par virgule |
| Disponibilité | Select | `Immédiate`, `Sous préavis`, `À confirmer` |
| **Note qualif** | Select | `A`, `B`, `C` (mets des couleurs) |
| **Étape pipeline** | **Select** | voir §4 |
| Points forts · Points de vigilance · Besoin/client · Prochaine action · Historique / Notes | Text | |

> `Code interne` reste en **Title** (la 1ʳᵉ colonne Notion) → format `VIV-0001`, `VIV-0002`…

## 4. Le pipeline (Select « Étape pipeline »)

Mêmes options, dans cet ordre :

`Repéré` → `À contacter` → `En discussion` → `Préqualifié` → `Testé` →
`✅ Vivier validé` → `Affecté / en mission` → `⛔ Écarté`

## 5. Les vues

Sur la database : **+ → New view** :

1. **Board — Pipeline** : type *Board*, **Group by** `Étape pipeline`. Glisser-déposer.
2. **✅ Prêts à affecter** : *Table*, filtre `Étape pipeline = ✅ Vivier validé` (+ filtre Niche).
   → La vue clé quand un client signe.
3. **🔔 Relances dues** : *Table*, filtre `Date relance` *is on or before* `Today`, trié par
   Date relance.
4. **Par niche** : 3 vues *Table* filtrées sur `Niche`.
5. **🗄️ Écartés (archive)** : *Table*, filtre `Étape pipeline = ⛔ Écarté`. On **archive**,
   on ne supprime pas — le vivier est un actif.

Recherche : la recherche globale Notion (`Ctrl/Cmd+P`) + les filtres combinés couvrent niche,
niveau de français, compétence, dispo, localisation.

## 6. Saisie rapide depuis le mobile (sourcing Facebook)

Notion propose des **Forms** (gratuit, avec mention Notion) :
1. **+ New view → Form** sur la database. Garde **4 champs** : `Lien Facebook`, `Niche`,
   `Note qualif`, `Repéré par` (+ une note « Première impression »).
2. **Share form** → copie le lien → **épingle-le sur l'écran d'accueil du mobile**.
3. Profil repéré en scrollant → tu colles le lien + 1 note en **20 s**. Qualification fine
   plus tard, au calme.

> ❌ Pas de scraping automatisé de Facebook (CGU Meta). Repérage **manuel ciblé**.

## 7. Relances (sans automatisation)

Notion gratuit n'a **pas** de digest e-mail programmé fiable. Tu pilotes avec :
- la vue **🔔 Relances dues** (ta to-do du jour) ;
- les **rappels de date** Notion (sur la propriété `Date relance`, option *Remind*) qui te
  notifient dans l'app.

> C'est la principale différence avec Airtable, qui sait envoyer un **digest e-mail
> quotidien** automatiquement. En solo, la vue filtrée suffit largement.

## 8. Hygiène données (pratique)

- **Minimisation** : stocke le **lien** Facebook, pas la photo ni des captures du mur.
- **Information au 1er contact** : préviens la personne que tu as noté son profil et le
  conserves pour un éventuel poste (et comment se faire retirer).
- **Pas de suppression programmée** : le vivier est un actif → range les profils inactifs en
  `⛔ Écarté`. Le `Code interne VIV-XXXX` permet d'en parler sans manipuler l'identité.

---

### Checklist de démarrage
1. ☐ Compte Notion solo (rester **seul membre**).
2. ☐ Importer `vivier-template.csv`, supprimer les 3 lignes de démo.
3. ☐ Régler les types de propriétés (§3) + options des Select / Multi-select.
4. ☐ Créer les 5 vues (§5).
5. ☐ Publier le **Form** de saisie rapide + l'épingler sur le mobile (§6).
6. ☐ Activer les rappels de date sur `Date relance` (§7).
