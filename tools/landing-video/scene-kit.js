/* =========================================================
   Kit commun des scènes vidéo des landing pages Salverys.

   Une scène est une fonction pure du temps : `update(t)` pose l'état
   exact de l'image à l'instant t (en secondes). Rien ne dépend de
   l'horloge du navigateur, ce qui permet :
     - l'aperçu en boucle dans un navigateur (ouvrir le fichier scene-*.html) ;
     - le rendu image par image par render.mjs (?render=1), identique à l'aperçu.

   Boucle sans saut : pendant les FADE dernières secondes, une seconde
   instance de la scène, figée à t = 0, apparaît en fondu par-dessus.
   La dernière image vaut donc la première.
   ========================================================= */
(function () {
  'use strict';

  const K = {};
  K.clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  K.lerp = (a, b, p) => a + (b - a) * p;
  /** Progression 0→1 de t entre a et b. */
  K.seg = (t, a, b) => K.clamp((t - a) / (b - a));
  K.easeOut = p => 1 - Math.pow(1 - p, 3);
  K.easeIn = p => p * p * p;
  K.easeInOut = p => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
  K.backOut = p => { const c = 1.5; return 1 + (c + 1) * Math.pow(p - 1, 3) + c * Math.pow(p - 1, 2); };
  /** Présence lissée : 0 avant a, 1 entre a+r et b, 0 après b+r. */
  K.window = (t, a, b, r = 0.35) => K.easeInOut(K.seg(t, a, a + r)) * (1 - K.easeInOut(K.seg(t, b, b + r)));

  K.el = (tag, cls, parent, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    if (parent) parent.appendChild(e);
    return e;
  };

  /**
   * Monte la scène et démarre l'aperçu ou le mode rendu.
   * @param {object} def { duration, fade, design: { landscape:[w,h], portrait:[w,h] }, mount(root, orient) → update(t) }
   */
  K.run = function (def) {
    const params = new URLSearchParams(location.search);
    const orient = params.get('orient') || (innerHeight > innerWidth ? 'portrait' : 'landscape');
    const [dw, dh] = def.design[orient];
    document.documentElement.dataset.orient = orient;

    const viewport = K.el('div', 'viewport', document.body);
    const stage = K.el('div', 'stage', viewport);
    stage.style.width = dw + 'px';
    stage.style.height = dh + 'px';
    const fit = () => { stage.style.transform = `scale(${Math.min(innerWidth / dw, innerHeight / dh)})`; };
    fit();
    addEventListener('resize', fit);

    const main = K.el('div', 'layer', stage);
    const loop = K.el('div', 'layer', stage);
    const updMain = def.mount(main, orient);
    const updLoop = def.mount(loop, orient);
    updLoop(0);

    const L = def.duration;
    const F = def.fade || 0.8;
    const renderAt = t => {
      updMain(t);
      loop.style.opacity = K.easeInOut(K.seg(t, L - F, L)).toFixed(4);
    };
    window.__scene = { duration: L, renderAt, ready: document.fonts ? document.fonts.ready : Promise.resolve() };

    if (params.has('render')) { renderAt(0); return; }
    if (params.has('t')) { renderAt(parseFloat(params.get('t'))); return; }
    const t0 = performance.now();
    const tick = now => { renderAt(((now - t0) / 1000) % L); requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  };

  window.SceneKit = K;
})();
