__d("WASmaxOutMessagePublishNewsletterPollCreationMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishContentTypePollCreationMixin",
    "WASmaxOutMessagePublishPayloadMixin",
    "WASmaxOutMessagePublishWAMOSubMixin"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const { hasWAMOSub, payloadMixinArgs } = e;
        const r = o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishWAMOSubMixin").mergeWAMOSubMixin, o("WASmaxOutMessagePublishContentTypePollCreationMixin").mergeContentTypePollCreationMixin(o("WASmaxJsx").smax("message", null, o("WASmaxOutMessagePublishPayloadMixin").mergePayloadMixin(o("WASmaxJsx").smax("plaintext", null), payloadMixinArgs)), e), hasWAMOSub);
        return r;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterPollCreationMixin = s;
}, 98);