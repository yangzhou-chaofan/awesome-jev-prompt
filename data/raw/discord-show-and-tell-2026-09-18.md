# TypeSafe AI · #show-and-tell 增量清单（09-18 批次）

> 原始文献，来源：仓库作者提供于 2026-09-18（Discord 手动抓取整理，第二批增量）。
> 本文件是 `data/community.json` 中 2026-09-18 批次 `src: "discord"` 条目的上游依据，按原样归档。
> 注：garrytan/gbrain、pydantic/pydantic-ai-harness、supernovae-st/nika、browser-use/macOS-use 等
> 为"频道晒过的非 Jev 项目"（均为 Jev 发布前创建的既有项目），**未纳入** showcase，记录于此存档。

> 抓取时间：2026-09-18 08:00 CST ｜ 覆盖范围：2026-09-17 12:00 → 09-18 08:00 CST（约 20 小时，衔接上一批全量文档 `discord-show-and-tell-2026-09-17.md`）
> 来源：Discord 服务器 TypeSafe AI 的 #show-and-tell 频道
> 本批新增：**GitHub 仓库 27 个**、**X/Twitter 链接 ~45 条**

⭐ = 星标数（截至今日）　📅 = 最近 push　🆕 = 本批新出现

---

## 一、本批最大看点：大厂/名人入场

