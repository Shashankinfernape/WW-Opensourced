__d("WASmaxOutMdCompanionFinishRequest", [
    "WASmaxJsx",
    "WASmaxOutMdBaseIQSetRequestMixin",
    "WASmaxOutMdLinkCodePrimaryByPhoneDeprecatedOrContactPointMixinGroup",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        let t;
        const { linkCodePrimaryByPhoneDeprecatedOrContactPointMixinGroupArgs: n, linkCodePairingWrappedKeyBundleElementValue: r, companionIdentityPublicElementValue: a, linkCodePairingRefElementValue: i } = e;
        const l = o("WASmaxOutMdBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin((t = o("WASmaxJsx")).smax("iq", {
            xmlns: "md",
            to: o("WAWap").S_WHATSAPP_NET
        }, o("WASmaxOutMdLinkCodePrimaryByPhoneDeprecatedOrContactPointMixinGroup").mergeLinkCodePrimaryByPhoneDeprecatedOrContactPointMixinGroup(t.smax("link_code_companion_reg", {
            stage: "companion_finish"
        }, t.smax("link_code_pairing_wrapped_key_bundle", null, r), t.smax("companion_identity_public", null, a), t.smax("link_code_pairing_ref", null, i)), n)));
        return l;
    }
    l.makeCompanionFinishRequest = e;
}, 98);