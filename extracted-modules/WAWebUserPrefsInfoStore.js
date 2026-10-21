__d("WAWebUserPrefsInfoStore", [
    "Promise",
    "WAArrayBufferUtils",
    "WABase64",
    "WABinary",
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebCoreActionsODS",
    "WAWebCryptoCurve25519",
    "WAWebDbEncryptionKey",
    "WAWebLogoutReasonConstants",
    "WAWebPageLoadLogging",
    "WAWebSocketConstants",
    "WAWebSocketLogoutJob",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsScreenLock",
    "asyncToGeneratorRuntime",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = 128;
    const _ = "AES-GCM";
    const f = "PBKDF2";
    const g = r("gkx")("26256") ? 10000 : 600000;
    const h = (()=>{
        function t() {
            this.cachedPasscodeDerivedKey = null;
        }
        const r = t.prototype;
        r.resetCachedPasscodeDerivedKey = function() {
            this.cachedPasscodeDerivedKey = null;
        };
        r.get = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                let t = yield o("WAWebUserPrefsMultiDevice").getNoiseInfo();
                if (!t) {
                    return null;
                }
                const n = yield this.$1();
                if (!n) {
                    return null;
                }
                t = yield this.$2(t, n);
                if (yield o("WAWebUserPrefsScreenLock").getScreenLockEnabled()) {
                    o("WAWebBackendEventBusWorkerCompatible").getBackendEventBus().triggerSetSocketState(o("WAWebSocketConstants").SOCKET_STATE.SCREEN_LOCKED);
                    o("WAWebPageLoadLogging").startPageLoadQplMeasure("hs_passcode_wait");
                    const r = yield this.passcodeUnlockNoiseInfo(t);
                    o("WAWebPageLoadLogging").endPageLoadQplMeasure("hs_passcode_wait");
                    if (r) {
                        t = r;
                    }
                }
                const a = yield this.$3(t);
                if (a) {
                    return t;
                }
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Decrypted noise key was invalid."
                ]))).tags("info-store");
                return null;
            });
            function r() {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r.setCertificateChain = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield this.get();
                if (t) {
                    try {
                        const n = babelHelpers.extends({}, e.intermediate, {
                            key: o("WABase64").encodeB64(e.intermediate.key)
                        });
                        const r = babelHelpers.extends({}, e.leaf, {
                            key: o("WABase64").encodeB64(e.leaf.key)
                        });
                        const a = JSON.stringify({
                            intermediate: n,
                            leaf: r
                        });
                        t.certificateChainBuffer = o("WAArrayBufferUtils").stringToArrayBuffer(a);
                        return this.set(t);
                    } catch (e) {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Error serializing certificate chain: ",
                            ""
                        ])), e).sendLogs("handshake-serialization-failed");
                    }
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.set = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                let r = e;
                if (this.cachedPasscodeDerivedKey != null) {
                    const a = this.cachedPasscodeDerivedKey;
                    const i = r;
                    const { certificateChainBuffer: l, recoveryToken: s, staticKeyPair: u } = i;
                    const { privKey: c, pubKey: d } = u;
                    try {
                        const p = yield (m || (m = n("Promise"))).all([
                            s,
                            d,
                            c,
                            l
                        ].map((e)=>t.encryptNoiseWithPasscodeDerivedKey(e, a)));
                        if (p[0] && p[1] && p[2]) {
                            r = {
                                recoveryToken: p[0],
                                staticKeyPair: {
                                    pubKey: p[1],
                                    privKey: p[2]
                                },
                                certificateChainBuffer: p[3]
                            };
                        }
                    } catch (e) {}
                }
                const _ = new Uint8Array(64);
                self.crypto.getRandomValues(_);
                const f = this.$4(_);
                yield this.$5(f);
                const g = yield (m || (m = n("Promise"))).all([
                    this.$6(r.recoveryToken, f[0]),
                    this.$6(r.staticKeyPair.pubKey, f[1]),
                    this.$6(r.staticKeyPair.privKey, f[2]),
                    r.certificateChainBuffer ? this.$6(r.certificateChainBuffer, f[3]) : (m || (m = n("Promise"))).resolve(void 0)
                ]);
                const h = g[0];
                const y = g[1];
                const C = g[2];
                const b = g[3];
                r.recoveryToken = h;
                r.staticKeyPair.pubKey = y;
                r.staticKeyPair.privKey = C;
                r.certificateChainBuffer = b;
                return o("WAWebUserPrefsMultiDevice").setNoiseInfo(r);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.$5 = function(t) {
            return o("WAWebUserPrefsMultiDevice").setNoiseInfoIv(t.map(o("WABase64").encodeB64));
        };
        r.$1 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield o("WAWebUserPrefsMultiDevice").getNoiseInfoIv();
                if (e) {
                    return e.map((e)=>new Uint8Array(o("WABase64").decodeB64(e)));
                }
                return null;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.$4 = function(t) {
            const e = new (o("WABinary")).Binary(t);
            return [
                e.readByteArrayView(16),
                e.readByteArrayView(16),
                e.readByteArrayView(16),
                e.readByteArrayView(16)
            ];
        };
        r.$6 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys()[0];
                const r = yield self.crypto.subtle.encrypt({
                    iv: t,
                    name: "AES-CBC"
                }, n.key, e);
                return r;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.$2 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const r = yield (m || (m = n("Promise"))).all([
                    this.$7(e.recoveryToken, t[0]),
                    this.$7(e.staticKeyPair.pubKey, t[1]),
                    this.$7(e.staticKeyPair.privKey, t[2]),
                    e.certificateChainBuffer != null ? this.$7(e.certificateChainBuffer, t[3]) : (m || (m = n("Promise"))).resolve(void 0)
                ]);
                const o = r[0];
                const a = r[1];
                const i = r[2];
                const l = r[3];
                e.certificateChainBuffer = l;
                e.recoveryToken = o;
                e.staticKeyPair.pubKey = a;
                e.staticKeyPair.privKey = i;
                return e;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.$7 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys()[0];
                const r = yield self.crypto.subtle.decrypt({
                    iv: t,
                    name: "AES-CBC"
                }, n.key, e);
                return r;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.$3 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                let t = true;
                try {
                    const n = yield o("WAWebCryptoCurve25519").keyPair(e.staticKeyPair.privKey);
                    const r = n.pubKey;
                    for(let a = new Uint8Array(r), i = new Uint8Array(e.staticKeyPair.pubKey), l = 0; l < a.length; l++){
                        if (a[l] !== i[l]) {
                            t = false;
                            break;
                        }
                    }
                } catch (e) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Decrypted noise key failed validation."
                    ]))).tags("info-store");
                    t = false;
                }
                return t;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.lockNoiseInfo = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield this.deriveKeyFromPasscode(e);
                yield this.createScreenLockIv();
                const n = yield this.get();
                if (!n || !n.staticKeyPair) {
                    return false;
                }
                try {
                    this.cachedPasscodeDerivedKey = t;
                    yield this.set(n);
                    return true;
                } catch (e) {
                    this.cachedPasscodeDerivedKey = null;
                }
                return false;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.passcodeUnlockNoiseInfo = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = false) {
                let n;
                if (this.cachedPasscodeDerivedKey == null) {
                    let r;
                    if (t) {
                        r = yield o("WAWebBackendApi").frontendSendAndReceive("waitForPasscodeAfterIncorrectAttempt", void 0);
                    } else {
                        r = yield o("WAWebBackendApi").frontendSendAndReceive("waitForPasscode", void 0);
                    }
                    n = yield this.deriveKeyFromPasscode(r);
                } else {
                    n = this.cachedPasscodeDerivedKey;
                }
                const a = yield this.getUnlockedNoiseInfo(e, n);
                if (!a || !(yield this.$3(a))) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Decrypted noise key was invalid."
                    ]))).tags("info-store");
                    return this.passcodeUnlockNoiseInfo(e, true);
                }
                yield o("WAWebBackendApi").frontendSendAndReceive("correctPasscodeEntered", {
                    key: n
                });
                o("WAWebBackendEventBusWorkerCompatible").getBackendEventBus().triggerSetSocketState(o("WAWebSocketConstants").SOCKET_STATE.OPENING);
                return a;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.getUnlockedNoiseInfo = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const r = this;
                const { certificateChainBuffer: o, recoveryToken: a, staticKeyPair: i } = e;
                const { privKey: l, pubKey: s } = i;
                try {
                    const u = yield (m || (m = n("Promise"))).all([
                        a,
                        s,
                        l,
                        o
                    ].map((e)=>r.decryptNoiseWithPasscodeDerivedKey(e, t)));
                    if (u[0] && u[1] && u[2]) {
                        this.cachedPasscodeDerivedKey = t;
                        return {
                            recoveryToken: u[0],
                            staticKeyPair: {
                                pubKey: u[1],
                                privKey: u[2]
                            },
                            certificateChainBuffer: u[3]
                        };
                    }
                } catch (e) {
                    return null;
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.removeLockOnNoiseInfo = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                let t = yield o("WAWebUserPrefsMultiDevice").getNoiseInfo();
                if (!t) {
                    return false;
                }
                const n = yield this.$1();
                if (!n) {
                    return false;
                }
                t = yield this.$2(t, n);
                const r = yield this.deriveKeyFromPasscode(e);
                const a = yield this.getUnlockedNoiseInfo(t, r);
                if (a != null) {
                    const i = yield this.$3(a);
                    if (i) {
                        this.cachedPasscodeDerivedKey = null;
                        yield this.set(a);
                        yield o("WAWebUserPrefsScreenLock").setScreenLockSalt(null);
                        yield o("WAWebUserPrefsScreenLock").setScreenLockIvString("");
                        yield o("WAWebUserPrefsScreenLock").setScreenLockIterations(null);
                        return true;
                    }
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Decrypted noise key was invalid."
                    ]))).tags("info-store");
                    return false;
                }
                return false;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.deriveKeyFromPasscode = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = new TextEncoder().encode(e);
                const n = yield self.crypto.subtle.importKey("raw", t, {
                    name: f
                }, false, [
                    "deriveKey"
                ]);
                const r = yield this.getOrGenScreenLockSalt();
                const o = yield self.crypto.subtle.deriveKey({
                    name: f,
                    hash: "SHA-256",
                    salt: r,
                    iterations: yield this.getScreenLockIterationCount()
                }, n, {
                    name: _,
                    length: p
                }, false, [
                    "encrypt",
                    "decrypt"
                ]);
                return o;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.getOrGenScreenLockSalt = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                let e = null;
                if (!(yield o("WAWebUserPrefsScreenLock").getScreenLockEnabled())) {
                    e = new Uint8Array(p);
                    self.crypto.getRandomValues(e);
                    e = btoa(String.fromCharCode(...Array.from(new Uint8Array(e))));
                    yield o("WAWebUserPrefsScreenLock").setScreenLockSalt(e);
                }
                e = yield o("WAWebUserPrefsScreenLock").getScreenLockSalt();
                if (e == null) {
                    o("WAWebCoreActionsODS").logSessionForcedLogout();
                    o("WAWebSocketLogoutJob").socketLogout(o("WAWebLogoutReasonConstants").LogoutReason.MissingScreenLockSalt);
                }
                e = Uint8Array.from(atob(e), function(e) {
                    return e.charCodeAt(0);
                });
                return e;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.createScreenLockIv = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = new Uint8Array(16);
                self.crypto.getRandomValues(e);
                const t = new (o("WABinary")).Binary(e).readByteArrayView(16);
                yield o("WAWebUserPrefsScreenLock").setScreenLockIvString(o("WABase64").encodeB64(t));
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.getScreenLockIvArray = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield o("WAWebUserPrefsScreenLock").getScreenLockIvString();
                if (e) {
                    return new Uint8Array(o("WABase64").decodeB64(e));
                }
                return null;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.encryptNoiseWithPasscodeDerivedKey = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                if (e == null) {
                    return null;
                }
                const n = yield this.getScreenLockIvArray();
                if (!n) {
                    return null;
                }
                const r = yield self.crypto.subtle.encrypt({
                    iv: n,
                    name: _
                }, t, e);
                return r;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.decryptNoiseWithPasscodeDerivedKey = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                if (e == null) {
                    return null;
                }
                const n = yield this.getScreenLockIvArray();
                if (!n) {
                    return null;
                }
                const r = yield self.crypto.subtle.decrypt({
                    iv: n,
                    name: _
                }, t, e);
                return r;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.calculatePBKDF2Iterations = function() {
            const e = navigator.hardwareConcurrency;
            return g * Math.max(1, Number.isNaN(e) ? 1 : e);
        };
        r.getScreenLockIterationCount = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                let e = yield o("WAWebUserPrefsScreenLock").getScreenLockIterations();
                if (!(yield o("WAWebUserPrefsScreenLock").getScreenLockEnabled()) || e == null) {
                    e = this.calculatePBKDF2Iterations();
                    yield o("WAWebUserPrefsScreenLock").setScreenLockIterations(e);
                }
                return e;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    const y = new h;
    l.waNoiseInfo = y;
}, 98);