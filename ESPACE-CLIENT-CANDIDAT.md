# ESPACE-CLIENT-CANDIDAT.md — guide d'exploitation (interne)

> Créé le 2026-06-12. Couvre : l'**espace client** (page chiffrée des prix marque
> blanche), l'**espace candidat** (dépôt + suivi de candidature), et le **déploiement
> Netlify** qui garantit que rien d'interne n'est servi. Chiffres : `PRICING.md` fait foi.

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
déjà envoyé en dépend. Le build Netlify publie `espace/*.html` en
`noindex / no-store / no-referrer` et **échoue** si un contenu non chiffré s'y glisse.

`espace-client.html` est désormais une **page neutre** (aucune niche nommée, retirée du
footer public) : elle renvoie simplement vers le lien nominatif.

---

## 1. Espaces partenaires par niche — ⛔ DÉCOMMISSIONNÉ le 2026-09-02

> Les trois pages `espace-client-medical.html`, `espace-client-support.html` et
> `espace-client-helpdesk.html`, leur générateur `tools/espace-client-build.mjs` et leurs
> sources en clair `tools/espace-contenu-*.html` sont **supprimés du dépôt et retirés du
> build** (`tools/build-site.sh`). Le dispositif est intégralement remplacé par les **pages
> de closing par deal** (§0).

**Pourquoi maintenant.** Le dispositif était marqué « hérité » depuis le 2026-07-29 et
n'était conservé que pour les partenaires déjà détenteurs d'un mot de passe.
**Il n'y en a aucun** : effectif 0, aucun contrat signé, et le seul deal du dépôt
(`tools/deals/exemple-msp.json`) est un gabarit de démonstration. La bascule des
partenaires actifs était donc sans objet — il n'y avait personne à basculer.

**Ce que ça corrige**, au-delà du ménage :

| Défaut du dispositif par niche | Ce que la page par deal apporte |
|---|---|
| URL publique et devinable (`espace-client-helpdesk.html` était listée dans le build) | URL avec token aléatoire, listée nulle part |
| **Un mot de passe partagé par tous les partenaires d'une niche** | Un code par partenaire |
| Révoquer = couper toute la niche (ce qui s'est produit à la rotation du 2026-09-02) | Révoquer = supprimer une page, un partenaire |
| Rate card complète exposée d'un bloc | Grille nominative, figée sur le prix arrêté en closing |
| Source en clair dans le dépôt (`tools/espace-contenu-*.html`) | Données du deal en JSON, chiffrées à la génération |

**Rien à faire pour un partenaire existant** — il n'y en a pas. Le premier partenaire
recevra directement une page par deal (§0).

Historique complet et motifs : `AUDIT-ESPACE-CLIENT.md`. Le code supprimé reste
récupérable dans l'historique git si le dispositif devait être ressuscité.

> ⚠️ **Ce que le décommissionnement ne corrige pas.** `PRICING.md` porte toujours la rate
> card MB en clair dans le dépôt. **Tant que le dépôt GitHub est public, les prix de gros
> fuient par le dépôt, pas par le site** — la checklist §4.2 (passer le dépôt en privé)
> reste le vrai correctif.

---

## 2. Espace candidat (`espace-candidat.html` + `suivi-candidature.html`)

### Dépôt de candidature
- Formulaire **Netlify Forms** (`name="candidature"`, honeypot anti-spam). À activer :
  au premier deploy, vérifier dans Netlify → **Forms** que « candidature » est détecté ;
  configurer la **notification email** vers contact@salverys.fr (Forms → Notifications).
- Tier gratuit : **100 soumissions/mois** (largement assez). Pas d'upload de fichier :
  le CV est demandé en **lien** (Drive/Dropbox).
- **Repli automatique** : si le POST échoue (site pas encore sur Netlify, Forms
  inactif), le candidat reçoit un lien **email pré-rempli** vers contact@salverys.fr —
  aucune candidature perdue.
- Alternative si on quitte Netlify : Formspree — remplacer l'attribut du `<form>` par
  `action="https://formspree.io/f/<ID>"` et retirer `data-netlify`.

### Code candidat & suivi
- Chaque dépôt génère un code **SLV-XXXXX** (affiché au candidat + inclus dans la
  soumission reçue par email).
- Le suivi lit `assets/candidatures-statuts.json` : mapping `code → statut` parmi
  `recue · entretien · test · acceptee · refusee`. **Tout code absent = « reçue »**
  (donc rien à faire pour les nouveaux dépôts).
- **Mise à jour d'un statut** : éditer le JSON, committer, pousser (Netlify redéploie).
  ```json
  { "SLV-7K2MQ": "entretien" }
  ```
- **RGPD** : le JSON ne contient **que des codes anonymes** — jamais de nom/email.
  Supprimer les codes des candidatures clôturées depuis plus de 6 mois.

---

## 3. Déploiement Netlify

- `netlify.toml` : build = `bash tools/build-site.sh`, publish = `_site/`.
- Pages servies : index, 3 simulateurs, espace-client, espace-candidat,
  suivi-candidature, `espace/*.html` (pages de deal) + `assets/`. **Tout le reste est
  exclu** (le script échoue si un .md ou `tools/` se retrouve dans `_site/`).
- En-têtes : `espace-client*.html` en `noindex` + `Cache-Control: no-store` ;
  `/espace/*` en plus en `Referrer-Policy: no-referrer` (l'URL contient le token).
- Test local du build : `bash tools/build-site.sh && python3 -m http.server -d _site`.

## 4. Checklist mise en ligne
1. ☐ Brancher le dépôt sur Netlify (build auto via `netlify.toml`).
2. ☐ **Passer le dépôt GitHub en privé.**
3. ☐ Activer la notification email Netlify Forms → contact@salverys.fr.
4. ☐ Tester une page de deal en HTTPS avec son code d'accès (§0) — les 3 espaces par niche sont décommissionnés (§1).
5. ☐ Faire un dépôt de candidature test + vérifier la réception + le suivi.
6. ☐ Retirer `SLV-DEMO1` de `assets/candidatures-statuts.json`.
