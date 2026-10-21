__d("WASmaxOutWaffleRSAEncryptionMetadataMixin", [
    "WASmaxJsx",
    "WASmaxMixins"
], function(t, n, r, o, a, i, l) {
    function e({ encryptedKeyElementValue, nonceElementValue, encryptedDataElementValue, authTagElementValue }) {
        let t;
        const l = (t = o("WASmaxJsx")).smax("smax$any", {
            version: "1",
            algorithm: "rsa2048"
        }, t.smax("encrypted_key", null, encryptedKeyElementValue), t.smax("nonce", null, nonceElementValue), t.smax("encrypted_data", null, encryptedDataElementValue), t.smax("auth_tag", null, authTagElementValue));
        return l;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeRSAEncryptionMetadataMixin = s;
}, 98);