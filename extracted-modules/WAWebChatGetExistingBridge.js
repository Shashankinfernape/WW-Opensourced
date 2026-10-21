__d("WAWebChatGetExistingBridge", [
    "WAWebChatCollection",
    "WAWebChatFindBridge",
    "WAWebNewsletterCollection",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebChatCollection").ChatCollection.get(e);
            if (t && !t.stale) {
                return t;
            }
            const n = e.isNewsletter();
            if (n) {
                const a = r("WAWebNewsletterCollection").get(e);
                if (a != null && !a.stale) {
                    return r("WAWebNewsletterCollection").get(e);
                }
            }
            const i = yield o("WAWebChatFindBridge").findLocal(e.toString());
            if (i) {
                if (n) {
                    return r("WAWebNewsletterCollection").gadd(i);
                }
                return o("WAWebChatCollection").ChatCollection.gadd(i);
            }
            return null;
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return o("WAWebChatCollection").ChatCollection.get(e) ?? (e.isNewsletter() ? r("WAWebNewsletterCollection").get(e) : undefined);
    }
    l.getExisting = e;
    l.getChatOrNewsletter = u;
}, 98);