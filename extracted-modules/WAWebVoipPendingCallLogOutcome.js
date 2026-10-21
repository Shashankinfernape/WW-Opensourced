__d("WAWebVoipPendingCallLogOutcome", [
    "WAWebCallLogMsgData.flow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 100;
    const s = new Map;
    function u(t, callOutcome) {
        const r = t.toString();
        if (callOutcome !== o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere) {
            s.delete(r);
            return false;
        }
        if (s.has(r)) {
            return true;
        }
        if (s.size >= e) {
            const a = s.keys().next().value;
            if (a != null) {
                s.delete(a);
            }
        }
        s.set(r, {
            callOutcome
        });
        return true;
    }
    function c(e) {
        return s.get(e.toString());
    }
    function d(callLogMessage) {
        const callLogMessage_id = callLogMessage.id;
        if (callLogMessage_id == null || callLogMessage.kind !== "callLog") {
            return {
                callLogMessage,
                pendingOutcome: null
            };
        }
        const n = c(callLogMessage_id);
        if (n == null || callLogMessage.callOutcome !== o("WAWebCallLogMsgData.flow").CallOutcome.Missed && callLogMessage.callOutcome !== o("WAWebCallLogMsgData.flow").CallOutcome.Unknown) {
            return {
                callLogMessage,
                pendingOutcome: n
            };
        }
        return {
            callLogMessage: babelHelpers.extends({}, callLogMessage, {
                callOutcome: n.callOutcome
            }),
            pendingOutcome: n
        };
    }
    function m(e, t) {
        if (!(e == null || t == null)) {
            const n = e.toString();
            if (s.get(n) === t) {
                s.delete(n);
            }
        }
    }
    function p({ existingCallOutcome, expectedPendingOutcome, msgKey, requestedCallOutcome }) {
        const l = c(msgKey);
        if (expectedPendingOutcome != null) {
            if (l !== expectedPendingOutcome) {
                return {
                    type: "skip",
                    reason: "consumed"
                };
            }
            if (existingCallOutcome !== o("WAWebCallLogMsgData.flow").CallOutcome.Missed && existingCallOutcome !== o("WAWebCallLogMsgData.flow").CallOutcome.Unknown) {
                m(msgKey, expectedPendingOutcome);
                return {
                    type: "skip",
                    reason: "terminal"
                };
            }
        }
        return {
            type: "apply",
            callOutcome: expectedPendingOutcome?.callOutcome ?? requestedCallOutcome,
            pendingOutcome: l
        };
    }
    function _() {
        s.clear();
    }
    l.rememberPendingCallLogOutcome = u;
    l.getPendingCallLogOutcome = c;
    l.mergePendingCallLogOutcome = d;
    l.clearPendingCallLogOutcome = m;
    l.prepareCallLogOutcomeUpdate = p;
    l.clearAllPendingCallLogOutcomes = _;
}, 98);