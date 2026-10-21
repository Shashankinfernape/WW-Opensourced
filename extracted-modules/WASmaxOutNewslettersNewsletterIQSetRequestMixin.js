__d("WASmaxOutNewslettersNewsletterIQSetRequestMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutNewslettersBaseIQSetRequestMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ iqTo }) {
        const n = o("WASmaxOutNewslettersBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(o("WASmaxJsx").smax("iq", {
            to: o("WAWap").JID(iqTo),
            xmlns: "newsletter"
        }));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterIQSetRequestMixin = s;
}, 98);