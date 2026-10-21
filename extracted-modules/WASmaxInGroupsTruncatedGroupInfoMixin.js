__d("WASmaxInGroupsTruncatedGroupInfoMixin", [
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
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "truncated", "true");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").attrIntRange(e, "size", 0, 19999);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                id: n.value,
                truncated: r.value,
                size: a.value
            });
        }
        return a;
    }
    l.parseTruncatedGroupInfoMixin = e;
}, 98);