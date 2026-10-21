__d("useVideoPlayerXAPIOutsideVideoPlayerSurface", [
    "emptyObject",
    "react",
    "react-compiler-runtime",
    "useStable"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useRef, useState } = s;
    function d() {
        const e = o("react-compiler-runtime").c(4);
        const t = useState(r("emptyObject"));
        const n = t[0];
        const a = t[1];
        const iRef = useRef(r("emptyObject"));
        let l;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = function() {
                return function(e) {
                    iRef.current = e ?? r("emptyObject");
                    a(e ?? r("emptyObject"));
                };
            };
            e[0] = l;
        } else {
            l = e[0];
        }
        const s = r("useStable")(l);
        const d = s;
        let m;
        if (e[1] !== n || e[2] !== d) {
            m = [
                d,
                n,
                iRef
            ];
            e[1] = n;
            e[2] = d;
            e[3] = m;
        } else {
            m = e[3];
        }
        return m;
    }
    l.useVideoPlayerXAPIOutsideVideoPlayerSurface = d;
}, 98);