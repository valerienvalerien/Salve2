# MODELE-DEVIS.md — Gabarit de devis Salverys

> Gabarit de devis prêt à compléter. **Deux variantes** : **médical direct** (forfaits
> publics) et **MB partenaire** (3 niches, rate card remise au cadrage sous NDA).
> **Source de vérité prix : `PRICING.md`** — en cas de divergence, `PRICING.md` fait foi.
>
> Règles fixes : forfait/ETP **jamais à l'appel côté client final** · offre de lancement
> = **1er mois à −50 %** (jamais « essai gratuit ») · **mise en service 490 € — offerte** ·
> côté médical on dit **« forfait »**, jamais « abonnement » · le prix MB figure dans le
> devis au partenaire (c'est l'acheteur) mais **ne se recopie jamais dans un support public**.
>
> Identité juridique en cours d'enregistrement → laisser les placeholders `[...]` tant que
> non renseignés. Ne rien inventer (SIREN, préavis, outil de paiement).

---

## En-tête commun (à reprendre sur chaque devis)

```
SALVERYS — [Salverys — raison sociale]
[forme juridique + immatriculation]
[adresse — Antananarivo, Madagascar]
Représentant : Valérien Rakotosalama
contact@salverys.fr

DEVIS N° [AAAA-MM-XXX]
Date d'émission : [JJ/MM/AAAA]
Validité du devis : 30 jours

Client : [CLIENT — raison sociale]
SIREN/SIRET : [__________]
Adresse : [__________]
Contact : [nom — fonction — email]
```

Devise : **euro (€)**. Facturation **mensuelle**, à terme échu, le [jour] de chaque mois.

---

# VARIANTE A — Médical direct (forfaits publics)

## A.1 Prestation — télésecrétariat médical

| Réf. | Désignation | Qté | Prix unitaire / mois | Total / mois |
|---|---|---|---|---|
| FORF | Forfait **[Essentiel / Confort / Intensif]** — voir détail ci-dessous | 1 | **[350 / 590 / 950] €** | [ ] € |
| OPT-1 | Option **Samedi matin** (8h-13h sam.) | [0/1] | +90 € | [ ] € |
| OPT-2 | Option **Soirée étendue** (20h-22h sem.) | [0/1] | +120 € | [ ] € |
| OPT-3 | Option **Samedi complet** (8h-18h sam.) | [0/1] | +150 € | [ ] € |
| SETUP | **Mise en service** (intégration agenda, formation consignes, paramétrage) | 1 | ~~490 €~~ | **0 € — offerte** |
| | **Total mensuel (hors offre de lancement)** | | | **[ ] €** |

**Détail des forfaits** (`PRICING.md §1`) :

| Forfait | Volume inclus | Prix mensuel |
|---|---|---|
| Essentiel | jusqu'à ~250 appels/mois | 350 € |
| Confort | jusqu'à ~500 appels/mois | 590 € |
| Intensif | jusqu'à ~900 appels/mois | 950 € |
| Sur-mesure | > 900 appels/mois | sur devis |

- Couverture **8h-20h, 5j/7** (soir/week-end via les options ci-dessus).
- Intégration **Doctolib / Maiia / Médistory / Cegedim**.
- Dépassement = **bascule au palier supérieur**, jamais de surfacturation à l'appel.

## A.2 Offre de lancement (à cocher)

- [ ] **1er mois à −50 %**, sans engagement → 1er mois facturé **[total ÷ 2] €**.
- [ ] **Programme « clients fondateurs »** (5 premiers cabinets) — dégressif sur 3 mois,
  engagement réciproque 3 mois, **garantie décroché ≥ 90 % incluse**, contre **témoignage
  à 60 j + 1 mise en relation** :

  | Mois | Remise | Prix payé (réf. Essentiel 350 €) |
  |---|---|---|
  | 1 | −50 % | 175 € |
  | 2 | −30 % | 245 € |
  | 3 | −15 % | 297,50 € |
  | 4+ | plein tarif | 350 € |

  *(transposer les % au forfait souscrit)*

## A.3 Engagement de service (en régime)

