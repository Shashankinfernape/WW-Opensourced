__d("WASmaxInMdBaseIQSetRequestMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrStanzaId(e, "id");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "set");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                id: n.value,
                type: r.value
            });
        }
        return r;
    }
    l.parseBaseIQSetRequestMixin = e;
}, 98);