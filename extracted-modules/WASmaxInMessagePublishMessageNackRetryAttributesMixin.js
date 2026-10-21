__d("WASmaxInMessagePublishMessageNackRetryAttributesMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "ack");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "backoff", 0, 86400);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                backoff: n.value
            });
        }
        return n;
    }
    l.parseMessageNackRetryAttributesMixin = e;
}, 98);