À partir du 1er mois plein en régime : **≥ 90 % d'appels patients décrochés** sur 8h-20h,
dans la limite du forfait. À défaut sur un mois civil → **avoir de 20 %** sur la facture du
mois suivant, **automatique**, dans la limite d'**1 mois sur 12**. Pas de remboursement
cash. Périmètre et seuil **figés au cadrage** (cf. contrat + `PRICING.md §7`).

## A.4 Modalités (médical direct)

- **Sans engagement** : résiliable à tout moment, préavis [__ jours].
- Facturation mensuelle, paiement à [__ jours] par [moyen de paiement à préciser].
- Le présent devis vaut bon de commande une fois daté, signé et accompagné de la mention
  « Bon pour accord ».

---

# VARIANTE B — MB partenaire (sous-traitance, 3 niches)

> Le partenaire (donneur d'ordre) est l'acheteur : la rate card figure **dans son devis**.
> Elle reste **confidentielle (NDA)** et ne doit **jamais** apparaître sur un support public.
> Garder uniquement le bloc de la niche concernée.

## B.1 — Télésecrétariat médical FR (à l'appel traité, par créneau)

| Créneau | Prix de gros / appel traité | Volume estimé/mois | Total estimé |
|---|---|---|---|
| Jour semaine (8h-20h) — débordement & pics | **0,90 – 1,10 €** | [ ] | [ ] € |
| Soir (20h-22h) & samedi | **1,20 – 1,40 €** | [ ] | [ ] € |
| Capacité réservée sur pics annoncés | base créneau **+15-20 %** (engagement de volume) | [ ] | [ ] € |

KPI engagé : **taux de décroché**. Plancher : jamais sous coût chargé agent + ~20 %.

## B.2 — Support N1 SaaS (ETP par position, dégressif)

| Engagement | Prix MB €/mois/ETP | Nb ETP | Total / mois |
|---|---|---|---|
| 1 ETP | **1 700 €** | [ ] | [ ] € |
| 3 ETP | **1 500 €** | [ ] | [ ] € |
| 5+ ETP | **1 350 €** | [ ] | [ ] € |

KPI engagé : **SLA de première réponse**. Option **Priority** (capacité réservée non
mutualisée, backup intégré) : multiplicateur `1,10 + 0,90/n` (`PRICING.md §3`).

## B.3 — Helpdesk IT N1 (ITIL, ETP par position, dégressif)

| Engagement | Prix MB €/mois/ETP | Nb ETP | Total / mois |
|---|---|---|---|
| 1 ETP | **2 000 €** | [ ] | [ ] € |
| 3 ETP | **1 750 €** | [ ] | [ ] € |
| 5+ ETP | **1 550 €** | [ ] | [ ] € |

KPI engagé : **SLA de prise en charge**. Option **Priority** idem B.2.

## B.4 Mise en service & offre de lancement (MB)

- SETUP : **cadrage & mise en place — offerts** (afficher la valeur, facturer 0 €).
- **Mois pilote à −50 %**, sans engagement, sur périmètre limité (débordement ou lot de
  **200-400 tickets** côté support/IT) défini au cadrage.

## B.5 Engagement de service (MB, en régime)

KPI convenu par niche (décroché / SLA 1re réponse / SLA prise en charge). En deçà du seuil
sur un mois civil → **avoir de 20 %** automatique sur la facture suivante, max 1 mois/12.
Seuil exact **figé au cadrage**.

## B.6 Modalités (MB partenaire / support / IT)

- **Marque blanche totale** : scripts, outils, SLA et **nom du partenaire**.
- **Durée** : engagement initial **3 mois (pilote)**, puis **12 mois renouvelable**
  (24-36 mois réservés aux grands comptes avec dégressif).
- Backup **+1 agent par compte**. Plan de continuité écrit remis avant démarrage.
- Facturation mensuelle, paiement à [__ jours] par [moyen de paiement à préciser].

---

## Pied de devis commun

```
Conditions : prestations régies par le contrat de prestation de services Salverys
(MODELE-CONTRAT-PRESTATION.md) et son annexe RGPD/DPA (MODELE-DPA-RGPD.md),
qui prévalent en cas de contradiction avec le présent devis.

Bon pour accord — le [JJ/MM/AAAA]
Nom, fonction, signature du client :
```
