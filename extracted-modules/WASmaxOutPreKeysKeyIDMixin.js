__d("WASmaxOutPreKeysKeyIDMixin", [
    "WASmaxJsx",
    "WASmaxMixins"
], function(t, n, r, o, a, i, l) {
    function e({ idElementValue }) {
        const n = o("WASmaxJsx").smax("id", null, idElementValue);
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeKeyIDMixin = s;
}, 98);