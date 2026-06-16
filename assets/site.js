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
          group.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          onChange(name, parseFloat(pill.dataset.multiplier), pill.dataset.value);
        });
      });
    });
  }

  function pop(el) {
    if (!el) return;
    el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
  }
  const euro = n => Math.round(n).toLocaleString('fr-FR');

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
      const INTERNAL_SECRETARY = 2200; // secrétaire interne au cabinet, charges comprises (cf. comparatif)
      const perDay = Math.round(st.calls / WORKDAYS_PER_MONTH);

      $('price-monthly').textContent = (custom ? '≈ ' : '') + euro(price);
      $('price-per-day').textContent = '≈ ' + euro(price / WORKDAYS_PER_MONTH) + ' €';
      $('calls-perday').textContent = '≈ ' + perDay;
      const days = st.addons['samedi-complet'] ? '6 j' : (st.addons['samedi-matin'] ? '5 j + sam. matin' : '5 j');
      $('coverage').textContent = days + ' · ' + (st.addons['soiree'] ? '8h–22h' : '8h–20h');

      const savings = INTERNAL_SECRETARY - price;
      $('savings-monthly').textContent = euro(Math.max(savings, 0)) + ' €';
      const cmp = $('compare-line'), badge = $('savings-badge');
      if (savings > 0) {
        cmp.innerHTML = 'Une secrétaire au cabinet : <span class="old">2 200 €+/mois</span> charges comprises';
        badge.textContent = '−' + Math.round((savings / INTERNAL_SECRETARY) * 100) + ' % vs une secrétaire interne';
      } else {
        cmp.textContent = 'Forfait tout compris, sans surprise.';
        badge.textContent = '1er mois à −50 %';
      }

      let reco;
      if (custom) reco = 'Offre <strong>Sur-mesure</strong> — on cadre ensemble.';
      else if (name === 'Essentiel') reco = 'Forfait <strong>Essentiel</strong> — idéal pour un praticien.';
      else if (name === 'Confort') reco = 'Forfait <strong>Confort</strong> — le meilleur rapport volume / prix.';
      else reco = 'Forfait <strong>Intensif</strong> — pensé pour les cabinets de groupe.';
      $('recommendation').innerHTML = reco;

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
       frBench    : coût mensuel CDI FR chargé (référence comparaison)
     Estimation publique = base DIRECTE uniquement. Le tarif marque blanche
     (sous-traitance) n'est jamais exposé publiquement (cf. PRICING.md §0).
     ======================================================== */
  if (document.getElementById('posts')) {
    // Affichage public = estimation directe uniquement, sans prix ferme.
    // Le tarif marque blanche (sous-traitance) n'est JAMAIS exposé ici : il révélerait
    // la marge du revendeur (cf. PRICING.md §0 / RAPPORT-PRIX.html §9). Réservé au devis.
    const CFG = Object.assign({
      baseDirect: 2100, frBench: 3200,
    }, window.SIM_CONFIG || {});
    const PROD = 0.85, FR_PEN = 1.35, BAND = 0.05; // ±5 % autour de l'estimation
    const st = {
      posts: 1, hours: 35,
      service: 1.0, serviceTier: 'dedicated', channels: 1.0, language: 1.0, schedule: 1.0,
      mode: CFG.baseDirect,
    };
    const $ = id => document.getElementById(id);
    const hourly = n => n.toFixed(1).replace('.', ',') + ' €';
    const range = n => euro(n * (1 - BAND)) + ' – ' + euro(n * (1 + BAND));
    const vol = p => p >= 6 ? 0.90 : (p >= 3 ? 0.95 : 1.0);
    // Tier Priority = service critique avec backup permanent réservé.
    // Le surcoût n'est pas plat : un agent seul porte un backup quasi complet
    // (~×2), qui s'amortit quand l'équipe grandit (cf. PRICING.md, ARGUMENTS-APPEL-priority.md).
    const priorityMult = n => 1.10 + 0.90 / n;

    function calc() {
      const hpm = st.hours * 4.33;
      const ratio = hpm / (35 * 4.33);
      const basePrice = st.mode * ratio;
      const serviceMult = st.serviceTier === 'priority' ? priorityMult(st.posts) : st.service;
      const mult = serviceMult * st.channels * st.language * st.schedule;
      const total = basePrice * mult * st.posts * vol(st.posts);
      const frMult = st.language * Math.pow(st.schedule, FR_PEN);
      const frCost = CFG.frBench * ratio * st.posts * frMult;
      const savings = frCost - total;
      const hMonth = hpm * st.posts;

      $('price-monthly').textContent = range(total);
      if ($('price-fr-hourly')) $('price-fr-hourly').textContent = (frCost / hMonth).toFixed(1).replace('.', ',') + ' €/h';
      $('price-fr').textContent = euro(frCost) + ' €/mois';
      $('savings-badge').textContent = 'Économie : ' + Math.round((savings / frCost) * 100) + ' %';
      $('hours-monthly').textContent = Math.round(hMonth) + ' h';
      const hourlyEquivalent = $('hourly-equivalent') || $('hourly-displayed');
      if (hourlyEquivalent) hourlyEquivalent.textContent = hourly(total / hMonth);
      if ($('hourly-productive')) $('hourly-productive').textContent = hourly(total / (hMonth * PROD));
      $('annual-savings').textContent = euro(savings * 12) + ' €';

      const recoEl = $('recommendation');
      if (recoEl) {
        let reco;
        if (st.posts === 1 && st.hours <= 20 && st.service <= 0.85) reco = 'Forfait <strong>Support Starter</strong> — idéal pour démarrer.';
        else if (st.posts >= 2 || (st.posts === 1 && st.hours >= 35 && st.service >= 1.0 && st.schedule > 1.0)) reco = 'Forfait <strong>Centre N1 Scale</strong> — couverture étendue + backup.';
        else reco = 'Forfait <strong>Support Pro</strong> — meilleur rapport coût / disponibilité.';
        recoEl.innerHTML = reco;
      }
      pop($('price-monthly'));
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

    bindPills((name, m, value) => {
      if (name === 'service') st.serviceTier = value;
      if (name !== 'mode') { st[name] = m; calc(); }
    });

    /* ----- Graphe comparatif Dédié vs Priority (SVG sans dépendance) ----- */
    const chart = $('priority-chart');
    if (chart) {
      const W = 640, H = 300, PADL = 56, PADR = 18, PADT = 18, PADB = 38;
      const NMAX = 10;
      let chartView = 'brut'; // 'brut' | 'resilience'

      // Coût mensuel pour n agents, multiplicateur de service donné, config courante.
      const cost = (n, svc) => {
        const ratio = (st.hours * 4.33) / (35 * 4.33);
        const m = svc * st.channels * st.language * st.schedule;
        return st.mode * ratio * m * n * vol(n);
      };
      // Vue « coût brut » : un point par nombre d'agents.
      const costDedie = n => cost(n, 1.0);
      const costPriority = n => cost(n, priorityMult(n));
      // Vue « résilience égale » : garantir g agents productifs sans rupture.
      // Priority = g agents (backup inclus). Dédié = g + ceil(g/3) têtes (sur-staffing).
      const resilDedie = g => cost(g + Math.ceil(g / 3), 1.0);
      const resilPriority = g => costPriority(g);

      const sx = i => PADL + (i - 1) / (NMAX - 1) * (W - PADL - PADR);
      const fmtK = v => (v / 1000).toFixed(v < 10000 ? 1 : 0).replace('.', ',') + ' k€';

      function renderChart() {
        const dedFn = chartView === 'brut' ? costDedie : resilDedie;
        const priFn = chartView === 'brut' ? costPriority : resilPriority;
        const xs = []; for (let n = 1; n <= NMAX; n++) xs.push(n);
        const maxV = Math.max(...xs.map(dedFn), ...xs.map(priFn)) * 1.08;
        const sy = v => H - PADB - (v / maxV) * (H - PADT - PADB);
        const path = fn => xs.map((n, i) => (i ? 'L' : 'M') + sx(n).toFixed(1) + ' ' + sy(fn(n)).toFixed(1)).join(' ');
        const dots = (fn, cls) => xs.map(n => '<circle class="' + cls + '" cx="' + sx(n).toFixed(1) + '" cy="' + sy(fn(n)).toFixed(1) + '" r="3"><title>' + n + ' agent' + (n > 1 ? 's' : '') + ' : ' + euro(fn(n)) + ' €/mois</title></circle>').join('');

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

        // Annotation : point de bascule réel (1er g où Priority devient moins cher à garantie égale)
        let note = '', crossover = 0;
        if (chartView === 'resilience') {
          for (let g = 1; g <= NMAX; g++) { if (priFn(g) < dedFn(g)) { crossover = g; break; } }
          if (crossover) {
            const gx = sx(crossover).toFixed(1);
            note = '<line class="pc-note" x1="' + gx + '" y1="' + PADT + '" x2="' + gx + '" y2="' + (H - PADB) + '"/>' +
                   '<text class="pc-note-txt" x="' + (parseFloat(gx) + 6) + '" y="' + (PADT + 14) + '">Dès ' + crossover + ' agents garantis : Priority &lt; dédié sur-staffé</text>';
          }
        }

        chart.innerHTML =
          '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Comparaison coût Dédié vs Priority selon le nombre d\'agents">' +
          grid + xlab + note +
          '<path class="pc-line pc-dedie" d="' + path(dedFn) + '"/>' +
          '<path class="pc-line pc-priority" d="' + path(priFn) + '"/>' +
          dots(dedFn, 'pc-dot pc-dot-dedie') + dots(priFn, 'pc-dot pc-dot-priority') +
          '<text class="pc-axis pc-axis-x" x="' + ((W + PADL) / 2) + '" y="' + (H - 4) + '" text-anchor="middle">Nombre d\'agents</text>' +
          '</svg>';
        const cap = $('priority-chart-caption');
        if (cap) cap.textContent = chartView === 'brut'
          ? 'Coût mensuel brut à effectif égal : Priority coûte plus (le backup réservé est inclus), mais l\'écart se resserre quand l\'équipe grandit — le backup s\'amortit.'
          : 'À garantie égale (zéro rupture). En dédié il faut sur-staffer un backup que vous gérez ; en Priority il est inclus et géré par nous — et au-delà du point marqué, Priority revient même moins cher.';
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
      el.addEventListener('click', e => { e.preventDefault(); openModal(); })
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
})();
