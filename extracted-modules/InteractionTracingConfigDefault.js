__d("InteractionTracingConfigDefault", [
    "OneTraceQPLLogger",
    "SiteData",
    "WebDriverConfig",
    "gkx",
    "performanceNavigationStart",
    "qpl"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const timeout = o("WebDriverConfig").isJestE2ETestRun ? 300000 : 60000;
    const allowedQPLPointTypes = new Set([
        "AppTiming",
        "TierFlush",
        "NavigationTiming",
        "VisualCompletion",
        "TestMetrics",
        "ServerTimings"
    ]);
    const cancelOnBackground = r("gkx")("22968") && r("gkx")("1514");
    const d = {
        cancelOnBackground,
        defaultTracePolicy: "default",
        enableInstrumentationCorrectnessLogging: r("gkx")("3739"),
        instrumentationCorrectnessQPLEvent: r("qpl")._(340787201, "419"),
        enableMemoryLogging: r("gkx")("20980"),
        enableVCTracker: true,
        heroLatePlaceholderDetection: r("gkx")("20983"),
        heroDebugTracing: r("gkx")("10726"),
        pkgCohort: r("SiteData").pkg_cohort,
        timeout,
        qplActionCancelOnNavigation: false,
        qplActionMap: o("OneTraceQPLLogger").qplActionMap,
        qplBaseTimestamp: r("performanceNavigationStart")(),
        useDocumentBodyForVCRoot: true,
        navigationCancelsInteractions: false,
        failLoggingFixCometErrorBoundary: r("gkx")("11582"),
        failOnCometErrorBoundary: r("gkx")("1154") ? "fail" : r("gkx")("196") ? "annotate" : "disabled",
        qplPointFilterRegex: /(^(server_)?adp_|Relay_|late_mutation.+([2-9]|\d\d))|(.+_)?ssr_.+([2-9]|\d\d)|Queue_|Render_/,
        cleanUpTraceTimeout: r("gkx")("13090") ? 10 * 1000 : 1800 * 1000,
        allowedQPLPointTypes,
        clientRevision: r("SiteData").client_revision,
        serverRevision: r("SiteData").server_revision ?? 0,
        pushPhase: r("SiteData").push_phase,
        qplEnableE2ETracing: r("gkx")("15620"),
        enableUserTimings: r("gkx")("20484"),
        enableUserTimingsVerbose: r("gkx")("20485"),
        heroBootloadStatsAfterQPL: r("gkx")("9056"),
        clearAllMapsOnCleanup: r("gkx")("9206")
    };
    l.DEFAULT_TRACING_CONFIG = d;
}, 98);