__d("WAWebFrontendPinInChatGetters", [
    "WAWebAck",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebPinInChatGetters",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        root: o("WAWebPinInChatGetters").getPinInChatUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendPinInChatsCache
    });
    const { clearCacheFor, computed, field } = e;
    const d = clearCacheFor;
    const m = field("isSendFailure", {
        default: false
    });
    const p = computed(function([t, n, r]) {
        const a = o("WAWebUserPrefsMeUser").isMeAccount(t) && n != null && n < o("WAWebAck").ACK.CLOCK;
        return a || !!r;
    }, [
        o("WAWebPinInChatGetters").getSender,
        o("WAWebPinInChatGetters").getAck,
        m
    ]);
    l.clearFrontendPinInChatGetterCacheFor = d;
    l.getIsFailed = p;
}, 98);