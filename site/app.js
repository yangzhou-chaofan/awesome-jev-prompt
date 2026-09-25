/* Top 100 Jev Showcase & Jev Prompts — app.js */
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}
function fmt(n) { return n == null ? "—" : n.toLocaleString("en-US"); }
function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }

/* hero stats */
function renderStats(s) {
  const box = document.getElementById("stats");
  [
    [fmt(s.curated), "top showcase builds"],
    [fmt(s.topPostLikes), "likes · top X post"],
    [s.promptEntries, "jev prompt patterns"],
    [s.cookbooks, "official cookbooks"],
    [fmt(s.hnPoints), "HN launch points"],
    ["day " + Math.max(1, Math.ceil((Date.now() - new Date("2026-09-15T12:00:00Z")) / 86400000)), "of ecosystem"]
  ].forEach(([n, l]) => {
    const d = el("div", "stat");
    d.appendChild(el("div", "num", n));
    d.appendChild(el("div", "lbl", l));
    box.appendChild(d);
  });
}

/* mario facts + arch + schema */
function renderMario(comm) {
  const facts = document.getElementById("mario-facts");
  const mario = (comm.repos || []).find(r => r.owner === "fhshaik" && r.name === "typesafe-mario");
  [
    ["2,278", "likes on X"],
    [(mario ? mario.stars : 140) + "★", "and climbing"],
    ["90s", "tweet → repo"],
    ["0", "screenshots seen"]
  ].forEach(([n, l]) => {
    const d = el("div", "mfact");
    d.appendChild(el("div", "n", n));
    d.appendChild(el("div", "l", l));
    facts.appendChild(d);
  });
  document.getElementById("arch").innerHTML = comm.marioArchitecture
    .replace(/→/g, '<span style="color:var(--green)">→</span>')
    .replace(/Jev Choice/g, '<span style="color:var(--blue)">Jev Choice</span>');
}

function renderSchema(sections) {
  const sec = sections.find(s => s.id === "case-mario");
  if (!sec) return;
  const p = sec.prompts.find(x => x.id === "mario-state");
  if (!p) return;
  document.getElementById("mario-schema").innerHTML = p.code
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/"(\w+)":/g, '"<span class="k2">$1</span>":');
}

/* grammar */
function renderGrammar(sections) {
  const grid = document.getElementById("grammar-grid");
  sections.filter(s => s.id === "primitives" || s.id === "state-format").forEach(sec => {
    sec.prompts.forEach(p => {
      const c = el("div", "gcard");
      c.appendChild(el("div", "gt", p.title));
      if (p.example_answer_space) {
        c.appendChild(el("div", "gc", "answer space: " + p.example_answer_space + "\noutput: " + p.example_output));
      } else if (p.code) {
        c.appendChild(el("div", "gc", p.code.length > 170 ? p.code.slice(0, 167) + "…" : p.code));
      }
      c.appendChild(el("div", "gu", p.use || ""));
      grid.appendChild(c);
    });
  });
}

