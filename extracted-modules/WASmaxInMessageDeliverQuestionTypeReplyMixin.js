__d("WASmaxInMessageDeliverQuestionTypeReplyMixin", [
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
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, n.value, "questiontype", "reply");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                metaQuestiontype: r.value
            });
        }
        return r;
    }
    l.parseQuestionTypeReplyMixin = e;
}, 98);