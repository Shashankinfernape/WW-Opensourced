__d("WAWebVoipValidateAndDecryptEnc", [
    "invariant",
    "WACryptoPkcs7",
    "WAFilteredCatch",
    "WAJids",
    "WALogger",
    "WAWebAdvSignatureApi",
    "WAWebAppTracker",
    "WAWebBackendJobs.flow",
    "WAWebHandleMsgTypes.flow",
    "WAWebProtobufsE2E.pb",
    "WAWebSignal",
    "WAWebSignalCommonErrors",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e.maybeChild("enc");
            const t_peer_jid = t.peer_jid;
            if (!n || !t_peer_jid) {
                return {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS
                };
            }
            let retryCount = n.maybeAttrInt("count");
            if (retryCount == null || Number.isNaN(retryCount)) {
                retryCount = 0;
            }
            const l = {
                e2eType: n.attrEnumValues("type", o("WAWebBackendJobs.flow").CiphertextType.members()),
                ciphertext: n.contentBytes(),
                retryCount,
                encMediaType: null,
                hideFail: false
            };
            try {
                const s = e.maybeChild("device-identity");
                if (t_peer_jid.device != null && t_peer_jid.device !== o("WAJids").DEFAULT_DEVICE_ID && l.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg && !s) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip:validateAndDecryptEnc: need device-identity for pkmsg"
                    ])));
                    return {
                        result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR
                    };
                }
                if (s) {
                    const u = new Uint8Array(s.contentBytes());
                    const p = yield o("WAWebAdvSignatureApi").validateADVwithEncs({
                        author: t_peer_jid,
                        deviceIdentity: u,
                        encs: [
                            l
                        ]
                    });
                    if (!p) {
                        return {
                            result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR
                        };
                    }
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip:validateAndDecryptEnc: ADV device-identity validated +"
                    ])));
                }
                o("WAWebAppTracker").AppTracker.mark(o("WAWebAppTracker").AppTrackerType.VoipOfferDecrypt);
                const _ = yield f(l, t_peer_jid);
                const { decrypted, result } = _;
                if (result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS) {
                    n.unsafeSetNodeContent(new Uint8Array(r("nullthrows")(decrypted)));
                    yield o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode();
                }
                return {
                    result,
                    retryCount
                };
            } catch (e) {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip:validateAndDecryptEnc error"
                ])));
                return {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR
                };
            }
        });
        return _.apply(this, arguments);
    }
    function f(t, n) {
        if (t.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Skmsg) {
            s(0, 56543);
        }
        return o("WAWebSignal").Cipher.decryptSignalProto(n, t.e2eType, t.ciphertext).then((e)=>{
            let t;
            const n = o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(e));
            const r = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, n);
            if ((t = r.call) != null && t.callKey) {
                return {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS,
                    decrypted: r.call.callKey
                };
            }
            return {
                result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR
            };
        }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebSignalCommonErrors").SignalDecryptionError, function(t) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip:decryptSignalProto failed with decryption error; ",
                ""
            ])), t);
            return {
                result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY
            };
        })).catch((e)=>{
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip:decryptSignalProto failed with unexpected error; ",
                ""
            ])), e);
            return {
                result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR
            };
        });
    }
    l.validateAndDecryptEnc = p;
}, 98);