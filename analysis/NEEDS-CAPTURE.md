# Screens & Views Capture Status

According to project scope rules:
> Only screens that have a signed-in capture or baseline on disk may be diffed. For any screen without one, do not guess. Add it to `analysis/NEEDS-CAPTURE.md` and do not proceed with blind diffs.

---

## 1. Verified Live CDP Captures on Disk (Excluded from Git)

The following components and states were driven over CDP on port 9223 with real input events (`Input.dispatchMouseEvent`) and compared against the reconstruction:

1. **Navigation Rail (`WAWebNavigationBar.react`):** `3.77%` diff ratio (`live-nav-rail-artifact.json`).
2. **Chat List Header (`WAWebChatListHeader.react`):** `0.00%` diff ratio (`live-chatlist-header-artifact.json`).
3. **Chat List Search Bar (`WAWebSearchContainer.react`):** `0.00%` diff ratio (`live-chatlist-search-bar-artifact.json`).
4. **Chat List Filter Pills (`WAWebChatListFilterTabs.react`):** `12.21%` diff ratio (`live-chatlist-filter-pills-artifact.json`).
5. **Notification Butterbar (`WAWebButterbar.react`):** Verified geometry and icon assets.
6. **Archived Row (`WAWebWindowsArchivedChatsRow.react`):** `14.16%` diff ratio (`live-archived-row-artifact.json`).
7. **Conversation Header (`WAWebConversationHeader.react`):** `12.17%` diff ratio (`live-chat-header-artifact.json`).
8. **Message Composer Bar (`WAWebMessageInput.react`):** `10.33%` diff ratio (`live-composer-artifact.json`).
9. **Status Panel (`WAWebStatusPanel.react`):** `5.66%` diff ratio (`live-status-panel-full-artifact.json`).
10. **Communities Panel (`WAWebCommunitiesPanel.react`):** `12.22%` diff ratio (`live-communities-panel-full-artifact.json`).
11. **Channels Panel (`WAWebNewslettersPanel.react`):** `19.39%` diff ratio (`live-channels-panel-full-artifact.json`).
12. **Calls Panel (`WAWebCallsPanel.react`):** `20.46%` diff ratio (`live-calls-panel-full-artifact.json`).
13. **Chat Row Hover State:** `64.64%` diff ratio (`live-chat-row-hover-crop-artifact.json`).
14. **Chat Row Selected State:** `70.65%` diff ratio (`live-chat-row-selected-crop-artifact.json`).
15. **Conversation Context Menu:** `69.49%` diff ratio (`live-chat-menu-crop-artifact.json`).
16. **Attach Menu:** `71.84%` diff ratio (`live-attach-menu-crop-artifact.json`).
17. **Wallpaper & Bubbles Area:** `47.35%` / `54.87%` diff ratio (`live-wallpaper-area-crop-artifact.json`, `live-bubbles-structure-crop-artifact.json`).
18. **Responsive 1440px Layout:** `0.12%` side header diff, `4.52%` rail diff (`live-1440-side-artifact.json`).
19. **Responsive 600px Layout:** `7.93%` side header diff, `6.75%` rail diff (`live-600-side-artifact.json`).

---

## 2. Inferred Screens Requiring Phone-Side or Modal Interaction (`[INFERRED]`)

The following screens could not be captured live without disrupting the user's primary authenticated session or requiring phone-side action. They are fully reconstructed from decompiled AST models and marked as `[INFERRED]`:

1. **Settings Subpages Drawer (`SettingsPanel.tsx`):**
   * Reason: Live settings pages contain account-level personal phone number, linked devices list, and two-factor configuration requiring manual verification.
   * Modules used: `chunk_10#L40410`.
2. **Profile Edit Drawer (`ProfilePanel.tsx`):**
   * Reason: Live user profile editing requires account modification actions.
   * Modules used: `chunk_10#L39269`.
3. **New Chat Contact Selection Drawer (`NewChatPanel.tsx`):**
   * Reason: Reading user's entire live phone contact address book is blocked by privacy mandate.
   * Modules used: `chunk_10#L503174`.
4. **Archived Chats List Drawer (`ArchivedChatsPanel.tsx`):**
   * Reason: Live account has no active chats inside the archive folder.
   * Modules used: `chunk_09#L2035928`.
5. **Starred Messages Drawer (`StarredMessagesPanel.tsx`):**
   * Reason: Live account has 0 starred messages.
   * Modules used: `chunk_10#L39400`.
6. **Live Voice / Video Call Overlay:**
   * Reason: Requires placing a live WebRTC audio/video call to a real contact phone.
   * Modules used: `chunk_02#L233992`.
