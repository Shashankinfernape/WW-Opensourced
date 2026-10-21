__d("WAWebMomentLocaleResolver", [
    "WAWebLocaleToMomentResource",
    "WAWebParseLocaleSubtags"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = s(e);
        const o = r("WAWebParseLocaleSubtags")(n);
        const { language: a, region: i, script: l } = o;
        const u = [
            n
        ];
        if (a != null && a !== "en") {
            if (i != null) {
                u.push(`${a}-${i}`);
            }
            if (l != null) {
                const d = r("WAWebLocaleToMomentResource")[`${a}-${l}`.toLowerCase()];
                if (d != null) {
                    u.push(d);
                }
            }
            u.push(r("WAWebLocaleToMomentResource")[a] ?? a);
        }
        u.push(s(t));
        return Array.from(new Set(u));
    }
    function s(e) {
        return e.replace(/_/g, "-").toLowerCase();
    }
    l.getMomentLocalesToTry = e;
}, 98);