# PLAN DE FORMATION — Salverys

> Complète `POLITIQUE-RH-CULTURE.md` §6. Deux dispositifs distincts :
> **A. la remise à niveau individuelle** (rattraper l'écart d'un profil B recruté sous
> contrainte de délai) et **B. le cycle Culture France**, mensuel et collectif.
>
> Référentiels réutilisés, rien n'est créé en double : les items du
> `MINI-TEST-Qualification.md` servent de **diagnostic d'entrée**, la grille de
> `05-Process-Delivery/PROCESS-QA-DOUBLE-ECOUTE.md` sert de **contrôle de sortie**.

---

## 1. Pourquoi ce plan existe (correction d'une hypothèse)

`POLITIQUE-RH-CULTURE.md` posait qu'aucun catalogue n'était nécessaire, la grille QA
suffisant à structurer la montée en compétence. **Cette hypothèse ne tient que si l'on
n'embauche que des profils notés A.**

Or la promesse commerciale est **« opérationnel en 3-4 semaines »** (`PRICING.md §3.c`),
dont 2-4 semaines de recrutement. Sur une fenêtre pareille, on ne choisit pas dans un
marché : on prend le meilleur profil **disponible**. En pratique, ce sera régulièrement un
**B (11-15/20)** — « potentiel, 1-2 points à lever » — et non un A.

D'où la règle :

> **Un B n'est pas un mauvais recrutement. C'est un recrutement qui arrive avec une dette
> de compétence identifiée, chiffrée et datée.** Le plan de formation est le remboursement
> de cette dette. Sans lui, l'écart se paie en score QA, donc en SLA, donc en avoir client.

**Le catalogue ne remplace pas le vivier.** L'ordre reste : viser 3 profils A prêts à
affecter par niche (`POLITIQUE-RH-CULTURE.md` §3.b). La formation est le **filet quand le
vivier est mince**, pas la stratégie de recrutement.

---

## 2. Ce qui se rattrape, ce qui ne se rattrape pas

C'est le tri le plus important du document : former sur un point non formable, c'est payer
un salaire pendant deux mois pour finir au même endroit.

| Item du mini-test | Rattrapable ? | Délai réaliste |
|---|---|---|
| **V1 Articulation / débit** | ⚠️ Partiellement — le débit se travaille, le grain de voix non | 4-8 semaines |
| **V2 Accent / neutralité** | ❌ **Éliminatoire si V1+V2 = 0** — on ne rattrape pas un oral incompréhensible | — |
| **V3 Grammaire & vocabulaire oral** | ✅ Oui, c'est le cœur du cycle Culture France | continu |
| **V4 Écrit (orthographe, ponctuation)** | ✅ Oui, le gain est rapide et mesurable | 3-6 semaines |
| **V5 Écoute & reformulation** | ✅ Oui, par mises en situation | 2-4 semaines |
| **M/S/H — technique de niche** (ticketing, ITIL, agenda, diagnostic) | ✅ **Le plus facile à combler** — c'est de la procédure | 1-3 semaines |
| **S3 Anglais lu** (docs, release notes) | ✅ Oui, en lecture seule | 4-8 semaines |
| **R1/R2 Posture & sang-froid** | ⚠️ Partiellement — se travaille, mais une posture non pro en mise en situation reste **éliminatoire** | 4-8 semaines |
| **Connexion / équipement non fiable** | ❌ **Éliminatoire** — ce n'est pas une compétence | — |

**Lecture** : le déficit technique se comble vite, le déficit de français écrit se comble
bien, l'oral se travaille lentement, la posture et la connexion ne se négocient pas. Un
profil B **technique** est un bon pari sous contrainte de délai. Un profil B **sur le bloc
Voix & français** est un pari cher.

---

## 3. Dispositif A — Remise à niveau individuelle

### 3.a Déclenchement

À l'embauche, le score du mini-test est repris **item par item** dans le **passeport de
compétences** de l'agent (Airtable, fiche vivier → fiche salarié). Tout item noté **0 ou 1**
sur un critère rattrapable ouvre un module. Pas de plan générique : **on ne forme que sur
les items ouverts**.

### 3.b Les modules

