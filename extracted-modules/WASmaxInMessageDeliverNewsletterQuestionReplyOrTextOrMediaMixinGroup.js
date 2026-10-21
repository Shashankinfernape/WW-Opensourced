__d("WASmaxInMessageDeliverNewsletterQuestionReplyOrTextOrMediaMixinGroup", [
    "WAResultOrError",
    "WASmaxInMessageDeliverNewsletterMediaMixin",
    "WASmaxInMessageDeliverNewsletterQuestionReplyMixin",
    "WASmaxInMessageDeliverNewsletterTextMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInMessageDeliverNewsletterQuestionReplyMixin").parseNewsletterQuestionReplyMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterQuestionReply",
                value: t.value
            });
        }
        const n = o("WASmaxInMessageDeliverNewsletterTextMixin").parseNewsletterTextMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterText",
                value: n.value
            });
        }
        const r = o("WASmaxInMessageDeliverNewsletterMediaMixin").parseNewsletterMediaMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterMedia",
                value: r.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "NewsletterQuestionReply",
            "NewsletterText",
            "NewsletterMedia"
        ], [
            t,
            n,
            r
        ]);
    }
    l.parseNewsletterQuestionReplyOrTextOrMediaMixinGroup = e;
}, 98);