/* pattern library */
function renderLibrary(sections) {
  const host = document.getElementById("prompt-sections");
  const total = sections.reduce((a, s) => a + s.prompts.length, 0);
  document.getElementById("p-count").textContent = total + " entries · " + sections.length + " sections";
  sections.forEach(sec => {
    const box = el("div", "psec");
    const vmark = sec.verification === "verbatim" ? '<span class="v">✓ verbatim</span>' : '<span class="r">◐ reconstructed</span>';
    box.appendChild(el("h3", "", sec.title));
    box.appendChild(el("div", "src", "source: " + vmark + " · " + esc(sec.source)));
    const grid = el("div", "pgrid");
    sec.prompts.forEach(p => {
      const c = el("div", "pcard");
      c.appendChild(el("div", "pt", p.title));
      if (p.code) c.appendChild(el("div", "pc", p.code));
      if (p.example_answer_space) c.appendChild(el("div", "pc", "answer space: " + p.example_answer_space + "\noutput: " + p.example_output));
      if (p.answer_space) c.appendChild(el("div", "pc", "answer space: " + p.answer_space));
      if (p.primitive) c.appendChild(el("div", "pu", "primitive: " + p.primitive));
      if (p.goal_line) c.appendChild(el("div", "pu", esc(p.goal_line)));
      if (p.use) c.appendChild(el("div", "pu", esc(p.use)));
      if (p.url) {
        const a = el("a", "sl", "open cookbook ↗");
        a.href = p.url; a.target = "_blank"; a.rel = "noopener";
        c.appendChild(a);
      }
      const gm = p.use && p.use.match(/github\.com\/([\w.-]+\/[\w.-]+)/);
      if (gm) {
        const a = el("a", "sl", gm[1] + " ↗");
        a.href = "https://github.com/" + gm[1]; a.target = "_blank"; a.rel = "noopener";
        c.appendChild(a);
      }
      grid.appendChild(c);
    });
    box.appendChild(grid);
    host.appendChild(box);
  });
}

/* showcase — image cards with filters + lazy loading */
let REPOS = [], activeCat = "all";
const LAZY = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      const img = en.target;
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
      LAZY.unobserve(img);
    }
  });
}, { rootMargin: "300px" });

function repoUrl(r) {
  return r.url || ("https://github.com/" + r.owner + "/" + r.name.replace(/ \(.*\)/, ""));
}
function cardMedia(r, rank) {
  const wrap = el("a", "rimg");
  wrap.href = repoUrl(r); wrap.target = "_blank"; wrap.rel = "noopener";
  const local = "assets/cards/" + r.owner + "-" + r.name + ".webp";
  const img = el("img");
  img.alt = r.name + " — project card";
  img.loading = "lazy"; img.decoding = "async";
  img.dataset.src = local;
  img.dataset.fallback = r.img; // remote OG card, only if the local copy fails
  LAZY.observe(img);
  img.src = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100"><rect width="200" height="100" fill="#10131a"/></svg>');
  img.addEventListener("error", () => {
    if (img.dataset.fallback) {
      img.src = img.dataset.fallback;
      delete img.dataset.fallback;
    } else {
      img.style.objectFit = "contain";
      img.style.padding = "8px";
      img.src = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="640" height="320"><rect width="640" height="320" fill="#151924"/><text x="50%" y="47%" fill="#5a6373" font-family="monospace" font-size="34" text-anchor="middle">' + r.name + '</text><text x="50%" y="62%" fill="#3d465c" font-family="monospace" font-size="22" text-anchor="middle">github.com/' + r.owner + '</text></svg>');
    }
  });
  wrap.appendChild(img);
  if (rank <= 3) wrap.appendChild(el("span", "rk gold", "🏆 #" + rank));
  else if (r.src === "discord") wrap.appendChild(el("span", "rk", "◇ #" + rank));
  else wrap.appendChild(el("span", "rk", "#" + rank));
  return wrap;
}
/* worth-study picks — editorial, refreshed per snapshot */
const STUDY = [
  { icon: "📄", owner: "jerryjliu", name: "docjev", why: "LlamaIndex's founder shipped document classification on Jev — PDF/DOCX/PPTX in, typed categories and boundaries out. First framework-author endorsement." },
  { icon: "💬", owner: "jev-chat", name: "jev-chat-jarvis", why: "A chat sidekick on your phone: reads any conversation in WeChat/QQ/X and drafts replies — now an org with 3,600+★ across repos." },
  { icon: "🌌", owner: "phyous", name: "tsai-sc", why: "Jev beat StarCraft's Strongarm mission — verified victory screen, attempt 16. The quietest hard result in the ecosystem." },
  { icon: "🧩", owner: "vinnylarouge", name: "jevlike", why: "The reverse-engineering: one option-attention head reproducing the Jev shape, with Doom and chess checkpoints." },
  { icon: "🔤", owner: "TypeLLM", name: "TypeLLM", why: "LLMs with type-safe generation — the Jev contract generalized to ordinary text models. 570★ on day one signals where things converge." }
];
function renderStudy() {
  const row = document.getElementById("study-row");
  STUDY.forEach(s => {
    const d = REPOS.find(r => r.owner === s.owner && r.name === s.name);
    const a = el("a", "study");
    a.href = d ? repoUrl(d) : "https://github.com/" + s.owner + "/" + s.name;
    a.target = "_blank"; a.rel = "noopener";
    a.appendChild(el("div", "si", s.icon));
    const box = el("div");
    const t = el("div", "st", s.name + " ");
    t.appendChild(el("span", "", "/" + s.owner + (d ? " · ★ " + d.stars : "")));
    box.appendChild(t);
    box.appendChild(el("div", "sd", s.why));
    a.appendChild(box);
    row.appendChild(a);
  });
}

