__d("useWAWebFocusOnMount", [
    "WAWebFocusTracer",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect: u, useRef: c } = s;
    function d() {
        const e = o("react-compiler-runtime").c(2);
        const t = c();
        let n;
        let a;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = function() {
                r("WAWebFocusTracer").focus(t.current);
            };
            a = [];
            e[0] = n;
            e[1] = a;
        } else {
            n = e[0];
            a = e[1];
        }
        u(n, a);
        return t;
    }
    l.default = d;
}, 98);