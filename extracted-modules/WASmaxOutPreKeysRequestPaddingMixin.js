__d("WASmaxOutPreKeysRequestPaddingMixin", [
    "WASmaxJsx",
    "WASmaxMixins"
], function(t, n, r, o, a, i, l) {
    function e({ paddingElementValue }) {
        const n = o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("padding", null, paddingElementValue));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeRequestPaddingMixin = s;
}, 98);