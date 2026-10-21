__d("WAWebStartBackend", [
    "JSResourceForInteraction",
    "Promise",
    "WABase64",
    "WAComms",
    "WAGzip",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABPropsCache",
    "WAWebABPropsWamGlobals",
    "WAWebAdvDeviceInfoCheckJob",
    "WAWebAfterReadSendingRollbackListener",
    "WAWebApiContact",
    "WAWebAuthAgentFeatureControlLifecycle",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackendWorkerClient",
    "WAWebBackendWorkerInitState",
    "WAWebBackgroundSyncReporter",
    "WAWebBootstrapBizBroadcastCampaigns",
    "WAWebBootstrapOrgsWhenEnabled",
    "WAWebBootstrapPremiumMessages",
    "WAWebBuildConstants",
    "WAWebCallsOnlyGating",
    "WAWebCartDbLidMigration",
    "WAWebClientPayload",
    "WAWebCoexStateSyncStartup",
    "WAWebCommonCTWADataSharing",
    "WAWebCommsConfig",
    "WAWebCommsGating",
    "WAWebCommsHandleStanza",
    "WAWebCommsWorkerProxy",
    "WAWebCrashlog",
    "WAWebCryptoEncKeyHelper",
    "WAWebCustomerManagerGating",
    "WAWebDBAfterReadSendingRollbackMigration",
    "WAWebDBCreateLidPnMappings",
    "WAWebDBFavoriteDatabaseMigrationToLid",
    "WAWebDBLabelAssociationDatabaseMigrationToLid",
    "WAWebDBPnhThreadMigrationToGeneralLid",
    "WAWebDbEncryptionKey",
    "WAWebEnvironment",
    "WAWebEventsWaitForMain",
    "WAWebFeatureDetectionSwSupport",
    "WAWebFetchAndUpdateBlocklistJob",
    "WAWebFtsClient",
    "WAWebGetMessageCache",
    "WAWebGetReachoutTimelockJob",
    "WAWebHandleSingleMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebHistorySyncNotificationUtils",
    "WAWebHistorySyncProgress",
    "WAWebIdentityChangeApi",
    "WAWebIdentityChangeApiWorkerCompatible",
    "WAWebInboxFiltersGatingUtils",
    "WAWebInitBotGatingHelpers",
    "WAWebInitChatThreadLogging",
    "WAWebInitFavoritesFromStorage",
    "WAWebInitFromStorage",
    "WAWebInitWaitForEvents",
    "WAWebInitializeBots",
    "WAWebL10NCountryCodes",
    "WAWebL10NHelpers",
    "WAWebLazyPersistedQueue",
    "WAWebLid1x1MigrationManager",
    "WAWebLocalStorage",
    "WAWebLogoutReason",
    "WAWebLogoutReasonConstants",
    "WAWebMediaHosts",
    "WAWebMessageInsertDebugPlaceholder",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMessageProcessorCache",
    "WAWebMetaAiBotSessionCleanupJob",
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebMobilePlatforms",
    "WAWebModelStorage",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterRestoreMetadataWithLoadingStage",
    "WAWebOffdStorage",
    "WAWebOfflineHandler",
    "WAWebOfflineResumeMainThread",
    "WAWebOfflineResumeMsgProcessReporter",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebOfflineResumeUtils",
    "WAWebPageLoadLogging",
    "WAWebPassiveModeManager",
    "WAWebPersistedJobManager",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPrimaryFeatures",
    "WAWebPrimaryVersion",
    "WAWebPushNotificationsGatingUtils",
    "WAWebRegisterPassiveTasks",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebSignalSessionCleanupJob",
    "WAWebSignalStoreApi",
    "WAWebSocketModel",
    "WAWebStartBackendLoginListeners",
    "WAWebStartBackendWorker",
    "WAWebStoreSpecialAbProps",
    "WAWebSubscriptions",
    "WAWebSyncBootstrap",
    "WAWebSyncContactsJob",
    "WAWebSyncd",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdOrphan",
    "WAWebSyncdOrphanWorkerCompatible",
    "WAWebTasksDefinitions",
    "WAWebTos",
    "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
    "WAWebUserPrefsAppStateSync",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocales",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsWorkerCompatibleMainThread",
    "WAWebWaitForInitialChatsSynced",
    "WAWebWamGlobals",
    "WAWebWamOfflineResumeReporter",
    "WAWebWamProcessWorkerData",
    "WAWebWindowsHybridBridgeInitiator",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "cr:10195",
    "cr:10196",
    "cr:17219",
    "cr:37961",
    "getErrorSafe",
    "gkx"
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
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    let L;
    let E;
    let k;
    let I;
    let T = false;
    function D() {
        o("WAWebBackendEventBus").BackendEventBus.onStorageInitializationError(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!(!o("WAWebUserPrefsMultiDevice").isRegistered() && o("WAWebLogoutReason").getPrevLogoutReasonCode() === o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE.CLIENT_FATAL)) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "storage initialization error, logging out"
                ])));
                yield o("WAWebSocketModel").Socket.clearCredentialsAndStoredData(o("WAWebLogoutReasonConstants").LogoutReason.WebFailStorageInitialization);
                o("WAWebStartBackendLoginListeners").handleStorageInitError();
            }
        }));
        o("WAWebBackendEventBus").BackendEventBus.onOpenSocketStream(function() {
            o("WAWebUserPrefsGeneral").incrementLoginCounter();
            o("WAWebClientPayload").incrementSuccessfulLoginCounter();
            if (o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) {
                o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.resetEvent();
            }
            o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logSocketConnectT();
        });
        o("WAWebBackendEventBus").BackendEventBus.onceOfflineDeliveryEnd(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[StartBackend]: start initial setup"
                ])));
                yield q();
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[StartBackend]: complete initial setup"
                ])));
            } catch (e) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[StartBackend] initial setup failed:"
                ])));
            }
        }));
        o("WAWebMetaAiBotSessionCleanupJob").registerMetaAiBotSessionCleanupOnResume();
        T = true;
    }
    function x() {
        o("WAWebCommonCTWADataSharing").fetchDataSharingSettingAndUpdateModel();
    }
    function $() {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WAWebPageLoadLogging").startPageLoadQplMeasure("startBackend");
            const e = yield N();
            o("WAWebPageLoadLogging").endPageLoadQplMeasure("startBackend");
            return e;
        });
        return P.apply(this, arguments);
    }
    function N() {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WAWebUserPrefsWorkerCompatibleMainThread").initializeUserPrefsWorkerCompatibleMainThread();
            if (!r("gkx")("27242")) {
                o("WAWebStartBackendWorker").startBackendWorker();
            }
            if (!T) {
                D();
            }
            const e = yield o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo();
            if (!e) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "startBackendRegistered: chatd user not registered"
                ])));
                return;
            }
            o("WAWebBackendWorkerInitState").startWorkerInitDataTimeout();
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[startBackend]: connected as ",
                ""
            ])), o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow());
            if (r("WAWebEnvironment").isWindows) {
                const t = r("WAWebLocalStorage") == null ? void 0 : r("WAWebLocalStorage").getItem(o("WAWebUserPrefsKeys").KEYS.WINDOWS_PENDING_CLIENT_KEY_SETUP);
                if (t != null) {
                    let i;
                    const l = o("WAWebUserPrefsMultiDevice").getNoiseInfo();
                    const s = l?.staticKeyPair?.privKey;
                    const u = s != null ? o("WABase64").encodeB64(s) : "";
                    yield n("cr:17219") == null || (i = n("cr:17219").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebStartBackend)) == null || (i = i.getClientKeyBridge()) == null ? void 0 : i.setClientKey(u);
                    yield o("WAWebFtsClient").ftsClient.initExternalStorage();
                    if (r("WAWebLocalStorage") != null) {
                        r("WAWebLocalStorage").removeItem(o("WAWebUserPrefsKeys").KEYS.WINDOWS_PENDING_CLIENT_KEY_SETUP);
                    }
                }
            }
            try {
                yield o("WAWebApiContact").warmUpAllLidPnMappings();
                yield o("WAPromiseTimeout").promiseTimeout(o("WAWebModelStorage").initialize(), 20 * 1000);
                yield o("WAPromiseTimeout").promiseTimeout(o("WAWebOffdStorage").initialize(), 20 * 1000);
                o("WAWebCrashlog").registerCrashlogUploadIsUserInExternalBetaFunction(o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb);
            } catch (e) {
                o("WAWebBackendEventBus").BackendEventBus.triggerStorageInitializationError(e);
            }
            o("WAWebInitWaitForEvents").initOfflineResumeWaitForEvents();
            o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.setLastPushCompleteTimestamp();
            V();
            o("WAWebPrimaryFeatures").loadPrimaryFeatures();
            o("WAWebPrimaryVersion").maybeBackfillStoredPrimaryCurrentVersion().catch((e)=>{
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "primary version: failed to backfill the stored primary version"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("primary-version-backfill-failed");
            });
            o("WAWebMediaHosts").mediaHosts.maybeLoadMediaConnFromStorage();
            const c = o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete();
            if (!c && !o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled()) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "initial chats not synced, will delay processing non-peer stanzas"
                ])));
                o("WAWebWaitForInitialChatsSynced").initWaitForInitialChatsSynced();
            }
            yield G();
            O();
            o("WAWebABPropsWamGlobals").setAbPropDependingGlobalWamAttributes();
            o("WAWebBootstrapOrgsWhenEnabled").bootstrapOrgsWhenEnabled();
            if (o("WAWebL10NHelpers").isLocalLanguageOverrideEnabled()) {
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").KEYS.LANG_FROM_USER, o("WAWebUserPrefsLocales").getUserLangPref() || "en");
            }
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").KEYS.LANG_FROM_PHONE, o("WAWebUserPrefsLocales").getPhoneLangPref() || "en");
            o("WAWebBackendApi").frontendFireAndForget("restoreTimeSpentSession", {});
            if (o("WAWebMobilePlatforms").isSMB()) {
                o("WAWebBootstrapBizBroadcastCampaigns").bootstrapBizBroadcastCampaigns().catch((e)=>{
                    o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[bb:bootstrap] failed"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("bb-bootstrap-failed");
                });
            }
            if (o("WAWebMobilePlatforms").isSMB()) {
                o("WAWebAuthAgentFeatureControlLifecycle").startAuthAgentFeatureControlLifecycle();
            }
            yield o("WAWebInitChatThreadLogging").initChatThreadLogging();
            yield o("WAWebPersistedJobManager").startWebPersistedJobManager();
            o("WAWebPersistedJobManagerWorkerCompatible").setInstance(o("WAWebPersistedJobManager").getJobManager());
            o("WAWebOfflineResumeMainThread").setupMainThreadResume(o("WAWebOfflineHandler").OfflineMessageHandler);
            if (o("WAWebBuildConstants").WINDOWS_OFFLINE) {
                let C;
                const b = yield n("cr:17219") == null || (C = n("cr:17219").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebStartBackend)) == null || (C = C.serverEncKeySaltBridge) == null ? void 0 : C.getServerEncKeySalt();
                if (b == null) {
                    o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[_startBackend] encodedServerEncKeySalt is not available"
                    ])));
                } else {
                    const v = new TextDecoder;
                    const S = o("WABase64").decodeB64(b);
                    const R = v.decode(S);
                    yield o("WAWebDbEncryptionKey").DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(R);
                    yield o("WAWebCryptoEncKeyHelper").generateFinalDbEncryptionAndFtsKeyForInvoker(R);
                }
                o("WAWebBackendEventBus").BackendEventBus.triggerOfflineDeliveryEnd();
                yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey();
                o("WAWebOfflineResumeUtils").loadMainScreen({});
            } else {
                yield o("WAComms").startHandlingRequests();
                self.setTimeout(function() {
                    if (!o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd && !o("WAWebOfflineHandler").OfflineMessageHandler.hasReceivedOfflinePreviewIb()) {
                        o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "[startBackend] no offline preview IB within 10s (socketState=",
                            ", commsInWorker=",
                            ", hasResumeManager=",
                            ")"
                        ])), o("WAWebBackendEventBus").BackendEventBus.socketState, o("WAWebCommsGating").isCommsInWorker(), o("WAWebOfflineHandler").OfflineMessageHandler.hasInitOfflineResumeManager()).sendLogs("offline-delivery-end-fallback-timer");
                    }
                }, 10000);
                yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey();
            }
            if (w()) {
                o("WAWebLazyPersistedQueue").schedulePersistedQueuesPreload();
            }
            o("WAWebLid1x1MigrationManager").ThreadMigrationManager.addDependentMigrationTask(o("WAWebDBFavoriteDatabaseMigrationToLid").migrateFavoritesDatabaseToLid);
            o("WAWebLid1x1MigrationManager").ThreadMigrationManager.addDependentMigrationTask(o("WAWebDBLabelAssociationDatabaseMigrationToLid").migrateLabelAssociationsDatabaseToLid);
            o("WAWebLid1x1MigrationManager").ThreadMigrationManager.addDependentMigrationTask(o("WAWebCartDbLidMigration").migrateCartDbLid);
            o("WAWebLid1x1MigrationManager").ThreadMigrationManager.addDependentMigrationTask(o("WAWebDBPnhThreadMigrationToGeneralLid").migratePhoneNumberHidingThreadsToGeneralLid);
            o("WAWebLid1x1MigrationManager").ThreadMigrationManager.addDependentMigrationTask(o("WAWebDBAfterReadSendingRollbackMigration").migrateAfterReadSendingRollback);
            o("WAWebAfterReadSendingRollbackListener").registerAfterReadSendingRollbackListener();
            if (o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get("WAReceivedBlocklistMigrationBefore1x1Migration")) {
                o("WAWebLid1x1MigrationManager").ThreadMigrationManager.addDependentMigrationTask(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield o("WAWebFetchAndUpdateBlocklistJob").fetchAndUpdateBlocklist("post-migration");
                }));
            }
            yield o("WAWebLid1x1MigrationManager").ThreadMigrationManager.executeMigrationIfNeeded();
            yield o("WAWebPassiveModeManager").PassiveTaskManager.waitForPassiveTaskEnd();
            yield o("WAWebSyncdCoreApi").initialize();
            const L = !(yield r("WAWebSyncBootstrap").isCriticalDataSynced());
            o("WAWebPageLoadLogging").addPageLoadQplAnnotation({
                syncd_critical_bootstrap_needed: L
            });
            if (L) {
                yield r("WAWebSyncBootstrap").syncCriticalData();
            } else {
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap] need to sync critical data: false"
                ])));
            }
            o("WAWebBackendApi").frontendFireAndForget("handleDeferredMessages", {});
            if (!o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled()) {
                yield B();
                if (o("WAWebCustomerManagerGating").customerManagerEnabled()) {
                    o("WAWebBackendApi").frontendFireAndForget("startServerLeadStageRepull", {});
                }
            }
            yield o("WAWebBackendApi").frontendSendAndReceive("initializePME", {});
            o("WAWebSubscriptions").runSubscriptionsManager();
            o("WAWebBackendApi").frontendFireAndForget("updatePushManager", {});
            o("WAWebBackendApi").frontendFireAndForget("updatePeriodicBackgroundSyncRegistration", {});
            x();
            o("WAWebInitBotGatingHelpers").initBotGatingHelpers().then(o("WAWebInitializeBots").initializeBots).finally(()=>o("WAWebTos").TosManager.run());
            o("WAWebStoreSpecialAbProps").storeSpecialAbProps();
            o("WAComms").startHandlingRequests();
        });
        return M.apply(this, arguments);
    }
    function w() {
        const e = o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
        const t = e?.fullCompleted === true || e?.recentCompleted === true;
        return o("WAWebUserPrefsAppStateSync").getAllCriticalDataSynced() && t;
    }
    function A(e) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e = {
            passive: false,
            pull: true
        }) {
            o("WAWebPageLoadLogging").startPageLoadQplMeasure("startWebComms");
            const l = o("WAWebCommsConfig").getCommsConfig(e);
            o("WAWebPageLoadLogging").startPageLoadQplMeasure("waitForMain");
            yield o("WAWebEventsWaitForMain").waitForMain();
            o("WAWebPageLoadLogging").endPageLoadQplMeasure("waitForMain");
            const s = !o("WAWebBuildConstants").WINDOWS_OFFLINE;
            o("WAWebCommsWorkerProxy").setStartCommsArgs({
                passive: e?.passive,
                pull: e?.pull
            });
            const u = o("WAWebCommsGating").isCommsInWorker();
            o("WAWebPageLoadLogging").addPageLoadQplAnnotationNow({
                comms_in_worker: u,
                comms_in_worker_expo_key: o("WAWebABPropsCache").getABPropExpoKey("waweb_comms_in_backend_worker") ?? void 0
            });
            if (u) {
                o("WAWebPageLoadLogging").startPageLoadQplMeasure("getBackendWorkerBridge");
                const c = yield o("WAWebBackendWorkerClient").getBackendWorkerBridge();
                o("WAWebPageLoadLogging").endPageLoadQplMeasure("getBackendWorkerBridge");
                o("WAComms").setCommsFactory(function() {
                    return o("WAWebCommsWorkerProxy").createCommsWorkerProxy(c);
                });
            }
            o("WAComms").startComms(r("WAWebCommsHandleStanza"), l, function(e) {
                return (I || (I = n("Promise"))).resolve(o("WAGzip").inflate(e));
            }, s);
            if (s) {
                o("WAWebPageLoadLogging").startPageLoadQplMeasure("waitForConnection");
                yield o("WAComms").waitForConnection();
                o("WAWebPageLoadLogging").endPageLoadQplMeasure("waitForConnection");
            }
            o("WAWebPageLoadLogging").endPageLoadQplMeasure("startWebComms");
        });
        return F.apply(this, arguments);
    }
    function O() {
        const t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()?.user;
        if (t != null) {
            o("WAWebWamGlobals").Global.set({
                psCountryCode: o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(t)
            });
        }
    }
    function B() {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let e;
            (e = o("WAWebBackendApi")).frontendFireAndForget("applyContactBusinessProps", {});
            e.frontendFireAndForget("restoreLabels", {});
            e.frontendFireAndForget("restoreQuickReplies", {});
            e.frontendFireAndForget("restoreLabelAssociations", {});
            e.frontendFireAndForget("restoreCarts", {});
            o("WAWebBootstrapPremiumMessages").restorePremiumMessages();
            o("WAWebBootstrapPremiumMessages").bindPremiumMessageListeners();
            e.frontendFireAndForget("restoreDataSharing3pdLid", {});
            o("WAWebCoexStateSyncStartup").startCoexStateSyncIfHosted().catch((e)=>{
                o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "startCoexStateSyncIfHosted: failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("coex-state-sync-startup-failed");
            });
            yield e.frontendSendAndReceive("restoreArchiveV2Settings", {});
            yield e.frontendSendAndReceive("initializeAgentLog", {});
            e.frontendFireAndForget("checkOrphanAssignments", {});
            e.frontendFireAndForget("restoreChatAssignments", {});
        });
        return W.apply(this, arguments);
    }
    function q() {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WAWebDBCreateLidPnMappings").flushLidPnMappingsToDb();
            if (o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled()) {
                o("WAWebTasksDefinitions").registerTasks();
                yield o("WAWebSyncContactsJob").runSyncDirtyContactsJob();
                if (o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
                    o("WAWebInitFavoritesFromStorage").restoreFavorites();
                }
                o("WAWebSyncd").markCollectionsForSync([
                    o("WAWebSyncdConst").CollectionName.Regular,
                    o("WAWebSyncdConst").CollectionName.RegularLow,
                    o("WAWebSyncdConst").CollectionName.RegularHigh
                ]);
                return;
            }
            o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][continueProgressiveHistorySyncProcessingV2] start backend"
            ])));
            r("WAWebSyncBootstrap").continueProgressiveHistorySyncProcessingV2(o("WAWebHistorySyncNotificationUtils").HistorySyncScheduleSource.BackendStart);
            o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                "init worker: startIndexer from initialSetup"
            ])));
            o("WAWebFtsClient").ftsClient.startIndexer().catch((e)=>{
                o("WALogger").WARN(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                    "init worker: error while calling startIndexer from initialSetup: ",
                    ""
                ])), e);
            });
            if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) {
                o("WAWebNewsletterRestoreMetadataWithLoadingStage").restoreNewsletterMetadataWithLoadingStage().finally(()=>{
                    o("WAWebBackendApi").frontendFireAndForget("clearStatusForRemovedContact", {});
                    if (o("WAWebUserPrefsMultiDevice").getNewsletterWasBootstrapped() && o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()) {
                        o("WAWebBackendApi").frontendFireAndForget("fillSubscribedStatusGaps", {});
                    }
                }).catch((e)=>{
                    o("WALogger").WARN(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                        "restoreNewsletterMetadata failed: ",
                        ""
                    ])), e);
                });
            } else {
                o("WAWebBackendApi").frontendFireAndForget("clearStatusForRemovedContact", {});
            }
            o("WAWebTasksDefinitions").registerTasks();
            o("WAWebSignalSessionCleanupJob").cleanupCorruptedSignalSessions();
            if (o("WAWebPushNotificationsGatingUtils").canSupportOfflineNotifications()) {
                o("WAWebBackgroundSyncReporter").setPushNotificationInteractionStatus();
                o("WAWebWamProcessWorkerData").processWorkerWamData(true);
            }
            yield o("WAWebSyncContactsJob").runSyncDirtyContactsJob();
            o("WAWebBackendApi").frontendFireAndForget("restoreRecentStickers", {});
            o("WAWebBackendApi").frontendFireAndForget("restoreFavoriteStickers", {});
            o("WAWebAdvDeviceInfoCheckJob").scheduleAdvDeviceInfoCheck();
            o("WAWebBackendApi").frontendFireAndForget("restoreCommunityActivity", {});
            o("WAWebHistorySyncProgress").updateHistorySyncProgressModel();
            o("WAWebInitFromStorage").restoreMediaUploadResult();
            o("WAWebBackendApi").frontendFireAndForget("restoreCustomerData", {});
            o("WAWebBackendApi").frontendFireAndForget("restoreUnjoinedSubgroups", {});
            o("WAWebInitFromStorage").restoreAccountLinkingSettings();
            o("WAWebInitFromStorage").restoreCrosspostAutoShareSettings();
            if (o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
                o("WAWebInitFavoritesFromStorage").restoreFavorites();
            }
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("restoreCTWASuggestions");
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("loadQuickPromotions", {
                trigger: "app-launch"
            });
            if (o("WAWebMobilePlatforms").isSMB()) {
                r("JSResourceForInteraction")("WAWebPrefetchBizBroadcastEntrypointEligibility").__setRef("WAWebStartBackend").load().then(({ prefetchBizBroadcastEntrypointEligibility: t })=>t()).catch((e)=>{
                    o("WALogger").WARN(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                        "[BB Pro] Eligibility prefetch module failed to load"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("bb-pro-eligibility-prefetch-load-failed");
                });
            }
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("fetchBizAiLargeScreensGate", {
                trigger: "app-launch"
            });
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("fetchBizAiWebSmartComposerAiListsGate", {
                trigger: "app-launch"
            });
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("fetchBizAiResponseSettingsV2Gate", {
                trigger: "app-launch"
            });
            o("WAWebGetReachoutTimelockJob").fetchReachoutTimelock();
        });
        return U.apply(this, arguments);
    }
    function V() {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebPushNotificationsGatingUtils").canSupportOfflineNotifications() && r("WAWebFeatureDetectionSwSupport").supported) {
                let e;
                if ((e = window.navigator.serviceWorker) != null && e.controller) {
                    yield r("WAWebSWBus").request(window.navigator.serviceWorker.controller, r("WAWebSWBusActions").STOP_COMMS).catch((e)=>{
                        o("WALogger").WARN(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                            "[push-notification] Failed to request stopComms for service worker, error: ",
                            ""
                        ])), e);
                    });
                }
                window.navigator.serviceWorker?.ready?.then((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const n = (yield e == null || e.getNotifications == null ? void 0 : e.getNotifications()) ?? [];
                        n.forEach((e)=>e.close());
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()).catch(function(e) {
                    o("WALogger").WARN(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                        "[push-notification] Failed to close existing notifications, error: ",
                        ""
                    ])), e);
                });
            }
        });
        return H.apply(this, arguments);
    }
    function G() {
        return z.apply(this, arguments);
    }
    function z() {
        z = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = {
                pull: true
            };
            o("WAWebGetMessageCache").setMessageCache(o("WAWebMessageProcessorCache").messageProcessorCache);
            yield o("WAWebRegisterPassiveTasks").registerPassiveTaskForStartUp();
            o("WAWebHandleSingleMsgWorkerCompatible").setInstance(o("WAWebHandleSingleMsg").handleSingleMsgImpl);
            o("WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible").setInstance(o("WAWebMmSignalSharingExpirationWindowUtils").updateMmSignalSharingExpirationWindowImpl);
            o("WAWebSyncdOrphanWorkerCompatible").setInstance(o("WAWebSyncdOrphan").checkOrphanMutations);
            o("WAWebMessageInsertDebugPlaceholderWorkerCompatible").setInstance(o("WAWebMessageInsertDebugPlaceholder").maybeInsertDebugPlaceholder);
            o("WAWebIdentityChangeApiWorkerCompatible").setInstance({
                handleNewIdentity: o("WAWebIdentityChangeApi").handleNewIdentityImpl,
                clearDeviceRecordForIdentityChange: o("WAWebIdentityChangeApi").clearDeviceRecordForIdentityChangeImpl
            });
            o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").setInstance(o("WAWebOfflineResumeMsgProcessReporter").msgProcessReporter);
            yield A(e);
        });
        return z.apply(this, arguments);
    }
    l.setupStartBackendListeners = D;
    l.startBackend = $;
    l.startWebComms = A;
}, 98);