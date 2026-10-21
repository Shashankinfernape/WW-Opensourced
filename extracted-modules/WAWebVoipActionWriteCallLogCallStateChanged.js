__d("WAWebVoipActionWriteCallLogCallStateChanged", [
    "WALogger",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebReleaseToEventLoop",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipCallLogTimestamp",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipCallStateUtils",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    "use strict";
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
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ callCreatorUserWid, callInfo, chatId, id, viewMode }) {
            const c = yield o("WAWebVoipCallLogWriteMutex").WACallLogWriteMutex.acquire();
            try {
                if (o("WAWebVoipCallStateUtils").isCallTerminal(callInfo.callState) && o("WAWebVoipActionWriteCallLogImpl").isCallIdAlreadyProcessed(callInfo.callId)) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: skip call link create, terminal+processed ",
                        ""
                    ])), callInfo.callId);
                    return;
                }
                const m = o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(callInfo.callId);
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: call link ongoing call lookup, token: ",
                    ", found: ",
                    ""
                ])), callInfo.linkToken, m != null);
                if (m != null) {
                    return m;
                }
                if (callInfo.creatorDeviceJid == null) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: skipping call log, creator device jid is null"
                    ])));
                    return;
                }
                const p = callInfo.creatorDeviceJid;
                const _ = {
                    id,
                    type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                    kind: o("WAWebMsgType").MsgKind.CallLog,
                    viewMode,
                    callOutcome: o("WAWebCallLogUtils").getCallOutcomeFromCallState(callInfo.callState),
                    isVideoCall: callInfo.videoEnabled,
                    isCallLink: true,
                    callLinkToken: callInfo.linkToken ?? "",
                    callCreator: p,
                    from: callCreatorUserWid,
                    to: chatId,
                    t: o("WAWebVoipCallLogTimestamp").resolveCallLogTimestampFromOfferTime(callInfo.offerEpochTimeMs),
                    callDuration: 0,
                    callParticipants: callInfo.participants.map((e)=>({
                            participant: e.jid,
                            outcome: e.state
                        })),
                    finalCallOutcome: o("WAWebCallLogUtils").getCallOutcomeFromCallLogResult(callInfo.callResult, callInfo.callDuration)
                };
                const f = yield o("WAWebVoipActionWriteCallLogImpl").writeVoipCallLogMessageImpl(chatId, _, false, true);
                if (f != null) {
                    o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.add(f, {
                        merge: true
                    });
                }
                return f;
            } finally{
                c.release();
            }
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        if (o("WAWebVoipCallStateUtils").isCallTerminal(e.callState)) {
            if (e.callState === o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere) {
                return o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere;
            }
            if (t != null && t !== o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing && t !== o("WAWebCallLogMsgData.flow").CallOutcome.Unknown) {
                return t;
            }
            return o("WAWebCallLogUtils").getCallOutcomeFromCallLogResult(e.callResult, e.callDuration);
        }
        if (t == null || t === o("WAWebCallLogMsgData.flow").CallOutcome.Unknown) {
            return o("WAWebCallLogUtils").getCallOutcomeFromCallState(e.callState);
        }
        return t ?? o("WAWebCallLogUtils").getCallOutcomeFromCallState(e.callState);
    }
    function h(e, t) {
        if (o("WAWebVoipCallStateUtils").isCallTerminal(e.callState) && e.callDuration > 0) {
            return Math.floor(e.callDuration / 1000);
        }
        return t ?? 0;
    }
    function y(e, t, n) {
        if (n === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing && e.isJoinableGroupCall && !o("WAWebVoipCallStateUtils").isCallTerminal(e.callState) && t != null && t.length > 0) {
            return t;
        }
        return e.participants.map((e)=>({
                participant: e.jid,
                outcome: e.state
            }));
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = !r("isStringNullOrEmpty")(e.linkToken);
                yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
                if (e.creatorJid == null) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: skipping call log, creator jid is null"
                    ])));
                    return;
                }
                const n = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                    callCreatorWid: e.creatorJid,
                    callId: e.callId,
                    groupJid: e.groupJid,
                    isCallLink: t,
                    participants: e.participants.map((e)=>e.jid)
                });
                const { callCreatorUserWid, chatId, fromMe, msgKeyId, participant, viewMode } = n;
                const C = new (r("WAWebMsgKey"))({
                    remote: chatId,
                    participant,
                    fromMe,
                    id: msgKeyId
                });
                if (t) {
                    const b = o("WAWebMsgCollection").MsgCollection.get(C);
                    if (b != null) {
                        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: call link call log found with creator jid, token: ",
                            ""
                        ])), e.linkToken);
                        return b;
                    }
                    return _({
                        callCreatorUserWid,
                        callInfo: e,
                        chatId,
                        id: C,
                        viewMode
                    });
                }
                if (e.creatorDeviceJid == null) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: skipping call log, creator device jid is null"
                    ])));
                    return;
                }
                const v = e.creatorDeviceJid;
                const S = e.isJoinableGroupCall ? yield o("WAWebVoipCallLogWriteMutex").WACallLogWriteMutex.acquire() : null;
                try {
                    const L = o("WAWebMsgCollection").MsgCollection.get(C);
                    const E = {
                        id: C,
                        type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                        kind: o("WAWebMsgType").MsgKind.CallLog,
                        viewMode,
                        callOutcome: g(e, L?.callOutcome),
                        isVideoCall: e.videoEnabled,
                        callCreator: v,
                        from: callCreatorUserWid,
                        to: chatId,
                        t: L?.t ?? o("WAWebVoipCallLogTimestamp").resolveCallLogTimestampFromOfferTime(e.offerEpochTimeMs),
                        callDuration: h(e, L?.callDuration),
                        callParticipants: y(e, L?.callParticipants, L?.callOutcome),
                        finalCallOutcome: o("WAWebCallLogUtils").getCallOutcomeFromCallLogResult(e.callResult, e.callDuration)
                    };
                    const k = L != null && !o("WAWebVoipCallStateUtils").isCallTerminal(e.callState);
                    const I = yield o("WAWebVoipActionWriteCallLogImpl").writeVoipCallLogMessageImpl(chatId, E, false, true, k);
                    if (I != null && o("WAWebVoipCallStateUtils").isCallTerminal(e.callState)) {
                        o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(e.callId);
                    }
                    return I;
                } finally{
                    S?.release();
                }
            } catch (error) {
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: writeCallLog: callStateChanged: ",
                    ""
                ])), error).tags("voip").sendLogs("voip: writeCallLog: callStateChanged");
            }
        });
        return b.apply(this, arguments);
    }
    l.resolveCallOutcome = g;
    l.resolveCallLogDuration = h;
    l.resolveCallParticipants = y;
    l.generateCallLogFromCallStateChangedEvent = C;
}, 98);