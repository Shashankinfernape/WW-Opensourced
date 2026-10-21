__d("WASmaxInCoexistenceServerNotificationMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "notification");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "t", 0, undefined);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrStanzaId(e, "id");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "offline", 0, 1024);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                t: n.value,
                id: r.value,
                offline: a.value
            });
        }
        return a;
    }
    l.parseServerNotificationMixin = e;
}, 98);