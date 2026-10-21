# WhatsApp Web — Tick State Machine & ACK Enumeration

Extracted from decompiled modules:
- `chunk_05_Sp7m9vtWcB2__bundle.js` (`WDSIconWdsIcRead`, `WDSIconWdsIcDelivered`, `WDSIconWdsIcStatusPending`)
- `chunk_10_3nzqNpHbcmc__bundle.js` (`conversation-preview-messages`, `msg-dblcheck`, `msg-check`)
- `chunk_19_36kJFHJBFHp__bundle.js` (`ack`, `ackBlue: { color: "x1rv0e52" }`)

## 1. ACK / MsgStatus Progression Table

| Numeric ACK | State Name | Visual Representation | SVG Icon Component | Color Token / Class |
| :--- | :--- | :--- | :--- | :--- |
| **0** | `CLOCK` / `PENDING` | Clock dial | `wds-ic-status-pending` | `rgba(233, 237, 239, 0.6)` |
| **1** | `SENT` | Single grey checkmark | `wds-ic-delivered` (`testid: "msg-check"`) | `rgba(233, 237, 239, 0.6)` |
| **2** | `RECEIVED` | Double grey checkmark | `wds-ic-read` (`testid: "msg-dblcheck"`) | `rgba(233, 237, 239, 0.6)` |
| **3** | `READ` | Double blue checkmark | `wds-ic-read` (`testid: "msg-dblcheck"`) | `#53bdeb` (StyleX: `x1rv0e52`) |
| **4** | `PLAYED` | Double blue checkmark / microphone | `wds-ic-read` | `#53bdeb` (StyleX: `x1rv0e52`) |

## 2. Icon Vector Definitions
- **`wds-ic-status-pending`** (Clock):
  `viewBox: "0 0 24 24"`, `d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm1-13h-2v6h6v-2h-4z"`
- **`wds-ic-delivered`** (Single Tick):
  `viewBox: "0 0 24 24"`, `d="M16.14 5.86a1 1 0 0 0-1.41.15l-7.99 9.86-3.25-3.29a.99.99 0 0 0-1.41 0 .99.99 0 0 0 0 1.41l4.03 4.09c.19.19.45.3.71.3h.05a1 1 0 0 0 .73-.37l8.41-10.45a1 1 0 0 0-.15-1.41l-.01-.01Z"`
- **`wds-ic-read`** (Double Tick):
  `viewBox: "0 0 24 24"`, `d="M14.73 6.01a1 1 0 0 1 1.41-.15l.01.01a1 1 0 0 1 .15 1.41L7.6 18.01a1 1 0 0 1-.73.37h-.05c-.26 0-.52-.11-.71-.3l-4.03-4.09a.99.99 0 0 1 0-1.41.99.99 0 0 1 1.41 0l3.25 3.29 7.99-9.86Zm5.71.12a1 1 0 0 1 1.41-.15h-.01a1 1 0 0 1 .15 1.41l-8.41 10.45a1 1 0 0 1-.73.37h-.05a1 1 0 0 1-.71-.3l-1.36-1.26a.55.55 0 0 1-.02-.81l.56-.68c.21-.2.53-.21.75-.03l.71.58 7.71-9.58Z"`
