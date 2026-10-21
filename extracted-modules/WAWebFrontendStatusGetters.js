__d("WAWebFrontendStatusGetters", [
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebStatusGetters"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        root: o("WAWebStatusGetters").getStatusUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendStatusCache
    });
    const { clearCacheFor, computed, field } = e;
    const d = clearCacheFor;
    const m = field("msgs");
    const p = field("msgsChanged");
    const _ = field("contact");
    const f = computed(function([t, n]) {
        return n.last();
    }, [
        p,
        m
    ]);
    const g = field("unreadCount");
    const h = computed(function([t, n, r]) {
        if (t === 0) {
            return false;
        }
        for(let o = r.getModelsArray(), a = Math.max(0, o.length - t), i = a; i < o.length; i++){
            if (o[i].statusAudienceMetadata != null) {
                return true;
            }
        }
        return false;
    }, [
        g,
        p,
        m
    ]);
    l.clearFrontendStatusGetterCacheFor = d;
    l.getContact = _;
    l.getLastStatus = f;
    l.getHasUnreadCloseFriendStatus = h;
}, 98);