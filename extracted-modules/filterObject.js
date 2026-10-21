__d("filterObject", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = Object.prototype.hasOwnProperty;
    function l(t, n, r) {
        if (!t) {
            return null;
        }
        const o = {};
        for(const a in t){
            if (e.call(t, a) && n.call(r, t[a], a, t)) {
                o[a] = t[a];
            }
        }
        return o;
    }
    i.default = l;
}, 66);