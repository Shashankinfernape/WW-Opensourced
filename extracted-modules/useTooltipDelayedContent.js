__d("useTooltipDelayedContent", [
    "clearTimeout",
    "react",
    "setTimeout"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useLayoutEffect, useRef, useState } = s;
    function useM({ delayContentMs, isVisible }) {
        const oRef = useRef(isVisible);
        const aRef = useRef(null);
        const i = useState(function() {
            return isVisible && !oRef.current && delayContentMs > 0;
        });
        const isPending = i[0];
        const s = i[1];
        useLayoutEffect(function() {
            if (isVisible && !oRef.current && delayContentMs > 0) {
                s(true);
                aRef.current = r("setTimeout")(function() {
                    s(false);
                    aRef.current = null;
                }, delayContentMs);
                return function() {
                    const aRef_current = aRef.current;
                    if (aRef_current != null) {
                        r("clearTimeout")(aRef_current);
                    }
                    aRef.current = null;
                };
            }
            if (aRef.current != null) {
                const e = aRef.current;
                s(false);
                r("clearTimeout")(e);
                aRef.current = null;
            }
            oRef.current = isVisible;
        }, [
            delayContentMs,
            isVisible
        ]);
        return {
            isPending
        };
    }
    l.default = useM;
}, 98);