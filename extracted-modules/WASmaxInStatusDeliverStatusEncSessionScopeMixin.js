__d("WASmaxInStatusDeliverStatusEncSessionScopeMixin", [
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
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, n.value, "session_scope", "status");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                metaSessionScope: r.value
            });
        }
        return r;
    }
    l.parseStatusEncSessionScopeMixin = e;
}, 98);