__d("WASmaxOutMessagePublishNewsletterQuestionReplyMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishNewsletterTextOrMediaMixinGroup",
    "WASmaxOutMessagePublishQuestionTypeReplyMixin",
    "WASmaxOutMessagePublishWAMOSubMixin"
], function(t, n, r, o, a, i, l) {
    function e({ hasWAMOSub, newsletterTextOrMediaMixinGroupArgs }) {
        const r = o("WASmaxOutMessagePublishNewsletterTextOrMediaMixinGroup").mergeNewsletterTextOrMediaMixinGroup(o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishWAMOSubMixin").mergeWAMOSubMixin, o("WASmaxOutMessagePublishQuestionTypeReplyMixin").mergeQuestionTypeReplyMixin(o("WASmaxJsx").smax("message", null)), hasWAMOSub), newsletterTextOrMediaMixinGroupArgs);
        return r;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterQuestionReplyMixin = s;
}, 98);