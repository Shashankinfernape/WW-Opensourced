__d("WAWebVoipActionWriteCallLogEventCallEnding", [
    "fbt",
    "WALogger",
    "WAWebCallLogUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipOngoingCallCollection",
    "asyncToGeneratorRuntime",
    "compactMap",
    "isStringNullOrEmpty",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const { bytesReceived, bytesSent, callCreatorJid, callId, callLinkToken, connectTime, fromMe, groupJid, isCallLink, participantEntries, peerJid, result, startTime, terminatedByDeviceSwitch, videoCall } = t;
                const bytesSent_1 = bytesSent ?? undefined;
                const bytesReceived_1 = bytesReceived ?? undefined;
                const R = o("WAWebCallLogUtils").getCallOutcomeFromCallLogResult(result, connectTime);
                if (terminatedByDeviceSwitch) {
                    o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("You joined the call from another device.")
                    }));
                }
                const L = o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(callId);
                const E = callCreatorJid ?? (fromMe ? o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE() : peerJid);
                const k = isCallLink === true || !r("isStringNullOrEmpty")(callLinkToken);
                if (L != null) {
                    const I = babelHelpers.extends({}, L.toJSON(), {
                        callDuration: connectTime ?? L.callDuration,
                        callOutcome: R,
                        finalCallOutcome: R,
                        terminatedByDeviceSwitch,
                        bytesSent: bytesSent_1,
                        bytesReceived: bytesReceived_1
                    });
                    const T = yield o("WAWebVoipActionWriteCallLogImpl").writeVoipCallLogMessageImpl(I.to, I, false);
                    if (T != null) {
                        o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(callId);
                    }
                } else {
                    if (groupJid != null || k) {
                        return;
                    }
                    const D = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                        callCreatorWid: E,
                        peerWid: peerJid,
                        callId,
                        groupJid,
                        isCallLink: k,
                        participants: r("compactMap")(participantEntries, function(e) {
                            return e.jid;
                        })
                    });
                    const { callCreatorUserWid, chatId, msgKeyId, participant, viewMode } = D;
                    const w = {
                        id: new (r("WAWebMsgKey"))({
                            remote: chatId,
                            participant,
                            fromMe,
                            id: msgKeyId
                        }),
                        type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                        kind: o("WAWebMsgType").MsgKind.CallLog,
                        viewMode,
                        callOutcome: R,
                        isVideoCall: videoCall ?? false,
                        callCreator: E,
                        callDuration: connectTime ?? undefined,
                        from: callCreatorUserWid,
                        t: startTime,
                        callParticipants: participantEntries.map((e)=>({
                                participant: e.jid,
                                outcome: e.result
                            })),
                        to: chatId,
                        isCallLink: false,
                        callLinkToken: callLinkToken ?? undefined,
                        finalCallOutcome: R,
                        terminatedByDeviceSwitch,
                        bytesSent: bytesSent_1,
                        bytesReceived: bytesReceived_1
                    };
                    const A = yield o("WAWebVoipActionWriteCallLogImpl").writeVoipCallLogMessageImpl(chatId, w, false);
                    if (A != null) {
                        o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(callId);
                    }
                }
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[generateCallLogFromCallSyncRecord] call log gen failed: ",
                    ""
                ])), error).tags("nexus-voip").sendLogs("generate-call-log-message-syncd-failed");
            }
        });
        return m.apply(this, arguments);
    }
    l.generateCallLogFromNativeCallEndingEvent = d;
}, 226);