__d("WAWebAdvSignatureApi", [
    "invariant",
    "Promise",
    "WABase64",
    "WABinary",
    "WAByteArray",
    "WALogger",
    "WAWebAdvHandlerApi",
    "WAWebAdvSignatureConstants",
    "WAWebBackendJobs.flow",
    "WAWebBizCoexHostedAddVerification",
    "WAWebCryptoCurve25519",
    "WAWebCryptoCurve25519CalculateSignature",
    "WAWebCryptoCurve25519VerifySignature",
    "WAWebCurrentUser",
    "WAWebProtobufsAdv.pb",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebSignalStoreApi",
    "WAWebSignalUtilsApi",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "encodeProtobuf",
    "err"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    function C(e, t, n, r) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r, a = false) {
            const i = t.isHosted();
            try {
                const l = o("WAWebWidFactory").asUserWidOrThrow(t);
                const g = o("WAByteArray").uint8ArrayToBuffer(r);
                const h = yield o("WAWebSignalProtocolStore").getSignalProtocolStore().loadIdentityKey(o("WAWebSignalCommonUtils").createSignalAddress(t).toString());
                if (h != null) {
                    const y = o("WAWebCryptoCurve25519").toCurveKeyPubKey(o("WAWebSignalCommonUtils").strToBuffer(h));
                    if (o("WAWebSignalCommonUtils").bufferEqual(y, g)) {
                        return true;
                    }
                }
                const C = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsAdv.pb").ADVSignedDeviceIdentitySpec, n);
                if (C == null) {
                    s(0, 56342);
                }
                const b = yield o("WAWebSignalProtocolStore").getSignalProtocolStore().loadIdentityKey(o("WAWebSignalCommonUtils").createSignalAddress(l).toString());
                const v = b != null ? o("WAWebCryptoCurve25519").toCurveKeyPubKey(o("WAWebSignalCommonUtils").strToBuffer(b)) : null;
                if (!x(C, g, v)) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "validateADVIdentity: invalid account signature"
                    ])));
                    return false;
                }
                if (!A(C, g, v, i)) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "validateADVIdentity: invalid device signature"
                    ])));
                    return false;
                }
                const S = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsAdv.pb").ADVDeviceIdentitySpec, C.details);
                if (S == null) {
                    s(0, 56341);
                }
                let R = C.accountSignatureKey;
                if (S.accountType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "validateADVIdentity: add to coex cache for ",
                        ""
                    ])), t?.toLogString());
                    o("WAWebBizCoexHostedAddVerification").addToCoexHostedVerificationCache(t);
                }
                R = R && R.byteLength > 0 ? R : undefined;
                try {
                    yield o("WAWebAdvHandlerApi").handleADVDeviceUpdateForMessage(t, S, v, R, g, a, S.accountType);
                } catch (error) {
                    if (!o("WAWebCurrentUser").isEmployee()) {
                        o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "validateADVIdentity: process adv device identity failed: ",
                            ""
                        ])), error);
                    } else {
                        const L = t.device;
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "advDeviceIdentity failed for deviceId: ",
                            ""
                        ])), L);
                        o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "validateADVIdentity: process adv device identity failed: ",
                            ""
                        ])), error).sendLogs("validate-adv-identity-handle-update-for-message-failed");
                    }
                    return false;
                }
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "validateADVIdentity: verified acctSig + deviceSig"
                ])));
                return true;
            } catch (e) {
                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "validateADVIdentity: failed"
                ])));
                return false;
            }
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ author, deviceIdentity, encs, offline = false }) {
            const l = encs.find((e)=>e.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg);
            if (!l) {
                return true;
            }
            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "validateADVwithEncs: start validate prekey msg "
            ])));
            try {
                if (author == null) {
                    s(0, 56346);
                }
                const u = o("WAWebSignalUtilsApi").extractIdentityKey(l.ciphertext);
                if (u == null) {
                    s(0, 56345);
                }
                const c = yield C(author, deviceIdentity, new Uint8Array(u), offline);
                yield o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode();
                return c;
            } catch (error) {
                o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "validateADVwithEncs: failed ",
                    ""
                ])), error);
                return false;
            }
        });
        return S.apply(this, arguments);
    }
    function R() {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = new Uint8Array(32);
            self.crypto.getRandomValues(e);
            const t = o("WABase64").encodeB64(e);
            yield o("WAWebUserPrefsMultiDevice").setADVSecretKey(t);
            return t;
        });
        return L.apply(this, arguments);
    }
    function E() {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebUserPrefsMultiDevice").getADVSecretKey();
            if (e == null) {
                throw r("err")("secretKey is null or undefined");
            }
            return e;
        });
        return k.apply(this, arguments);
    }
    function I(e) {
        if (e == null) {
            return (y || (y = n("Promise"))).reject(r("err")("advSignedDeviceIdentity is null or undefined"));
        }
        if (e.deviceSignature == null) {
            return (y || (y = n("Promise"))).reject(r("err")("advSignedDeviceIdentity is missing deviceSignature"));
        }
        return o("WAWebSignalStoreApi").waSignalStore.putADVSignedIdentity(e);
    }
    function T() {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebSignalStoreApi").waSignalStore.getADVSignedIdentity();
            if (e == null) {
                throw r("err")("advSignedDeviceIdentity is null or undefined");
            }
            if (e.deviceSignature == null) {
                throw r("err")("advSignedDeviceIdentity is missing deviceSignature");
            }
            return o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsAdv.pb").ADVSignedDeviceIdentitySpec, e).readByteArrayView();
        });
        return D.apply(this, arguments);
    }
    function x(e, t, n) {
        const r = P(e, n);
        const { accountSignature, accountSignatureKey, advDeviceIdentityDetails } = r;
        return $(advDeviceIdentityDetails, accountSignature, t, accountSignatureKey);
    }
    function $(advDeviceIdentityDetails, accountSignature, n, accountSignatureKey) {
        let ADV_PREFIX_DEVICE_IDENTITY_ACCOUNT_SIGNATURE = o("WAWebAdvSignatureConstants").ADV_PREFIX_DEVICE_IDENTITY_ACCOUNT_SIGNATURE;
        const i = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsAdv.pb").ADVDeviceIdentitySpec, advDeviceIdentityDetails);
        if (i.deviceType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) {
            ADV_PREFIX_DEVICE_IDENTITY_ACCOUNT_SIGNATURE = o("WAWebAdvSignatureConstants").ADV_HOSTED_PREFIX_DEVICE_IDENTITY_ACCOUNT_SIGNATURE;
        }
        if (accountSignatureKey == null) {
            s(0, 56344);
        }
        if (accountSignature == null) {
            s(0, 56295);
        }
        const l = o("WABinary").Binary.build(ADV_PREFIX_DEVICE_IDENTITY_ACCOUNT_SIGNATURE, advDeviceIdentityDetails, n).readByteArrayView();
        return o("WAWebCryptoCurve25519VerifySignature").verifySignature(new Uint8Array(accountSignatureKey), l, new Uint8Array(accountSignature));
    }
    function P(e, t) {
        const e_details = e.details;
        let r = e.accountSignatureKey || t;
        r = r && r.byteLength > 0 ? r : t;
        if (r == null) {
            s(0, 56344);
        }
        const e_accountSignature = e.accountSignature;
        if (e_accountSignature == null) {
            s(0, 56295);
        }
        if (e_details == null) {
            s(0, 70451);
        }
        return {
            accountSignatureKey: r,
            accountSignature: e_accountSignature,
            advDeviceIdentityDetails: e_details
        };
    }
    function N({ advSignedDeviceIdentity, identityKeyPair, primarySignatureKey }) {
        const advSignedDeviceIdentity_details = advSignedDeviceIdentity.details;
        const buffer = o("WABinary").Binary.build(o("WAWebAdvSignatureConstants").ADV_PREFIX_DEVICE_IDENTITY_DEVICE_SIGNATURE, advSignedDeviceIdentity_details, identityKeyPair.pubKey, primarySignatureKey).readByteArrayView().buffer;
        return o("WAWebCryptoCurve25519CalculateSignature").calculateSignature(identityKeyPair, buffer);
    }
    function M(advDeviceIdentityDetails, t, E2EE, deviceSignature, accountSignatureKey) {
        let ADV_PREFIX_DEVICE_IDENTITY_DEVICE_SIGNATURE = o("WAWebAdvSignatureConstants").ADV_PREFIX_DEVICE_IDENTITY_DEVICE_SIGNATURE;
        if (E2EE === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) {
            ADV_PREFIX_DEVICE_IDENTITY_DEVICE_SIGNATURE = o("WAWebAdvSignatureConstants").ADV_HOSTED_PREFIX_DEVICE_IDENTITY_DEVICE_SIGNATURE;
        }
        const l = o("WABinary").Binary.build(ADV_PREFIX_DEVICE_IDENTITY_DEVICE_SIGNATURE, advDeviceIdentityDetails, t, accountSignatureKey).readByteArrayView();
        return o("WAWebCryptoCurve25519VerifySignature").verifySignature(new Uint8Array(t), l, new Uint8Array(deviceSignature));
    }
    function w(e, t) {
        const { details, deviceSignature } = e;
        if (deviceSignature == null) {
            s(0, 56343);
        }
        let o = e.accountSignatureKey || t;
        o = o && o.byteLength > 0 ? o : t;
        if (o == null) {
            s(0, 56344);
        }
        if (details == null) {
            s(0, 70451);
        }
        return {
            accountSignatureKey: o,
            deviceSignature,
            advDeviceIdentityDetails: details
        };
    }
    function A(e, t, n, r = false) {
        const a = w(e, n);
        const { accountSignatureKey, advDeviceIdentityDetails, deviceSignature } = a;
        let E2EE = o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE;
        if (r) {
            E2EE = o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED;
        }
        return M(advDeviceIdentityDetails, t, E2EE, deviceSignature, accountSignatureKey);
    }
    function F(e) {
        const t = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsAdv.pb").ADVDeviceIdentitySpec, e.details);
        if (t == null) {
            s(0, 56341);
        }
        const { accountType, deviceType } = t;
        if (accountType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE) {
            s(0, 70449);
        }
        if (deviceType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE) {
            s(0, 70450);
        }
    }
    function O() {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebUserPrefsMultiDevice").setADVSecretKey(undefined);
        });
        return B.apply(this, arguments);
    }
    l.validateADVwithIdentityKey = C;
    l.validateADVwithEncs = v;
    l.generateADVSecretKey = R;
    l.getADVSecretKey = E;
    l.setADVSignedIdentity = I;
    l.getADVEncodedIdentity = T;
    l.verifyDeviceIdentityAccountSignature = x;
    l.generateDeviceSignature = N;
    l.clearADVSecretKey = O;
}, 98);