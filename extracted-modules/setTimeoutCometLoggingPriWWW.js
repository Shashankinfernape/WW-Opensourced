__d("setTimeoutCometLoggingPriWWW", [
    "JSScheduler",
    "setTimeoutCometInternals"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t, n, ...a) {
        return o("setTimeoutCometInternals").setTimeoutAtPriority_DO_NOT_USE.apply(o("setTimeoutCometInternals"), [
            (e || (e = o("JSScheduler"))).priorities.unstable_Low,
            t,
            n,
            ...a
        ]);
    }
    l.default = s;
}, 98);