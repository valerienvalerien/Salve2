/* =========================================================
   Salverys — interactions du site vivant
   ========================================================= */
(function () {
  'use strict';

  /* ---------- NAV : ombre au scroll + burger mobile ---------- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const burger = nav.querySelector('.nav-burger');
    const links = nav.querySelector('.nav-links');
    if (burger && links) {
      burger.addEventListener('click', () => links.classList.toggle('open'));
      links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
    }
  }

  /* ---------- Image : repli dégradé si le lien casse ---------- */
  document.querySelectorAll('img.photo').forEach(img => {
    img.addEventListener('error', () => { img.style.display = 'none'; });
  });

  /* ---------- Float CTA simulateurs (accueil) ---------- */
  const floatCta = document.getElementById('floatCta');
  if (floatCta) {
    const toggle = document.getElementById('floatCtaToggle');
    let closeTimer;
    const open = () => { clearTimeout(closeTimer); floatCta.classList.add('open'); toggle.setAttribute('aria-expanded', 'true'); };
    const close = () => { floatCta.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };
    /* Clic : bascule — indispensable au tactile et au clavier (Entrée/Espace). */
    toggle.addEventListener('click', () => (floatCta.classList.contains('open') ? close() : open()));
    document.addEventListener('click', e => { if (!floatCta.contains(e.target)) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    /* Ouverture au survol sur les appareils qui le gèrent (souris). */
    if (window.matchMedia('(hover: hover)').matches) {
      floatCta.addEventListener('mouseenter', open);
      floatCta.addEventListener('mouseleave', () => { closeTimer = setTimeout(close, 140); });
    }

    /* Visible dès la première page, sans avoir à scroller. */
    requestAnimationFrame(() => floatCta.classList.add('visible'));
  }

  /* ---------- Compteurs animés ---------- */
  function animateCounter(el) {
    const to = parseFloat(el.dataset.to);
    if (isNaN(to)) return;
    const dec = parseInt(el.dataset.dec || '0', 10);
    const pre = el.dataset.pre || '';
    const suf = el.dataset.suf || '';
    const dur = 1100;
    const t0 = performance.now();
    function tick(now) {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = (to * eased).toLocaleString('fr-FR', { minimumFractionDigits: dec, maximumFractionDigits: dec });
      el.textContent = pre + val + suf;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------- Reveal au scroll + déclenche les compteurs ---------- */
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealables = document.querySelectorAll('.reveal');
  const counters = document.querySelectorAll('.num[data-to]');

  if ('IntersectionObserver' in window && !reduced) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        e.target.querySelectorAll && e.target.querySelectorAll('.num[data-to]').forEach(animateCounter);
        if (e.target.matches('.num[data-to]')) animateCounter(e.target);
        obs.unobserve(e.target);
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
    revealables.forEach(el => io.observe(el));
    counters.forEach(el => { if (!el.closest('.reveal')) io.observe(el); });
  } else {
    revealables.forEach(el => el.classList.add('in'));
    counters.forEach(el => {
      const to = parseFloat(el.dataset.to);
      if (!isNaN(to)) el.textContent = (el.dataset.pre || '') + to.toLocaleString('fr-FR', { minimumFractionDigits: parseInt(el.dataset.dec || '0', 10), maximumFractionDigits: parseInt(el.dataset.dec || '0', 10) }) + (el.dataset.suf || '');
    });
  }

  /* ---------- Pills (partagé par les deux simulateurs) ---------- */
  function bindPills(onChange) {
    document.querySelectorAll('.pill-group').forEach(group => {
      if (group.dataset.multi !== undefined) return; // groupes multi-sélection gérés à part (add-ons)
      const name = group.dataset.group;
      group.querySelectorAll('.pill').forEach(pill => {
        pill.addEventListener('click', () => {
          // Les mêmes réglages sont proposés en haut de page et dans la carte
          // « Votre estimation en détail » : tous les groupes portant ce nom
          // basculent ensemble, sinon les deux jeux de boutons divergent.
          const groups = name
            ? document.querySelectorAll('.pill-group[data-group="' + name + '"]')
            : [group];
          groups.forEach(g => g.querySelectorAll('.pill').forEach(p => {
            p.classList.toggle('active', p.dataset.value === pill.dataset.value);
          }));
          onChange(name, parseFloat(pill.dataset.multiplier), pill.dataset.value);
        });
      });
    });
  }

  /* Curseurs dupliqués : un input marqué data-sync="posts" rejoue l'input
     principal du même nom, dans les deux sens. */
  function bindRangeMirrors() {
    document.querySelectorAll('input[type="range"][data-sync]').forEach(mirror => {
      const main = document.getElementById(mirror.dataset.sync);
      if (!main) return;
      mirror.min = main.min; mirror.max = main.max; mirror.step = main.step; mirror.value = main.value;
      mirror.addEventListener('input', () => {
        main.value = mirror.value;
        main.dispatchEvent(new Event('input', { bubbles: true }));
      });
    });
  }
  function syncRangeMirrors() {
    document.querySelectorAll('input[type="range"][data-sync]').forEach(mirror => {
      const main = document.getElementById(mirror.dataset.sync);
      if (main) mirror.value = main.value;
    });
  }

  /* ---------- Miroirs d'affichage ----------
     Le bandeau prix du hero immersif rejoue les valeurs calculées par la carte
     résultats détaillée : une seule source de vérité, aucune duplication d'état. */
  function syncMirrors() {
    document.querySelectorAll('[data-mirror]').forEach(el => {
      const src = document.getElementById(el.dataset.mirror);
      if (src) el.innerHTML = src.innerHTML;
    });
  }

  function pop(el) {
    if (!el) return;
    el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
  }
  const euro = n => Math.round(n).toLocaleString('fr-FR');

  /* Lie le simulateur à la section « Forfaits », plus bas dans la page : marque la
     carte correspondant à la configuration courante et rappelle l'estimation
     au-dessus des cartes, pour qui a scrollé et perdu le résultat de vue. */
  function syncPackages(slug, recall) {
    document.querySelectorAll('.pkg[data-pkg]').forEach(card => {
      const match = card.dataset.pkg === slug;
      card.classList.toggle('is-match', match);
      const badge = card.querySelector('.pkg-badge');
      if (!badge) return;
      badge.classList.toggle('is-match', match);
      if (match) {
        badge.textContent = '✓ Correspond à votre simulation';
        badge.hidden = false;
      } else {
        // Rend sa pastille d'origine à la carte vedette, masque celle des autres.
        const def = badge.dataset.default;
        badge.textContent = def || '';
        badge.hidden = !def;
      }
    });
    const el = document.getElementById('pkg-recall');
    if (el) { el.innerHTML = recall || ''; el.hidden = !recall; }
  }

  /* ========================================================
     SIMULATEUR MÉDICAL  (présent si #calls existe)
     ======================================================== */
  if (document.getElementById('calls')) {
    const TIERS = [
      { name: 'Essentiel', max: 250, price: 350 },
      { name: 'Confort',   max: 500, price: 590 },
      { name: 'Intensif',  max: 900, price: 950 },
    ];
    const MARGINAL_PER_100 = 95;
    // Add-ons d'amplitude à prix fixes (PRICING.md §1.a) — base : 5j/7, 8h–20h.
    const WORKDAYS_PER_MONTH = 5 * 4.33; // ≈ 21,7 jours ouvrés
    const st = { calls: 250, integration: 1.0, addons: {} };

    const tierFor = c => TIERS.find(t => c <= t.max) || null;
    const $ = id => document.getElementById(id);
    const addonsTotal = () => Object.values(st.addons).reduce((s, p) => s + p, 0);

    function calc() {
      const tier = tierFor(st.calls);
      let name, base, custom = false;
      if (tier) { name = tier.name; base = tier.price; }
      else { custom = true; name = 'Sur-mesure'; base = 950 + Math.ceil((st.calls - 900) / 100) * MARGINAL_PER_100; }
      const addons = addonsTotal();
      const price = base + addons;
      const INTERNAL_SECRETARY = 2750; // secrétaire interne au cabinet, coût complet — bas de fourchette 2 750-3 500 €/mois (cf. PRICING.md §3)
      const perDay = Math.round(st.calls / WORKDAYS_PER_MONTH);

      $('price-monthly').textContent = (custom ? '≈ ' : '') + euro(price);
      $('price-per-day').textContent = '≈ ' + euro(price / WORKDAYS_PER_MONTH) + ' €';
      $('calls-perday').textContent = '≈ ' + perDay;
      const days = st.addons['samedi-complet'] ? '6 j' : (st.addons['samedi-matin'] ? '5 j + sam. matin' : '5 j');
      $('coverage').textContent = days + ' · ' + (st.addons['soiree'] ? '8h–22h' : '8h–20h');

      const savings = INTERNAL_SECRETARY - price;
      $('savings-monthly').textContent = euro(Math.max(savings, 0)) + ' €';
      const cmp = $('compare-line'), badge = $('savings-badge');
      // 4a — le badge porte le recadrage ROI de PRICING.md §1, plus un pourcentage
      // d'économie : comparer un forfait 250 appels à une secrétaire temps plein
      // donnait −87 %, hors doctrine (claim public −40 à −60 %) et peu crédible.
      // Fourchette RDV calée sur l'ancre documentée « 350 €/mois = 2 à 3 RDV
      // récupérés » ⇒ valeur implicite d'un RDV récupéré ≈ 117-175 €.
      const RDV_HIGH = 175, RDV_LOW = 117;
      const rdvMin = Math.ceil(price / RDV_HIGH), rdvMax = Math.ceil(price / RDV_LOW);
      badge.textContent = '≈ ' + euro(price / WORKDAYS_PER_MONTH) + ' € / jour ouvré';
      cmp.innerHTML = rdvMin === rdvMax
        ? '<strong>' + rdvMin + ' RDV récupérés</strong> dans le mois paient le forfait'
        : '<strong>' + rdvMin + ' à ' + rdvMax + ' RDV récupérés</strong> dans le mois paient le forfait';

      let reco;
      if (custom) reco = 'Offre <strong>Sur-mesure</strong> — on cadre ensemble.';
      else if (name === 'Essentiel') reco = 'Forfait <strong>Essentiel</strong> — idéal pour un praticien.';
      else if (name === 'Confort') reco = 'Forfait <strong>Confort</strong> — le meilleur rapport volume / prix.';
      else reco = 'Forfait <strong>Intensif</strong> — pensé pour les cabinets de groupe.';
      $('recommendation').innerHTML = '<a class="reco-link" href="#forfaits">' + reco + '</a>';
      syncPackages(name.toLowerCase(),
        'Votre simulation : <b>' + (custom ? '≈ ' : '') + euro(price) + ' €/mois</b> · ' +
        (custom ? 'volume au-delà de la grille, on cadre ensemble' : 'forfait ' + name));

      const disc = $('sim-disclaimer');
      if (disc) {
        disc.textContent = custom
          ? 'Estimation au-delà de 900 appels · 1er mois à -50 %, sans engagement.'
          : 'Montants fermes (options incluses) · 1er mois à -50 %, sans engagement.';
      }

      // Chip de palier dans la valeur du slider
      const valEl = $('calls-value');
      if (valEl) {
        const slug = name.toLowerCase().replace('-', '');
        valEl.innerHTML = st.calls.toLocaleString('fr-FR') + ' appels <span class="tier-chip tc-' + slug + '">' + name + '</span>';
      }

      // Alerte de seuil : dans les 50 derniers appels avant le prochain palier
      const alertEl = $('tier-alert');
      if (alertEl) {
        const approaching = tier && (tier.max - st.calls) > 0 && (tier.max - st.calls) <= 50;
        if (approaching) {
          const ni = TIERS.indexOf(tier) + 1;
          const nextName = ni < TIERS.length ? TIERS[ni].name : 'Sur-mesure';
          const nextPrice = ni < TIERS.length ? TIERS[ni].price : 950 + MARGINAL_PER_100;
          alertEl.textContent = 'Ce volume reste dans le forfait ' + name + ' — ' + nextName + ' à ' + euro(nextPrice + addons) + ' €/mois au-delà.';
          alertEl.hidden = false;
        } else {
          alertEl.hidden = true;
        }
      }

      pop($('price-monthly'));
      syncMirrors();
    }

    $('calls').addEventListener('input', e => {
      st.calls = parseInt(e.target.value);
      calc();
    });
    // Add-ons d'amplitude : pills multi-sélection (samedi matin / complet exclusifs).
    document.querySelectorAll('[data-addon]').forEach(pill => {
      pill.addEventListener('click', () => {
        const id = pill.dataset.addon;
        if (st.addons[id] !== undefined) {
          delete st.addons[id];
          pill.classList.remove('active');
        } else {
          const excl = pill.dataset.excl;
          if (excl && st.addons[excl] !== undefined) {
            delete st.addons[excl];
            const other = document.querySelector('[data-addon="' + excl + '"]');
            if (other) other.classList.remove('active');
          }
          st.addons[id] = parseInt(pill.dataset.price, 10);
          pill.classList.add('active');
        }
        calc();
      });
    });
    bindPills((name, m) => { st[name] = m; calc(); });
    calc();
  }

  /* ========================================================
     SIMULATEUR IT  (présent si #posts existe)
     Config externe via window.SIM_CONFIG :
       baseDirect : tarif ETP/mois 35h en direct (cf. PRICING.md §3)
       frBench    : coût complet mensuel d'un CDI FR (référence comparaison, cf. PRICING.md §3)
     Estimation publique = base DIRECTE uniquement. Le tarif marque blanche
     (sous-traitance) n'est jamais exposé publiquement (cf. PRICING.md §0).
     ======================================================== */
  if (document.getElementById('posts')) {
    // Affichage public = estimation directe uniquement, sans prix ferme.
    // Le tarif marque blanche (sous-traitance) n'est JAMAIS exposé ici : il révélerait
    // la marge du revendeur (cf. PRICING.md §0 / RAPPORT-PRIX.html §9). Réservé au devis.
    const CFG = Object.assign({
      // ⚠️ frBench est en attente de l'arbitrage n°3 (hypothèses de brut révisées à
      // 30-36 k€ ⇒ coût complet 44-53 k€/an, soit 3 650-4 400 €/mois). Valeur laissée
      // inchangée tant que la décision n'est pas actée dans PRICING.md §3/§5.
      baseDirect: 2100, frBench: 3700,
    }, window.SIM_CONFIG || {});
    const PROD = 0.85, BAND = 0.09; // ±9 % autour de l'estimation — l'écart couvre le profil de l'agent (cf. PRICING.md §3.d)
    const NONSTOP_MIN = 4;          // rotation impossible en dessous (cf. PRICING.md §3.c)
    const st = {
      posts: 1, hours: 35,
      service: 1.0, channels: 1.0, language: 1.0, scope: 1.0,
      coverage: 1.0,
      mode: CFG.baseDirect,
    };
    const $ = id => document.getElementById(id);
    const hourly = n => n.toFixed(1).replace('.', ',') + ' €';
    const range = n => euro(n * (1 - BAND)) + ' – ' + euro(n * (1 + BAND));
    const vol = p => p >= 6 ? 0.90 : (p >= 3 ? 0.95 : 1.0);

    function calc() {
      const ratio = st.hours / 35;
      const serviceMult = st.service;
      // Axes d'offre communs aux deux simulateurs IT (décision 6a) : ils renchérissent
      // aussi un recrutement interne (un technicien bilingue ou N2 coûte plus cher en
      // France), donc ils s'appliquent des deux côtés de la comparaison.
      const offerMult = st.channels * st.language * st.scope;
      // ETP réellement mobilisés = positions × multiplicateur de présence.
      // L'amplitude horaire coûte des TÊTES, pas une majoration (décision 1b).
      const etp = st.posts * st.coverage;
      const total = st.mode * ratio * etp * serviceMult * offerMult * vol(st.posts);
      const frCost = CFG.frBench * ratio * etp * offerMult;
      const savings = frCost - total;
      const hMonth = etp * st.hours * 4.33;

      $('price-monthly').textContent = range(total);
      if ($('price-fr-hourly')) $('price-fr-hourly').textContent = (frCost / hMonth).toFixed(1).replace('.', ',') + ' €/h';
      $('price-fr').textContent = euro(frCost) + ' €/mois';
      $('hours-monthly').textContent = Math.round(hMonth) + ' h';
      const hourlyEquivalent = $('hourly-equivalent') || $('hourly-displayed');
      if (hourlyEquivalent) hourlyEquivalent.textContent = hourly(total / hMonth);
      if ($('hourly-productive')) $('hourly-productive').textContent = hourly(total / (hMonth * PROD));

      // Nombre de têtes réellement mobilisées — le prospect doit voir qu'une
      // amplitude étendue mobilise plus d'une personne par position (décision 1b).
      const noteEl = $('coverage-note');
      if (noteEl) {
        const heads = Math.ceil(etp);
        noteEl.textContent = heads > st.posts
          ? heads + ' agents mobilisés pour couvrir ' + st.posts + ' position' + (st.posts > 1 ? 's' : '') + ' en 8h–20h'
          : '';
        noteEl.hidden = heads <= st.posts;
      }

      // Deux niveaux de service seulement (Mutualisé / Dédié) : l'économie est
      // toujours positive et toujours affichable — plus de cas particulier.
      // Le tier Priority a été retiré le 2026-08-24 (cf. PRICING.md §3).
      const badge = $('savings-badge');
      badge.textContent = 'Économie : ' + Math.round((savings / frCost) * 100) + ' %';

      const annualEl = $('annual-savings'), annualLabel = $('annual-savings-label');
      annualEl.textContent = euro(savings * 12) + ' €';
      if (annualLabel) annualLabel.textContent = 'Économie annuelle estimée';

      // Le palier se déduit du niveau de service : mutualisé = Débordement, dédié =
      // Poste dédié. Les heures ne trient plus — elles font varier le prix, pas la
      // nature du forfait.
      // ⚠️ Le palier « Équipe managée » ne figure plus ici : il est *direct uniquement*
      // depuis le 2026-08-24 et devient dormant avec le gel du direct (PRICING.md §0.a).
      // Le catalogue actif compte deux formats — les modèles marque blanche A et B.
      // Une équipe de 4 positions ou plus reste chiffrable : c'est un Poste dédié
      // multiplié, pas un autre forfait.
      let pkg;
      if (st.service <= 0.85) pkg = { slug: 'debordement', name: 'Débordement', why: 'absorber les pics sans recruter.' };
      else pkg = { slug: 'poste-dedie', name: 'Poste dédié', why: 'meilleur rapport coût / disponibilité.' };

      const recoEl = $('recommendation');
      if (recoEl) recoEl.innerHTML = '<a class="reco-link" href="#forfaits">Forfait <strong>' + pkg.name + '</strong> — ' + pkg.why + '</a>';
      syncPackages(pkg.slug, 'Votre simulation : <b>' + range(total) + ' €/mois</b> · forfait ' + pkg.name);
      syncPackagePrices(pkg.slug);
      syncPackageLocks();
      syncRangeMirrors();

      pop($('price-monthly'));
      syncMirrors();
    }

    /* Forfaits soumis à un effectif minimum : le bouton reste visible mais
       inopérant tant que le curseur n'y est pas, avec la raison au survol —
       laisser cliquer puis expliquer dans le devis ferait perdre le lead. */
    function syncPackageLocks() {
      document.querySelectorAll('.pkg-cta[data-min-agents]').forEach(cta => {
        const min = parseInt(cta.dataset.minAgents, 10);
        const locked = st.posts < min;
        cta.classList.toggle('is-locked', locked);
        cta.setAttribute('aria-disabled', locked ? 'true' : 'false');
        if (locked) cta.setAttribute('tabindex', '-1'); else cta.removeAttribute('tabindex');
      });
    }

    /* Prix des cartes « Forfaits » — même moteur que l'estimation du haut de page.
       Deux règles :
       — la carte qui CORRESPOND à la simulation affiche exactement la fourchette
         du bandeau prix, sinon les deux chiffres se contredisent sur la page ;
       — les autres montrent leur configuration type. Chacune impose ce qui la
         définit (data-pkg-service / -agents / -hours) et hérite du reste : heures,
         amplitude, canaux, langue, périmètre. Le plafond d'heures garde au
         Débordement son prix d'appel (base 20 h) quand la simulation vise un
         autre palier. */
    function syncPackagePrices(activeSlug) {
      document.querySelectorAll('.pkg[data-pkg-service]').forEach(card => {
        const isActive = card.dataset.pkg === activeSlug;
        const shared = card.dataset.pkgService === 'shared';
        const rule = card.dataset.pkgAgents;
        const agents = rule === 'solo' ? 1 : rule === 'team' ? Math.max(2, st.posts) : st.posts;
        const cap = parseInt(card.dataset.pkgHours || '0', 10);
        const hours = (!isActive && cap) ? Math.min(st.hours, cap) : st.hours;
        const serviceMult = shared ? 0.85 : 1.0;
        const etp = agents * st.coverage;
        const total = st.mode * (hours / 35) * etp * serviceMult * st.channels * st.language * st.scope * vol(agents);

        const priceEl = card.querySelector('.pkg-price');
        if (priceEl) priceEl.textContent = range(total);
        // Le tableau comparatif (variante B) rejoue le même prix.
        document.querySelectorAll('[data-pkg-price="' + card.dataset.pkg + '"]')
          .forEach(el => { el.textContent = range(total); });
        const equivEl = card.querySelector('.pkg-equiv');
        if (equivEl) {
          const s = agents > 1 ? 's' : '';
          equivEl.textContent = agents + ' agent' + s + (shared ? ' mutualisé' + s : ' dédié' + s)
            + ' · ' + hours + ' h / semaine'
            + (st.coverage > 1 ? ' · 8h–20h' : '');
        }
      });
    }

    $('posts').addEventListener('input', e => {
      st.posts = parseInt(e.target.value);
      $('posts-value').textContent = st.posts + ' agent' + (st.posts > 1 ? 's' : '');
      calc();
    });
    $('hours').addEventListener('input', e => {
      st.hours = parseInt(e.target.value);
      let l;
      if (st.hours <= 20) l = st.hours + ' h · temps partiel';
      else if (st.hours <= 30) l = st.hours + ' h · 4/5e';
      else if (st.hours === 35) l = '35 h · temps plein';
      else l = st.hours + ' h · temps plein +';
      $('hours-value').textContent = l;
      calc();
    });

    bindPills((name, m) => {
      if (name !== 'mode') { st[name] = m; calc(); }
    });
    bindRangeMirrors();
    document.querySelectorAll('.pkg-cta[data-min-agents]').forEach(cta => {
      cta.addEventListener('click', e => { if (cta.classList.contains('is-locked')) e.preventDefault(); });
    });

    /* ----- Graphe comparatif Poste dédié vs Équipe managée (SVG sans dépendance) -----
       ⚠️ DORMANT depuis le 2026-09-07 (PRICING.md §0.a) : l'Équipe managée est un
       forfait *direct uniquement*, donc hors catalogue actif depuis le gel du direct.
       La section #priority-compare a été retirée des deux simulateurs et ce bloc ne
       s'exécute plus (garde `if (chart)` ci-dessous). Il est conservé tel quel — pas
       supprimé — pour être réactivable en l'état au dégel : un actif dormant ne se
       détruit pas, il s'arrête d'être alimenté.

       Ce que le graphe démontre (cf. PRICING.md §3.d/§3.f) : le choix entre les
       deux forfaits se joue sur les HEURES à couvrir, pas sur le volume.
       — De 9h à 18h, le Poste dédié est moins cher partout : la rotation
         (+ superviseur dédié) se paie sans rien couvrir de plus.
       — En 8h–20h, le Poste dédié staffe ×1,333 têtes par position pour tenir
         la plage avec ce nombre de positions EN SIMULTANÉ (§3.c). L'Équipe
         managée couvre la même plage pour moins cher — mais avec moins d'agents
         en ligne à la fois : c'est de là que vient l'écart, pas d'une efficacité
         supérieure (§3.f, correction du 2026-08-24).
       L'Équipe managée n'existe pas sous NONSTOP_MIN agents — la zone est grisée
       plutôt que tracée, pour ne pas suggérer un devis impossible.
       NB : les identifiants techniques (slug 'non-stop', NONSTOP_*, classes
       pc-nonstop) gardent l'ancien nom — ils couplent HTML, JS et CSS. */
    const chart = $('priority-chart');
    if (chart) {
      const W = 640, H = 300, PADL = 56, PADR = 18, PADT = 18, PADB = 38;
      const NMAX = 10;
      // Surcoût de l'Équipe managée à effectif égal : rotation + superviseur dédié.
      // Calé sur les « à partir de » publiés (§3.d) : 4 agents ⇒ ~11 000 €
      // (helpdesk, base 2 500) et ~10 000 € (support SaaS, base 2 300).
      const NONSTOP_MULT = 1.15;
      // Têtes à staffer par position pour tenir 8h–20h en Poste dédié (§3.c).
      const EXT_COVERAGE = 1.333;
      let chartView = 'office'; // 'office' | 'extended'

      // Coût mensuel pour n agents à la config courante, hors amplitude :
      // chaque vue impose la sienne, sinon l'amplitude serait comptée deux fois.
      const cost = (n, mult, coverage) => {
        const m = mult * st.channels * st.language * st.scope;
        return st.mode * (st.hours / 35) * m * n * coverage * vol(n);
      };
      // ⚠️ L'axe X ne désigne pas la même chose sur les deux courbes, et c'est tout
      // l'objet de la comparaison :
      //   — Poste dédié : n POSITIONS tenues, qui coûtent n × EXT_COVERAGE têtes en 8h–20h ;
      //   — Équipe managée : n TÊTES en rotation, qui couvrent la plage avec moins d'agents
      //     présents à la fois (n × 35 h répartis sur la fenêtre).
      // L'écart de prix vient de là — pas d'une efficacité magique. Les libellés de points
      // et les légendes doivent donc TOUJOURS afficher la simultanéité (cf. PRICING.md §3.f).
      const costDedie = n => cost(n, 1.0, chartView === 'extended' ? EXT_COVERAGE : 1.0);
      const costNonstop = n => cost(n, NONSTOP_MULT, 1.0);
      // Heures d'ouverture de la fenêtre courante, pour exprimer la simultanéité.
      const windowH = () => chartView === 'extended' ? 60 : 45;
      // Têtes réellement mobilisées par le Poste dédié pour tenir n positions.
      const headsDedie = n => n * (chartView === 'extended' ? EXT_COVERAGE : 1.0);
      // Agents présents en moyenne à un instant donné, en Équipe managée (35 h/agent).
      const seatsNonstop = n => n * 35 / windowH();
      const fr1 = v => v.toFixed(1).replace('.', ',');

      const sx = i => PADL + (i - 1) / (NMAX - 1) * (W - PADL - PADR);
      const fmtK = v => (v / 1000).toFixed(v < 10000 ? 1 : 0).replace('.', ',') + ' k€';

      function renderChart() {
        const xs = []; for (let n = 1; n <= NMAX; n++) xs.push(n);
        // L'Équipe managée ne se trace qu'à partir de son plancher d'effectif.
        const ns = xs.filter(n => n >= NONSTOP_MIN);
        const maxV = Math.max(...xs.map(costDedie), ...ns.map(costNonstop)) * 1.08;
        const sy = v => H - PADB - (v / maxV) * (H - PADT - PADB);
        const path = (fn, pts) => pts.map((n, i) => (i ? 'L' : 'M') + sx(n).toFixed(1) + ' ' + sy(fn(n)).toFixed(1)).join(' ');
        // Chaque point dit ce qu'il achète réellement : des positions tenues d'un côté,
        // des têtes en rotation de l'autre — sinon les deux courbes semblent comparables
        // à prestation égale, ce qu'elles ne sont pas.
        const detail = (kind, n) => kind === 'dedie'
          ? n + ' position' + (n > 1 ? 's' : '') + ' tenue' + (n > 1 ? 's' : '') + ' (' + fr1(headsDedie(n)) + ' agents)'
          : n + ' agents en rotation (~' + fr1(seatsNonstop(n)) + ' présents à la fois)';
        const dots = (fn, pts, cls, label, kind) => pts.map(n => '<circle class="' + cls + '" cx="' + sx(n).toFixed(1) + '" cy="' + sy(fn(n)).toFixed(1) + '" r="3"><title>' + label + ' · ' + detail(kind, n) + ' : ' + euro(fn(n)) + ' €/mois</title></circle>').join('');

        // Grille horizontale + libellés Y
        let grid = '', steps = 4;
        for (let i = 0; i <= steps; i++) {
          const v = maxV * i / steps, y = sy(v).toFixed(1);
          grid += '<line class="pc-grid" x1="' + PADL + '" y1="' + y + '" x2="' + (W - PADR) + '" y2="' + y + '"/>';
          grid += '<text class="pc-axis" x="' + (PADL - 8) + '" y="' + (parseFloat(y) + 4) + '" text-anchor="end">' + fmtK(v) + '</text>';
        }
        // Libellés X (nombre d'agents)
        let xlab = '';
        xs.forEach(n => { xlab += '<text class="pc-axis" x="' + sx(n).toFixed(1) + '" y="' + (H - PADB + 20) + '" text-anchor="middle">' + n + '</text>'; });

        // Zone où l'Équipe managée n'est pas staffable — dite, pas dessinée en courbe.
        const zx = sx(NONSTOP_MIN);
        const zone = '<rect class="pc-zone" x="' + PADL + '" y="' + PADT + '" width="' + (zx - PADL).toFixed(1) + '" height="' + (H - PADT - PADB) + '"/>' +
                     '<text class="pc-zone-txt" x="' + (PADL + 8) + '" y="' + (PADT + 14) + '">Équipe managée non staffable — pas de rotation sous ' + NONSTOP_MIN + ' agents</text>';

        // Annotation : 1er effectif où l'Équipe managée passe sous le Poste dédié.
        let note = '', crossover = 0;
        for (let n = NONSTOP_MIN; n <= NMAX; n++) { if (costNonstop(n) < costDedie(n)) { crossover = n; break; } }
        if (crossover) {
          const gx = sx(crossover).toFixed(1);
          note = '<line class="pc-note" x1="' + gx + '" y1="' + PADT + '" x2="' + gx + '" y2="' + (H - PADB) + '"/>' +
                 '<text class="pc-note-txt" x="' + (parseFloat(gx) + 6) + '" y="' + (PADT + 30) + '">Dès ' + crossover + ' agents : moins cher, avec moins d\'agents simultanés</text>';
        }

        chart.innerHTML =
          '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Comparaison du coût mensuel du Poste dédié et de l\'Équipe managée selon le nombre d\'agents">' +
          grid + zone + xlab + note +
          '<path class="pc-line pc-dedie" d="' + path(costDedie, xs) + '"/>' +
          '<path class="pc-line pc-nonstop" d="' + path(costNonstop, ns) + '"/>' +
          dots(costDedie, xs, 'pc-dot pc-dot-dedie', 'Poste dédié', 'dedie') +
          dots(costNonstop, ns, 'pc-dot pc-dot-nonstop', 'Équipe managée', 'nonstop') +
          '<text class="pc-axis pc-axis-x" x="' + ((W + PADL) / 2) + '" y="' + (H - 4) + '" text-anchor="middle">Nombre d\'agents</text>' +
          '</svg>';

        const cap = $('priority-chart-caption');
        if (cap) cap.textContent = chartView === 'office'
          ? 'De 9h à 18h, le Poste dédié est moins cher à tous les effectifs : la rotation et le superviseur de l\'Équipe managée se paient sans couvrir une minute de plus tant que personne ne sollicite le support en dehors de ces heures-là. Le surcoût n\'achète pas du temps, il achète la garantie que la plage tienne quand quelqu\'un manque.'
          : 'Attention à ce que compare ce graphe : à effectif affiché égal, le Poste dédié tient ce nombre de positions en simultané (1,33 tête chacune), là où l\'Équipe managée répartit ces agents sur toute la plage — donc moins de monde en ligne à un instant donné. Elle coûte moins cher pour cette raison, pas par magie. Ce que vous achetez n\'est pas un nombre de sièges : c\'est la garantie que la plage ne ferme pas quand quelqu\'un manque, et une rotation que vous n\'avez pas à organiser.';

        // Ligne de bascule chiffrée sous les deux colonnes de verdict.
        const vn = $('verdict-crossover');
        if (vn) {
          const n = NONSTOP_MIN;
          const office = st.mode * (st.hours / 35) * st.channels * st.language * st.scope * n * vol(n);
          vn.innerHTML = 'Le basculement se joue sur les heures à couvrir, pas sur le volume de tickets. À ' + n + ' agents sur 9h–18h : '
            + '<b>' + euro(office) + ' €/mois</b> en Poste dédié contre <b>' + euro(office * NONSTOP_MULT) + ' €/mois</b> en Équipe managée — restez au dédié. '
            + 'Pour tenir 8h–20h avec ' + n + ' positions en simultané, il faut ' + (n * EXT_COVERAGE).toFixed(1).replace('.', ',') + ' têtes en Poste dédié, soit '
            + '<b>' + euro(office * EXT_COVERAGE) + ' €/mois</b>. L\'Équipe managée couvre la même plage pour moins cher, avec moins d\'agents en ligne à la fois : '
            + 'à vous de dire si c\'est le nombre de sièges ou la continuité de la plage que vous achetez.';
        }
      }

      document.querySelectorAll('[data-chart-view]').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('[data-chart-view]').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          chartView = btn.dataset.chartView;
          renderChart();
        });
      });
      // Re-rendu réactif à chaque recalcul (changement heures/canaux/horaires).
      const _calc = calc;
      calc = function () { _calc(); renderChart(); };
    }

    calc();
  }

  /* ========================================================
     MODAL DEVIS — Formspree AJAX
     L'endpoint Formspree est défini dans l'attribut action du
     formulaire #form-devis de chaque simulateur.
     ======================================================== */
  (function () {
    const overlay = document.getElementById('modal-devis');
    if (!overlay) return;
    const form     = overlay.querySelector('#form-devis');
    const okEl     = overlay.querySelector('#form-success');
    const closeBtn = overlay.querySelector('.modal-close');

    function openModal() {
      const priceEl = document.getElementById('price-monthly');
      const recoEl  = document.getElementById('recommendation');
      const hEst    = form.querySelector('[name="estimation"]');
      const hReco   = form.querySelector('[name="recommandation"]');
      if (priceEl && hEst)  hEst.value  = priceEl.textContent.trim() + ' €/mois';
      if (recoEl  && hReco) hReco.value = recoEl.textContent.trim();
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      const first = form.querySelector('input:not([type=hidden])');
      if (first) setTimeout(() => first.focus(), 60);
    }

    function closeModal() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-devis]').forEach(el =>
      el.addEventListener('click', e => {
        e.preventDefault();
        if (el.classList.contains('is-locked')) return; // forfait sous son effectif minimum
        openModal();
      })
    );
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
    });

    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('[type=submit]');
      btn.disabled = true;
      btn.textContent = 'Envoi en cours…';
      try {
        const r = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        if (r.ok) {
          form.style.display = 'none';
          okEl.style.display = 'block';
        } else {
          throw new Error(r.status);
        }
      } catch (_) {
        btn.disabled = false;
        btn.innerHTML = 'Réessayer <span class="arrow">→</span>';
      }
    });
  }());

  /* ========================================================
     FORMULAIRE CONTACT (accueil) — Formspree AJAX
     ======================================================== */
  (function () {
    const form = document.getElementById('form-contact');
    if (!form) return;
    const okEl = document.getElementById('contact-success');
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('[type=submit]');
      btn.disabled = true;
      btn.textContent = 'Envoi en cours…';
      try {
        const r = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        if (r.ok) {
          form.style.display = 'none';
          okEl.style.display = 'block';
        } else {
          throw new Error(r.status);
        }
      } catch (_) {
        btn.disabled = false;
        btn.innerHTML = 'Réessayer <span class="arrow">→</span>';
      }
    });
  }());

  /* ---------- FAQ : un seul volet ouvert à la fois ---------- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) faqItems.forEach(other => { if (other !== item) other.open = false; });
    });
  });

  /* ---------- Horloges Antananarivo / Paris (carte méthode) ---------- */
  const clocks = document.querySelectorAll('.route-time[data-tz]');
  if (clocks.length) {
    const renderClocks = () => clocks.forEach(el => {
      try {
        el.textContent = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: el.dataset.tz }).format(new Date());
      } catch (_) { el.textContent = ''; }
    });
    renderClocks();
    setInterval(renderClocks, 30000);
  }
})();
