__d("useWAWebCountries", [
    "WAWebCountriesUtils",
    "WAWebL10N",
    "react-compiler-runtime",
    "useWAWebAsync",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_filterType = e.filterType;
        const a = r("useWAWebEventTargetValue")(r("WAWebL10N"), "locale_change", s);
        let i;
        if (t[0] !== e_filterType) {
            i = function() {
                return o("WAWebCountriesUtils").getCountries({
                    filter: e_filterType
                });
            };
            t[0] = e_filterType;
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] !== e_filterType || t[3] !== a) {
            l = [
                e_filterType,
                a
            ];
            t[2] = e_filterType;
            t[3] = a;
            t[4] = l;
        } else {
            l = t[4];
        }
        return r("useWAWebAsync")(i, l);
    }
    function s() {
        return r("WAWebL10N").getNormalizedLocale();
    }
    l.useCountries = e;
}, 98);