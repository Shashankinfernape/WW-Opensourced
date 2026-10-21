__d("WAWebVoipCallLogWriteMutex", [
    "WASemaphore"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new (o("WASemaphore")).Semaphore(1);
    l.WACallLogWriteMutex = e;
}, 98);