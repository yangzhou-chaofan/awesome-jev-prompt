# Sources — awesome-jev-prompt

Every information source behind this collection, with how it was accessed and how much of it is
verbatim. Numbers are **snapshots from 2026-09-17** and will drift. Links marked *blocked* were
verified through an alternative route (noted per entry).

## Verification legend

| Mark | Meaning |
|---|---|
| ✓ full | Page fetched, full text extracted and read |
| ✓ api | Structured API response (GitHub / HN / Ashby / mirror APIs) |
| ◐ partial | Title/metadata/snippet verified; body not captured |
| ✕ blocked | Direct fetch denied; verified via citation or search snippet |

---

## 1. Official — typesafe.ai & subproperties

| # | Source | URL | Date | Status | Notes |
|---|---|---|---|---|---|
| 1 | typesafe.ai home | https://typesafe.ai/ | — | ✓ full | Framer site; h1 "We took the opposite research direction / 193.6x Faster, 444.6x Cheaper."; Conway glider footer; DNS carries OpenAI/Cursor/Apple/Stytch domain verifications |
| 2 | Launch post: Introducing System One Models & Jev | https://typesafe.ai/blog/introducing-system-one-models-and-jev | 2026-09-15 | ✓ full | RLCD training method, parallel sampling, vs-LLM table, pricing, workflow evals, Doom & Wikiracing demos, FAQ |
| 3 | Manifesto: Composable AI — Build Prod, Not God | https://typesafe.ai/manifesto | — | ✓ full | 3-step plan; "We're building prod, not God."; footnotes on RLHF/RLVR, neuro-symbolic "smart if-statements" |
| 4 | Team | https://typesafe.ai/team | — | ✓ full | Founders + fun facts; culture & values; base64 easter egg `VHlwZVNhZmUgQUkgSW50ZWxsaWdlbmNlIE5vdw==` → "TypeSafe AI Intelligence Now" |
| 5 | Blog: Lies, Damned Lies, and Benchmarks | https://typesafe.ai/blog/antibenchmaxxing | 2026-09-11 | ✓ full | Anti-benchmaxxing; no public benchmark tables; evals as dated, retired snapshots |
| 6 | Blog: The Bitterest Lesson | https://typesafe.ai/blog/bitterest-lesson | 2026-09-10 | ✓ full | task > data > compute > algorithms; InstructGPT anecdote with GPT-2-sized counter-example |
| 7 | Blog: AI: too good to be true, too bad to be useful | https://typesafe.ai/blog/ai-too-good-to-be-true-too-bad-to-be-useful-typesafe-ai | 2026-06-19 | ✓ full | Embedded talk video: youtube.com/watch?v=o-y1HJ6buGQ (AI Council channel) |
| 8 | Blog: Diogo Almeida — Founders You Should Know | https://typesafe.ai/blog/diogo-almeida---founders-you-should-know | 2026-03-31 | ✓ full | Embedded interview: youtube.com/watch?v=LE3bGTaAgOE |
| 9 | Docs: System One | https://docs.typesafe.ai/concepts/system-one | — | ✓ full | Choice/Score/Noul table; Kahneman naming; "cannot hallucinate" = schema guarantee |
| 10 | Docs: State | https://docs.typesafe.ai/concepts/state | — | ✓ full | string/object/array formats; full support-ticket example (reproduced verbatim in prompts.json) |
| 11 | Docs: Models & pricing | https://docs.typesafe.ai/models | — | ✓ full | Jev 1.13 (`jev-1.13.0`, alias `jev-latest`): $42/Btok ($0.042/MTok) input-only; 250k tok/s; 1,200 req/min |
| 12 | Docs: Cookbooks | https://docs.typesafe.ai/cookbooks | — | ◐ sitemap | 16 cookbooks indexed from sitemap.xml (autoformat → skill_suggestion) |
| 13 | Docs: Patterns | https://docs.typesafe.ai/patterns | — | ◐ sitemap | fan-out, confidence-routing, composite scoring, intent routing |
| 14 | Workflow evals site | https://evals.typesafe.ai/ | — | ✓ full | Per-model accuracy/cost/latency incl. Jev 67.8% / $0.0004 / 0.4s vs opus 5 73.1% / $0.1761 / 37.8s |
| 15 | GitHub org | https://github.com/typesafe-ai | — | ✓ api | 10 public repos, 187 followers; SDKs: adapter-python 63★, sdk-js 57★, skills 56★, sdk-python 33★ |
| 16 | Press release (Business Wire) | https://www.businesswire.com/news/home/20260915525333/en/ | 2026-09-15 | ✓ full (via Morningstar syndication) | $40M seed led by DCVC; James Hardiman quote; founded 2024, HQ San Francisco |

## 2. Community — forums, X, GitHub

