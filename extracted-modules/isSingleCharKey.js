__d("isSingleCharKey", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = /^[a-z0-9/]$/;
    function l(t) {
        if (t != null) {
            return e.test(t);
        }
        return false;
    }
    i.default = l;
}, 66);