__d("WACryptoLibrary", [
    "WACryptoUtils",
    "WAJids",
    "WALockMap",
    "WALogger",
    "WAResultOrError",
    "WASignalCipher",
    "WASignalGroupCipher",
    "WASignalGroupSession",
    "WASignalKeys",
    "WASignalOther",
    "WASignalSignatures",
    "WASignalWhitepaper",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = o("WALockMap").makeLockMap(60000);
    const u = [];
    const c = 300;
    function d(e) {
        u.push(e);
        if (u.length >= c) {
            u.shift();
        }
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            d("createOutgoingSession");
            const n = k(t);
            const n_signedKey = n.signedKey;
            const a = yield o("WASignalSignatures").verifyMsgSignalVariant(n.identity, n_signedKey.publicKey, n_signedKey.signature);
            if (!a) {
                d("createOutgoingSession: errSignalInvalidKey");
                return o("WAResultOrError").makeError("errSignalInvalidKey");
            }
            const i = yield o("WASignalWhitepaper").initiateSessionOutgoing(e, n, o("WASignalKeys").makeKeyPair());
            return o("WAResultOrError").makeResult(i);
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n, r, o) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ handleNewSession }, t, n, r, o) {
            d("establishOutgoingSession");
            const i = yield m(t, r);
            if (!i.success) {
                return i;
            }
            const i_value = i.value;
            return handleNewSession(n, i_value, i_value.remote.pubKey, null, o);
        });
        return f.apply(this, arguments);
    }
    function g({ handleNewSession, loadSession }, t, r, a) {
        d("encryptContent");
        return s.lock([
            o("WAJids").extractUserJid(t)
        ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let e = null;
            do {
                const n = yield loadSession(t, "cryptoLibraryEncryptContent");
                if (n == null) {
                    d("encryptContent: errSignalInvalidKey");
                    return o("WAResultOrError").makeError("errSignalInvalidKey");
                }
                if (a != null && !o("WACryptoUtils").uint8ArraysEqual(a, n.remote.pubKey)) {
                    d("encryptContent: identity-mismatch");
                    return o("WAResultOrError").makeError("identity-mismatch");
                }
                const s = yield o("WASignalCipher").encryptMsg(n, r);
                const u = s[0];
                const c = s[1];
                const m = yield handleNewSession(t, u, u.remote.pubKey);
                if (m.success) {
                    e = o("WAResultOrError").makeResult(babelHelpers.extends({}, c, {
                        baseKey: u.aliceBaseKey
                    }));
                } else {
                    m.error;
                }
            }while (e == null)
            return e;
        }));
    }
    function h({ deleteKyberPreKey, handleNewSession, loadKyberPreKey, loadOneTimePreKey, loadSession, loadSignedPreKey }, t, r, a, i) {
        d("decryptContent");
        return s.lock([
            o("WAJids").extractUserJid(r)
        ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let e = false;
            const n = yield loadSession(r, "decryptContent");
            let s;
            if (a.type === "pkmsg") {
                const f = o("WASignalCipher").deserializePkMsg(a.ciphertext);
                if (!f.success) {
                    d("decryptContent: errCryptoDeserialization");
                    return o("WAResultOrError").makeError("errCryptoDeserialization");
                }
                const g = f.value;
                const h = yield y({
                    loadSignedPreKey,
                    loadOneTimePreKey,
                    loadKyberPreKey: loadKyberPreKey ?? null
                }, t, g, n);
                if (!h.success) {
                    return h;
                }
                s = h.value;
            } else {
                a.type;
                const C = o("WASignalCipher").deserializeMsg(a.ciphertext);
                if (!C.success) {
                    d("decryptContent: errCryptoDeserialization");
                    return o("WAResultOrError").makeError("errCryptoDeserialization");
                }
                const b = C.value;
                const v = yield o("WASignalCipher").decryptMsg(n, b);
                if (!v.success) {
                    return v;
                }
                s = v.value;
            }
            const s_newSessionInfo = s.newSessionInfo;
            if (s_newSessionInfo && (s_newSessionInfo.newIdentity != null || s_newSessionInfo.usedPreKey != null)) {
                yield handleNewSession(r, s_newSessionInfo.baseSession, s_newSessionInfo.newIdentity, s_newSessionInfo.usedPreKey);
            }
            if (s_newSessionInfo?.usedKyberPreKey != null && deleteKyberPreKey != null) {
                yield deleteKyberPreKey(s_newSessionInfo.usedKyberPreKey);
            }
            if (!e) {
                const L = s_newSessionInfo?.baseSession.remote.pubKey;
                yield i(new Uint8Array(s.plaintext), L);
                e = true;
            }
            yield handleNewSession(r, s.updatedSession, s.updatedSession.remote.pubKey);
            return o("WAResultOrError").makeResult();
        }));
    }
    function y(e, t, n, r) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ loadKyberPreKey, loadOneTimePreKey, loadSignedPreKey }, t, n, r) {
            d("decryptPkMsg");
            const s = o("WASignalCipher").findMatchingSession(r, n.sessionBaseKey);
            if (!s.success) {
                return s;
            }
            const s_value = s.value;
            if (s_value) {
                const c = yield o("WASignalCipher").decryptMsgFromSession(s_value, n);
                if (!c.success) {
                    return c;
                }
                const m = c.value;
                const p = m[0];
                const _ = m[1];
                return o("WAResultOrError").makeResult({
                    newSessionInfo: null,
                    updatedSession: p,
                    plaintext: _
                });
            } else {
                const usedPreKey = n.localOneTimeKeyId;
                const localSignedPreKey = yield loadSignedPreKey(n.localSignedPreKeyId);
                const localOneTimeKey = usedPreKey == null ? null : yield loadOneTimePreKey(usedPreKey);
                let y = null;
                if (n.kyberPreKeyId != null && n.kyberCiphertext != null && loadKyberPreKey != null) {
                    y = yield loadKyberPreKey(n.kyberPreKeyId);
                }
                const C = yield o("WASignalCipher").decryptPkMsgWithNewSession(t, r, n, {
                    localSignedPreKey,
                    localOneTimeKey,
                    localKyberPreKey: y != null ? {
                        secretKey: y.secretKey
                    } : null
                });
                if (!C.success) {
                    return C;
                }
                const b = C.value;
                const { baseSession, newIdentity, plaintext, updatedSession } = b;
                return o("WAResultOrError").makeResult({
                    newSessionInfo: {
                        newIdentity,
                        baseSession,
                        usedPreKey,
                        usedKyberPreKey: y != null && y.shouldDeleteAfterUse !== false ? n.kyberPreKeyId : null
                    },
                    updatedSession,
                    plaintext
                });
            }
        });
        return C.apply(this, arguments);
    }
    function b({ loadSenderKeySession, saveSenderKeySession }, t, r, a) {
        d("encryptGroupContent");
        return s.lock([
            t,
            o("WAJids").extractUserJid(r)
        ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let e = null;
            do {
                const n = yield loadSenderKeySession(t, r);
                if (!n.success) {
                    return o("WAResultOrError").makeError(n.error);
                }
                const s = n.value;
                const u = yield o("WASignalGroupCipher").encryptSenderKeyMsgWithSession(s, a);
                if (u.success) {
                    const c = u.value;
                    const m = c[0];
                    const p = c[1];
                    yield saveSenderKeySession(t, r, m);
                    const _ = s.senderKeyStates[s.senderKeyStates.length - 1];
                    e = o("WAResultOrError").makeResult({
                        ciphertext: {
                            ciphertext: p,
                            type: "skmsg"
                        },
                        senderKeyId: _.senderKeyId,
                        senderKeyDistributionProto: o("WASignalGroupCipher").createSenderKeyDistributionProto(o("WASignalGroupSession").convertFromRawToSenderKeyState(_))
                    });
                } else {
                    d("encryptGroupContent: sender-key-no-session");
                    return o("WAResultOrError").makeError("sender-key-no-session");
                }
            }while (e == null)
            return e;
        }));
    }
    function v({ loadSenderKeySession, saveSenderKeySession }, r, a, i, l) {
        d("decryptGroupContent");
        return s.lock([
            r,
            o("WAJids").extractUserJid(a)
        ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let t = false;
            const n = yield loadSenderKeySession(r, a);
            if (!n.success) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WACryptoLibrary] Unable to load sender key session for group during decryptGroupContent: ",
                    ", author: ",
                    ""
                ])), r, a);
                return o("WAResultOrError").makeError(n.error);
            }
            const s = o("WASignalGroupCipher").deserializeSenderKeyMsg(i);
            if (!s.success) {
                d("decryptGroupContent: errCryptoDeserialization");
                return o("WAResultOrError").makeError("errCryptoDeserialization");
            }
            const n_value = n.value;
            const p = yield o("WASignalGroupCipher").decryptSenderKeyMsgFromSession(n_value, s.value);
            if (!p.success) {
                return p;
            }
            const p_value = p.value;
            const f = p_value[0];
            const g = p_value[1];
            if (!t) {
                yield l(new Uint8Array(g));
                t = true;
            }
            yield saveSenderKeySession(r, a, f);
            return o("WAResultOrError").makeResult();
        }));
    }
    function S({ loadSenderKeySession, saveSenderKeySession }, t, r, a) {
        d("saveSenderKeySession");
        return s.lock([
            t,
            o("WAJids").extractUserJid(r)
        ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let e = null;
            if (loadSenderKeySession) {
                const n = yield loadSenderKeySession(t, r);
                e = n.success ? n.value : null;
            }
            const s = yield o("WASignalGroupCipher").processSenderKeyDistributionMsg(a, e);
            if (!s.success) {
                return s;
            }
            const s_value = s.value;
            yield saveSenderKeySession(t, r, s_value);
            return o("WAResultOrError").makeResult();
        }));
    }
    function R({ saveSenderKeySession }, t, r, a) {
        d("rotateGroupSenderKey");
        return s.lock([
            t,
            o("WAJids").extractUserJid(r)
        ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WASignalWhitepaper").initiateSenderKeySessionOutgoing(a);
            const senderKeyId = e.senderKeyStates[0].senderKeyId;
            yield saveSenderKeySession(t, r, e);
            return {
                senderKeyId
            };
        }));
    }
    function L(e, t, n) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ loadSenderKeySession, saveSenderKeySession }, t, n) {
            d("createSenderKeyDistributionMsg");
            let i = yield loadSenderKeySession(t, n);
            const i_error = i.error;
            if (!i.success && i_error === "errLoadSenderKeySession") {
                const s = yield o("WASignalKeys").makeKeyPair();
                yield R({
                    saveSenderKeySession
                }, t, n, s);
                i = yield loadSenderKeySession(t, n);
            }
            if (i.success) {
                const u = i.value.senderKeyStates.slice(-1);
                if (u.length > 0) {
                    return o("WAResultOrError").makeResult(o("WASignalGroupCipher").createSenderKeyDistributionProto(o("WASignalGroupSession").convertFromRawToSenderKeyState(u[0])));
                }
            }
            d("createSenderKeyDistributionMsg: errGetSenderKeyProto");
            return o("WAResultOrError").makeError("errGetSenderKeyProto");
        });
        return E.apply(this, arguments);
    }
    function k({ identity, oneTimeKey, regId, signedKey }) {
        d("sanitizeInitialSessionInfo");
        const i = o("WASignalKeys").castToSerializedPubKey(signedKey.publicKey);
        return {
            regId: o("WASignalOther").castRegistrationId(regId),
            identity: o("WASignalKeys").castToSerializedPubKey(identity),
            signedKey: {
                id: o("WASignalKeys").castToSignedPreKeyId(signedKey.id),
                publicKey: i,
                signature: o("WASignalOther").ensureSize(signedKey.signature, 64)
            },
            oneTimeKey: oneTimeKey && {
                id: o("WASignalKeys").castToPreKeyId(oneTimeKey.id),
                publicKey: o("WASignalKeys").castToSerializedPubKey(oneTimeKey.publicKey)
            },
            ratchetKey: i
        };
    }
    l.createOutgoingSession = m;
    l.establishOutgoingSession = _;
    l.encryptContent = g;
    l.decryptContent = h;
    l.encryptGroupContent = b;
    l.decryptGroupContent = v;
    l.saveSenderKeySession = S;
    l.rotateGroupSenderKey = R;
    l.createSenderKeyDistributionMsg = L;
}, 98);