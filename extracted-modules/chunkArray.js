__d("chunkArray", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        const n = [];
        for(let r = 0; e.length > r;){
            n.push(e.slice(r, r + t));
            r += t;
        }
        return n;
    }
    i.default = e;
}, 66);