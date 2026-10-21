__d("WAArrayInterleave", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        const n = [];
        const r = e.length;
        const o = t.length;
        for(let a = Math.max(r, o), i = 0; i < a; i++){
            if (i < r) {
                n.push(e[i]);
            }
            if (i < o) {
                n.push(t[i]);
            }
        }
        return n;
    }
    i.default = e;
}, 66);