__d("WASmaxInNewslettersGetNewsletterMessageUpdatesResponseClientError", [
    "WAResultOrError",
    "WASmaxInNewslettersGetNewsletterMessageUpdatesClientErrors",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInNewslettersGetNewsletterMessageUpdatesClientErrors").parseGetNewsletterMessageUpdatesClientErrors(e, t);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                getNewsletterMessageUpdatesClientErrors: r.value
            });
        }
        return r;
    }
    l.parseGetNewsletterMessageUpdatesResponseClientError = e;
}, 98);