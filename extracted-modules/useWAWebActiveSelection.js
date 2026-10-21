__d("useWAWebActiveSelection", [
    "WAWebDomScroll",
    "WAWebFocusTracer",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useRef, useState } = s;
    function d(e, t, n) {
        const a = o("react-compiler-runtime").c(3);
        const i = n ?? ((n)=>(e == null || e.getter == null ? undefined : e.getter(n)) === t);
        const lRef = useRef(null);
        const s = useState(false);
        const d = s[0];
        const m = s[1];
        const p = e?.value != null ? i(e.value) : false;
        if (d !== p) {
            m(p);
        }
        let _;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            _ = function(t, n) {
                if (t === "focus") {
                    const e = lRef.current;
                    if (e) {
                        r("WAWebFocusTracer").focus(e);
                        if (n) {
                            o("WAWebDomScroll").scrollIntoViewIfNeeded(e);
                        }
                    }
                }
                m(!!t);
            };
            a[0] = _;
        } else {
            _ = a[0];
        }
        o("useWAWebListener").useListener(e, t, _);
        let g;
        if (a[1] !== d) {
            g = [
                lRef,
                d
            ];
            a[1] = d;
            a[2] = g;
        } else {
            g = a[2];
        }
        return g;
    }
    l.default = d;
}, 98);