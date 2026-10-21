__d("WASmaxInMessagePublishNewsletterSenderRCATAckMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "ack");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "rcat");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").contentBytes(n.value);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                rcatElementValue: r.value
            });
        }
        return r;
    }
    l.parseNewsletterSenderRCATAckMixin = e;
}, 98);