# WhatsApp Web Reconstruction — Cryptographic Evidence Ledger

This ledger records the SHA-256 digests and provenance of all target artifacts, extracted ground-truth specs, decompiled source chunks, reconstructed components, and verification diff artifacts.

Every entry is tagged:
- **[DIRECT]**: Read verbatim from evidence on disk (source file & line/offset verified).
- **[INFERRED]**: Derived from runtime/AST evidence logic.
- **[APPROXIMATE]**: Fallback approximation (none allowed in final build).

---

## 1. Asset & Specification Ledger

| Provenance Tag | Category | File Path | SHA-256 Digest | Source Reference & Description |
| :--- | :--- | :--- | :--- | :--- |
| **[DIRECT]** | **Chat Doodle Wallpaper Vector** | `target_artifacts/whatsapp-web/assets/doodle.svg` | `03fa80f7734829f2b455633163a38f7f4222b87c3b2473bce83f3b2784539b98` | Resource `89515` from `https://static.whatsapp.net/rsrc.php/yx/r/voSdkk88H7C.svg`. Mask size constants: `540px 960px` (std), `412.5px 749.25px` (2dppx) from `chunk_17` module 98. |
| **[DIRECT]** | **Meta AI Multi-Colored Ring Bitmap** | `target_artifacts/whatsapp-web/assets/meta-ai-ring.webp` | `920b63086387c92d1cdfbe7d5170ec9789ce301ab1c2d0e7da7102d0b5e3df2e` | Resource `88729` from `https://static.whatsapp.net/rsrc.php/yS/r/T_xj3a3ApC9.webp` resolved in manifest at `live-dom-rendered.html:386715`. Used by `WAWebMetaAIIcon.react` via `bx("88729")`. |
| **[DIRECT]** | **Live Rendered DOM Capture** | `captures/live-dom-rendered.html` | `dcff4f48329a8dc7ac723bf80ab0930e66585d1c96cd3c04fbadd4e062bd26e5` | Evaluated directly via CDP (`Runtime.evaluate` of `document.documentElement.outerHTML`) on live WhatsApp Web target `2D0E840D62F22130552887F93BEDABE9`. Contains Meta `bx` resource map. |
| **[DIRECT]** | **Target Production Stylesheet** | `target_artifacts/whatsapp-web/css/production.css` | `ff9d4e6dbc21fbdd5f8434562dc4bfb1c83fa35b650b658dd1c9f8553fffaa13` | Captured WhatsApp Web production stylesheet (1.45 MB from `static.whatsapp.net`). |
| **[DIRECT]** | **Target Live Screenshot Artifact** | `target_artifacts/whatsapp-web/live-screenshot-artifact.json` | `c405866b9cb2a6ce8f2ff362dde738c52222300052f34be64840d75849965e43` | Extracted live viewport PNG artifact JSON from CDP capture. |
| **[DIRECT]** | **Target Live Page Capture** | `target_artifacts/whatsapp-web/page-capture.json` | `2d4163179b9d9a9e32a5d8f91b499f18aa19dca6861e62937762f131384a9dde` | Full DOM, accessibility tree, and 26 V8 script sources capture (`ev_6be7f038...`). |
| **[DIRECT]** | **Extracted CSS Tokens** | `analysis/css-tokens.json` | `fe879247b277835dc72e6ba227928c53e8eae1a711d7b6943ca4fa0f8ca48ea2` | 3,208 CSS custom properties extracted from `production.css`. |
| **[DIRECT]** | **Extracted SVG Icons** | `analysis/svg-icons.json` | `bdbbf01f1279f28f387ddd928bbf251fa86ecc72f013a77762021507a3d8a856` | 27 verified AST SVG vector paths and viewBoxes directly extracted from recovered modules (`WAWebWrapperTailIcon.react`, `WDSIconWdsIcDelivered.react`, `WDSIconWdsIcRead.react`, `WDSIconIcCheck.react`, and WDS Nav Icons). |
| **[DIRECT]** | **Bubble Grouping Rules** | `analysis/bubble-grouping-rules.md` | `0c67e0a4618653d3b050004943abfc1207440ce81bad52e5f5a5f34eae52a974` | Message clustering, directional tails, and boundary rules from `chunk_17`. |
| **[DIRECT]** | **Tick State Machine** | `analysis/tick-state-machine.md` | `4def2caa39513ab5e2307ea7c93c43030d73b4c96ed8871c1884c3db1689dc78` | ACK progression logic (CLOCK: 0, SENT: 1, RECEIVED: 2, READ: 3) from `chunk_10` & `chunk_19`. |
| **[DIRECT]** | **Layout Geometry Specifications** | `analysis/layout-geometry.md` | `97cbbb01cd4a77cab13b6073f897a5b7512221333cb23051dd18a1acdc5cbf74` | 3-column layout constants (`NAVBAR_WIDTH = 64px`, `MIN_CHATLIST = 265px`, `MAX = 380px`, `MIN_CONVERSATION = 600px`) from `WAWebAdaptiveLayoutConfig` in `chunk_10#L262865`. |

