__d("WASmaxInNewslettersNewsletterWamoEmptyContent", [
    "WAResultOrError",
    "WASmaxInNewslettersContentTypeMediaMixin",
    "WASmaxInNewslettersContentTypePollCreationMixin",
    "WASmaxInNewslettersContentTypeQuizCreationMixin",
    "WASmaxInNewslettersContentTypeTextMixin",
    "WASmaxInNewslettersNewsletterQuestionEmptyMixin",
    "WASmaxInNewslettersNewsletterQuestionReplyEmptyMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInNewslettersNewsletterQuestionEmptyMixin").parseNewsletterQuestionEmptyMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterQuestionEmpty",
                value: t.value
            });
        }
        const n = o("WASmaxInNewslettersNewsletterQuestionReplyEmptyMixin").parseNewsletterQuestionReplyEmptyMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterQuestionReplyEmpty",
                value: n.value
            });
        }
        const r = o("WASmaxInNewslettersContentTypeTextMixin").parseContentTypeTextMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "ContentTypeText",
                value: r.value
            });
        }
        const a = o("WASmaxInNewslettersContentTypeMediaMixin").parseContentTypeMediaMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "ContentTypeMedia",
                value: a.value
            });
        }
        const i = o("WASmaxInNewslettersContentTypePollCreationMixin").parseContentTypePollCreationMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "ContentTypePollCreation",
                value: i.value
            });
        }
        const l = o("WASmaxInNewslettersContentTypeQuizCreationMixin").parseContentTypeQuizCreationMixin(e);
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