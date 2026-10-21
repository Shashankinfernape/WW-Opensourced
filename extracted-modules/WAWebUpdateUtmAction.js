__d("WAWebUpdateUtmAction", [
    "WAWebCTWAGatingUtils",
    "WAWebChatUtmCache",
    "WAWebUtmBizPrefs"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (o("WAWebCTWAGatingUtils").isUtmTrackingEnabled()) {
            const n = e.toString();
            o("WAWebUtmBizPrefs").persistUtmtoLocalStorage(n, t);
            r("WAWebChatUtmCache").deleteChatId(n);
        }
    }
    function s(e) {
        const t = e.toString();
        o("WAWebUtmBizPrefs").removeUtmFromLocalStorage(t);
        r("WAWebChatUtmCache").read(t);
    }
    function u(e) {
        if (!o("WAWebCTWAGatingUtils").isUtmTrackingEnabled()) {
            return null;
        }
        const t = e.toString();
        if (r("WAWebChatUtmCache").hasRead(t)) {
            return null;
        }
        const n = o("WAWebUtmBizPrefs").getUtmFromLocalStorage(t);
        if (n == null) {
            r("WAWebChatUtmCache").read(t);
        }
        return n;
    }
    l.addUtmToChat = e;
    l.clearUtmAfterMessageSent = s;
    l.getUtmForChat = u;
}, 98);