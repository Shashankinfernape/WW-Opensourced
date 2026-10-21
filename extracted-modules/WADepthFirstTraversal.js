__d("WADepthFirstTraversal", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(t, n, r) {
        const o = n(t);
        o.forEach((t)=>e(t, n, r));
        r(t);
    }
    i.default = e;
}, 66);