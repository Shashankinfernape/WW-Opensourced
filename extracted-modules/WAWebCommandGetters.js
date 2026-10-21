__d("WAWebCommandGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createCommandCache
    });
    const { clearCacheFor, field } = e;
    const c = clearCacheFor;
    const d = field("id");
    const m = field("label");
    const p = field("name");
    l.clearCommandGetterCacheFor = c;
    l.getId = d;
    l.getLabel = m;
    l.getName = p;
}, 98);