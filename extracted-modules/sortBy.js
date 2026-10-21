__d("sortBy", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        const n = e.map((e, n)=>({
                index: n,
                sortValue: t(e),
                value: e
            }));
        n.sort((e, t)=>{
            const n = e.sortValue;
            const r = t.sortValue;
            if (n > r) {
                return 1;
            }
            if (n < r) {
                return -1;
            }
            return e.index - t.index;
        });
        return n.map((e)=>e.value);
    }
    i.default = e;
}, 66);