__d("range", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
        const r = n == null || n === 0 ? e < t ? 1 : -1 : n;
        let o = -1;
        for(var a = Math.max(Math.ceil((t - e) / r), 0), i = Array(a), l = e; a--;){
            i[++o] = l;
            l += r;
        }
        return i;
    }
    i.default = e;
}, 66);