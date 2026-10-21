__d("getScrollParent", [
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        let n = getComputedStyle(e);
        const o = n.position === "absolute";
        const a = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
        if (n.position === "fixed") {
            return r("nullthrows")(document.body);
        }
        for(let i = e.parentElement; i != null; i = i.parentElement){
            n = getComputedStyle(i);
            if (!(o && n.position === "static") && a.test(n.overflow + n.overflowY + n.overflowX) && i instanceof HTMLElement) {
                return i;
            }
        }
        return r("nullthrows")(document.body);
    }
    l.default = e;
}, 98);