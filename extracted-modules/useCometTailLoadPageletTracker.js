__d("useCometTailLoadPageletTracker", [
    "CometTailLoadLogger",
    "intersectionObserverEntryIsIntersecting",
    "react",
    "useCometRouteTracePolicy"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useRef } = s;
    function useD(e, t, n) {
        const aRef = useRef(null);
        const iRef = useRef(false);
        const lRef = useRef(null);
        const s = r("useCometRouteTracePolicy")();
        return useCallback(function(u) {
            if (u == null) {
                lRef.current?.();
                lRef.current = null;
                return;
            }
            if (n === true && e != null && t != null && aRef.current !== u) {
                aRef.current = u;
                const c = function(a) {
                    a.forEach((n)=>{
                        if (r("intersectionObserverEntryIsIntersecting")(n) && !iRef.current) {
                            iRef.current = true;
                            if (lRef.current != null) {
                                lRef.current();
                            }
                            lRef.current = null;
                            o("CometTailLoadLogger").logMarkerEnd(e, t, n.time, 2, s);
                        }
                    });
                };
                const d = new IntersectionObserver(c);
                d.observe(u);
                lRef.current = function() {
                    aRef.current = null;
                    d.disconnect();
                };
            }
        }, [
            e,
            t,
            n
        ]);
    }
    l.default = useD;
}, 98);