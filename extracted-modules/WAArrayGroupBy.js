__d("WAArrayGroupBy", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        const n = new Map;
        for(let r = 0; r < e.length; r++){
            const o = t(e[r]);
            const a = n.get(o);
            if (a == null) {
                n.set(o, [
                    e[r]
                ]);
            } else {
                a.push(e[r]);
            }
        }
        return Array.from(n.entries());
    }
    i.groupBy = e;
}, 66);