__d("WASmaxOutReceiptNewsletterMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutReceiptStatusClassMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ receiptTo, hasStatusClass }) {
        const r = o("WASmaxMixins").optionalMerge(o("WASmaxOutReceiptStatusClassMixin").mergeStatusClassMixin, o("WASmaxJsx").smax("receipt", {
            to: o("WAWap").JID(receiptTo)
        }), hasStatusClass);
        return r;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterMixin = s;
}, 98);