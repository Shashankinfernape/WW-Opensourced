__d("WAWebMainWrapper", [
    "FBLogger",
    "WALogger",
    "WAWebABProps",
    "WAWebCallsOnlyGating",
    "WAWebCrashAnnotations",
    "WAWebEmojiAssetLoader",
    "WAWebEmojiSetup",
    "WAWebExecApiCmd",
    "WAWebFeatureDetectionSwSupport",
    "WAWebKaleidoscopeWasmFeatureSupport",
    "WAWebLogPifeExposure",
    "WAWebMain.react",
    "WAWebMediaWorkerProxy",
    "WAWebNewsletterGatingUtils",
    "WAWebNoop",
    "WAWebNotificationBackend",
    "WAWebPathfinderCrashLog",
    "WAWebProfilePicThumbCollection",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebUserPrefsGeneral",
    "WAWebWamLoginReporter",
    "cr:13598",
    "cr:37102",
    "cr:8432",
    "cr:8752",
    "cr:8753",
    "cr:9486",
    "getErrorSafe",
    "gkx",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        if (r("gkx")("16539")) {
            window.Store = n("cr:8753");
            try {
                window.Debug = Object.assign(n("cr:8752"), window.Debug);
                if (n("cr:8752") != null) {
                    n("cr:8752").initialize();
                }
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to initialize WAWebDebug"
                ])));
            }
        }
        o("WAWebWamLoginReporter").initialize();
        if (r("WAWebFeatureDetectionSwSupport").supported) {
            o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.on("change:tag", function(e) {
                const navigator_serviceWorker = navigator.serviceWorker;
                if (navigator_serviceWorker?.controller && !e.tag) {
                    r("WAWebSWBus").request(navigator_serviceWorker.controller, r("WAWebSWBusActions").REMOVE_PP, e.id).catch(r("WAWebNoop"));
                }
            });
        }
        o("WAWebUserPrefsGeneral").initDailyStatsStartTime();
        r("WAWebEmojiSetup")(o("WAWebEmojiAssetLoader").getEmojiTypeFromPlatform(t));
        if (!o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled()) {
            if (n("cr:9486") != null) {
                n("cr:9486")();
            }
            if (o("WAWebABProps").getABPropConfigValue("web_use_kaleidoscope_media_check_enabled") || o("WAWebNewsletterGatingUtils").isChannelSGISenderEnabled()) {
                o("WAWebKaleidoscopeWasmFeatureSupport").checkKaleidoscopeWasmFeatureSupport().then((e)=>{
                    if (e) {
                        o("WAWebMediaWorkerProxy").prewarmMediaWasmWorker("kaleidoscopeClassify");
                    }
                });
            }
        }
        u();
        try {
            if (n("cr:37102") != null) {
                n("cr:37102").run();
            }
        } catch (error) {
            r("FBLogger")("JSSelfProfiler").catching(r("getErrorSafe")(error)).warn("failed to run JSSPWAWebConfigInit");
        }
        c();
        o("WAWebCrashAnnotations").initCrashAnnotations();
        r("WAWebLogPifeExposure")();
        o("WAWebPathfinderCrashLog").initPathfinderCrashLog();
        const a = n("WAWebMain.react");
        return {
            MainComponent: a.MainComponent,
            hasPendingActions: a.hasPendingActions,
            notificationBackend: n("WAWebNotificationBackend"),
            execApiCmd: r("WAWebExecApiCmd")
        };
    }
    function u() {
        if (!(n("cr:13598") == null || !r("justknobx")._("4085"))) {
            const e = r("justknobx")._("3988");
            window.setTimeout(function() {
                try {
                    if (n("cr:13598") != null) {
                        n("cr:13598").init("wa.idle");
                    }
                } catch (error) {
                    r("FBLogger")("JSSelfProfiler").catching(r("getErrorSafe")(error)).warn("failed to initialize JSSP idle trace runner");
                }
            }, e);
        }
    }
    function c() {
        if (n("cr:8432") != null) {
            try {
                n("cr:8432").initDataTrackingInCrashReports();
            } catch (error) {
                r("FBLogger")("log-for-crash").catching(r("getErrorSafe")(error)).warn("failed to initialize WA web crash diagnostics data tracking");
            }
        }
    }
    l.default = s;
}, 98);