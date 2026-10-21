__d("WASmaxInBizCtwaAdAccountNonceNotificationRequest", [
    "WAResultOrError",
    "WASmaxInBizCtwaAdAccountServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "notification");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "wa_ad_account_nonce");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseJid").literalJid(o("WASmaxParseJid").attrDomainJid, e, "from", "s.whatsapp.net");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrUserJid, e, "to");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "business");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").contentString(n.value);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxInBizCtwaAdAccountServerNotificationMixin").parseServerNotificationMixin(e);
        if (s.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                from: r.value,
                to: a.value,
                type: i.value,
                waAdAccountNonceElementValue: l.value
            }, s.value));
        }
        return s;
    }
    l.parseNonceNotificationRequest = e;
}, 98);