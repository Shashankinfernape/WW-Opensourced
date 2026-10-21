__d("WAWebUserPrefsSubscription", [
    "$InternalEnum",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "NextSubscriptionQuery",
        "ShouldShowMetaVerifiedEntryPoint",
        "NextFetchSubscriptionEntryPointsTime",
        "MetaVerifiedEntryPointRedirectionUri"
    ]);
    function s() {
        return g(e.NextSubscriptionQuery);
    }
    function u(t) {
        r("WAWebUserPrefsStore").setUser(e.NextSubscriptionQuery, t);
    }
    function c() {
        const t = r("WAWebUserPrefsStore").getUser(e.ShouldShowMetaVerifiedEntryPoint);
        if (t == null) {
            return null;
        }
        return t === true;
    }
    function d(t) {
        r("WAWebUserPrefsStore").setUser(e.ShouldShowMetaVerifiedEntryPoint, t);
    }
    function m() {
        return g(e.NextFetchSubscriptionEntryPointsTime);
    }
    function p(t) {
        r("WAWebUserPrefsStore").setUser(e.NextFetchSubscriptionEntryPointsTime, t);
    }
    function _() {
        const t = r("WAWebUserPrefsStore").getUser(e.MetaVerifiedEntryPointRedirectionUri);
        if (typeof t !== "string" || t === "") {
            return null;
        }
        return t;
    }
    function f(t) {
        r("WAWebUserPrefsStore").setUser(e.MetaVerifiedEntryPointRedirectionUri, t);
    }
    function g(e) {
        const t = r("WAWebUserPrefsStore").getUser(e);
        return t != null && parseInt(t, 10) || 0;
    }
    l.getNextSubscriptionQuery = s;
    l.setNextSubscriptionQuery = u;
    l.getShouldShowMetaVerifiedEntryPoint = c;
    l.setShouldShowMetaVerifiedEntryPoint = d;
    l.getNextFetchSubscriptionEntryPointsTime = m;
    l.setNextFetchSubscriptionEntryPointsTime = p;
    l.getMetaVerifiedEntryPointRedirectionUri = _;
    l.setMetaVerifiedEntryPointRedirectionUri = f;
}, 98);