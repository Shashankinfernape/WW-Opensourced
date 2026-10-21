__d("WASmaxInPreKeysSetVnameFailureNotAcceptableMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "violation");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "not-acceptable");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").attrString(n.value, "reason");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrInt, n.value, "max");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrInt, n.value, "length");
        if (l.success) {
            return o("WAResultOrError").makeResult({
                text: r.value,
                violationReason: a.value,
                violationMax: i.value,
                violationLength: l.value
            });
        }
        return l;
    }
    l.parseSetVnameFailureNotAcceptableMixin = e;
}, 98);