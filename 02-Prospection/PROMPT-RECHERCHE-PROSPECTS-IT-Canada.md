# Prompts de recherche de prospects IT — Canada (priorité Québec & Nouveau-Brunswick)

> **Cadrage marché** : le Canada est un **marché secondaire de test, mais à vrai objectif
> court/moyen terme**. La **France reste la cible principale** (cf. `CLAUDE.md`). Au sein du
> Canada, priorité géographique : **Québec → Nouveau-Brunswick → reste francophone/bilingue**.

**Objet** : faire générer, par une IA dotée de recherche web, deux listes de 50 prospects
qualifiés pour les niches IT de Salverys (support applicatif N1 + helpdesk IT N1, réalisés en
offshore depuis Antananarivo).

**Marché** : Canada. **Priorité de recherche** : provinces francophones — **Québec**, puis
**Nouveau-Brunswick**, puis reste du Canada francophone/bilingue (cohérent avec l'atout
« français langue maternelle »).

**Deux prompts** (à utiliser séparément, dans deux conversations différentes pour ne pas
mélanger les cibles) :
- **Prompt A — Marque blanche** : ESN, MSP, infogérance, intégrateurs, éditeurs SaaS (priorité GTM n°1).
- **Prompt B — Direct** : PME / ETI clientes finales.

**Garde-fous** : aucun claim faux ; mettre en avant uniquement les vrais différenciateurs
(francophone natif, fuseau compatible FR, coût ~40 % inférieur, process documentés : script,
double écoute, reporting, pilote mesuré).

---

## Prompt A — Marque blanche (ESN / MSP / infogérance / intégrateurs / éditeurs SaaS)

```
# RÔLE
Tu es analyste senior en prospection B2B, spécialisé dans l'externalisation de services IT.
Tu produis des listes de partenaires vérifiées, sourcées et priorisées, prêtes à attaquer.

# CONTEXTE
Je commercialise des prestations de support applicatif N1 et de helpdesk IT N1 réalisées
en offshore depuis Madagascar (Antananarivo), à proposer EN MARQUE BLANCHE à des prestataires
IT qui veulent déborder/étoffer leur support sans recruter. Mes 3 atouts différenciants :
- équipe francophone native (français langue maternelle) ;
- fuseau horaire compatible avec les heures ouvrées françaises/européennes et nord-américaines ;
- coût ~40 % inférieur à un prestataire local du marché cible ;
- process documentés (script, double écoute qualité, reporting), pilote mesurable.

# MISSION
Identifie 50 PARTENAIRES potentiels réels au Canada capables de sous-traiter du support N1
sous leur propre marque. Priorise la recherche dans cet ordre géographique :
1) Québec  2) Nouveau-Brunswick  3) reste du Canada francophone/bilingue.

# CIBLES PRIORITAIRES
ESN, MSP (managed service providers), sociétés d'infogérance, intégrateurs, éditeurs SaaS
et prestataires IT qui opèrent ou revendent du support utilisateur N1.

# CRITÈRES D'EXCLUSION (écarter sans exception)
- Très petites structures (< 20 employés) sans capacité de sous-traitance.
- Grands groupes internationaux (> 500 employés) difficilement accessibles.
- Entreprises dont le CA estimé est trop faible pour externaliser une fonction support.
- Prestataires dont le support est déjà manifestement délocalisé/saturé sans angle d'entrée.

# CRITÈRES DE QUALIFICATION
- Localisation : Canada (Québec et Nouveau-Brunswick prioritaires).
- Effectif : idéalement 20 à 500 employés.
- Activité compatible avec la revente/sous-traitance de support IT ou applicatif.
- CA estimé cohérent avec l'externalisation d'une fonction support.
- Bonus de priorité : croissance, recrutement support/IT en cours, expansion de l'offre
  de services managés, nouveaux contrats ou ouverture de bureaux récents.

# MÉTHODE (obligatoire)
- Utilise des recherches web RÉCENTES pour fiabiliser chaque fiche.
- Uniquement des entreprises RÉELLES et vérifiables (site web actif requis).
- Pas de listes génériques : chaque ligne est justifiée individuellement.
- Quand une donnée (CA, effectif) est estimée, marque-la « (est.) » et donne l'hypothèse.
- Classe du plus pertinent au moins pertinent.
- Qualité > quantité : s'il manque des partenaires solides, livre-en moins de 50 et signale-le,
  plutôt que de remplir avec du bruit.

# LIVRABLE — tableau avec ces colonnes
| Entreprise | Site web | Province | Secteur | Effectif est. | CA est. | Type de cible | Pertinence (1-10) | Signal d'achat | Justification |
- « Type de cible » = toujours « Marque blanche » dans ce prompt.
- « Signal d'achat » = élément récent et concret (levée de fonds, recrutement support,
  nouveau contrat, croissance, avis clients pointant la qualité du support, etc.).
- « Justification » = pourquoi ce prestataire a intérêt à sous-traiter du support N1
  francophone en marque blanche (saturation, montée en charge, couverture horaire, coût).

# DÉCIDEURS À VISER (pour l'outreach qui suivra)
Directeur des services managés, COO, Directeur des opérations, Responsable/Directeur support,
DSI / Responsable IT, CEO (petites structures).

# OBJECTIF FINAL
Une liste exploitable immédiatement pour une campagne de prospection B2B ciblée, chaque
partenaire étant rattaché à un décideur identifiable.
```

