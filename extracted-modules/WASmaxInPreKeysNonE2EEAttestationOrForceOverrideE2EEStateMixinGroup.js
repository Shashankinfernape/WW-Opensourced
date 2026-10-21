__d("WASmaxInPreKeysNonE2EEAttestationOrForceOverrideE2EEStateMixinGroup", [
    "WAResultOrError",
    "WASmaxInPreKeysForceOverrideE2EEStateMixin",
    "WASmaxInPreKeysNonE2EEAttestationMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInPreKeysNonE2EEAttestationMixin").parseNonE2EEAttestationMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "NonE2EEAttestation",
                value: t.value
            });
        }
        const n = o("WASmaxInPreKeysForceOverrideE2EEStateMixin").parseForceOverrideE2EEStateMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "ForceOverrideE2EEState",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "NonE2EEAttestation",
            "ForceOverrideE2EEState"
        ], [
            t,
            n
        ]);
    }
    l.parseNonE2EEAttestationOrForceOverrideE2EEStateMixinGroup = e;
}, 98);