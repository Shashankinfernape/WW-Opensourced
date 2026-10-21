__d("WAWebOrderItemGetters", [
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebMediaData",
    "WAWebMediaTypes"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createOrderItemCache
    });
    const { clearCacheFor, computed, field } = e;
    const d = clearCacheFor;
    const m = field("thumbnailUrl");
    const p = computed(function([t]) {
        return new (r("WAWebMediaData"))({
            mediaStage: t != null ? o("WAWebMediaTypes").MediaDataStage.RESOLVED : o("WAWebMediaTypes").MediaDataStage.PREPARING,
            renderableUrl: t != null ? `${t}` : null
        });
    }, [
        m
    ]);
    l.clearOrderItemGetterCacheFor = d;
    l.getMediaData = p;
}, 98);