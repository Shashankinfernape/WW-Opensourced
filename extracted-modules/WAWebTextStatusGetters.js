__d("WAWebTextStatusGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createTextStatusCache
    });
    const { clearCacheFor, field, unsafeIdentityGetter } = e;
    const d = clearCacheFor;
    const m = unsafeIdentityGetter;
    const p = field("status");
    l.clearTextStatusGetterCacheFor = d;
    l.getTextStatusUnsafe = m;
    l.getStatus = p;
}, 98);