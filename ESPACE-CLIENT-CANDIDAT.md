# ESPACE-CLIENT-CANDIDAT.md — guide d'exploitation (interne)

> Créé le 2026-06-12. Couvre : l'**espace client** (page chiffrée des prix marque
> blanche), l'**espace candidat** (dépôt + suivi de candidature), et le **déploiement
> sur OVH** qui garantit que rien d'interne n'est servi. Chiffres : `PRICING.md` fait foi.

---

## 0. Pages de closing par deal (dispositif principal depuis 2026-07-29)

> Remplace les 3 espaces par niche pour tout nouveau partenaire. Motifs et audit complet :
> `AUDIT-ESPACE-CLIENT.md`. Résumé : le prix se fige en appel de closing, donc le document
> doit être nominatif — une page par deal, révocable seule.

```
tools/deals/<partenaire>.json   → données du deal (gabarit : tools/deals/exemple-msp.json)
tools/deal-template.html        → coquille publique (rien de lisible sans le code)
tools/deal-build.mjs            → génère espace/<slug>-<token>.html
```

**Deux facteurs** : URL non devinable (token aléatoire, listée nulle part) + code d'accès
généré qui déchiffre le contenu (AES-256-GCM, PBKDF2-SHA256 310 000 itérations).
Le code **n'est jamais écrit sur disque** — affiché une fois dans le terminal, à dicter.

```bash
# nouveau deal
cp tools/deals/exemple-msp.json tools/deals/ardenor.json    # puis éditer
node tools/deal-build.mjs tools/deals/ardenor.json           # → URL + code affichés
git add tools/deals/ardenor.json espace/ && git commit -m "Deal Ardenor" && git push

# régénérer après renégociation, sans casser le lien ni le code déjà transmis
node tools/deal-build.mjs tools/deals/ardenor.json "SLV-XXXX-XXXX-XXXX"

# révoquer cet accès, et lui seul
git rm tools/deals/ardenor.json espace/ardenor-*.html && git commit && git push
```

Le `token` est écrit dans le JSON au premier build : **ne jamais le modifier**, le lien
déjà envoyé en dépend. Le build publie `espace/*.html` en
`noindex / no-store / no-referrer` et **échoue** si un contenu non chiffré s'y glisse.

`espace-client.html` est désormais une **page neutre** (aucune niche nommée, retirée du
footer public) : elle renvoie simplement vers le lien nominatif.

---

## 1. Espaces partenaires par niche (3 pages chiffrées) — dispositif hérité

> ⚠️ Conservé pour les partenaires déjà détenteurs d'un mot de passe. **Tout nouveau
> partenaire passe par §0.** À retirer du build une fois les partenaires actifs basculés.

### Architecture
Trois espaces chiffrés, **un par niche, chacun avec son propre mot de passe** — un
télésecrétariat ne voit jamais la rate card IT, et inversement :

| Espace | Page | Source en clair | Contenu (PRICING.md) |
|---|---|---|---|
| Télésecrétariat médical | `espace-client-medical.html` | `tools/espace-contenu-medical.html` | grille à l'appel par créneau (§1.b) |
| Support N1 SaaS | `espace-client-support.html` | `tools/espace-contenu-support.html` | rate card 1 700/1 500/1 350 (§3) |
| Helpdesk IT N1 | `espace-client-helpdesk.html` | `tools/espace-contenu-helpdesk.html` | rate card 2 000/1 750/1 550 (§3) |

### Comment ça marche
Le contenu est **chiffré AES-256-GCM** dans chaque page, clé dérivée du mot de passe par
**PBKDF2-SHA256 (310 000 itérations)**. Rien n'est lisible dans le code source servi. Le
déverrouillage se fait dans le navigateur (HTTPS ou localhost requis) ; la session reste
ouverte le temps de l'onglet (sessionStorage, clé distincte par espace). Bouton
**« Imprimer / PDF de cadrage »** : génère le PDF confidentiel à remettre sous NDA.

### Mots de passe
- **Un mot de passe par espace**, remis aux partenaires de la niche **au cadrage, sous
  NDA** — jamais par écrit dans un cold email, jamais committé dans le dépôt.
- Les mots de passe en vigueur sont transmis hors dépôt (chat / gestionnaire de mots de
  passe de la direction).

### Rotation d'un mot de passe (à chaque départ de partenaire, ou trimestriellement)
```bash
node tools/espace-client-build.mjs medical "Nouveau-Mot-De-Passe-Fort" --verify
git add espace-client-medical.html && git commit -m "Rotation accès espace médical" && git push
```
(Idem avec `support` ou `helpdesk` — chaque espace tourne indépendamment.)

