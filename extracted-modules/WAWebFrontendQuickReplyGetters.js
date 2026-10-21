__d("WAWebFrontendQuickReplyGetters", [
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebQuickReplyGetters"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        root: o("WAWebQuickReplyGetters").getQuickReplyUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendQuickReplyCache
    });
    const { clearCacheFor, computed, field } = e;
    const d = clearCacheFor;
    const m = field("pendingCount");
    const p = computed(function([t, n]) {
        return t + n;
    }, [
        o("WAWebQuickReplyGetters").getCount,
        m
    ]);
    l.clearFrontendQuickReplyGetterCacheFor = d;
    l.getTotalCount = p;
}, 98);