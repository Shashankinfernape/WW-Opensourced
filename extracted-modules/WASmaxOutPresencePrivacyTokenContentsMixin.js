__d("WASmaxOutPresencePrivacyTokenContentsMixin", [
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
    l.mergePrivacyTokenContentsMixin = s;
}, 98);