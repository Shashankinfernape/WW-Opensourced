__d("countWhere", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        let n = 0;
        for (const r of e){
            if (t(r)) {
                ++n;
            }
        }
        return n;
    }
    i.default = e;
}, 66);