__d("WASmaxInNewslettersStatusNewsletterHistoryMixin", [
    "WAResultOrError",
    "WASmaxInNewslettersStatusAIContentMetaMixin",
    "WASmaxInNewslettersStatusAdminProfileMetaMixin",
    "WASmaxInNewslettersStatusLastEditTimestampMixin",
    "WASmaxInNewslettersStatusNewsletterContentMixin",
    "WASmaxInNewslettersStatusNewsletterInteractionTypeQuestionMixin",
    "WASmaxInNewslettersStatusNewsletterInteractionTypeQuestionReshareMixin",
    "WASmaxInNewslettersStatusOriginalTimestampMixin",
    "WASmaxInNewslettersStatusPaidPartnershipContentMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
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
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "t", 1577865600, 4102473600);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optionalLiteral(o("WASmaxParseUtils").attrString, e, "is_sender", "true");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInNewslettersStatusNewsletterContentMixin").parseStatusNewsletterContentMixin(e);
        const s = o("WASmaxInNewslettersStatusOriginalTimestampMixin").parseStatusOriginalTimestampMixin(e);
        const u = o("WASmaxInNewslettersStatusLastEditTimestampMixin").parseStatusLastEditTimestampMixin(e);
        const c = o("WASmaxInNewslettersStatusAdminProfileMetaMixin").parseStatusAdminProfileMetaMixin(e);
        const d = o("WASmaxInNewslettersStatusPaidPartnershipContentMixin").parseStatusPaidPartnershipContentMixin(e);
        const m = o("WASmaxInNewslettersStatusAIContentMetaMixin").parseStatusAIContentMetaMixin(e);
        const p = o("WASmaxInNewslettersStatusNewsletterInteractionTypeQuestionMixin").parseStatusNewsletterInteractionTypeQuestionMixin(e);
        const _ = o("WASmaxInNewslettersStatusNewsletterInteractionTypeQuestionReshareMixin").parseStatusNewsletterInteractionTypeQuestionReshareMixin(e);
        return o("WAResultOrError").makeResult({
            id: n.value,
            serverId: r.value,
            t: a.value,
            isSender: i.value,
            statusNewsletterContentMixin: l.success ? l.value : null,
            statusOriginalTimestampMixin: s.success ? s.value : null,
            statusLastEditTimestampMixin: u.success ? u.value : null,
            statusAdminProfileMetaMixin: c.success ? c.value : null,
            hasStatusPaidPartnershipContentMixin: d.success,
            hasStatusAIContentMetaMixin: m.success,
            statusNewsletterInteractionTypeQuestionMixin: p.success ? p.value : null,
            statusNewsletterInteractionTypeQuestionReshareMixin: _.success ? _.value : null
        });
    }
    l.parseStatusNewsletterHistoryMixin = e;
}, 98);