__d("WASmaxOutPreKeysSignedPreKeyMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPreKeysKeyDataMixin",
    "WASmaxOutPreKeysKeyIDMixin"
], function(t, n, r, o, a, i, l) {
    function e({ keyIDMixinArgs, keyDataMixinArgs, signatureElementValue }) {
        let t;
        const i = (t = o("WASmaxJsx")).smax("smax$any", null, t.smax("skey", null, o("WASmaxOutPreKeysKeyIDMixin").mergeKeyIDMixin(t.smax("id", null), keyIDMixinArgs), o("WASmaxOutPreKeysKeyDataMixin").mergeKeyDataMixin(t.smax("value", null), keyDataMixinArgs), t.smax("signature", null, signatureElementValue)));
        return i;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeSignedPreKeyMixin = s;
}, 98);