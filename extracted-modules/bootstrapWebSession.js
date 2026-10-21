__d("bootstrapWebSession", [
    "WebSession",
    "WebSessionDefaultTimeoutMs",
    "performanceNavigationStart"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = r("performanceNavigationStart")() || e;
        if (Number.isInteger(t)) {
            return t;
        }
        return null;
    }
    let s = false;
    function u(t) {
        if (s !== true) {
            s = true;
            const n = e(t);
            if (n != null && n > 0) {
                o("WebSession").extend(n + r("WebSessionDefaultTimeoutMs"));
            }
        }
    }
    l.default = u;
}, 98);