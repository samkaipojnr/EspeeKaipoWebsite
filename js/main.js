(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var reduced = reduce.matches;
  document.documentElement.classList.add("js");

  reduce.addEventListener("change", function () {
    reduced = reduce.matches;
    if (reduced) {
      document.querySelectorAll("[data-reveal]").forEach(function (el) {
        el.classList.add("is-in");
      });
      document.querySelectorAll("video[data-autoplay-inview]").forEach(function (v) {
        v.pause();
      });
    }
  });

  /* Header colour follows the section under the nav */
  var header = document.querySelector("[data-header]");
  var sections = document.querySelectorAll("[data-theme]");
  function applyTheme(theme) {
    var map = {
      paper: "#17233B",
      sky: "#17233B",
      plum: "#F3F3EC",
      "plum-photo": "#FFFFFF"
    };
    header.style.setProperty("--header-fg", map[theme] || "#17233B");
  }
  if (header && sections.length && "IntersectionObserver" in window) {
    var themeObs = new IntersectionObserver(
      function (entries) {
        var visible = entries
          .filter(function (e) { return e.isIntersecting; })
          .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; })[0];
        if (visible) applyTheme(visible.target.getAttribute("data-theme"));
      },
      { rootMargin: "-8% 0px -70% 0px", threshold: [0, 0.15, 0.4, 0.7] }
    );
    sections.forEach(function (s) { themeObs.observe(s); });
  }

  /* Scroll progress */
  var bar = document.querySelector("[data-progress]");
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var p = max > 0 ? (h.scrollTop / max) * 100 : 0;
    if (bar) bar.style.setProperty("--progress", p + "%");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Reveals */
  if (!reduced && "IntersectionObserver" in window) {
    var revealObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -15% 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 4, 3) * 0.1 + 0.15 + "s";
      revealObs.observe(el);
    });
  } else {
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.classList.add("is-in");
    });
  }

  /* Gentle parallax on marked images, desktop only */
  var parallaxEls = document.querySelectorAll("[data-parallax]");
  var canParallax =
    !reduced &&
    window.matchMedia("(min-width: 992px) and (pointer: fine)").matches;
  if (canParallax && parallaxEls.length) {
    var updateParallax = function () {
      parallaxEls.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        var vh = window.innerHeight;
        if (rect.bottom < 0 || rect.top > vh) {
          el.style.willChange = "auto";
          return;
        }
        el.style.willChange = "transform";
        var progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        var shift = Math.max(-8, Math.min(8, progress * 10));
        el.style.transform = "translate3d(0, " + shift + "%, 0) scale(1.08)";
      });
    };
    window.addEventListener("scroll", updateParallax, { passive: true });
    updateParallax();
  }

  /* Mobile menu */
  var toggle = document.querySelector("[data-menu-toggle]");
  var panel = document.querySelector("#site-menu");
  var lastFocus = null;
  function menuLinks() {
    return panel ? Array.prototype.slice.call(panel.querySelectorAll("a, button")) : [];
  }
  function openMenu() {
    if (!panel || !toggle) return;
    lastFocus = document.activeElement;
    panel.classList.add("is-open");
    panel.removeAttribute("hidden");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
    toggle.textContent = "Close";
    var first = menuLinks()[0];
    if (first) first.focus();
  }
  function closeMenu() {
    if (!panel || !toggle) return;
    panel.classList.remove("is-open");
    panel.setAttribute("hidden", "");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    toggle.textContent = "Menu";
    if (lastFocus) lastFocus.focus();
  }
  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      if (toggle.getAttribute("aria-expanded") === "true") closeMenu();
      else openMenu();
    });
    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        closeMenu();
      }
      if (e.key === "Tab" && toggle.getAttribute("aria-expanded") === "true") {
        var items = menuLinks().concat([toggle]);
        var i = items.indexOf(document.activeElement);
        if (e.shiftKey && (i <= 0)) {
          e.preventDefault();
          items[items.length - 1].focus();
        } else if (!e.shiftKey && (i === items.length - 1 || i === -1)) {
          e.preventDefault();
          items[0].focus();
        }
      }
    });
  }

  /* In-view muted autoplay; pause under reduced motion */
  var videos = document.querySelectorAll("video[data-autoplay-inview]");
  if ("IntersectionObserver" in window && videos.length) {
    var vObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var v = entry.target;
          if (reduced) {
            v.pause();
            return;
          }
          if (entry.isIntersecting) {
            var play = v.play();
            if (play && play.catch) play.catch(function () {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: 0.4 }
    );
    videos.forEach(function (v) { vObs.observe(v); });
  }

  /* Magnetic circle button, desktop only */
  if (!reduced && window.matchMedia("(min-width: 992px) and (pointer: fine)").matches) {
    document.querySelectorAll("[data-magnetic]").forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - (r.left + r.width / 2);
        var y = e.clientY - (r.top + r.height / 2);
        btn.style.transform = "translate(" + x * 0.18 + "px, " + y * 0.18 + "px)";
      });
      btn.addEventListener("mouseleave", function () {
        btn.style.transform = "";
      });
    });
  }

  /* Form: no live endpoint yet */
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector("[data-form-status]");
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (status) {
        status.className = "form-status is-ok";
        status.textContent =
          "This form is not connected yet. Please call 027 818 3669 or email espee.kaipo@harcourts.co.nz and Espee will take it from there.";
      }
    });
  }
})();
