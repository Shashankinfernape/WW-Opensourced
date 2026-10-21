__d("WASmaxInNewslettersGetNewsletterStatusesResponseClientError", [
    "WAResultOrError",
    "WASmaxInNewslettersGetNewsletterStatusesClientErrors",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInNewslettersGetNewsletterStatusesClientErrors").parseGetNewsletterStatusesClientErrors(e, t);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                getNewsletterStatusesClientErrors: r.value
            });
        }
        return r;
    }
    l.parseGetNewsletterStatusesResponseClientError = e;
}, 98);