__d("filterMap", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        const n = new Map;
        for (const [o, a] of e){
            if (t(a, o)) {
                n.set(o, a);
            }
        }
        return n;
    }
    i.default = e;
}, 66);