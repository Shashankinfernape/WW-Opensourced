__d("WASmaxOutWaffleRSAEncryptionMetadataV2Mixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ encryptedKeyElementValue, encryptedDataElementValue, authTagElementValue, keyIdElementValue }) {
        let t;
        const l = (t = o("WASmaxJsx")).smax("smax$any", {
            version: "2",
            algorithm: "rsa4096"
        }, t.smax("encrypted_key", null, encryptedKeyElementValue), t.smax("encrypted_data", null, encryptedDataElementValue), t.smax("auth_tag", null, authTagElementValue), t.smax("key_id", null, o("WAWap").INT(keyIdElementValue)));
        return l;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeRSAEncryptionMetadataV2Mixin = s;
}, 98);