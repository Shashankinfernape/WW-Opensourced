__d("WAWebProductImageGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createProductImageCache
    });
    const { clearCacheFor, field } = e;
    const c = clearCacheFor;
    const d = field("mediaUrl");
    const m = field("videoUrl");
    l.clearProductImageGetterCacheFor = c;
    l.getMediaUrl = d;
    l.getVideoUrl = m;
}, 98);