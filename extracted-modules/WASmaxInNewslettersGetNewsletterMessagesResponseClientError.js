__d("WASmaxInNewslettersGetNewsletterMessagesResponseClientError", [
    "WAResultOrError",
    "WASmaxInNewslettersGetNewsletterMessagesClientErrors",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInNewslettersGetNewsletterMessagesClientErrors").parseGetNewsletterMessagesClientErrors(e, t);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                getNewsletterMessagesClientErrors: r.value
            });
        }
        return r;
    }
    l.parseGetNewsletterMessagesResponseClientError = e;
}, 98);