__d("getToastDurationFromTextLength", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 10000;
    function l(t, n) {
        const o = n?.getMinimumDurationMs() ?? e;
        return Math.max(o, t.length * 150);
    }
    i.default = l;
}, 66);