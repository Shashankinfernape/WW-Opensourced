# WhatsApp Web — Message Bubble Grouping & Tail Rules

Extracted from decompiled module `chunk_17_7Tf0qWLsuo3__bundle.js` and `chunk_10_3nzqNpHbcmc__bundle.js`.

## 1. Tail Rendering Rules
- **Component Identifier**: `WAWebSvgComponentBase.BaseSvgSpan` with names `"tail-in"` and `"tail-out"`.
- **Dimensions**: ViewBox `0 0 8 13`, width `8px`, height `13px`.
- **Path Definitions**:
  - `tail-in`: `d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"`
  - `tail-out`: `d="M5.188,2.568L0,11.193V0h5.188c1.77,0,2.338,1.156,1.279,2.568z"`
- **Shadow Underlay**: `<path className="x5eawxs" fill="#0000000" d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"/>`

## 2. Grouping & Tail Suppression Conditions
1. **First Message in Group (`isFirstInGroup = true`)**:
   - Outgoing: Displays `tail-out` at top-right (`right: -8px; top: 0;`), with top-right border radius `0px` and top-left border radius `8px`.
   - Incoming: Displays `tail-in` at top-left (`left: -8px; top: 0;`), with top-left border radius `0px` and top-right border radius `8px`.
2. **Subsequent Messages in Group (`isFirstInGroup = false`)**:
   - Tail is suppressed (no SVG attached).
   - All corners retain uniform `8px` border radius.
   - Reduced vertical spacing between consecutive same-sender messages (`2px` vs `12px` between different senders).
3. **Date / Day Boundary**:
   - Whenever `msg.timestamp` crosses into a new day relative to the previous message, a centered date separator (`data-testid="date-separator"`) is rendered.
   - Any active cluster is terminated, and the next message is treated as `isFirstInGroup = true`.
4. **Sender Boundary**:
   - A change between `sender === 'me'` and `sender === 'them'` terminates the active cluster immediately.
