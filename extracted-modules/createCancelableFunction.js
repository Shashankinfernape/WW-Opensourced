__d("createCancelableFunction", [
    "emptyFunction"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        let t = e;
        const n = function(...n) {
            return t.apply(this, n);
        };
        n.cancel = function() {
            t = r("emptyFunction");
        };
        return n;
    }
    l.default = e;
}, 98);