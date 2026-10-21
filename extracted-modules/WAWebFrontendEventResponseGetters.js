__d("WAWebFrontendEventResponseGetters", [
    "WAWebEventResponseGetters",
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        root: o("WAWebEventResponseGetters").getEventResponseUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendEventResponseCache
    });
    const e_clearCacheFor = e.clearCacheFor;
    l.clearFrontendEventResponseGetterCacheFor = e_clearCacheFor;
}, 98);