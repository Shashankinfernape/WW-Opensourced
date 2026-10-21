__d("usePrevious", [
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function useD(e) {
        const tRef = useRef(null);
        useEffect(function() {
            tRef.current = e;
        }, undefined);
        return tRef.current;
    }
    l.default = useD;
}, 98);