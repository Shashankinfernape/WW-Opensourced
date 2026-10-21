__d("isSameOrigin", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        if (!e.getProtocol() || !e.getDomain() || !t.getProtocol() || !t.getDomain()) {
            return false;
        }
        return e.getOrigin() === t.getOrigin();
    }
    i.default = e;
}, 66);