__d("WAWebOrderGetters", [
    "WAWebGetters",
    "WAWebGettersCaches",
    "sumBy"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createOrderCache
    });
    const { clearCacheFor, computed, field } = e;
    const d = clearCacheFor;
    const m = field("products");
    const p = computed(function([t]) {
        return r("sumBy")(t, function(e) {
            return e.quantity;
        });
    }, [
        m
    ]);
    l.clearOrderGetterCacheFor = d;
    l.getTotalItemCount = p;
}, 98);