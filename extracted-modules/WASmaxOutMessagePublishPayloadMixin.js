__d("WASmaxOutMessagePublishPayloadMixin", [
    "WASmaxJsx",
    "WASmaxMixins"
], function(t, n, r, o, a, i, l) {
    function e({ plaintextElementValue }) {
        const n = o("WASmaxJsx").smax("plaintext", null, plaintextElementValue);
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergePayloadMixin = s;
}, 98);