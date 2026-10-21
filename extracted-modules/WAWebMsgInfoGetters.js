__d("WAWebMsgInfoGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createMsgInfosCache
    });
    const { clearCacheFor, field } = e;
    const c = clearCacheFor;
    const d = field("playedRemaining");
    const m = field("readRemaining");
    const p = field("deliveryRemaining");
    const _ = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createMsgInfosCache
    });
    const { clearCacheFor: clearCacheFor_1, field: field_1 } = _;
    const h = clearCacheFor_1;
    const y = field_1("t");
    l.clearMsgInfoGetterCacheFor = c;
    l.getPlayedRemaining = d;
    l.getReadRemaining = m;
    l.getDeliveryRemaining = p;
    l.clearMsgInfoParticipantGetterCacheFor = h;
    l.getParticipantT = y;
}, 98);