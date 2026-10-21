__d("WASmaxInBlocklistsUpdateBlockListResponseSuccessWithMatch", [
    "WAResultOrError",
    "WASmaxParseReference",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "list");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseReference").attrStringFromReference(t, [
            "to"
        ]);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "from", a.value);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "result");
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseReference").attrStringFromReference(t, [
            "id"
        ]);
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "id", s.value);
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, r.value, "matched", "true");
        if (!c.success) {
            return c;
        }
        const d = o("WASmaxParseUtils").attrString(r.value, "dhash");
        if (d.success) {
            return o("WAResultOrError").makeResult({
                type: l.value,
                listMatched: c.value,
                listDhash: d.value
            });
        }
        return d;
    }
    l.parseUpdateBlockListResponseSuccessWithMatch = e;
}, 98);