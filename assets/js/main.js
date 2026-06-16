// Chesshroom — 菌界棋譜 | shared site behavior
(function () {
  'use strict';

  // ---------- nav: solid background after scrolling past hero ----------
  var nav = document.getElementById('site-nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---------- scroll-reveal for [data-reveal] elements ----------
  var revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealEls.forEach(function (el) { obs.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    }
  }

  // ---------- before/after lighting compare slider ----------
  var frame = document.querySelector('.compare__frame');
  var range = document.querySelector('.compare__range');
  if (frame && range) {
    var update = function () {
      frame.style.setProperty('--pos', range.value + '%');
    };
    range.addEventListener('input', update);
    update();
  }
})();
