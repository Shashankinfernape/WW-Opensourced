__d("useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED", [
    "clearTimeout",
    "err",
    "react",
    "setTimeout"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function useD(e, t) {
        const nRef = useRef(null);
        const oRef = useRef();
        useEffect(function() {
            const nRef_current = nRef.current;
            if (nRef_current !== null) {
                r("clearTimeout")(nRef_current);
                nRef.current = null;
            } else {
                oRef.current = e();
            }
            return function() {
                function e() {
                    nRef.current = null;
                    const oRef_current = oRef.current;
                    if (oRef_current) {
                        oRef_current();
                    }
                }
                nRef.current = r("setTimeout")(e, 0);
            };
        }, []);
    }
    l.default = useEffect;
}, 98);