__d("WASmaxInMessageDeliverNewsletterMessageFanoutMixin", [
    "WAResultOrError",
    "WASmaxInMessageDeliverAdminProfileMetaMixin",
    "WASmaxInMessageDeliverNewsletterAIContentMetaMixin",
    "WASmaxInMessageDeliverNewsletterMessageFanoutContent",
    "WASmaxInMessageDeliverNewsletterMessageLastEditTimestampMixin",
    "WASmaxInMessageDeliverNewsletterMessageOriginalTimestampMixin",
    "WASmaxInMessageDeliverPaidPartnershipContentMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrStanzaId(e, "id");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrIntRange(e, "server_id", 99, 2147476647);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optionalLiteral(o("WASmaxParseUtils").attrString, e, "is_sender", "true");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInMessageDeliverNewsletterMessageOriginalTimestampMixin").parseNewsletterMessageOriginalTimestampMixin(e);
        const s = o("WASmaxInMessageDeliverNewsletterMessageLastEditTimestampMixin").parseNewsletterMessageLastEditTimestampMixin(e);
        const u = o("WASmaxInMessageDeliverAdminProfileMetaMixin").parseAdminProfileMetaMixin(e);
        const c = o("WASmaxInMessageDeliverPaidPartnershipContentMixin").parsePaidPartnershipContentMixin(e);
        const d = o("WASmaxInMessageDeliverNewsletterAIContentMetaMixin").parseNewsletterAIContentMetaMixin(e);
        const m = o("WASmaxInMessageDeliverNewsletterMessageFanoutContent").parseNewsletterMessageFanoutContent(e);
        if (m.success) {
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
                newsletterMessageFanoutContent: m.value
            });
        }
        return m;
    }
    l.parseNewsletterMessageFanoutMixin = e;
}, 98);