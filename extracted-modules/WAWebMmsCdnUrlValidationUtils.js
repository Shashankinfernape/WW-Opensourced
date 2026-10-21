__d("WAWebMmsCdnUrlValidationUtils", [
    "WATimeUtils"
], function(t, n, r, o, a, i, l) {
    const e = {
        OE: "oe"
    };
    function s(t) {
        const n = t instanceof URL ? t.searchParams : new URL(t).searchParams;
        const r = n.get(e.OE);
        const expirationDate = r == null ? undefined : o("WATimeUtils").convertHexToDate(r);
        return {
            expirationDate
        };
    }
    l.parseCdnUrlParams = s;
}, 98);