__d("WAWebVoipActionWriteCallLogEventUpdateJoinable", [
    "WALogger",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipCallLogTimestamp",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipJsonParserPayloads",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "compactMap",
    "err",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    function d(Result) {
        switch(Result){
            case o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere:
                return o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere;
            case o("WAWebVoipWaCallEnums").CallLogResult.Rejected:
            case o("WAWebVoipWaCallEnums").CallLogResult.Unavailable:
            case o("WAWebVoipWaCallEnums").CallLogResult.Canceled:
            case o("WAWebVoipWaCallEnums").CallLogResult.Missed:
                return o("WAWebCallLogMsgData.flow").CallOutcome.Missed;
            case o("WAWebVoipWaCallEnums").CallLogResult.Failed:
                return o("WAWebCallLogMsgData.flow").CallOutcome.Failed;
            default:
                return o("WAWebCallLogMsgData.flow").CallOutcome.Completed;
        }
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(CallId) {
            const n = yield o("WAWebVoipCallLogWriteMutex").WACallLogWriteMutex.acquire();
            try {
                const r = o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(CallId);
                if (r == null) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[cleanupJoinableCallLog] no call for ",
                        ", cleaned"
                    ])), CallId);
                    return;
                }
                yield g({
                    CallId,
                    CallCreatorDeviceJid: r.callCreator,
                    Type: o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Delete,
                    InitialPeerJid: null,
                    IsCaller: false,
                    VideoEnabled: r.isVideoCall,
                    CallLinkToken: null,
                    CallParticipantInfos: [],
                    CallSummary: null,
                    GroupJid: r.to,
                    IsFromOffer: false,
                    IsLightweight: false,
                    NumParticipants: 0,
                    Result: o("WAWebVoipWaCallEnums").CallLogResult.Connected,
                    ScheduledId: null,
                    LinkCreatorJid: null,
                    SelfOtherDeviceConnected: false,
                    OfferEpochTime: 0
                });
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[cleanupJoinableCallLog] cleanup failed: ",
                    ""
                ])), error).tags("nexus-voip").sendLogs("cleanup-joinable-call-log-failed");
            } finally{
                n.release();
            }
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebVoipCallLogWriteMutex").WACallLogWriteMutex.acquire();
            try {
                yield g(e);
            } catch (error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[generateCallLogFromEventUpdateJoinable] write failed: ",
                    ""
                ])), error).tags("nexus-voip").sendLogs("generate-call-log-event=update-joinable");
            } finally{
                t.release();
            }
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { CallCreatorDeviceJid, CallId, CallParticipantInfos, CallSummary, GroupJid, LinkCreatorJid, Result, Type, VideoEnabled } = e;
            if (o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType == null) {
                throw r("err")("WAWebVoipActionWriteCallLogEventUpdateJoinable: Expected UpdateJoinableCallLogType to be defined");
            }
            const _ = !r("isStringNullOrEmpty")(e.CallLinkToken);
            let f;
            let g;
            if (Type === o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Create) {
                if (CallCreatorDeviceJid == null) {
                    throw r("err")("voip action write call log message: update joinable: Unexpected null call creator on create type event");
                }
                const h = o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(CallId);
                if (h != null) {
                    f = babelHelpers.extends({}, h.toJSON(), {
                        callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
                        isVideoCall: VideoEnabled,
                        callParticipants: CallParticipantInfos.map((e)=>({
                                participant: e.jid,
                                outcome: e.result
                            }))
                    });
                    g = f.to;
                } else {
                    const fromMe = LinkCreatorJid != null ? o("WAWebUserPrefsMeUser").isMeAccount(LinkCreatorJid) : o("WAWebUserPrefsMeUser").isMeDevice(CallCreatorDeviceJid) || o("WAWebUserPrefsMeUser").isMeAccount(CallCreatorDeviceJid);
                    const b = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                        callCreatorWid: LinkCreatorJid ?? CallCreatorDeviceJid,
                        callId: CallId,
                        groupJid: GroupJid,
                        isCallLink: LinkCreatorJid != null || _,
                        participants: r("compactMap")(CallParticipantInfos, function(e) {
                            return e.jid;
                        })
                    });
                    const { callCreatorUserWid, chatId, msgKeyId, participant, viewMode } = b;
                    g = chatId;
                    f = {
                        id: new (r("WAWebMsgKey"))({
                            remote: g,
                            participant,
                            fromMe,
                            id: msgKeyId
                        }),
                        type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                        kind: o("WAWebMsgType").MsgKind.CallLog,
                        viewMode,
                        callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
                        isVideoCall: VideoEnabled,
                        isCallLink: _,
                        callLinkToken: e.CallLinkToken ?? "",
                        callCreator: CallCreatorDeviceJid,
                        from: callCreatorUserWid,
                        author: callCreatorUserWid,
                        t: o("WAWebVoipCallLogTimestamp").resolveCallLogTimestampFromOfferTime(e.OfferEpochTime),
                        callParticipants: CallParticipantInfos.map((e)=>({
                                participant: e.jid,
                                outcome: e.result
                            })),
                        to: g,
                        selfOtherDeviceConnected: e.SelfOtherDeviceConnected
                    };
                }
            } else {
                const k = o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(CallId);
                if (k == null) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[generateCallLogFromEventUpdateJoinable] no call ",
                        " ",
                        ""
                    ])), CallId, Type);
                    return;
                }
                let callParticipants;
                if (Type === o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Delete) {
                    callParticipants = k.callParticipants ?? [];
                    if (CallSummary != null && CallSummary.Users) {
                        callParticipants = callParticipants.map((e)=>{
                            const t = CallSummary.Users.find((t)=>t.Jid != null && t.Jid.equals(e.participant));
                            if (t) {
                                return babelHelpers.extends({}, e, {
                                    outcome: t.State === o("WAWebVoipWaCallEnums").CallSummaryUserState.Connected ? o("WAWebVoipWaCallEnums").CallParticipantState.Connected : o("WAWebVoipWaCallEnums").CallParticipantState.Invited
                                });
                            }
                            return e;
                        });
                    }
                } else {
                    if (Type === o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Update) {
                        callParticipants = CallParticipantInfos.map((e)=>({
                                participant: e.jid,
                                outcome: e.result
                            }));
                    } else {
                        callParticipants = k.callParticipants;
                    }
                }
                f = babelHelpers.extends({}, k.toJSON(), {
                    callOutcome: Type === o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Delete ? d(Result) : o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
                    isVideoCall: k.isVideoCall || CallSummary?.IsVideo || VideoEnabled,
                    callDuration: CallSummary != null && CallSummary.CallDuration ? Math.floor(CallSummary?.CallDuration / 1000) : k.callDuration,
                    callParticipants,
                    viewMode: k.viewMode === o("WAWebViewMode.flow").ViewModeType.HIDDEN && callParticipants && callParticipants.length > 0 ? o("WAWebViewMode.flow").ViewModeType.CALL_LOG_AD_HOC_GROUP_CALL : k.viewMode,
                    selfOtherDeviceConnected: e.SelfOtherDeviceConnected
                });
                g = f.to;
            }
            if (_) {
                f.viewMode = o("WAWebViewMode.flow").ViewModeType.CALL_LOG_AD_HOC_GROUP_CALL;
            }
            const D = yield o("WAWebVoipActionWriteCallLogImpl").writeVoipCallLogMessageImpl(g, f, false);
            if (Type === o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Delete) {
                o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(CallId);
                o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.remove(f.id);
            } else if (D) {
                o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(CallId);
                o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.add(D, {
                    merge: true
                });
            }
        });
        return h.apply(this, arguments);
    }
    l.cleanupJoinableCallLog = m;
    l.generateCallLogFromEventUpdateJoinable = _;
}, 98);