| # | Source | URL | Status | Notes |
|---|---|---|---|---|
| 17 | HN launch thread | https://news.ycombinator.com/item?id=49717558 | ✓ api | **1,835 pts / 482 comments**; full comment tree captured incl. skeptical positions |
| 18 | X: @faadilhshaik Mario post | https://x.com/faadilhshaik/status/2100086301894881578 | ✓ api (mirror) | **2,278 likes / 159 RT / 76 replies**; video; author "eng + research in SF", verified individual |
| 19 | Repo: fhshaik/typesafe-mario | https://github.com/fhshaik/typesafe-mario | ✓ api + raw README | 130★/14 forks; created 90 seconds after the X post; full state schema captured verbatim |
| 20 | X: @CompleteSkeptic launch demo | https://x.com/CompleteSkeptic/status/2099925682726002904 | ✕ blocked → HN citation | Jev plays Doom video; most-cited artifact of the launch; metrics not mirrored |
| 21 | X: @danshipper | https://x.com/danshipper/status/2099947471518474522 | ✕ blocked → HN citation | Cited in launch thread; text not mirrored |
| 22 | X: @harshagundal | https://x.com/harshagundal/status/2100044305536889015 | ✕ blocked → HN citation | Cited in launch thread; text not mirrored |
| 23 | X: @CompleteSkeptic follow-up | https://x.com/CompleteSkeptic/status/2100067328620896408 | ✕ blocked → HN citation | Follow-up; text not mirrored |
| 24 | Repo: vinnylarouge/jevlike | https://github.com/vinnylarouge/jevlike | ✓ api + raw README | 496★/45 forks; option-attention head; Doom (0.60 kills avg) & chess checkpoints; full architecture description captured |
| 25 | GitHub search "jev" | https://github.com/search?q=jev&type=repositories | ✓ api | **568 matches** (created > 2026-09-01) on 2026-09-17; top-42 curated with stars/descriptions |
| 26 | Repo: browser-use/jev-ultrafast | https://github.com/browser-use/jev-ultrafast | ✓ api | 992★ — largest community repo, from the browser-use team |
| 27 | HF Space: parallel-constrained-decoding | https://huggingface.co/spaces/drinkmoonshine/parallel-constrained-decoding | ✓ api | "Qwen-2.5-1B-RLCD" open alternative; 11 likes |
| 28 | Ashby job board | https://jobs.ashbyhq.com/typesafe-ai | ✓ api | 4 roles (MTS Model Capabilities, MTS Backend/Platform, Dev Advocate, Member of Staff); $150k–250k + equity; stack: Python, TS/Next/Tailwind, K8s |
| 28b | **Discord #show-and-tell full scrape (primary)** | `data/raw/discord-show-and-tell-2026-09-17.md` | ✓ first-hand (author-provided) | **714 links, full channel history Jul 22 → Sep 17**: 82 GitHub repos + ~60 X posts. Surfaced projects invisible to name-search (dspy-typesafeify 55★, blink, mosaik, agent-control-plane with Dafny proofs, skilldoom) and corrected 5 star counts. Upstream of `src:"discord"` entries |
| 28c | **Discord #show-and-tell incremental batch (primary)** | `data/raw/discord-show-and-tell-2026-09-18.md` | ✓ first-hand (author-provided) | Sep 17 12:00 → Sep 18 08:00 CST: +27 repos, ~45 X posts. Big-league entries (gbrain 30k★, pydantic-ai-harness 898★, nika) verified as pre-Jev projects and excluded from the showcase; browser-use re-verified at 2,264★; 17 new Jev-integrated repos added |

## 3. Media & funding coverage

| # | Source | URL | Status | Notes |
|---|---|---|---|---|
| 29 | The Register | https://www.theregister.com/ai-and-ml/2026/09/16/typesafe_ai_debuts_model_for_machines_that_plays_doom/5296711 | ✕ blocked (bot-wall) → HN title | 2026-09-16 |
| 30 | techstartups.com | https://techstartups.com/2026/09/16/typesafe-ai-an-ai-startup-founded-by-chatgpt-co-inventor-emerges-from-stealth/ | ◐ DDG snippet | "ChatGPT co-inventor emerges from stealth" framing |
| 31 | finsmes.com | https://www.finsmes.com/2026/09/typesafe-ai-raises-40m-in-seed-funding.html | ◐ DDG snippet | Standard funding brief |
| 32 | stackfutures.com | https://stackfutures.com/blog/typesafe-ai-40m-seed-system-one-jev-structured-decisions-2026/ | ◐ DDG snippet | "typed decisions" angle |
| 33 | datagrom.com | https://www.datagrom.com/ai-news/typesafe-ai-raises-40m-for-software-native-ai-2d4b00bf | ◐ DDG snippet | Valuation ~$200M — **secondary source only, not confirmed by primary** |
| 34 | theroboticsmedia.com | https://theroboticsmedia.com/article/typesafe-ai-40m-seed-dcvc-jev-composable-ai-almeida-september-15-2026 | ◐ DDG snippet | Timeline recap |
| 35 | ts2.tech | https://ts2.tech/en/typesafe-ai-raises-40-million-for-jev-but-its-445x-cost-claim-is-still-self-reported/ | ✕ 404 at capture | Skeptical take on the 445x claim; captured via DDG snippet |

## 4. Prior internal work

| # | Source | Location | Notes |
|---|---|---|---|
| 36 | Full intelligence dossier | `/workspace/typesafe-ai-情报汇总.md` | Company/team/product/coverage/timeline, collected 2026-09-17 |
| 37 | jev-atlas (published web work) | `/workspace/works/web/jev-atlas/` · live: https://neta.art/w/1cc738fb-2066-40a8-98a0-22696a993970 | Ecosystem tracker; its data.json holds the structured 42-repo + 5-tweet dataset reused here |

---

## Known gaps (be honest, fix later)

- X engagement metrics for entries 20–23 were not mirrored at collection time (both fxtwitter and
  vxtwitter rate-limited); cards link to originals. Retry: `curl https://api.fxtwitter.com/<user>/status/<id>`.
- Cookbooks (entry 12) and Patterns (entry 13) are indexed from the sitemap; bodies not yet extracted.
  Each cookbook page fetches fine via `curl https://docs.typesafe.ai/cookbooks/<name>`.
- The Register body (entry 29) is behind a bot-wall; AMP variants returned "Are we human?" challenge.
- GitHub star counts drift hourly during launch week — re-pull before quoting.

*Snapshot: 2026-09-17 · maintained by the awesome-jev-prompt contributors*
