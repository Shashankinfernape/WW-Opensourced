__d("WASmaxInMessageDeliverResponseServerIDMixin", [
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
        const r = o("WASmaxParseUtils").attrString(n.value, "response_server_id");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                metaResponseServerId: r.value
            });
        }
        return r;
    }
    l.parseResponseServerIDMixin = e;
}, 98);