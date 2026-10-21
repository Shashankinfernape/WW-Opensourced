__d("interaction-tracing", [
    "InstrumentationAnalyzer",
    "InteractionCloning",
    "InteractionTracingCore",
    "InteractionTracingLogger",
    "NavigationTracingCore",
    "NetworkStatusTracker",
    "addAnnotations"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        InteractionTracingCore: r("InteractionTracingCore"),
        InteractionCloning: r("InteractionCloning"),
        MeasurementErrorCode: o("InstrumentationAnalyzer").MeasurementErrorCode,
        NavigationTracing: r("NavigationTracingCore"),
        NetworkStatusTracker: r("NetworkStatusTracker"),
        addAnnotations: r("addAnnotations"),
        getTraceStatus: o("InteractionTracingLogger").getTraceStatus
    };
    l.default = e;
}, 98);