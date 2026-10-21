__d("useWAWebViewAllRepliesReplyCount", [
    "WAWebThreadMsgUtils",
    "countWhere",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useState } = s;
    function d(e, t) {
        return r("countWhere")(e.msgs.getModelsArray(), function(e) {
            return o("WAWebThreadMsgUtils").isMsgInThread(e, t);
        });
    }
    function useM(e, t) {
        const n = o("react-compiler-runtime").c(6);
        let r;
        if (n[0] !== e || n[1] !== t) {
            r = function() {
                if (e != null && t != null) {
                    return d(e, t);
                }
                return 0;
            };
            n[0] = e;
            n[1] = t;
            n[2] = r;
        } else {
            r = n[2];
        }
        const a = r;
        const i = useState(e);
        const l = i[0];
        const s = i[1];
        const u = useState(t);
        const m = u[0];
        const p = u[1];
        const _ = useState(a);
        const f = _[0];
        const g = _[1];
        if (e !== l || t !== m) {
            s(e);
            p(t);
            g(a());
        }
        let h;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            h = [
                "add",
                "remove",
                "bulk_add"
            ];
            n[3] = h;
        } else {
            h = n[3];
        }
        let y;
        if (n[4] !== a) {
            y = function() {
                g(a());
            };
            n[4] = a;
            n[5] = y;
        } else {
            y = n[5];
        }
        o("useWAWebListener").useListener(e != null && t != null ? e.msgs : null, h, y);
        return f;
    }
    l.default = useM;
}, 98);