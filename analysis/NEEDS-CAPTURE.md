# Screens & Views Requiring Live CDP Capture

According to project scope rules:
> Only screens that have a signed-in capture or baseline on disk may be diffed. For any screen without one, do not guess. Add it to `analysis/NEEDS-CAPTURE.md` (what must be opened in live Chrome) and do not proceed with blind diffs.

---

## 1. Signed-In 3-Column Chat Shell (Primary Target)

* **Current Status:** Captured & Verified on disk.
  * Evidence JSON: `target_artifacts/whatsapp-web/live-screenshot-evidence.json`
  * Artifact JSON: `target_artifacts/whatsapp-web/live-screenshot-artifact.json` (SHA-256: `962213507030cd8f9e9651574a27ed51cbd3994adcf889b98ace44d02cd68a4a`)
  * Full-res PNG: `target_artifacts/whatsapp-web/live-screenshot.png` (1034×737, 103,149 bytes)
* **Target URL:** `https://web.whatsapp.com/` (authenticated session).
* **Viewport Geometry:** `1034 × 737` (exact viewport dimensions).

### Required UI State in Live Chrome:
1. **Column 1: Left Navigation Rail (`[0, 0, 64, 737]`)**
   * Default state: Chats tab active (selected), Calls, Status, Channels, Communities, Meta AI, Settings, and Profile visible.
2. **Column 2: Chat List Panel (`[64, 0, 355, 737]`)**
   * Top search and filter bar ("Search or start a new chat", unread filter button).
   * Archived chats row (if archive exists).
   * Offline / Sync banner (if offline sync state is active).
   * Chat list items (contact avatar, name, last message preview, timestamp, double checkmark ack).
3. **Column 3: Conversation Panel (`[419, 0, 615, 737]`)**
   * Chat header: Contact avatar, name, online / last seen status, audio call button, video call button, search icon, menu icon.
   * Message area: Wallpaper background (`doodle.svg` mask over `#161717` base at 6% opacity), outgoing green bubble (`#144D37`), incoming dark bubble (`#242626`), tails, delivery ticks (`#53BDEB`).
   * Composer bar: Emoji / sticker picker button, attach (+) button, text input box, microphone button (dynamic send button).

### Instructions to Capture via Chrome CDP (`127.0.0.1:9222`):
1. Launch Chrome with remote debugging on port 9222:
   ```bash
   chrome.exe --remote-debugging-port=9222 --user-data-dir="chrome-profile" "https://web.whatsapp.com"
   ```
2. Scan QR code to complete authentication. Ensure browser viewport is sized to `1034 × 737`.
3. Capture the baseline via REA:
   ```bash
   rea capture-web-screenshot http://127.0.0.1:9222 <WHATSAPP_TARGET_ID> --json > target_artifacts/whatsapp-web/live-screenshot-evidence.json
   jq '.normalized_result.artifact' target_artifacts/whatsapp-web/live-screenshot-evidence.json > target_artifacts/whatsapp-web/live-screenshot-artifact.json
   ```
   Or save the screenshot directly to `target_artifacts/whatsapp-web/live-screenshot.png`.

---

## 2. Interactive States & Drawers Requiring Capture

1. **Status Viewer Drawer / Mid-Drawer**
   * Action: Click Status icon on navigation rail.
2. **Channels / Newsletters Panel**
   * Action: Click Channels icon on navigation rail.
3. **Communities Panel**
   * Action: Click Communities icon on navigation rail.
4. **Settings Drawer**
   * Action: Click Settings icon on navigation rail.
5. **New Chat Drawer**
   * Action: Click New Chat icon in chat list header.
