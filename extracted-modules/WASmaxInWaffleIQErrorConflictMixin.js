__d("WASmaxInWaffleIQErrorConflictMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "conflict");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 409);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value
            });
        }
        return r;
    }
    l.parseIQErrorConflictMixin = e;
}, 98);