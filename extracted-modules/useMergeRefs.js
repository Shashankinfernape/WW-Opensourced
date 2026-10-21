__d("useMergeRefs", [
    "mergeRefs",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useMemo = (e || (e = o("react"))).useMemo;
    function u(...t) {
        return useMemo(function() {
            return r("mergeRefs")(...t);
        }, [].concat(t));
    }
    l.default = u;
}, 98);