### 1.1 Ground-Truth SVG Icons (Step 2 Artifacts)

| Provenance Tag | Icon Name | Module Name | Source Chunk & Line | ViewBox | SHA-256 of Source File |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **[DIRECT]** | `tail-in` | `WAWebWrapperTailIcon.react` | `chunk_17_7Tf0qWLsuo3__bundle.js#L56376` | `0 0 8 13` | `393994f1f94d57993831741265b91e24ad2632f96180ab7a7234d704eafa1b15` |
| **[DIRECT]** | `tail-out` | `WAWebWrapperTailIcon.react` | `chunk_17_7Tf0qWLsuo3__bundle.js#L56376` | `0 0 8 13` | `393994f1f94d57993831741265b91e24ad2632f96180ab7a7234d704eafa1b15` |
| **[DIRECT]** | `msg-check` | `WDSIconWdsIcDelivered.react` | `chunk_05_Sp7m9vtWcB2__bundle.js#L12847` | `0 0 24 24` | `421691f7f1ee34cb6ed9c08be07d403edc7adac1804e8c66a5c8f59501583e40` |
| **[DIRECT]** | `msg-dblcheck` | `WDSIconWdsIcRead.react` | `chunk_05_Sp7m9vtWcB2__bundle.js#L12855` | `0 0 24 24` | `421691f7f1ee34cb6ed9c08be07d403edc7adac1804e8c66a5c8f59501583e40` |
| **[DIRECT]** | `msg-check-single` | `WDSIconIcCheck.react` | `chunk_20_source-20-c0413ff55b8f39805b2d620ec891eb__bundle.js#L37560` | `0 0 24 24` | `a681532e9c12deaad841d8d8898a10ea73bb65edfd30523f434d8aa9cbb66366` |
| **[DIRECT]** | `nav-chats` | `WDSIconWdsIcChat.react` | `chunk_09_source-9-122c3e652dc14fd507309af34868b6f__bundle.js#L5139` | `0 0 24 24` | `fd9077e58385e4325f1d57554695c748d2c375bc459e282e6e46fbd90b9f4510` |
| **[DIRECT]** | `nav-chats-filled` | `WDSIconWdsIcChatFilled.react` | `chunk_26_source-26-d9b5cb7fdfe11a88b2d9ce3c290436__bundle.js#L24681` | `0 0 24 24` | `99990e3eeac712b0c0b8c584390d68628642387e05e166faa00f5d9022d8d6af` |
| **[DIRECT]** | `nav-status` | `WDSIconWdsIcStatus.react` | `chunk_26_source-26-d9b5cb7fdfe11a88b2d9ce3c290436__bundle.js#L221479` | `0 0 24 24` | `99990e3eeac712b0c0b8c584390d68628642387e05e166faa00f5d9022d8d6af` |
| **[DIRECT]** | `nav-status-filled` | `WDSIconWdsIcStatusFilled.react` | `chunk_09_source-9-122c3e652dc14fd507309af34868b6f__bundle.js#L108063` | `0 0 24 24` | `fd9077e58385e4325f1d57554695c748d2c375bc459e282e6e46fbd90b9f4510` |
| **[DIRECT]** | `nav-channels` | `WDSIconWdsIcChannels.react` | `chunk_26_source-26-d9b5cb7fdfe11a88b2d9ce3c290436__bundle.js#L202075` | `0 0 24 24` | `99990e3eeac712b0c0b8c584390d68628642387e05e166faa00f5d9022d8d6af` |
| **[DIRECT]** | `nav-channels-filled` | `WDSIconWdsIcChannelsFilled.react` | `chunk_09_source-9-122c3e652dc14fd507309af34868b6f__bundle.js#L95666` | `0 0 24 24` | `fd9077e58385e4325f1d57554695c748d2c375bc459e282e6e46fbd90b9f4510` |
| **[DIRECT]** | `nav-communities` | `WDSIconWdsIcCommunities.react` | `chunk_26_source-26-d9b5cb7fdfe11a88b2d9ce3c290436__bundle.js#L221461` | `0 0 24 24` | `99990e3eeac712b0c0b8c584390d68628642387e05e166faa00f5d9022d8d6af` |
| **[DIRECT]** | `nav-communities-filled` | `WDSIconWdsIcCommunitiesFilled.react` | `chunk_09_source-9-122c3e652dc14fd507309af34868b6f__bundle.js#L95684` | `0 0 24 24` | `fd9077e58385e4325f1d57554695c748d2c375bc459e282e6e46fbd90b9f4510` |
| **[DIRECT]** | `nav-archived` | `WDSIconIcArchive.react` | `chunk_09_source-9-122c3e652dc14fd507309af34868b6f__bundle.js#L60967` | `0 0 24 24` | `fd9077e58385e4325f1d57554695c748d2c375bc459e282e6e46fbd90b9f4510` |
| **[DIRECT]** | `nav-archived-filled` | `WDSIconIcArchiveFilled.react` | `chunk_10_3nzqNpHbcmc__bundle.js#L40830` | `0 -960 960 960` | `c9ee467ef768fb5f80a5a03409c54e665ab9b1f42fe8c1ed81e140646f5870de` |
| **[DIRECT]** | `nav-settings` | `WDSIconIcSettings.react` | `chunk_20_source-20-c0413ff55b8f39805b2d620ec891eb__bundle.js#L6370` | `0 0 24 24` | `a681532e9c12deaad841d8d8898a10ea73bb65edfd30523f434d8aa9cbb66366` |
| **[DIRECT]** | `nav-settings-filled` | `WDSIconIcSettingsFilled.react` | `chunk_09_source-9-122c3e652dc14fd507309af34868b6f__bundle.js#L108055` | `0 0 24 24` | `fd9077e58385e4325f1d57554695c748d2c375bc459e282e6e46fbd90b9f4510` |
| **[DIRECT]** | `nav-calls` | `WDSIconIcCall.react` | `chunk_02_source-2-60d621455d3fd13631142757928dac4__bundle.js#L6249` (Byte offset `233992`) | `0 0 24 24` | `83eaae608112d7b539bfb1b70211756cf8544cb482ce385b2e9871578e0dbf80` |
| **[DIRECT]** | `nav-calls-filled` | `WDSIconIcCallFilled.react` | `chunk_20_source-20-c0413ff55b8f39805b2d620ec891eb__bundle.js#L6354` (Byte offset `239781`) | `0 0 24 24` | `a681532e9c12deaad841d8d8898a10ea73bb65edfd30523f434d8aa9cbb66366` |
| **[DIRECT]** | `nav-meta-ai` | `WDSIconWdsIcLogoMetaAi.react` | `chunk_04_source-4-796019e71d254ebef877276fc670825__bundle.js#L154674` (Byte offset `5490362`) | `0 0 24 24` | `784d5df65d13149a4e09f44f91e9fbf246d8cf4b3dc05e0455db114dca216149` |
| **[DIRECT]** | `chat-new` | `WDSIconWdsIcNewChat.react` | `chunk_10_3nzqNpHbcmc__bundle.js#L13360` | `0 0 24 24` | `c9ee467ef768fb5f80a5a03409c54e665ab9b1f42fe8c1ed81e140646f5870de` |
| **[DIRECT]** | `search` | `WDSIconIcSearch.react` | `chunk_09_source-9-122c3e652dc14fd507309af34868b6f__bundle.js#L52068` | `0 0 24 24` | `fd9077e58385e4325f1d57554695c748d2c375bc459e282e6e46fbd90b9f4510` |
| **[DIRECT]** | `filter` | `WDSIconIcFilter.react` | `chunk_26_source-26-d9b5cb7fdfe11a88b2d9ce3c290436__bundle.js#L158713` | `0 0 24 24` | `99990e3eeac712b0c0b8c584390d68628642387e05e166faa00f5d9022d8d6af` |
| **[DIRECT]** | `menu` | `WDSIconIcMoreVert.react` | `chunk_20_source-20-c0413ff55b8f39805b2d620ec891eb__bundle.js#L7820` | `0 0 24 24` | `a681532e9c12deaad841d8d8898a10ea73bb65edfd30523f434d8aa9cbb66366` |
| **[DIRECT]** | `attach` | `WDSIconIcAttachFile.react` | `chunk_26_source-26-d9b5cb7fdfe11a88b2d9ce3c290436__bundle.js#L137078` | `0 0 24 24` | `99990e3eeac712b0c0b8c584390d68628642387e05e166faa00f5d9022d8d6af` |
| **[DIRECT]** | `mic` | `WDSIconIcMic.react` | `chunk_26_source-26-d9b5cb7fdfe11a88b2d9ce3c290436__bundle.js#L25318` | `0 0 24 24` | `99990e3eeac712b0c0b8c584390d68628642387e05e166faa00f5d9022d8d6af` |
| **[DIRECT]** | `send` | `WDSIconIcSendFilled.react` | `chunk_05_Sp7m9vtWcB2__bundle.js#L28849` | `0 0 24 24` | `421691f7f1ee34cb6ed9c08be07d403edc7adac1804e8c66a5c8f59501583e40` |

