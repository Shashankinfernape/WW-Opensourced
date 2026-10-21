__d("CometVPVDUserActivityMonitor", [
    "CometUserActivityMonitor"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        isUserActive: function() {
            return o("CometUserActivityMonitor").getActivityState() === "ACTIVE";
        },
        subscribe: function(t) {
            const e = o("CometUserActivityMonitor").subscribe(function(e) {
                const n = e === "ACTIVE";
                t(n);
            });
            return function() {
                if (e) {
                    e.remove();
                }
            };
        }
    };
    l.default = e;
}, 98);