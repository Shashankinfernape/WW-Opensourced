__d("useWAWebOnScreen", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect: u, useMemo: c, useState: d } = s;
    function m(e) {
        return e.isIntersecting ?? (e.intersectionRatio > 0 || e.intersectionRect && (e.intersectionRect.height > 0 || e.intersectionRect.width > 0));
    }
    function p(e, t) {
        const n = o("react-compiler-runtime").c(5);
        const r = d(false);
        const a = r[0];
        const i = r[1];
        let l;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = new IntersectionObserver(function([t]) {
                return i(m(t));
            });
            n[0] = l;
        } else {
            l = n[0];
        }
        const s = l;
        let c;
        let p;
        if (n[1] !== t || n[2] !== e) {
            c = function() {
                if (!(e == null || e.current == null)) {
                    s.observe(e.current);
                    return function() {
                        t();
                        s.disconnect();
                    };
                }
            };
            p = [
                e,
                s,
                t
            ];
            n[1] = t;
            n[2] = e;
            n[3] = c;
            n[4] = p;
        } else {
            c = n[3];
            p = n[4];
        }
        u(c, p);
        return a;
    }
    l.default = p;
}, 98);