### Mettre à jour les prix / le contenu
1. Modifier `tools/espace-contenu-<espace>.html` (et d'abord `PRICING.md`, qui fait foi).
2. Relancer la génération de l'espace concerné (même mot de passe ou nouveau).
3. Committer la page générée (+ la source modifiée).

### ⚠️ Sécurité — à lire
- Les `tools/espace-contenu-*.html` sont les **sources en clair** : elles sont dans le
  dépôt (comme `PRICING.md`, qui expose déjà ces prix). **Tant que le dépôt GitHub est
  public, les prix MB fuient par le dépôt, pas par le site.** → **Passer le dépôt en
  privé dès que le site est mis en ligne** (déjà prévu).
- Le site servi, lui, est propre : `tools/build-site.sh` ne copie dans `_site/` que les
  pages publiques + `assets/` — ni .md, ni `tools/`, ni CRM, ni trésorerie.

---

## 2. Espace candidat (`espace-candidat.html` + `suivi-candidature.html`)

### Dépôt de candidature
- Formulaire **Formspree** (honeypot anti-spam côté page). **À configurer** : créer le
  formulaire sur Formspree, puis remplacer `FORMSPREE_ID` par l'identifiant réel dans
  l'attribut `action` du `<form>` de `espace-candidat.html`, et régler la **notification
  email** vers contact@salverys.fr.
- Offre gratuite plafonnée en soumissions/mois (**vérifier le quota courant** chez
  Formspree au moment de créer le compte) — largement assez à ce stade. Pas d'upload de
  fichier : le CV est demandé en **lien** (Drive/Dropbox).
- **Repli automatique** : tant que `FORMSPREE_ID` n'est pas remplacé — ou si le POST
  échoue — le candidat reçoit un lien **email pré-rempli** vers contact@salverys.fr :
  aucune candidature perdue, y compris avant configuration.

### Code candidat & suivi
- Chaque dépôt génère un code **SLV-XXXXX** (affiché au candidat + inclus dans la
  soumission reçue par email).
- Le suivi lit `assets/candidatures-statuts.json` : mapping `code → statut` parmi
  `recue · entretien · test · acceptee · refusee`. **Tout code absent = « reçue »**
  (donc rien à faire pour les nouveaux dépôts).
- **Mise à jour d'un statut** : éditer le JSON, committer, pousser, puis rejouer le
  build et remettre `_site/` en ligne.
  ```json
  { "SLV-7K2MQ": "entretien" }
  ```
- **RGPD** : le JSON ne contient **que des codes anonymes** — jamais de nom/email.
  Supprimer les codes des candidatures clôturées depuis plus de 6 mois.

---

## 3. Déploiement OVH

- Build : `bash tools/build-site.sh` → produit `_site/`, **seul dossier à mettre en
  ligne** (dépôt manuel en SFTP vers la racine web OVH).
- Pages servies : index, 3 simulateurs, espace-client, espace-candidat,
  suivi-candidature, `espace/*.html` (pages de deal) + `assets/`. **Tout le reste est
  exclu** (le script échoue si un .md ou `tools/` se retrouve dans `_site/`).
- En-têtes : portés par `.htaccess` (Apache/OVH), copié dans `_site/` par le build —
  `espace-client*.html` en `noindex` + `Cache-Control: no-store` ; `/espace/*` en plus
  en `Referrer-Policy: no-referrer` (l'URL contient le token). Les pages portent la
  même protection **en meta**, qui reste la ceinture si `.htaccess` n'est pas pris en
  compte par l'offre OVH.
- Test local du build : `bash tools/build-site.sh && python3 -m http.server -d _site`
  (le serveur Python n'applique pas `.htaccess` : vérifier les en-têtes en ligne).

## 4. Checklist mise en ligne
1. ☐ Lancer `bash tools/build-site.sh` et déposer `_site/` sur l'hébergement OVH.
2. ☐ **Passer le dépôt GitHub en privé.**
3. ☐ Créer le formulaire Formspree, remplacer `FORMSPREE_ID` dans `espace-candidat.html`,
   activer la notification email → contact@salverys.fr.
4. ☐ Tester les 3 espaces partenaires en HTTPS, chacun avec son mot de passe.
5. ☐ Faire un dépôt de candidature test + vérifier la réception + le suivi.
6. ☐ Retirer `SLV-DEMO1` de `assets/candidatures-statuts.json`.