### 1.2 Ground-Truth CSS Variable Resolution Chains (Step 3 Exact Byte Offsets)

All byte offsets are character indices into `target_artifacts/whatsapp-web/css/production.css` (SHA-256: `ff9d4e6dbc21fbdd5f8434562dc4bfb1c83fa35b650b658dd1c9f8553fffaa13`).

| Provenance Tag | Token / Property | Resolution Chain in `production.css` | Exact Byte Offset | Target Selector & Context | Final Evaluated Value |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **[DIRECT]** | `--outgoing-background` | `--outgoing-background: var(--WDS-systems-bubble-surface-outgoing);` | `1428002` | `:root,.dark` | Resolves to `#144D37` |
| **[DIRECT]** | `--WDS-systems-bubble-surface-outgoing` | `--WDS-systems-bubble-surface-outgoing: #144D37;` | `836401` | `@media (prefers-color-scheme: dark){.xfmqtgv.xfmqtgv,...}` | `#144D37` (RGB: `20, 77, 55` at `836444`) |
| **[DIRECT]** | `--incoming-background` | `--incoming-background: var(--WDS-systems-bubble-surface-incoming);` | `1428067` | `:root,.dark` | Resolves to `#242626` |
| **[DIRECT]** | `--WDS-systems-bubble-surface-incoming` | `--WDS-systems-bubble-surface-incoming: #242626;` | `836302` | `@media (prefers-color-scheme: dark){.xfmqtgv.xfmqtgv,...}` | `#242626` (RGB: `36, 38, 38` at `836345`) |
| **[DIRECT]** | `--icon-ack` | `--icon-ack: var(--WDS-content-read);` | `1428132` | `:root,.dark` | Resolves to `#53BDEB` |
| **[DIRECT]** | `--WDS-content-read` | `--WDS-content-read: #53BDEB;` | `833811` | `@media (prefers-color-scheme: dark){.xfmqtgv.xfmqtgv,...}` | `#53BDEB` (RGB: `83, 189, 235`) |
| **[DIRECT]** | Wallpaper Base Background | `--WDS-systems-chat-background-wallpaper: #161717;` | `836699` | `@media (prefers-color-scheme: dark){.xfmqtgv.xfmqtgv,...}` | `#161717` (RGB: `22, 23, 23`) |
| **[DIRECT]** | Wallpaper Foreground Doodle | `--WDS-systems-chat-foreground-wallpaper: rgba(255, 255, 255, .1);` | `836802` | `@media (prefers-color-scheme: dark){.xfmqtgv.xfmqtgv,...}` | `rgba(255, 255, 255, 0.1)` |
| **[DIRECT]** | Composer Surface | `--WDS-systems-chat-surface-composer: #242626;` | `836924` | `@media (prefers-color-scheme: dark){.xfmqtgv.xfmqtgv,...}` | `#242626` (RGB: `36, 38, 38`) |
| **[APPROXIMATE]** | Legacy Outgoing Bubble Hex | Legacy pre-WDS variable token | — | Hardcoded legacy dark mode constant | `#005c4b` (Superseeded by `#144D37` in WDS `.xfmqtgv`) |
| **[APPROXIMATE]** | Legacy Incoming Bubble Hex | Legacy pre-WDS variable token | — | Hardcoded legacy dark mode constant | `#202c33` (Superseeded by `#242626` in WDS `.xfmqtgv`) |

