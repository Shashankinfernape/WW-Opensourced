__d("WAWebResendGroupMsg", [
    "WAArrayDifferenceBy",
    "WALogger",
    "WATimeUtils",
    "WAWebCurrentUser",
    "WAWebDBDeviceListFanout",
    "WAWebFetchResendMissingKeyJob",
    "WAWebGroupMsgSendUtils",
    "WAWebGroupQueryBridge",
    "WAWebMaybePostMdGroupSyncMetrics",
    "WAWebMsgFanoutTypes",
    "WAWebMsgUtilsBridge",
    "WAWebPostMdDeviceSyncAckMetric",
    "WAWebRequestMsgResend",
    "WAWebSendDirectMsgToDeviceList",
    "WAWebSendMsgCommonApi",
    "WAWebStatusSessionGatingUtils",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
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
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ackTime, groupData, isDirect, metricReporter, msgProtobuf, msgRecord, oldList, phash, serverAddressingMode }) {
            const I = msgRecord.data.id.id;
            const T = msgRecord.data.to;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "resendGroupMsg: ",
                " to ",
                ""
            ])), I, T.toString()).tags("messaging");
            o("WAWebPostMdDeviceSyncAckMetric").postMdDeviceSyncAckMetric({
                chatWid: T,
                groupData,
                msgProtobuf,
                msgRecord,
                serverAddressingMode
            });
            metricReporter.sendReporter = metricReporter.createSendReporter({
                isResend: true,
                originalMessage: msgRecord.type === "message" ? msgRecord.data : undefined,
                groupData
            });
            const D = oldList.filter((e)=>L(o("WAWebWidFactory").asUserWidOrThrow(e)));
            const x = Array.from(new Set(D.map((e)=>o("WAWebWidFactory").asUserWidOrThrow(e).toString())), function(e) {
                return o("WAWebWidFactory").createUserWidOrThrow(e);
            });
            if (!o("WAWebGroupMsgSendUtils").isCagAddon(msgRecord.data, groupData)) {
                try {
                    yield o("WAWebFetchResendMissingKeyJob").fetchResendMissingKeys(D);
                } catch (e) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "fetchResendMissingKeys: failed"
                    ]))).sendLogs("fetchResendMissingKeys-sync-error");
                }
            }
            if (isDirect) {
                yield o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(D, "message", phash);
            } else {
                try {
                    yield o("WAWebGroupQueryBridge").sendQueryGroup(T);
                    k({
                        groupData,
                        groupId: T,
                        msgProtobuf,
                        oldParticipantList: x.map(o("WAWebWidFactory").createWidFromWidLike)
                    }).catch((e)=>{
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[postGroupParticipantSyncMetric] ",
                            ": failed ",
                            ""
                        ])), I, String(e)).tags("messaging");
                    });
                } catch (error) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "resendGroupMsg: ",
                        ": sendQueryGroup failed: ",
                        ""
                    ])), I, error).tags("messaging");
                    E(metricReporter);
                    throw error;
                }
            }
            const $ = o("WAWebSendMsgCommonApi").getResendTimeoutInSeconds();
            if (o("WATimeUtils").unixTime() - ackTime > $) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "resendUserMsg: ",
                    ": skip group resending due to ",
                    " min timeout"
                ])), I, $ / 60).tags("messaging");
                metricReporter.sendReporter?.postFailure({
                    result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_EXPIRED,
                    isTerminal: false
                });
                metricReporter.sendReporter = null;
                return;
            }
            try {
                const N = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(T.toString());
                const M = N == null ? undefined : N.participants.map((e)=>o("WAWebWidFactory").createUserWidOrThrow(e)).filter(L);
                if (M != null && M.length !== x.length) {
                    const w = M.length - x.length;
                    const A = w > 0 ? "increased" : "decreased";
                    const F = Math.abs(w);
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "resendGroupMsg: ",
                        ": participant list ",
                        " by ",
                        ""
                    ])), I, A, F);
                    if (o("WAWebCurrentUser").isEmployee()) {
                        const O = new Set(x.map(String));
                        const B = M.filter((e)=>!O.has(e.toString()));
                        const W = B.join();
                        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "resendGroupMsg: ",
                            ": msg not sent to: ",
                            ""
                        ])), I, W).sendLogs("resendGroupMsg-missed-participants", {
                            sampling: 0.01
                        });
                    }
                }
                const q = yield o("WAWebDBDeviceListFanout").getFanOutList({
                    wids: x
                });
                const U = o("WAArrayDifferenceBy").differenceBy(q, D, String);
                if (U.length === 0) {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "resendGroupMsg: ",
                        ": skip resending to the empty list"
                    ])), I).tags("messaging");
                    return;
                }
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "resendGroupMsg: ",
                    ": resending to devices: ",
                    ""
                ])), I, U.join(",")).tags("messaging");
                if (msgRecord.data.isOverwrittenByRevoke === true) {
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "resendGroupMsg: ",
                        ": skip, msg overwritten by revoke"
                    ])), I).tags("messaging");
                    return;
                }
                const sessionScope = msgRecord.data.isGroupStatus === true ? o("WAWebStatusSessionGatingUtils").getStatusSessionScope() : undefined;
                yield o("WAWebSendDirectMsgToDeviceList").sendDirectMsgToDeviceList({
                    deviceList: U,
                    groupData,
                    metricReporter,
                    msgProtobuf,
                    msgRecord,
                    option: {
                        fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT,
                        isResendingMsg: true,
                        sessionScope
                    }
                });
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "resendGroupMsg: ",
                    ": done"
                ])), I).tags("messaging");
            } catch (error) {
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "resendGroupMsg: failed to resend ",
                    " message: ",
                    ""
                ])), I, error).tags("messaging");
                o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "resendGroupMsg: failed to resend message: ",
                    ""
                ])), error).tags("messaging");
                metricReporter.sendReporter?.postFailure({
                    result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                    isTerminal: false
                });
                metricReporter.sendReporter = null;
                throw error;
            }
            yield o("WAWebMsgUtilsBridge").logMessageSendForChatThreadLogging(msgRecord.data);
        });
        return R.apply(this, arguments);
    }
    function L(e) {
        return !e.isBot();
    }
    function E(metricReporter) {
        metricReporter.sendReporter?.postFailure({
            result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_BACKFILL_USYNC_FAILED,
            isTerminal: false
        });
        metricReporter.sendReporter = null;
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ groupData, groupId, msgProtobuf, oldParticipantList }) {
            o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                "postGroupParticipantSyncMetric: start"
            ])));
            const i = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(String(groupId));
            if (!i) {
                const l = String(groupId);
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "postGroupParticipantSyncMetric: no participant record ",
                    ""
                ])), l);
                return;
            }
            const currentParticipantList = i.participants.map((e)=>o("WAWebWidFactory").createUserWidOrThrow(e)).filter(L).map((e)=>o("WAWebWidFactory").createWidFromWidLike(e));
            o("WAWebMaybePostMdGroupSyncMetrics").maybePostGroupSyncMetrics({
                currentParticipantList,
                groupData,
                msgProtobuf,
                oldParticipantList
            });
        });
        return I.apply(this, arguments);
    }
    function T(e) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { ackTime, groupData, isDirect, msgRecord, oldList, phash, serverAddressingMode } = e;
            yield o("WAWebRequestMsgResend").runGroupMsgResendRecorded({
                ackTime,
                groupData,
                isDirect,
                msgRecord,
                oldList,
                phash,
                serverAddressingMode
            }, function() {
                return S(e);
            });
        });
        return D.apply(this, arguments);
    }
    l.resendGroupMsg = S;
    l.resendPersistedGroupMsgWrapper = T;
}, 98);