| # | Module | Déclencheur | Volume | Format | Animé par |
|---|---|---|---|---|---|
| **F1** | **Écrit professionnel FR** — orthographe, ponctuation, reformulation d'un message client, notes de ticket | V4 ≤ 1 | **6 h** (6 × 1 h) | Exercices écrits corrigés + réécriture de vrais tickets anonymisés | Référent |
| **F2** | **Oral : débit, articulation, reformulation** | V1 ou V5 ≤ 1 | **4 h** (8 × 30 min) | Lecture à voix haute enregistrée + jeux de rôle + réécoute | Référent |
| **F3** | **Ticketing & ITIL N1** — incident vs demande, priorisation, catégorisation, traçabilité | S2/H3 ≤ 1 | **4 h** | Sur l'outil réel du compte, tickets fictifs | Référent |
| **F4** | **Méthode de diagnostic N1** — questionner, isoler, savoir quand escalader | S1/H1/H2 ≤ 1 | **6 h** | Cas pratiques + arbre de décision du compte | Référent |
| **F5** | **Anglais lu** — documentation, release notes, messages d'erreur | S3 ≤ 1 | **6 h** étalées | Lecture guidée + glossaire du compte | Autoformation encadrée |
| **F6** | **Posture client difficile** — accueil, empathie, cadrage, non-promesse | R1/R2 ≤ 1 | **4 h** | Mises en situation (scénarios `MINI-TEST` §Bloc 3) | Référent |
| **F7** | **Agenda & prise de RDV médicale** — Doctolib/Maiia, urgence vs RDV, secret médical | M2/M3 ≤ 1 | **4 h** | Environnement de test | Référent médical |

### 3.c Règles de mise en œuvre

- **Plafond : 15 h de remise à niveau sur les 8 premières semaines**, au-delà c'est que le
  recrutement était mauvais — la décision se prend en période d'essai, pas en formation.
- **Temps de travail payé.** Aucune formation en heures non rémunérées : on paie 4,5× le
  marché, on n'emprunte pas les soirées.
- **Hors production pendant le mois pilote d'un compte.** Le pilote est la vitrine
  contractuelle : on ne l'utilise pas comme terrain d'entraînement.
- **Contrôle de sortie chiffré** : re-passage des seuls items ouverts à **J+60**, plus le
  score QA de la période. Objectif : **zone verte (≥ 85 %)** ou plan d'action prolongé.
- **Traçabilité** : chaque module a une date d'ouverture, une date de clôture et un
  résultat dans le passeport. Un module ouvert sans date de clôture est un signal, pas un
  détail administratif.

---

## 4. Dispositif B — Cycle « Culture France », 1 séance/mois

**Ce n'est pas de la culture générale, c'est de la compétence opérationnelle.** Un agent
qui ne sait pas que la France est en vacances la première semaine d'août, qui ne comprend
pas « je suis en RTT », qui bute sur « le CSE » ou qui répond « d'accord » à quelqu'un qui
dit « c'est inadmissible » perd la conversation — quel que soit son niveau technique.

### 4.a Format

- **1 h par mois**, en équipe, **en heures payées**, hors créneaux de pic client.
- **45 min de contenu + 15 min de mise en situation ou quiz.**
- **Une fiche d'une page par séance**, archivée (Drive) et listée dans Airtable. Au bout
  d'un an, c'est un **classeur d'intégration** : les 12 fiches servent de socle aux
  arrivants suivants, et le coût de production ne se paie qu'une fois.
