__d("WASmaxOutMessagePublishNewsletterEditMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishAdminEditMixin",
    "WASmaxOutMessagePublishNewsletterQuestionReplyOrTextOrMediaMixinGroup",
    "WASmaxOutMessagePublishWAMOSubMixin"
], function(t, n, r, o, a, i, l) {
    function e({ hasWAMOSub, newsletterQuestionReplyOrTextOrMediaMixinGroupArgs }) {
        const r = o("WASmaxOutMessagePublishNewsletterQuestionReplyOrTextOrMediaMixinGroup").mergeNewsletterQuestionReplyOrTextOrMediaMixinGroup(o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishWAMOSubMixin").mergeWAMOSubMixin, o("WASmaxOutMessagePublishAdminEditMixin").mergeAdminEditMixin(o("WASmaxJsx").smax("message", null)), hasWAMOSub), newsletterQuestionReplyOrTextOrMediaMixinGroupArgs);
        return r;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterEditMixin = s;
}, 98);