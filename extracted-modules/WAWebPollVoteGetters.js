__d("WAWebPollVoteGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createPollVotesCache
    });
    const { clearCacheFor, computed, field, unsafeIdentityGetter } = e;
    const m = clearCacheFor;
    const p = unsafeIdentityGetter;
    const _ = field("parentMsgKey");
    const f = field("sender");
    const g = field("ack");
    const h = field("t");
    const y = field("senderTimestampMs");
    const C = field("selectedOptionLocalIds");
    const b = computed(function([t]) {
        return t.length === 0;
    }, [
        C
    ]);
    const v = computed(function([t, n]) {
        if (t == null || t === 0) {
            return n;
        }
        return t * 1000;
    }, [
        h,
        y
    ]);
    l.clearPollVoteGetterCacheFor = m;
    l.getPollVoteUnsafe = p;
    l.getParentMsgKey = _;
    l.getSender = f;
    l.getAck = g;
    l.getIsUnvote = b;
    l.getTimestamp = v;
}, 98);