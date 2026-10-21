__d("WASmaxInBlocklistsGetBlockListResponseSuccessWithMatch", [
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
            "to"
        ]);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "from", r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "result");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseReference").attrStringFromReference(t, [
            "id"
        ]);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "id", l.value);
        if (s.success) {
            return o("WAResultOrError").makeResult({
                type: i.value
            });
        }
        return s;
    }
    l.parseGetBlockListResponseSuccessWithMatch = e;
}, 98);