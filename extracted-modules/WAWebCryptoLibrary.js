__d("WAWebCryptoLibrary", [
    "Promise",
    "WAByteArray",
    "WACryptoLibrary",
    "WACryptoLibraryConfig",
    "WACryptoPQSession",
    "WAJids",
    "WALogger",
    "WASignalKeys",
    "WAWebBackendJobs.flow",
    "WAWebCryptoLibraryDbCallbacksApi",
    "WAWebCryptoLibraryUtilsApi",
    "WAWebSessionScope",
    "WAWebSignalCommonErrors",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
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
    const k = o("WAWebCryptoLibraryDbCallbacksApi").getCryptoDbCallbacks();
    function I(e) {
        return {
            handleNewSession: o("WAWebCryptoLibraryDbCallbacksApi").selectHandleNewSession(k, e),
            loadSession: o("WAWebCryptoLibraryDbCallbacksApi").selectLoadSession(k, e)
        };
    }
    function T() {
        let e;
        return {
            establishOutgoingSession: (e = o("WACryptoLibrary")).establishOutgoingSession,
            decryptContent: e.decryptContent,
            encryptContent: e.encryptContent,
            encryptGroupContent: e.encryptGroupContent,
            decryptGroupContent: e.decryptGroupContent,
            saveSenderKeySession: e.saveSenderKeySession,
            rotateGroupSenderKey: e.rotateGroupSenderKey
        };
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ deviceId, sessionInfo, sessionScope }) {
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "CryptoLibrarySignal::createSignalSession sessionScope=",
                ""
            ])), sessionScope ?? "default");
            const i = yield k.getRegistrationInfo();
            if (!i) {
                throw r("err")("No registration info found");
            }
            const l = sessionScope === o("WAWebSessionScope").SessionScope.STATUS ? k.handleNewSessionStatusScope : k.handleNewSession;
            if (sessionScope === o("WAWebSessionScope").SessionScope.PQ && o("WACryptoLibraryConfig").getCryptoLibraryConfig().isPq1on1MessageEnabled === true && sessionInfo.kyberKey != null) {
                try {
                    const s = yield o("WACryptoPQSession").createOutgoingSessionPQ(i, sessionInfo);
                    if (s.success) {
                        yield k.handleNewSessionPqScope(o("WAWebWidToJid").widToDeviceJid(deviceId), s.value.session, s.value.session.remote.pubKey, null, undefined);
                        return;
                    }
                    o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[pq] createSignalSession: PQXDH failed, falling back to empty PQ slot"
                    ]))).sendLogs("createSignalSession-pqxdh-failed");
                } catch (error) {
                    o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[pq] createSignalSession: PQXDH threw"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("createSignalSession-pqxdh-threw");
                }
            }
            if (sessionScope !== o("WAWebSessionScope").SessionScope.PQ) {
                return T().establishOutgoingSession({
                    handleNewSession: l
                }, i, o("WAWebWidToJid").widToDeviceJid(deviceId), sessionInfo, undefined).then((e)=>{
                    if (!e.success) {
                        o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "CryptoLibrarySignal::createSignalSession failed with error ",
                            ""
                        ])), e.error);
                        throw r("err")(e.error);
                    }
                });
            }
        });
        return x.apply(this, arguments);
    }
    function $(e, t, n, r, o) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a, i = false, l) {
            o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                "CryptoLibrarySignal::decryptSignalProto sessionScope=",
                ""
            ])), l ?? "default");
            const s = t === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg ? "pkmsg" : "msg";
            let u;
            const c = yield k.getRegistrationInfo();
            if (!c) {
                return (E || (E = n("Promise"))).reject(r("err")("No registration info found"));
            }
            const d = I(l);
            const { handleNewSession, loadSession } = d;
            return T().decryptContent({
                deleteKyberPreKey: k.deleteKyberPreKey,
                handleNewSession: function(t, n, r, o, a) {
                    return handleNewSession(t, n, r, o, a, i);
                },
                loadKyberPreKey: k.loadKyberPreKey,
                loadOneTimePreKey: k.loadOneTimePreKey,
                loadSession,
                loadSignedPreKey: k.loadSignedPreKey
            }, c, o("WAWebWidToJid").widToDeviceJid(e), {
                ciphertext: a,
                type: s
            }, function(e) {
                u = o("WAByteArray").uint8ArrayToBuffer(e);
                return (E || (E = n("Promise"))).resolve();
            }, {}).then((e)=>{
                if (e.success) {
                    if (u == null) {
                        throw new (o("WAWebSignalCommonErrors")).SignalDecryptionError("Null result on successful decryption");
                    }
                    return u;
                }
                const e_error = e.error;
                o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "CryptoLibrarySignal::decryptMessage failed with error ",
                    ""
                ])), e_error);
                throw e_error === "errDuplicateMsg" ? new (o("WAWebSignalCommonErrors")).SignalMessageCounterError(e_error) : new (o("WAWebSignalCommonErrors")).SignalDecryptionError(e_error);
            }).catch((e)=>{
                if (e instanceof o("WAWebSignalCommonErrors").SignalDecryptionError || e instanceof o("WAWebSignalCommonErrors").SignalMessageCounterError) {
                    throw e;
                }
                const t = r("getErrorSafe")(e);
                o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "CryptoLibrarySignal::decryptSignalProto failed to decrypt: ",
                    ""
                ])), t).catching(t);
                throw new (o("WAWebSignalCommonErrors")).SignalDecryptionError(`Unexpected decryption error: ${t.message}`);
            });
        });
        return P.apply(this, arguments);
    }
    function N(t, n, a, i = false) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "CryptoLibrarySignal::encryptSignalProto sessionScope=",
            " omitSessionPersistence=",
            ""
        ])), a ?? "default", String(i));
        const l = I(a);
        const { handleNewSession, loadSession } = l;
        const d = i ? function(e, t, n, r, o) {
            return handleNewSession(e, t, n, r, o, true);
        } : handleNewSession;
        return T().encryptContent({
            handleNewSession: d,
            loadSession
        }, o("WAWebWidToJid").widToDeviceJid(t), n, null).then((e)=>{
            if (e.success) {
                const n = e.value;
                const { ciphertext, type } = n;
                return {
                    type: o("WAWebBackendJobs.flow").CiphertextType.cast(type) ?? o("WAWebBackendJobs.flow").CiphertextType.Msg,
                    ciphertext: o("WAByteArray").uint8ArrayToBuffer(ciphertext)
                };
            }
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "CryptoLibrarySignal::encryptSignalProto:failed with error ",
                ""
            ])), e.error);
            throw r("err")(e.error);
        });
    }
    function M(e, t) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebWidToJid").widToDeviceJid(e);
            const r = I(t);
            const r_loadSession = r.loadSession;
            const i = yield r_loadSession(n);
            return i?.remote;
        });
        return w.apply(this, arguments);
    }
    function A(e, t, n) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const l = o("WAWebWidToJid").widToMulticastJid(e);
            const s = o("WAJids").validateGroupJid(l) ?? o("WAJids").validateStatusJid(l) ?? o("WAJids").validateBroadcastJid(l);
            if (s == null) {
                throw r("err")("Invalid multicast JID");
            }
            const u = o("WAWebWidToJid").widToDeviceJid(t);
            let c = yield T().encryptGroupContent({
                loadSenderKeySession: k.loadSenderKeySession,
                saveSenderKeySession: k.saveSenderKeySession
            }, s, u, n);
            if (!c.success && c.error === "errLoadSenderKeySession") {
                c.error;
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "CryptoLibrarySignal::encryptGroupMessage no sender key, generating a new one"
                ])));
                const d = yield o("WASignalKeys").makeKeyPair();
                yield T().rotateGroupSenderKey({
                    saveSenderKeySession: k.saveSenderKeySession
                }, s, u, d);
                c = yield T().encryptGroupContent({
                    loadSenderKeySession: k.loadSenderKeySession,
                    saveSenderKeySession: k.saveSenderKeySession
                }, s, u, n);
            }
            if (c.success) {
                const m = c.value.ciphertext.ciphertext;
                const p = c.value.senderKeyDistributionProto;
                return {
                    ciphertext: o("WAByteArray").uint8ArrayToBuffer(m),
                    senderKeyBytes: o("WAByteArray").uint8ArrayToBuffer(p)
                };
            }
            o("WALogger").WARN(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                "CryptoLibrarySignal::encryptGroupMessage failed with error ",
                ""
            ])), c.error);
            throw r("err")(c.error);
        });
        return F.apply(this, arguments);
    }
    function O(e, t, n) {
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "CryptoLibrarySignal::processSenderKeyDistributionMsg"
        ])));
        return T().saveSenderKeySession({
            loadSenderKeySession: k.loadSenderKeySession,
            saveSenderKeySession: k.saveSenderKeySession
        }, e, o("WAWebWidToJid").widToDeviceJid(t), new Uint8Array(n)).then((e)=>{
            if (!e.success) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "CryptoLibrarySignal::processSenderKeyDistributionMsg failed with error ",
                    ""
                ])), e.error);
                throw r("err")(e.error);
            }
        });
    }
    function B({ author, ciphertext, groupId }) {
        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            "CryptoLibrarySignal::decryptGroupSignalProto"
        ])));
        let l = null;
        return T().decryptGroupContent({
            loadSenderKeySession: k.loadSenderKeySession,
            saveSenderKeySession: k.saveSenderKeySession
        }, o("WAWebWidToJid").widToMulticastJid(groupId), o("WAWebWidToJid").widToDeviceJid(author), ciphertext, function(e) {
            l = o("WAByteArray").uint8ArrayToBuffer(e);
            return (E || (E = n("Promise"))).resolve();
        }).then((e)=>{
            if (e.success) {
                if (l == null) {
                    throw new (o("WAWebSignalCommonErrors")).SignalDecryptionError("Null result on successful decryption of group msg");
                }
                return l;
            }
            const e_error = e.error;
            o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "CryptoLibrarySignal::decryptGroupMessage failed ",
                ""
            ])), e_error);
            throw e_error === "errDuplicateMsg" ? new (o("WAWebSignalCommonErrors")).SignalMessageCounterError(e_error) : new (o("WAWebSignalCommonErrors")).SignalDecryptionError(e_error);
        }).catch((e)=>{
            throw e instanceof o("WAWebSignalCommonErrors").SignalDecryptionError || e instanceof o("WAWebSignalCommonErrors").SignalMessageCounterError ? e : (o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "CryptoLibrarySignal::decryptGroupSignalProto failed to decrypt"
            ]))).catching(r("getErrorSafe")(e)), new (o("WAWebSignalCommonErrors")).SignalDecryptionError("Unexpected decryption error"));
        });
    }
    function W(e, t) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                "CryptoLibrarySignal::getGroupSenderKeyInfo"
            ])));
            const n = yield r("WAWebCryptoLibraryUtilsApi").createSenderKeyDistributionMsg({
                author: o("WAWebWidToJid").widToDeviceJid(t),
                groupJid: o("WAJids").toGroupJid(e.toString({
                    legacy: true
                })),
                loadSenderKeySession: k.loadSenderKeySession,
                saveSenderKeySession: k.saveSenderKeySession
            });
            if (n.success) {
                return o("WAByteArray").uint8ArrayToBuffer(n.value);
            }
            o("WALogger").WARN(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                "CryptoLibrarySignal::getGroupSenderKeyInfo failed with error ",
                ""
            ])), n.error);
            throw r("err")(n.error);
        });
        return q.apply(this, arguments);
    }
    l.getCryptoLibModule = T;
    l.createSignalSession = D;
    l.decryptSignalProto = $;
    l.encryptSignalProto = N;
    l.getRemoteRegId = M;
    l.encryptSenderKeyMsgSignalProto = A;
    l.processSenderKeyDistributionMsg = O;
    l.decryptGroupSignalProto = B;
    l.getGroupSenderKeyInfo = W;
}, 98);