'use strict';
/* =============================================
   SUNRISE INTERIORS — SHARED SCRIPTS v2.0
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
  document.querySelectorAll('a,button,.vibe-card,.mat-item,.service-card,.project-card,.gallery-card,.why-card,.room-tab').forEach(function (el) {
    el.addEventListener('mouseenter', function () { cursor.classList.add('hover'); });
    el.addEventListener('mouseleave', function () { cursor.classList.remove('hover'); });
  });
})();

/* ---- Navbar: transparent → frosted glass on scroll ---- */
(function () {
  var nav = document.getElementById('navbar');
  if (!nav) return;
  function update() { nav.classList.toggle('scrolled', window.scrollY > 60); }
  update();
  window.addEventListener('scroll', update, { passive: true });
})();

/* ---- Mobile hamburger menu ---- */
(function () {
  var btn  = document.querySelector('.hamburger');
  var menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;
  var links = menu.querySelectorAll('a');

  function closeMenu() {
    btn.classList.remove('open');
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  function openMenu() {
    btn.classList.add('open');
    menu.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  btn.addEventListener('click', function () {
    menu.classList.contains('open') ? closeMenu() : openMenu();
  });
  links.forEach(function (l) { l.addEventListener('click', closeMenu); });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) closeMenu();
  });
})();

/* ---- Active nav link ---- */
(function () {
  var page = document.body.getAttribute('data-page');
  if (!page) return;
  document.querySelectorAll('[data-navpage]').forEach(function (el) {
    el.classList.toggle('active', el.getAttribute('data-navpage') === page);
  });
})();

/* ---- Fade-up / fade-in IntersectionObserver ---- */
(function () {
  var els = document.querySelectorAll('.fade-up, .fade-in');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
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
    var dur = 1800;
    var start = null;
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

/* ---- Hero scroll indicator fade ---- */
(function () {
  var ind = document.querySelector('.scroll-indicator');
  if (!ind) return;
  window.addEventListener('scroll', function () {
    ind.style.opacity = window.scrollY > 120 ? '0' : '1';
  }, { passive: true });
})();

/* ---- ROOM JOURNEY — Sticky scroll image switcher (desktop) ---- */
(function () {
  var steps = document.querySelectorAll('.journey-step');
  var images = document.querySelectorAll('.journey-img');
  var numEl = document.getElementById('journeyNum');
  if (!steps.length || !images.length) return;

  // Only run sticky logic on desktop
  function isMd() { return window.matchMedia('(min-width: 1024px)').matches; }

  function setActive(idx) {
    steps.forEach(function (s, i) { s.classList.toggle('active', i === idx); });
    images.forEach(function (img, i) { img.classList.toggle('active', i === idx); });
    if (numEl) numEl.textContent = ('0' + (idx + 1)).slice(-2) + ' / ' + ('0' + steps.length).slice(-2);
  }

  if (!('IntersectionObserver' in window)) return;

  var obs = new IntersectionObserver(function (entries) {
    if (!isMd()) return;
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        var idx = Array.from(steps).indexOf(e.target);
        if (idx !== -1) setActive(idx);
      }
    });
  }, { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' });

  steps.forEach(function (s) { obs.observe(s); });
})();

/* ---- GALLERY — Drag-to-scroll + arrow buttons ---- */
(function () {
  var track = document.getElementById('galleryTrack');
  var prev  = document.getElementById('galleryPrev');
  var next  = document.getElementById('galleryNext');
  if (!track) return;

  // Drag scroll
  var isDown = false, startX, scrollLeft;
  track.addEventListener('mousedown', function (e) {
    isDown = true; track.classList.add('active');
    startX = e.pageX - track.offsetLeft; scrollLeft = track.scrollLeft;
  });
  track.addEventListener('mouseleave', function () { isDown = false; track.classList.remove('active'); });
  track.addEventListener('mouseup',    function () { isDown = false; track.classList.remove('active'); });
  track.addEventListener('mousemove',  function (e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX - track.offsetLeft;
    track.scrollLeft = scrollLeft - (x - startX) * 1.4;
  });

  // Arrow buttons
  function scrollBy(dir) {
    var card = track.querySelector('.gallery-card');
    var amount = card ? card.offsetWidth + 24 : 340;
    track.scrollBy({ left: dir * amount, behavior: 'smooth' });
  }
  if (prev) prev.addEventListener('click', function () { scrollBy(-1); });
  if (next) next.addEventListener('click', function () { scrollBy(1); });
})();

/* ---- Style Quiz ---- */
(function () {
  var s1 = document.getElementById('qStep1');
  var s2 = document.getElementById('qStep2');
  var s3 = document.getElementById('qStep3');
  if (!s1) return;

  var bar  = document.querySelector('.quiz-bar-fill');
  var vibe = '', room = '';

  function goStep(n) {
    [s1, s2, s3].forEach(function (s, i) { s.classList.toggle('active', i + 1 === n); });
    if (bar) bar.style.width = (n === 1 ? 33 : n === 2 ? 66 : 100) + '%';
  }

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
      var msg = 'Namaste! I\'m ' + name + '. I took the style quiz on your website 😊\n\n'
        + 'My Style: ' + vibe + '\n'
        + 'Room: ' + room + '\n\n'
        + 'Please send my free mood board! I\'m in Andhra Pradesh / Telangana.';
      window.open('https://wa.me/919652540850?text=' + encodeURIComponent(msg), '_blank');
    });
  }
})();

