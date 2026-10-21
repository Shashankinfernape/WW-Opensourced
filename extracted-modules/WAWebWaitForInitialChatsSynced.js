__d("WAWebWaitForInitialChatsSynced", [
    "Promise",
    "WAWebBackendEventBus",
    "WAWebEventsWaitForBbEvent"
], function(t, n, r, o, a, i, l) {
    let e;
    let s = (e || (e = n("Promise"))).resolve();
    let u = false;
    function c() {
        u = true;
        s = r("WAWebEventsWaitForBbEvent")(o("WAWebBackendEventBus").BackendEventBus, o("WAWebBackendEventBus").BackendEvent.ON_INITIAL_CHAT_SYNCED).finally(()=>{
            u = false;
        });
    }
    function d() {
        return u;
    }
    function m() {
        return s;
    }
    l.initWaitForInitialChatsSynced = c;
    l.isWaitForInitialChatsSyncedPending = d;
    l.waitForInitialChatsSynced = m;
}, 98);