__d("flattenPHPQueryData", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
        return u(e, "", {});
    }
    function u(e, t, n) {
        if (e == null) {
            n[t] = undefined;
        } else if (typeof e === "object") {
            if (typeof e.appendChild === "function") {
                s(0, 2616);
            }
            for(const r in e){
                if (r !== "$$typeof" && Object.prototype.hasOwnProperty.call(e, r) && e[r] !== undefined) {
                    u(e[r], t ? `${t}[${r}]` : r, n);
                }
            }
        } else {
            n[t] = e;
        }
        return n;
    }
    l.default = e;
}, 98);