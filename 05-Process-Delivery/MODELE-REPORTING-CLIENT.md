# MODELE-REPORTING-CLIENT.md — Modèles de reporting client Salverys

> Gabarits de reporting **envoyés au client** (≠ grille QA interne). Tiennent la promesse
> « Reporting mensuel » (`OFFRE-MEDICAL.md §3`) et « reporting hebdo » MB
> (`ONEPAGER-PARTENAIRE-MB.md`). Le client **mesure, ne croit pas sur parole**.
>
> Seuils & garanties : `PRICING.md §7` fait foi (décroché **≥ 90 %**, avoir **20 %**
> automatique si non tenu, max 1 mois/12). Remplir les `[ ]` ; ne pas inventer de chiffre.

---

# A — Médical direct (cadence MENSUELLE)

```
REPORTING SALVERYS — [Cabinet] — Mois de [MM/AAAA]
Forfait : [Essentiel / Confort / Intensif]  | Plages couvertes : 8h-20h [+ options]
```

| Indicateur | Valeur | Cible | Statut |
|---|---|---|---|
| **Taux de décroché** (appels présentés 8h-20h) | [ ] % | **≥ 90 %** | 🟢/🟠/🔴 |
| **Délai moyen de réponse** | [ ] s | [ ] | |
| **Volume d'appels traités** | [ ] | forfait : [250/500/900] | |
| **Taux d'utilisation du forfait** | [ ] % | | |
| Dépassements / bascule de palier | [oui/non] | | |
| RDV pris / agenda mis à jour | [ ] | | |

**Engagement de service** : décroché [ ] % vs 90 %.
→ Si < 90 % sur le mois (en régime, hors conditions de défense) : **avoir de 20 %** appliqué
automatiquement sur la facture de [mois suivant] — statut : [appliqué / sans objet], compteur
annuel [n/1].

**Lecture du mois** : [2-3 lignes — faits marquants, tendance, recommandation. Rappeler le
recadrage ROI : ~16 €/jour ouvré pour ne plus perdre d'appels.]

---

# B — MB partenaire (cadence HEBDOMADAIRE)

```
REPORTING SALVERYS (marque blanche) — [Partenaire] — Semaine [S / du .. au ..]
Niche : [Télésec médical / Support N1 SaaS / Helpdesk IT]
```

### Bloc KPI selon la niche (garder le bloc pertinent)

**Télésecrétariat médical FR** — KPI : taux de décroché

| Indicateur | Valeur | Cible | Statut |
|---|---|---|---|
| Taux de décroché | [ ] % | [seuil cadrage] | 🟢/🟠/🔴 |
| Appels traités (jour / soir-samedi / pics) | [ ]/[ ]/[ ] | | |
| Délai moyen de réponse | [ ] s | | |

**Support N1 SaaS** — KPI : SLA de première réponse

| Indicateur | Valeur | Cible | Statut |
|---|---|---|---|
| SLA 1re réponse respecté | [ ] % | [seuil cadrage] | 🟢/🟠/🔴 |
| Tickets traités / résolus N1 | [ ] / [ ] | | |
| Taux d'escalade N2 | [ ] % | | |

**Helpdesk IT N1 (ITIL)** — KPI : SLA de prise en charge

| Indicateur | Valeur | Cible | Statut |
|---|---|---|---|
| SLA prise en charge respecté | [ ] % | [seuil cadrage] | 🟢/🟠/🔴 |
| Tickets pris en charge / résolus N1 | [ ] / [ ] | | |
| Taux d'escalade N2 | [ ] % | | |

### Communs à toutes les niches

| Indicateur | Valeur |
|---|---|
| ETP actifs sur le compte | [ ] |
| Escalades notables (incidents, réclamations) | [ ] |
| Backup déclenché (absences couvertes) | [oui/non] |

**Engagement de service** : KPI [ ] % vs seuil convenu.
→ Si non tenu sur le mois civil : **avoir de 20 %** automatique sur la facture suivante
(max 1 mois/12) — statut : [appliqué / sans objet], compteur annuel [n/1].

**Lecture de la semaine** : [2-3 lignes — volume vs capacité, créneaux sous tension, points
à arbitrer avec le partenaire, opportunités d'extension de périmètre.]

---

## Règles de remplissage

- **Statut couleur** : 🟢 cible atteinte · 🟠 sous la cible mais dans la marge · 🔴 sous le
  seuil engagé (déclenche le suivi avoir).
- L'avoir 20 % s'apprécie **par mois civil** et **en régime uniquement** (pas pendant le mois
  pilote) — cf. conditions de défense, `PRICING.md §7` / contrat art. 6.
- Ne jamais publier les chiffres MB hors du partenaire concerné (confidentiel).
