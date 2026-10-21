__d("WACryptoPQSession", [
    "WACryptoLibraryConfig",
    "WAResultOrError",
    "WASignalKeys",
    "WASignalOther",
    "WASignalPQXDH",
    "WASignalSignatures",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 64;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            if (o("WACryptoLibraryConfig").getCryptoLibraryConfig().isPq1on1MessageEnabled !== true) {
                return o("WAResultOrError").makeError("errSignalInvalidKey");
            }
            const n_kyberKey = n.kyberKey;
            if (n_kyberKey == null) {
                return o("WAResultOrError").makeError("errSignalInvalidKey");
            }
            const a = o("WASignalKeys").castToSerializedPubKey(n.signedKey.publicKey);
            const n_oneTimeKey = n.oneTimeKey;
            const l = {
                regId: o("WASignalOther").castRegistrationId(n.regId),
                identity: o("WASignalKeys").castToSerializedPubKey(n.identity),
                signedKey: {
                    id: o("WASignalKeys").castToSignedPreKeyId(n.signedKey.id),
                    publicKey: a,
                    signature: o("WASignalOther").ensureSize(n.signedKey.signature, e)
                },
                oneTimeKey: n_oneTimeKey != null ? {
                    id: o("WASignalKeys").castToPreKeyId(n_oneTimeKey.id),
                    publicKey: o("WASignalKeys").castToSerializedPubKey(n_oneTimeKey.publicKey)
                } : null,
                ratchetKey: a
            };
            const s = o("WASignalSignatures").verifyMsgSignalVariant(l.identity, l.signedKey.publicKey, l.signedKey.signature);
            if (!s) {
                return o("WAResultOrError").makeError("errSignalInvalidKey");
            }
            const u = o("WASignalOther").ensureSize(n_kyberKey.signature, e);
            const c = o("WASignalSignatures").verifyMsgSignalVariant(l.identity, n_kyberKey.publicKey, u);
            if (!c) {
                return o("WAResultOrError").makeError("errSignalInvalidKey");
            }
            const d = yield o("WASignalPQXDH").initiateSessionOutgoingPQ(t, l, o("WASignalKeys").makeKeyPair(), n_kyberKey.publicKey, n_kyberKey.id);
            const { kemCiphertext, session } = d;
            return o("WAResultOrError").makeResult({
                session,
                kemCiphertext,
                kyberPreKeyId: n_kyberKey.id
            });
        });
        return u.apply(this, arguments);
    }
    l.createOutgoingSessionPQ = s;
}, 98);