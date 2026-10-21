__d("WALockMap", [
    "WALock",
    "WAPromiseQueue"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e = -1) {
        const t = new (o("WAPromiseQueue")).PromiseQueueMap(e);
        return o("WALock").makeLock(t);
    }
    l.makeLockMap = e;
}, 98);