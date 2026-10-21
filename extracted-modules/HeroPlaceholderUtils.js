__d("HeroPlaceholderUtils", [
    "PromiseAnnotate"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = 0;
    function u() {
        return String(s++);
    }
    function c(t) {
        if (t != null && t.size > 0) {
            return Array.from(t).map((t)=>{
                const n = (e || (e = o("PromiseAnnotate"))).getDisplayName(t);
                return n ?? "Promise";
            }).join(",");
        }
        return null;
    }
    l.getSimpleUUID = u;
    l.createThenableDescription = c;
}, 98);