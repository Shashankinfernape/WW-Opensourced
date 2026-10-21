__d("WAWebPinInChatGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createPinInChatsCache
    });
    const { clearCacheFor, field, unsafeIdentityGetter } = e;
    const d = clearCacheFor;
    const m = unsafeIdentityGetter;
    const p = field("sender");
    const _ = field("ack");
    l.clearPinInChatGetterCacheFor = d;
    l.getPinInChatUnsafe = m;
    l.getSender = p;
    l.getAck = _;
}, 98);