__d("WASmaxInPingsClientResponseServerResponse", [
    "WAResultOrError",
    "WASmaxInPingsEnums",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseJid").attrJidEnum(e, "from", o("WASmaxInPingsEnums").DOMAINJID_USERJID);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "result");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseReference").attrStringFromReference(t, [
            "id"
        ]);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "id", i.value);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").attrInt(e, "t");
        if (s.success) {
            return o("WAResultOrError").makeResult({
                from: r.value,
                type: a.value,
                t: s.value
            });
        }
        return s;
    }
    l.parseClientResponseServerResponse = e;
}, 98);