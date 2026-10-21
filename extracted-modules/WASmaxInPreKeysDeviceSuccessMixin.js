__d("WASmaxInPreKeysDeviceSuccessMixin", [
    "WAResultOrError",
    "WASmaxInPreKeysBotIdentityKeyAuthMixin",
    "WASmaxInPreKeysDeviceIdentityMixin",
    "WASmaxInPreKeysIdentityKeyMixin",
    "WASmaxInPreKeysKeyTypeMixin",
    "WASmaxInPreKeysNonE2EEAttestationOrForceOverrideE2EEStateMixinGroup",
    "WASmaxInPreKeysPQKeyMixin",
    "WASmaxInPreKeysPreKeyMixin",
    "WASmaxInPreKeysRegistrationIDMixin",
    "WASmaxInPreKeysSignedPreKeyMixin"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInPreKeysRegistrationIDMixin").parseRegistrationIDMixin(e);
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInPreKeysKeyTypeMixin").parseKeyTypeMixin(e);
        const r = o("WASmaxInPreKeysIdentityKeyMixin").parseIdentityKeyMixin(e);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInPreKeysBotIdentityKeyAuthMixin").parseBotIdentityKeyAuthMixin(e);
        const i = o("WASmaxInPreKeysPreKeyMixin").parsePreKeyMixin(e);
        const l = o("WASmaxInPreKeysSignedPreKeyMixin").parseSignedPreKeyMixin(e);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxInPreKeysPQKeyMixin").parsePQKeyMixin(e);
        const u = o("WASmaxInPreKeysDeviceIdentityMixin").parseDeviceIdentityMixin(e);
        const c = o("WASmaxInPreKeysNonE2EEAttestationOrForceOverrideE2EEStateMixinGroup").parseNonE2EEAttestationOrForceOverrideE2EEStateMixinGroup(e);
        return o("WAResultOrError").makeResult(babelHelpers.extends({}, t.value, {
            keyTypeMixin: n.success ? n.value : null
        }, r.value, {
            botIdentityKeyAuthMixin: a.success ? a.value : null,
            preKeyMixin: i.success ? i.value : null
        }, l.value, {
            pQKeyMixin: s.success ? s.value : null,
            deviceIdentityMixin: u.success ? u.value : null,
            nonE2EEAttestationOrForceOverrideE2EEStateMixinGroup: c.success ? c.value : null
        }));
    }
    l.parseDeviceSuccessMixin = e;
}, 98);