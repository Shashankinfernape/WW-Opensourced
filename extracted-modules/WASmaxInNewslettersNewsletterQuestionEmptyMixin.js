__d("WASmaxInNewslettersNewsletterQuestionEmptyMixin", [
    "WAResultOrError",
    "WASmaxInNewslettersContentTypeTextOrMediaMixinGroup",
    "WASmaxInNewslettersQuestionTypeQuestionMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInNewslettersQuestionTypeQuestionMixin").parseQuestionTypeQuestionMixin(e);
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
    l.parseNewsletterQuestionEmptyMixin = e;
}, 98);