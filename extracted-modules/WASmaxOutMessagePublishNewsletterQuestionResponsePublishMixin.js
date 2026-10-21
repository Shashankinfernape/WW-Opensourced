__d("WASmaxOutMessagePublishNewsletterQuestionResponsePublishMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishContentTypeTextMixin",
    "WASmaxOutMessagePublishPayloadMixin",
    "WASmaxOutMessagePublishQuestionTypeResponseMixin"
], function(t, n, r, o, a, i, l) {
    function e({ payloadMixinArgs }) {
        const n = o("WASmaxOutMessagePublishQuestionTypeResponseMixin").mergeQuestionTypeResponseMixin(o("WASmaxOutMessagePublishContentTypeTextMixin").mergeContentTypeTextMixin(o("WASmaxJsx").smax("message", null, o("WASmaxOutMessagePublishPayloadMixin").mergePayloadMixin(o("WASmaxJsx").smax("plaintext", null), payloadMixinArgs))));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterQuestionResponsePublishMixin = s;
}, 98);