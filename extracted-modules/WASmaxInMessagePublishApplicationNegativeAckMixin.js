__d("WASmaxInMessagePublishApplicationNegativeAckMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "ack");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "application_error", 0, void 0);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                applicationError: n.value
            });
        }
        return n;
    }
    l.parseApplicationNegativeAckMixin = e;
}, 98);