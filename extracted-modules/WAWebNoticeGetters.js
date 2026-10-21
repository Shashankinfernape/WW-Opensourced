__d("WAWebNoticeGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createNoticeCache
    });
    const { clearCacheFor, field } = e;
    const c = clearCacheFor;
    const d = field("noticeId");
    const m = field("blocking");
    const p = field("banner");
    const _ = field("shouldShowButterBar");
    l.clearNoticeGetterCacheFor = c;
    l.getNoticeId = d;
    l.getBlocking = m;
    l.getBanner = p;
    l.getShouldShowButterBar = _;
}, 98);