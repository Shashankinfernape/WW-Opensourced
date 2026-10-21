__d("WAWebSendRetryReceiptJob", [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2ReceiptRecipient",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebCryptoCurve25519",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebEphemeralDecodeBroadcastSetting",
    "WAWebGroupAgentReceipts",
    "WAWebHandleMsgError",
    "WAWebKyberPreKeyStore",
    "WAWebPQGatingUtils",
    "WAWebSendReceiptJobCommon",
    "WAWebSignalCommonErrors",
    "WAWebSignalConst",
    "WAWebSignalKeyApi",
    "WAWebSignalProtocolStore",
    "WAWebSignalStoreApi",
    "WAWebSignalUtilsApi",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:10198",
    "cr:4533",
    "err",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = 2;
    const m = n("$InternalEnum")({
        UnknownError: 0,
        SignalErrorNoSession: 1,
        SignalErrorInvalidKey: 2,
        SignalErrorInvalidKeyId: 3,
        SignalErrorInvalidMessage: 4,
        SignalErrorInvalidSignature: 5,
        SignalErrorFutureMessage: 6,
        SignalErrorBadMac: 7,
        SignalErrorInvalidSession: 8,
        SignalErrorInvalidMsgKey: 9,
        BadBroadcastEphemeralSetting: 10,
        UnknownCompanionNoPrekey: 11,
        AdvFailure: 12,
        StatusRevokeDelay: 13
    });
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ externalId, failedEncType, isPeer = false, isStateless = false, participant, rawTs, receiptModeBitmask, recipient, retryCount, retryReason, to }) {
            if (!(r("gkx")("26258") || n("cr:10198") == null)) {
                n("cr:10198").injectDebug(to, "RetryReceiptSent", `externalId:${externalId}`);
            }
            if (!r("gkx")("26258")) {
                const v = n("cr:4533") == null ? undefined : n("cr:4533").getDebugDoNotSendRetryReceipt();
                if (v != null && v > 0) {
                    if (n("cr:4533") != null) {
                        n("cr:4533").setDebugDoNotSendRetryReceipt(v - 1);
                    }
                    return (c || (c = n("Promise"))).resolve();
                }
            }
            try {
                const S = o("WAWebSignalProtocolStore").getSignalProtocolStore();
                const R = yield (c || (c = n("Promise"))).all([
                    S.getLocalRegistrationId(),
                    S.getIdentityKeyPair()
                ]);
                const L = R[0];
                const E = R[1];
                if (L == null || E == null) {
                    throw r("err")("No registration info found");
                }
                const is1on1 = to.isUser() && !to.isBot() && !o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").asUserWidOrThrow(to));
                let I;
                try {
                    I = yield f({
                        identityKeyPair: o("WAWebCryptoCurve25519").toCurveKeyPair(E),
                        is1on1,
                        isStateless,
                        retryCount
                    });
                } catch (error) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "error: ",
                        ""
                    ])), error).sendLogs("sendRetryReceipt: error while creating key section in retry receipt");
                }
                const T = !to.isBot() && !!(participant != null && participant.isBot());
                if (T && !o("WAWebGroupAgentReceipts").shouldSendGroupAgentRetryReceipt(to, participant, failedEncType)) {
                    return;
                }
                let D = o("WAWap").DROP_ATTR;
                let recipient_1 = o("WAWap").DROP_ATTR;
                let $ = o("WAWap").DROP_ATTR;
                let P;
                let N = false;
                if (to.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) && o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()) {
                    P = o("WAWebCommsWapMd").USER_JID(to);
                    const M = recipient != null ? o("WAWebCoexV2ReceiptRecipient").toCoexV2ReceiptRecipient(recipient) : null;
                    if (M != null) {
                        recipient_1 = o("WAWebCommsWapMd").USER_JID(M);
                    }
                } else if (to.isUser()) {
                    P = o("WAWebCommsWapMd").DEVICE_JID(to);
                    if (o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").asUserWidOrThrow(to))) {
                        if (isPeer) {
                            D = "peer";
                            N = true;
                        } else if (recipient) {
                            recipient_1 = o("WAWebCommsWapMd").USER_JID(recipient);
                        } else {
                            return (c || (c = n("Promise"))).reject(r("err")("sendRetryReceipt: send retry to peer device without recipient"));
                        }
                    }
                } else {
                    P = o("WAWebCommsWapMd").CHAT_JID(to);
                    $ = participant ? o("WAWebCommsWapMd").DEVICE_JID(participant) : o("WAWap").DROP_ATTR;
                }
                const w = N ? null : o("WAWebSendReceiptJobCommon").genReceiptMetaModeNode(receiptModeBitmask ?? 0);
                const A = o("WAWap").wap("receipt", {
                    id: o("WAWap").CUSTOM_STRING(externalId),
                    to: P,
                    participant: $,
                    recipient: recipient_1,
                    type: "retry",
                    category: D
                }, o("WAWap").wap("retry", {
                    v: "1",
                    count: o("WAWap").INT(retryCount),
                    id: o("WAWap").CUSTOM_STRING(externalId),
                    t: o("WAWap").CUSTOM_STRING(rawTs),
                    error: retryReason != null ? o("WAWap").INT(retryReason) : o("WAWap").DROP_ATTR
                }), o("WAWap").wap("registration", null, o("WAWap").BIG_ENDIAN_CONTENT(L)), I, w);
                return o("WAWebDeprecatedSendIqWorkerCompatible").deprecatedSendStanzaAndWaitForAck(A, o("WAWebCommsAckParser").toCoreAckTemplate({
                    id: externalId,
                    class: "receipt",
                    from: to,
                    participant,
                    type: "retry"
                }));
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "error: ",
                    ""
                ])), error).sendLogs("sendRetryReceipt: error while creating or sending the retry message");
            }
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ identityKeyPair, is1on1 = false, isStateless = false, retryCount }) {
            const s = yield h({
                identityKeyPair,
                is1on1,
                isStateless,
                retryCount
            });
            const u = s[0];
            const c = s[1];
            if (c) {
                yield o("WAWebSignalStoreApi").waSignalStore.markKeyAsUploaded(c.keyId);
                yield o("WAWebSignalStoreApi").waSignalStore.markPreKeyAsDirectDistribution(c.keyId);
            }
            return u;
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ identityKeyPair, is1on1 = false, isStateless = false, retryCount }) {
            const p = isStateless || retryCount >= d;
            if (!p) {
                return (c || (c = n("Promise"))).resolve([
                    null,
                    null
                ]);
            }
            try {
                const _ = yield (c || (c = n("Promise"))).all([
                    o("WAWebSignalStoreApi").waSignalStore.getSignedPreKey(),
                    o("WAWebSignalStoreApi").waSignalStore.getOrGenSinglePreKey(o("WAWebSignalKeyApi").generatePreKeyPair),
                    o("WAWebAdvSignatureApi").getADVEncodedIdentity().then((e)=>{
                        if (e == null || e.byteLength === 0) {
                            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "getADVEncodedIdentity: sending empty device-identity"
                            ]))).sendLogs("sending-retry-response-with-empty-device-identity", {
                                sampling: r("gkx")("26259") ? 1 : 0.1
                            });
                        }
                        return o("WAWap").wap("device-identity", null, e);
                    })
                ]);
                const f = _[0];
                const g = _[1];
                const h = _[2];
                if (!f) {
                    throw r("err")("Signed pre key is not available");
                }
                let y = null;
                if (is1on1 && o("WAWebPQGatingUtils").isPq1on1MessageEnabled() && (yield o("WAWebKyberPreKeyStore").isPQMigrated())) {
                    const C = yield o("WAWebKyberPreKeyStore").loadLatestKyberLastResortKey();
                    if (C != null) {
                        y = o("WAWebSignalUtilsApi").xmppPqPreKey(C);
                    }
                }
                const b = o("WAWap").wap("keys", null, o("WAWap").wap("type", null, o("WAWebSignalConst").KEY_BUNDLE_TYPE), o("WAWap").wap("identity", null, identityKeyPair.pubKey), o("WAWebSignalUtilsApi").xmppPreKey(g), o("WAWebSignalUtilsApi").xmppSignedPreKey(f), y, h);
                return [
                    b,
                    g
                ];
            } catch (e) {
                throw r("err")("Could not create keys section for retry");
            }
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        if (e instanceof o("WAWebHandleMsgError").UnknownDeviceMessageError) {
            return m.UnknownCompanionNoPrekey;
        }
        if (e instanceof o("WAWebSignalCommonErrors").SignalDecryptionError) {
            if (e.message === "errSignalNoSession" || e.message === "errLoadSenderKeySession") {
                return m.SignalErrorNoSession;
            }
            if (e.message === "errSignalInvalidMsg") {
                return m.SignalErrorInvalidMessage;
            }
            if (e.message === "errSignalInvalidKey") {
                return m.SignalErrorInvalidKey;
            }
            if (e.message === "errSignalTooManyMessagesInFuture" || e.message === "errSignalGrpTooManyMessagesInFuture") {
                return m.SignalErrorFutureMessage;
            }
            if (e.message === "errInvalidMacWithDecryptedPlaintext" || e.message === "errInvalidMacInvalidCipherKey" || e.message === "errInvalidMacInvalidCipherKeyNewChain") {
                return m.SignalErrorBadMac;
            }
            return undefined;
        }
        if (e instanceof o("WAWebEphemeralDecodeBroadcastSetting").BroadcastEphSettingsError) {
            return m.BadBroadcastEphemeralSetting;
        }
    }
    l.RetryReason = m;
    l.sendRetryReceipt = p;
    l.getRetryReasonFromError = C;
}, 98);