/* ---- Testimonials scroll dots ---- */
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

/* ---- Contact form no-backend handler ---- */
(function () {
  document.querySelectorAll('.contact-form').forEach(function (form) {
    var success = form.querySelector('.f-success');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name    = form.querySelector('[name="name"]')    ? form.querySelector('[name="name"]').value    : '';
      var phone   = form.querySelector('[name="phone"]')   ? form.querySelector('[name="phone"]').value   : '';
      var room    = form.querySelector('[name="room"]')    ? form.querySelector('[name="room"]').value    : 'Interiors';
      var message = form.querySelector('[name="message"]') ? form.querySelector('[name="message"]').value : '';
      var msg = 'Namaste! I\'m ' + name + ' from your website enquiry form.\n\n'
        + 'Phone: ' + phone + '\n'
        + 'Room Interest: ' + room + '\n'
        + (message ? 'Message: ' + message : '');
      window.open('https://wa.me/919652540850?text=' + encodeURIComponent(msg), '_blank');
      if (success) { success.style.display = 'block'; }
      form.querySelectorAll('input,select,textarea,button').forEach(function (el) { el.disabled = true; });
      setTimeout(function () {
        if (success) success.style.display = 'none';
        form.reset();
        form.querySelectorAll('input,select,textarea,button').forEach(function (el) { el.disabled = false; });
      }, 6000);
    });
  });
})();

/* ---- FAQ accordion ---- */
(function () {
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });
})();

/* ---- Smooth scroll for same-page anchors ---- */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();

/* ---- Room tabs (interiors page) ---- */
(function () {
  var tabs   = document.querySelectorAll('.room-tab');
  var panels = document.querySelectorAll('.room-panel');
  if (!tabs.length) return;

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.getAttribute('data-room');
      tabs.forEach(function (t)   { t.classList.toggle('active', t.getAttribute('data-room') === target); });
      panels.forEach(function (p) { p.classList.toggle('active', p.getAttribute('data-room') === target); });
    });
  });
})();

/* ---- Before/After slider (interiors page) ---- */
(function () {
  var slider  = document.querySelector('.ba-slider');
  if (!slider) return;
  var after   = slider.querySelector('.ba-after');
  var handle  = slider.querySelector('.ba-handle');
  var isDrag  = false;

  function setPos(x) {
    var rect  = slider.getBoundingClientRect();
    var pct   = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
    after.style.width  = pct + '%';
    handle.style.left  = pct + '%';
  }

  slider.addEventListener('mousedown',  function (e) { isDrag = true; setPos(e.clientX); });
  slider.addEventListener('touchstart', function (e) { isDrag = true; setPos(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('mousemove',  function (e) { if (isDrag) setPos(e.clientX); });
  window.addEventListener('touchmove',  function (e) { if (isDrag) setPos(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('mouseup',    function ()  { isDrag = false; });
  window.addEventListener('touchend',   function ()  { isDrag = false; });
})();

/* ---- Projects filter (projects page) ---- */
(function () {
  var btns  = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.proj-grid-card[data-type]');
  if (!btns.length || !cards.length) return;

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      cards.forEach(function (card) {
        var show = filter === 'all' || card.getAttribute('data-type') === filter;
        card.style.display = show ? '' : 'none';
        card.style.opacity = show ? '1' : '0';
      });
    });
  });
})();
