__d("setTimeoutComet", [
    "JSScheduler",
    "setTimeoutCometInternals"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t, n, ...i) {
        const r = (e || (e = o("JSScheduler"))).getCurrentPriorityLevel() === (e || (e = o("JSScheduler"))).priorities.unstable_Idle ? (e || (e = o("JSScheduler"))).priorities.unstable_Idle : (e || (e = o("JSScheduler"))).priorities.unstable_Low;
        return o("setTimeoutCometInternals").setTimeoutAtPriority_DO_NOT_USE.apply(o("setTimeoutCometInternals"), [
            r,
            t,
            n,
            ...i
        ]);
    }
    l.default = s;
}, 98);