__d("WAArrayMoveToFirst", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        let n;
        let r = false;
        for(n = 0; n < e.length; n++){
            if (e[n] === t) {
                r = true;
                break;
            }
        }
        if (r) {
            const o = e[n];
            e.splice(n, 1);
            e.unshift(o);
        }
    }
    i.default = e;
}, 66);