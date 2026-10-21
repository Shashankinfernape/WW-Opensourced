__d("WAWebNewsletterPollVotesGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createNewsletterPollVotesCache
    });
    const { clearCacheFor, field, unsafeIdentityGetter } = e;
    const d = clearCacheFor;
    const m = unsafeIdentityGetter;
    const p = field("ack");
    const _ = field("isUnvote");
    l.clearNewsletterPollVotesGetterCacheFor = d;
    l.getNewsletterPollVotesUnsafe = m;
    l.getAck = p;
    l.getIsUnvote = _;
}, 98);