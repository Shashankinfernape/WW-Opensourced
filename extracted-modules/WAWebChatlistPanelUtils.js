__d("WAWebChatlistPanelUtils", [
    "WAWebChatLockUtils",
    "WAWebChatlistPanelMode",
    "WAWebEnvironment"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ hideLockedChats, lockedChatsEntryPointVisible, mode, searchQuery, selectableState, showMultiSelectBar }) {
        if (mode !== r("WAWebChatlistPanelMode").Chatlist || selectableState?.isSelectable === true || showMultiSelectBar || !o("WAWebChatLockUtils").shouldShowChatLockEntryPoints()) {
            return false;
        }
        if (r("WAWebEnvironment").isWindows === true) {
            return lockedChatsEntryPointVisible && hideLockedChats === true;
        }
        return lockedChatsEntryPointVisible || hideLockedChats === false && searchQuery.isEmptyQuery() && !searchQuery.hasFilter();
    }
    l.shouldShowLockedChatsPanel = e;
}, 98);