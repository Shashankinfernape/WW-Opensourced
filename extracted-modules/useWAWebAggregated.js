__d("useWAWebAggregated", [
    "react",
    "useWAWebAggregatedView"
], function(t, n, r, o, a, i, l) {
    let e;
    const useMemo = (e || (e = o("react"))).useMemo;
    function u(e, t) {
        return d(e, t);
    }
    const c = [];
    function d(e, t) {
        const n = o("useWAWebAggregatedView").useAggregatedViewImpl(e, t);
        const r = n[0];
        const a = n[1];
        return useMemo(function() {
            const e = r?.toArray();
            if (!Array.isArray(e) || e.length === 0) {
                return c;
            }
            return e;
        }, [
            r,
            a
        ]);
    }
    l.useAggregated = u;
    l.useOptionalAggregated = d;
}, 98);