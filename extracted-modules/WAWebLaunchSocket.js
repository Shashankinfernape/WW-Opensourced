__d("WAWebLaunchSocket", [
    "Promise",
    "WAComms",
    "WALogger",
    "WAWebABPropsUpdateFromStorage",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebBackendWorkerInitState",
    "WAWebBlocklistMigration",
    "WAWebBridgeInitialization",
    "WAWebBrokerGlobalAppState",
    "WAWebBuildConstants",
    "WAWebCallsOnlyGating",
    "WAWebCoreActionsODS",
    "WAWebCryptoEncKeyHelper",
    "WAWebCurrentUser",
    "WAWebDbRolloutUtil",
    "WAWebEnvironment",
    "WAWebEventSamplingCache",
    "WAWebFtsClient",
    "WAWebHistorySyncProgress",
    "WAWebInitFromStorage",
    "WAWebInitializeCryptoLibrary",
    "WAWebInvocationInterface",
    "WAWebLaunchSocketUtils",
    "WAWebLid1X1MigrationGating",
    "WAWebLogoutReasonConstants",
    "WAWebLongTaskAccumulator",
    "WAWebMessageDeliveryCounters",
    "WAWebMessageDeliveryODS",
    "WAWebMessageReceiveFlow",
    "WAWebMessageReceiveQpl",
    "WAWebModelStorage",
    "WAWebOfflineResumeCounters",
    "WAWebOfflineResumeODS",
    "WAWebPageLoadLogging",
    "WAWebPushNotificationsOfflineBbApi",
    "WAWebRegisterPassiveTasksForConnect",
    "WAWebRegisterPassiveTasksForConnectWorkerCompatible",
    "WAWebRegistration",
    "WAWebSchemaVersions",
    "WAWebSignalStorage",
    "WAWebSocketLogoutJob",
    "WAWebSocketModel",
    "WAWebStartBackend",
    "WAWebStartBackendWorker",
    "WAWebStatusStorage",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsIsLoggedIn",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsWorkerCompatibleMainThread",
    "WAWebWaitForInitialChatsSynced",
    "WAWebWamEnumWebcScenarioType",
    "WAWebWamMemoryStat",
    "WAWebWamOfflineResumeReporter",
    "WAWebWorkerStorage",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "gkx",
    "justknobx",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    const h = r("requireDeferred")("WAWebSetFrontendHandlerApi").__setRef("WAWebLaunchSocket");
    const y = r("requireDeferred")("WAWebSetWorkerSafeHandlerApi").__setRef("WAWebLaunchSocket");
    o("WAWebBackendEventBus").BackendEventBus.onReconnectSocket(function() {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "reconnect_socket triggered, resetting socket loop"
        ])));
        o("WAComms").closeSocketAndResume();
    });
    function C(e) {
        o("WAWebBackendEventBusWorkerCompatible").setBackendEventBus(o("WAWebBackendEventBus").BackendEventBus);
        o("WAWebOfflineResumeCounters").setOfflineResumeCounters(o("WAWebOfflineResumeODS").offlineResumeODSCounters);
        o("WAWebUserPrefsWorkerCompatibleMainThread").initializeUserPrefsWorkerCompatibleMainThread();
        o("WAWebRegisterPassiveTasksForConnectWorkerCompatible").setInstance(o("WAWebRegisterPassiveTasksForConnect").registerPassiveTasksForConnectMainThread);
        o("WAWebHistorySyncProgress").initHistorySyncProgressListeners();
        o("WAWebBackendEventBus").BackendEventBus.onRefreshQR(o("WAWebLaunchSocketUtils").refreshQR);
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[socket] start launchSocket flow with mutexComplete promise ",
            ""
        ])), e == null ? "NULL" : "not null");
        o("WAWebPageLoadLogging").startPageLoadQplMeasure("launchSocket");
        const t = o("WAWebBridgeInitialization").makeBridge();
        o("WAWebBackendApi").setApi(t);
        h.load().then(({ setFrontendHandlers: n })=>n(t));
        y.load().then(({ setWorkerSafeHandlers: n })=>n(t));
        if (!o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled()) {
            o("WAWebFtsClient").ftsClient.initialize();
        }
        o("WAWebStartBackend").setupStartBackendListeners();
        if (r("gkx")("27242")) {
            o("WAWebPageLoadLogging").addPageLoadQplAnnotationNow({
                early_backend_worker: true
            });
            o("WAWebStartBackendWorker").startBackendWorker();
        }
        const a = r("justknobx")._("6500");
        return o("WAWebDbRolloutUtil").loadSchemaVersions().then(()=>v()).then(()=>o("WAWebCryptoEncKeyHelper").initEncSalt()).then(()=>{
            if (a) {
                return void 0;
            }
            return S();
        }).then(()=>o("WAWebCryptoEncKeyHelper").initEncSaltForInvoker()).then(()=>o("WAWebSignalStorage").initialize()).then(()=>(g || (g = n("Promise"))).all([
                o("WAWebModelStorage").initialize(),
                e
            ])).then(()=>{
            if (!o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled()) {
                return o("WAWebStatusStorage").initialize();
            }
        }).then(()=>{
            if (a) {
                return S();
            }
        }).then(()=>(g || (g = n("Promise"))).all([
                o("WAWebUserPrefsGeneral").getLogoutReason(),
                o("WAWebWorkerStorage").initialize(),
                o("WAWebUserPrefsGeneral").setAppVersionBase(o("WAWebBuildConstants").VERSION_BASE)
            ])).catch((e)=>{
            o("WAWebBackendEventBus").BackendEventBus.triggerStorageInitializationError(e);
        }).then((e)=>{
            const t = e?.[0];
            if (t) {
                o("WAWebCoreActionsODS").logPageLoadErrorForcedLogout();
                if (r("WAWebEnvironment").isWindows && o("WAWebCurrentUser").isEmployee()) {
                    o("WAWebBackendEventBus").BackendEventBus.triggerUnexpectedLogoutModal(t.reason);
                } else {
                    o("WAWebSocketModel").Socket.logout(t.reason);
                }
            }
            if (r("WAWebBrokerGlobalAppState").isLogoutInProgress) {
                throw r("err")("aborting launchSocket due to logout");
            }
            if (o("WAWebUserPrefsMultiDevice").isRegistered()) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[socket] launchSocket for login"
                ])));
                o("WAWebUserPrefsIsLoggedIn").setIsConnectedAsRegistered();
                o("WAWebBackendEventBus").BackendEventBus.triggerInitialLoadReady();
                o("WAWebWamMemoryStat").setCurrentMemoryScenario(o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.OFFLINE_RESUME);
                return o("WAWebModelStorage").initialize().catch((e)=>o("WAWebBackendEventBus").BackendEventBus.triggerStorageInitializationError(e)).then(()=>(g || (g = n("Promise"))).all([
                        o("WAWebABPropsUpdateFromStorage").updateABPropsFromStorage(),
                        o("WAWebEventSamplingCache").updateEventSamplingFromStorage()
                    ])).then(()=>o("WAWebInitializeCryptoLibrary").initializeCryptoLibrary()).then(()=>{
                    o("WAWebBackendEventBus").BackendEventBus.triggerAbPropsLoaded();
                    L();
                    o("WAWebInitFromStorage").restoreImportantMetaData().catch((e)=>{
                        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[socket] restoreImportantMetaData failed"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("launch-socket-restore-metadata-failed");
                    });
                }).then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const e = function() {
                        o("WAWebPageLoadLogging").startPageLoadQplMeasure("lidCacheWarmup");
                        return o("WAWebApiContact").warmUpAllLidPnMappings().then((e)=>o("WAWebPageLoadLogging").endPageLoadQplMeasure("lidCacheWarmup"));
                    };
                    const t = o("WAWebBlocklistMigration").applyBlocklistV2Rules() ? (g || (g = n("Promise"))).resolve() : o("WAWebBackendApi").frontendSendAndReceive("restoreBlocklist");
                    yield (g || (g = n("Promise"))).all([
                        o("WAWebBackendApi").frontendSendAndReceive("restoreOptOutList", {}),
                        e(),
                        t
                    ]);
                })).then(()=>{
                    o("WAWebPushNotificationsOfflineBbApi").setStartCommsT();
                    o("WAWebPageLoadLogging").endPageLoadQplMeasure("launchSocket");
                    o("WAWebStartBackend").startBackend().finally(()=>{
                        if (!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                            o("WAWebCoreActionsODS").logPageLoadErrorForcedLogout();
                            return o("WAWebSocketLogoutJob").socketLogout(o("WAWebLogoutReasonConstants").LogoutReason.LidMigrationUnmigratedCompanion);
                        }
                    }).catch((e)=>{
                        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[socket] startBackend failed"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("launch-socket-start-backend-failed");
                    });
                });
            }
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[socket] launchSocket for registration"
            ])));
            o("WAWebWamMemoryStat").setCurrentMemoryScenario(o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.INITIAL_PAIRING);
            o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.setIsInitialSync();
            if (!o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled()) {
                o("WAWebWaitForInitialChatsSynced").initWaitForInitialChatsSynced();
            }
            return (g || (g = n("Promise"))).all([
                o("WAWebRegistration").refreshNoiseCredentials(),
                o("WAWebRegistration").refreshSignalCredentials()
            ]).then(()=>{
                o("WAWebPageLoadLogging").endPageLoadQplMeasure("launchSocket");
                o("WAWebLaunchSocketUtils").startCommsAndHandleRequests().catch((e)=>{
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[socket] startCommsAndHandleRequests failed"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("launch-socket-start-comms-failed");
                });
            });
        });
    }
    function b() {
        const e = o("WAWebPageLoadLogging").getPageLoadId();
        if (e === "0") {
            return null;
        }
        return e;
    }
    function v() {
        o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
            "[storage] send schema versions to fts worker"
        ])));
        const e = o("WAWebSchemaVersions").getSchemaVersions();
        o("WAWebInvocationInterface").get().setSchemaVersions(e);
    }
    function S() {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "[storage] send schema versions to fts worker"
            ])));
            const e = o("WAWebSchemaVersions").getSchemaVersions();
            const t = yield o("WAWebCryptoEncKeyHelper").getSalt();
            if (t != null) {
                o("WAWebBackendWorkerInitState").recordInitDbInit({
                    versionsToSet: e,
                    salt: t
                });
            }
        });
        return R.apply(this, arguments);
    }
    function L() {
        if (r("gkx")("20665")) {
            o("WAWebMessageDeliveryCounters").setMessageDeliveryCounters(o("WAWebMessageDeliveryODS").messageDeliveryODSCounters);
            o("WAWebMessageReceiveFlow").setMessageReceiveFlowTracker(o("WAWebMessageReceiveQpl").messageReceiveQplTracker);
            o("WAWebLongTaskAccumulator").startLongTaskAccumulator();
            o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.setPageLoadIdProvider(b);
        }
    }
    l.launchSocket = C;
}, 98);