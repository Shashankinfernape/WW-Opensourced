__d("WASmaxOutNewslettersNewsletterMessageRequestIQPayloadMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutNewslettersNewsletterMessageRequestPayloadMixin",
    "WASmaxOutNewslettersQueryNewsletterParamsMixin",
    "WASmaxOutNewslettersSelfIQGetRequestMixin"
], function(t, n, r, o, a, i, l) {
    function e({ queryNewsletterParamsMixinArgs, newsletterMessageRequestPayloadMixinArgs }) {
        const r = o("WASmaxOutNewslettersSelfIQGetRequestMixin").mergeSelfIQGetRequestMixin(o("WASmaxJsx").smax("iq", null, o("WASmaxOutNewslettersNewsletterMessageRequestPayloadMixin").mergeNewsletterMessageRequestPayloadMixin(o("WASmaxOutNewslettersQueryNewsletterParamsMixin").mergeQueryNewsletterParamsMixin(o("WASmaxJsx").smax("messages", null), queryNewsletterParamsMixinArgs), newsletterMessageRequestPayloadMixinArgs)));
        return r;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterMessageRequestIQPayloadMixin = s;
}, 98);