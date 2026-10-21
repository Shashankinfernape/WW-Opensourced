__d("WASmaxInStatusDeliverIncomingNewsletterStatusRequest", [
    "WAResultOrError",
    "WASmaxInStatusDeliverFromNewsletterMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrStanzaId(e, "id");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInStatusDeliverFromNewsletterMixin").parseFromNewsletterMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                id: n.value
            }, r.value));
        }
        return r;
    }
    l.parseIncomingNewsletterStatusRequest = e;
}, 98);