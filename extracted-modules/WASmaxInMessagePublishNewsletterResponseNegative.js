__d("WASmaxInMessagePublishNewsletterResponseNegative", [
    "WASmaxInMessagePublishNegativeAckMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "ack");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInMessagePublishNegativeAckMixin").parseNegativeAckMixin(e, t);
        r.success;
        return r;
    }
    l.parseNewsletterResponseNegative = e;
}, 98);