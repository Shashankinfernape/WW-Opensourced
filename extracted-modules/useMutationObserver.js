__d("useMutationObserver", [
    "MutationObserver",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useRef } = s;
    function d(callback, t) {
        const nRef = useRef({
            observer: null,
            callback
        });
        const oRef = useRef(null);
        const aRef = useRef({
            element: null,
            options: null,
            observer: null
        });
        const i = useCallback(function() {
            const aRef_current = aRef.current;
            const { element, observer, options } = aRef_current;
            const observer_1 = nRef.current.observer;
            const oRef_current = oRef.current;
            if (element != oRef_current || t != options || observer_1 != observer) {
                if (observer) {
                    observer.disconnect();
                }
                if (observer_1 && oRef_current) {
                    observer_1.observe(oRef_current, t);
                }
                aRef.current = {
                    observer: observer_1,
                    element: oRef_current,
                    options: t
                };
            }
        }, [
            t
        ]);
        if (nRef.current.observer == null || nRef.current.callback !== callback) {
            if (nRef.current.observer != null) {
                nRef.current.observer.disconnect();
            }
            nRef.current = {
                observer: new (r("MutationObserver"))(callback),
                callback
            };
        }
        i();
        return useCallback(function(e) {
            oRef.current = e;
            i();
        }, [
            i
        ]);
    }
    l.default = d;
}, 98);