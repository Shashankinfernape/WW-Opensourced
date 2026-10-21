__d("WAWebNewsletterViewModeUIUtils", [
    "WAWebMessageAssociationUIUtils",
    "WAWebViewMode.flow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t = o("WAWebViewMode.flow").ViewModeSurface.CHAT) {
        const n = o("WAWebMessageAssociationUIUtils").getHiddenViewModeMessagesForChat(e, t);
        const r = n.map((e)=>e.serverId).filter(Boolean);
        return new Set(r);
    }
    l.getHiddenMessageServerIdsForChat = e;
}, 98);