__d("WAWebEventsWaitForMainStreamReadyMd", [
    "Promise",
    "WAWebBackendEventBus",
    "WAWebEventsWaitForBbEvent"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        if (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd) {
            return (e || (e = n("Promise"))).resolve();
        }
        return r("WAWebEventsWaitForBbEvent")(o("WAWebBackendEventBus").BackendEventBus, o("WAWebBackendEventBus").BackendEvent.MAIN_STREAM_MODE_READY);
    }
    l.default = s;
}, 98);