__d("WASmaxInCoexistenceSyncNotificationRequest", [
    "WAResultOrError",
    "WASmaxInCoexistenceServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "notification");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "sync");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseJid").literalJid(o("WASmaxParseJid").attrDomainJid, e, "from", "s.whatsapp.net");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "hosted");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInCoexistenceServerNotificationMixin").parseServerNotificationMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                from: r.value,
                type: a.value
            }, i.value));
        }
        return i;
    }
    l.parseSyncNotificationRequest = e;
}, 98);