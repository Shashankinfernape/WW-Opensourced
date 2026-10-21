__d("WASmaxInMessageDeliverNewsletterMessageOriginalTimestampMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrIntRange(n.value, "original_msg_t", 1577865600, 4102473600);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                metaOriginalMsgT: r.value
            });
        }
        return r;
    }
    l.parseNewsletterMessageOriginalTimestampMixin = e;
}, 98);