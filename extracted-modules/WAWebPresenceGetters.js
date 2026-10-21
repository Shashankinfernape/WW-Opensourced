__d("WAWebPresenceGetters", [
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createPresenceCache
    });
    const { clearCacheFor, computed, field, unsafeIdentityGetter } = e;
    const m = clearCacheFor;
    const p = unsafeIdentityGetter;
    const _ = field("id");
    const f = computed(function([t]) {
        return r("WAWebWid").isGroup(t);
    }, [
        _
    ]);
    const g = computed(function([t]) {
        return r("WAWebWid").isUser(t);
    }, [
        _
    ]);
    l.clearPresenceGetterCacheFor = m;
    l.getPresenceUnsafe = p;
    l.getIsGroup = f;
    l.getIsUser = g;
}, 98);