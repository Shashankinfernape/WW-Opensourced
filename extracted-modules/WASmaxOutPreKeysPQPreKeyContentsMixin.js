__d("WASmaxOutPreKeysPQPreKeyContentsMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPreKeysKeyIDMixin",
    "WASmaxOutPreKeysPQKeyDataMixin"
], function(t, n, r, o, a, i, l) {
    function e({ keyIDMixinArgs, pQKeyDataMixinArgs, signatureElementValue }) {
        let t;
        const i = (t = o("WASmaxJsx")).smax("smax$any", null, o("WASmaxOutPreKeysKeyIDMixin").mergeKeyIDMixin(t.smax("id", null), keyIDMixinArgs), o("WASmaxOutPreKeysPQKeyDataMixin").mergePQKeyDataMixin(t.smax("value", null), pQKeyDataMixinArgs), t.smax("signature", null, signatureElementValue));
        return i;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergePQPreKeyContentsMixin = s;
}, 98);