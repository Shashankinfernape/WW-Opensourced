__d("WASmaxOutMessagePublishNewsletterReactionRevokeMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishContentTypeReactionMixin",
    "WASmaxOutMessagePublishRevokeMixin"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WASmaxOutMessagePublishContentTypeReactionMixin").mergeContentTypeReactionMixin(o("WASmaxOutMessagePublishRevokeMixin").mergeRevokeMixin(o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("reaction", null))));
        return e;
    }
    function s(t) {
        const n = e();
        return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeNewsletterReactionRevokeMixin = s;
}, 98);