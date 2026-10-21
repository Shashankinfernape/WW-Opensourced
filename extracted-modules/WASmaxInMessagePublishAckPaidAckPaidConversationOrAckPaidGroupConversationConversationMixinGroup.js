__d("WASmaxInMessagePublishAckPaidAckPaidConversationOrAckPaidGroupConversationConversationMixinGroup", [
    "WAResultOrError",
    "WASmaxInMessagePublishAckPaidConversationMixin",
    "WASmaxInMessagePublishAckPaidGroupConversationMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInMessagePublishAckPaidConversationMixin").parseAckPaidConversationMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "AckPaidConversation",
                value: t.value
            });
        }
        const n = o("WASmaxInMessagePublishAckPaidGroupConversationMixin").parseAckPaidGroupConversationMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "AckPaidGroupConversation",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "AckPaidConversation",
            "AckPaidGroupConversation"
        ], [
            t,
            n
        ]);
    }
    l.parseAckPaidAckPaidConversationOrAckPaidGroupConversationConversationMixinGroup = e;
}, 98);