---

## 2. Decompiled Bundle Provenance

| Provenance Tag | Decompiled Module | SHA-256 Digest | Key Exported Capabilities |
| :--- | :--- | :--- | :--- |
| **[DIRECT]** | `recovered-modules-combined/chunk_01_ZMZDw6zKHcP__bundle.js` | `2237a1920fba7e3957f84adaaf7ce139b49eb9b610935e28b3ecee6ae59c1dc7` | `WAWebWallpaper` (opacity values: dark `0.06`, light `0.1`, background base `#161717`). |
| **[DIRECT]** | `recovered-modules-combined/chunk_05_Sp7m9vtWcB2__bundle.js` | `421691f7f1ee34cb6ed9c08be07d403edc7adac1804e8c66a5c8f59501583e40` | `WAWebIconFactory`, system icon vector registrations. |
| **[DIRECT]** | `recovered-modules-combined/chunk_09_source-9-122c3e652dc14fd507309af34868b6f__bundle.js` | `fd9077e58385e4325f1d57554695c748d2c375bc459e282e6e46fbd90b9f4510` | Left navigation rail, search, and system action icons. |
| **[DIRECT]** | `recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js` | `c9ee467ef768fb5f80a5a03409c54e665ab9b1f42fe8c1ed81e140646f5870de` | `WAWebConversationPreview.react`, tick status, `WAWebConversationPanelWrapper.stylex`. |
| **[DIRECT]** | `recovered-modules-combined/chunk_17_7Tf0qWLsuo3__bundle.js` | `393994f1f94d57993831741265b91e24ad2632f96180ab7a7234d704eafa1b15` | `WAWebConversationBackground.react` (mask size: `540px 960px` / `412.5px 749.25px`, repeat: `repeat`, alpha mode). |
| **[DIRECT]** | `recovered-modules-combined/chunk_19_36kJFHJBFHp__bundle.js` | `233f1728014d6295a19ae30a78316968be813d8950e501b35cbd1b89f4a3c4eb` | Ack state bindings and conversation list selection. |
| **[DIRECT]** | `recovered-modules-combined/chunk_26_source-26-d9b5cb7fdfe11a88b2d9ce3c290436__bundle.js` | `99990e3eeac712b0c0b8c584390d68628642387e05e166faa00f5d9022d8d6af` | Composer bar, attachments, dynamic microphone / send toggle. |

