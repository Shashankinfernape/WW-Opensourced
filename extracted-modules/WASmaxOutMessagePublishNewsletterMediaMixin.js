__d("WASmaxOutMessagePublishNewsletterMediaMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishContentTypeMediaMixin",
    "WASmaxOutMessagePublishMediaMetaMixin",
    "WASmaxOutMessagePublishMessageAssociationTypeMixin",
    "WASmaxOutMessagePublishPayloadMixin",
    "WASmaxOutMessagePublishWAMOSubMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ hasWAMOSub, messageAssociationTypeMixinArgs, mediaMetaMixinArgs, plaintextMediatype, payloadMixinArgs }) {
        const l = o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishMediaMetaMixin").mergeMediaMetaMixin, o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishMessageAssociationTypeMixin").mergeMessageAssociationTypeMixin, o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishWAMOSubMixin").mergeWAMOSubMixin, o("WASmaxOutMessagePublishContentTypeMediaMixin").mergeContentTypeMediaMixin(o("WASmaxJsx").smax("message", null, o("WASmaxOutMessagePublishPayloadMixin").mergePayloadMixin(o("WASmaxJsx").smax("plaintext", {
            mediatype: o("WAWap").CUSTOM_STRING(plaintextMediatype)
        }), payloadMixinArgs))), hasWAMOSub), messageAssociationTypeMixinArgs), mediaMetaMixinArgs);
        return l;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterMediaMixin = s;
}, 98);