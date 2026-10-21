__d("useWAWebChatPreviewState", [
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebFrontendChatGetters",
    "WAWebMsgGetters",
    "react-compiler-runtime",
    "useWAWebChatValues"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                o("WAWebFrontendChatGetters").getPreviewMessage,
                o("WAWebChatGetters").getPendingInitialLoading,
                o("WAWebChatGetters").getPreviewT
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const r = o("useWAWebChatValues").useChatValues(e.id, n);
        const a = r[0];
        const i = r[1];
        const l = r[2];
        const s = a;
        let u = s == null && i;
        const c = l;
        if (!o("WAWebCmd").Cmd.isOfflineDeliveryEnd && c != null) {
            if (s == null) {
                u = true;
            } else {
                u = o("WAWebMsgGetters").getT(s) < c;
            }
        }
        let d;
        if (t[1] !== s || t[2] !== u) {
            d = [
                s,
                u
            ];
            t[1] = s;
            t[2] = u;
            t[3] = d;
        } else {
            d = t[3];
        }
        return d;
    }
    l.useChatPreviewState = e;
}, 98);