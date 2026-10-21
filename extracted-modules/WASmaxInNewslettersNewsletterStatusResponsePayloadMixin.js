__d("WASmaxInNewslettersNewsletterStatusResponsePayloadMixin", [
    "WAResultOrError",
    "WASmaxInNewslettersStatusNewsletterHistoryWithAddOnsMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInNewslettersStatusNewsletterHistoryWithAddOnsMixin").parseStatusNewsletterHistoryWithAddOnsMixin(e);
        n.success;
        return n;
    }
    function s(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "statuses");
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
        const i = o("WASmaxParseUtils").mapChildrenWithTag(t, "status", 0, 100, e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                jid: r.value,
                t: a.value,
                status: i.value
            });
        }
        return i;
    }
    l.parseNewsletterStatusResponsePayloadStatus = e;
    l.parseNewsletterStatusResponsePayloadMixin = s;
}, 98);