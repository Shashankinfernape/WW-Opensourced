__d("WASmaxOutMdSetPasskeyPrologueRequest", [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutMdBaseIQSetRequestMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ pairingHandoffProofElementValue }) {
        const n = o("WASmaxJsx").smax("pairing_handoff_proof", null, pairingHandoffProofElementValue);
        return n;
    }
    function s({ pairingHandoffProofArgs, credentialIdElementValue, webauthnAssertionElementValue, prologuePayloadElementValue }) {
        let n;
        const s = o("WASmaxOutMdBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin((n = o("WASmaxJsx")).smax("iq", {
            to: o("WAWap").S_WHATSAPP_NET,
            xmlns: "md"
        }, n.smax("passkey_prologue", null, n.smax("credential_id", null, credentialIdElementValue), n.smax("webauthn_assertion", null, webauthnAssertionElementValue), n.smax("prologue_payload", null, prologuePayloadElementValue), o("WASmaxChildren").OPTIONAL_CHILD(e, pairingHandoffProofArgs))));
        return s;
    }
    l.makeSetPasskeyPrologueRequestPasskeyProloguePairingHandoffProof = e;
    l.makeSetPasskeyPrologueRequest = s;
}, 98);