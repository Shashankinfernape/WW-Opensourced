__d("setHostSubdomain", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        const n = e.split(".");
        if (n.length < 3) {
            n.unshift(t);
        } else {
            n[0] = t;
        }
        return n.join(".");
    }
    i.default = e;
}, 66);