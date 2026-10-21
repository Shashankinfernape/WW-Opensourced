__d("WASmaxInNewslettersNewsletterQuestionReplyEmptyMixin", [
    "WAResultOrError",
    "WASmaxInNewslettersContentTypeTextOrMediaMixinGroup",
    "WASmaxInNewslettersQuestionTypeReplyMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInNewslettersQuestionTypeReplyMixin").parseQuestionTypeReplyMixin(e);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInNewslettersContentTypeTextOrMediaMixinGroup").parseContentTypeTextOrMediaMixinGroup(e);
        if (r.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, n.value, {
                contentTypeTextOrMediaMixinGroup: r.value
            }));
        }
        return r;
    }
    l.parseNewsletterQuestionReplyEmptyMixin = e;
}, 98);