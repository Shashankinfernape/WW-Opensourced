__d("getComputedStyle", [
    "getDefaultViewForNode"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const n = r("getDefaultViewForNode")(e);
        if (n == null) {
            return null;
        }
        return n.getComputedStyle(e, t);
    }
    l.default = e;
}, 98);