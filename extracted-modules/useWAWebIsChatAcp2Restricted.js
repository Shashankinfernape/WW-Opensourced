__d("useWAWebIsChatAcp2Restricted", [
    "WAWebFrontendChatGetters",
    "WAWebLimitSharingGatingUtils",
    "react-compiler-runtime",
    "useWAWebChatValues"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                o("WAWebFrontendChatGetters").getAcp2Setting
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const r = o("useWAWebChatValues").useOptionalChatValues(e?.id, n);
        if (e == null || r == null) {
            return false;
        }
        const a = r[0];
        let i;
        if (t[1] !== a || t[2] !== e) {
            i = o("WAWebLimitSharingGatingUtils").isAcp2RestrictedSetting(e, a);
            t[1] = a;
            t[2] = e;
            t[3] = i;
        } else {
            i = t[3];
        }
        return i;
    }
    l.default = e;
}, 98);