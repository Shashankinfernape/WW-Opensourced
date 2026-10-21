__d("useWAWebStableCallback", [
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useRef } = s;
    function useD(e) {
        const tRef = useRef(e);
        tRef.current = e;
        const n = useCallback(function(...n) {
            return tRef.current?.(...n);
        }, []);
        return n;
    }
    l.default = useD;
}, 98);