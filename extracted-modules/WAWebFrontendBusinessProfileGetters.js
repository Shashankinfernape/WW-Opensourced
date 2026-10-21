__d("WAWebFrontendBusinessProfileGetters", [
    "WAWebBusinessProfileGetters",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebProductCatalogMetaLinkingGatingUtils"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        root: o("WAWebBusinessProfileGetters").getBusinessProfileUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendBusinessProfileCache
    });
    const { clearCacheFor, computed, field } = e;
    const d = clearCacheFor;
    const m = field("googlePlace");
    const p = field("stale");
    const _ = computed(function() {
        return o("WAWebProductCatalogMetaLinkingGatingUtils").shouldDisableCatalogDueToMetaLinkingForProfileOptions();
    }, [
        o("WAWebBusinessProfileGetters").getProfileOptions
    ]);
    l.clearFrontendBusinessProfileGetterCacheFor = d;
    l.getGooglePlace = m;
    l.getStale = p;
    l.getIsCatalogDisabledDueToMetaLinking = _;
}, 98);