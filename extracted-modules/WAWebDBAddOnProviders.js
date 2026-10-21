__d("WAWebDBAddOnProviders", [
    "WAWebDBCommentAddOnProvider",
    "WAWebDBKeepInChatAddOnProvider",
    "WAWebDBMessageEditAddOnProvider",
    "WAWebDBPinInChatAddOnProvider",
    "WAWebDBPollVotesAddOnProvider",
    "WAWebDBReactionsAddOnProvider",
    "WAWebDBReactionsEncAddOnProvider",
    "cr:5281"
], function(t, n, r, o, a, i, l) {
    const s = n("cr:5281")?.botMsgOrphanProvider;
    const u = [
        o("WAWebDBPollVotesAddOnProvider").pollVotesAddOnProvider,
        o("WAWebDBKeepInChatAddOnProvider").keepInChatAddOnProvider,
        o("WAWebDBReactionsAddOnProvider").reactionsAddOnProvider,
        o("WAWebDBReactionsEncAddOnProvider").reactionsEncAddOnProvider,
        o("WAWebDBMessageEditAddOnProvider").messageEditAddOnProvider,
        o("WAWebDBPinInChatAddOnProvider").pinInChatAddOnProvider,
        o("WAWebDBCommentAddOnProvider").commentsAddOnProvider
    ].concat(s != null ? [
        s
    ] : []);
    function c(e) {
        return u.find((t)=>t.type === e) ?? null;
    }
    function d(e) {
        return u.find((t)=>t.matches(e));
    }
    function m(e) {
        return u.find((t)=>t.matchesFutureproof(e));
    }
    l.addOnProviders = u;
    l.getProviderForAddOnType = c;
    l.getAddOnProviderForMsg = d;
    l.getAddOnProviderForFutureproofMsg = m;
}, 98);