function renderShowcase() {
  const grid = document.getElementById("repo-grid");
  grid.innerHTML = "";
  const TOP = 100; // "Top 100" is the honest cap: full list stays reachable via filters
  const full = REPOS.map((r, i) => [r, i + 1]);
  const list = full.filter(([r]) => activeCat === "all" || r.cat === activeCat);
  const shown = activeCat === "all" ? list.slice(0, TOP) : list;
  document.getElementById("r-count").textContent =
    (activeCat === "all" ? TOP + " of " + REPOS.length + " · top " + TOP + " by stars" : list.length + " shown");
  shown.forEach(([r, rank]) => {
    const c = el("div", "rcard");
    c.appendChild(cardMedia(r, rank));
    const body = el("div", "rbody");
    const t = el("div", "rt");
    const a = el("a", "", esc(r.name));
    a.href = repoUrl(r); a.target = "_blank"; a.rel = "noopener";
    t.appendChild(a);
    t.appendChild(el("span", "", " / " + esc(r.owner)));
    body.appendChild(t);
    body.appendChild(el("div", "rd", (r.src === "discord" ? "◇ " : "") + esc(r.desc)));
    const foot = el("div", "rfoot");
    foot.appendChild(el("span", "st", "★ " + fmt(r.stars)));
    if (r.tweet) {
      const p = el("a", "pair", "◆ X post");
      p.href = r.tweet; p.target = "_blank"; p.rel = "noopener";
      foot.appendChild(p);
    } else {
      foot.appendChild(el("span", "", r.date));
    }
    body.appendChild(foot);
    c.appendChild(body);
    grid.appendChild(c);
  });
}
function renderFilters() {
  const box = document.getElementById("filters");
  box.innerHTML = "";
  const cats = [["all", "all"], ...[...new Set(REPOS.map(r => r.cat))]];
  cats.forEach(([val, label]) => {
    const n = val === "all" ? REPOS.length : REPOS.filter(r => r.cat === val).length;
    const b = el("button", val === activeCat ? "on" : "", label + " · " + n);
    b.onclick = () => { activeCat = val; renderFilters(); renderShowcase(); };
    box.appendChild(b);
  });
  const hint = el("span", "filter-hint", "◇ = surfaced from TypeSafe's Discord #show-and-tell (714-link channel scrape)");
  box.appendChild(hint);
}

