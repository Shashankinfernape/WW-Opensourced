__d("WAWebChatstateGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createChatstateCache
    });
    const { clearCacheFor, field } = e;
    const c = clearCacheFor;
    const d = field("type");
    const m = field("deny");
    const p = field("t");
    l.clearChatstateGetterCacheFor = c;
    l.getType = d;
    l.getDeny = m;
    l.getT = p;
}, 98);