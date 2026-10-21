__d("useWAWebStableArrayModelState", [
    "react",
    "react-compiler-runtime",
    "useStable"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useRef, useState } = s;
    const m = (t)=>t.id.toString();
    function useP() {
        const e = o("react-compiler-runtime").c(4);
        const t = r("useStable")(f);
        const n = useState();
        const a = n[0];
        const i = n[1];
        let l;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = new Map;
            e[0] = l;
        } else {
            l = e[0];
        }
        const sRef = useRef(l);
        let u;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            u = function(t) {
                const e = t.reduce(_, "");
                const n = sRef.current.get(e);
                if (n == null) {
                    sRef.current.set(e, t);
                    i(t);
                } else {
                    i(n);
                }
            };
            e[1] = u;
        } else {
            u = e[1];
        }
        const m = u;
        const p = a ?? t;
        let g;
        if (e[2] !== p) {
            g = [
                p,
                m
            ];
            e[2] = p;
            e[3] = g;
        } else {
            g = e[3];
        }
        return g;
    }
    function _(e, t) {
        return e + m(t);
    }
    function f() {
        return [];
    }
    l.default = useP;
}, 98);