(function () {
  "use strict";

  const THEMES = window.THEMES;
  const DIET = window.DIET_TAGS;
  const SELLER = window.SELLER;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

  const state = {
    index: 0,
    category: null,
    layout: null,
    diet: new Set(),
    rating: 0,
  };

  /* ---------------- helpers ---------------- */
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const money = (n) => "$" + (Number.isInteger(n) ? n : n.toFixed(2));

  const toMin = (hhmm) => {
    const [h, m] = hhmm.split(":").map(Number);
    return h * 60 + m;
  };

  const fmtTime = (hhmm) => {
    let [h, m] = hhmm.split(":").map(Number);
    const ap = h >= 12 && h < 24 ? "pm" : "am";
    h = h % 12 || 12;
    return m ? `${h}:${String(m).padStart(2, "0")}${ap}` : `${h}${ap}`;
  };

  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    t.innerHTML = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 3800);
  }

  /* ---------------- rendering ---------------- */
  function render(direction) {
    const th = THEMES[state.index];
    const site = $("#site");

    // Slide animation
    site.classList.remove("slide-left", "slide-right");
    void site.offsetWidth; // restart animation
    if (direction) site.classList.add(direction > 0 ? "slide-left" : "slide-right");

    document.body.dataset.theme = th.id;
    document.title = `${th.name} · Restaurant Website Example`;

    // simple text bindings
    $$("[data-bind]").forEach((el) => {
      const key = el.dataset.bind;
      if (th[key] !== undefined) el.textContent = th[key];
    });

    // demo bar
    $("#themeLabel").textContent = th.label;
    $("#themeCount").textContent = `${state.index + 1} / ${THEMES.length}`;
    $$("#themeDots button").forEach((d, i) => d.classList.toggle("active", i === state.index));

    // hero photo + layout
    $("#hero").style.setProperty("--hero-img", `url("${new URL(th.hero.img, location.href).href}")`);
    $("#hero").dataset.layout = th.hero.layout;

    // header button
    const hc = $("#headerCta");
    hc.textContent = th.headerCta[0];
    hc.dataset.action = th.headerCta[1];

    // highlights
    $("#highlights").innerHTML = th.highlights
      .map(([t, d]) => `<div class="highlight"><strong>${esc(t)}</strong><p>${esc(d)}</p></div>`)
      .join("");

    // about photo
    $("#aboutImg").src = th.aboutImg;

    // feature block
    const ft = th.feature;
    $("#featureKicker").textContent = ft.kicker;
    $("#featureTitle").textContent = ft.title;
    $("#featureText").textContent = ft.text;
    $("#featureImg").src = ft.img;
    $("#featureList").innerHTML = ft.list.map(([a, b]) => `<li><strong>${esc(a)}</strong><span>${esc(b)}</span></li>`).join("");
    $("#featureCta").textContent = ft.cta[0];
    $("#featureCta").dataset.action = ft.cta[1];

    // gallery
    $("#galleryGrid").innerHTML = th.gallery
      .map(([src, cap], i) => `<button class="g-item" data-i="${i}" aria-label="View photo: ${esc(cap)}"><img src="${src}" alt="${esc(cap)}" loading="lazy" /><span>${esc(cap)}</span></button>`)
      .join("");

    // stats
    $("#stats").innerHTML = th.stats
      .map(([n, l]) => `<div class="stat"><span class="stat-num">${esc(n)}</span><span class="stat-label">${esc(l)}</span></div>`)
      .join("");

    // reviews
    $("#reviews").innerHTML = th.reviews
      .map(([q, who]) => `<figure class="review"><div class="review-stars">★★★★★</div><blockquote>“${esc(q)}”</blockquote><figcaption>${esc(who)}</figcaption></figure>`)
      .join("");

    // phone
    $("#phoneLink").href = "tel:" + th.phone.replace(/\D/g, "");

    // menu
    state.category = Object.keys(th.menu)[0];
    state.layout = th.defaultLayout;
    state.diet.clear();
    renderMenuControls();
    renderMenu();

    renderHours();
    resetFeedback();

    try {
      history.replaceState(null, "", "#" + th.id);
    } catch (e) {}
  }

  function renderMenuControls() {
    const th = THEMES[state.index];
    $("#menuTabs").innerHTML = Object.keys(th.menu)
      .map((c) => `<button role="tab" data-cat="${esc(c)}" aria-selected="${c === state.category}" class="${c === state.category ? "active" : ""}">${esc(c)}</button>`)
      .join("");

    $("#dietFilters").innerHTML = Object.entries(DIET)
      .map(([k, v]) => `<button data-diet="${k}" class="chip ${state.diet.has(k) ? "active" : ""}" aria-pressed="${state.diet.has(k)}">${v.label}</button>`)
      .join("");

    $$(".layout-switch button").forEach((b) => b.classList.toggle("active", b.dataset.layout === state.layout));
  }

  function renderMenu() {
    const th = THEMES[state.index];
    const items = th.menu[state.category].filter(([, , , tags]) => [...state.diet].every((d) => tags.includes(d)));
    const box = $("#menuItems");
    box.className = "menu-items layout-" + state.layout;

    if (!items.length) {
      box.innerHTML = `<p class="empty">No ${esc(state.category.toLowerCase())} match those filters. Try removing one.</p>`;
      return;
    }

    box.innerHTML = items
      .map(([name, desc, price, tags, img], i) => {
        const tagHtml = tags.map((t) => `<span class="tag tag-${t}" title="${DIET[t].label}">${DIET[t].short}</span>`).join("");
        return `
        <article class="dish${img ? " has-photo" : ""}" style="--i:${i}">
          ${img ? `<div class="dish-photo"><img src="${img}" alt="" loading="lazy" /></div>` : ""}
          <div class="dish-body">
            <div class="dish-line">
              <h4>${esc(name)}</h4>
              <span class="dots" aria-hidden="true"></span>
              <span class="price">${money(price)}</span>
            </div>
            <p>${esc(desc)}</p>
            <div class="tags">${tagHtml}</div>
          </div>
        </article>`;
      })
      .join("");
  }

  function renderHours() {
    const th = THEMES[state.index];
    const now = new Date();
    const todayIdx = (now.getDay() + 6) % 7; // Mon = 0
    const mins = now.getHours() * 60 + now.getMinutes();

    $("#hoursTable").innerHTML = th.hours
      .map(([d, h], i) => {
        let txt = "Closed";
        if (h) {
          const [a, b] = h.split("-");
          txt = `${fmtTime(a)} – ${fmtTime(b)}`;
        }
        return `<tr class="${i === todayIdx ? "today" : ""}"><th>${d}${i === todayIdx ? " <em>today</em>" : ""}</th><td>${txt}</td></tr>`;
      })
      .join("");

    // open-now: check today, plus yesterday's hours spilling past midnight
    let open = false;
    let closesAt = null;
    const today = th.hours[todayIdx][1];
    const yest = th.hours[(todayIdx + 6) % 7][1];
    if (today) {
      const [a, b] = today.split("-").map(toMin);
      const end = b <= a ? b + 1440 : b;
      if (mins >= a && mins < end) { open = true; closesAt = today.split("-")[1]; }
    }
    if (!open && yest) {
      const [a, b] = yest.split("-").map(toMin);
      if (b <= a && mins < b) { open = true; closesAt = yest.split("-")[1]; }
    }
    const el = $("#openStatus");
    el.className = "open-status " + (open ? "is-open" : "is-closed");
    el.innerHTML = open
      ? `<span class="dot"></span> Open now · closes ${fmtTime(closesAt)}`
      : `<span class="dot"></span> Closed right now · see hours below`;
  }

  /* ---------------- feedback (demo only) ---------------- */
  function setRating(v) {
    state.rating = v;
    $$("#stars button").forEach((b) => b.classList.toggle("on", Number(b.dataset.v) <= v));
  }

  function resetFeedback() {
    const f = $("#feedbackForm");
    f.reset();
    setRating(0);
    $("#formError").textContent = "";
    $("#emailPreview").hidden = true;
    $$("#routeSteps li").forEach((li) => li.classList.remove("done", "skipped"));
    f.querySelector("button[type=submit]").disabled = false;
  }

  function handleFeedback(e) {
    e.preventDefault();
    const f = e.target;
    const th = THEMES[state.index];
    const name = f.name.value.trim();
    const email = f.email.value.trim();
    const msg = f.message.value.trim();
    const err = $("#formError");

    if (!name || !msg) { err.textContent = "Please add your name and a message."; return; }
    if (email && !/^\S+@\S+\.\S+$/.test(email)) { err.textContent = "That email doesn't look quite right."; return; }
    err.textContent = "";

    f.querySelector("button[type=submit]").disabled = true;
    const steps = $$("#routeSteps li");
    steps.forEach((li) => li.classList.remove("done", "skipped"));
    const lowRating = state.rating > 0 && state.rating <= 2;

    steps.forEach((li, i) => {
      setTimeout(() => {
        const step = Number(li.dataset.step);
        if (step === 4 && !lowRating) li.classList.add("skipped");
        else if (step === 5 && !email) li.classList.add("skipped");
        else li.classList.add("done");
        if (i === steps.length - 1) showEmailPreview(th, { name, email, msg, topic: f.topic.value, lowRating });
      }, 450 * (i + 1));
    });
  }

  function showEmailPreview(th, d) {
    const stars = state.rating ? "★".repeat(state.rating) + "☆".repeat(5 - state.rating) : "No rating";
    const p = $("#emailPreview");
    p.innerHTML = `
      <div class="ep-head">
        <span class="ep-label">Preview of the email the owner would receive</span>
        <div><b>To:</b> ${esc(th.ownerEmail)}</div>
        <div><b>From:</b> Website Feedback &lt;no-reply@${esc(th.ownerEmail.split("@")[1])}&gt;</div>
        <div><b>Reply-To:</b> ${d.email ? esc(d.email) : "<i>not provided</i>"}</div>
        <div><b>Subject:</b> ${d.lowRating ? "[Low rating] " : ""}New feedback: ${esc(d.topic)} (${stars})</div>
      </div>
      <div class="ep-body">
        <p><b>${esc(d.name)}</b> wrote:</p>
        <p class="ep-msg">${esc(d.msg).replace(/\n/g, "<br>")}</p>
        ${d.lowRating ? `<p class="ep-flag">Low rating: a text alert was also sent to ${esc(th.phone)}.</p>` : ""}
      </div>`;
    p.hidden = false;
    toast(`Example only: on a real site this goes to <b>${esc(th.ownerEmail)}</b>`);
  }

  /* ---------------- photo viewer ---------------- */
  let lbIndex = 0;
  function openLightbox(i) {
    const g = THEMES[state.index].gallery;
    lbIndex = (i + g.length) % g.length;
    $("#lbImg").src = g[lbIndex][0];
    $("#lbImg").alt = g[lbIndex][1];
    $("#lbCap").textContent = g[lbIndex][1];
    $("#lightbox").hidden = false;
    document.body.classList.add("lb-open");
  }
  function closeLightbox() {
    $("#lightbox").hidden = true;
    document.body.classList.remove("lb-open");
  }
  function setupLightbox() {
    $("#galleryGrid").addEventListener("click", (e) => {
      const b = e.target.closest(".g-item"); if (b) openLightbox(Number(b.dataset.i));
    });
    $("#lbClose").addEventListener("click", closeLightbox);
    $("#lbPrev").addEventListener("click", () => openLightbox(lbIndex - 1));
    $("#lbNext").addEventListener("click", () => openLightbox(lbIndex + 1));
    $("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLightbox(); });
  }
  const lbOpen = () => !$("#lightbox").hidden;

  /* ---------------- navigation between themes ---------------- */
  function go(delta) {
    state.index = (state.index + delta + THEMES.length) % THEMES.length;
    render(delta);
  }

  function goTo(i) {
    if (i === state.index) return;
    const dir = i > state.index ? 1 : -1;
    state.index = i;
    render(dir);
  }

  function setupSwipe() {
    let x0 = null, y0 = null, t0 = 0;
    const target = document;
    target.addEventListener("touchstart", (e) => {
      if (lbOpen() || e.target.closest("input, textarea, select, .menu-tabs")) { x0 = null; return; }
      x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; t0 = Date.now();
    }, { passive: true });
    target.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      const dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.6 && Date.now() - t0 < 700) {
        go(dx < 0 ? 1 : -1);
        hideHint();
      }
      x0 = null;
    }, { passive: true });
  }

  function hideHint() {
    $("#swipeHint").classList.add("gone");
  }

  /* ---------------- wire up ---------------- */
  function init() {
    // dots
    $("#themeDots").innerHTML = THEMES.map((t, i) => `<button aria-label="${esc(t.label)}" title="${esc(t.label)}"></button>`).join("");
    $$("#themeDots button").forEach((b, i) => b.addEventListener("click", () => goTo(i)));

    $("#prevTheme").addEventListener("click", () => go(-1));
    $("#nextTheme").addEventListener("click", () => go(1));
    document.addEventListener("keydown", (e) => {
      if (e.target.closest("input, textarea, select")) return;
      if (lbOpen()) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") openLightbox(lbIndex + 1);
        if (e.key === "ArrowLeft") openLightbox(lbIndex - 1);
        return;
      }
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    });
    setupSwipe();

    // notes toggle
    $("#notesToggle").addEventListener("change", (e) => document.body.classList.toggle("hide-notes", !e.target.checked));

    // menu controls (delegated)
    $("#menuTabs").addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b) return;
      state.category = b.dataset.cat; renderMenuControls(); renderMenu();
    });
    $("#dietFilters").addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b) return;
      const k = b.dataset.diet;
      state.diet.has(k) ? state.diet.delete(k) : state.diet.add(k);
      renderMenuControls(); renderMenu();
    });
    $$(".layout-switch button").forEach((b) =>
      b.addEventListener("click", () => { state.layout = b.dataset.layout; renderMenuControls(); renderMenu(); })
    );

    // stars
    $$("#stars button").forEach((b) => b.addEventListener("click", () => setRating(Number(b.dataset.v))));
    $("#feedbackForm").addEventListener("submit", handleFeedback);

    // demo-only buttons
    const actions = {
      reserve: "Bookings can go through OpenTable, Resy, or a simple form that emails you.",
      order: "Online ordering links to whatever you already use: Toast, Square, Clover or DoorDash.",
      pdf: "A printable PDF menu, kept in sync with the menu on the page.",
      directions: "Opens Google or Apple Maps with directions to your door.",
      social: "Links to your Instagram, Facebook or TikTok.",
      quote: "A quote form collects the date, headcount and address, and emails it to you.",
      gift: "Gift cards can be sold online through Square, Toast or Stripe and emailed to the buyer.",
      call: "On a phone this button calls the restaurant directly.",
    };
    document.addEventListener("click", (e) => {
      const a = e.target.closest(".demo-action");
      if (!a) return;
      e.preventDefault();
      toast(actions[a.dataset.action] || "Demo feature");
    });

    // mobile nav
    $("#navBurger").addEventListener("click", () => $("#siteNav").classList.toggle("open"));
    $("#siteNav").addEventListener("click", (e) => { if (e.target.tagName === "A") $("#siteNav").classList.remove("open"); });

    // seller CTA
    $("#sellerName").textContent = `${SELLER.name} · ${SELLER.business}`;
    const se = $("#sellerEmail");
    se.textContent = "Email " + SELLER.email;
    se.href = `mailto:${SELLER.email}?subject=${encodeURIComponent("Website for my restaurant")}`;
    const sp = $("#sellerPhone");
    sp.textContent = SELLER.phone;
    sp.href = "tel:" + SELLER.phone.replace(/\D/g, "");

    $("#year").textContent = new Date().getFullYear();

    // start on theme from URL hash if present
    const fromHash = THEMES.findIndex((t) => "#" + t.id === location.hash);
    if (fromHash >= 0) state.index = fromHash;
    render(0);

    window.addEventListener("hashchange", () => {
      const i = THEMES.findIndex((t) => "#" + t.id === location.hash);
      if (i >= 0) goTo(i);
    });

    setupLightbox();
    setTimeout(hideHint, 6000);
    setInterval(renderHours, 60000);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
