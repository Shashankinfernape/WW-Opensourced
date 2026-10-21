__d("WASmaxOutPreKeysNonE2EEAttestationMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ nonE2eeAttestationAccountType, valueElementValue, signatureElementValue }) {
        let t;
        const i = (t = o("WASmaxJsx")).smax("smax$any", null, t.smax("non_e2ee_attestation", {
            account_type: o("WAWap").CUSTOM_STRING(nonE2eeAttestationAccountType)
        }, t.smax("value", null, valueElementValue), t.smax("signature", null, signatureElementValue)));
        return i;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNonE2EEAttestationMixin = s;
}, 98);