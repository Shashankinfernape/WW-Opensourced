__d("useWAWebWaPlusBenefitJourneyLogger", [
    "WAWebWaPlusBenefitJourneyLogger",
    "react-compiler-runtime",
    "useLazyRef"
], function(t, n, r, o, a, i, l) {
    function e(benefitType, surface, source) {
        const a = o("react-compiler-runtime").c(4);
        let i;
        if (a[0] !== benefitType || a[1] !== source || a[2] !== surface) {
            i = function() {
                return new (o("WAWebWaPlusBenefitJourneyLogger")).WaPlusBenefitJourneyLogger({
                    benefitType,
                    surface,
                    source
                });
            };
            a[0] = benefitType;
            a[1] = source;
            a[2] = surface;
            a[3] = i;
        } else {
            i = a[3];
        }
        return r("useLazyRef")(i);
    }
    l.default = e;
}, 98);