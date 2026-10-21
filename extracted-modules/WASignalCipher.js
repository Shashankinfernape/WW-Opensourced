__d("WASignalCipher", [
    "Promise",
    "WABinary",
    "WACryptoCurveKeyCanonicalCheck",
    "WACryptoDependencies",
    "WACryptoLibraryConfig",
    "WACryptoUtils",
    "WAResultOrError",
    "WASignalKeys",
    "WASignalOther",
    "WASignalSessions",
    "WASignalSignatures",
    "WASignalWhisperTextProtocol.pb",
    "WASignalWhitepaper",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "encodeProtobuf",
    "gkx",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = r("requireDeferred")("WASignalPQXDH").__setRef("WASignalCipher");
    const u = 40;
    const c = 8;
    const d = 2000;
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = e.sessionVersion ?? o("WASignalSessions").FORMAT_VERSION;
            const e_sendChain = e.sendChain;
            const i = yield o("WASignalWhitepaper").deriveMsgKey(e_sendChain.nextMsgIndex, e_sendChain.chainKey);
            const l = i[0];
            const s = i[1];
            const u = yield D(s);
            const { cipherKey, macKey } = u;
            const p = yield o("WACryptoDependencies").getCrypto().subtle.encrypt({
                name: "AES-CBC",
                iv: s.iv
            }, cipherKey, t);
            const _ = new (o("WABinary")).Binary;
            _.writeByteArray(e.local.pubKey);
            _.writeByteArray(e.remote.pubKey);
            const f = _.size();
            const g = o("WACryptoLibraryConfig").getCryptoLibraryConfig().isPq1on1MessageEnabled === true;
            if (g === true) {
                _.writeUint8(k(r, r));
            } else {
                _.writeUint8(k(o("WASignalSessions").FORMAT_VERSION, o("WASignalSessions").FORMAT_VERSION));
            }
            o("encodeProtobuf").encodeProtobuf(o("WASignalWhisperTextProtocol.pb").SignalMessageSpec, {
                ratchetKey: e_sendChain.ratchetKey.serializedPubKey,
                counter: s.index,
                previousCounter: e.prevSendChainHighestIndex,
                ciphertext: p
            }, _);
            const h = _.readByteArrayView();
            const y = yield T(macKey, h);
            const C = h.subarray(f);
            const message = o("WABinary").Binary.build(C, new Uint8Array(y, 0, c)).readByteArrayView();
            let v;
            let S;
            const e_initialExchangeInfo = e.initialExchangeInfo;
            if (e_initialExchangeInfo != null) {
                const E = new (o("WABinary")).Binary;
                const I = o("WACryptoLibraryConfig").getCryptoLibraryConfig().isPq1on1MessageEnabled === true;
                if (I === true) {
                    E.writeUint8(k(r, r));
                } else {
                    E.writeUint8(k(o("WASignalSessions").FORMAT_VERSION, o("WASignalSessions").FORMAT_VERSION));
                }
                o("encodeProtobuf").encodeProtobuf(o("WASignalWhisperTextProtocol.pb").PreKeySignalMessageSpec, {
                    registrationId: e.local.regId,
                    preKeyId: e_initialExchangeInfo.remoteOneTimeId ?? undefined,
                    signedPreKeyId: e_initialExchangeInfo.remoteSignedId,
                    baseKey: e_initialExchangeInfo.localOneTimePubKey,
                    identityKey: e.local.pubKey,
                    message,
                    kyberPreKeyId: I && e_initialExchangeInfo.kyberPreKeyId != null ? e_initialExchangeInfo.kyberPreKeyId : undefined,
                    kyberCiphertext: I && e_initialExchangeInfo.kemCiphertext != null ? e_initialExchangeInfo.kemCiphertext : undefined
                }, E);
                v = "pkmsg";
                S = E.readByteArrayView();
            } else {
                v = "msg";
                S = message;
            }
            const x = o("WASignalSessions").makeSendChain(e_sendChain.ratchetKey, s.index + 1, l);
            const $ = o("WASignalSessions").updateChains(e, e.recvChains, x);
            return [
                $,
                {
                    type: v,
                    ciphertext: S
                }
            ];
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e == null) {
                return o("WAResultOrError").makeError("errSignalNoSession");
            }
            const n = yield v(e, t);
            if (n.success) {
                const r = n.value;
                const a = r[0];
                const i = r[1];
                return o("WAResultOrError").makeResult({
                    newSessionInfo: null,
                    updatedSession: a,
                    plaintext: i
                });
            } else {
                for(var l = e.prevSessions, s = n, u = 0; !s.success && u < l.length; u++){
                    const c = o("WASignalSessions").maybeClearPendingPreKey(o("WASignalSessions").parseSession(l[u]));
                    const d = yield v(c, t);
                    if (d.success) {
                        const m = d.value;
                        const p = m[0];
                        const _ = m[1];
                        const f = o("WASignalSessions").setPrevSessions(p, [
                            o("WASignalSessions").detachSession(e)
                        ].concat(l.slice(0, u), l.slice(u + 1)));
                        const newIdentity = !e || !o("WACryptoUtils").serializedPubKeysEqual(f.remote.pubKey, e.remote.pubKey) ? f.remote.pubKey : null;
                        s = o("WAResultOrError").makeResult({
                            newSessionInfo: {
                                newIdentity,
                                baseSession: c,
                                usedPreKey: null
                            },
                            updatedSession: f,
                            plaintext: _
                        });
                    }
                }
                return s;
            }
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        if (e == null) {
            return o("WAResultOrError").makeResult(null);
        }
        const n = e;
        if (x(n, t)) {
            return o("WAResultOrError").makeResult(n);
        }
        for(let r = n.prevSessions, a = 0; a < r.length; a++){
            const i = o("WASignalSessions").parseSession(r[a]);
            if (x(i, t)) {
                return o("WAResultOrError").makeError("errSignalInvalidMsg");
            }
        }
        return o("WAResultOrError").makeResult(null);
    }
    function h(e, t, n, r) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            const r_localSignedPreKey = r.localSignedPreKey;
            if (r_localSignedPreKey == null) {
                return o("WAResultOrError").makeError("errSignalInvalidSignedPreKey");
            }
            const c = o("WASignalSignatures").deserializeSignedPreKey(r_localSignedPreKey);
            if (c == null) {
                return o("WAResultOrError").makeError("errSignalSignedPreKeyDeserialization");
            }
            if (c.id !== n.localSignedPreKeyId) {
                return o("WAResultOrError").makeError("errSignalSignedPreKeyIdMismatch");
            }
            let d = null;
            if (n.localOneTimeKeyId != null) {
                const m = r.localOneTimeKey;
                if (m == null) {
                    return o("WAResultOrError").makeError("errSignalInvalidOneTimeKey");
                }
                d = o("WASignalKeys").deserializePreKey(m);
                if (d == null) {
                    return o("WAResultOrError").makeError("errSignalOneTimeKeyDeserialization");
                }
                if (d.id !== n.localOneTimeKeyId) {
                    return o("WAResultOrError").makeError("errSignalOneTimeKeyMismatch");
                }
            }
            if (!o("WACryptoCurveKeyCanonicalCheck").isCanonical(n.sessionBaseKey.subarray(1))) {
                return o("WAResultOrError").makeError("errSignalBaseKeyIsNotCanonical");
            }
            const oneTime = d?.keyPair ?? null;
            const _ = {
                signed: c.keyPair,
                oneTime,
                ratchet: o("WASignalKeys").toSerializedKeyPair(c.keyPair)
            };
            let f;
            if (n.kyberCiphertext != null && n.kyberPreKeyId != null && r.localKyberPreKey != null) {
                const g = r.localKyberPreKey.secretKey;
                const h = n.kyberCiphertext;
                try {
                    const y = yield s.load();
                    const C = y.initiateSessionIncomingPQ;
                    f = yield C(e, n.remote, n.sessionBaseKey, _, g, h);
                } catch (e) {
                    return o("WAResultOrError").makeError("errSignalPQXDHDecapsulationFailed");
                }
            } else {
                f = yield o("WASignalWhitepaper").initiateSessionIncoming(e, n.remote, n.sessionBaseKey, _);
            }
            const pubKey = f.remote.pubKey;
            const newIdentity = !t || !o("WACryptoUtils").serializedPubKeysEqual(pubKey, t.remote.pubKey) ? pubKey : null;
            if (t && !newIdentity) {
                f = o("WASignalSessions").setPrevSessions(f, [
                    o("WASignalSessions").detachSession(t)
                ].concat(t.prevSessions.slice(0, u - 1)));
            }
            const R = yield v(f, n);
            if (!R.success) {
                return R;
            }
            const R_value = R.value;
            const E = R_value[0];
            const k = R_value[1];
            return o("WAResultOrError").makeResult({
                newIdentity,
                baseSession: f,
                updatedSession: E,
                plaintext: k
            });
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        let ratchetPubKey;
        let n;
        let counter = null;
        try {
            const a = E(e, o("WASignalSessions").FORMAT_VERSION, c, o("WASignalSessions").PQXDH_FORMAT_VERSION);
            if (!a.success) {
                return a;
            }
            const i = o("decodeProtobuf").decodeProtobuf(o("WASignalWhisperTextProtocol.pb").SignalMessageSpec, a.value);
            const l = i.ratchetKey;
            counter = i.counter;
            n = i.ciphertext;
            if (l == null || counter == null || n == null) {
                return o("WAResultOrError").makeError("errSignalDeserializeInvalidProtoFormat");
            }
            ratchetPubKey = o("WASignalKeys").castToSerializedPubKey(new Uint8Array(l));
        } catch (e) {
            return o("WAResultOrError").makeError("errSignalDeserializeRatchetKeyBadFormat");
        }
        const s = {
            ratchetPubKey,
            counter,
            ciphertext: new Uint8Array(n),
            versionContentMac: e
        };
        return o("WAResultOrError").makeResult(s);
    }
    function b(e) {
        const t = E(e, o("WASignalSessions").FORMAT_VERSION, 0, o("WASignalSessions").PQXDH_FORMAT_VERSION);
        if (!t.success) {
            return t;
        }
        let n;
        let localSignedPreKeyId;
        let localOneTimeKeyId;
        let sessionBaseKey;
        let l;
        let kyberPreKeyId;
        let kyberCiphertext;
        try {
            const c = o("decodeProtobuf").decodeProtobuf(o("WASignalWhisperTextProtocol.pb").PreKeySignalMessageSpec, t.value);
            const { baseKey, identityKey, message, preKeyId, registrationId, signedPreKeyId } = c;
            if (registrationId == null || signedPreKeyId == null || baseKey == null || identityKey == null || message == null) {
                return o("WAResultOrError").makeError("errSignalDeserializePkInvalidProtoFormat");
            }
            sessionBaseKey = o("WASignalKeys").castToSerializedPubKey(new Uint8Array(baseKey));
            n = {
                regId: o("WASignalOther").castRegistrationId(registrationId),
                pubKey: o("WASignalKeys").castToSerializedPubKey(new Uint8Array(identityKey))
            };
            localOneTimeKeyId = preKeyId != null ? o("WASignalKeys").castToPreKeyId(preKeyId) : null;
            localSignedPreKeyId = o("WASignalKeys").castToSignedPreKeyId(signedPreKeyId);
            l = new Uint8Array(message);
            kyberPreKeyId = c.kyberPreKeyId ?? null;
            kyberCiphertext = c.kyberCiphertext != null ? new Uint8Array(c.kyberCiphertext) : null;
        } catch (e) {
            return o("WAResultOrError").makeError("errSignalDeserializePkKeyBadFormat");
        }
        const h = C(l);
        if (h.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, h.value, {
                remote: n,
                sessionBaseKey,
                localSignedPreKeyId,
                localOneTimeKeyId,
                kyberPreKeyId,
                kyberCiphertext
            }));
        }
        return h;
    }
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { ciphertext, counter, ratchetPubKey, versionContentMac }) {
            const e_recvChains = e.recvChains;
            const u = e.recvChains.findIndex((e)=>o("WACryptoUtils").serializedPubKeysEqual(e.ratchetPubKey, ratchetPubKey));
            let d;
            let m;
            if (u === -1) {
                const p = yield o("WASignalWhitepaper").calculateRatchet(e.rootKey, e.sendChain.ratchetKey, ratchetPubKey);
                const _ = o("WASignalSessions").makeFreshRecvChain(ratchetPubKey, p.chainKey);
                const f = yield R(_, counter);
                if (!f.success) {
                    return f;
                }
                const g = f.value;
                const h = r("gkx")("7643") ? yield o("WASignalKeys").makeSerializedKeyPairAsync() : o("WASignalKeys").makeSerializedKeyPair();
                const y = yield o("WASignalWhitepaper").calculateRatchet(p.rootKey, h, ratchetPubKey);
                const C = e_recvChains.slice(-4);
                C.push(g.updatedChain);
                m = g.msgKey;
                d = o("WASignalSessions").ratchetSession(e, C, o("WASignalSessions").makeFreshSendChain(h, y.chainKey), y.rootKey);
            } else {
                const b = yield R(e_recvChains[u], counter);
                if (!b.success) {
                    return b;
                }
                const v = b.value;
                const S = e_recvChains.slice();
                S[u] = v.updatedChain;
                m = v.msgKey;
                d = o("WASignalSessions").updateChains(e, S, e.sendChain);
            }
            const L = yield D(m);
            const { cipherKey, macKey } = L;
            const I = o("WABinary").Binary.build(e.remote.pubKey, e.local.pubKey, versionContentMac.subarray(0, -c)).readByteArrayView();
            const x = yield T(macKey, I);
            const $ = versionContentMac.subarray(-c);
            const P = !o("WACryptoUtils").uint8ArraysEqual(new Uint8Array(x, 0, c), $);
            let N = null;
            try {
                N = yield o("WACryptoDependencies").getCrypto().subtle.decrypt({
                    name: "AES-CBC",
                    iv: m.iv
                }, cipherKey, ciphertext);
            } catch (e) {}
            if (P && N == null) {
                if (u === -1) {
                    return o("WAResultOrError").makeError("errInvalidMacInvalidCipherKeyNewChain");
                }
                return o("WAResultOrError").makeError("errInvalidMacInvalidCipherKey");
            }
            if (P) {
                return o("WAResultOrError").makeError("errInvalidMacWithDecryptedPlaintext");
            }
            if (N == null) {
                return o("WAResultOrError").makeError("errUnknownInvalidCipherKey");
            }
            return o("WAResultOrError").makeResult([
                d,
                N
            ]);
        });
        return S.apply(this, arguments);
    }
    function R(e, t) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = t - e.nextMsgIndex;
            const signalFutureMessagesMax = o("WACryptoLibraryConfig").getCryptoLibraryConfig().signalFutureMessagesMax;
            if (n > signalFutureMessagesMax) {
                return o("WAResultOrError").makeError("errSignalTooManyMessagesInFuture");
            }
            const e_unusedMsgKeys = e.unusedMsgKeys;
            if (n < 0) {
                const i = e_unusedMsgKeys.findIndex((e)=>e.index === t);
                if (i === -1) {
                    return o("WAResultOrError").makeError("errDuplicateMsg");
                }
                return o("WAResultOrError").makeResult({
                    msgKey: e_unusedMsgKeys[i],
                    updatedChain: o("WASignalSessions").makeRecvChain(e.ratchetPubKey, e.nextMsgIndex, e.chainKey, I(e_unusedMsgKeys, i))
                });
            }
            const e_nextMsgIndex = e.nextMsgIndex;
            const s = yield o("WASignalWhitepaper").deriveMsgKey(e_nextMsgIndex, e.chainKey);
            let u = s[0];
            let c = s[1];
            let m = null;
            if (n > 0) {
                let p = n + e_unusedMsgKeys.length - d;
                if (p > 0) {
                    m = e_unusedMsgKeys.slice(p);
                    p -= e_unusedMsgKeys.length;
                } else {
                    m = e_unusedMsgKeys.slice();
                }
                for(let _ = e_nextMsgIndex + 1; _ <= t; _++){
                    if (p > 0) {
                        p--;
                    } else {
                        m.push(c);
                    }
                    const f = yield o("WASignalWhitepaper").deriveMsgKey(_, u);
                    u = f[0];
                    c = f[1];
                }
            }
            return o("WAResultOrError").makeResult({
                msgKey: c,
                updatedChain: o("WASignalSessions").makeRecvChain(e.ratchetPubKey, t + 1, u, m || e_unusedMsgKeys)
            });
        });
        return L.apply(this, arguments);
    }
    function E(e, t, n, r) {
        if (e.length < 1) {
            return o("WAResultOrError").makeError("errSignalEmptyVersionContentSuffix");
        }
        const a = r ?? t;
        const i = e[0] >>> 4;
        if (i < t || i > a) {
            if (i < t) {
                return o("WAResultOrError").makeError("errSignalLegacyMsg");
            }
            return o("WAResultOrError").makeError("errSignalInvalidVersion");
        }
        const l = e.length - n;
        if (l < 1) {
            return o("WAResultOrError").makeError("errSignalContentExceededExpectedLength");
        }
        return o("WAResultOrError").makeResult(e.subarray(1, l));
    }
    function k(e, t) {
        return (e << 4 | t) & 255;
    }
    function I(e, t) {
        const n = [];
        for(let r = 0; r < e.length; r++){
            if (r !== t) {
                n.push(e[r]);
            }
        }
        return n;
    }
    function T(macKey, t) {
        return o("WACryptoDependencies").getCrypto().subtle.sign(o("WASignalOther").HMAC_SHA256, macKey, t);
    }
    function D(t) {
        return (e || (e = n("Promise"))).all([
            o("WASignalOther").makeCryptoKey(t.cipherKey, "aes-cbc"),
            o("WASignalOther").makeCryptoKey(t.macKey, "hmac-sha256")
        ]).then(([cipherKey, macKey])=>({
                cipherKey,
                macKey
            }));
    }
    function x({ aliceBaseKey }, t) {
        if (aliceBaseKey) {
            return o("WACryptoUtils").serializedPubKeysEqual(aliceBaseKey, t);
        }
        return false;
    }
    l.MAX_UNUSED_KEYS = d;
    l.encryptMsg = m;
    l.decryptMsg = _;
    l.findMatchingSession = g;
    l.decryptPkMsgWithNewSession = h;
    l.deserializeMsg = C;
    l.deserializePkMsg = b;
    l.decryptMsgFromSession = v;
    l.readContent = E;
    l.versionByte = k;
}, 98);