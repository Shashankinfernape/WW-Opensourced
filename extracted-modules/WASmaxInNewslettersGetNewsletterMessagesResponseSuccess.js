__d("WASmaxInNewslettersGetNewsletterMessagesResponseSuccess", [
    "WAResultOrError",
    "WASmaxInNewslettersNewsletterMessageResponsePayloadMixin",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "messages");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseReference").attrStringFromReference(t, [
            "id"
        ]);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "id", a.value);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseJid").literalJid(o("WASmaxParseJid").attrDomainJid, e, "from", "s.whatsapp.net");
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "result");
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxInNewslettersNewsletterMessageResponsePayloadMixin").parseNewsletterMessageResponsePayloadMixin(r.value);
        if (u.success) {
            return o("WAResultOrError").makeResult({
                from: l.value,
                type: s.value,
                messagesNewsletterMessageResponsePayloadMixin: u.value
            });
        }
        return u;
    }
    l.parseGetNewsletterMessagesResponseSuccess = e;
}, 98);