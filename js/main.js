'use strict';
/* =============================================
   SUNRISE INTERIORS — SHARED SCRIPTS
   Markapur, Andhra Pradesh
============================================= */

/* ---- Custom cursor (desktop only) ---- */
(function () {
  var cursor = document.getElementById('cursor');
  if (!cursor || !window.matchMedia('(hover: hover)').matches) return;
  document.addEventListener('mousemove', function (e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });
  document.querySelectorAll('a,button,.vibe-card,.mat-item,.service-card,.project-card').forEach(function (el) {
    el.addEventListener('mouseenter', function () { cursor.classList.add('hover'); });
    el.addEventListener('mouseleave', function () { cursor.classList.remove('hover'); });
  });
})();

/* ---- Navbar: transparent → white on scroll ---- */
(function () {
  var nav = document.getElementById('navbar');
  if (!nav) return;
  function update() { nav.classList.toggle('scrolled', window.scrollY > 50); }
  update();
  window.addEventListener('scroll', update, { passive: true });
})();

/* ---- Mobile hamburger menu ---- */
(function () {
  var btn  = document.querySelector('.hamburger');
  var menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  var links = menu.querySelectorAll('a');

  function close() {
    btn.classList.remove('open');
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  function open() {
    btn.classList.add('open');
    menu.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  btn.addEventListener('click', function () {
    menu.classList.contains('open') ? close() : open();
  });
  links.forEach(function (l) { l.addEventListener('click', close); });
})();

/* ---- Set active nav link based on current page ---- */
(function () {
  var page = document.body.getAttribute('data-page');
  if (!page) return;
  document.querySelectorAll('[data-navpage]').forEach(function (el) {
    el.classList.toggle('active', el.getAttribute('data-navpage') === page);
  });
})();

/* ---- Fade-up IntersectionObserver ---- */
(function () {
  var els = document.querySelectorAll('.fade-up');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });
  els.forEach(function (el) { obs.observe(el); });
})();

