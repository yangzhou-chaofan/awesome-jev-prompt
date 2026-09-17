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
    [s.hours + "h", "of ecosystem"]
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
  [
    ["2,278", "likes on X"],
    ["140★", "in 24 hours"],
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
  const mario = comm.prompts ? null : null;
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
  if (r.video) {
    const v = el("video", "vid");
    v.muted = true; v.loop = true; v.playsInline = true; v.preload = "none";
    v.poster = r.poster || r.img;
    const src = el("source");
    src.src = r.video; src.type = "video/mp4";
    v.appendChild(src);
    wrap.appendChild(v);
    wrap.addEventListener("mouseenter", () => v.play().catch(() => {}));
    wrap.addEventListener("mouseleave", () => v.pause());
  } else {
    const img = el("img");
    img.alt = r.name + " — GitHub preview card";
    img.loading = "lazy"; img.decoding = "async";
    img.dataset.src = r.img;
    LAZY.observe(img);
    img.src = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100"><rect width="200" height="100" fill="#10131a"/></svg>');
    wrap.appendChild(img);
  }
  if (rank <= 3) wrap.appendChild(el("span", "rk gold", "🏆 #" + rank));
  else if (r.video) wrap.appendChild(el("span", "rk", "▶ hover to play"));
  else wrap.appendChild(el("span", "rk", "#" + rank));
  return wrap;
}
function renderShowcase() {
  const grid = document.getElementById("repo-grid");
  grid.innerHTML = "";
  const list = REPOS
    .map((r, i) => [r, i + 1])
    .filter(([r]) => activeCat === "all" || r.cat === activeCat);
  document.getElementById("r-count").textContent = list.length + " of " + REPOS.length + " · ranked by stars";
  list.forEach(([r, rank]) => {
    const c = el("div", "rcard");
    c.appendChild(cardMedia(r, rank));
    const body = el("div", "rbody");
    const t = el("div", "rt");
    const a = el("a", "", esc(r.name));
    a.href = repoUrl(r); a.target = "_blank"; a.rel = "noopener";
    t.appendChild(a);
    t.appendChild(el("span", "", " / " + esc(r.owner)));
    body.appendChild(t);
    body.appendChild(el("div", "rd", esc(r.desc)));
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
    if (mt) mt.media = { poster: d.marioVideo ? d.marioVideo.poster : null };
    renderFilters();
    renderShowcase();
    renderTimeline(d.community.timeline);
    renderTweets(d.community.tweets);
    renderOfficial(d.community.official);
    const tail = document.getElementById("tailnote");
    if (tail) tail.textContent = "GitHub search \"jev\" (created > 2026-09-01): " + d.community.stats.ghMatches + " matches at snapshot — this page curates the top " + REPOS.length + ". The tail is forks, notebooks and name collisions.";
  })
  .catch(e => {
    document.querySelector("main").innerHTML =
      '<p style="padding:40px 0;color:#f87171;font-family:monospace">failed to load data.json — ' + esc(e.message) + "</p>";
  });
