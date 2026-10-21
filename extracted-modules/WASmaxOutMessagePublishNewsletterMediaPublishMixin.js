__d("WASmaxOutMessagePublishNewsletterMediaPublishMixin", [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishNewsletterMediaMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const e_messageMediaId = e.messageMediaId;
        const n = o("WASmaxOutMessagePublishNewsletterMediaMixin").mergeNewsletterMediaMixin(o("WASmaxJsx").smax("message", {
            media_id: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, e_messageMediaId)
        }), e);
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterMediaPublishMixin = s;
}, 98);