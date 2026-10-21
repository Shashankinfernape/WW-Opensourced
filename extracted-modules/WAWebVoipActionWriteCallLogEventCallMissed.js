__d("WAWebVoipActionWriteCallLogEventCallMissed", [
    "WALogger",
    "WATimeUtils",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipWaCallEnums",
    "WAWebWamEnumCallTermReason",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = new Set([
        "added_as_link_creator",
        "group_chat_add",
        "vc_init",
        "vc_wave",
        "vc_wave_all"
    ]);
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield o("WAWebVoipCallLogWriteMutex").WACallLogWriteMutex.acquire();
            try {
                const { CallId, CallParticipantInfos, CallTermReason, GroupInfo, GroupJid, IsVideoCall, PeerUserJid, SilenceReason, TimeElapsedSinceCallOffer } = t;
                const y = o("WATimeUtils").castToUnixTime(TimeElapsedSinceCallOffer != null ? (Date.now() - TimeElapsedSinceCallOffer) / 1000 : Date.now() / 1000);
                const C = o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(CallId);
                if (GroupJid != null && C == null) {
                    if (!m({
                        callId: CallId,
                        callOfferTime: y,
                        peerUserJid: PeerUserJid,
                        silenceReason: SilenceReason
                    })) {
                        return;
                    }
                } else if (GroupJid == null && GroupInfo != null) {
                    return;
                }
                const fromMe = PeerUserJid != null ? o("WAWebUserPrefsMeUser").isMeAccount(PeerUserJid) : false;
                const callOutcome = f(fromMe, CallTermReason);
                let S;
                let R;
                if (C != null) {
                    S = babelHelpers.extends({}, C.toJSON(), {
                        callOutcome,
                        isVideoCall: IsVideoCall
                    });
                    R = S.to;
                    if (GroupJid == null) {
                        o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.remove(S.id);
                    }
                } else if (PeerUserJid != null) {
                    const L = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                        callId: CallId,
                        peerWid: PeerUserJid,
                        groupJid: GroupJid,
                        callCreatorWid: PeerUserJid
                    });
                    const { chatId, msgKeyId, participant, viewMode } = L;
                    R = chatId;
                    const viewMode_1 = _(y) ? o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME : viewMode;
                    S = babelHelpers.extends({
                        id: new (r("WAWebMsgKey"))({
                            remote: R,
                            participant,
                            fromMe,
                            id: msgKeyId
                        }),
                        type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                        kind: "callLog",
                        callOutcome,
                        isVideoCall: IsVideoCall,
                        callParticipants: CallParticipantInfos != null && CallParticipantInfos.length > 0 ? CallParticipantInfos.map((e)=>({
                                participant: e.jid,
                                outcome: e.result
                            })) : [
                            {
                                participant: PeerUserJid,
                                outcome: o("WAWebVoipWaCallEnums").CallParticipantState.Terminated
                            }
                        ],
                        to: R,
                        from: PeerUserJid
                    }, GroupJid != null ? {
                        author: participant
                    } : null, {
                        t: y,
                        viewMode: viewMode_1
                    });
                } else {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[generateCallLogFromEventCallMissed] no PeerUserJid"
                    ]))).tags("nexus-voip").sendLogs("generate-call-log-event=call-missed-no-peer");
                    return;
                }
                const x = yield o("WAWebVoipActionWriteCallLogImpl").writeVoipCallLogMessageImpl(R, S, false);
                if (x != null) {
                    o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(CallId);
                }
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[generateCallLogFromEventCallMissed] call log gen failed: ",
                    ""
                ])), error).tags("nexus-voip").sendLogs("generate-call-log-event=call-missed");
            } finally{
                n.release();
            }
        });
        return d.apply(this, arguments);
    }
    function m({ callId, callOfferTime, peerUserJid, silenceReason }) {
        return peerUserJid != null && !p(silenceReason) && !_(callOfferTime) && !o("WAWebVoipActionWriteCallLogImpl").isCallIdAlreadyProcessed(callId);
    }
    function p(silenceReason) {
        if (silenceReason == null) {
            return false;
        }
        const t = o("WAWebCallLogUtils").getCallSilenceReason(silenceReason);
        return t != null && u.has(t);
    }
    function _(e) {
        return !o("WAWebVoipCallLogPlaceholderTracker").isOfflineCallLogOrderingEnabled() && !o("WATimeUtils").sameDay(e, o("WATimeUtils").unixTime());
    }
    function f(fromMe, CallTermReason) {
        if (fromMe) {
            return o("WAWebCallLogMsgData.flow").CallOutcome.Completed;
        }
        if (CallTermReason === o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.ACCEPTED_ELSEWHERE || CallTermReason === o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.DEVICE_SWITCH) {
            return o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere;
        }
        if (CallTermReason === o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.REJECTED_ELSEWHERE) {
            return o("WAWebCallLogMsgData.flow").CallOutcome.Rejected;
        }
        return o("WAWebCallLogMsgData.flow").CallOutcome.Missed;
    }
    l.generateCallLogFromEventCallMissed = c;
}, 98);