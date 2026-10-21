# WhatsApp Web — 3-Column Adaptive Layout Geometry

This document records the exact measurements, responsive breakpoints, and column formulas for WhatsApp Web, extracted directly from decompiled module `recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js` (`WAWebAdaptiveLayoutConfig`, `WAWebAdaptiveLayoutRoot.react`, `useWAWebAdjustableChatListWidth`), `production.css`, and the live capture viewport evidence (`target_artifacts/whatsapp-web/live-screenshot-evidence.json`).

Every measurement is tagged:
- **[DIRECT]**: Verbatim constant or formula from decompiled module or production CSS.
- **[INFERRED]**: Computed value for the active 1034x737 viewport based on direct formulas.

---

## 1. Ground-Truth Layout Constants (`WAWebAdaptiveLayoutConfig`)

Source: `recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js#L262865`

```javascript
__d("WAWebAdaptiveLayoutConfig", [], function(t, n, r, o, a, i) {
    const e = 64;   // NAVBAR_WIDTH
    const l = 265;  // MIN_CHATLIST_WIDTH
    const s = 380;  // HYBRID_CHATLIST_MAX_WIDTH_PX
    const u = 1210; // WIDE_BREAKPOINT_PX
    const c = 700;  // MID_BREAKPOINT_PX
    const d = 600;  // MIN_CONVERSATION_WIDTH
    const m = 320;  // MIN_RIGHT_DRAWER_WIDTH
    i.NAVBAR_WIDTH = e;
    i.MIN_CHATLIST_WIDTH = l;
    i.HYBRID_CHATLIST_MAX_WIDTH_PX = s;
    i.WIDE_BREAKPOINT_PX = u;
    i.MID_BREAKPOINT_PX = c;
    i.MIN_CONVERSATION_WIDTH = d;
    i.MIN_RIGHT_DRAWER_WIDTH = m;
}, 66);
```

| Tag | Parameter | Value | CSS Token / Property | Source File & Line |
| :--- | :--- | :--- | :--- | :--- |
| **[DIRECT]** | `NAVBAR_WIDTH` | `64px` | `--navbar-width: 64px;` | `chunk_10#L262865`, `production.css#L1` |
| **[DIRECT]** | `MIN_CHATLIST_WIDTH` | `265px` | `min-width: 265px;` | `chunk_10#L262865` |
| **[DIRECT]** | `HYBRID_CHATLIST_MAX_WIDTH_PX` | `380px` | `max-width: 380px;` | `chunk_10#L262865` |
| **[DIRECT]** | `WIDE_BREAKPOINT_PX` | `1210px` | Layout mode breakpoint (`wide`) | `chunk_10#L262865`, `chunk_10#L1697175` |
| **[DIRECT]** | `MID_BREAKPOINT_PX` | `700px` | Layout mode breakpoint (`mid`) | `chunk_10#L262865`, `chunk_10#L1697282` |
| **[DIRECT]** | `MIN_CONVERSATION_WIDTH` | `600px` | `min-width: 600px;` | `chunk_10#L262865`, `chunk_10#L1698256` |
| **[DIRECT]** | `MIN_RIGHT_DRAWER_WIDTH` | `320px` | `min-width: 320px;` | `chunk_10#L262865`, `chunk_10#L1698317` |

---

## 2. Dynamic Column Sizing Formulas

### Column 1: Left Navigation Rail
- **Width**: Verbatim fixed `64px` (`flex: 0 0 64px; width: 64px;`).
- **Background**: `--navbar-background: var(--WDS-surface-emphasized);` (`#202c33` in dark theme).
- **Z-Index**: `100`.

### Column 2: Chat List Panel
- **Adaptive Width Formula** (`useWAWebAdjustableChatListWidth` in `chunk_10#L1701709`):
  ```css
  width: clamp(265px, 1200%/35, 380px);
  /* or flex: 0 0 380px (mid/wide desktop standard) */
  ```
- **Header Height**: `59px` (CSS: `height: 59px; padding: 10px 16px; border-bottom: 1px solid var(--border-default);`).
- **Search Bar Container**: `height: 49px; padding: 6px 12px;`.
- **Search Input Box**: `height: 35px; border-radius: 8px; background: var(--panel-input-background, #202c33);`.
- **Chat List Item Height**: `72px` (`min-height: 72px; padding: 0 16px;`).
- **Avatar Size**: `49px x 49px` circle (`border-radius: 50%`).

