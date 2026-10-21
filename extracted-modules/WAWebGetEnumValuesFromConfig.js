__d("WAWebGetEnumValuesFromConfig", [
    "compactMap"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ config: t, enumCastFunction: n }) {
        const o = new Set;
        const a = t.split(",").map((e)=>Number.parseInt(e.trim(), 10)).filter((e)=>Number.isSafeInteger(e));
        return r("compactMap")(a, function(e) {
            if (o.has(e)) {
                return null;
            }
            o.add(e);
            return n(e);
        });
    }
    l.getEnumValuesFromConfig = e;
}, 98);