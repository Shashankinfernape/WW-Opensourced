__d("WAWebAuthAgentAffiliationUtils", [
    "WAPhoneFindCC",
    "WAWebWid",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e == null) {
            return null;
        }
        const t = o("WAPhoneFindCC").extractDigits(e);
        if (t === "") {
            return null;
        }
        const n = `${t}@c.us`;
        if (r("WAWebWid").isWid(n)) {
            return o("WAWebWidFactory").createUserWidOrThrow(n);
        }
        return null;
    }
    l.getAuthAgentParentWid = e;
}, 98);