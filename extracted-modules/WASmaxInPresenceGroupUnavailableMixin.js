__d("WASmaxInPresenceGroupUnavailableMixin", [
    "WAResultOrError",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "presence");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrGroupJid(e, "from");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "unavailable");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                from: n.value,
                type: r.value
            });
        }
        return r;
    }
    l.parseGroupUnavailableMixin = e;
}, 98);