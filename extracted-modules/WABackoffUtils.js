__d("WABackoffUtils", [
    "WAPromiseDelays"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r = 0.1) {
        let o;
        if (e === 0) {
            o = n || 0;
        } else {
            o = Math.pow(2, e);
        }
        if (Number.isFinite(t) && o > t) {
            o = t;
        }
        if (typeof n === "number" && Number.isFinite(n) && o < n) {
            o = n;
        }
        if (r) {
            o *= 1 + r * Math.random();
        }
        return o;
    }
    function s(t, n, r, a = 0.1) {
        return o("WAPromiseDelays").delayMs(Math.floor(1000 * e(t, n, r, a)));
    }
    l.expBackoff = e;
    l.expDelaySec = s;
}, 98);