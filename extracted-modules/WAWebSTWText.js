__d("WAWebSTWText", [
    "WAUnicodeUtils",
    "WAWebURLUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "https://www.google.com/gasearch";
    const s = 2000;
    function u(t) {
        const n = o("WAUnicodeUtils").firstNEncodedBytes(t, s);
        const a = "wa1";
        const i = r("WAWebURLUtils").build(e, {
            ctx: a,
            q: n
        });
        return i;
    }
    function c(t) {
        const n = o("WAUnicodeUtils").firstNEncodedBytes(t, s);
        const a = "wa1";
        const gsas = "1";
        const l = r("WAWebURLUtils").build(e, {
            ctx: a,
            gsas,
            q: n,
            tbm: "ilp"
        });
        return l;
    }
    l.createTextSearchLink = u;
    l.createUrlSearchLink = c;
}, 98);