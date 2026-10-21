__d("WASmaxOutMessagePublishNewsletterReactionMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishContentTypeReactionMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ reactionCode }) {
        const n = o("WASmaxOutMessagePublishContentTypeReactionMixin").mergeContentTypeReactionMixin(o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("reaction", {
            code: o("WAWap").CUSTOM_STRING(reactionCode)
        })));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterReactionMixin = s;
}, 98);