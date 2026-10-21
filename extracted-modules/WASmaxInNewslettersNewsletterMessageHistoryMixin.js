__d("WASmaxInNewslettersNewsletterMessageHistoryMixin", [
    "WAResultOrError",
    "WASmaxInNewslettersAdminProfileMetaMixin",
    "WASmaxInNewslettersNewsletterAIContentMetaMixin",
    "WASmaxInNewslettersNewsletterMessageHistoryContent",
    "WASmaxInNewslettersNewsletterMessageLastEditTimestampMixin",
    "WASmaxInNewslettersNewsletterMessageOriginalTimestampMixin",
    "WASmaxInNewslettersPaidPartnershipContentMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStanzaId, e, "id");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrIntRange(e, "server_id", 99, 2147476647);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "t", 0, undefined);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optionalLiteral(o("WASmaxParseUtils").attrString, e, "is_sender", "true");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInNewslettersNewsletterMessageOriginalTimestampMixin").parseNewsletterMessageOriginalTimestampMixin(e);
        const s = o("WASmaxInNewslettersNewsletterMessageLastEditTimestampMixin").parseNewsletterMessageLastEditTimestampMixin(e);
        const u = o("WASmaxInNewslettersAdminProfileMetaMixin").parseAdminProfileMetaMixin(e);
        const c = o("WASmaxInNewslettersPaidPartnershipContentMixin").parsePaidPartnershipContentMixin(e);
        const d = o("WASmaxInNewslettersNewsletterAIContentMetaMixin").parseNewsletterAIContentMetaMixin(e);
        const m = o("WASmaxInNewslettersNewsletterMessageHistoryContent").parseNewsletterMessageHistoryContent(e);
        return o("WAResultOrError").makeResult({
            id: n.value,
            serverId: r.value,
            t: a.value,
            isSender: i.value,
            newsletterMessageOriginalTimestampMixin: l.success ? l.value : null,
            newsletterMessageLastEditTimestampMixin: s.success ? s.value : null,
            adminProfileMetaMixin: u.success ? u.value : null,
            hasPaidPartnershipContentMixin: c.success,
            hasNewsletterAIContentMetaMixin: d.success,
            newsletterMessageHistoryContent: m.success ? m.value : null
        });
    }
    l.parseNewsletterMessageHistoryMixin = e;
}, 98);