- Animée par le fondateur au départ, **transférée au référent d'exploitation** dès qu'il est
  en poste (la fiche existe, l'animation devient reproductible).

### 4.b Programme année 1

| Mois | Séance | Ce que l'agent doit savoir faire après |
|---|---|---|
| 1 | **Géographie utile** — régions, grandes villes, IDF vs province, départements/codes postaux, DOM-TOM, décalage horaire Madagascar ↔ France | Situer un interlocuteur, comprendre « je suis sur le site de Lille », ne pas confondre un 974 avec une erreur de saisie |
| 2 | **Le calendrier français** — jours fériés, ponts, vacances scolaires (zones A/B/C), la rentrée, août, les périodes creuses | Anticiper les pics et les creux, comprendre « on voit ça à la rentrée » |
| 3 | **Registres de langue** — vouvoiement/tutoiement, formules d'ouverture et de clôture, écart mail / téléphone / ticket | Choisir le bon registre sans y penser |
| 4 | **Les calques qui trahissent** — malgachismes, faux-amis, tournures traduites, « je vous reviens », « actuellement » | Repérer et corriger ses propres réflexes |
| 5 | **Le monde du travail français** — DSI, DRH, CSE, RTT, congés, télétravail, siège vs agence, prestataire vs interne | Comprendre le contexte de la demande, pas seulement sa formulation |
| 6 | **L'écosystème IT français** — ESN vs éditeur vs MSP vs intégrateur, le vocabulaire courant (VPN, AD, O365, poste, parc) | Parler la langue des utilisateurs de nos donneurs d'ordre |
| 7 | **Le mécontentement à la française** — « c'est inadmissible », l'ironie, la plainte rituelle ; excuse mesurée, non-promesse, cadrage | Ne pas sur-promettre, ne pas s'écraser, ne pas prendre pour soi |
| 8 | **Références de conversation** — sport, médias, marques, actualité courante | Comprendre une allusion. **Objectif : comprendre, pas débattre** |
| 9 | **Administratif du quotidien** — Sécu, mutuelle, impôts, RIB/IBAN, La Poste, Doctolib | Décoder ce qu'un utilisateur mentionne en passant (utile surtout au médical) |
| 10 | **Accents et régionalismes** — Nord, Sud, Est, Marseille, Belgique, Suisse | Comprendre à l'oreille ce qui n'est pas du français « neutre » |
| 11 | **Sécurité vue par l'utilisateur** — phishing, mot de passe, RGPD côté usager | Tenir la ligne « je ne demande jamais votre mot de passe » avec les bons mots |
| 12 | **Québec & Canada** — courriel, lexique, ton, horaires, jours fériés CA | Basculer de registre sur un compte canadien |

> **Ordre non figé** : si un compte canadien signe en M3, la séance 12 remonte en M3. Le
> programme sert la production, pas l'inverse.

### 4.c Ce qu'on n'achète pas (règle SaaS-first inversée)

Pas d'abonnement e-learning, pas de plateforme LMS, pas de prestataire de formation
linguistique tant que l'effectif est inférieur à ~8 agents. À cette taille, une séance
animée en interne avec une fiche écrite est **plus ciblée et moins chère** qu'un catalogue
générique. Le point de bascule à surveiller : au-delà de 8-10 agents et de 2 niches
actives, comparer le coût du temps de référent à celui d'un organisme local.

---

## 5. Ce que ça coûte

Base : coût employeur **736 €/mois** pour ~169 h ⇒ **≈ 4,4 €/h** de temps agent chargé.
Le temps du référent d'exploitation est **déjà financé et non facturable** — il ne crée pas
de dépense supplémentaire, il consomme une **capacité limitée** (voir l'alerte ci-dessous).

| Dispositif | Volume | Coût en temps agent | Fréquence |
|---|---|---|---|
| **Remise à niveau d'un profil B** | 10-15 h | **≈ 45-65 €** par agent | one-shot, 8 premières semaines |
| **Cycle Culture France** — équipe de 6 | 1 h/mois × 6 | **≈ 26 €/mois** (≈ **315 €/an**) | mensuel |
| Production initiale des 12 fiches | ~12 h fondateur/référent | 0 € de dépense externe | une seule fois |
| Achat externe (LMS, organisme) | — | **0 €** | non retenu à ce stade |

**Ordre de grandeur à retenir** : le dispositif complet pour une équipe de 6, sur un an,
coûte **moins que 1,5 mois de salaire d'un seul agent**. Comparé au coût d'un départ
(recrutement + 3-4 semaines de montée en compétence + risque SLA + indemnités), l'arbitrage
n'est pas discutable.

> 🔴 **La vraie contrainte n'est pas l'argent, c'est le temps du référent.** Son temps non
> facturable finance déjà : la double écoute (≥ 2/agent/semaine), la couverture des absences
> (13 %) et désormais la formation. `FINANCE §7.2` plaçait le plafond à **~8 agents par
> métier** *sans* charge de formation. **Avec des profils B à rattraper, ce plafond descend
> vers ~6.** Conséquence : l'**agent volant (+766 €/mois)** doit être déclenché plus tôt que
> prévu, ou la double écoute se dégrade — et c'est elle qui tient la promesse qualité.

---

## 6. Où ça se trace

Un seul endroit : **Airtable**, en prolongement de la fiche vivier (`VIVIER-Airtable-GUIDE.md`),
pas dans un nouvel outil ni un tableur parallèle.

Champs à ajouter sur la fiche salarié :

| Champ | Contenu |
|---|---|
| `Score entrée (détail)` | Reprise item par item du mini-test (V1-V5, bloc technique, R1-R2) |
| `Modules ouverts` | F1…F7, multi-sélection |
| `Modules clos` | avec date |
| `Re-test J+60` | score des items ouverts uniquement |
| `Score QA moyen` | alimenté par le suivi qualité |
| `Séances culture suivies` | 12 cases, sert aussi au rattrapage d'un arrivant en cours d'année |

> Rappel `CLAUDE.md` : **une valeur d'attente (« à qualifier », « à faire ») vaut pire que
> du vide.** Un module non ouvert reste vide ; un module ouvert porte une date.

---

## 7. Points ouverts

| # | Point | À trancher par |
|---|---|---|
| 1 | Volume plafond de remise à niveau : 15 h est un point de départ, à recalibrer après les 2 premiers recrutements | Direction, après retour terrain |
| 2 | Qui anime le cycle culture avant le recrutement du premier référent — le fondateur est déjà saturé (`FINANCE §7 risque n°0`) | Direction |
| 3 | Seuil de déclenchement de l'agent volant : maintenir 8/métier ou descendre à 6 avec des profils B | Direction, à l'arrivée du 5e agent |
| 4 | Faut-il refuser un profil B sur le **bloc Voix & français** même sous contrainte de délai ? (§2 penche pour oui) | Direction |
| 5 | Production des 12 fiches : à lancer maintenant (coût ~0 €, fondateur seul) ou à la première embauche | Direction |

---

*Créé le 2026-09-03. Corrige et complète `POLITIQUE-RH-CULTURE.md` §6.*
