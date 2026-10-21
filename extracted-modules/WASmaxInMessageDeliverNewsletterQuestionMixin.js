__d("WASmaxInMessageDeliverNewsletterQuestionMixin", [
    "WAResultOrError",
    "WASmaxInMessageDeliverNewsletterTextOrMediaMixinGroup",
    "WASmaxInMessageDeliverQuestionTypeQuestionMixin",
    "WASmaxInMessageDeliverWAMOSubMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInMessageDeliverQuestionTypeQuestionMixin").parseQuestionTypeQuestionMixin(e);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInMessageDeliverWAMOSubMixin").parseWAMOSubMixin(e);
        const a = o("WASmaxInMessageDeliverNewsletterTextOrMediaMixinGroup").parseNewsletterTextOrMediaMixinGroup(e);
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