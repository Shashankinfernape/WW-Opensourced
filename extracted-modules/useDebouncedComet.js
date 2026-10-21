__d("useDebouncedComet", [
    "CometDebounce",
    "react",
    "useStable"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useLayoutEffect, useRef } = s;
    function m(e, t) {
        const nRef = useRef(e);
        useLayoutEffect(function() {
            nRef.current = e;
        }, [
            e
        ]);
        const o = r("useStable")(function() {
            return r("CometDebounce")(function() {
                nRef.current.apply(undefined, arguments);
            }, t);
        });
        useEffect(function() {
            return function() {
                o.reset();
            };
        }, []);
        return o;
    }
    l.default = m;
}, 98);