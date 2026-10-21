__d("NavigationTracingCore", [
    "InteractionTracingCore",
    "NavigationTracingUtils",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = null;
    function u(e) {
        s = e;
    }
    function getCurrentNavigationTraceAPI() {
        return s;
    }
    function traceInitialLoad(t, n) {
        const i = t.traceStartTime ?? (e || (e = r("performanceNow")))();
        return r("InteractionTracingCore").startInteraction(t, function(e) {
            u(e);
            const r = e.getTraceId();
            e.setTracePolicy(t.tracePolicy);
            e.addMarkerPoint("traceStart", "AppTiming", i);
            if (t.skipQPLStartMarker === true && t.qplInstanceKey != null) {
                t.deps.QuickPerformanceLogger.markerPoint(t.qplEvent, "traceStart", {
                    instanceKey: t.qplInstanceKey,
                    timestamp: i
                });
            }
            e.onComplete(function(e) {
                o("NavigationTracingUtils").addNavigationTiming(r);
                o("NavigationTracingUtils").addReferrer(r);
            });
            e.onCompleteSync(function(e) {
                u(null);
            });
            if (n) {
                n(e);
            }
        });
    }
    function traceNavigation(e, t) {
        return r("InteractionTracingCore").startInteraction(e, function(e) {
            try {
                u(e);
                const n = e.getTraceId();
                e.onComplete(function(e) {
                    o("NavigationTracingUtils").addNavigationTiming(n);
                });
                e.onCompleteSync(function(e) {
                    u(null);
                });
                if (t) {
                    t(e);
                }
            } catch (error) {
                if (error.message !== "can't access dead object") {
                    throw error;
                }
            }
        });
    }
    const p = {
        getCurrentNavigationTraceAPI,
        traceInitialLoad,
        traceNavigation
    };
    l.default = p;
}, 98);