### Column 3: Conversation / Message Pane
- **Width Formula**: `flex: 1 1 0; min-width: 0; width: calc(100% - 64px - 380px);`.
- **Header Height**: `59px` (`height: 59px; padding: 10px 16px; border-bottom: 1px solid var(--border-default);`).
- **Conversation Wallpaper Area**:
  - Base background color: `#161717` (`chunk_01#L2237a192...`).
  - Doodle SVG Mask: `url(/assets/doodle.svg)` (`target_artifacts/whatsapp-web/assets/doodle.svg`).
  - Mask Size: `540px 960px` (standard density) / `412.5px 749.25px` (high-DPI) (`chunk_17#L393994f1...`).
  - Mask Repeat: `repeat`.
  - Effective Opacity: `0.06` (6%) in dark mode.
- **Message Bubble Geometry**:
  - Max Width: `65%` (`.xggofmx { max-width: 65% }` in `chunk_10#L918601`).
  - Bubble Corner Radius (Untailed): `7.5px` (`--xdsiky0: 7.5px;`).
  - Bubble Corner Radius (Tailed Top Corner): `0px` (`--xbjhqfc: 0px;`).
  - Tail Dimensions: `width: 8px; height: 13px; top: 0;`
    - Incoming Tail: `left: -8px;`
    - Outgoing Tail: `right: -8px;`
  - Spacing: `2px` between consecutive same-sender messages; `12px` between different senders.
- **Message Composer Input Bar**:
  - Container Height: `min-height: 62px; padding: 5px 16px;`.
  - Background: `var(--compose-panel-background, #202c33)`.
  - Input Field: `border-radius: 8px; background: var(--panel-input-background, #2a3942); min-height: 42px; padding: 9px 12px;`.

---

## 3. Evaluated Geometry & Conflict Resolution at Live Viewport (1034px x 737px)

From `target_artifacts/whatsapp-web/live-screenshot-evidence.json#L25`:
- **Viewport Width**: `1034px`
- **Viewport Height**: `737px`
- **Active Layout Mode**: `"mid"` (`MID_BREAKPOINT_PX (700) <= 1034 < WIDE_BREAKPOINT_PX (1210)`)

### The `MIN_CONVERSATION_WIDTH` (600px) vs 590px Conflict Resolution:
1. **The Origin of the 590px Calculation**:
   The static upper bound `HYBRID_CHATLIST_MAX_WIDTH_PX = 380px` was incorrectly treated as a fixed column width. If the Chat List were fixed at 380px:
   `1034px - 64px (NAVBAR) - 380px (CHATLIST) = 590px`, which is 10px less than `MIN_CONVERSATION_WIDTH = 600px`.
2. **The Actual Ground-Truth Runtime Formula** (`useWAWebAdjustableChatListWidth` in `chunk_10#L1701709`):
   When the chatlist custom width is not manually dragged (`L == null`), the chatlist width is dynamically computed as:
   ```javascript
   clamp(MIN_CHATLIST_WIDTH, 1200%/35, HYBRID_CHATLIST_MAX_WIDTH_PX)
   ```
   At viewport width `1034px`:
   - `1200% / 35 = 34.2857%`
   - `34.2857% * 1034px = 354.51px`
   - `clamp(265px, 354.51px, 380px) = 354.51px` (~`355px`)
3. **Evaluated Column Widths at 1034px**:
   - **Col 1 (Navbar)**: `64px` (`flex: 0 0 64px;`)
   - **Col 2 (Chat List)**: `354.51px` (`flex: 0 0 354.51px;`)
   - **Col 3 (Conversation Pane)**: `1034px - 64px - 354.51px = 615.49px` (~`615px`)
   - **Constraint Check**: `615.49px >= 600px` (`MIN_CONVERSATION_WIDTH`) — **Satisfied with 15.49px margin**.
4. **Mid-Breakpoint Right Drawer Behavior**:
   In `mid` mode (`700 <= width < 1210`), the right context drawer does NOT occupy horizontal flex space side-by-side with the conversation pane; it is rendered `position: "absolute"; insetInlineEnd: 0; width: calc(100% - ...)`, overlaying the conversation pane from the right side.

| Column | Computed Width at 1034px | Percentage of Viewport | Visibility & Layout Mode |
| :--- | :--- | :--- | :--- |
| **Col 1: Left Navigation Rail** | `64px` | `6.19%` | Fixed (`flex: 0 0 64px`) |
| **Col 2: Chat List Panel** | `354.51px` (~`355px`) | `34.29%` | Responsive (`1200%/35`) |
| **Col 3: Conversation Pane** | `615.49px` (~`615px`) | `59.52%` | Dynamic (`calc(100% - 418.51px)`) |
| **Drawer: Right Context Panel** | `0px` (or overlay) | `0.00%` | Closed / Absolute overlay |
| **Total Viewport** | `1034px` | `100.00%` | Complete |
