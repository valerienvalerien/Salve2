# OUTIL-COMM-INTERNE.md — Slack vs Teams (arbitrage)

> Choix de l'outil de **communication interne** (équipe Salverys : direction + 2 managers
> de niche + agents freelances, 100 % BYOD, Antananarivo). Ne concerne **pas** les outils
> du client : en marque blanche, les agents travaillent dans les SaaS du donneur d'ordre
> (`PRICING.md §10`). Coûts à reporter dans `tresorerie-salverys.html` / `FINANCE-PREVISIONNEL.md`
> (ligne « SaaS »).

---

## 1. Décision

**Microsoft Teams**, sur le tenant M365 déjà retenu pour le daily `salverys.fr`
(`SETUP-COLD-MAILING.md §3`). Slack n'est pas retenu comme outil interne.

Raison courte : Teams arrive **dans une licence qu'on paie déjà pour la messagerie**, avec
le stockage documentaire (SharePoint/OneDrive) et la visio dans le même forfait — là où
Slack est une **ligne budgétaire en plus** qui ne couvre que le chat.

---

## 2. Comparatif décisionnel

| Critère | Teams (M365 Business Basic) | Slack |
|---|---|---|
| **Coût réel** | ~6 €/user/mois, **licence déjà nécessaire** pour la boîte mail pro → coût marginal du chat ≈ **0** | Free = 0 € mais **historique limité (~90 j)** · Pro ~7 €/user/mois **en plus** de M365 |
| **Historique / traçabilité** | illimité selon la rétention du tenant | plan gratuit : les échanges disparaissent → incompatible avec l'argument « process documentés » |
| **Fichiers & base de connaissance** | SharePoint/OneDrive inclus (1 To/user) | stockage limité, il faut un outil tiers à côté |
| **Visio / partage d'écran** (double écoute, shadowing) | inclus, enregistrement possible | inclus en Pro seulement pour le multi-participants |
| **Admin & sécurité** | une seule console (MFA, MDM léger, révocation d'accès en 1 clic quand un freelance part) | 2e console à administrer, 2e surface de départ/offboarding |
| **Poids sur des postes BYOD modestes** | client lourd gourmand → **imposer le client web + audio only par défaut** | plus léger, mais l'écart ne justifie pas une ligne de coût |
| **Réflexe du marché FR (ESN/MSP, santé, éditeurs)** | dominant côté donneurs d'ordre | dominant surtout chez les éditeurs SaaS |

---

## 3. Le faux argument à écarter

« Nos clients sont sur Slack, il faut donc qu'on soit sur Slack. »
**Faux** : on peut être **invité gratuitement** dans le Slack **ou** le Teams d'un client
(Slack Connect / canal externe Teams) **quel que soit** l'outil qu'on utilise en interne.
Le choix interne n'engage donc pas la capacité à s'aligner sur un donneur d'ordre.

**Règle** : un canal client s'ouvre **chez le client**, dans son outil. On n'invite jamais
un client dans le Teams interne (il y verrait la cuisine interne — incompatible marque blanche).

---

## 4. Mise en place (interne)

Équipes / canaux à créer, pas plus :

- `#general` — annonces direction uniquement
- `#medical` / `#it` — une équipe par niche, propriétaire = le manager de niche
- `#escalade` — N1 bloqué → manager, **délai de réponse engagé en interne**
- `#passation` — relève de shift (format fixe : en cours / bloqué / à surveiller)
- `#qa` — restitutions de double écoute (`PROCESS-QA-DOUBLE-ECOUTE.md`), **jamais** de
  nom de patient ni de donnée client identifiante

Règles :

1. **Le chat n'est pas la base de connaissance.** Toute procédure valide part dans
   SharePoint / le dépôt. Un canal sert à trancher, pas à archiver.
2. **Aucune donnée patient ni identifiant client dans le chat** (`CONFORMITE-HDS-RGPD.md`).
   Les données de santé restent dans l'outil du client, point.
3. **Client web + audio seul par défaut** (BYOD + délestage/4G : la vidéo est l'exception,
   pas la règle).
4. **Offboarding freelance** : révocation du compte M365 = coupure chat + mail + fichiers
   en une action. À intégrer à la fin de mission.

---

## 5. Quand rouvrir le sujet

Un seul cas : un donneur d'ordre impose **contractuellement** que l'équipe dédiée vive
dans un Slack partagé au quotidien. Réponse alors = rejoindre **son** Slack en invité
(coût 0), pas migrer l'interne.