/* timeline + tweets */
function renderTimeline(items) {
  const tl = document.getElementById("tl");
  items.forEach(it => {
    const d = el("div", "tl-item");
    d.appendChild(el("div", "tl-date", it.date));
    d.appendChild(el("div", "tl-title", it.title));
    d.appendChild(el("div", "tl-detail", it.detail));
    tl.appendChild(d);
  });
}
function renderTweets(tweets) {
  const grid = document.getElementById("tweet-grid");
  tweets.forEach(t => {
    const c = el("div", "tweet");
    const who = el("div", "who");
    who.appendChild(el("div", "avi", (t.handle || "?")[0].toUpperCase()));
    const names = el("div");
    names.appendChild(el("div", "nm", t.author));
    names.appendChild(el("div", "hd", "@" + t.handle));
    who.appendChild(names);
    c.appendChild(who);
    const isCite = t.source === "hn-cite";
    c.appendChild(el("div", "txt" + (isCite ? " cite" : ""), t.text));
    if (t.media && t.media.poster) {
      const a = el("a");
      a.href = t.url; a.target = "_blank"; a.rel = "noopener";
      const img = el("img", "timg");
      img.src = t.media.poster; img.alt = "post media"; img.loading = "lazy";
      img.addEventListener("error", () => img.remove());
      a.appendChild(img);
      c.appendChild(a);
    }
    if (isCite) c.appendChild(el("span", "chip-hn", "◇ cited from HN launch thread"));
    const meta = el("div", "meta");
    if (t.likes != null) {
      meta.appendChild(el("span", "hot", "♥ " + fmt(t.likes)));
      meta.appendChild(el("span", "", "⟳ " + fmt(t.rts)));
    } else meta.appendChild(el("span", "", t.date));
    c.appendChild(meta);
    grid.appendChild(c);
  });
}

/* official */
function renderOfficial(items) {
  const grid = document.getElementById("official-grid");
  items.forEach(o => {
    const a = el("a");
    a.href = o.url; a.target = "_blank"; a.rel = "noopener";
    a.appendChild(el("div", "ol", o.label));
    a.appendChild(el("div", "on", o.note));
    grid.appendChild(a);
  });
}
const YT = [
  { id: "cJ0EOzey--o", img: "assets/media/yt-doom.jpg", title: "What's Next After RLHF? — Diogo Almeida", who: "AI Engineer · Sep 17" },
  { id: "o-y1HJ6buGQ", img: "assets/media/yt-aicouncil.jpg", title: "AI: too good to be true, too bad to be useful", who: "AI Council · Jun 19" },
  { id: "LE3bGTaAgOE", img: "assets/media/yt-founders.jpg", title: "Diogo Almeida — Founders You Should Know", who: "FYSK · Mar 31" }
];
function renderYT() {
  const row = document.getElementById("yt-row");
  YT.forEach(v => {
    const a = el("a", "ytcard");
    a.href = "https://www.youtube.com/watch?v=" + v.id; a.target = "_blank"; a.rel = "noopener";
    const iw = el("div", "yimg");
    const img = el("img");
    img.src = v.img; img.alt = v.title; img.loading = "lazy";
    img.addEventListener("error", () => iw.classList.add("noimg"));
    iw.appendChild(img);
    iw.appendChild(el("span", "play", "▶"));
    a.appendChild(iw);
    a.appendChild(el("div", "yt", v.title));
    a.appendChild(el("div", "yw", v.who));
    row.appendChild(a);
  });
}

