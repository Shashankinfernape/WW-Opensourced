__d("fbs", [
    "fbt",
    "invariant",
    "FbtHooks",
    "FbtPureStringResult"
], function(t, n, r, o, a, i, l, s, u) {
    let e;
    const c = {};
    const d = babelHelpers.extends({}, s, {
        _param: function(t, n, o) {
            if (!(typeof n === "string" || n instanceof r("FbtPureStringResult"))) {
                u(0, 11709, n, typeof n);
            }
            return s._param(t, n, o);
        },
        _plural: function(t, n, o) {
            if (!(o == null || typeof o === "string" || o instanceof r("FbtPureStringResult"))) {
                u(0, 47119, o, typeof o);
            }
            return s._plural(t, n, o);
        },
        _wrapContent: function(n, o, a, i) {
            const t = typeof n === "string" ? [
                n
            ] : n;
            const l = (e || (e = r("FbtHooks"))).getErrorListener({
                hash: a,
                translation: o
            });
            return e.getFbsResult({
                contents: t,
                errorListener: l,
                extraOptions: i,
                patternHash: a,
                patternString: o
            });
        },
        cachedResults: c
    });
    l.default = d;
}, 98);