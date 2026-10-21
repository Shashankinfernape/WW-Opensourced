__d("WAWebCompactSet", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        for(var n = e.length, r = new Set, o = 0; o < n; ++o){
            const a = t(e[o], o);
            if (a != null) {
                r.add(a);
            }
        }
        return r;
    }
    i.default = e;
}, 66);