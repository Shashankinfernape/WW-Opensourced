__d("WASmaxOutMessagePublishNewsletterRevokeMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishAdminRevokeMixin",
    "WASmaxOutMessagePublishContentTypeTextMixin",
    "WASmaxOutMessagePublishWAMOSubMixin"
], function(t, n, r, o, a, i, l) {
    function e({ hasWAMOSub }) {
        const n = o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishWAMOSubMixin").mergeWAMOSubMixin, o("WASmaxOutMessagePublishContentTypeTextMixin").mergeContentTypeTextMixin(o("WASmaxOutMessagePublishAdminRevokeMixin").mergeAdminRevokeMixin(o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("plaintext", null)))), hasWAMOSub);
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterRevokeMixin = s;
}, 98);