---

## 3. Verification & Comparison Artifacts (Step 6 — Incomplete / Pending Signed-In Baseline)

> [!WARNING]
> Step 6 is NOT complete. The earlier live baseline (`live-screenshot-artifact.json` / `da70b7b4...`) was captured on the unauthenticated QR landing screen of `web.whatsapp.com`, rendering pixel comparison against the 3-column signed-in chat UI invalid (`0.9991` diff ratio). Step 6 remains strictly incomplete pending an authentic signed-in viewport screenshot capture at 1034x737 uploaded by the user.

| Provenance Tag | Verification Artifact | SHA-256 Digest | Description |
| :--- | :--- | :--- | :--- |
| **[DIRECT]** | `target_artifacts/whatsapp-web/recon-screenshot-evidence.json` | `7ad60c1d686f0b480c7ba8d30e03be189ee6cf80ee2c949c8112526e8ce24521` | CDP screenshot observation Evidence of reconstructed 3-column chat shell target at 1034x737 (`ev_60428207...`). |
| **[DIRECT]** | `target_artifacts/whatsapp-web/recon-screenshot-artifact.json` | `23e6979d3416f19a6b5d21ab99e368c539d206e726cae8e625d64a28d28645a8` | CDP screenshot inner artifact JSON extracted from `recon-screenshot-evidence.json` at exact 1034x737 viewport. |
| **[DIRECT]** | `target_artifacts/whatsapp-web/recon-screenshot.png` | `5e11c37e6b54db1c4fd6cb8cb10940656147c70c552a357cfddc5e10055906a6` | Viewport PNG image of reconstructed 3-column chat shell. |
| **[APPROXIMATE]** | `target_artifacts/whatsapp-web/live-screenshot-artifact.json` | `da70b7b496f5d5ef10964519333318d77107f3c100caf2fc6876a7204daf1d75` | **REJECTED BASELINE**: Unauthenticated QR login screen capture. Does not represent signed-in 3-column chat shell. |
| **[APPROXIMATE]** | `analysis/screenshot-pixel-diff.json` | `a7b61db931e076ed34b1667cf076926777ca360cbd9f987b024eeaff0f3c41b9` | **INVALIDATED DIFF**: Diffs signed-in reconstruction against unauthenticated QR baseline. Proves zero reconstruction fidelity. |

