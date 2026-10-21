__d("WAWebEventsWaitForReadyForOffline", [
    "Promise",
    "WAWebBackendEventBus",
    "WAWebEventsWaitForBbEvent",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u() {
        if (s == null) {
            s = r("WAWebEventsWaitForBbEvent")(o("WAWebBackendEventBus").BackendEventBus, o("WAWebBackendEventBus").BackendEvent.OFFLINE_PROCESS_READY);
        }
    }
    function c() {
        return s ?? (e || (e = n("Promise"))).reject(r("err")("waitForOfflineProcessReady called before init"));
    }
    l.initWaitForOfflineProcessReady = u;
    l.waitForOfflineProcessReady = c;
}, 98);