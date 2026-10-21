__d("useLayoutAnimationEvents", [
    "LayoutAnimationBoundaryContext",
    "LayoutAnimationEvents",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useContext, useEffect, useRef } = s;
    function m(e) {
        const t = o("react-compiler-runtime").c(7);
        const n = useContext(r("LayoutAnimationBoundaryContext"));
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [];
            t[0] = a;
        } else {
            a = t[0];
        }
        const iRef = useRef(a);
        let l;
        if (t[1] !== n?.animationEventTargets || t[2] !== e) {
            l = function() {
                const t = n?.animationEventTargets || [];
                t.forEach((t)=>{
                    const n = t.addListener(o("LayoutAnimationEvents").LAYOUT_ANIMATION_EVENT, e);
                    iRef.current = [].concat(iRef.current, [
                        n
                    ]);
                });
                return function() {
                    iRef.current.forEach(p);
                    iRef.current = [];
                };
            };
            t[1] = n?.animationEventTargets;
            t[2] = e;
            t[3] = l;
        } else {
            l = t[3];
        }
        let s;
        if (t[4] !== n || t[5] !== e) {
            s = [
                e,
                n
            ];
            t[4] = n;
            t[5] = e;
            t[6] = s;
        } else {
            s = t[6];
        }
        useEffect(l, s);
    }
    function p(e) {
        e.remove();
    }
    l.default = m;
}, 98);