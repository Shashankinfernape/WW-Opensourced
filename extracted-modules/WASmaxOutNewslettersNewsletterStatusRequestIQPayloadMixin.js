__d("WASmaxOutNewslettersNewsletterStatusRequestIQPayloadMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutNewslettersNewsletterStatusRequestPayloadMixin",
    "WASmaxOutNewslettersQueryNewsletterParamsMixin",
    "WASmaxOutNewslettersSelfIQGetRequestMixin"
], function(t, n, r, o, a, i, l) {
    function e({ queryNewsletterParamsMixinArgs, newsletterStatusRequestPayloadMixinArgs }) {
        const r = o("WASmaxOutNewslettersSelfIQGetRequestMixin").mergeSelfIQGetRequestMixin(o("WASmaxJsx").smax("iq", null, o("WASmaxOutNewslettersNewsletterStatusRequestPayloadMixin").mergeNewsletterStatusRequestPayloadMixin(o("WASmaxOutNewslettersQueryNewsletterParamsMixin").mergeQueryNewsletterParamsMixin(o("WASmaxJsx").smax("statuses", null), queryNewsletterParamsMixinArgs), newsletterStatusRequestPayloadMixinArgs)));
        return r;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterStatusRequestIQPayloadMixin = s;
}, 98);