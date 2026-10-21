__d("WASmaxOutMdRegularCompanionSetRegResponseBundleMixin", [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ keyAttestationKeyId: t, keyAttestationElementValue: n }) {
        const r = o("WASmaxJsx").smax("key_attestation", {
            key_id: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t)
        }, n);
        return r;
    }
    function s({ gpiaElementValue: t }) {
        const n = o("WASmaxJsx").smax("gpia", null, t);
        return n;
    }
    function u({ clientAppIdElementValue: t }) {
        const n = o("WASmaxJsx").smax("client-app-id", null, t);
        return n;
    }
    function c({ keyAttestationArgs: n, gpiaArgs: r, clientAppIdArgs: a, deviceIdentityKeyIndex: i, deviceIdentityElementValue: l }) {
        const c = o("WASmaxJsx").smax("smax$any", null, o("WASmaxJsx").smax("pair-device-sign", null, o("WASmaxJsx").smax("device-identity", {
            "key-index": o("WAWap").INT(i)
        }, l), o("WASmaxChildren").OPTIONAL_CHILD(e, n), o("WASmaxChildren").OPTIONAL_CHILD(s, r), o("WASmaxChildren").OPTIONAL_CHILD(u, a)));
        return c;
    }
    function d(e, t) {
        const n = c(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    l.makeRegularCompanionSetRegResponseBundlePairDeviceSignKeyAttestation = e;
    l.makeRegularCompanionSetRegResponseBundlePairDeviceSignGpia = s;
    l.makeRegularCompanionSetRegResponseBundlePairDeviceSignClientAppId = u;
    l.mergeRegularCompanionSetRegResponseBundleMixin = d;
}, 98);