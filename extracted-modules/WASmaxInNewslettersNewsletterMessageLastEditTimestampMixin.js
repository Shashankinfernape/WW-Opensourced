__d("WASmaxInNewslettersNewsletterMessageLastEditTimestampMixin", [
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
        const r = o("WASmaxParseUtils").attrIntRange(n.value, "msg_edit_t", 1577865600000, 4102473600000);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                metaMsgEditT: r.value
            });
        }
        return r;
    }
    l.parseNewsletterMessageLastEditTimestampMixin = e;
}, 98);