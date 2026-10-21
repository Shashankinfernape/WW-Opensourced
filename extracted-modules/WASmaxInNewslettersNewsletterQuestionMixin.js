__d("WASmaxInNewslettersNewsletterQuestionMixin", [
    "WAResultOrError",
    "WASmaxInNewslettersNewsletterTextOrMediaMixinGroup",
    "WASmaxInNewslettersQuestionTypeQuestionMixin",
    "WASmaxInNewslettersWAMOSubMixin",
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
        const r = o("WASmaxInNewslettersWAMOSubMixin").parseWAMOSubMixin(e);
        const a = o("WASmaxInNewslettersNewsletterTextOrMediaMixinGroup").parseNewsletterTextOrMediaMixinGroup(e);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, n.value, {
                wAMOSubMixin: r.success ? r.value : null,
                newsletterTextOrMediaMixinGroup: a.value
            }));
        }
        return a;
    }
    l.parseNewsletterQuestionMixin = e;
}, 98);