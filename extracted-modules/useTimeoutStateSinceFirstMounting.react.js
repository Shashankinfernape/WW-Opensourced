__d("useTimeoutStateSinceFirstMounting.react", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef, useState } = s;
    function m(e) {
        const t = o("react-compiler-runtime").c(2);
        const n = useState(e <= 0);
        const r = n[0];
        const a = n[1];
        const iRef = useRef(e);
        const lRef = useRef(false);
        let s;
        let m;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            s = function() {
                const e = window.setTimeout(function() {
                    if (!lRef.current) {
                        lRef.current = true;
                        a(true);
                    }
                }, iRef.current);
                return function() {
                    window.clearTimeout(e);
                };
            };
            m = [];
            t[0] = s;
            t[1] = m;
        } else {
            s = t[0];
            m = t[1];
        }
        useEffect(s, m);
        return r;
    }
    l.default = m;
}, 98);