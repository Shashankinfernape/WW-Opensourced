__d("WASmaxInMessageDeliverNewsletterWamoEmptyContent", [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeMediaMixin",
    "WASmaxInMessageDeliverContentTypePollCreationMixin",
    "WASmaxInMessageDeliverContentTypeQuizCreationMixin",
    "WASmaxInMessageDeliverContentTypeTextMixin",
    "WASmaxInMessageDeliverNewsletterQuestionEmptyMixin",
    "WASmaxInMessageDeliverNewsletterQuestionReplyEmptyMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInMessageDeliverNewsletterQuestionEmptyMixin").parseNewsletterQuestionEmptyMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterQuestionEmpty",
                value: t.value
            });
        }
        const n = o("WASmaxInMessageDeliverNewsletterQuestionReplyEmptyMixin").parseNewsletterQuestionReplyEmptyMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterQuestionReplyEmpty",
                value: n.value
            });
        }
        const r = o("WASmaxInMessageDeliverContentTypeTextMixin").parseContentTypeTextMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "ContentTypeText",
                value: r.value
            });
        }
        const a = o("WASmaxInMessageDeliverContentTypeMediaMixin").parseContentTypeMediaMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "ContentTypeMedia",
                value: a.value
            });
        }
        const i = o("WASmaxInMessageDeliverContentTypePollCreationMixin").parseContentTypePollCreationMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "ContentTypePollCreation",
                value: i.value
            });
        }
        const l = o("WASmaxInMessageDeliverContentTypeQuizCreationMixin").parseContentTypeQuizCreationMixin(e);
        if (l.success) {
            return o("WAResultOrError").makeResult({
                name: "ContentTypeQuizCreation",
                value: l.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "NewsletterQuestionEmpty",
            "NewsletterQuestionReplyEmpty",
            "ContentTypeText",
            "ContentTypeMedia",
            "ContentTypePollCreation",
            "ContentTypeQuizCreation"
        ], [
            t,
            n,
            r,
            a,
            i,
            l
        ]);
    }
    l.parseNewsletterWamoEmptyContent = e;
}, 98);