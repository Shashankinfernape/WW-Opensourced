__d("WAWebVoipActionWriteCallLogEventUpdate1to1", [
    "WALogger",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebMsgKey",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(Result) {
        if (Result === o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere || Result === o("WAWebVoipWaCallEnums").CallLogResult.ScreenedElsewhere) {
            return o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere;
        }
        if (Result === o("WAWebVoipWaCallEnums").CallLogResult.Rejected || Result === o("WAWebVoipWaCallEnums").CallLogResult.Unavailable || Result === o("WAWebVoipWaCallEnums").CallLogResult.Canceled || Result === o("WAWebVoipWaCallEnums").CallLogResult.Missed) {
            return o("WAWebCallLogMsgData.flow").CallOutcome.Missed;
        }
        if (Result === o("WAWebVoipWaCallEnums").CallLogResult.Failed) {
            return o("WAWebCallLogMsgData.flow").CallOutcome.Failed;
        }
        return o("WAWebCallLogMsgData.flow").CallOutcome.Completed;
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const { CallId, PeerJid, Result } = t;
                const l = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                    callId: CallId,
                    peerWid: PeerJid,
                    groupJid: null,
                    callCreatorWid: PeerJid
                });
                const { chatId, fromMe, msgKeyId, participant } = l;
                const p = new (r("WAWebMsgKey"))({
                    remote: chatId,
                    participant,
                    fromMe,
                    id: msgKeyId
                });
                yield o("WAWebVoipActionWriteCallLogImpl").updateVoipCallLogOutcomeImpl({
                    callOutcome: s(Result),
                    chatId,
                    msgKey: p
                });
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[generateCallLogFromEventUpdate1to1] call log gen failed ",
                    ""
                ])), error).tags("nexus-voip").sendLogs("generate-call-log-event=update-1to1");
            }
        });
        return c.apply(this, arguments);
    }
    l.generateCallLogFromEventUpdate1to1 = u;
}, 98);