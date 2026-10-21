__d("WAWebFrontendNewsletterPollVotesGetters", [
    "WAWebAck",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebNewsletterPollVotesGetters"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        root: o("WAWebNewsletterPollVotesGetters").getNewsletterPollVotesUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendNewsletterPollVotesCache
    });
    const { clearCacheFor, computed, field } = e;
    const d = clearCacheFor;
    const m = field("isSendFailure", {
        default: false
    });
    const p = computed(function([t, n]) {
        const r = t != null && t < o("WAWebAck").ACK.CLOCK;
        return r || !!n;
    }, [
        o("WAWebNewsletterPollVotesGetters").getAck,
        m
    ]);
    l.clearFrontendNewsletterPollVotesGetterCacheFor = d;
    l.getIsFailed = p;
}, 98);