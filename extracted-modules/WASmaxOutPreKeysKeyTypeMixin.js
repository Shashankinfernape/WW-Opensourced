__d("WASmaxOutPreKeysKeyTypeMixin", [
    "WASmaxJsx",
    "WASmaxMixins"
], function(t, n, r, o, a, i, l) {
    function e({ typeElementValue }) {
        const n = o("WASmaxJsx").smax("smax$any", null, o("WASmaxJsx").smax("type", null, typeElementValue));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeKeyTypeMixin = s;
}, 98);