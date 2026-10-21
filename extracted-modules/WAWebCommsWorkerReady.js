__d("WAWebCommsWorkerReady", [
    "Promise",
    "WAGenericStateManager",
    "WAPromiseTimeout"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 30000;
    const u = new (o("WAGenericStateManager")).WAGenericStateManager(false);
    function c(e) {
        u.set(e);
    }
    function d() {
        return u.get();
    }
    function m() {
        if (u.get()) {
            return (e || (e = n("Promise"))).resolve();
        }
        return o("WAPromiseTimeout").promiseTimeout(u.waitForValue(true), s, "waitForCommsWorker");
    }
    l.setCommsWorkerReady = c;
    l.isCommsWorkerReady = d;
    l.waitForCommsWorker = m;
}, 98);