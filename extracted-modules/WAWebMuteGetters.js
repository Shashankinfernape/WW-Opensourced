__d("WAWebMuteGetters", [
    "WATimeUtils",
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createMuteCache
    });
    const { clearCacheFor, computed, field } = e;
    const d = clearCacheFor;
    const m = field("callExpiration");
    const p = field("expiration");
    const _ = field("mentionAllMuteExpiration");
    const f = computed(function([t]) {
        return !!t;
    }, [
        p
    ]);
    const g = computed(function([t]) {
        return !!t;
    }, [
        m
    ]);
    const h = -1;
    const y = computed(function([t, n]) {
        if (!n || !t) {
            return false;
        }
        if (t === h) {
            return true;
        }
        return t > o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
    }, [
        _,
        f
    ]);
    l.clearMuteGetterCacheFor = d;
    l.getCallExpiration = m;
    l.getExpiration = p;
    l.getIsMuted = f;
    l.getIsCallMuted = g;
    l.getIsMentionAllMuted = y;
}, 98);