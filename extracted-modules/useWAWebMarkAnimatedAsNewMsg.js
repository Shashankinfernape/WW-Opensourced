__d("useWAWebMarkAnimatedAsNewMsg", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function d(e, t) {
        const n = o("react-compiler-runtime").c(4);
        const rRef = useRef(false);
        let a;
        let i;
        if (n[0] !== t || n[1] !== e) {
            a = function() {
                if (!rRef.current && e) {
                    rRef.current = true;
                    t(true);
                }
            };
            i = [
                e,
                t
            ];
            n[0] = t;
            n[1] = e;
            n[2] = a;
            n[3] = i;
        } else {
            a = n[2];
            i = n[3];
        }
        useEffect(a, i);
    }
    l.useMarkAnimatedAsNewMsg = d;
}, 98);