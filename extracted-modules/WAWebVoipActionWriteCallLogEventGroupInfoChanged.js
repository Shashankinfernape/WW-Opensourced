__d("WAWebVoipActionWriteCallLogEventGroupInfoChanged", [
    "WALogger",
    "WAWebCallLogMsgData.flow",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipOngoingCallCollection",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield o("WAWebVoipCallLogWriteMutex").WACallLogWriteMutex.acquire();
            try {
                const { CallId, CallParticipants } = t;
                const s = o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(CallId);
                if (s == null) {
                    throw r("err")("generateCallLogFromEventGroupInfoChanged: Expected to find existing ongoing call");
                }
                const u = babelHelpers.extends({}, s.toJSON(), {
                    callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
                    callParticipants: CallParticipants?.map(function(e) {
                        return {
                            participant: e.participant,
                            outcome: e.outcome
                        };
                    }) ?? s.callParticipants
                });
                const c = u.to;
                const d = yield o("WAWebVoipActionWriteCallLogImpl").writeVoipCallLogMessageImpl(c, u, false);
                if (d) {
                    o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.add(d, {
                        merge: true
                    });
                }
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "generateCallLogFromEventGroupInfoChanged failed: ",
                    ""
                ])), error).tags("nexus-voip").sendLogs("generate-call-log-event-group-info-changed-failed");
            } finally{
                n.release();
            }
        });
        return u.apply(this, arguments);
    }
    l.generateCallLogFromEventGroupInfoChanged = s;
}, 98);