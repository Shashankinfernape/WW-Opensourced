__d("WAMemoizeConditionally", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(t, n) {
        const r = function(...o) {
            const i = n ? n.apply(this, o) : o[0];
            if (i == null) {
                return t.apply(this, o);
            }
            const l = r.cache;
            if (l.has(i)) {
                return l.get(i);
            }
            const s = t.apply(this, o);
            r.cache = l.set(i, s) || l;
            return s;
        };
        r.cache = new (e.Cache || Map);
        return r;
    }
    e.Cache = Map;
    i.default = e;
}, 66);