/* ---- Count-up animation for stats ---- */
(function () {
  var stats = document.querySelectorAll('[data-count]');
  if (!stats.length) return;

  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function animate(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var dur    = 1600;
    var start  = null;
    (function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = Math.round(easeOut(p) * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(performance.now());
  }

  if (!('IntersectionObserver' in window)) { stats.forEach(animate); return; }
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { animate(e.target); obs.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  stats.forEach(function (el) { obs.observe(el); });
})();

/* ---- Active nav section highlight (index only, hash-based) ---- */
(function () {
  var links = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!links.length) return;
  var sections = Array.from(links).map(function (l) {
    var id = l.getAttribute('href').replace('#', '');
    return document.getElementById(id);
  }).filter(Boolean);
  if (!sections.length || !('IntersectionObserver' in window)) return;
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        var id = e.target.id;
        links.forEach(function (l) { l.classList.toggle('active', l.getAttribute('href') === '#' + id); });
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(function (s) { obs.observe(s); });
})();

/* ---- Hero scroll indicator fade ---- */
(function () {
  var ind = document.querySelector('.scroll-indicator');
  if (!ind) return;
  window.addEventListener('scroll', function () {
    ind.style.opacity = window.scrollY > 160 ? '0' : '1';
  }, { passive: true });
})();

/* ---- Style Quiz ---- */
(function () {
  var s1 = document.getElementById('qStep1');
  var s2 = document.getElementById('qStep2');
  var s3 = document.getElementById('qStep3');
  if (!s1) return;

  var bar   = document.querySelector('.quiz-bar-fill');
  var vibe  = '';
  var room  = '';
  var step  = 1;

  function goStep(n) {
    step = n;
    [s1, s2, s3].forEach(function (s, i) { s.classList.toggle('active', i + 1 === n); });
    if (bar) bar.style.width = (n === 1 ? 33 : n === 2 ? 66 : 100) + '%';
  }

  /* Vibe selection */
  document.querySelectorAll('.vibe-card').forEach(function (card) {
    function pick() {
      document.querySelectorAll('.vibe-card').forEach(function (c) { c.classList.remove('sel'); });
      card.classList.add('sel');
      vibe = card.getAttribute('data-vibe');
      var btn = document.getElementById('q1Next');
      if (btn) btn.disabled = false;
    }
    card.addEventListener('click', pick);
    card.addEventListener('keypress', function (e) { if (e.key === 'Enter' || e.key === ' ') pick(); });
  });

  var q1n = document.getElementById('q1Next');
  if (q1n) q1n.addEventListener('click', function () { if (vibe) goStep(2); });

  /* Room selection */
  document.querySelectorAll('.room-pill').forEach(function (p) {
    p.addEventListener('click', function () {
      document.querySelectorAll('.room-pill').forEach(function (x) { x.classList.remove('sel'); });
      p.classList.add('sel');
      room = p.getAttribute('data-room');
      var btn = document.getElementById('q2Next');
      if (btn) btn.disabled = false;
    });
  });

  var q2n = document.getElementById('q2Next');
  var q2b = document.getElementById('q2Back');
  var q3b = document.getElementById('q3Back');
  if (q2n) q2n.addEventListener('click', function () { if (room) goStep(3); });
  if (q2b) q2b.addEventListener('click', function () { goStep(1); });
  if (q3b) q3b.addEventListener('click', function () { goStep(2); });

  /* Submit */
  var qSub = document.getElementById('qSubmit');
  if (qSub) {
    qSub.addEventListener('click', function () {
      var phone = (document.getElementById('qPhone') || {}).value || '';
      var name  = (document.getElementById('qName')  || {}).value || 'there';
      phone = phone.trim(); name = name.trim() || 'there';
      if (!phone) {
        var inp = document.getElementById('qPhone');
        if (inp) { inp.focus(); inp.style.borderColor = '#ef4444'; }
        return;
      }
      var msg = 'Namaste! I\'m ' + name + '. I took the style quiz on your website \uD83D\uDE0A\n\n'
        + 'My Style: ' + vibe + '\n'
        + 'Room: ' + room + '\n\n'
        + 'Please send my free mood board! I\'m in Andhra Pradesh / Telangana.';
      window.open('https://wa.me/919652540850?text=' + encodeURIComponent(msg), '_blank');
    });
  }
})();

/* ---- Testimonials dots ---- */
(function () {
  var track = document.getElementById('testiTrack');
  var dots  = document.querySelectorAll('.testi-dots .dot');
  if (!track || !dots.length) return;
  track.addEventListener('scroll', function () {
    var cards = track.querySelectorAll('.testi-card');
    var left  = track.getBoundingClientRect().left;
    var best  = 0, min = Infinity;
    cards.forEach(function (c, i) {
      var d = Math.abs(c.getBoundingClientRect().left - left);
      if (d < min) { min = d; best = i; }
    });
    dots.forEach(function (d, i) { d.classList.toggle('active', i === best); });
  }, { passive: true });
})();

/* ---- Contact form no-backend success ---- */
(function () {
  var forms = document.querySelectorAll('.contact-form');
  forms.forEach(function (form) {
    var success = form.querySelector('.f-success');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (success) success.style.display = 'block';
      form.querySelectorAll('input,select,textarea,button').forEach(function (el) { el.disabled = true; });
      setTimeout(function () {
        if (success) success.style.display = 'none';
        form.reset();
        form.querySelectorAll('input,select,textarea,button').forEach(function (el) { el.disabled = false; });
      }, 5000);
    });
  });
})();

/* ---- FAQ accordion ---- */
(function () {
  var items = document.querySelectorAll('.faq-item');
  items.forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      items.forEach(function (i) { i.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });
})();

/* ---- Smooth scroll for same-page anchor links ---- */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
})();
