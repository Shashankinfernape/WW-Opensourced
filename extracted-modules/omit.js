__d("omit", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        const n = new Set(t);
        const r = {};
        for (const o of Object.keys(e)){
            if (!n.has(o)) {
                r[o] = e[o];
            }
        }
        return r;
    }
    i.default = e;
}, 66);