| 仓库 | 说明 | ⭐ | 📅 |
|---|---|---|---|
| [garrytan/gbrain](https://github.com/garrytan/gbrain) | **Y Combinator 总裁 Garry Tan** 的 OpenClaw/Hermes Agent Brain，频道里还贴了 [PR #5178](https://github.com/garrytan/gbrain/pull/5178) | **30062** | 09-17 |
| [pydantic/pydantic-ai-harness](https://github.com/pydantic/pydantic-ai-harness) | **Pydantic 官方**："你 agent 最爱的 harness" | **898** | 09-17 |
| [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | **browser-use 官方**的超快 Jev 集成 | **1984** | 09-17 |
| [droidrun/mobile-jev](https://github.com/droidrun/mobile-jev) | droidrun 出品的移动端 Jev 控制 | 40 | 09-17 |
| [supernovae-st/nika](https://github.com/supernovae-st/nika) | Intent as Code：工作流语言，单 Rust 二进制，本地优先，AGPL-3.0 | 82 | 09-14 |

## 二、SDK 语言版图继续扩张（累计 8+ 门语言）

| 仓库 | 说明 | ⭐ | 📅 |
|---|---|---|---|
| [Hawxy/TypeSafeAI.Net](https://github.com/Hawxy/TypeSafeAI.Net) | .NET SDK（新增） | 2 | 09-17 |
| [nshkrdotcom/typesafe_sdk](https://github.com/nshkrdotcom/typesafe_sdk) | Elixir 移植，官方 TS SDK 风格（新增） | 1 | 09-17 |
| [fgn/jevgo](https://github.com/fgn/jevgo) | Go 客户端，可选 Langfuse 埋点（Go 第 3 个） | 1 | 09-17 |
| [withzombies/jev-go](https://github.com/withzombies/jev-go) | 又一个 Go 客户端（Go 第 4 个） | 1 | 09-17 |
| [docxology/daf-jev](https://github.com/docxology/daf-jev) | Python 工具箱：question builder、置信门、校准、CLI/MCP/skill | 3 | 09-17 |
| [mateonunez/jod](https://github.com/mateonunez/jod) | Jev 之上的语义 schema：本地校验 + 类型化答案投影 | 3 | 09-17 |
| [suraj-phanindra/wellposed](https://github.com/suraj-phanindra/wellposed) | 在 Jev "自信地答错"之前先 lint 你的请求 | 0 | 09-17 |
| [shiftynick/jev-axi](https://github.com/shiftynick/jev-axi) | agent 友好 CLI：pick / rate / check / rank / triage / guard | 6 | 09-17 |
| [benomahony/nouls](https://github.com/benomahony/nouls) | — | 4 | 09-17 |
| [jvsteiner/jevex](https://github.com/jvsteiner/jevex) | — | 3 | 09-17 |

## 三、编码工具 & Agent 基建

| 仓库 | 说明 | ⭐ | 📅 |
|---|---|---|---|
| [rhighs/jev-code](https://github.com/rhighs/jev-code) | Jev 类型化决策 + 约束 AST 生成的交互式 TS 编码 CLI | 1 | 09-17 |
| [ari-becker/commentlint](https://github.com/ari-becker/commentlint) | 用 agent 静态分析改进 AI 写的注释 | 0 | 09-17 |
| [sufianetaouil/every](https://github.com/sufianetaouil/every) | "对代码库每个函数问一个是非题"——问题即 grep，秒级、几分钱 | 1 | 09-17 |
| [dnikolayev/typesafe-offload-bench](https://github.com/dnikolayev/typesafe-offload-bench) | 合成 offload 基准：质量/token/延迟 + 便携 Codex skill（含 [RESULTS.md](https://github.com/dnikolayev/typesafe-offload-bench/blob/main/RESULTS.md)） | 0 | 09-17 |
| [lbotinelly/jev-little-airways](https://github.com/lbotinelly/jev-little-airways) | Jev 能力研究 | 1 | 09-17 |

## 四、安全 / 数据

| 仓库 | 说明 | ⭐ | 📅 |
|---|---|---|---|
| [rishi-raj-jain/pg-redact](https://github.com/rishi-raj-jain/pg-redact) | Neon Postgres 内容感知 PII 脱敏：redact() SQL 函数按角色显隐字段 | 2 | 09-17 |
| [waddle-zoo/signal-weave](https://github.com/waddle-zoo/signal-weave) | 运维信号的类型化决策 | 1 | 09-17 |

## 五、游戏 / 硬件 / 新场景

| 仓库 | 说明 | ⭐ | 📅 |
|---|---|---|---|
| [AboveColin/HA-Jev](https://github.com/AboveColin/HA-Jev) | **Home Assistant 集成**：问房子一个问题，得到概率/选择/评分实体 | 6 | 09-17 |
| [devjerry0/watchdoggy](https://github.com/devjerry0/watchdoggy) | 自我改进的"狗进禁区"检测器 | 3 | 08-27 |
| [serene-interactive/Seagreen](https://github.com/serene-interactive/Seagreen) | 本地资源/能耗监控（macOS 原生 + Windows web UI + CLI），发布 v3.0.0 | 2 | 09-17 |
| [opaielsheikh/zero-shot-vision-robotics](https://github.com/opaielsheikh/zero-shot-vision-robotics) | PyBullet + VLM 的零样本视觉桌面机器人仿真 | 0 | 09-17 |
| [AmoghCreator/doom-jev](https://github.com/AmoghCreator/doom-jev) | 又一个 Jev 玩 DOOM | 1 | 09-17 |

## 六、本批新增 X 推文（~45 条）

分享热度较高的：

- [arielweinberger](https://x.com/arielweinberger/status/2100687687057285215) · [AbdelStark](https://x.com/AbdelStark/status/2100628873356693788) · [AttractModeIO](https://x.com/attractmodeio/status/2100723340021276739) · [zain_hoda](https://x.com/zain_hoda/status/2100720719470494126)
- [sotak](https://x.com/sotak/status/2100701152824185319) · [brainstormity](https://x.com/brainstormity/status/2100702826196307977) · [leftspace35](https://x.com/leftspace35/status/2100713588381925520) · [abhijay_cloaked](https://x.com/abhijay_cloaked/status/2100689866279252270)

<details>
<summary>其余推文（点击展开）</summary>

- [heykathan](https://x.com/heykathan/status/2100680287042814326) · [iam_zachi](https://x.com/iam_zachi/status/2100679300756435135) · [sid19arya0](https://x.com/sid19arya0/status/2100679099723223341) · [sybuilds](https://x.com/sybuilds/status/2100679413243474010)
- [Charlyhno](https://x.com/Charlyhno/status/2100670579321754080) · [nickvasiles](https://x.com/nickvasiles/status/2100670497818313175) · [CompleteSkeptic](https://x.com/CompleteSkeptic/status/2100655158992719907) · [Meliwat93](https://x.com/meliwat93/status/2100652464546472046)
- [UNgethe](https://x.com/UNgethe/status/2100652324418945273) · [atomic_chat_hq](https://x.com/atomic_chat_hq/status/2100644221279424925) · [ProTrailblazer](https://x.com/ProTrailblazer/status/2100644635924185449) / [②](https://x.com/ProTrailblazer/status/2100642491804336413)
- [karuri945](https://x.com/karuri945/status/2100632366633070873) · [komorra86](https://x.com/komorra86/status/2100631455843979442) · [milindlabs](https://x.com/milindlabs/status/2100631847155994852) · [jan__kubica](https://x.com/jan__kubica/status/2100636173249007696)
- [shannon_fano](https://x.com/shannon_fano/status/2100639390468833379)（fixupx）· [pj4533](https://x.com/pj4533/status/2100624540938260919) · [pcp_liu](https://x.com/pcp_liu/status/2100614050304458791) · [nawtayei](https://x.com/nawtayei/status/2100607727978369138)
- [itsayush__](https://x.com/itsayush__/status/2100600179615518918) · [richardcsuwandi](https://x.com/richardcsuwandi/status/2100603807894053252) · [rishi_raj_jain_](https://x.com/rishi_raj_jain_/status/2100606501501169726) · [oxfrancesco_](https://x.com/oxfrancesco_/status/2100595042385584622)
- [j_lamberts](https://x.com/j_lamberts/status/2100577481698734255) / [②](https://x.com/j_lamberts/status/2100592556081832131) · [Fabulous_7781](https://x.com/Fabulous_7781/status/2100576934572814597) · [alessandro_a0](https://x.com/alessandro_a0/status/2100573356294607245) · [danmana](https://x.com/danmana/status/2100550435094278475) / [②](https://x.com/danmana/status/2100545412780220877)
- 补录（上批抓到但推文 ID 更早）：[digitalshane_](https://x.com/digitalshane_/status/2100399951872205224) · [karuri945](https://x.com/karuri945/status/2100562714376454654) · [Meliwat93](https://x.com/Meliwat93/status/2100404711283188181) · [sid19arya0](https://x.com/sid19arya0/status/2100458351440048258) · [sybuilds](https://x.com/sybuilds/status/2100417692096459074) · [CompleteSkeptic](https://x.com/CompleteSkeptic/status/2099925682726002904)

</details>

---

## 观察小结

1. **本批主线是"大厂入场"**：Garry Tan（30k⭐）、Pydantic 官方（898⭐）、browser-use 官方（1984⭐）在同一窗口内出现，说明 Jev 生态正在出圈。
2. **SDK 语言版图**：24 小时内从 5 门语言扩张到 8+（新增 .NET、Elixir、Go×2），Go 客户端已有 4 个，明显过饱和。
3. **应用场景扩散**：智能家居（HA）、宠物监控、能耗监控、桌面机器人、DB 脱敏 —— 从"玩游戏 demo"转向"真实生活/生产场景"。
4. 频道节奏：这个时段约 45 条推文被分享进频道，热度未减。
