__d("WASmaxInStatusDeliverStatusEncMentionedMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, n.value, "status_mentioned", "true");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                metaStatusMentioned: r.value
            });
        }
        return r;
    }
    l.parseStatusEncMentionedMixin = e;
}, 98);