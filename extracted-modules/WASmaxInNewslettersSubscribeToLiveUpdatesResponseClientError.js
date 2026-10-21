__d("WASmaxInNewslettersSubscribeToLiveUpdatesResponseClientError", [
    "WAResultOrError",
    "WASmaxInNewslettersSubscribeToLiveUpdatesClientErrors",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInNewslettersSubscribeToLiveUpdatesClientErrors").parseSubscribeToLiveUpdatesClientErrors(e, t);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                subscribeToLiveUpdatesClientErrors: r.value
            });
        }
        return r;
    }
    l.parseSubscribeToLiveUpdatesResponseClientError = e;
}, 98);