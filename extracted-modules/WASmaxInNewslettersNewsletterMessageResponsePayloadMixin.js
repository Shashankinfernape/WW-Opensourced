__d("WASmaxInNewslettersNewsletterMessageResponsePayloadMixin", [
    "WAResultOrError",
    "WASmaxInNewslettersNewsletterMessageHistoryWithAddOnsMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInNewslettersNewsletterMessageHistoryWithAddOnsMixin").parseNewsletterMessageHistoryWithAddOnsMixin(e);
        n.success;
        return n;
    }
    function s(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "messages");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrNewsletterJid, t, "jid");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, t, "t", 0, undefined);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").mapChildrenWithTag(t, "message", 0, 300, e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                jid: r.value,
                t: a.value,
                message: i.value
            });
        }
        return i;
    }
    l.parseNewsletterMessageResponsePayloadMessage = e;
    l.parseNewsletterMessageResponsePayloadMixin = s;
}, 98);