# TypeSafe AI · #show-and-tell 频道链接分类清单

> 原始文献，随附来源：由仓库作者提供于 2026-09-17（Discord 手动抓取整理）。
> 本文件是 `data/community.json` 中 `src: "discord"` 条目与 X 帖追踪列表的上游依据，按原样归档、未作内容修改。

> 抓取时间：2026-09-17 ｜ 范围：2026-07-22（频道创建）～ 2026-09-17（最新），全量历史
> 来源：Discord 服务器 TypeSafe AI 的 #show-and-tell 频道，共抓到 714 个链接
> 本文档整理其中 **GitHub 仓库 82 个**、**X/Twitter 链接 ~60 条**（其余为 Discord 图片/视频等附件，未列入）

⭐ = 星标数（截至今日）　📅 = 最近 push

---

## 一、GitHub · 官方 & 语言 SDK / CLI

TypeSafe（模型名 Jev，定位 "System One" 判断模型）的客户端与封装：

| 仓库 | 说明 | ⭐ | 📅 |
|---|---|---|---|
| [typesafe-ai/system-one-adapter-python](https://github.com/typesafe-ai/system-one-adapter-python) | 官方：LLM API 兼容的 TypeSafeClient 替代品 | 65 | 09-16 |
| [Gaurav-Gosain/jev-go](https://github.com/Gaurav-Gosain/jev-go) | Go 客户端，类型化判断 + 校准概率 | 1 | 09-16 |
| [cole-gillespie/typesafe-go](https://github.com/cole-gillespie/typesafe-go) | 非官方 Go SDK，带重试与 context | 2 | 09-17 |
| [Twister915/typesafe-ai](https://github.com/Twister915/typesafe-ai) | Rust 客户端（async + blocking） | 4 | 09-16 |
| [alterhq/typesafe-sdk-swift](https://github.com/alterhq/typesafe-sdk-swift) | Swift 库（非官方） | 2 | 09-15 |
| [geilt/typesafe-cli](https://github.com/geilt/typesafe-cli) | CLI + agent skill：Choice / Score / Noul 判断 | 3 | 09-17 |
| [y0usaf/typesafe-cli](https://github.com/y0usaf/typesafe-cli) | 命令行向 Jev 提类型化问题 | 4 | 09-16 |
| [y0usaf/typesafe-mcp](https://github.com/y0usaf/typesafe-mcp) | MCP 服务器 | 3 | 09-16 |
| [blakestone-x/jev-mcp](https://github.com/blakestone-x/jev-mcp) | MCP：classify / score / check / match / screen | 4 | 09-16 |
| [typesafeainate/dspy-typesafeify](https://github.com/typesafeainate/dspy-typesafeify) | dspy Signature 装饰器，自动接入 TypeSafe | 55 | 09-15 |
| [iammrduncan/typesafe-ai-benchmark](https://github.com/iammrduncan/typesafe-ai-benchmark) | 模仿 TypeSafe 结构化输出的 LLM Gateway（"impostor Jev"） | 14 | 09-17 |
| [AbdelStark/awesome-typesafe](https://github.com/AbdelStark/awesome-typesafe) | 官方资源 + 社区项目合集（awesome list） | 34 | 09-17 |

其他未写描述的 SDK/实验：`GiesN/typesafe-jev-workflow`、`GenieRobot/typesafe-ai-rails`、`nola-lang/nola-typesafe-test`、`jasondotsetHacked/jev-test-1`、`CrimsonLuckyLabs/kev`、`MrDesjardins/jevrealtimecodecheck`

## 二、GitHub · Agent 安全与护栏

| 仓库 | 说明 | ⭐ | 📅 |
|---|---|---|---|
| [yacine-kellib/agent-control-plane](https://github.com/yacine-kellib/agent-control-plane) | "凭证≠授权"：把 agent 动作的授权决策移到模型之外，防 prompt injection，含 Dafny 证明 | 7 | 08-23 |
| [rodriveiga01/second-thought](https://github.com/rodriveiga01/second-thought) | 终端安全带：shell 命令执行前 AI 判断 allow/warn/block | 4 | 09-16 |
| [DevMortimer/pi-warden](https://github.com/DevMortimer/pi-warden) | 给 Pi 加护栏：判断不可逆/偏离任务的工具调用、检测死循环 | 20 | 09-17 |
| [adrianpeticila/gorgona](https://github.com/adrianpeticila/gorgona) | "把失控的 agent 变成石头"：确定性护栏引擎 + 模型路由 | 1 | 09-03 |
| [Gaurav-Gosain/jev-sec-bench](https://github.com/Gaurav-Gosain/jev-sec-bench) | Jev 安全盲测基准：prompt injection + 漏洞代码检测 | 1 | 09-16 |
| [opaielsheikh/typesafe-migration-guard](https://github.com/opaielsheikh/typesafe-migration-guard) | 数据库迁移安全审查器 | 2 | 09-17 |
| [sekosai/schemen-gate](https://github.com/sekosai/schemen-gate) | 密码学门、能力委托、锁箱与向量隔离原语 | 4 | 09-16 |

## 三、GitHub · 游戏 & 物理 AI（让 Jev 打游戏/开无人机）

| 仓库 | 说明 | ⭐ | 📅 |
|---|---|---|---|
| [Reisenbug/TerraBlind](https://github.com/Reisenbug/TerraBlind) | Terraria 模组：寻路/建造/战斗流水线，从新世界打到血肉墙 | 6 | 09-17 |
| [kyleeasterly/OpenRAFormer2](https://github.com/kyleeasterly/OpenRAFormer2) | 让 LLM 玩《命令与征服》（fork） | 1 | 09-17 |
| [RomanSlack/jev-drone](https://github.com/RomanSlack/jev-drone) | 纯视觉自主无人机（MuJoCo），Jev 以 2.5Hz 参与决策 | 36 | 09-17 |
| [Nesbesss/khatib-chess](https://github.com/Nesbesss/khatib-chess) | Rust 位棋盘国际象棋引擎 + NNUE，~2544 Elo | 4 | 09-13 |
| [AliceRoselia/Typesafe_chess_eval](https://github.com/AliceRoselia/Typesafe_chess_eval) | TypeSafe 下棋评测（结论：不太行，但只是原型） | 0 | 09-17 |
| [cpaczek/things-vs-stuff](https://github.com/cpaczek/things-vs-stuff) | 塔防涂鸦游戏：你输入塔，Jev 判定谁克制谁 | 3 | 09-16 |
| [rivianpratama/JevPixelArt](https://github.com/rivianpratama/JevPixelArt) | 像素画 | 1 | 09-16 |
| [robault/skilldoom](https://github.com/robault/skilldoom) | 在 agent 的浏览器预览里跑 DOOM（wasm），打包成 SKILL.md | 0 | 07-15 |

## 四、GitHub · 浏览器 / 设备自动化

| 仓库 | 说明 | ⭐ | 📅 |
|---|---|---|---|
| [vlad-terin/jev-browser](https://github.com/vlad-terin/jev-browser) | 给现有 computer-use 工具加 Jev 元素选择 | 27 | 09-17 |
| [Ying-Kai-Liao/jev-browser](https://github.com/Ying-Kai-Liao/jev-browser) | LLM 规划 + Jev 决策的浏览器自动化，Library/CLI/MCP | 1 | 09-17 |
| [browser-use/macOS-use](https://github.com/browser-use/macOS-use) | 让 AI agent 操作 Mac 应用 | 1987 | 2025-03 |
| [luantak/mosaik](https://github.com/luantak/mosaik) | 小组件拼装的 agentic 浏览器自动化 | 11 | 09-13 |
| [Friedjof/jev-mobile](https://github.com/Friedjof/jev-mobile) | Jev + Mobile MCP 的 Android 控制循环 | 0 | 09-17 |
| [godhiraj-code/waitless](https://github.com/godhiraj-code/waitless) | Selenium 自动等待 UI 稳定（DOM/网络/动画信号） | 6 | 09-17 |

## 五、GitHub · 编码工具 & Agent 编排

| 仓库 | 说明 | ⭐ | 📅 |
|---|---|---|---|
| [proxysoul/Empryo](https://github.com/proxysoul/Empryo) | 图驱动 AI 编码 agent：AST 手术 + LSP + 代码基因组建模 | 1246 | 09-17 |
| [skyf0xx/hedgehog](https://github.com/skyf0xx/hedgehog) | 任务依赖图锁死 Claude Code/Cursor/Gemini CLI 的 spec 驱动开发 | 39 | 09-17 |
| [clavia-labs/tardigrade](https://github.com/clavia-labs/tardigrade) | 基于不可变事件日志的模块化 agent TS 框架 | 270 | 09-16 |
| [sf8193/hydra](https://github.com/sf8193/hydra) | 在 Discord/Slack 上跑编码 agent 的新界面 | 9 | 09-15 |
| [jchristn/Armada](https://github.com/jchristn/Armada) | 多 agent 编排，让人 scale 地管理多个 AI agent | 15 | 09-14 |
| [up1512001/conductor-hats](https://github.com/up1512001/conductor-hats) | Conductor 多账号运行 Claude Code/Codex，免登录切换 | 6 | 09-16 |
| [celsiusm/jarvis-workspace](https://github.com/celsiusm/jarvis-workspace) | 本地 web 驾驶舱并排跑多个编码 agent | 26 | 09-17 |
| [ellipsis-dev/blink](https://github.com/ellipsis-dev/blink) | Jev 驱动的代码库搜索 | 8 | 09-16 |
| [Coding-Dev-Tools/engraphis](https://github.com/Coding-Dev-Tools/engraphis) | 编码 agent 的本地优先、可检查的记忆层 | 175 | 09-17 |
| [blakestone-x/engram](https://github.com/blakestone-x/engram) | markdown 原生 agent 记忆：分层 + 遗忘曲线 + MCP | 2 | 09-16 |
| [nativesoil/handover](https://github.com/nativesoil/handover) | 在 agent/工具/模型之间交接项目状态的开放 JSON 格式 | 19 | 09-11 |
| [marcus-sa/decow](https://github.com/marcus-sa/decow) | 确定性编码工作流 | 0 | 09-14 |
| [casungo/noflow-runtime](https://github.com/casungo/noflow-runtime) | 按钮描述意图，运行时挑选注册的 UI affordance | 1 | 09-16 |
| [TinyFrontier/wince](https://github.com/TinyFrontier/wince) | 路由人类审查注意力：给 diff 标绿/黄/红（自己不审查） | 2 | 09-17 |
| [kubet/azdaja](https://github.com/kubet/azdaja) | harness 无关的递归 LLM 层，单二进制 `python + llm()` | 4 | 09-16 |
| [jsagir/mindrian-os-plugin](https://github.com/jsagir/mindrian-os-plugin) | "会反驳你的 AI 联合创始人" | 2 | 09-17 |

## 六、GitHub · 高星独立项目（频道里晒过的）

| 仓库 | 说明 | ⭐ | 📅 |
|---|---|---|---|
| [elie222/inbox-zero](https://github.com/elie222/inbox-zero) | 开源 AI 邮件助手 | 12237 | 09-17 |
| [elie222/rakazo](https://github.com/elie222/rakazo) | 开源 Grok Bot 替代品，自选模型与沙箱 | 2617 | 09-17 |
| [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | 开源 Grok Bot 替代，带 bot 可用的虚拟机 | 3026 | 09-17 |
| [orneryd/NornicDB](https://github.com/orneryd/NornicDB) | 分布式图+向量数据库，兼容 Neo4j Bolt/Cypher | 877 | 09-16 |
| [jaylfc/taOS](https://github.com/jaylfc/taOS) | 自托管 AI agent OS：记忆/聊天/agent 全在本地硬件 | 535 | 09-17 |
| [DreamLab-AI/agentbox](https://github.com/DreamLab-AI/agentbox) | Nix 构建的主权 agent 容器（fork） | 22 | 09-16 |

## 七、GitHub · 其他（数据/金融/杂项）

| 仓库 | 说明 | ⭐ | 类别 |
|---|---|---|---|
| [jexp/neo4jev](https://github.com/jexp/neo4jev) | Jev 用邻居关系分类器在 Neo4j 图里导航 | 2 | 图数据 |
| [pax-k/markov-pax](https://github.com/pax-k/markov-pax) | TS 马尔可夫模型/推断/工作流 | 0 | 图数据 |
| [pithings/advocaat](https://github.com/pithings/advocaat) | 类型安全的"问数据"客户端 | 20 | 数据问答 |
| [WebGrga/btc-jev-signal](https://github.com/WebGrga/btc-jev-signal) | Jev 概率 + Binance 数据的 BTC 多周期信号 | 0 | 交易 |
| [pome-sh/digital-twins](https://github.com/pome-sh/digital-twins) | 面向 agent 构建方式的集成测试模式 | 20 | 测试 |
| [MadaBurns/bv-mcp](https://github.com/MadaBurns/bv-mcp) | DNS/邮件安全扫描 MCP，57 项检查，Cloudflare Workers | 9 | 安全扫描 |
| [holokat/blender-fast](https://github.com/holokat/blender-fast) | 批量 Blender 工作流 + 渲染基准 | 5 | 创意工具 |
| [w3ziqv/focus-flow](https://github.com/w3ziqv/focus-flow) | 极简番茄钟 | 3 | 效率 |
| [trkr-ai/trkr-agents](https://github.com/trkr-ai/trkr-agents) | trkr.ai agents | 0 | — |
| [rokopt/geb](https://github.com/rokopt/geb) + [geb-mathlib](https://github.com/rokopt/geb-mathlib) | Geb 范畴编程语言 + Lean4 形式化 | 3 | PL理论 |
| [nickthompson480/typesafe-ai-playground](https://github.com/nickthompson480/typesafe-ai-playground) | 社区 playground：110 个用例/游戏/困境 | 2 | playground |
| [cakeisalie89/Quantum-Thermal-](https://github.com/cakeisalie89/Quantum-Thermal-) | — | 12 | — |
| [chudworks/chudbot](https://github.com/chudworks/chudbot) | bot（频道里被引用过 platform.rs 源码） | 2 | bot |
| [MrQuartz99/Qwansh](https://github.com/MrQuartz99/Qwansh) / [pax-k/p-ax](https://github.com/pax-k/p-ax) / [pax-k/OpenAIRT-300](https://github.com/pax-k/OpenAIRT-300)（攻击性 AI 安全课程 22⭐） | — | — | — |
| [Diabolacal/eo-map-carbon](https://github.com/Diabolacal/eo-map-carbon) / [Dropgunner/Mental-Health-in-the-AI-Industry...](https://github.com/Dropgunner/Mental-Health-in-the-AI-Industry-The-Conversation-We-re-Not-Having) | — | 0 | — |
| ~~pax-k/cloudflare-ide~~ | 仓库已删除（404） | — | — |

---

## 八、X / Twitter 链接

**官方账号**：[x.com/typesafeai](https://x.com/typesafeai)

**推文（按字母序，均为频道内分享，多为第一人称 showcase）**：

<details>
<summary>共 55 条推文链接（点击展开）</summary>

- [faadilhshaik](https://x.com/faadilhshaik/status/2100086301894881578) — Jev 玩 Super Mario Bros.（频道里最火的分享之一，配套 [fhshaik/typesafe-mario](https://github.com/fhshaik/typesafe-mario)）
- [dustin_podell](https://x.com/dustin_podell/status/2100451281013969078) / [②](https://x.com/dustin_podell/status/2100458335405588607)
- [_pi0_](https://x.com/_pi0_/status/2100362008856010789)
- [awlevin](https://x.com/awlevin/status/2100262612428894676) · [marcus_lowe](https://x.com/marcus_lowe/status/2100315518930661861)（fxtwitter 链接）
- [_GauravGosain](https://x.com/_GauravGosain/status/2100111398277959715) · [_trou3](https://x.com/_trou3/status/2100481938016669917) · [0xboyd](https://x.com/0xboyd/status/2100418365986578908)
- [aaiach01](https://x.com/aaiach01/status/2100396887207776380) · [abcdmku](https://x.com/abcdmku/status/2100406369744482318) · [ali_uraish](https://x.com/ali_uraish/status/2100425130082238682)
- [anessbelbati](https://x.com/anessbelbati/status/2100398911911248050) · [Anot](https://x.com/Anot/status/2100425243269468583) · [ayaankhan_x](https://x.com/ayaankhan_x/status/2100322283407700308)
- [BaselAshraf81](https://x.com/BaselAshraf81/status/2100400028711805242) · [BniWael](https://x.com/BniWael/status/2100195854904598745) · [brainstormity](https://x.com/brainstormity/status/2100471987860553931)
- [chalkers](https://x.com/chalkers/status/2100429696941080886) / [②](https://x.com/chalkers/status/2100466530459017458) · [CleistaCelestia](https://x.com/CleistaCelestia/status/2095319421187207550)（fixvx）
- [CompleteSkeptic](https://x.com/CompleteSkeptic/status/2099925687465570372) · [danielkhunter](https://x.com/danielkhunter/status/2100456518751768775)
- [devagrawal09](https://x.com/devagrawal09/status/2100341005690298687) · [dextns](https://x.com/dextns/status/2099792098719305741)
- [digitalshane_](https://x.com/digitalshane_/status/2100399951872205224) · [gregpr07](https://x.com/gregpr07/status/2100411066966749359)
- [hackgoofer](https://x.com/hackgoofer/status/2100464343255294448) · [haiderTheDev](https://x.com/haiderTheDev/status/2100419750459519156)
- [iamMrDuncan](https://x.com/iamMrDuncan/status/2100267443071451486) / [②](https://x.com/iamMrDuncan/status/2100467548298899918) · [identityTorn](https://x.com/identityTorn/status/2100475121324728615)
- [injaneity](https://x.com/injaneity/status/2100177865958682860) / [②](https://x.com/injaneity/status/2100290364657848538)
- [jarrodwatts](https://x.com/jarrodwatts/status/2100356151468585346) · [joaobnobre](https://x.com/joaobnobre/status/2100486780298383801)
- [jpschroeder](https://x.com/jpschroeder/status/2100347770867458384) · [k3o_exp](https://x.com/k3o_exp/status/2100065796240073215)
- [kalin_t](https://x.com/kalin_t/status/2097349448305394027) · [karuri945](https://x.com/karuri945/status/2100427285224394867)
- [Meliwat93](https://x.com/Meliwat93/status/2100404711283188181)（含视频）· [MrWatchCEO](https://x.com/MrWatchCEO/status/2100022312640610332)
- [Neel490](https://x.com/Neel490/status/2100400923826606523) · [oswalpalash](https://x.com/oswalpalash/status/2100125657795834343)
- [princecaarlo](https://x.com/princecaarlo/status/2100141659933856192) / [②](https://x.com/princecaarlo/status/2100313645116952701) · [RomanSlack1](https://x.com/RomanSlack1/status/2100335978229690683)
- [shantanugoel](https://x.com/shantanugoel/status/2100455295801827769) / [②](https://x.com/shantanugoel/status/2100455779627311352) · [sid19arya0](https://x.com/sid19arya0/status/2100458351440048258)
- [Southen13](https://x.com/southen13/status/2100414423152136322) · [soya_da_yoot](https://x.com/soya_da_yoot/status/2100451279222755616)
- [tosa_now](https://x.com/tosa_now/status/2100230707297878339) · [useLectio](https://x.com/useLectio/status/2100249540599386538) · [world_ia_lupo](https://x.com/world_ia_lupo/status/2099575807081345310)

</details>

另有 30+ 条 `jf.x.com/images/media-preview/...` 推文媒体预览图（ID 与上述推文一一对应），已省略。

---

## 观察小结

1. **生态主线**：几乎全部项目围绕 TypeSafe 的 **Jev**（"System One" 判断模型）做集成——共同卖点是*类型化输出 + 校准概率*，而非生成文本。
2. **两大热门方向**：① 让 Jev 打游戏/操控设备（Terraria、RTS、无人机、Android、浏览器）；② 给 agent 加护栏（命令审查、授权分离、注入检测）。
3. **多语言 SDK 迸发**：Go ×2、Rust、Swift、Python、TS、MCP 一周内全部出现，是典型的"新模型首发生态周"形态。
4. **高频作者**：`blakestone-x`（3 个项目）、`y0usaf`（2 个）、`pax-k`（3 个）、`Gaurav-Gosain`（2 个）。
