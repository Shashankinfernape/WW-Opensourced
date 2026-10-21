__d("WAWebMaybeInsertHistoryBundleInfo", [
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebMsgGetters",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(e.unsafe()) != null;
        const a = t ? o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(t.unsafe()) != null : false;
        if (n && !a) {
            const bundleKey = o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(e.unsafe());
            const l = o("WAWebMsgGetters").getGroupHistoryBundleSender(e.unsafe());
            if (l != null && bundleKey != null && r("WAWebWid").equals(bundleKey.remote, e.id.remote)) {
                const s = o("WAWebContactCollection").ContactCollection.get(l);
                return {
                    type: "historyBundleInfo",
                    authorName: s ? o("WAWebFrontendContactGetters").getDisplayName(s) : l.toString(),
                    bundleKey
                };
            }
        }
        return null;
    }
    l.default = e;
}, 98);