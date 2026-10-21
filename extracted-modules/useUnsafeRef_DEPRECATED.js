__d("useUnsafeRef_DEPRECATED", [
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useMemo = (e || (e = o("react"))).useMemo;
    function u(current) {
        return useMemo(function() {
            return {
                current
            };
        }, []);
    }
    l.default = u;
}, 98);