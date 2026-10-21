__d("WAWebResendBroadcastMsg", [
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBroadcastDeviceClassifier",
    "WAWebBroadcastEphemeralUtils",
    "WAWebBroadcastODS",
    "WAWebCommsWapMd",
    "WAWebE2EProtoUtils",
    "WAWebEncryptMsgProtobuf",
    "WAWebManageE2ESessionsJob",
    "WAWebReportingTokenUtils",
    "WAWebSendMsgCommonApi",
    "WAWebSessionScope",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = new Set([
        "self:primary:iphone",
        "self:primary:smbi",
        "self:primary:ipad"
    ]);
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const r = o("WAWebE2EProtoUtils").getBizNativeFlowName(t);
            if (r == null) {
                return null;
            }
            const a = yield o("WAWebBizBroadcastCampaignAPI").getBizBroadcastCampaignByMsgId(n);
            const i = a?.adId;
            if (i == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:retry] NFM message missing campaign data: nativeFlowName=",
                    ", messageKey=",
                    ". Retry will be sent without <biz> and may be rejected with error 405."
                ])), r, n).sendLogs("broadcast-retry-missing-campaign");
                return null;
            }
            return o("WAWap").wap("biz", {
                campaign_id: o("WAWap").CUSTOM_STRING(i)
            }, o("WAWap").wap("interactive", {
                type: o("WAWap").CUSTOM_STRING("native_flow"),
                v: o("WAWap").CUSTOM_STRING("1")
            }, o("WAWap").wap("native_flow", {
                name: o("WAWap").CUSTOM_STRING(r)
            })));
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ deviceMsgType, msgProtobuf, msgRecord, participant, to }) {
            const _ = msgRecord.data.id;
            const deviceMsgType_retryCount = deviceMsgType.retryCount;
            const g = o("WAWebBroadcastDeviceClassifier").classifyBroadcastDevice(participant);
            o("WAWebBroadcastODS").bumpBroadcastRetry();
            try {
                yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                    identityChanged: false,
                    sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                    wids: [
                        participant
                    ]
                });
                let h = msgProtobuf;
                let y = null;
                try {
                    const C = yield o("WAWebBroadcastEphemeralUtils").buildBroadcastRetryEphemeral({
                        authorId: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                        broadcastJid: to,
                        proto: msgProtobuf,
                        recipient: o("WAWebWidFactory").asUserWidOrThrow(participant)
                    });
                    h = C.content;
                    y = C.ephSetting;
                } catch (error) {
                    o("WAWebBroadcastODS").bumpBroadcastEphemeralSetupError();
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:retry] ephemeral setup failed, resending without DM: retryCount=",
                        ""
                    ])), deviceMsgType_retryCount).catching(r("getErrorSafe")(error)).sendLogs("broadcast-retry-ephemeral-setup-failed");
                    h = msgProtobuf;
                    y = null;
                }
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:retry] eph_retry_debug resend stanza for participant=",
                    " retryCount=",
                    " eph_setting=",
                    ""
                ])), participant.toString(), deviceMsgType_retryCount, y != null ? "attached" : "none").tags("messaging");
                const b = o("WAWebUserPrefsMeUser").isMeAccount(participant);
                const v = m.has(g);
                const S = yield p(h, _.id);
                const R = S != null ? o("WAWap").wap("meta", {
                    metering_type: o("WAWap").CUSTOM_STRING("smb_mm")
                }) : null;
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:retry] deviceType=",
                    " isIOSPrimary=",
                    " isMeDevice=",
                    " hasBizNode=",
                    " retryCount=",
                    ""
                ])), g, String(v), String(b), String(S != null), deviceMsgType_retryCount).tags("messaging");
                const L = o("WAWebBackendJobsCommon").getMetricEditTypeFromMsg(h, msgRecord.data);
                const E = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(participant, deviceMsgType_retryCount, h, msgRecord.data, L);
                const { ciphertext, type } = E;
                let T = null;
                if (type === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg) {
                    const D = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
                    T = o("WAWap").wap("device-identity", null, D);
                }
                const x = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(h);
                const $ = yield o("WAWebReportingTokenUtils").genReportingTokenBody(msgRecord.data, h);
                yield o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode();
                const P = o("WAWap").wap("message", {
                    id: o("WAWap").CUSTOM_STRING(_.id),
                    to: o("WAWebCommsWapMd").JID(to),
                    participant: o("WAWebCommsWapMd").DEVICE_JID(participant),
                    type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(h),
                    edit: o("WAWebSendMsgCommonApi").editAttribute(h, msgRecord.data.subtype),
                    eph_setting: y != null ? o("WAWap").CUSTOM_STRING(y) : o("WAWap").DROP_ATTR
                }, R, o("WAWap").wap("enc", {
                    v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
                    type: o("WAWap").CUSTOM_STRING(type),
                    count: deviceMsgType_retryCount === 0 ? o("WAWap").DROP_ATTR : o("WAWap").INT(deviceMsgType_retryCount),
                    mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(x),
                    "decrypt-fail": o("WAWebBackendJobsCommon").encodeMaybeDecryptFail(o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(h))
                }, ciphertext), T, $, S);
                o("WAWebBroadcastODS").bumpBroadcastRetrySuccess();
                return P;
            } catch (error) {
                o("WAWebBroadcastODS").bumpBroadcastRetryError();
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:retry] Device retry failed: retryCount=",
                    ", deviceType=",
                    ""
                ])), deviceMsgType_retryCount, g).catching(r("getErrorSafe")(error)).sendLogs("broadcast-device-retry-failed");
                throw error;
            }
        });
        return g.apply(this, arguments);
    }
    l.createBroadcastDeviceMsgStanza = f;
}, 98);