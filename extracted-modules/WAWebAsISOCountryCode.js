__d("WAWebAsISOCountryCode", [
    "WAWebCountriesNativeCountryNames"
], function(t, n, r, o, a, i, l) {
    const e = new Map(Object.entries(r("WAWebCountriesNativeCountryNames")).map(([t])=>[
            t,
            t
        ]));
    function s(t) {
        return e.get(t);
    }
    l.asISOCountryCode = s;
}, 98);