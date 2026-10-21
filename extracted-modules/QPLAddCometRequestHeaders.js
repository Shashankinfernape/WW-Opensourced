__d("QPLAddCometRequestHeaders", [
    "QuickPerformanceLogger",
    "cr:6895"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s() {
        n("cr:6895").registerHeaderProvider(function() {
            const t = {};
            const n = (e || (e = r("QuickPerformanceLogger"))).getActiveMarkerIds({
                type: 2
            });
            if (n.length > 0) {
                t["X-FB-QPL-Active-Flows"] = n.sort().join(",");
            }
            const o = e.getActiveE2ETraceIdsAsArray();
            if (o.length > 0) {
                t["X-FB-QPL-Active-E2E-Trace-IDs"] = o.sort().join(",");
            }
            return t;
        });
    }
    l.default = s;
}, 98);