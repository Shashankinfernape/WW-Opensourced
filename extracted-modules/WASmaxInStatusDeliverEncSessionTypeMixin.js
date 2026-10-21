__d("WASmaxInStatusDeliverEncSessionTypeMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "enc");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "session_type", "pq");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                sessionType: n.value
            });
        }
        return n;
    }
    l.parseEncSessionTypeMixin = e;
}, 98);