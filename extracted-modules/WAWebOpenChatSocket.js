__d("WAWebOpenChatSocket", [
    "Promise",
    "WABase64",
    "WABinary",
    "WAFrameSocket",
    "WALogger",
    "WANoiseHandshake",
    "WAResultOrError",
    "WAWapDict",
    "WAWebCommonSocketPlatformDetails",
    "WAWebCoreActionsODS",
    "WAWebCryptoCurve25519",
    "WAWebGetClientPayloadForLogin",
    "WAWebGetClientPayloadForRegistration",
    "WAWebNoiseInfoWorkerCompatible",
    "WAWebOpenSocket",
    "WAWebPageLoadLogging",
    "WAWebParseCertificateChain",
    "WAWebProcessCertificate",
    "WAWebProtobufsWa6.pb",
    "WAWebSocketLogoutJob",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsScreenLockWorkerCompatible",
    "WAWebWamEnumWebcSocketConnectReasonType",
    "WAWebWebcSocketConnectWamEvent",
    "asyncToGeneratorRuntime",
    "cr:4533",
    "decodeProtobuf",
    "encodeProtobuf",
    "err",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
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
    let L;
    let E;
    let k;
    let I;
    let T;
    let D;
    let x;
    const $ = 1;
    const P = 6;
    const N = new Uint8Array([
        87,
        65,
        P,
        o("WAWapDict").DICT_VERSION
    ]);
    const M = "Noise_XX_25519_AESGCM_SHA256\0\0\0\0";
    const w = "Noise_IK_25519_AESGCM_SHA256\0\0\0\0";
    const A = "Noise_XXfallback_25519_AESGCM_SHA256";
    function F(e) {
        return o("WAWebOpenSocket").openWebSocket(e);
    }
    function O(e, t, n) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            const a = yield o("WAWebUserPrefsMultiDevice").getRoutingInfo();
            const i = a ? a.edgeRouting : null;
            const l = i ? o("WABase64").encodeB64UrlSafe(i) : null;
            const s = yield o("WAWebCryptoCurve25519").keyPair();
            o("WAWebPageLoadLogging").startPageLoadQplMeasure("socket_open");
            return F(l).then((()=>{
                const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                    let a = void 0;
                    o("WAWebPageLoadLogging").endPageLoadQplMeasure("socket_open");
                    t.markWebcSocketConnectDuration();
                    t.webcSocketConnectReason = o("WAWebPageLoadLogging").wasPageLoadQplLogged() ? o("WAWebWamEnumWebcSocketConnectReasonType").WEBC_SOCKET_CONNECT_REASON_TYPE.RECONNECT : o("WAWebWamEnumWebcSocketConnectReasonType").WEBC_SOCKET_CONNECT_REASON_TYPE.PAGE_LOAD;
                    if (i) {
                        const l = new (o("WABinary")).Binary;
                        l.write("ED", 0, 1);
                        l.writeUint8(i.byteLength >> 16);
                        l.writeUint16(i.byteLength & 65535);
                        l.writeBuffer(i);
                        a = l.readByteArrayView();
                    }
                    const u = a ? o("WABinary").Binary.build(a, N).readByteArrayView() : N;
                    const c = new (o("WAFrameSocket")).FrameSocket(n, u);
                    const d = e ? yield Q(K) : null;
                    o("WAWebPageLoadLogging").startPageLoadQplMeasure("auth_handshake");
                    t.startWebcAuthHandshakeDuration();
                    if (d != null) {
                        o("WAWebPageLoadLogging").addPageLoadQplAnnotationNow({
                            handshake_path: "resume"
                        });
                        o("WAWebPageLoadLogging").startPageLoadQplMeasure("hs_noise_read");
                        const m = yield o("WAWebNoiseInfoWorkerCompatible").getNoiseInfo();
                        o("WAWebPageLoadLogging").endPageLoadQplMeasure("hs_noise_read");
                        return q(c, r, e, s, m?.staticKeyPair, d);
                    }
                    o("WAWebPageLoadLogging").addPageLoadQplAnnotationNow({
                        handshake_path: "full"
                    });
                    return W(c, s, e, r);
                });
                return function(e) {
                    return a.apply(this, arguments);
                };
            })());
        });
        return B.apply(this, arguments);
    }
    function W(t, n, r, a) {
        const i = new (o("WANoiseHandshake")).NoiseHandshake(t);
        i.start(M, N);
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[socket] doFullHandshake: openChatSocket send hello"
        ]))).tags("handshake");
        i.authenticate(n.pubKey);
        const l = {
            clientHello: {
                ephemeral: n.pubKey
            }
        };
        return i.sendAndReceive(o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsWa6.pb").HandshakeMessageSpec, l).readByteArrayView()).then((e)=>H(i, e, n, r, a));
    }
    function q(e, t, a, i, l, v) {
        if (l == null) {
            return (x || (x = n("Promise"))).reject("resumeNoiseHandshake authKeyPair is null");
        }
        const S = new (o("WANoiseHandshake")).NoiseHandshake(e);
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[socket] resumeNoiseHandshake started"
        ]))).tags("handshake");
        S.start(w, N);
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[socket] resumeNoiseHandshake auth server static key"
        ]))).tags("handshake");
        S.authenticate(v);
        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "[socket] resumeNoiseHandshake auth client ephemeral key"
        ]))).tags("handshake");
        S.authenticate(i.pubKey);
        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            "[socket] resumeNoiseHandshake EC Agreement 1"
        ]))).tags("handshake");
        S.mixIntoKey(o("WAWebCryptoCurve25519").sharedSecret(v, i.privKey));
        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
            "[socket] resumeNoiseHandshake encrypt client static key"
        ]))).tags("handshake");
        const R = S.encrypt((x || (x = n("Promise"))).resolve(l.pubKey)).catch((e)=>{
            o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "resumeNoiseHandshake failed to encrypt client static key"
            ]))).catching(r("getErrorSafe")(e));
            return (x || (x = n("Promise"))).reject(e);
        });
        o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
            "[socket] resumeNoiseHandshake EC Agreement 2"
        ]))).tags("handshake");
        S.mixIntoKey(o("WAWebCryptoCurve25519").sharedSecret(v, l.privKey));
        const L = a ? o("WAWebGetClientPayloadForLogin").getClientPayloadForLogin(t) : o("WAWebGetClientPayloadForRegistration").getClientPayloadForRegistration(t);
        const E = S.encrypt(x.resolve(L)).catch((e)=>{
            o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "resumeNoiseHandshake failed to encrypt client login props"
            ]))).catching(r("getErrorSafe")(e));
            return (x || (x = n("Promise"))).reject(e);
        });
        return x.all([
            i.pubKey,
            E,
            R
        ]).then(([u, c, d])=>{
            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "[socket] resumeNoiseHandshake send hello"
            ]))).tags("handshake");
            const m = {
                clientHello: {
                    ephemeral: u,
                    payload: c,
                    static: d
                }
            };
            return S.sendAndReceive(o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsWa6.pb").HandshakeMessageSpec, m).readByteArrayView()).then((n)=>{
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[socket] resumeNoiseHandshake rcv hello"
                ]))).tags("handshake");
                const s = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsWa6.pb").HandshakeMessageSpec, n);
                const u = s.serverHello;
                const c = u || {};
                const { ephemeral: d, payload: m, static: p } = c;
                if (p == null) {
                    o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[socket] resumeNoiseHandshake continuing resume handshake"
                    ]))).tags("handshake");
                    if (!d) {
                        throw r("err")("serverHello missing serverEphemeral");
                    }
                    if (!m) {
                        throw r("err")("serverHello missing certificateCiphertext");
                    }
                    S.authenticate(d);
                    S.mixIntoKey(o("WAWebCryptoCurve25519").sharedSecret(d, i.privKey));
                    S.mixIntoKey(o("WAWebCryptoCurve25519").sharedSecret(d, l.privKey));
                    return S.decrypt(m).then(()=>{
                        o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                            "[socket] resumeNoiseHandshake deriving secrets"
                        ]))).tags("handshake");
                        return S.finish();
                    });
                }
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[socket] resumeNoiseHandshake failed: static ciphertext !null"
                ])));
                return U({
                    clientEphemeralKeyPair: i,
                    isRegistered: a,
                    serverHello: n,
                    socket: e,
                    socketOpenOptions: t
                });
            });
        });
    }
    function U(e) {
        return V.apply(this, arguments);
    }
    function V() {
        V = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ clientEphemeralKeyPair: t, isRegistered: n, serverHello: r, socket: a, socketOpenOptions: i }) {
            const l = new (o("WANoiseHandshake")).NoiseHandshake(a);
            l.start(A, N);
            l.authenticate(t.pubKey);
            o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                "[socket] doFallbackHandshake continuing with server hello"
            ])));
            return H(l, r, t, n, i);
        });
        return V.apply(this, arguments);
    }
    function H(e, t, a, i, l) {
        o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
            "[socket] openChatSocket rcv hello"
        ])));
        const s = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsWa6.pb").HandshakeMessageSpec, t);
        const u = s.serverHello;
        if (!u) {
            throw r("err")("ServerHello payload error");
        }
        const { ephemeral: c, payload: d, static: m } = u;
        if (c == null || m == null || d == null) {
            throw r("err")("Missing server Ephemeral");
        }
        e.authenticate(c);
        e.mixIntoKey(o("WAWebCryptoCurve25519").sharedSecret(c, a.privKey));
        const p = e.decrypt(m);
        const _ = p.then((e)=>o("WAWebCryptoCurve25519").sharedSecret(e, a.privKey));
        e.mixIntoKey(_);
        return (x || (x = n("Promise"))).all([
            p,
            e.decrypt(d),
            c
        ]).then(([n, r, o])=>G({
                certificate: r,
                handshake: e,
                isRegistered: i,
                options: l,
                serverEphemeral: o,
                serverStatic: n
            }));
    }
    function G(e) {
        return z.apply(this, arguments);
    }
    function z() {
        z = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ certificate: t, handshake: a, isRegistered: i, options: l, serverEphemeral: s, serverStatic: u }) {
            yield o("WAWebProcessCertificate").verifyAndProcessCertificate({
                certificate: t,
                serverStatic: u,
                isRegistered: i
            });
            yield s;
            const c = i ? o("WAWebGetClientPayloadForLogin").getClientPayloadForLogin(l) : o("WAWebGetClientPayloadForRegistration").getClientPayloadForRegistration(l);
            o("WAWebPageLoadLogging").startPageLoadQplMeasure("hs_noise_read");
            const d = yield o("WAWebNoiseInfoWorkerCompatible").getNoiseInfo();
            o("WAWebPageLoadLogging").endPageLoadQplMeasure("hs_noise_read");
            if (d == null) {
                o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[socket] Unable to decrypt noise data"
                ]))).tags("launch-socket-chat", "handshake");
                o("WAWebCoreActionsODS").logPageLoadErrorForcedLogout();
                o("WAWebCoreActionsODS").logSessionForcedLogout();
                yield o("WAWebSocketLogoutJob").socketLogout();
                r("nullthrows")(d, "Unexpected null: noiseData");
            }
            const m = r("nullthrows")(d).staticKeyPair;
            return (x || (x = n("Promise"))).all([
                j(m, a, s),
                a.encrypt(x.resolve(c))
            ]).then(([t, n])=>{
                const r = {
                    clientFinish: {
                        static: t,
                        payload: n
                    }
                };
                o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[socket] continueFullHandshakeCore finish + derive secrets"
                ])));
                a.send(o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsWa6.pb").HandshakeMessageSpec, r).readByteArrayView());
                return a.finish();
            });
        });
        return z.apply(this, arguments);
    }
    function j(e, t, a) {
        const i = (x || (x = n("Promise"))).resolve(e.pubKey);
        const l = t.encrypt(i);
        if (!a) {
            return (x || (x = n("Promise"))).reject(r("err")("staticAgreement called before serverKeys"));
        }
        const s = o("WAWebCryptoCurve25519").sharedSecret(a, e.privKey);
        t.mixIntoKey(s);
        return l;
    }
    var K = 0;
    function Q(e) {
        return X.apply(this, arguments);
    }
    function X() {
        X = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (yield o("WAWebUserPrefsScreenLockWorkerCompatible").getScreenLockEnabled()) {
                return null;
            }
            if (e >= $) {
                o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[socket] getCertificateChain failed ",
                    "x, fallback"
                ])), e).tags("handshake");
                return null;
            }
            try {
                const t = yield o("WAWebNoiseInfoWorkerCompatible").getNoiseInfo();
                if (t == null) {
                    o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                        "Unable to decrypt noise data for resume handshake"
                    ]))).tags("launch-socket-chat");
                    return null;
                }
                const n = t.certificateChainBuffer ? o("WAWebParseCertificateChain").parseCertificateChain(t.certificateChainBuffer) : null;
                return o("WAWebCommonSocketPlatformDetails").makeServerInfoIfKnown(n);
            } catch (e) {
                o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                    "[socket][unified] getCertificateChain error"
                ]))).catching(r("getErrorSafe")(e)).tags("handshake");
                return null;
            }
        });
        return X.apply(this, arguments);
    }
    function Y(e, t) {
        return J.apply(this, arguments);
    }
    function J() {
        J = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                const n = e || {
                    passive: false,
                    pull: true
                };
                const a = new (o("WAWebWebcSocketConnectWamEvent")).WebcSocketConnectWamEvent;
                const i = yield O(t, a, n);
                o("WAWebPageLoadLogging").endPageLoadQplMeasure("auth_handshake");
                a.markWebcAuthHandshakeDuration();
                a.commit();
                K = 0;
                return o("WAResultOrError").makeResult(i);
            } catch (e) {
                const l = r("getErrorSafe")(e);
                o("WAWebPageLoadLogging").incrementPageLoadQplSocketError();
                const s = Z();
                o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                    "[socket][unified] handshake failed with ",
                    ", msg: ",
                    ", network: ",
                    ""
                ])), l.name, l.message, s).tags("handshake");
                if (s) {
                    K++;
                    o("WALogger").ERROR(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                        "[socket][unified] handshake failed. Retry count: ",
                        ""
                    ])), K).tags("handshake").sendLogs("handshake-error", {
                        sampling: 0.01
                    });
                }
                return o("WAResultOrError").makeError("disconnected");
            }
        });
        return J.apply(this, arguments);
    }
    function Z() {
        if (self.navigator != null) {
            return self.navigator.onLine;
        }
        return true;
    }
    function ee(e, t) {
        return te.apply(this, arguments);
    }
    function te() {
        te = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return Y(e, t);
        });
        return te.apply(this, arguments);
    }
    l.openChatSocket = ee;
}, 98);