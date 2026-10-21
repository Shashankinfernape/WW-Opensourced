__d("WASmaxInPreKeysIQErrorNotAcceptableMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "field");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "name");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "reason");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: n.value,
                reason: r.value
            });
        }
        return r;
    }
    function s(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "error");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optionalChildWithTag(t, "field", e);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, t, "text", "not-acceptable");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, t, "code", 406);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                text: a.value,
                code: i.value,
                field: r.value
            });
        }
        return i;
    }
    l.parseIQErrorNotAcceptableField = e;
    l.parseIQErrorNotAcceptableMixin = s;
}, 98);