__d("WAWebUseUnifiedSession", [
    "WAWebUnifiedSession",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useEffect } = s;
    function d(e) {
        const t = o("react-compiler-runtime").c(7);
        const n = r("useWAWebStableCallback")(e);
        let a;
        if (t[0] !== n) {
            a = function(t) {
                o("WAWebUnifiedSession").UnifiedSessionManager.generateSessionId(t);
                n();
            };
            t[0] = n;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        let l;
        let s;
        if (t[2] !== i) {
            l = function() {
                if (o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId() == null) {
                    i(o("WAWebUnifiedSession").UnifiedSessionGenReason.InitialRender);
                }
            };
            s = [
                i
            ];
            t[2] = i;
            t[3] = l;
            t[4] = s;
        } else {
            l = t[3];
            s = t[4];
        }
        useEffect(l, s);
        let u;
        if (t[5] !== i) {
            u = function() {
                i(o("WAWebUnifiedSession").UnifiedSessionGenReason.Foreground);
            };
            t[5] = i;
            t[6] = u;
        } else {
            u = t[6];
        }
        o("useWAWebListener").useListener(window, "focus", u);
        return i;
    }
    l.useUnifiedSession = d;
}, 98);