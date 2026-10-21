__d("WASmaxInNewslettersNewsletterResponsesCountMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "responses_count");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrIntRange(n.value, "count", 0, undefined);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                responsesCountCount: r.value
            });
        }
        return r;
    }
    l.parseNewsletterResponsesCountMixin = e;
}, 98);