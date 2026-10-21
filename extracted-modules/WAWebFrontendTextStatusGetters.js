__d("WAWebFrontendTextStatusGetters", [
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebTextStatusGetters"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        root: o("WAWebTextStatusGetters").getTextStatusUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendTextStatusCache
    });
    const { clearCacheFor, field } = e;
    const c = clearCacheFor;
    const d = field("stale");
    l.clearFrontendTextStatusGetterCacheFor = c;
    l.getStale = d;
}, 98);