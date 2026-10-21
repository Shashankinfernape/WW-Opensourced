__d("isElementFixedOrSticky", [
    "getComputedStyle"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t) {
        for(let n = t; n != null;){
            const o = (e || (e = r("getComputedStyle")))(n);
            if (o == null) {
                return false;
            }
            const a = o.getPropertyValue("position");
            if (a === "fixed" || a === "sticky") {
                return true;
            }
            n = n.parentElement;
        }
        return false;
    }
    l.default = s;
}, 98);