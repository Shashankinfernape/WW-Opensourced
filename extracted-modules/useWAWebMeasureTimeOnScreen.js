__d("useWAWebMeasureTimeOnScreen", [
    "react",
    "react-compiler-runtime",
    "useWAWebOnScreen"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useEffect, useRef } = s;
    function useM(e, t) {
        const n = o("react-compiler-runtime").c(6);
        const aRef = useRef(null);
        let i;
        if (n[0] !== t) {
            i = function() {
                const aRef_current = aRef.current;
                if (aRef_current != null) {
                    t(Date.now() - aRef_current);
                    aRef.current = null;
                }
            };
            n[0] = t;
            n[1] = i;
        } else {
            i = n[1];
        }
        const s = r("useWAWebOnScreen")(e, i);
        let u;
        let m;
        if (n[2] !== t || n[3] !== s) {
            u = function() {
                const aRef_current = aRef.current;
                if (s && aRef_current == null) {
                    aRef.current = Date.now();
                }
                if (!s && aRef_current != null) {
                    t(Date.now() - aRef_current);
                    aRef.current = null;
                }
            };
            m = [
                t,
                s
            ];
            n[2] = t;
            n[3] = s;
            n[4] = u;
            n[5] = m;
        } else {
            u = n[4];
            m = n[5];
        }
        useEffect(u, m);
    }
    l.default = useM;
}, 98);