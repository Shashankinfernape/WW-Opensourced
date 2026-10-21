__d("WASmaxInNewslettersContentTypeQuizCreationMixin", [
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
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "poll");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, n.value, "polltype", "quiz_creation");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, n.value, "contenttype");
        if (i.success) {
            return o("WAResultOrError").makeResult({
                type: r.value,
                metaPolltype: a.value,
                metaContenttype: i.value
            });
        }
        return i;
    }
    l.parseContentTypeQuizCreationMixin = e;
}, 98);