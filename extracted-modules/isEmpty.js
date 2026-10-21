__d("isEmpty", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
        if (Array.isArray(e)) {
            return e.length === 0;
        }
        if (typeof e === "object") {
            if (e) {
                if (!(!u(e) || e.size === undefined)) {
                    s(0, 1445);
                }
                for(const t in e){
                    return false;
                }
            }
            return true;
        } else {
            return !e;
        }
    }
    function u(e) {
        if (typeof Symbol === "undefined") {
            return false;
        }
        return e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] != null;
    }
    l.default = e;
}, 98);