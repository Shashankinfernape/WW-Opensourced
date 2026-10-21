__d("WAWebSendUserMsgJob", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBizCoexUtils",
    "WAWebBotBaseGating",
    "WAWebDBDeviceListFanout",
    "WAWebDBUpdateMessageTable",
    "WAWebFetchResendMissingKeyJob",
    "WAWebLidMigrationUtils",
    "WAWebMsgFanoutTypes",
    "WAWebMsgGetters",
    "WAWebPostMdDeviceSyncAckMetric",
    "WAWebRequestMsgResend",
    "WAWebResendUserMsg",
    "WAWebSendMsgToDeviceList",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebUserPrefsMeUser",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "cr:10198",
    "cr:627"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, metricReporter, msgProtobuf, msgRecord, scheduledMsgMetadata }) {
            const msgRecord_data = msgRecord.data;
            const { botRespOrInvocationRevokeBotWid, id, invokedBotWid, protocolMessageKey, subtype, to } = msgRecord_data;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendUserMsg: sending ",
                ""
            ])), id).tags("messaging");
            const R = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
            const L = {
                wids: [
                    to,
                    R
                ]
            };
            if (to != null && to.isUser()) {
                L.chatWidSetToIncludeHostedInFanoutOneToOneChatOnly = to;
            }
            let E = yield o("WAWebDBDeviceListFanout").getFanOutList(L);
            if (o("WAWebBotBaseGating").isBotEnabled()) {
                if (o("WAWebMsgGetters").getIsBotFeedbackMessage(msgRecord.data) && protocolMessageKey != null) {
                    let k;
                    if (!to.isBot() && protocolMessageKey.participant != null) {
                        k = protocolMessageKey.participant;
                    } else if (msgRecord.data.bizBotType != null) {
                        k = to;
                    } else {
                        k = protocolMessageKey.remote;
                    }
                    E = [
                        o("WAWebSimpleSignalPNToFBIDMigration").maybeReplaceDeprecatedBotPnWithFbid(k)
                    ];
                } else if (invokedBotWid && invokedBotWid != null && invokedBotWid.isBot()) {
                    const I = invokedBotWid;
                    E = [].concat(E, [
                        I
                    ]);
                } else {
                    if (botRespOrInvocationRevokeBotWid && botRespOrInvocationRevokeBotWid?.isBot() && (subtype === "sender_revoke" || subtype === "admin_revoke")) {
                        E = [].concat(E, [
                            botRespOrInvocationRevokeBotWid
                        ]);
                    }
                }
            }
            if (n("cr:627") != null) {
                E = yield n("cr:627").reconcileAeaBeforeEncryption({
                    recipient: to,
                    fanoutDevices: E,
                    message: msgProtobuf,
                    msgRecord
                });
            }
            if (o("WAWebBizCoexUtils").fanoutListContainsHostedDevice(E)) {
                o("WAWebDBUpdateMessageTable").updateMessageTable(msgRecord.data.id, {
                    senderOrRecipientAccountTypeHosted: true
                });
            }
            const T = yield o("WAWebSendMsgToDeviceList").sendMsgToDeviceList({
                chatId,
                deviceWids: E,
                metricReporter,
                msgProtobuf,
                msgRecord,
                option: {
                    fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT
                },
                scheduledMsgMetadata
            });
            f(to, T);
            const T_phash = T.phash;
            if (T_phash != null) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendUserMsg: phash mismatch, got server phash ",
                    ""
                ])), T_phash).tags("messaging");
                const ackTime = o("WATimeUtils").unixTime();
                o("WAWebPostMdDeviceSyncAckMetric").postMdDeviceSyncAckMetric({
                    chatWid: to,
                    msgProtobuf,
                    msgRecord
                });
                metricReporter.sendReporter = metricReporter.createSendReporter({
                    isResend: true,
                    originalMessage: msgRecord.type === "message" ? msgRecord.data : undefined
                });
                (m || (m = n("Promise"))).resolve().then(()=>{
                    if (!to.isLid()) {
                        return o("WAWebFetchResendMissingKeyJob").fetchResendMissingKeys([
                            to,
                            R
                        ]).catch(()=>{
                            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "fetchResendMissingKeys: failed"
                            ]))).sendLogs("fetchResendMissingKeys-sync-error");
                        });
                    }
                }).then(()=>o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob([
                        to,
                        R
                    ], "message", T_phash)).then(()=>g({
                        ackTime,
                        chatId,
                        excludeList: E,
                        metricReporter,
                        msgProtobuf,
                        msgRecord,
                        scheduledMsgMetadata
                    })).catch((e)=>{
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "resendUserMsg: failed to resend message: ",
                        ", type: ",
                        ""
                    ])), msgRecord.data.id.toString(), msgRecord.data.type).tags("messaging");
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "resendUserMsg: failed to resend message: ",
                        ""
                    ])), e).tags("messaging").sendLogs("message-resend-failed", {
                        sampling: 0.01
                    });
                });
            }
            return T;
        });
        return _.apply(this, arguments);
    }
    function f(e, { refreshLid }) {
        if (refreshLid) {
            const r = o("WAWebLidMigrationUtils").toPn(e);
            if (r) {
                o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("syncContactListJob", {
                    contactIds: [
                        r
                    ],
                    shouldSyncDevice: false,
                    mode: "query"
                });
            }
        }
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ackTime, chatId, excludeList, metricReporter, msgProtobuf, msgRecord, scheduledMsgMetadata }) {
            yield o("WAWebRequestMsgResend").runUserMsgResendRecorded({
                ackTime,
                excludeList,
                msgRecord,
                resend: function() {
                    return o("WAWebResendUserMsg").resendUserMsg({
                        ackTime,
                        chatId,
                        excludeList,
                        metricReporter,
                        msgProtobuf,
                        msgRecord,
                        scheduledMsgMetadata
                    });
                }
            });
        });
        return h.apply(this, arguments);
    }
    l.encryptAndSendUserMsg = p;
    l.maybeRefreshLid = f;
}, 98);