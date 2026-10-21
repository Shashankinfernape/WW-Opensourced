__d("WASmaxOutPreKeysIdentityKeyBundleMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPreKeysIdentityKeyMixin",
    "WASmaxOutPreKeysKeyTypeMixin",
    "WASmaxOutPreKeysNonE2EEAttestationMixin",
    "WASmaxOutPreKeysPQLastResortKeyMixin",
    "WASmaxOutPreKeysPQPreKeyListMixin",
    "WASmaxOutPreKeysPreKeyListMixin",
    "WASmaxOutPreKeysRegistrationIDMixin",
    "WASmaxOutPreKeysRequestPaddingMixin",
    "WASmaxOutPreKeysSignedPreKeyMixin",
    "WASmaxOutPreKeysVerifiedNameMixin"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        let t;
        const { pQPreKeyListMixinArgs, pQLastResortKeyMixinArgs, keyTypeMixinArgs, verifiedNameMixinArgs, nonE2EEAttestationMixinArgs, requestPaddingMixinArgs } = e;
        const u = (t = o("WASmaxMixins")).optionalMerge(o("WASmaxOutPreKeysRequestPaddingMixin").mergeRequestPaddingMixin, t.optionalMerge(o("WASmaxOutPreKeysNonE2EEAttestationMixin").mergeNonE2EEAttestationMixin, t.optionalMerge(o("WASmaxOutPreKeysVerifiedNameMixin").mergeVerifiedNameMixin, t.optionalMerge(o("WASmaxOutPreKeysKeyTypeMixin").mergeKeyTypeMixin, t.optionalMerge(o("WASmaxOutPreKeysPQLastResortKeyMixin").mergePQLastResortKeyMixin, t.optionalMerge(o("WASmaxOutPreKeysPQPreKeyListMixin").mergePQPreKeyListMixin, o("WASmaxOutPreKeysSignedPreKeyMixin").mergeSignedPreKeyMixin(o("WASmaxOutPreKeysPreKeyListMixin").mergePreKeyListMixin(o("WASmaxOutPreKeysIdentityKeyMixin").mergeIdentityKeyMixin(o("WASmaxOutPreKeysRegistrationIDMixin").mergeRegistrationIDMixin(o("WASmaxJsx").smax("iq", null), e), e), e), e), pQPreKeyListMixinArgs), pQLastResortKeyMixinArgs), keyTypeMixinArgs), verifiedNameMixinArgs), nonE2EEAttestationMixinArgs), requestPaddingMixinArgs);
        return u;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeIdentityKeyBundleMixin = s;
}, 98);