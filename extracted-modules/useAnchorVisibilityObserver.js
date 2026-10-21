__d("useAnchorVisibilityObserver", [
    "react",
    "react-compiler-runtime",
    "useVisibilityObserver"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useImperativeHandle: u, useRef: c, useState: d } = s;
    function m() {
        const e = o("react-compiler-runtime").c(4);
        const t = d(true);
        const n = t[0];
        const a = t[1];
        let i;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                onIntersection: function({ entry: e }) {
                    if (e.intersectionRatio < 0.5) {
                        a(false);
                    } else {
                        a(true);
                    }
                },
                options: {
                    thresholdOverride: "MODERATE"
                }
            };
            e[0] = i;
        } else {
            i = e[0];
        }
        const l = r("useVisibilityObserver")(i);
        const s = c(null);
        let m;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            m = function() {
                return s.current;
            };
            e[1] = m;
        } else {
            m = e[1];
        }
        u(l, m);
        let p;
        if (e[2] !== n) {
            p = [
                s,
                n
            ];
            e[2] = n;
            e[3] = p;
        } else {
            p = e[3];
        }
        return p;
    }
    l.default = m;
}, 98);