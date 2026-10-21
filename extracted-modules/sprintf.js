__d("sprintf", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, ...n) {
        let o = 0;
        return e.replace(/%s/g, ()=>String(n[o++]));
    }
    i.default = e;
}, 66);