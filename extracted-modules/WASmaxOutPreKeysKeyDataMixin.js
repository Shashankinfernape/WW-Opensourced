__d("WASmaxOutPreKeysKeyDataMixin", [
    "WASmaxJsx",
    "WASmaxMixins"
], function(t, n, r, o, a, i, l) {
    function e({ anyElementValue }) {
        const n = o("WASmaxJsx").smax("smax$any", null, anyElementValue);
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeKeyDataMixin = s;
}, 98);