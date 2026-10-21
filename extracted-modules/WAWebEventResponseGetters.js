__d("WAWebEventResponseGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createEventResponseCache
    });
    const { clearCacheFor, field, unsafeIdentityGetter } = e;
    const d = clearCacheFor;
    const m = unsafeIdentityGetter;
    const p = field("sender");
    const _ = field("senderTimestampMs");
    l.clearEventResponseGetterCacheFor = d;
    l.getEventResponseUnsafe = m;
    l.getSender = p;
    l.getSenderTimestampMs = _;
}, 98);