__d("WAWebPathfinderPIIFilter", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = /(?:^|[^A-Za-z0-9])(true|false)_/;
    const l = /(?:^|[^A-Za-z0-9])[0-9A-Fa-f]{8,}(?=$|[^A-Za-z0-9])/;
    const s = /\d{6,}/;
    const u = /[^\x20-\x7E]/;
    const c = /^(?:data-testid|id)=[^@]+@[1-5]$/;
    const d = /@[1-5]$/;
    function m(t, n = false) {
        const r = n && c.test(t) ? t.replace(d, "") : t;
        return r.includes("@") || u.test(r) || s.test(r) || l.test(r) || e.test(r);
    }
    i.hasUnsafePathfinderTrackingId = m;
}, 66);