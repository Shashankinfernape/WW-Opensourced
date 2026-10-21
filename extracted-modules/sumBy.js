__d("sumBy", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        let n = 0;
        for (const r of e){
            const o = t(r);
            n += o;
        }
        return n;
    }
    i.default = e;
}, 66);