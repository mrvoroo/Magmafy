(function () {
  "use strict";

  var cfg = window.MAGMAFY_CONFIG || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- روابط واتساب ---------- */
  function waLink(text) {
    var msg = text || cfg.whatsappMessage || "";
    return "https://wa.me/" + (cfg.whatsappNumber || "") + (msg ? "?text=" + encodeURIComponent(msg) : "");
  }
  $$("[data-wa]").forEach(function (a) { a.href = waLink(); });

  /* ---------- بيانات التواصل ---------- */
  $$("[data-config]").forEach(function (el) {
    var v = cfg[el.getAttribute("data-config")];
    if (v) el.textContent = v;
  });
  $$("[data-config-href]").forEach(function (el) {
    var parts = el.getAttribute("data-config-href").split(":");
    var v = cfg[parts[1]];
    if (v) el.href = parts[0] + ":" + String(v).replace(/\s+/g, "");
  });

  /* ---------- روابط المنصات ---------- */
  var socialNames = { instagram: "Instagram", tiktok: "TikTok", snapchat: "Snapchat", x: "X", facebook: "Facebook", youtube: "YouTube" };
  var socials = $("#socials");
  if (socials && cfg.social) {
    Object.keys(socialNames).forEach(function (key) {
      if (!cfg.social[key]) return;
      var li = document.createElement("li");
      li.innerHTML = '<a href="' + cfg.social[key] + '" target="_blank" rel="noopener" aria-label="' + socialNames[key] +
        '"><svg class="icon"><use href="#' + key + '"/></svg></a>';
      socials.appendChild(li);
    });
  }

  /* ---------- شريط الثقة والعدّاد ---------- */
  var statsEl = $("#stats");
  var fmt = new Intl.NumberFormat("en-US");
  if (statsEl && cfg.stats) {
    statsEl.innerHTML = cfg.stats.map(function (s) {
      return '<li class="stat"><div class="stat__num"><span class="num" dir="ltr">' + (s.prefix || "") +
        '<span class="count" data-to="' + s.value + '">' + fmt.format(s.value) + '</span>' + (s.suffix || "") + '</span>' +
        (s.unit ? '<span class="stat__unit">' + s.unit + '</span>' : "") +
        '</div><p class="stat__label">' + s.label + '</p></li>';
    }).join("");
  }
  function animateCount(el) {
    var to = Number(el.getAttribute("data-to"));
    if (reduceMotion || !isFinite(to)) return;
    var start = null, dur = 1600;
    function tick(t) {
      if (start === null) start = t;
      var p = Math.min((t - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt.format(Math.round(to * eased));
      if (p < 1) requestAnimationFrame(tick);
    }
    el.textContent = "0";
    requestAnimationFrame(tick);
  }

  /* ---------- الشريط العلوي والقائمة ---------- */
  var header = $(".site-header");
  function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 20); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var burger = $("#burger"), nav = $("#nav");
  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
    burger.innerHTML = '<svg class="icon"><use href="#' + (open ? "i-close" : "i-menu") + '"/></svg>';
  }
  burger.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  /* ---------- تمييز الرابط النشط ---------- */
  var links = $$(".nav__list a");
  var map = {};
  links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
  if ("IntersectionObserver" in window) {
    var secObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (l) { l.classList.remove("is-active"); });
        var a = map[en.target.id];
        if (a) a.classList.add("is-active");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) secObs.observe(s); });
  }

  /* ---------- الظهور التدريجي والعدّاد ---------- */
  var reveals = $$(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var revObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        revObs.unobserve(el);
        var idx = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
        el.style.transitionDelay = Math.min(idx, 6) * 70 + "ms";
        el.classList.add("is-visible");
        // بعد انتهاء الحركة نزيل الصنف حتى لا يتعارض مع تأثيرات التحويم
        setTimeout(function () { el.classList.remove("reveal", "is-visible"); el.style.transitionDelay = ""; }, 1000 + idx * 70);
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { revObs.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.remove("reveal"); });
  }

  if ("IntersectionObserver" in window && statsEl) {
    var cObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { $$(".count", statsEl).forEach(animateCount); cObs.disconnect(); }
      });
    }, { threshold: 0.4 });
    cObs.observe(statsEl);
  }

  /* ---------- فلاتر الأعمال ---------- */
  var filterBtns = $$(".filter");
  var cases = $$(".case");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var f = btn.getAttribute("data-filter");
      filterBtns.forEach(function (b) {
        var on = b === btn;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", String(on));
      });
      cases.forEach(function (c) {
        var show = f === "all" || c.getAttribute("data-cat") === f;
        c.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* ---------- اختيار الباقة يملأ الرسالة ---------- */
  var message = $("#f-message");
  $$("[data-plan]").forEach(function (a) {
    a.addEventListener("click", function () {
      if (message && !message.value.trim()) message.value = "أرغب في عرض مخصص لـ" + a.getAttribute("data-plan") + ".";
    });
  });

  /* ---------- النموذج ---------- */
  var form = $("#contact-form"), statusEl = $("#form-status");

  function setStatus(el, text, type) {
    el.textContent = text;
    el.className = "form__status" + (type ? " is-" + type : "");
  }
  function fieldError(input, msg) {
    var wrap = input.closest(".field");
    wrap.classList.toggle("has-error", !!msg);
    var e = $(".field__error", wrap);
    if (e) e.textContent = msg || "";
    input.setAttribute("aria-invalid", msg ? "true" : "false");
  }
  function validContact(v) {
    var email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    var digits = v.replace(/[\s\-()+]/g, "").replace(/[٠-٩]/g, function (d) { return String(d.charCodeAt(0) - 1632); });
    return email.test(v) || /^\d{8,15}$/.test(digits);
  }

  if (form) {
    $$("input, select", form).forEach(function (i) {
      i.addEventListener("input", function () { if (i.closest(".field.has-error")) fieldError(i, ""); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      if (d.get("website")) return; // فخ الرسائل الآلية

      var ok = true;
      var name = form.elements.name, biz = form.elements.business, contact = form.elements.contact, goal = form.elements.goal;
      fieldError(name, name.value.trim() ? "" : (ok = false, "فضلًا اكتب اسمك"));
      fieldError(biz, biz.value.trim() ? "" : (ok = false, "فضلًا اكتب اسم نشاطك التجاري"));
      fieldError(contact, validContact(contact.value.trim()) ? "" : (ok = false, "أدخل رقم جوال صحيحًا أو بريدًا إلكترونيًا صحيحًا"));
      fieldError(goal, goal.value ? "" : (ok = false, "اختر هدفك التسويقي"));
      if (!ok) {
        setStatus(statusEl, "راجع الحقول المحددة ثم أعد المحاولة.", "err");
        var first = $(".field.has-error input, .field.has-error select", form);
        if (first) first.focus();
        return;
      }

      var platforms = d.getAll("platforms").join("، ") || "—";
      var text = [
        "طلب استشارة جديد — " + (cfg.brand || "Magmafy"),
        "الاسم: " + name.value.trim(),
        "النشاط التجاري: " + biz.value.trim(),
        "وسيلة التواصل: " + contact.value.trim(),
        "المنصات الحالية: " + platforms,
        "الهدف: " + goal.value,
        "الرسالة: " + (form.elements.message.value.trim() || "—")
      ].join("\n");

      var btn = $("button[type=submit]", form);
      btn.disabled = true;

      if (cfg.contactFormEndpoint) {
        setStatus(statusEl, "جارٍ الإرسال…", "");
        fetch(cfg.contactFormEndpoint, {
          method: "POST",
          headers: { "Accept": "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.value.trim(), business: biz.value.trim(), contact: contact.value.trim(),
            platforms: platforms, goal: goal.value, message: form.elements.message.value.trim()
          })
        }).then(function (r) {
          if (!r.ok) throw new Error("bad response");
          form.reset();
          setStatus(statusEl, "وصلنا طلبك. سنتواصل معك خلال يوم عمل واحد.", "ok");
        }).catch(function () {
          setStatus(statusEl, "تعذّر الإرسال. يمكنك مراسلتنا مباشرة عبر واتساب.", "err");
        }).then(function () { btn.disabled = false; });
      } else {
        window.open(waLink(text), "_blank", "noopener");
        setStatus(statusEl, "تم تجهيز رسالتك في واتساب، اضغط إرسال هناك لإكمال الطلب.", "ok");
        btn.disabled = false;
      }
    });
  }

  /* ---------- النشرة البريدية ---------- */
  var news = $("#newsletter"), newsStatus = $("#news-status");
  if (news) {
    news.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = news.elements.email.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        setStatus(newsStatus, "أدخل بريدًا إلكترونيًا صحيحًا.", "err");
        return;
      }
      if (cfg.newsletterEndpoint) {
        fetch(cfg.newsletterEndpoint, {
          method: "POST",
          headers: { "Accept": "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ email: email })
        }).then(function (r) {
          if (!r.ok) throw new Error();
          news.reset();
          setStatus(newsStatus, "تم الاشتراك. أهلًا بك!", "ok");
        }).catch(function () { setStatus(newsStatus, "تعذّر الاشتراك الآن، حاول لاحقًا.", "err"); });
      } else {
        window.location.href = "mailto:" + (cfg.email || "") + "?subject=" + encodeURIComponent("اشتراك في النشرة البريدية") +
          "&body=" + encodeURIComponent("أرغب في الاشتراك بالنشرة البريدية: " + email);
        setStatus(newsStatus, "أكمل إرسال رسالة البريد لتأكيد اشتراكك.", "ok");
      }
    });
  }

  var y = $("#year");
  if (y) y.textContent = new Date().getFullYear();
})();
