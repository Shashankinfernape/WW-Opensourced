__d("ReactFbPropTypes", [
    "FbtResultBase",
    "warning"
], function(t, n, r, o, a, i) {
    function e(e) {
        const t = function(r, o, a, i, l, s, u) {
            const t = o[a];
            if (t instanceof n("FbtResultBase")) {
                return null;
            }
            if (r) {
                return e.isRequired(o, a, i, l, s, u);
            }
            return e(o, a, i, l, s, u);
        };
        const r = t.bind(null, false);
        r.isRequired = t.bind(null, true);
        return r;
    }
    i.wrapStringTypeChecker = e;
}, null);