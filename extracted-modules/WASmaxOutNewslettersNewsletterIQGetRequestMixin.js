__d("WASmaxOutNewslettersNewsletterIQGetRequestMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutNewslettersBaseIQGetRequestMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ iqTo }) {
        const n = o("WASmaxOutNewslettersBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq", {
            to: o("WAWap").JID(iqTo),
            xmlns: "newsletter"
        }));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterIQGetRequestMixin = s;
}, 98);