/* video wall */
const VWALL = [
  { v: "assets/videos/doom.mp4", p: "assets/tweets/doom-vposter.jpg", title: "The Doom launch demo", who: "@CompleteSkeptic · the clip that lit the fuse", url: "https://x.com/CompleteSkeptic/status/2099925682726002904" },
  { v: "assets/videos/mario.mp4", p: "assets/tweets/mario-vposter.jpg", title: "Jev plays Super Mario Bros.", who: "@faadilhshaik · repo 90s later", url: "https://x.com/faadilhshaik/status/2100086301894881578" },
  { v: "assets/videos/jevlike.mp4", p: "assets/tweets/jevlike-vposter.jpg", title: "jevlike — the open replica", who: "Doom buttons then chess, one attention head", url: "https://github.com/vinnylarouge/jevlike" },
  { v: "assets/videos/drone.mp4", p: "assets/tweets/drone-vposter.jpg", title: "Camera-only drone judgment", who: "@RomanSlack1 · MuJoCo, Jev at 2.5Hz", url: "https://x.com/RomanSlack1/status/2100335978229690683" },
  { v: "assets/videos/ariel.mp4", p: "assets/tweets/ariel-vposter.jpg", title: "Community build showcase", who: "@arielweinberger", url: "https://x.com/arielweinberger/status/2100687687057285215" },
  { v: "assets/videos/attract.mp4", p: "assets/tweets/attract-vposter.jpg", title: "AttractMode's build", who: "@AttractModeIO", url: "https://x.com/attractmodeio/status/2100723340021276739" },
  { v: "assets/videos/meliwat.mp4", p: "assets/tweets/meliwat-vposter.jpg", title: "@Meliwat93's demo", who: "shared in #show-and-tell", url: "https://x.com/meliwat93/status/2100404711283188181" }
];
function renderVideoWall() {
  const grid = document.getElementById("video-grid");
  VWALL.filter(x => x.v).forEach(x => {
    const c = el("div", "vcard");
    const vid = el("video");
    vid.muted = true; vid.loop = true; vid.playsInline = true; vid.preload = "none";
    vid.poster = x.p;
    const src = el("source"); src.src = x.v; src.type = "video/mp4";
    vid.appendChild(src);
    c.appendChild(vid);
    c.appendChild(el("div", "vt", x.title));
    c.appendChild(el("div", "vw", x.who));
    if (x.url) {
      c.style.cursor = "pointer";
      c.onclick = (e) => { if (!vid.paused && e.target === vid) { location.href = x.url; return; } };
      const a = el("a", "vlink", "source ↗");
      a.href = x.url; a.target = "_blank"; a.rel = "noopener";
      c.appendChild(a);
    }
    c.addEventListener("mouseenter", () => vid.play().catch(() => {}));
    c.addEventListener("mouseleave", () => vid.pause());
    vid.addEventListener("click", () => vid.paused ? vid.play().catch(()=>{}) : vid.pause());
    grid.appendChild(c);
  });
}

/* boot */
fetch("data.json")
  .then(r => r.json())
  .then(d => {
    renderStats(d.community.stats);
    renderMario(d.community);
    renderSchema(d.sections);
    renderGrammar(d.sections);
    renderLibrary(d.sections);
    REPOS = d.community.repos;
    // add poster to the mario tweet card media
    const mt = d.community.tweets.find(t => t.handle === "faadilhshaik");
    if (mt) mt.media = { poster: "assets/tweets/mario-vposter.jpg" };
    // attach self-hosted posters to tracked tweets
    const TP = { CompleteSkeptic: "doom", dustin_podell: "dustin", _pi0_: "pi0", arielweinberger: "ariel",
      AttractModeIO: "attract", zain_hoda: "zain", Meliwat93: "meliwat", RomanSlack1: "drone",
      jarrodwatts: "trader", awlevin: "awlevin", marcus_lowe: "lowe", danshipper: "shipper", harshagundal: "harsha" };
    d.community.tweets.forEach(t => { const s = TP[t.handle]; if (s) t.media = { poster: "assets/tweets/" + s + ".jpg" }; });
    renderFilters();
    renderStudy();
    renderShowcase();
    renderTimeline(d.community.timeline);
    renderTweets(d.community.tweets);
    renderYT();
    renderVideoWall();
    renderOfficial(d.community.official);
    const tail = document.getElementById("tailnote");
    if (tail) tail.textContent = "Sources merged: GitHub search (" + d.community.stats.ghMatches + " matches for 'jev' at snapshot) + a first-hand scrape of TypeSafe's Discord #show-and-tell (714 links, full channel history). Showing top " + Math.min(100, REPOS.length) + " by stars — pick a category to see all " + REPOS.length + ".";
  })
  .catch(e => {
    document.querySelector("main").innerHTML =
      '<p style="padding:40px 0;color:#f87171;font-family:monospace">failed to load data.json — ' + esc(e.message) + "</p>";
  });