---

## 4. Component Loop: Component 1 — Nav Rail (`WAWebNavigationBar.react`)

| Provenance Tag | Stage | File / Artifact | Exact Location & ID | SHA-256 Digest | Details & Evidence Citations |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **[DIRECT]** | **1. REA Trace** | `analysis/traces/trace_navrail_node.json` | Node ID `jag_node_75dda4f9...` | `f6aa7c2501c1583c967fc1fc39ecad50a46f9b83ec053b8c5a6a8ec2c36f54b7` | Seed `jag_node_75dda4f908461c3391b41080ef440ed6dcf21ded18b2fcf2aaa63ef57f9a3e2d` traced with `traceApplicationFeatureEvidenceValidated` in REA WSL toolchain. Trace ID `jatr_056c560beca6...` (46 paths, 104 nodes, 567 edges). |
| **[DIRECT]** | **2. REA Inspect** | `analysis/traces/inspect_navrail_node.json` | Byte offset `1570504`, Line `41094`, Module ID `98` | `db663b776dc3d50c82270d02decc67164041426a67690aba93344e32b80aafcc` | Project item view receipt `ev_74bfcaabff2333336c495f2e9115c3c42a458c8433f97944ac7d655499469b9b` from `inspectAnalysisViewValidated` (`collection: "modules"`). Rendering module: `WAWebNavigationBar.react` in `chunk_10_3nzqNpHbcmc__bundle.js#L41617`. |
| **[DIRECT]** | **3. Rebuilt Component** | `reconstruction/src/components/LeftNavRail.tsx` | Target component | `1329350a69a86594d8ee8f10654c15a867bce806f75cef7be6852e4517ecdcf6` | Rebuilt 1:1 element tree: `<header data-testid="chatlist-header">` -> `<div data-testid="navbar-primary-section">` (Chats, Calls, Status, Channels, Communities, `<hr>`, Meta AI) -> `<div data-testid="navbar-footer-section">` (Settings, Profile avatar circle). Atomic StyleX classes mounted from `production.css`. |
| **[DIRECT]** | **4. WDSIcon Modules** | `analysis/svg-icons.json` | All 13 icons verified | `bdbbf01f1279f28f387ddd928bbf251fa86ecc72f013a77762021507a3d8a856` | `WDSIconWdsIcChat.react`, `WDSIconWdsIcChatFilled.react`, `WDSIconIcCall.react`, `WDSIconIcCallFilled.react`, `WDSIconWdsIcStatus.react`, `WDSIconWdsIcStatusFilled.react`, `WDSIconWdsIcChannels.react`, `WDSIconWdsIcChannelsFilled.react`, `WDSIconWdsIcCommunities.react`, `WDSIconWdsIcCommunitiesFilled.react`, `WDSIconWdsIcLogoMetaAi.react`, `WDSIconIcSettings.react`, `WDSIconIcSettingsFilled.react`. All viewBoxes `0 0 24 24`. |
| **[INFERRED]** | **Keyboard Entry Point on Nav Rail** | `WAWebNavigationBar.react` | Byte offset `1591200`, Line `41709` | — | The nav rail `<header>` has `data-testid="chatlist-header"` and `data-tab=1` (`TAB_ORDER.CHATLIST_HEADER`) because it acts as the primary keyboard navigation tab stop before the chat list panel. |
| **[DIRECT]** | **Dark Theme Token Selector (Unconditional)** | `production.css` | Byte offset `211253` | `ff9d4e6dbc...` | Class `.x1umy8rd` unconditionally defines all `--WDS-*` dark tokens (surface `#1D1F1F`, lines divider `rgba(255,255,255,.1)`, active list row `rgba(255,255,255,.1)`, de-emphasized content `rgba(255,255,255,.6)`). Applied to `<html>` to guarantee dark mode independent of OS theme. |
| **[DIRECT]** | **Dark Theme Variable Mappings** | `production.css` | Byte offset `1427629` | `ff9d4e6dbc...` | Class `.dark` maps legacy and component tokens to `--WDS-*` dark tokens (`--outgoing-background: var(--WDS-systems-bubble-surface-outgoing);`, etc.). |
| **[DIRECT]** | **Dark Theme Media Query (OS-dependent)** | `production.css` | Byte offset `829259` | `ff9d4e6dbc...` | `@media (prefers-color-scheme: dark){.xfmqtgv.xfmqtgv,...}` applies WDS dark tokens conditionally if OS prefers dark mode. |

