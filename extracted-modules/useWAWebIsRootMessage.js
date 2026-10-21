__d("useWAWebIsRootMessage", [
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u(e, t) {
        const n = o("react-compiler-runtime").c(7);
        let r;
        if (n[0] !== e || n[1] !== t) {
            r = function() {
                return t?.hasThreadForMsgKey(e.id) ?? null;
            };
            n[0] = e;
            n[1] = t;
            n[2] = r;
        } else {
            r = n[2];
        }
        const a = useState(r);
        const i = a[0];
        const l = a[1];
        let u;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            u = [
                "add",
                "reset"
            ];
            n[3] = u;
        } else {
            u = n[3];
        }
        let c;
        if (n[4] !== e || n[5] !== t) {
            c = function() {
                l(t?.hasThreadForMsgKey(e.id) ?? null);
            };
            n[4] = e;
            n[5] = t;
            n[6] = c;
        } else {
            c = n[6];
        }
        o("useWAWebListener").useListener(t, u, c);
        return i;
    }
    l.default = u;
}, 98);