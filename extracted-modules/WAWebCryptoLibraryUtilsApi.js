__d("WAWebCryptoLibraryUtilsApi", [
    "WACryptoPrimitives",
    "WALogger",
    "WAResultOrError",
    "WASignalCipher",
    "WASignalGroupCipher",
    "WASignalGroupSession",
    "WASignalKeys",
    "WASignalOther",
    "WASignalSessions",
    "WASignalSignatures",
    "WASignalWhisperTextProtocol.pb",
    "WATimeUtils",
    "WAWebCryptoLibrary",
    "asyncToGeneratorRuntime",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (()=>{
        function t() {}
        const t_prototype = t.prototype;
        t_prototype.createSenderKeyDistributionMsg = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ author, groupJid, loadSenderKeySession, saveSenderKeySession }) {
                let i = yield loadSenderKeySession(groupJid, author);
                if (!i.success && i.error === "errLoadSenderKeySession") {
                    const l = yield o("WASignalKeys").makeKeyPair();
                    yield o("WAWebCryptoLibrary").getCryptoLibModule().rotateGroupSenderKey({
                        saveSenderKeySession
                    }, groupJid, author, l);
                    i = yield loadSenderKeySession(groupJid, author);
                }
                if (i.success) {
                    const s = i.value.senderKeyStates.slice(-1);
                    if (s.length > 0) {
                        return o("WAResultOrError").makeResult(o("WASignalGroupCipher").createSenderKeyDistributionProto(o("WASignalGroupSession").convertFromRawToSenderKeyState(s[0])));
                    }
                }
                return o("WAResultOrError").makeError("errGetSenderKeyProto");
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getSessionAliceBaseKey = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = yield t(e);
                if (n != null && n.aliceBaseKey) {
                    return o("WAResultOrError").makeResult(o("WASignalOther").toBuffer(n.aliceBaseKey));
                }
                return o("WAResultOrError").makeError("errSessionExists");
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.extractIdentityKey = function(n) {
            const t = o("WASignalCipher").readContent(n, o("WASignalSessions").FORMAT_VERSION, 0, o("WASignalSessions").PQXDH_FORMAT_VERSION);
            if (!t.success) {
                return t;
            }
            try {
                const r = o("decodeProtobuf").decodeProtobuf(o("WASignalWhisperTextProtocol.pb").PreKeySignalMessageSpec, t.value);
                const { baseKey, identityKey, message, registrationId, signedPreKeyId } = r;
                if (registrationId == null || signedPreKeyId == null || baseKey == null || identityKey == null || message == null) {
                    return o("WAResultOrError").makeError("errSignalDeserializePkInvalidProtoFormat");
                }
                o("WASignalOther").ensureSize(new Uint8Array(identityKey), 33);
                return o("WAResultOrError").makeResult(identityKey);
            } catch (t) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "extractIdentityKey: parse proto failed"
                ])));
                return o("WAResultOrError").makeError("errSignalDeserializePkKeyBadFormat");
            }
        };
        t_prototype.verifySignature = function(t, n, r) {
            const e = o("WASignalSignatures").convertPublicKeyToSerializedPubKey(t);
            const a = o("WASignalOther").ensureSize(r, 64);
            return o("WASignalSignatures").verifyMsgSignalVariant(e, n, a);
        };
        t_prototype.signMsg = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                const r = o("WASignalKeys").makeKeyPairFromArrayBuffers(e, t);
                const a = yield o("WASignalSignatures").signMsg(r, new Uint8Array(n));
                return o("WASignalOther").toBuffer(a);
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.makePreKey = function(t) {
            const e = o("WASignalKeys").makePreKeys(t, 1);
            const plainObject = e[0].plainObject;
            const { id: preKeyId, keyPair } = plainObject;
            return {
                preKeyId,
                privKey: o("WASignalOther").toBuffer(keyPair.privateKey),
                pubKey: o("WASignalOther").toBuffer(keyPair.publicKey)
            };
        };
        t_prototype.makeSignedPreKey = function(t, n) {
            const e = o("WASignalKeys").makeKeyPairFromArrayBuffers(t.pubKey, t.privKey);
            const r = o("WASignalSignatures").makeSignedPreKey(n, o("WATimeUtils").unixTimeMs(), e);
            return {
                preKeyId: r.id,
                signature: o("WASignalOther").toBuffer(r.signature),
                pubKey: o("WASignalOther").toBuffer(r.keyPair.publicKey),
                privKey: o("WASignalOther").toBuffer(r.keyPair.privateKey)
            };
        };
        t_prototype.makeKeyPair = function() {
            const e = o("WASignalKeys").makeKeyPair();
            const { privateKey, publicKey } = e;
            return {
                privKey: o("WASignalOther").toBuffer(privateKey),
                pubKey: o("WASignalOther").toBuffer(publicKey)
            };
        };
        return t;
    })();
    s.prototype.verify = o("WACryptoPrimitives").verify;
    s.prototype.makeRegistrationId = o("WASignalOther").makeRegistrationId;
    s.prototype.makeSenderKeyId = o("WASignalOther").makeSenderKeyId;
    const u = new s;
    l.default = u;
}, 98);