__d("WAWebCallLogMessageCallFromUi", [
    "WAWebCallLogMsgData.flow",
    "WAWebWamEnumCallFromUi"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e === o("WAWebCallLogMsgData.flow").CallOutcome.Missed || e === o("WAWebCallLogMsgData.flow").CallOutcome.Rejected || e === o("WAWebCallLogMsgData.flow").CallOutcome.Canceled) {
            return o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_LOG_MESSAGE_MISSED;
        }
        if (e === o("WAWebCallLogMsgData.flow").CallOutcome.Failed) {
            return o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_LOG_MESSAGE_FAILED;
        }
        return o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_LOG_MESSAGE_ENDED;
    }
    l.getCallLogMessageCallFromUi = e;
}, 98);