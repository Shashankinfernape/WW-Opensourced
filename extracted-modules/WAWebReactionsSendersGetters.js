__d("WAWebReactionsSendersGetters", [
    "WAWebAck",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createReactionsSendersCache
    });
    const { clearCacheFor, computed, field } = e;
    const d = clearCacheFor;
    const m = field("id");
    const p = field("senderUserJid");
    const _ = field("ack");
    const f = field("isSendFailure");
    const g = computed(function([t, n, r, a]) {
        if (t.remote.isNewsletter()) {
            return false;
        }
        const i = o("WAWebUserPrefsMeUser").isSerializedWidMe(n) && r != null && r < o("WAWebAck").ACK.CLOCK;
        return i || !!a;
    }, [
        m,
        p,
        _,
        f
    ]);
    l.clearReactionsSendersGetterCacheFor = d;
    l.getIsFailed = g;
}, 98);