# ESPACE-CLIENT-CANDIDAT.md — guide d'exploitation (interne)

> Créé le 2026-06-12. Couvre : l'**espace client** (page chiffrée des prix marque
> blanche), l'**espace candidat** (dépôt + suivi de candidature), et le **déploiement
> OVH** (GitHub Actions + FTP) qui garantit que rien d'interne n'est servi. Chiffres :
> `PRICING.md` fait foi.

---

## 1. Espaces partenaires (3 pages chiffrées) — prix MB protégés

### Architecture
`espace-client.html` est une simple **page d'aiguillage** (aucun prix) vers 3 espaces
chiffrés, **un par niche, chacun avec son propre mot de passe** — un télésecrétariat ne
voit jamais la rate card IT, et inversement :

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
  privé dès que le site est déployé** (déjà prévu).
- Le site servi, lui, est propre : `tools/build-site.sh` ne copie dans `_site/` que les
  pages publiques + `assets/` — ni .md, ni `tools/`, ni CRM, ni trésorerie.

---

## 2. Espace candidat (`espace-candidat.html` + `suivi-candidature.html`)

### Dépôt de candidature
- **Deux modes, déjà câblés** dans `espace-candidat.html` (constante
  `FORMSPREE_ENDPOINT` en tête de script) :
  - **Vide (par défaut)** → **email pré-rempli** : à l'envoi, le client mail du candidat
    s'ouvre avec sa candidature et son **code candidat** déjà remplis, destinataire
    contact@salverys.fr. Aucun backend requis (hébergement statique OVH).
  - **Renseignée** → **capture automatique Formspree** (vraie réception sans dépendre du
    client mail du candidat) ; en cas d'échec réseau, repli automatique sur l'email.
- **Activer Formspree** : créer un formulaire sur [formspree.io](https://formspree.io)
  (destinataire contact@salverys.fr), copier l'URL fournie
  (`https://formspree.io/f/<ID>`) dans `FORMSPREE_ENDPOINT`, committer, pousser.
- Honeypot anti-spam conservé. Pas d'upload de fichier : le CV est demandé en **lien**
  (Drive/Dropbox).

### Code candidat & suivi
- Chaque dépôt génère un code **SLV-XXXXX** (affiché au candidat + inclus dans la
  soumission reçue par email).
- Le suivi lit `assets/candidatures-statuts.json` : mapping `code → statut` parmi
  `recue · entretien · test · acceptee · refusee`. **Tout code absent = « reçue »**
  (donc rien à faire pour les nouveaux dépôts).
- **Mise à jour d'un statut** : éditer le JSON, committer, pousser (le déploiement OVH se relance).
  ```json
  { "SLV-7K2MQ": "entretien" }
  ```
- **RGPD** : le JSON ne contient **que des codes anonymes** — jamais de nom/email.
  Supprimer les codes des candidatures clôturées depuis plus de 6 mois.

---

## 3. Déploiement OVH (GitHub Actions + FTP)

- Workflow `.github/workflows/deploy-ovh.yml` : à chaque push sur `main`, il lance
  `bash tools/build-site.sh` puis envoie `_site/` par **FTP** sur l'hébergement OVH.
  Identifiants FTP en **secrets GitHub** (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`).
- Pages servies : index, 3 simulateurs, espace-client, espace-candidat,
  suivi-candidature + `assets/`. **Tout le reste est exclu** (le script échoue si un .md
  ou `tools/` se retrouve dans `_site/`).
- En-têtes : `_site/.htaccess` (généré par le build) sert les pages `espace-client*`
  en `noindex` + `Cache-Control: no-store` (équivalent OVH/Apache des anciens headers).
- Test local du build : `bash tools/build-site.sh && python3 -m http.server -d _site`.

## 4. Checklist mise en ligne
1. ☐ Renseigner les 3 secrets FTP OVH dans GitHub (`Settings → Secrets → Actions`).
2. ☐ **Passer le dépôt GitHub en privé.**
3. ☐ Merger sur `main` → le workflow déploie ; activer le SSL (Let's Encrypt) chez OVH.
4. ☐ Tester les 3 espaces partenaires en HTTPS, chacun avec son mot de passe.
5. ☐ Faire un dépôt de candidature test + vérifier la réception + le suivi.
6. ☐ Retirer `SLV-DEMO1` de `assets/candidatures-statuts.json`.
