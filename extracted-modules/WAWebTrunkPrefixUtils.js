__d("WAWebTrunkPrefixUtils", [
    "WACountriesTrunkPrefixes"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const n = r("WACountriesTrunkPrefixes")[e];
        if (n == null) {
            return t;
        }
        for (const o of n){
            if (t.startsWith(o)) {
                return t.substring(o.length);
            }
        }
        return t;
    }
    l.trimTrunkPrefix = e;
}, 98);