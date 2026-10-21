__d("useWAWebAggregatedMultiple", [
    "WALogger",
    "react",
    "useWAWebAggregatedView"
], function(t, n, r, o, a, i, l) {
    let s;
    const u = s || (s = o("react"));
    const { useEffect, useMemo, useRef } = u;
    const p = [];
    function useComponent(e, t) {
        const nRef = useRef(null);
        useEffect(function() {
            nRef.current != null && nRef.current;
            nRef.current = t;
        }, [
            t
        ]);
        const r = t.map((t)=>o("useWAWebAggregatedView").useAggregatedViewImpl(e, t));
        const a = r.reduce((acc, [n, r])=>acc + r, 0);
        return useMemo(function() {
            const e = r.reduce((acc, [n])=>{
                if (n == null) {
                    return acc;
                }
                return acc.concat(n.toArray());
            }, []);
            if (e.length === 0) {
                return p;
            }
            return e;
        }, [
            a
        ]);
    }
    l.useAggregatedMultiple = useComponent;
}, 98);