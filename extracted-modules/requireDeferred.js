__d("requireDeferred", [
    "RDRequireDeferredReference"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {};
    function s(t, n) {
        e[t] = n;
    }
    function u(t) {
        return e[t];
    }
    function c(e) {
        const t = u(e);
        if (t) {
            return t;
        }
        const n = new (r("RDRequireDeferredReference"))(e);
        n.setRequireDeferredForDisplay(false);
        s(e, n);
        return n;
    }
    l.default = c;
}, 98);