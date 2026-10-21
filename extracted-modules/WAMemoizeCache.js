__d("WAMemoizeCache", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = [];
    function l() {
        e.forEach((e)=>e.clear());
    }
    function s() {
        const t = new Map;
        e.push(t);
        return t;
    }
    function u(e, t) {
        let n;
        return function() {
            if (!n) {
                n = s();
            }
            const r = t.apply(void 0, arguments);
            let o = n.get(r);
            if (o == null) {
                o = e.apply(void 0, arguments);
                n.set(r, o);
            }
            return o;
        };
    }
    i.clearAllMemoizeCache = l;
    i.memoizeWithArgs = u;
}, 66);