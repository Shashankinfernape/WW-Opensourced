__d("WASmaxInMessageDeliverNewsletterQuestionReplyEmptyMixin", [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeTextOrMediaMixinGroup",
    "WASmaxInMessageDeliverQuestionTypeReplyMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInMessageDeliverQuestionTypeReplyMixin").parseQuestionTypeReplyMixin(e);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInMessageDeliverContentTypeTextOrMediaMixinGroup").parseContentTypeTextOrMediaMixinGroup(e);
        if (r.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, n.value, {
                contentTypeTextOrMediaMixinGroup: r.value
            }));
        }
        return r;
    }
    l.parseNewsletterQuestionReplyEmptyMixin = e;
}, 98);