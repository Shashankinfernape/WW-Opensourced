__d("WASmaxInGroupsGroupForbiddenMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "group");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "id");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "error", "403");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                id: n.value,
                error: r.value
            });
        }
        return r;
    }
    l.parseGroupForbiddenMixin = e;
}, 98);