__d("extractOpesMidsFromError", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        const n = [];
        if (Array.isArray(e?.opes_mids)) {
            n.push(...e.opes_mids);
        }
        if (Array.isArray(e?.mids)) {
            n.push(...e.mids);
        }
        if (Array.isArray(e?.source?.opes_mids)) {
            n.push(...e.source.opes_mids);
        }
        if (typeof e?.mid === "string") {
            n.push(e.mid);
        }
        return n;
    }
    i.default = e;
}, 66);