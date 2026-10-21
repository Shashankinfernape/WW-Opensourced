__d("useWAWebMeasure", [
    "WAWebResizeObserver",
    "react",
    "react-compiler-runtime",
    "useWAWebDebouncedCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useLayoutEffect: u, useState: c } = s;
    const d = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(6);
        const n = e === void 0 ? 100 : e;
        const a = c(null);
        const i = a[0];
        const l = a[1];
        const s = c(d);
        const m = s[0];
        const p = s[1];
        const _ = r("useWAWebDebouncedCallback")(p, n);
        let f;
        let g;
        if (t[0] !== i || t[1] !== _) {
            f = function() {
                if (i) {
                    return o("WAWebResizeObserver").observe(i, _);
                }
            };
            g = [
                i,
                _
            ];
            t[0] = i;
            t[1] = _;
            t[2] = f;
            t[3] = g;
        } else {
            f = t[2];
            g = t[3];
        }
        u(f, g);
        let h;
        if (t[4] !== m) {
            h = [
                l,
                m
            ];
            t[4] = m;
            t[5] = h;
        } else {
            h = t[5];
        }
        return h;
    }
    l.default = m;
}, 98);