__d("MakeHasteTranslationsMap", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = {};
    function u(t) {
        Object.assign(e, t);
    }
    function c(t) {
        if (!(t in e)) {
            s(0, 62571, t);
        }
        return e[t];
    }
    l.setBatch = u;
    l.get = c;
}, 98);