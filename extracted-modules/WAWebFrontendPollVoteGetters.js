__d("WAWebFrontendPollVoteGetters", [
    "WAWebAck",
    "WAWebContactCollection",
    "WAWebFrontendMsgGetters",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebMsgCollection",
    "WAWebPollVoteGetters",
    "WAWebUserPrefsMeUser",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = o("WAWebGetters").createGetterFactories({
        root: (e = o("WAWebPollVoteGetters")).getPollVoteUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendPollVotesCache
    });
    const { clearCacheFor, computed, field } = s;
    const m = clearCacheFor;
    const p = field("isSendFailure", {
        default: false
    });
    const _ = computed(function([t]) {
        const n = r("nullthrows")(o("WAWebMsgCollection").MsgCollection.get(t));
        return r("nullthrows")(o("WAWebFrontendMsgGetters").getAsPollCreation(n));
    }, [
        e.getParentMsgKey
    ]);
    const f = computed(function([t]) {
        return o("WAWebContactCollection").ContactCollection.gadd(t);
    }, [
        e.getSender
    ]);
    const g = computed(function([t, n, r]) {
        const a = o("WAWebUserPrefsMeUser").isMeAccount(t) && n != null && n < o("WAWebAck").ACK.CLOCK;
        return a || !!r;
    }, [
        e.getSender,
        e.getAck,
        p
    ]);
    l.clearFrontendPollVoteGetterCacheFor = m;
    l.getParentMsg = _;
    l.getSenderObj = f;
    l.getIsFailed = g;
}, 98);