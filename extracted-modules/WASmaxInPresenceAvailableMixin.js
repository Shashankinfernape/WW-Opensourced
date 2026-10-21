__d("WASmaxInPresenceAvailableMixin", [
    "WAResultOrError",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "presence");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrLidUserJid(e, "from");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optionalLiteral(o("WASmaxParseUtils").attrString, e, "type", "available");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "last");
        if (a.success) {
            return o("WAResultOrError").makeResult({
                from: n.value,
                type: r.value,
                last: a.value
            });
        }
        return a;
    }
    l.parseAvailableMixin = e;
}, 98);