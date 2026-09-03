# Séance 6 — L'écosystème IT français

**Durée** : 45 min + 15 min · **Objectif** : parler la langue des utilisateurs et des
donneurs d'ordre. C'est la séance la plus directement liée à la niche n°1 (helpdesk IT N1
pour ESN/MSP) et n°2 (support applicatif N1 pour éditeurs SaaS).

---

## 1. Qui est qui — les quatre familles d'acteurs

| Acteur | Ce qu'il fait | Exemple de phrase entendue |
|---|---|---|
| **ESN** (Entreprise de Services du Numérique, ex-**SSII**) | Vend des prestations et des ingénieurs, souvent **en régie** chez le client | « Je suis consultant chez [ESN], en mission chez [client]. » |
| **Éditeur de logiciel** | Conçoit et vend **son** logiciel (souvent en SaaS) | « Nous éditons la solution, le support est chez nous. » |
| **MSP / infogéreur** | Gère l'informatique d'un client de bout en bout, en contrat récurrent | « On infogère leur parc, on a le contrat de supervision. » |
| **Intégrateur / revendeur** | Déploie et paramètre des solutions tierces | « On a intégré leur ERP l'an dernier. » |

**Pourquoi c'est notre affaire** : nos donneurs d'ordre sont **ESN, MSP et éditeurs**. Leur
client final n'est pas notre interlocuteur (`GOUVERNANCE-CHAINE-COMMANDEMENT.md` §3).

## 2. Le vocabulaire du poste de travail

| Terme | Sens courant |
|---|---|
| **Le poste** | L'ordinateur de l'utilisateur |
| **Le parc** | L'ensemble des machines gérées |
| **Master / masterisation** | Image système standard déployée sur les postes |
| **AD (Active Directory)** | Annuaire des comptes et des droits Windows |
| **GPO** | Règle de configuration poussée par l'AD |
| **VPN** | Tunnel d'accès distant au réseau de l'entreprise |
| **RDS / Citrix / bureau distant** | Session de travail hébergée, très courante en agence |
| **MFA / 2FA** | Double authentification |
| **VIP** | Utilisateur prioritaire (direction) — traitement et ton particuliers |
| **M365 / O365** | Suite Microsoft (Outlook, Teams, SharePoint, OneDrive) |
| **Proxy / pare-feu** | Filtrage réseau — cause classique d'un « site inaccessible » |

## 3. Les outils de ticketing qu'on rencontre

**GLPI** (très répandu en France, souvent chez les MSP et le secteur public) · **ServiceNow**
(grands comptes) · **Zendesk** et **Freshdesk** (éditeurs SaaS) · **Jira Service Management**
· **iTop** · **EasyVista**.

L'agent n'a pas à tous les connaître : il doit connaître **celui du compte**, et surtout la
**logique commune** — un ticket a une catégorie, une priorité, un statut, un historique.

## 4. Le vocabulaire ITIL minimal (séance technique F3 pour l'approfondissement)

- **Incident** : quelque chose est cassé → **rétablir le service**.
- **Demande** (de service) : quelque chose est souhaité (accès, matériel, droit) → **traiter
  selon le catalogue**.
- **Priorité** = impact × urgence. Un utilisateur seul bloqué ≠ un site entier bloqué.
- **Escalade N2** : quand le périmètre N1 est dépassé — **au bon moment, vers la bonne file**
  (critère noté dans la grille QA).
- **SLA** : le délai engagé contractuellement. **C'est un critère KO dans la grille QA.**

## 5. Ce qui compte pour un donneur d'ordre (et donc pour nous)

Ce qu'une ESN ou un MSP surveille : **le respect du SLA**, la **traçabilité** (un ticket mal
documenté est un ticket perdu), le **taux de résolution au N1** (chaque escalade évitée est
de la marge), et le **ton en marque blanche** (l'utilisateur doit croire parler au support
de la marque affichée).

---

## Mise en situation (15 min)

1. *« Je n'arrive plus à accéder au serveur de fichiers depuis chez moi. »* → quelles trois
   questions pose-t-on en premier ? (VPN monté ? autres accès OK ? depuis quand ?)
2. Classer 5 tickets en **incident** ou **demande** : mot de passe oublié · nouveau
   collaborateur à équiper · imprimante hors service · demande d'accès à un dossier ·
   Outlook qui ne se lance plus.
3. *« C'est urgent, je suis en réunion dans 10 minutes »* — un seul utilisateur : quelle
   priorité, et pourquoi ?

## Quiz

1. Quelle différence entre une ESN et un éditeur ?
2. Que fait un MSP ?
3. Incident ou demande : « je n'ai plus accès à ma boîte mail » ?
4. À quoi sert l'Active Directory ?
5. Priorité = quoi × quoi ?

<details><summary>Corrigé</summary>

1. L'ESN vend des prestations/ingénieurs ; l'éditeur vend son propre logiciel. 2. Il gère
l'informatique d'un client en contrat récurrent (infogérance). 3. **Incident**. 4. Annuaire
des comptes et des droits. 5. **Impact × urgence**.
</details>

## À retenir

> **ESN = prestations · Éditeur = son logiciel · MSP = infogérance.** Nos clients sont là.
> Et côté ticket : un **incident** se rétablit, une **demande** se traite — la catégorie
> commande la priorité, et la priorité commande le SLA.
