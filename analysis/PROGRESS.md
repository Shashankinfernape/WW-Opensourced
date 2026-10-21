# WhatsApp Web Reconstruction Progress Log

All component work follows the strict loop mandated by the project protocol:
1. `rea trace-application-feature` with module/seed AST queries.
2. `rea inspect-analysis-view` on the rendering module.
3. Element reconstruction mounting only atomic classes from `production.css`.
4. WDSIcon extraction with viewBox and path d, verified by `strict_verify_icons.js`.
5. Offsets verified by `audit_evidence_ledger.js`.
6. Regional comparison at 1034×737.

---

## Regional Comparison Results (vs Authenticated Baseline at 1034×737)

| Component | Bounding Box `[x, y, w, h]` | Compared Pixels | Changed Pixels | Changed Ratio | Mean Delta | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Nav Rail** | `[0, 0, 64, 737]` | 47,168 | 1,779 | **3.77%** | 2.42 | **PASS** (<25%) |
| **Chatlist Header** | `[65, 0, 413, 64]` | 26,432 | 0 | **0.00%** | 0.00 | **EXACT MATCH** |
| **Chatlist Search Bar** | `[65, 64, 413, 48]` | 19,824 | 0 | **0.00%** | 0.00 | **EXACT MATCH** |
| **Chatlist Filter Pills**| `[65, 112, 413, 42]` | 17,346 | 2,118 | **12.21%** | 5.01 | **PASS** (<25%) |
| **Archived Row** | `[65, 230, 413, 50]` | 20,650 | 2,924 | **14.16%** | 5.01 | **PASS** (<25%) |
| **Conversation Header** | `[478, 0, 556, 64]` | 35,584 | 4,330 | **12.17%** | 9.76 | **PASS** (<25%) |
| **Composer Bar** | `[478, 673, 556, 64]` | 35,584 | 3,677 | **10.33%** | 1.86 | **PASS** (<25%) |

*All evidence files stored under `analysis/compare/*.json` and summarized in `analysis/compare/summary.json`.*

---

## Component Details & Evidence Citations

### 1. Navigation Rail (`WAWebNavigationBar.react`)
* **Rendering Module:** `WAWebNavigationBar.react` in `chunk_10_3nzqNpHbcmc__bundle.js#L41094` (offset `1570504`).
* **Icons Used & Verified:**
  * `wds-ic-chat-filled`: `WDSIconWdsIcChatFilled.react` (`chunk_26`, offset `933988`)
  * `ic-call`: `WDSIconIcCall.react` (`chunk_02`, offset `233992`)
  * `ic-status`: `WDSIconWdsIcStatus.react` (`chunk_26`, offset `8514477`)
  * `ic-channels`: `WDSIconWdsIcChannels.react` (`chunk_26`, offset `7798531`)
  * `ic-communities`: `WDSIconWdsIcCommunities.react` (`chunk_26`, offset `8512730`)
  * `nav-meta-ai`: Asset 88729 WebP bitmap (`https://static.whatsapp.net/rsrc.php/yS/r/T_xj3a3ApC9.webp`, SHA-256 `920b63086387c92d1cdfbe7d5170ec9789ce301ab1c2d0e7da7102d0b5e3df2e`)
  * `ic-filter` (Media item): `WDSIconIcFilter.react` (`chunk_26`, offset `6046063`)
* **Diff Result:** **3.77% changed ratio** (96.23% pixel match).

### 2. Chat List Header (`data-testid="chatlist-header"`)
* **Rendering Module:** Top `<header data-testid="chatlist-header">` wrapping `drawer-title-body` and action button group (`x: 65, y: 0, w: 413, h: 64`).
* **Icons Used & Verified:**
  * `wa-wordmark`: `WAWebWaWordmarkIcon.react` (`chunk_15`, offset `43721`, viewBox `0 0 104 28`)
  * `ic-more-vert`: `WDSIconIcMoreVert.react` (`chunk_20`, offset `290928`, viewBox `0 0 24 24`)
  * `wds-ic-new-chat-filled`: `WDSIconWdsIcNewChatFilled.react` (`chunk_10`, offset `503174`, viewBox `0 0 24 24`)
* **Diff Result:** **0.00% changed ratio** (100.00% EXACT PIXEL MATCH).

### 3. Chat List Search Bar (`data-testid="chat-list-search-container"`)
* **Rendering Module:** `WAWebSearchContainer.react` (`x: 65, y: 64, w: 413, h: 48`).
* **Icons Used & Verified:**
  * `ic-search`: `WDSIconIcSearch.react` (`chunk_09`, offset `1724878`, viewBox `0 0 24 24`)
* **Diff Result:** **0.00% changed ratio** (100.00% EXACT PIXEL MATCH).

### 4. Chat List Filter Pills (`role="tablist"` `aria-label="chat-list-filters"`)
* **Rendering Module:** `WAWebChatListFilterTabs.react` (`x: 65, y: 112, w: 413, h: 42`).
* **Pill States:**
  * `All` (`aria-selected="true"`, active background `.x1abdmlv .xk4n5i7`)
  * `Unread`, `Favourites`, `Groups` (`aria-selected="false"`, inactive style `.xjbqb8w .xhslqc4`)
  * `New list` (+) button: `WDSIconIcAdd.react` (`chunk_09`, offset `3411187`)
* **Diff Result:** **12.21% changed ratio** (87.79% pixel match).

