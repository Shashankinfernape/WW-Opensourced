__d("WAWebSettingsGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createSettingsCache
    });
    const { clearCacheFor, computed, field } = e;
    const d = clearCacheFor;
    const m = field("archive");
    const p = field("isFBLinked");
    const _ = field("isIGLinked");
    const f = field("linkState");
    const g = field("shareToFB");
    const h = field("shareToIG");
    const y = computed(function([t]) {
        if (t.enabled) {
            return !t.classic;
        }
        return false;
    }, [
        m
    ]);
    l.clearSettingsGetterCacheFor = d;
    l.getArchive = m;
    l.getIsFBLinked = p;
    l.getIsIGLinked = _;
    l.getLinkState = f;
    l.getShareToFB = g;
    l.getShareToIG = h;
    l.getShowArchiveV2 = y;
}, 98);