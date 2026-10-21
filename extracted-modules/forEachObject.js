__d("forEachObject", [], function(t, n, r, o, a, i) {
    "use strict";
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    function l(t, n, r) {
        for(const o in t){
            const a = o;
            if (hasOwnProperty.call(t, a)) {
                n.call(r, t[a], a, t);
            }
        }
    }
    i.default = l;
}, 66);