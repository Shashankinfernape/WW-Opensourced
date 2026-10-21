__d("WAWebVoipBridgeCallLogHandlers", [
    "WAWebVoipActionWriteCallLogEventCallEnding",
    "WAWebVoipActionWriteCallLogEventCallMissed",
    "WAWebVoipActionWriteCallLogEventGroupInfoChanged",
    "WAWebVoipActionWriteCallLogEventUpdate1to1",
    "WAWebVoipActionWriteCallLogEventUpdateJoinable",
    "WAWebVoipActionWriteCallLogOfferNotice",
    "WAWebVoipActionWriteCallLogPlaceholder"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        generateCallLog: function({ props }) {
            return o("WAWebVoipActionWriteCallLogOfferNotice").generateCallLogOfferNotice(props);
        },
        generateCallLogOfferNotice: function(t) {
            return o("WAWebVoipActionWriteCallLogOfferNotice").generateCallLogOfferNotice(t);
        },
        writeCallOfferPlaceholder: function(t) {
            return o("WAWebVoipActionWriteCallLogPlaceholder").writeCallOfferPlaceholder(t);
        },
        generateCallLogFromNativeCallEndingEvent: function({ callEndingData }) {
            return o("WAWebVoipActionWriteCallLogEventCallEnding").generateCallLogFromNativeCallEndingEvent(callEndingData);
        },
        generateCallLogFromEventUpdateJoinable: function({ joinableCallLogData }) {
            return o("WAWebVoipActionWriteCallLogEventUpdateJoinable").generateCallLogFromEventUpdateJoinable(joinableCallLogData);
        },
        generateCallLogFromEventCallMissed: function({ callMissedData }) {
            return o("WAWebVoipActionWriteCallLogEventCallMissed").generateCallLogFromEventCallMissed(callMissedData);
        },
        generateCallLogFromEventUpdate1to1: function({ call1to1LogData }) {
            return o("WAWebVoipActionWriteCallLogEventUpdate1to1").generateCallLogFromEventUpdate1to1(call1to1LogData);
        },
        generateCallLogFromEventGroupInfoChanged: function({ groupInfoChangedData }) {
            return o("WAWebVoipActionWriteCallLogEventGroupInfoChanged").generateCallLogFromEventGroupInfoChanged(groupInfoChangedData);
        }
    };
    l.VoipBridgeCallLogHandlers = e;
}, 98);