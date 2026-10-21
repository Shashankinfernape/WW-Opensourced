__d("WASmaxInStatusPublishStatusApplicationNegativeAckMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "ack");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "application_error", 0, undefined);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                applicationError: n.value
            });
        }
        return n;
    }
    l.parseStatusApplicationNegativeAckMixin = e;
}, 98);