__d("WASmaxInNewslettersNewsletterEditMixin", [
    "WAResultOrError",
    "WASmaxInNewslettersAdminEditMixin",
    "WASmaxInNewslettersNewsletterQuestionReplyOrTextOrMediaMixinGroup",
    "WASmaxInNewslettersWAMOSubMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInNewslettersAdminEditMixin").parseAdminEditMixin(e);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInNewslettersWAMOSubMixin").parseWAMOSubMixin(e);
        const a = o("WASmaxInNewslettersNewsletterQuestionReplyOrTextOrMediaMixinGroup").parseNewsletterQuestionReplyOrTextOrMediaMixinGroup(e);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, n.value, {
                wAMOSubMixin: r.success ? r.value : null,
                newsletterQuestionReplyOrTextOrMediaMixinGroup: a.value
            }));
        }
        return a;
    }
    l.parseNewsletterEditMixin = e;
}, 98);