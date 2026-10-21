__d("useWAWebCallbackOnce", [
    "once",
    "react",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const useMemo = (e || (e = o("react"))).useMemo;
    function useU(e, t = []) {
        const n = r("useWAWebStableCallback")(e);
        const o = useMemo(function() {
            return r("once")(n);
        }, [
            n
        ].concat(t));
        return o;
    }
    l.default = useU;
}, 98);