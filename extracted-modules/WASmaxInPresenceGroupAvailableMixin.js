__d("WASmaxInPresenceGroupAvailableMixin", [
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
        const r = o("WASmaxParseUtils").attrIntRange(e, "count", 1, 1024);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                from: n.value,
                count: r.value
            });
        }
        return r;
    }
    l.parseGroupAvailableMixin = e;
}, 98);