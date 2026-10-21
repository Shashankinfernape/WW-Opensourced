__d("WASmaxInMessagePublishAckMixin", [
    "WAResultOrError",
    "WASmaxInMessagePublishAckAdminEditMixin",
    "WASmaxInMessagePublishAckAdminRevokeMixin",
    "WASmaxInMessagePublishAckMessageEditMixin",
    "WASmaxInMessagePublishAckMessagePinMixin",
    "WASmaxInMessagePublishAckPaidAckPaidConversationOrAckPaidGroupConversationConversationMixinGroup",
    "WASmaxInMessagePublishAckRevokeMixin",
    "WASmaxInMessagePublishServerFrankingTagMixin",
    "WASmaxParseReference",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "ack");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseReference").attrStringFromReference(t, [
            "to"
        ]);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "from", r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "class", "message");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseReference").attrStringFromReference(t, [
            "id"
        ]);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "id", l.value);
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxInMessagePublishAckMessageEditMixin").parseAckMessageEditMixin(e);
        const d = o("WASmaxInMessagePublishAckAdminEditMixin").parseAckAdminEditMixin(e);
        const m = o("WASmaxInMessagePublishAckMessagePinMixin").parseAckMessagePinMixin(e);
        const p = o("WASmaxInMessagePublishAckAdminRevokeMixin").parseAckAdminRevokeMixin(e);
        const _ = o("WASmaxInMessagePublishAckRevokeMixin").parseAckRevokeMixin(e);
        const f = o("WASmaxInMessagePublishServerFrankingTagMixin").parseServerFrankingTagMixin(e);
        const g = o("WASmaxInMessagePublishAckPaidAckPaidConversationOrAckPaidGroupConversationConversationMixinGroup").parseAckPaidAckPaidConversationOrAckPaidGroupConversationConversationMixinGroup(e);
        return o("WAResultOrError").makeResult({
            class: i.value,
            t: u.value,
            ackMessageEditMixin: c.success ? c.value : null,
            ackAdminEditMixin: d.success ? d.value : null,
            ackMessagePinMixin: m.success ? m.value : null,
            ackAdminRevokeMixin: p.success ? p.value : null,
            ackRevokeMixin: _.success ? _.value : null,
            serverFrankingTagMixin: f.success ? f.value : null,
            ackPaidAckPaidConversationOrAckPaidGroupConversationConversationMixinGroup: g.success ? g.value : null
        });
    }
    l.parseAckMixin = e;
}, 98);