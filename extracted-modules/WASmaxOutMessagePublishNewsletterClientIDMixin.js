__d("WASmaxOutMessagePublishNewsletterClientIDMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishMetaPremiumTypeMixin",
    "WASmaxOutMessagePublishMsgMetaOriginMixin",
    "WASmaxOutMessagePublishNewsletterAIContentMetaMixin",
    "WASmaxOutMessagePublishNewsletterClientIdContent",
    "WASmaxOutMessagePublishSenderContentTypeMediaRCATMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ messageId, msgMetaOriginMixinArgs, senderContentTypeMediaRCATMixinArgs, metaPremiumTypeMixinArgs, hasNewsletterAIContentMeta, newsletterClientIdContentArgs }) {
        let t;
        const u = o("WASmaxOutMessagePublishNewsletterClientIdContent").mergeNewsletterClientIdContent((t = o("WASmaxMixins")).optionalMerge(o("WASmaxOutMessagePublishNewsletterAIContentMetaMixin").mergeNewsletterAIContentMetaMixin, t.optionalMerge(o("WASmaxOutMessagePublishMetaPremiumTypeMixin").mergeMetaPremiumTypeMixin, t.optionalMerge(o("WASmaxOutMessagePublishSenderContentTypeMediaRCATMixin").mergeSenderContentTypeMediaRCATMixin, t.optionalMerge(o("WASmaxOutMessagePublishMsgMetaOriginMixin").mergeMsgMetaOriginMixin, o("WASmaxJsx").smax("message", {
            id: o("WAWap").STANZA_ID(messageId)
        }), msgMetaOriginMixinArgs), senderContentTypeMediaRCATMixinArgs), metaPremiumTypeMixinArgs), hasNewsletterAIContentMeta), newsletterClientIdContentArgs);
        return u;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterClientIDMixin = s;
}, 98);