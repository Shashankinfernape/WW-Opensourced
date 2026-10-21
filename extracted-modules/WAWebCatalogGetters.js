__d("WAWebCatalogGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createCatalogCache
    });
    const { clearCacheFor, field, unsafeIdentityGetter } = e;
    const m = o("WAWebGetters").createGetterFactories({
        root: unsafeIdentityGetter,
        createCache: o("WAWebGettersCaches").createFrontendCatalogCache
    });
    const { clearCacheFor: clearCacheFor_1, field: field_1 } = m;
    function f(e) {
        clearCacheFor(e);
        clearCacheFor_1(e);
    }
    const g = field("id");
    const h = field("afterCursor");
    const y = field("hasCatalogCategories");
    const C = field("index");
    const b = field_1("lastUsedCountryCode");
    l.clearCatalogGetterCacheFor = f;
    l.getId = g;
    l.getAfterCursor = h;
    l.getHasCatalogCategories = y;
    l.getIndex = C;
    l.getLastUsedCountryCode = b;
}, 98);