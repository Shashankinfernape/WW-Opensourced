__d("useCustomEqualityMemo", [
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function d(e, t) {
        const nRef = useRef(e);
        const r = t(nRef.current, e) ? nRef.current : e;
        useEffect(function() {
            nRef.current = r;
        }, [
            r
        ]);
        return r;
    }
    l.default = d;
}, 98);