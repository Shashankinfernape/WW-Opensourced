__d("WASmaxInGroupsIQErrorResponseMixin", [
    "WAResultOrError",
    "WASmaxParseReference",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseReference").attrStringFromReference(t, [
            "id"
        ]);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "id", r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseReference").attrStringFromReference(t, [
            "to"
        ]);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "from", i.value);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "error");
        if (s.success) {
            return o("WAResultOrError").makeResult({
                type: s.value
            });
        }
        return s;
    }
    l.parseIQErrorResponseMixin = e;
}, 98);