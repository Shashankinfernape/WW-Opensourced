__d("WAHashStringToNumber", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        let t = 0;
        for(let n = 0; n < e.length; n++){
            const r = e.charCodeAt(n);
            t = (t << 5) - t + r;
            t |= 0;
        }
        return Math.abs(t);
    }
    i.hashStringToNumber = e;
}, 66);