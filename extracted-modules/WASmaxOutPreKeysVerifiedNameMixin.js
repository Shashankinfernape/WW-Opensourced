__d("WASmaxOutPreKeysVerifiedNameMixin", [
    "WASmaxJsx",
    "WASmaxMixins"
], function(t, n, r, o, a, i, l) {
    function e({ verifiedNameElementValue }) {
        const n = o("WASmaxJsx").smax("smax$any", null, o("WASmaxJsx").smax("verified_name", null, verifiedNameElementValue));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeVerifiedNameMixin = s;
}, 98);