# awesome-jev-prompt

> **The unofficial, community-maintained collection of prompts, states, and decision patterns for [Jev](https://typesafe.ai/) — TypeSafe AI's first System One Model.**
>
> Jev doesn't take "prompts" in the LLM sense. It takes a **state** and returns **typed decisions with calibrated probabilities** — Choice, Score, Noul. This repo collects the patterns that make those decisions good.
>
> *Unofficial. Not affiliated with or endorsed by TypeSafe AI. "Jev" and "System One" are TypeSafe AI product names, used here descriptively.*

[![Live page](https://img.shields.io/badge/live%20page-top100%20jev%20showcase-4ade80)](https://neta.art/w/d2ec5fc8-6057-42f4-91bd-650ea8f71aa2)
[![Data snapshot](https://img.shields.io/badge/data%20snapshot-2026--09--17-fbbf24)](#sources)
[![Jev](https://img.shields.io/badge/model-Jev%201.13-blue)](https://docs.typesafe.ai/models)

---

## Why this exists

Jev launched 2026-09-15. Within 72 hours there were 568+ GitHub repos touching it — but the knowledge
is scattered across launch posts, cookbooks, READMEs and X threads. This repo is the organized layer:

- **Primitives & state formats** — the official grammar, verbatim
- **Patterns** — fan-out, confidence-gated routing, composite scoring, intent routing
- **Cookbook index** — all 16 official cookbooks, one decision each
- **Case studies** — the Mario state schema, the Doom loop, Wikiracing
- **Community patterns** — what the first 72 hours built, with links

Companion HTML gallery: **[Top 100 Jev Showcase & Jev Prompts](https://neta.art/w/d2ec5fc8-6057-42f4-91bd-650ea8f71aa2)** (live on neta.art).

## The 60-second version

```
state (JSON) ──▶ Jev ──▶ { "choice": "right_jump", "p": 0.87, "confidence": 0.93 }
```

1. Build a **state**: a string, a JSON object, or an array. Recommended default: object.
2. Ask **questions**: Choice (pick one of N), Score (number on a scale), Noul (true/false + probability).
3. All questions see the same state, evaluated in parallel, in 70–500ms.
4. Code branches on the answers; act when confident, escalate when not.

```python
state = {
  "ticket":  {"subject": "Duplicate charge", "messages": [...]},
  "order":   {"id": "A-104", "charges": [{"amount_usd": 49, "status": "captured"},
                                          {"amount_usd": 49, "status": "captured"}]},
  "refund_policy": "Duplicate charges are eligible for a refund."
}
# questions: noul("Did the customer request a refund?"),
#            noul("Does the policy support it?"),
#            choice("Which team should handle this?", ["billing","technical","account"])
```

## Repository map

```
awesome-jev-prompt/
├── README.md              ← you are here
├── SOURCES.md             ← every information source, verified & dated
├── data/
│   ├── sources.json       ← machine-readable source registry
│   └── prompts.json       ← the 42-entry prompt/state/pattern collection
└── site/                  ← companion HTML gallery (mirrors the neta.art work)
```

## Contents

### 1. Primitives
| Primitive | Answer space | Output |
|---|---|---|
| **Choice** | enumerated set (cardinality ≤ 255) | `choice: "billing"` |
| **Score** | defined numeric scale | `score: 1.4` |
| **Noul** | true/false | `noul: 0.95` |

### 2. State formats
`string` → `object` (recommended) → `array of messages`. Full support-ticket example in
[`data/prompts.json`](data/prompts.json) → `state-full-example`.

### 3. Patterns
**Speculative fan-out** · **Confidence-gated routing** · **Composite scoring** · **Intent routing**

### 4. Case study: the 90-second repo
[@faadilhshaik](https://x.com/faadilhshaik/status/2100086301894881578) got Jev playing Super Mario Bros.
(2,278 likes), then pushed [fhshaik/typesafe-mario](https://github.com/fhshaik/typesafe-mario) 90 seconds
after posting. The state schema — `player / trajectory / hazard / terrain / reaction_timing /
recent_control / episode` — is reproduced verbatim in [`data/prompts.json`](data/prompts.json).
The model never sees a screenshot.

### 5. Community patterns (first 72 hours)
Trading per blockchain block · computer-use at $0.0002/step · drone judgment loops · cheapest-model
routing · tool-result sieves · staged code review · graph navigation · commit triage. All linked in
[`data/prompts.json`](data/prompts.json) → `community-patterns`.

## Contributing

PRs welcome. Rules:
1. One entry = one decision (state + questions + primitive), not a marketing blurb.
2. Include the source link; mark verbatim vs. reconstructed.
3. Numbers drift — include the date you measured.

## Sources

See **[SOURCES.md](SOURCES.md)** for the full registry: 16 official sources, 12 community sources,
6 media items, all with access method and verification status. Data snapshot: **2026-09-17**.

## License

CC0 for original content. Linked projects and quotations remain the property of their authors.
"Jev", "System One", and "TypeSafe" are trademarks of TypeSafe AI; this project makes descriptive,
nominative use only and claims no affiliation.

---

*Built by the community, for the community. ∵ ⩆*
