__d("useDelayedState", [
    "clearTimeout",
    "emptyFunction",
    "react",
    "react-compiler-runtime",
    "setTimeout"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback: u, useEffect: c, useRef: d, useState: m } = s;
    function p(e) {
        const t = o("react-compiler-runtime").c(5);
        const n = m(e);
        const a = n[0];
        const i = n[1];
        const l = d(null);
        let s;
        let u;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            s = function() {
                return function() {
                    return r("clearTimeout")(l.current ?? void 0);
                };
            };
            u = [];
            t[0] = s;
            t[1] = u;
        } else {
            s = t[0];
            u = t[1];
        }
        c(s, u);
        let p;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            p = function(t, n, o) {
                const a = n === void 0 ? 0 : n;
                const s = o === void 0 ? r("emptyFunction") : o;
                r("clearTimeout")(l.current ?? void 0);
                l.current = null;
                if (a === 0) {
                    i(t);
                    s(t);
                } else {
                    l.current = r("setTimeout")(function() {
                        i(t);
                        s(t);
                        l.current = null;
                    }, a);
                }
            };
            t[2] = p;
        } else {
            p = t[2];
        }
        const _ = p;
        let f;
        if (t[3] !== a) {
            f = [
                a,
                _
            ];
            t[3] = a;
            t[4] = f;
        } else {
            f = t[4];
        }
        return f;
    }
    l.default = p;
}, 98);