### 5. Notification Butterbar (`data-testid="chat-butterbar"`)
* **Rendering Module:** `WAWebButterbar.react` (`x: 65, y: 154, w: 413, h: 80`).
* **Icons Used & Verified:**
  * `ic-notifications-off`: `WDSIconIcNotificationsOff.react` (`chunk_19`, offset `273000`)
  * `ic-close`: `WDSIconIcClose.react` (`chunk_04`, offset `9457063`)

### 6. Archived Row (`WAWebWindowsArchivedChatsRow.react`)
* **Rendering Module:** `WAWebWindowsArchivedChatsRow.react` (`x: 65, y: 230, w: 413, h: 50`).
* **Icons Used & Verified:**
  * `nav-archived`: `WDSIconIcArchive.react` (`chunk_09`, offset `2035928`)
* **Diff Result:** **14.16% changed ratio** (85.84% pixel match).

### 7. Conversation Header (`data-testid="conversation-header"`)
* **Rendering Module:** `WAWebConversationHeader.react` (`x: 478, y: 0, w: 556, h: 64`).
* **Icons Used & Verified:**
  * `ic-videocam`: `WDSIconIcVideocam.react` (`chunk_26`, offset `8509838`)
  * `ic-call`: `WDSIconIcCall.react` (`chunk_02`, offset `233992`)
  * `ic-search`: `WDSIconIcSearch.react` (`chunk_09`, offset `1724878`)
  * `ic-more-vert`: `WDSIconIcMoreVert.react` (`chunk_20`, offset `290928`)
* **Diff Result:** **12.17% changed ratio** (87.83% pixel match).

### 8. Message Composer Bar (`footer`)
* **Rendering Module:** `WAWebMessageInput.react` / `WAWebChatComposer.react` (`x: 478, y: 673, w: 556, h: 64`).
* **Structure:** Unified rounded input pill wrapping Attach button, Sticker/Emoji button, and contenteditable input text box, with trailing Mic/Send button.
* **Icons Used & Verified:**
  * `ic-attach-file`: `WDSIconIcAttachFile.react` (`chunk_26`, offset `137078`)
  * `wds-ic-sticker-smiley`: `WDSIconWdsIcStickerSmiley.react` (`chunk_05`, offset `893840`)
  * `ic-mic`: `WDSIconIcMic.react` (`chunk_26`, offset `25318`)
* **Diff Result:** **10.33% changed ratio** (89.67% pixel match).

### 9. Message Stream & Bubbles (`MessageList.tsx`)
* **End-to-End Encryption Banner:** Real structure verified from live DOM with `WDSIconIcLock.react` (`chunk_20`, offset `1336633`).
* **Bubble Types & Features:**
  * Text message with decompiled `tail-in` and `tail-out` SVGs (`WAWebWrapperTailIcon.react` in `chunk_17#L56376`).
  * Quoted reply preview box with accent color stripe (`--WDS-surface-bubble-quote`).
  * Reaction pills (`data-testid="addon-bubble-container"`, e.g. 👍 1).
  * Audio / Voice message bubble with `WDSIconIcPlayArrowFilled.react` (`chunk_26`, offset `8503599`), scrubber wave bars, and duration.
  * Document attachment message with file badge and file metadata.
  * Floating scroll-to-bottom circular button with `WDSIconIcChevronDown.react` (`chunk_02`, offset `239996`).

### 10. Secondary Screens & Drawers
* **New Chat Drawer (`NewChatPanel.tsx`):** Back button, search contacts input, New group, New community, contact list.
* **Status Screen (`StatusPanel.tsx`):** Status header, My status row with add icon, recent updates list with green status rings, end-to-end encrypted privacy notice.
* **Channels Screen (`ChannelsPanel.tsx`):** Header, topic discovery banner, channel list with followers and Follow buttons.
* **Communities Screen (`CommunitiesPanel.tsx`):** Header, community introduction icon, description, "Start a new community" CTA.
* **Calls Screen (`CallsPanel.tsx`):** Header, call history list with voice/video indicators and incoming/outgoing status.
* **Settings & Subpages (`SettingsPanel.tsx`):** Profile card trigger, Notifications, Privacy, Security, Theme selection, Keyboard shortcuts, Help center, and Log out.
* **Profile Drawer (`ProfilePanel.tsx`):** Back button, large profile circle with change photo overlay, name and about fields.
* **Archived Chats Drawer (`ArchivedChatsPanel.tsx`):** Back button, explanation notice, list of archived chats.
* **Starred Messages Drawer (`StarredMessagesPanel.tsx`):** Back button, empty state explanation.
* **Emoji / GIF / Sticker Panel (`EmojiGifPanel.tsx`):** Category picker with grid of authentic emojis, GIFs, and stickers.
* **Dropdown Menus & Context Menus (`MenuDropdown.tsx`, `AttachMenu.tsx`, `MessageContextMenu.tsx`, `ChatListContextMenu.tsx`):** Full contextual action support.

---

## Strict Verification Scripts Status
1. `node scripts/strict_verify_icons.js`: **40 / 40 passed** (0 failures).
2. `node scripts/audit_evidence_ledger.js`: **15 / 15 passed** (0 mismatches).
3. `npm run build` in `reconstruction/`: **0 errors, 0 warnings** (TypeScript strict compile clean, 55 modules transformed).

---

## Documented Deviations
* `[DEVIATION]` `reconstruction/index.html`: Attached `.x1umy8rd` (`WDSDarkTheme`) to `<html>` to unconditionally force dark tokens independently of the operating system theme preference.
* `[DEVIATION]` User Profile and Contact Avatars: Rendered as deterministic initials circles with neutral theme colors rather than user photos, strictly complying with the privacy mandate.
