__d("WASmaxOutMessagePublishNewsletterQuestionPublishMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishNewsletterTextOrMediaPublishMixinGroup",
    "WASmaxOutMessagePublishQuestionTypeQuestionMixin",
    "WASmaxOutMessagePublishWAMOSubMixin"
], function(t, n, r, o, a, i, l) {
    function e({ hasWAMOSub, newsletterTextOrMediaPublishMixinGroupArgs }) {
        const r = o("WASmaxOutMessagePublishNewsletterTextOrMediaPublishMixinGroup").mergeNewsletterTextOrMediaPublishMixinGroup(o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishWAMOSubMixin").mergeWAMOSubMixin, o("WASmaxOutMessagePublishQuestionTypeQuestionMixin").mergeQuestionTypeQuestionMixin(o("WASmaxJsx").smax("message", null)), hasWAMOSub), newsletterTextOrMediaPublishMixinGroupArgs);
        return r;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterQuestionPublishMixin = s;
}, 98);