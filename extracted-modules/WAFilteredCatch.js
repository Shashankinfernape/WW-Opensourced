__d("WAFilteredCatch", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        return function(n) {
            const r = Array.isArray(e) ? e.some((e)=>n instanceof e) : n instanceof e;
            if (r) {
                return t(n);
            }
            throw n;
        };
    }
    i.filteredCatch = e;
}, 66);