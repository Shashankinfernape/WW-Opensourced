__d("WAWebSyncdRequestBuilderUtils", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        return l(e.reverse(), (e)=>e.index).reverse();
    }
    function l(e, t) {
        const n = new Set;
        return e.filter((e)=>{
            const r = t(e);
            if (n.has(r)) {
                return false;
            }
            n.add(r);
            return true;
        });
    }
    i.compactPatch = e;
}, 66);