---

## Prompt B — Direct (PME / ETI clientes finales)

```
# RÔLE
Tu es analyste senior en prospection B2B, spécialisé dans l'externalisation de services IT.
Tu produis des listes de prospects vérifiées, sourcées et priorisées, prêtes à attaquer.

# CONTEXTE
Je commercialise des prestations de support applicatif N1 et de helpdesk IT N1 réalisées
en offshore depuis Madagascar (Antananarivo), à vendre EN DIRECT à des PME/ETI dont le parc
informatique ou les applications métiers génèrent un besoin de support utilisateur récurrent.
Mes 3 atouts différenciants :
- équipe francophone native (français langue maternelle) ;
- fuseau horaire compatible avec les heures ouvrées françaises/européennes et nord-américaines ;
- coût ~40 % inférieur à un prestataire local du marché cible ;
- process documentés (script, double écoute qualité, reporting), pilote mesurable.

# MISSION
Identifie 50 PROSPECTS clients finaux réels au Canada susceptibles d'acheter une prestation
de helpdesk IT N1 ou de support applicatif N1. Priorise la recherche dans cet ordre :
1) Québec  2) Nouveau-Brunswick  3) reste du Canada francophone/bilingue.

# CIBLES PRIORITAIRES
PME et ETI disposant d'un parc informatique conséquent OU d'applications métiers (ERP, SaaS,
logiciels propriétaires) qui génèrent des demandes de support utilisateur récurrentes.

# CRITÈRES D'EXCLUSION (écarter sans exception)
- Très petites structures (< 20 employés) au besoin de support négligeable.
- Grands groupes internationaux (> 500 employés) difficilement accessibles.
- Entreprises dont le CA estimé est trop faible pour externaliser une fonction support.

# CRITÈRES DE QUALIFICATION
- Localisation : Canada (Québec et Nouveau-Brunswick prioritaires).
- Effectif : idéalement 20 à 500 employés.
- Activité générant un vrai besoin de support utilisateur (parc IT ou applis métiers).
- CA estimé cohérent avec l'externalisation d'une fonction support.
- Bonus de priorité : croissance, recrutements, digitalisation/déploiement d'un nouvel outil,
  offre de services elle-même dépendante d'un support utilisateur.

# MÉTHODE (obligatoire)
- Utilise des recherches web RÉCENTES pour fiabiliser chaque fiche.
- Uniquement des entreprises RÉELLES et vérifiables (site web actif requis).
- Pas de listes génériques : chaque ligne est justifiée individuellement.
- Quand une donnée (CA, effectif) est estimée, marque-la « (est.) » et donne l'hypothèse.
- Classe du plus pertinent au moins pertinent.
- Qualité > quantité : s'il manque des prospects solides, livre-en moins de 50 et signale-le,
  plutôt que de remplir avec du bruit.

# LIVRABLE — tableau avec ces colonnes
| Entreprise | Site web | Province | Secteur | Effectif est. | CA est. | Type de cible | Pertinence (1-10) | Signal d'achat | Justification |
- « Type de cible » = toujours « Direct » dans ce prompt.
- « Signal d'achat » = élément récent et concret (croissance, recrutement, nouvel outil
  déployé, expansion, avis clients pointant des problèmes de support, etc.).
- « Justification » = pourquoi cette entreprise a besoin d'un helpdesk IT externalisé OU
  d'un support applicatif externalisé (volume de tickets, parc, couverture horaire, coût RH).

# DÉCIDEURS À VISER (pour l'outreach qui suivra)
CEO, COO, Directeur des opérations, DSI / Responsable IT, Responsable support.

# OBJECTIF FINAL
Une liste exploitable immédiatement pour une campagne de prospection B2B ciblée, chaque
prospect étant rattaché à un décideur identifiable.
```

---

## Conseils d'usage
- Lance **A et B dans deux conversations distinctes** : ça évite que l'IA mélange partenaires
  (revendeurs) et clients finaux, et garde la colonne « Type de cible » propre.
- Si l'IA peine à trouver 50 cibles **QC/NB uniquement**, c'est normal : laisse-la élargir au
  reste du Canada francophone/bilingue (Ontario, etc.) en gardant le tri par pertinence.
- Récupère le tableau en CSV (« redonne-moi ce tableau au format CSV ») pour import direct
  dans le CRM / Emelia.
- Étape suivante recommandée : enrichir chaque ligne retenue avec le décideur nominatif +
  email, puis brancher sur la séquence `OUTREACH-IT-N1-marque-blanche.md`.
