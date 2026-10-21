__d("useStable", [
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useRef = (e || (e = o("react"))).useRef;
    function useU(e) {
        const tRef = useRef(null);
        const tRef_current = tRef.current;
        if (tRef_current === null) {
            const r = e();
            tRef.current = {
                value: r
            };
            return r;
        } else {
            return tRef_current.value;
        }
    }
    l.default = useU;
}, 98);