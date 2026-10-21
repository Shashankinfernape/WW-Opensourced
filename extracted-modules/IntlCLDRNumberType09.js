__d("IntlCLDRNumberType09", [
    "IntlVariations"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        getVariation: function(t) {
            if (t === 1) {
                return r("IntlVariations").NUMBER_ONE;
            }
            return r("IntlVariations").NUMBER_OTHER;
        }
    };
    l.default = e;
}, 98);