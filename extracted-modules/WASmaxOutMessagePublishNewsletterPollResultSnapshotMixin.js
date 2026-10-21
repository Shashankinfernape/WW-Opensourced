__d("WASmaxOutMessagePublishNewsletterPollResultSnapshotMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishContentTypePollResultSnapshotMixin",
    "WASmaxOutMessagePublishPayloadMixin",
    "WASmaxOutMessagePublishWAMOSubMixin"
], function(t, n, r, o, a, i, l) {
    function e({ hasWAMOSub, payloadMixinArgs }) {
        const r = o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishWAMOSubMixin").mergeWAMOSubMixin, o("WASmaxOutMessagePublishContentTypePollResultSnapshotMixin").mergeContentTypePollResultSnapshotMixin(o("WASmaxJsx").smax("message", null, o("WASmaxOutMessagePublishPayloadMixin").mergePayloadMixin(o("WASmaxJsx").smax("plaintext", null), payloadMixinArgs))), hasWAMOSub);
        return r;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterPollResultSnapshotMixin = s;
}, 98);