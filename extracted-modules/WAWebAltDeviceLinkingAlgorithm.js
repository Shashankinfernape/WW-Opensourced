__d("WAWebAltDeviceLinkingAlgorithm", [
    "WAArrayBufferUtils",
    "WABinary",
    "WAByteArray",
    "WACryptoHkdf",
    "WALogger",
    "WAWebAltDeviceLinkingBase32Encode",
    "WAWebAltDeviceLinkingQpl",
    "WAWebCryptoCurve25519",
    "WAWebSignalStoreApi",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d() {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "alt pairing: generate random code"
        ])));
        const t = new Uint8Array(5);
        self.crypto.getRandomValues(t);
        return o("WAWebAltDeviceLinkingBase32Encode").bytesToCrockford(t);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                return yield e();
            } catch (e) {
                o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(t);
                throw e;
            }
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = false) {
            const r = new (o("WABinary")).Binary(t);
            const a = yield self.crypto.subtle.deriveKey({
                name: "PBKDF2",
                hash: "SHA-256",
                salt: r.readBuffer(),
                iterations: 2 << 16
            }, e, {
                name: "AES-CTR",
                length: 256
            }, n, [
                "encrypt",
                "decrypt"
            ]);
            return a;
        });
        return f.apply(this, arguments);
    }
    function g(e, t, n) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: encrypt companion hello"
            ])));
            const r = {
                name: "AES-CTR",
                length: 64,
                counter: t
            };
            const a = yield self.crypto.subtle.encrypt(r, n, e);
            return a;
        });
        return h.apply(this, arguments);
    }
    function y(e, t, n) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: decrypt primary hello"
            ])));
            const r = {
                name: "AES-CTR",
                length: 64,
                counter: t
            };
            const a = yield m(function() {
                return self.crypto.subtle.decrypt(r, n, e);
            }, "fail decrypt primary ephemeral pub");
            return a;
        });
        return C.apply(this, arguments);
    }
    function b() {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = d();
            const t = yield o("WAWebCryptoCurve25519").keyPair();
            const n = new Uint8Array(32);
            self.crypto.getRandomValues(n);
            const r = new Uint8Array(16);
            self.crypto.getRandomValues(r);
            const a = yield S(e, t, n, r);
            return babelHelpers.extends({}, a, {
                linkCodePairingSecret: e
            });
        });
        return v.apply(this, arguments);
    }
    function S(e, t, n, r) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            const a = yield self.crypto.subtle.importKey("raw", new TextEncoder().encode(e), {
                name: "PBKDF2"
            }, false, [
                "deriveKey"
            ]);
            const i = yield _(a, n);
            const l = yield m(function() {
                return g(t.pubKey, r, i);
            }, "fail encrypt companion hello");
            const s = new (o("WABinary")).Binary;
            s.writeByteArray(n);
            s.writeByteArray(r);
            s.writeByteArray(new Uint8Array(l));
            const u = s.readBuffer();
            return {
                linkCodePairingWrappedCompanionEphemeralPub: u,
                linkCodeKey: a,
                linkCodePairingCompanionADVEphemeralKeyPair: t
            };
        });
        return R.apply(this, arguments);
    }
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WACryptoHkdf").extractWithSaltAndExpand(e, t, "link_code_pairing_key_bundle_encryption_key", 32);
            return n;
        });
        return E.apply(this, arguments);
    }
    function k(e, t, n) {
        return o("WAArrayBufferUtils").concatBuffers([
            e,
            t,
            o("WAByteArray").uint8ArrayToBuffer(n)
        ]);
    }
    function I(e, t, n) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: encrypt key bundle"
            ])));
            const r = yield self.crypto.subtle.importKey("raw", e, {
                name: "AES-GCM"
            }, false, [
                "encrypt"
            ]);
            const a = {
                name: "AES-GCM",
                iv: t
            };
            const i = yield m(function() {
                return self.crypto.subtle.encrypt(a, r, n);
            }, "fail encrypt wrapped key bundle");
            return i;
        });
        return T.apply(this, arguments);
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ linkCodeKey: t, linkCodePairingCompanionADVEphemeralKeyPair: n, linkCodePairingWrappedPrimaryEphemeralPub: a, primaryIdentityPublic: i }) {
            const l = yield o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo();
            if (l == null) {
                throw r("err")("alt pairing: Did not find registration info");
            }
            const s = new Uint8Array(32);
            self.crypto.getRandomValues(s);
            const u = new Uint8Array(32);
            self.crypto.getRandomValues(u);
            const c = new Uint8Array(12);
            self.crypto.getRandomValues(c);
            return $({
                companionFinishIV: c,
                companionFinishKdfSalt: u,
                companionIdentityPrivate: l.identityKeyPair.privKey,
                companionIdentityPublic: l.identityKeyPair.pubKey,
                linkCodeKey: t,
                linkCodePairingAdvRootSecret: s,
                linkCodePairingCompanionADVEphemeralKeyPair: n,
                linkCodePairingWrappedPrimaryEphemeralPub: a,
                primaryIdentityPublic: i
            });
        });
        return x.apply(this, arguments);
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ companionFinishIV: t, companionFinishKdfSalt: n, companionIdentityPrivate: a, companionIdentityPublic: i, linkCodeKey: l, linkCodePairingAdvRootSecret: s, linkCodePairingCompanionADVEphemeralKeyPair: u, linkCodePairingWrappedPrimaryEphemeralPub: c, primaryIdentityPublic: d }) {
            const p = new (o("WABinary")).Binary(c);
            const f = p.readByteArrayView(32);
            const g = p.readByteArrayView(16);
            const h = p.readByteArrayView();
            const C = yield _(l, f);
            const b = yield m(function() {
                return y(h, g, C);
            }, "fail decrypt primary ephemeral pub");
            if (b.byteLength === 0) {
                throw r("err")("alt pairing: linkCodePairingDecryptedPrimaryEphemeralPub is an empty buffer");
            }
            const v = yield m(function() {
                return o("WAWebCryptoCurve25519").sharedSecret(b, u.privKey);
            }, "fail generate ephemeral shared secret");
            const S = yield L(v, n);
            const R = k(i, d, s);
            const E = yield I(S, t, R);
            const T = new (o("WABinary")).Binary;
            T.writeByteArray(n);
            T.writeByteArray(t);
            T.writeBuffer(E);
            const D = yield m(function() {
                return o("WAWebCryptoCurve25519").sharedSecret(d, a);
            }, "fail generate identity shared secret");
            const x = o("WAArrayBufferUtils").concatBuffers([
                v,
                D,
                o("WAByteArray").uint8ArrayToBuffer(s)
            ]);
            const $ = yield o("WACryptoHkdf").extractWithSaltAndExpand(x, null, "adv_secret", 32);
            const P = T.readBuffer();
            return {
                companionIdentityPublic: i,
                linkCodePairingWrappedKeyBundle: P,
                advSecret: $
            };
        });
        return P.apply(this, arguments);
    }
    l.generateRandomCode = d;
    l.deriveKey = _;
    l.encryptCompanionHello = g;
    l.decryptPrimaryHello = y;
    l.companionHello = b;
    l.companionHelloInternal = S;
    l.getBundleEncryptionKey = L;
    l.getKeyBundle = k;
    l.encryptKeyBundle = I;
    l.companionFinish = D;
    l.companionFinishInternal = $;
}, 98);