__d("OneTraceQPLLogger", [
    "QuickPerformanceLogger",
    "performanceNavigationStart",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = {
        CANCEL: 4,
        CANCEL_BACKGROUND: 630,
        CANCEL_NAVIGATION: 615,
        DROPPED: 216,
        ERROR: 87,
        FAIL: 3,
        OFFLINE: 160,
        START: 1,
        SUCCESS: 2,
        TIMEOUT: 113
    };
    const c = r("performanceNavigationStart")();
    function d(t, n) {
        if (t != null) {
            (e || (e = r("QuickPerformanceLogger"))).markerStart(t, n.instanceKey, n.startTime + c);
        }
    }
    function m(t, n) {
        if (t != null) {
            (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(t, n.annotations, {
                instanceKey: n.instanceKey
            });
            for(const a in n.markerPoints){
                (e || (e = r("QuickPerformanceLogger"))).markerPoint(t, a, {
                    data: n.markerPoints[a].data,
                    instanceKey: n.instanceKey,
                    timestamp: n.markerPoints[a].timeSinceStart + c
                });
            }
            const i = u[n.status];
            e.markerEnd(t, i, n.instanceKey, (n.endTime ?? (s || (s = r("performanceNow")))()) + c);
        }
    }
    l.qplActionMap = u;
    l.initQPL = d;
    l.logQPL = m;
}, 98);