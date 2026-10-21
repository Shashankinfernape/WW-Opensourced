__d("WAWebShortcakeLinkingApi", [
    "invariant",
    "$InternalEnum",
    "WALogger",
    "WAWebBackendApi",
    "WAWebProtobufsCompanionReg.pb",
    "WAWebShortcakeLinkingAlgorithm",
    "WAWebShortcakeLinkingHandoffProof",
    "WAWebShortcakeLinkingIq",
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
    let C;
    let b;
    let v;
    let S;
    let R;
    const L = n("$InternalEnum").Mirrored([
        "NotStarted",
        "Initialized",
        "WaitingForPrimaryIdentity",
        "WaitingForVerificationCodeConfirmation",
        "WaitingForPairingCompletion"
    ]);
    const E = 120000;
    class k {
        constructor(){
            this.epoch = 0;
            this.stage = L.NotStarted;
            this.keypair = null;
            this.companionNonce = null;
            this.deviceType = null;
            this.ref = null;
            this.encryptionKey = null;
            this.verificationCode = null;
            this.prologuePayloadBytes = null;
            this.skipHandoffUx = false;
            this.timeoutId = null;
        }
        clear() {
            this.epoch++;
            if (this.timeoutId != null) {
                self.clearTimeout(this.timeoutId);
            }
            this.stage = L.NotStarted;
            this.keypair = null;
            this.companionNonce = null;
            this.deviceType = null;
            this.ref = null;
            this.encryptionKey = null;
            this.verificationCode = null;
            this.prologuePayloadBytes = null;
            this.skipHandoffUx = false;
            this.timeoutId = null;
        }
    }
    const I = new k;
    function T() {
        return I.stage;
    }
    function D() {
        I.skipHandoffUx = true;
    }
    function x(e, t) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: initializing"
            ])));
            I.clear();
            const n = yield o("WAWebShortcakeLinkingAlgorithm").generateCompanionEphemeralKeypair(e, t);
            I.keypair = n.keypair;
            I.companionNonce = n.companionNonce;
            I.deviceType = t;
            I.ref = e;
            I.prologuePayloadBytes = n.prologuePayloadBytes;
            I.stage = L.Initialized;
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: initialized, prologue payload ready"
            ])));
            return n.prologuePayloadBytes;
        });
        return $.apply(this, arguments);
    }
    function P() {
        if (I.stage !== L.Initialized) {
            s(0, 152465, String(I.stage));
        }
        I.stage = L.WaitingForPrimaryIdentity;
        I.timeoutId = self.setTimeout(function() {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: timed out waiting for PrimaryEphemeralIdentity"
            ])));
            I.clear();
            o("WAWebBackendApi").frontendFireAndForget("shortcakeError", {
                reason: "timeout"
            });
        }, E);
        o("WAWebBackendApi").frontendFireAndForget("shortcakePrologueSent", {});
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "Shortcake: prologue sent, awaiting PrimaryEphemeralIdentity"
        ])));
    }
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: received PrimaryEphemeralIdentity"
            ])));
            if (I.stage !== L.WaitingForPrimaryIdentity) {
                s(0, 152467, String(I.stage));
            }
            const { companionNonce, keypair, deviceType, ref } = I;
            if (companionNonce == null || keypair == null || deviceType == null || ref == null) {
                throw r("err")("Shortcake: missing state for handlePrimaryEphemeralIdentity");
            }
            const l = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsCompanionReg.pb").PrimaryEphemeralIdentitySpec, e);
            const l_publicKey = l.publicKey;
            if (l_publicKey == null || l_publicKey.byteLength !== 32) {
                throw r("err")("Shortcake: PrimaryEphemeralIdentity.publicKey must be 32 bytes");
            }
            if (I.timeoutId != null) {
                self.clearTimeout(I.timeoutId);
                I.timeoutId = null;
            }
            I.stage = L.WaitingForVerificationCodeConfirmation;
            const I_epoch = I.epoch;
            try {
                yield o("WAWebShortcakeLinkingIq").sendCompanionNonce(companionNonce);
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "Shortcake: CompanionNonce sent"
                ])));
                const verificationCode = yield o("WAWebShortcakeLinkingAlgorithm").deriveVerificationCode(companionNonce, l);
                const m = yield o("WAWebShortcakeLinkingAlgorithm").deriveEncryptionKey({
                    companionEphemeralPrivateKey: keypair.privKey,
                    deviceType,
                    primaryPublicKey: l_publicKey,
                    ref
                });
                if (I.epoch !== I_epoch) {
                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "Shortcake: cancelled in handlePrimaryEphemeralIdentity"
                    ])));
                    throw r("err")("Shortcake: cancelled");
                }
                I.encryptionKey = m;
                I.verificationCode = verificationCode;
                I.timeoutId = self.setTimeout(function() {
                    o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "Shortcake: timeout awaiting verification code"
                    ])));
                    I.clear();
                    o("WAWebBackendApi").frontendFireAndForget("shortcakeError", {
                        reason: "timeout"
                    });
                }, E);
                o("WAWebBackendApi").frontendFireAndForget("shortcakeVerificationCodeReady", {
                    verificationCode,
                    skipHandoffUx: I.skipHandoffUx
                });
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "Shortcake: verification code ready, awaiting user"
                ])));
                return verificationCode;
            } catch (error) {
                if (I.epoch === I_epoch) {
                    I.clear();
                    o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "Shortcake: handlePrimaryEphemeralIdentity failed"
                    ])));
                    o("WAWebBackendApi").frontendFireAndForget("shortcakeError", {
                        reason: "server_error"
                    });
                }
                throw error;
            }
        });
        return M.apply(this, arguments);
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: user confirmed verification code"
            ])));
            if (I.stage !== L.WaitingForVerificationCodeConfirmation) {
                s(0, 152466, String(I.stage));
            }
            const I_encryptionKey = I.encryptionKey;
            if (I_encryptionKey == null) {
                throw r("err")("Shortcake: missing encryption key");
            }
            if (I.timeoutId != null) {
                self.clearTimeout(I.timeoutId);
                I.timeoutId = null;
            }
            I.stage = L.WaitingForPairingCompletion;
            const I_epoch = I.epoch;
            try {
                const a = yield o("WAWebShortcakeLinkingAlgorithm").encryptPairingRequest(e, I_encryptionKey);
                const { encryptedPayload, iv } = a;
                const u = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsCompanionReg.pb").EncryptedPairingRequestSpec, {
                    encryptedPayload,
                    iv
                }).readBuffer();
                yield o("WAWebShortcakeLinkingIq").sendEncryptedPairingRequest(new Uint8Array(u));
                if (I.epoch !== I_epoch) {
                    o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                        "Shortcake: cancelled in confirmVerificationCode"
                    ])));
                    throw r("err")("Shortcake: cancelled");
                }
                I.keypair = null;
                I.companionNonce = null;
                I.encryptionKey = null;
                I.timeoutId = self.setTimeout(function() {
                    o("WALogger").WARN(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                        "Shortcake: timed out waiting for pairing completion"
                    ])));
                    I.clear();
                    o("WAWebBackendApi").frontendFireAndForget("shortcakeError", {
                        reason: "timeout"
                    });
                }, E);
                o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                    "Shortcake: EncryptedPairingRequest sent, awaiting pairing"
                ])));
            } catch (error) {
                if (I.epoch === I_epoch) {
                    I.clear();
                    o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                        "Shortcake: confirmVerificationCode failed"
                    ])));
                    o("WAWebBackendApi").frontendFireAndForget("shortcakeError", {
                        reason: "server_error"
                    });
                }
                throw error;
            }
        });
        return A.apply(this, arguments);
    }
    function F() {
        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "Shortcake: cancelling"
        ])));
        o("WAWebShortcakeLinkingHandoffProof").getHandoffKeyHolder().clear();
        I.clear();
    }
    l.ShortcakeLinkingStage = L;
    l.getShortcakeLinkingStage = T;
    l.setSkipHandoffUx = D;
    l.initializeShortcakeLinking = x;
    l.markPrologueSent = P;
    l.handlePrimaryEphemeralIdentity = N;
    l.confirmVerificationCode = w;
    l.cancelShortcakeLinking = F;
}, 98);