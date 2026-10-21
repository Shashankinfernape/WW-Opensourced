__d("WAWebResendUserMsg", [
    "WAArrayDifferenceBy",
    "WALogger",
    "WATimeUtils",
    "WAWebDBDeviceListFanout",
    "WAWebMsgFanoutTypes",
    "WAWebMsgUtilsBridge",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgToDeviceList",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumMessageSendResultType",
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
    let p;
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ackTime, chatId, excludeList, metricReporter, msgProtobuf, msgRecord, scheduledMsgMetadata }) {
            const h = msgRecord.data.to;
            const y = msgRecord.data.id.id;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "resendUserMsg: ",
                " to ",
                ""
            ])), y, h.toString()).tags("messaging");
            const C = o("WAWebSendMsgCommonApi").getResendTimeoutInSeconds();
            if (o("WATimeUtils").unixTime() - ackTime > C) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "resendUserMsg: ",
                    ": skip resending due to ",
                    " min timeout"
                ])), y, C / 60).tags("messaging");
                metricReporter.sendReporter?.postFailure({
                    result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_EXPIRED,
                    isTerminal: false
                });
                metricReporter.sendReporter = null;
                return;
            }
            try {
                const v = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
                const S = yield o("WAWebDBDeviceListFanout").getFanOutList({
                    wids: [
                        h,
                        v
                    ]
                });
                const deviceWids = o("WAArrayDifferenceBy").differenceBy(S, excludeList, String);
                if (deviceWids.length === 0) {
                    if (yield g(h, v, excludeList)) {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "resendUserMsg: ",
                            ": skip, only devices AEA excludes are missing"
                        ])), y).tags("messaging");
                        metricReporter.sendReporter?.postSuccess();
                        metricReporter.sendReporter = null;
                        return;
                    }
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "resendUserMsg: ",
                        ": skip resending to the empty list"
                    ])), y).tags("messaging");
                    metricReporter.sendReporter?.postFailure({
                        result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_BACKFILL_USYNC_FAILED,
                        isTerminal: false
                    });
                    metricReporter.sendReporter = null;
                    return;
                }
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "resendUserMsg: ",
                    ": resending to devices: ",
                    ""
                ])), y, deviceWids.join(",")).tags("messaging");
                if (msgRecord.data.isOverwrittenByRevoke === true) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "resendUserMsg: ",
                        ": skip, msg overwritten by revoke"
                    ])), y).tags("messaging");
                    return;
                }
                const k = yield o("WAWebSendMsgToDeviceList").sendMsgToDeviceList({
                    chatId,
                    deviceWids,
                    metricReporter,
                    msgProtobuf,
                    msgRecord,
                    option: {
                        fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT,
                        isResendingMsg: true
                    },
                    scheduledMsgMetadata
                });
                const I = k.phash;
                if (I != null) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "resendUserMsg: ",
                        ": got phash during the resend"
                    ])), y).tags("messaging");
                    o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob([
                        h,
                        v
                    ], "message", I);
                }
            } catch (error) {
                metricReporter.sendReporter?.postFailure({
                    result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                    isTerminal: false
                });
                metricReporter.sendReporter = null;
                throw error;
            }
            yield o("WAWebMsgUtilsBridge").logMessageSendForChatThreadLogging(msgRecord.data);
        });
        return f.apply(this, arguments);
    }
    function g(e, t, n) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(chatWidSetToIncludeHostedInFanoutOneToOneChatOnly, t, r) {
            if (n("cr:627") == null || !chatWidSetToIncludeHostedInFanoutOneToOneChatOnly.isUser()) {
                return false;
            }
            const a = o("WAArrayDifferenceBy").differenceBy((yield o("WAWebDBDeviceListFanout").getFanOutList({
                wids: [
                    chatWidSetToIncludeHostedInFanoutOneToOneChatOnly,
                    t
                ],
                chatWidSetToIncludeHostedInFanoutOneToOneChatOnly
            })), r, String);
            const i = yield n("cr:627").getAeaExcludedSendDevices(chatWidSetToIncludeHostedInFanoutOneToOneChatOnly, a);
            return a.length > 0 && i.length === a.length;
        });
        return h.apply(this, arguments);
    }
    l.resendUserMsg = _;
}, 98);