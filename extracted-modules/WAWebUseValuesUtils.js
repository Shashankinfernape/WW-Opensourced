__d("WAWebUseValuesUtils", [
    "WAMemoizeCache",
    "WAWebDummyCacheMap",
    "WAWebGetters"
], function(t, n, r, o, a, i, l) {
    const e = new (o("WAWebDummyCacheMap")).FakeCacheMap;
    const s = o("WAMemoizeCache").memoizeWithArgs(function(t) {
        return o("WAWebGetters").createGetterFactories({
            root: t,
            createCache: function() {
                return e;
            }
        });
    }, m);
    const u = o("WAMemoizeCache").memoizeWithArgs(function(e) {
        const t = e[0].$$root;
        const n = s(t);
        const r = n.computed;
        return r(function(e) {
            return e;
        }, e);
    }, function(e) {
        return e.map(m).join("-");
    });
    var c = new WeakMap;
    var d = 0;
    function m(e) {
        let t = c.get(e);
        if (t == null) {
            t = (d++).toString();
            c.set(e, t);
        }
        return t;
    }
    l.computedForComponent = u;
}, 98);