### 4.1 Nav Rail Color Variable Resolution Offsets in `production.css`

All offsets are byte offsets into `target_artifacts/whatsapp-web/css/production.css` (SHA-256: `ff9d4e6dbc21fbdd5f8434562dc4bfb1c83fa35b650b658dd1c9f8553fffaa13`):

| Token / Class | Role in Nav Rail | Exact Byte Offset | Rule Context | Value in Dark Mode |
| :--- | :--- | :--- | :--- | :--- |
| `.x1h3rtpe` | Rail Outer Background Class | `974715` | `.x1h3rtpe{background-color:var(--WDS-surface-emphasized)}` | Uses `--WDS-surface-emphasized` |
| `--WDS-surface-emphasized` | Rail Background Variable | `835436` | `@media (prefers-color-scheme: dark){.xfmqtgv.xfmqtgv,...}` | `#1D1F1F` |
| `.xx42vgk` | Separator `<hr>` Line Class | `1354517` | `.xx42vgk{border-top-color:var(--WDS-lines-divider)}` | Uses `--WDS-lines-divider` |
| `--WDS-lines-divider` | Separator Line Variable | `833874` | `@media (prefers-color-scheme: dark){.xfmqtgv.xfmqtgv,...}` | `rgba(255, 255, 255, .1)` |
| `.x1fe8iih` | Active Item Background Class | `968382` | `.x1fe8iih{background-color:var(--WDS-components-active-list-row)}` | Uses `--WDS-components-active-list-row` |
| `--WDS-components-active-list-row` | Active Background Variable | `829963` | `@media (prefers-color-scheme: dark){.xfmqtgv.xfmqtgv,...}` | `rgba(255, 255, 255, .1)` |
| `.xhslqc4` | Inactive Item Color Class | `1115647` | `.xhslqc4{color:var(--WDS-content-deemphasized)}` | Uses `--WDS-content-deemphasized` |
| `--WDS-content-deemphasized` | Inactive Icon Color Variable | `833358` | `@media (prefers-color-scheme: dark){.xfmqtgv.xfmqtgv,...}` | `rgba(255, 255, 255, .6)` |
| `--WDS-content-default` | Active Icon Color Variable | `833454` | `@media (prefers-color-scheme: dark){.xfmqtgv.xfmqtgv,...}` | `#FAFAFA` |


