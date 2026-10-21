__d("WAWebShortcakeLinkingAlgorithm", [
    "WAArrayBufferUtils",
    "WAByteArray",
    "WACryptoAesGcm",
    "WACryptoHkdf",
    "WACryptoSha256",
    "WAWebAltDeviceLinkingBase32Encode",
    "WAWebCryptoCurve25519",
    "WAWebProtobufsCompanionReg.pb",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = 32;
    const s = 5;
    const u = 12;
    const c = 32;
    const d = "Pairing Information Encryption Key";
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, deviceType) {
            const keypair = yield o("WAWebCryptoCurve25519").keyPair();
            const companionNonce = new Uint8Array(e);
            self.crypto.getRandomValues(companionNonce);
            const i = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsCompanionReg.pb").CompanionEphemeralIdentitySpec, {
                publicKey: keypair.pubKey,
                deviceType,
                ref: t
            }).readBuffer();
            const l = yield _(i, companionNonce);
            const prologuePayloadBytes = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsCompanionReg.pb").ProloguePayloadSpec, {
                companionEphemeralIdentity: i,
                commitment: {
                    hash: l
                }
            }).readBuffer();
            return {
                keypair,
                companionNonce,
                companionEphemeralIdentityBytes: i,
                companionCommitmentHash: l,
                prologuePayloadBytes
            };
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAArrayBufferUtils").concatBuffers([
                e,
                o("WAByteArray").uint8ArrayToBuffer(t)
            ]);
            return o("WACryptoSha256").sha256(n);
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { nonce, publicKey }) {
            if (publicKey == null || publicKey.byteLength !== 32) {
                throw r("err")("Shortcake: PrimaryEphemeralIdentity.publicKey must be 32 bytes");
            }
            if (nonce == null || nonce.byteLength !== 32) {
                throw r("err")("Shortcake: PrimaryEphemeralIdentity.nonce must be 32 bytes");
            }
            return y(e, new Uint8Array(publicKey), new Uint8Array(nonce));
        });
        return h.apply(this, arguments);
    }
    function y(e, t, n) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = o("WAArrayBufferUtils").concatBuffers([
                o("WAByteArray").uint8ArrayToBuffer(e),
                o("WAByteArray").uint8ArrayToBuffer(t)
            ]);
            const a = new Uint8Array((yield o("WACryptoSha256").sha256(r)));
            const i = new Uint8Array(s);
            for(let l = 0; l < s; l++){
                i[l] = n[l] ^ a[l];
            }
            return o("WAWebAltDeviceLinkingBase32Encode").bytesToCrockford(i);
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ companionEphemeralPrivateKey, deviceType, primaryPublicKey, ref }) {
            const i = yield o("WAWebCryptoCurve25519").sharedSecret(primaryPublicKey, companionEphemeralPrivateKey);
            const l = new TextEncoder().encode(`Companion Pairing ${String(deviceType)} with ref ${ref}`);
            return o("WACryptoHkdf").extractWithSaltAndExpand(i, l, d, c);
        });
        return v.apply(this, arguments);
    }
    function S(e, t) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = new Uint8Array(u);
            self.crypto.getRandomValues(n);
            return L(e, t, n);
        });
        return R.apply(this, arguments);
    }
    function L(e, t, n) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const encryptedPayload = yield o("WACryptoAesGcm").gcmEncrypt(t, n, e);
            return {
                encryptedPayload,
                iv: o("WAByteArray").uint8ArrayToBuffer(n)
            };
        });
        return E.apply(this, arguments);
    }
    l.generateCompanionEphemeralKeypair = m;
    l.generateCompanionCommitment = _;
    l.deriveVerificationCode = g;
    l.deriveVerificationCodeInternal = y;
    l.deriveEncryptionKey = b;
    l.encryptPairingRequest = S;
    l.encryptPairingRequestInternal = L;
}, 98);