__d("WAWebWindowSizeProvider.react", [
    "WAWebWindowSizeContext",
    "react",
    "react-compiler-runtime",
    "useWAWebDebouncedCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback: c, useEffect: d, useState: m } = u;
    function p(e) {
        const t = o("react-compiler-runtime").c(8);
        const n = e.children;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = _();
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = m(a);
        const l = i[0];
        const u = i[1];
        let c;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            c = function() {
                u(_());
            };
            t[1] = c;
        } else {
            c = t[1];
        }
        const f = r("useWAWebDebouncedCallback")(c, 10);
        let g;
        let h;
        if (t[2] !== f) {
            g = function() {
                const e = f;
                window.addEventListener("resize", e, true);
                return function() {
                    window.removeEventListener("resize", e, true);
                };
            };
            h = [
                f
            ];
            t[2] = f;
            t[3] = g;
            t[4] = h;
        } else {
            g = t[3];
            h = t[4];
        }
        d(g, h);
        let y;
        if (t[5] !== n || t[6] !== l) {
            const Component = r("WAWebWindowSizeContext").Provider;
            y = <Component value={l}>{n}</Component>;
            t[5] = n;
            t[6] = l;
            t[7] = y;
        } else {
            y = t[7];
        }
        return y;
    }
    function _() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
    l.default = p;
}, 98);