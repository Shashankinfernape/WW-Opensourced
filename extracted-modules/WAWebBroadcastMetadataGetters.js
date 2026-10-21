__d("WAWebBroadcastMetadataGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createBroadcastMetadataCache
    });
    const { clearCacheFor, field } = e;
    const c = clearCacheFor;
    const d = field("customAudienceFbid");
    l.clearBroadcastMetadataGetterCacheFor = c;
    l.getCustomAudienceFbid = d;
}, 98);