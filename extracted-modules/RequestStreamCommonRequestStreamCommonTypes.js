__d("RequestStreamCommonRequestStreamCommonTypes", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    const FlowStatus = (e = n("$InternalEnum"))({
        Accepted: 1,
        Started: 2,
        Stopped: 3
    });
    const TerminationReason = e({
        Rejected: 40,
        Error: 50,
        TryAgain: 80,
        Closed: 99
    });
    const AckLevel = e({
        BestEffort: 0,
        Socket: 10,
        Device: 20
    });
    const StreamResponseDelta$Types = e({
        Flow_status: "flow_status",
        Log: "log",
        Rewrite: "rewrite",
        Data: "data",
        Termination: "termination",
        Amend_ack: "amend_ack"
    });
    a.exports = {
        AckLevel,
        FlowStatus,
        StreamResponseDelta$Types,
        TerminationReason
    };
}, null);