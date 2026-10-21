__d("IntlVariationResolverImpl", [
    "invariant",
    "FbtHooks",
    "IntlNumberType",
    "IntlVariations"
], function(t, n, r, o, a, i, l) {
    let e;
    const EXACTLY_ONE = "_1";
    const u = {
        EXACTLY_ONE,
        getNumberVariations: function(r) {
            const t = n("IntlNumberType").get((e || (e = n("FbtHooks"))).getViewerContext().locale).getVariation(r);
            if (!(t & n("IntlVariations").BITMASK_NUMBER)) {
                l(0, 11647, t, typeof t);
            }
            if (r === 1) {
                return [
                    EXACTLY_ONE,
                    t,
                    "*"
                ];
            }
            return [
                t,
                "*"
            ];
        },
        getGenderVariations: function(t) {
            if (!(t & n("IntlVariations").BITMASK_GENDER)) {
                l(0, 11648, t, typeof t);
            }
            return [
                t,
                "*"
            ];
        }
    };
    a.exports = u;
}, null);