__d("getIncrementalEventCount", [
    "performance"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Map;
    function u(t) {
        let n;
        if ((e || (e = r("performance"))) == null || (n = (e || (e = r("performance"))).eventCounts) == null || n.get == null) {
            return undefined;
        }
        return n.get(t);
    }
    function c(e, t) {
        const n = u(e);
        if (n == null) {
            return null;
        }
        const r = `${t}_${e}`;
        const o = s.get(r);
        s.set(r, n);
        if (o != null) {
            return n - o;
        }
        return n;
    }
    l.default = c;
}, 98);