__d("WASignalGroupCipher", [
    "WABinary",
    "WACryptoDependencies",
    "WACryptoLibraryConfig",
    "WALogger",
    "WAResultOrError",
    "WASignalCipher",
    "WASignalGroupSession",
    "WASignalKeys",
    "WASignalOther",
    "WASignalSessions",
    "WASignalSignatures",
    "WASignalWhisperTextProtocol.pb",
    "WASignalWhitepaper",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "encodeProtobuf"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 64;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = g(e);
            if (!n.success) {
                return n;
            }
            const n_value = n.value;
            const { chainKey, iteration, senderKeyId, signingKeyPublic } = n_value;
            const u = yield o("WASignalWhitepaper").initiateSenderKeySessionIncoming(senderKeyId, iteration, signingKeyPublic, chainKey, t);
            return o("WAResultOrError").makeResult(u);
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        const t = o("WASignalGroupSession").serializeSenderKeyState(e);
        const n = new (o("WABinary")).Binary;
        n.writeUint8(o("WASignalCipher").versionByte(o("WASignalGroupSession").FORMAT_VERSION, o("WASignalGroupSession").FORMAT_VERSION));
        o("encodeProtobuf").encodeProtobuf(o("WASignalWhisperTextProtocol.pb").SenderKeyDistributionMessageSpec, {
            id: t.senderKeyId,
            iteration: o("WASignalSessions").definedOrThrow(t.senderChainKey, "senderChainKey").iteration,
            chainKey: o("WASignalSessions").definedOrThrow(t.senderChainKey, "senderChainKey").seed,
            signingKey: o("WASignalSessions").definedOrThrow(t.senderSigningKey, "senderSigningKey").public
        }, n);
        return n.readByteArrayView();
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!e.senderKeyStates || e.senderKeyStates.length === 0) {
                return o("WAResultOrError").makeError("errSignalNoSession");
            }
            const n = e.senderKeyStates[e.senderKeyStates.length - 1];
            const r = yield o("WASignalWhitepaper").deriveSenderKeyMsgKey(n.senderKeyChainKey.nextMsgIndex, n.senderKeyChainKey.chainKey);
            const a = r[0];
            const i = r[1];
            const l = yield y(i.seed);
            const s = l[0];
            const u = l[1];
            const c = yield o("WACryptoDependencies").getCrypto().subtle.encrypt({
                name: "AES-CBC",
                iv: u
            }, s, t);
            const d = new (o("WABinary")).Binary;
            o("encodeProtobuf").encodeProtobuf(o("WASignalWhisperTextProtocol.pb").SenderKeyMessageSpec, {
                id: n.senderKeyId,
                iteration: i.iteration,
                ciphertext: c
            }, d);
            const m = new (o("WABinary")).Binary;
            m.writeUint8(o("WASignalCipher").versionByte(o("WASignalGroupSession").FORMAT_VERSION, o("WASignalGroupSession").FORMAT_VERSION));
            m.writeBinary(d);
            const p = o("WASignalKeys").makeKeyPairFromSerialized(o("WASignalSessions").definedOrThrow(n.senderSigningKeyPrivate, "senderSigningKeyPrivate"), n.senderSigningKeyPublic);
            const _ = o("WASignalSignatures").signSenderKeyMessage(p, m.readByteArrayView());
            const f = new (o("WABinary")).Binary;
            f.writeUint8(o("WASignalCipher").versionByte(o("WASignalGroupSession").FORMAT_VERSION, o("WASignalGroupSession").FORMAT_VERSION));
            f.writeBinary(d);
            f.writeByteArray(_);
            const g = o("WASignalGroupSession").makeSenderKeyChainKey(i.iteration + 1, a);
            const h = o("WASignalGroupSession").updateSessionWithUpdatedSenderKeyState(e, o("WASignalGroupSession").makeSenderKeyState(n.senderSigningKeyPublic, n.senderSigningKeyPrivate, g, n.senderKeyId, n.unusedMsgKeys));
            return o("WAResultOrError").makeResult([
                h,
                f.readByteArrayView()
            ]);
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { ciphertext, iteration, senderKeyMessageId, versionContentMac }) {
            const l = o("WASignalGroupSession").findSenderKeyState(e, senderKeyMessageId);
            if (l == null) {
                return o("WAResultOrError").makeError("errSignalNoSession");
            }
            const l_senderSigningKeyPublic = l.senderSigningKeyPublic;
            const u = yield b(versionContentMac, l_senderSigningKeyPublic);
            if (!u) {
                return o("WAResultOrError").makeError("errSignalInvalidKey");
            }
            const c = yield v(l, iteration);
            if (!c.success) {
                return c;
            }
            const c_value = c.value;
            const d_msgKey = c_value.msgKey;
            const p = o("WASignalGroupSession").updateSessionWithUpdatedSenderKeyState(e, c_value.updatedSenderKeyState);
            const _ = yield y(d_msgKey.seed);
            const f = _[0];
            const g = _[1];
            const h = yield o("WACryptoDependencies").getCrypto().subtle.decrypt({
                name: "AES-CBC",
                iv: g
            }, f, ciphertext);
            return o("WAResultOrError").makeResult([
                p,
                h
            ]);
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        let senderKeyId;
        let n;
        let signingKeyPublic;
        let chainKey;
        let i;
        try {
            i = o("WASignalCipher").readContent(e, o("WASignalGroupSession").FORMAT_VERSION, 0);
            if (!i.success) {
                return i;
            }
            const l = o("decodeProtobuf").decodeProtobuf(o("WASignalWhisperTextProtocol.pb").SenderKeyDistributionMessageSpec, i.value);
            senderKeyId = l.id;
            n = l.iteration;
            const s = o("WASignalSessions").bytesOrThrow(l.signingKey, 33, "signingKey");
            signingKeyPublic = o("WASignalKeys").castToSerializedPubKey(s);
            chainKey = o("WASignalSessions").bytesOrThrow(l.chainKey, 32, "chainKey");
            if (senderKeyId == null || n == null) {
                return o("WAResultOrError").makeError("errSignalGrpInvalidProtoFormat");
            }
        } catch (e) {
            return o("WAResultOrError").makeError("errSignalGrpInvalidKeyFormat");
        }
        return o("WAResultOrError").makeResult({
            senderKeyId,
            iteration: n,
            signingKeyPublic,
            chainKey
        });
    }
    function h(t) {
        if (t.length < 1) {
            return o("WAResultOrError").makeError("errSignalGrpVersionContentEmpty");
        }
        const n = t[0] >>> 4;
        if (n !== o("WASignalGroupSession").FORMAT_VERSION) {
            if (n < o("WASignalGroupSession").FORMAT_VERSION) {
                return o("WAResultOrError").makeError("errSignalLegacyMsg");
            }
            return o("WAResultOrError").makeError("errSignalInvalidVersion");
        }
        if (t.length < 1 + s) {
            return o("WAResultOrError").makeError("errSignalGrpInvalidVersionContentLength");
        }
        let senderKeyMessageId;
        let a;
        let i;
        try {
            const l = t.subarray(1, -s);
            const u = o("decodeProtobuf").decodeProtobuf(o("WASignalWhisperTextProtocol.pb").SenderKeyMessageSpec, l);
            senderKeyMessageId = u.id;
            a = u.iteration;
            i = u.ciphertext;
            if (senderKeyMessageId == null || a == null || i == null) {
                return o("WAResultOrError").makeError("errSignalGrpSenderKeyInvalidProtoFormat");
            }
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Exception caught during SenderKeyMessageSpec Proto: ",
                ""
            ])), error);
            return o("WAResultOrError").makeError("errSignalGrpSenderKeyProtoError");
        }
        return o("WAResultOrError").makeResult({
            senderKeyMessageId,
            iteration: a,
            ciphertext: new Uint8Array(i),
            versionContentMac: t
        });
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new (o("WABinary")).Binary(e);
            const n = o("WASignalOther").readBytes(t, 16);
            const r = o("WASignalOther").readBytes(t, 32);
            return [
                (yield o("WASignalOther").makeCryptoKey(r, "aes-cbc")),
                n
            ];
        });
        return C.apply(this, arguments);
    }
    function b(versionContentMac, t) {
        const n = versionContentMac.subarray(versionContentMac.length - s);
        const r = versionContentMac.subarray(0, versionContentMac.length - s);
        return o("WASignalSignatures").verifyMsgSignalVariantAsync(t, r, o("WASignalOther").toBytes(o("WASignalOther").toBuffer(n), 64));
    }
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e;
            const r = t - n.senderKeyChainKey.nextMsgIndex;
            const signalFutureMessagesMax = o("WACryptoLibraryConfig").getCryptoLibraryConfig().signalFutureMessagesMax;
            if (r > signalFutureMessagesMax) {
                return o("WAResultOrError").makeError("errSignalGrpTooManyMessagesInFuture");
            }
            const i = e.unusedMsgKeys || [];
            if (r < 0) {
                const l = i.findIndex((e)=>e.iteration === t);
                if (l === -1) {
                    return o("WAResultOrError").makeError("errDuplicateMsg");
                }
                return o("WAResultOrError").makeResult({
                    msgKey: i[l],
                    updatedSenderKeyState: o("WASignalGroupSession").makeSenderKeyState(n.senderSigningKeyPublic, n.senderSigningKeyPrivate, n.senderKeyChainKey, n.senderKeyId, R(i, l))
                });
            }
            const nextMsgIndex = n.senderKeyChainKey.nextMsgIndex;
            const u = yield o("WASignalWhitepaper").deriveSenderKeyMsgKey(nextMsgIndex, n.senderKeyChainKey.chainKey);
            let c = u[0];
            let d = u[1];
            let m = null;
            if (r > 0) {
                let p = r + i.length - o("WASignalCipher").MAX_UNUSED_KEYS;
                if (p > 0) {
                    m = i.slice(p);
                    p -= i.length;
                } else {
                    m = i.slice();
                }
                for(let _ = nextMsgIndex + 1; _ <= t; _++){
                    if (p > 0) {
                        p--;
                    } else {
                        m.push(d);
                    }
                    const f = yield o("WASignalWhitepaper").deriveSenderKeyMsgKey(_, c);
                    c = f[0];
                    d = f[1];
                }
            }
            return o("WAResultOrError").makeResult({
                msgKey: d,
                updatedSenderKeyState: o("WASignalGroupSession").makeSenderKeyState(n.senderSigningKeyPublic, n.senderSigningKeyPrivate, o("WASignalGroupSession").makeSenderKeyChainKey(t + 1, c), e.senderKeyId, m || i)
            });
        });
        return S.apply(this, arguments);
    }
    function R(e, t) {
        const n = [];
        for(let r = 0; r < e.length; r++){
            if (r !== t) {
                n.push(e[r]);
            }
        }
        return n;
    }
    l.processSenderKeyDistributionMsg = u;
    l.createSenderKeyDistributionProto = d;
    l.encryptSenderKeyMsgWithSession = m;
    l.decryptSenderKeyMsgFromSession = _;
    l.deserializeSenderKeyMsg = h;
}, 98);