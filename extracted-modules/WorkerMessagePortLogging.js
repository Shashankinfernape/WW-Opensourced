__d("WorkerMessagePortLogging", [
    "MainPageUrl",
    "QLogEvent",
    "qpl"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = Math.random() < 0.1;
    const s = 20;
    const u = 100;
    const c = 50;
    function d() {
        return o("MainPageUrl").isWorkerLogEnabled();
    }
    let m = 0;
    function p() {
        return o("QLogEvent").event(r("qpl")._(41497718, "106"), m++);
    }
    function _(port_name, n, r = false) {
        if (!(n == null || !e)) {
            const { receiveDateTime, receiveTimestamp, sendDateTime, sendDelayHighPrecision, sendTimestamp } = n;
            const m = p();
            m.startFromTime();
            const _ = m.range("SEND_DELAY");
            _.start(sendTimestamp);
            _.stop(receiveTimestamp);
            const f = m.range("SEND_DELAY_LOW_PRECISION");
            f.start(sendDateTime);
            f.stop(receiveDateTime);
            const send_drift = Math.abs(sendTimestamp - sendDateTime);
            const receive_drift = Math.abs(receiveTimestamp - receiveDateTime);
            m.annotate({
                string: {
                    port_name
                },
                int: {
                    send_delay: sendDelayHighPrecision,
                    send_drift,
                    receive_drift
                },
                bool: {
                    send_delay_above_max: sendDelayHighPrecision != null && sendDelayHighPrecision > s,
                    send_drift_above_max: send_drift > u,
                    receive_drift_above_max: receive_drift > u
                }
            });
            if (r) {
                const y = m.range("ROUND_TRIP");
                y.start(n.sendTimestamp);
                y.stop(n.receiveTimestamp);
                const round_trip = n.receiveTimestamp - n.sendTimestamp;
                m.annotate({
                    int: {
                        round_trip
                    },
                    bool: {
                        round_trip_above_max: round_trip > c
                    }
                });
            }
            m.stop();
        }
    }
    l.isWorkerLogEnabled = d;
    l.logMessageTiming = _;
}, 98);