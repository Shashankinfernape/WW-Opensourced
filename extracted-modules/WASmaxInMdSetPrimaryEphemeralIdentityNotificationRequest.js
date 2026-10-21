__d("WASmaxInMdSetPrimaryEphemeralIdentityNotificationRequest", [
    "WAResultOrError",
    "WASmaxInMdServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "notification");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "primary_ephemeral_identity");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "crsc_continuation");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseJid").literalJid(o("WASmaxParseJid").attrDomainJid, e, "from", "s.whatsapp.net");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").contentBytes(n.value);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInMdServerNotificationMixin").parseServerNotificationMixin(e);
        if (l.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                type: r.value,
                from: a.value,
                primaryEphemeralIdentityElementValue: i.value
            }, l.value));
        }
        return l;
    }
    l.parseSetPrimaryEphemeralIdentityNotificationRequest = e;
}, 98);