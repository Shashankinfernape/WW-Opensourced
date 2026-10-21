__d("useWAWebNewsletterIsSuspended", [
    "WAWebFrontendChatGetters",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                o("WAWebFrontendChatGetters").getNewsletterMetadata
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const a = o("useWAWebChatValues").useChatValues(e.id, n);
        const i = a[0];
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                "change:suspended"
            ];
            t[1] = l;
        } else {
            l = t[1];
        }
        let s;
        if (t[2] !== i?.suspended) {
            s = function() {
                return i?.suspended === true;
            };
            t[2] = i?.suspended;
            t[3] = s;
        } else {
            s = t[3];
        }
        const u = r("useWAWebEventTargetValue")(i, l, s);
        return u;
    }
    l.useNewsletterIsSuspended = e;
}, 98);