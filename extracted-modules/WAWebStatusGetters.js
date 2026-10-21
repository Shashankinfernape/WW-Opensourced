__d("WAWebStatusGetters", [
    "WALogger",
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createStatusCache
    });
    const { clearCacheFor, computed, field, unsafeIdentityGetter } = s;
    const p = clearCacheFor;
    const _ = unsafeIdentityGetter;
    const f = field("id");
    const g = field("t");
    const h = field("unreadCount");
    const y = field("totalCount");
    const C = field("isLoading");
    const b = computed(function([t]) {
        return t > 0;
    }, [
        h
    ]);
    const v = computed(function([n, r]) {
        const a = r - n;
        if (Number.isFinite(a)) {
            return a;
        }
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "Bad status read count, ",
            ", ",
            ""
        ])), r, n);
        return 0;
    }, [
        h,
        y
    ]);
    l.clearStatusGetterCacheFor = p;
    l.getStatusUnsafe = _;
    l.getId = f;
    l.getT = g;
    l.getUnreadCount = h;
    l.getTotalCount = y;
    l.getIsLoading = C;
    l.getHasUnread = b;
    l.getReadCount = v;
}, 98);