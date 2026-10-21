__d("useDynamicCallbackDANGEROUS", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useLayoutEffect, useRef } = s;
    function m(e) {
        const t = o("react-compiler-runtime").c(4);
        const nRef = useRef(e);
        let r;
        let a;
        if (t[0] !== e) {
            r = function() {
                nRef.current = e;
            };
            a = [
                e
            ];
            t[0] = e;
            t[1] = r;
            t[2] = a;
        } else {
            r = t[1];
            a = t[2];
        }
        useLayoutEffect(r, a);
        let i;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            i = function(...t) {
                return nRef.current(...t);
            };
            t[3] = i;
        } else {
            i = t[3];
        }
        return i;
    }
    l.default = m;
}, 98);