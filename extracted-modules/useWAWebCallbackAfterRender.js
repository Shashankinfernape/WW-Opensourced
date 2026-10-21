__d("useWAWebCallbackAfterRender", [
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useLayoutEffect, useRef } = s;
    function useD(e) {
        const tRef = useRef(null);
        useLayoutEffect(function() {
            if (tRef.current) {
                const e = tRef.current;
                tRef.current = null;
                e();
            }
        }, e);
        return function(e) {
            tRef.current = e;
        };
    }
    l.default = useD;
}, 98);