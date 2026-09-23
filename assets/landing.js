/* =========================================================
   Landing pages — vidéo de fond du hero.
   - choisit la version paysage (16:9) ou portrait (9:16) selon l'écran ;
   - ne charge aucune vidéo si l'utilisateur a demandé moins d'animations
     ou active l'économie de données : l'image fixe (poster) reste affichée ;
   - bouton pause/lecture (WCAG 2.2.2) et pause automatique hors écran.
   Attendu : <video data-video="assets/video/landing-a"> dans .lp-hero.
   ========================================================= */
(function () {
  'use strict';
  const hero = document.querySelector('.lp-hero');
  const video = hero && hero.querySelector('video[data-video]');
  if (!video) return;
  const btn = hero.querySelector('.lp-vbtn');

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = navigator.connection && navigator.connection.saveData;
  if (reduced || saveData) { hero.classList.add('no-motion'); video.remove(); return; }

  const base = video.dataset.video + (window.matchMedia('(max-aspect-ratio: 4/5)').matches ? '-9x16' : '-16x9');
  video.poster = base + '.jpg';
  for (const [ext, type] of [['webm', 'video/webm; codecs=vp9'], ['mp4', 'video/mp4']]) {
    const s = document.createElement('source');
    s.src = base + '.' + ext;
    s.type = type;
    video.appendChild(s);
  }
  video.muted = true;
  video.load();

  let userPaused = false;
  const play = () => { const p = video.play(); if (p && p.catch) p.catch(() => {}); };
  const setBtn = paused => {
    if (!btn) return;
    btn.setAttribute('aria-pressed', String(paused));
    btn.setAttribute('aria-label', paused ? 'Relancer la vidéo de fond' : 'Mettre en pause la vidéo de fond');
  };

  if (btn) btn.addEventListener('click', () => {
    userPaused = !video.paused;
    if (userPaused) video.pause(); else play();
    setBtn(userPaused);
  });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => {
      if (userPaused) return;
      if (e.isIntersecting) play(); else video.pause();
    }, { threshold: 0.15 }).observe(hero);
  } else {
    play();
  }
  setBtn(false);
})();
