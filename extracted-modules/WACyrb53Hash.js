__d("WACyrb53Hash", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t = 0) {
        let n = 3735928559 ^ t;
        let r = 1103547991 ^ t;
        let a;
        for(let o = 0; o < e.length; o++){
            a = e.charCodeAt(o);
            n = Math.imul(n ^ a, 2654435761);
            r = Math.imul(r ^ a, 1597334677);
        }
        n = Math.imul(n ^ n >>> 16, 2246822507) ^ Math.imul(r ^ r >>> 13, 3266489909);
        r = Math.imul(r ^ r >>> 16, 2246822507) ^ Math.imul(n ^ n >>> 13, 3266489909);
        return 4294967296 * (2097151 & r) + (n >>> 0);
    }
    i.default = e;
}, 66);