__d("WASmaxOutMessagePublishClickToWhatsAppAttributionMixin", [
    "WASmaxJsx",
    "WASmaxMixins"
], function(t, n, r, o, a, i, l) {
    function e({ ctwaAttributionElementValue: t }) {
        const n = o("WASmaxJsx").smax("ctwa_attribution", null, t);
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeClickToWhatsAppAttributionMixin = s;
}, 98);