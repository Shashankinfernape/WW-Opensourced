__d("WAFilterObjectNullishProps", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        const t = {};
        for (const [r, o] of Object.entries(e)){
            if (o != null) {
                t[r] = o;
            }
        }
        return t;
    }
    i.filterObjectNullishProps = e;
}, 66);