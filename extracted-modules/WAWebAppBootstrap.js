__d("WAWebAppBootstrap", [
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebABPropsCache",
    "WAWebAppSwInitializer",
    "WAWebBackendWorkerInitState",
    "WAWebBrokerBackendInterface",
    "WAWebBuildConstants",
    "WAWebCacheStoreGatingUtil",
    "WAWebClientFeatureFlags",
    "WAWebConfigureWindowEvents",
    "WAWebDebugSetup",
    "WAWebDeleteGuestSessionOnWebLoad",
    "WAWebDesktopUpsellUtils",
    "WAWebEmojiKeywordToUnicode",
    "WAWebEnvironment",
    "WAWebEventSamplingCache",
    "WAWebFrontendL10nHelpers",
    "WAWebGlobals",
    "WAWebHandlePreviousLogout",
    "WAWebInfraErrorLogger",
    "WAWebInvocationInterface",
    "WAWebKeyboardShortcuts",
    "WAWebLoggerOnError",
    "WAWebLoginBounceGuard",
    "WAWebLoomStuckTraceEviction",
    "WAWebMainThreadLogger",
    "WAWebMetricsAttributionObservers",
    "WAWebPageLoadLoggingImpl",
    "WAWebPrefetchHatchDetailsOnLogin",
    "WAWebRunInTransaction",
    "WAWebStorageErrorHandlingUtils",
    "WAWebSyncdUploadFatalErrorMetric",
    "WAWebTransitions",
    "WAWebUim",
    "WAWebUserPrefsBase",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebWam",
    "WAWebWamPageLoadReporter",
    "WAWebWamWorkerSpecificEvents",
    "WAWebWidToJid",
    "WAWebWindowsHybridBridgeInitiator",
    "WDSTooltipShortcutResolver",
    "asyncToGeneratorRuntime",
    "cr:13019",
    "cr:17219",
    "cr:2015",
    "cr:34988",
    "cr:5203",
    "cr:6448",
    "getErrorSafe",
    "gkx",
    "initWAWebPlatformWebPage",
    "velocity-animate",
    "velocity-animate-ui"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let s;
    let u;
    let c;
    const d = n("cr:13019") ?? {};
    const m = d.reportPotentialWebDataLoss;
    let p = null;
    function _() {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (p == null) {
                p = g();
            }
            return p;
        });
        return f.apply(this, arguments);
    }
    function g() {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (n("cr:6448") != null) {
                n("cr:6448").incr("web.app.bootstrap");
            }
            if (n("cr:5203") != null) {
                n("cr:5203")();
            }
            o("WAWebMainThreadLogger").initializeWAWebMainThreadLogger();
            o("WDSTooltipShortcutResolver").registerWDSTooltipShortcutResolver(o("WAWebKeyboardShortcuts").getWDSShortcuts);
            o("WAWebInfraErrorLogger").addListenerToErrorPubSub();
            window.onerror = o("WAWebLoggerOnError").onErrorHandler;
            window.onunhandledrejection = o("WAWebLoggerOnError").onUnhandledPromiseRejection;
            r("initWAWebPlatformWebPage")();
            o("WAWebSyncdUploadFatalErrorMetric").initialiseFatalErrorMetricUploading();
            yield o("WAWebDeleteGuestSessionOnWebLoad").maybeDeleteGuestSessionOnWebLoad();
            yield o("WAWebHandlePreviousLogout").handlePreviousLogoutFailures();
            o("WAWebLoginBounceGuard").resetLoginBounceCount();
            o("WAWebPageLoadLoggingImpl").setPageLoadLoggingImpl();
            o("WAWebABPropsCache").initializeABPropsCache();
            o("WAWebClientFeatureFlags").overwriteDebugFeatures();
            const l = n("cr:17219")?.getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebAppBootstrap);
            const d = n("cr:34988") ?? {};
            const p = d.initializeWindowsSettingChangeHandlers;
            p?.();
            if (r("WAWebEnvironment").isWindows) {
                o("WAWebUserPrefsBase").userPreferencesStoreBase.set(o("WAWebUserPrefsKeys").UserPrefs.WindowsIsAdaptiveLayoutEnabled, true);
            }
            l?.abProps?.initialize();
            o("WAWebEventSamplingCache").initializeEventSamplingCache();
            o("WAWebWam").initWamRuntime();
            l?.wam?.initialize();
            o("WAWebMetricsAttributionObservers").initializeMetricsAttributionObservers();
            o("WAWebLoomStuckTraceEviction").initWebLoomStuckTraceEviction();
            n("WAWebWamWorkerSpecificEvents");
            o("WAWebWamPageLoadReporter").exeTimer.start();
            window.Velocity = n("velocity-animate");
            n("velocity-animate-ui");
            n("WAWebTransitions").registerEffects();
            o("WAWebInvocationInterface").set(r("WAWebBrokerBackendInterface"));
            o("WAWebDebugSetup").setupDebugGlobal();
            o("WAWebConfigureWindowEvents").configureWindowEvents();
            try {
                o("WAWebEmojiKeywordToUnicode").updateEmojiTrie();
            } catch (e) {
                const _ = r("getErrorSafe")(e);
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[emoji-trie] EmojiKeywordToUnicode setup failed: ",
                    ", stack: ",
                    ""
                ])), e, _.stack).sendLogs(`[emoji-trie] EmojiKeywordToUnicode setup failed: ${_.message}`);
            }
            o("WAWebFrontendL10nHelpers").extendWAWebLocalePrefCookieTtl();
            o("WAWebFrontendL10nHelpers").mungeWAWebLocaleOverrideFromUrlIfNecessary();
            o("WAWebWamPageLoadReporter").exeTimer.end();
            if (!r("gkx")("26258")) {
                o("WAWap").enableXMLFormat();
            }
            o("WAWebDesktopUpsellUtils").isWebUserOnSupportedWindowsOSForUWPAsync();
            const f = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
            const g = o("WAWebWidToJid").widToMyJids(f);
            o("WAWebGlobals").setGlobals({
                jidUtils: o("WAJids").createJidUtils({
                    platform: "whatsapp"
                }),
                myJids: g,
                runInTransaction: o("WAWebRunInTransaction").runInTransaction
            });
            if (g != null) {
                o("WAWebBackendWorkerInitState").resolveJidsReady();
            }
            o("WAWebCacheStoreGatingUtil").initStorageOptimizationFlags();
            o("WAWebAppSwInitializer").initializeSw({
                swScriptPath: "/sw.js",
                swScope: "/"
            });
            o("WAWebStorageErrorHandlingUtils").persistAppReloadMarker();
            if (r("WAWebEnvironment").isWindows && f == null) {
                if (m != null) {
                    m();
                }
            }
            o("WAWebUim").setupUimListeners();
            o("WAWebPrefetchHatchDetailsOnLogin").initHatchDetailsPrefetchOnLogin();
            if (n("cr:2015") != null) {
                n("cr:2015").init();
            }
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[app] bootstrap done"
            ])));
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[app] version: ",
                ""
            ])), o("WAWebBuildConstants").VERSION_STR);
        });
        return h.apply(this, arguments);
    }
    l.bootstrapApp = _;
}, 98);