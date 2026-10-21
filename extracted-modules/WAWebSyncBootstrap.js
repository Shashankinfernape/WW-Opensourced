__d("WAWebSyncBootstrap", [
    "$InternalEnum",
    "Promise",
    "QPLFlow",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebAccountSyncJob",
    "WAWebApiHistorySyncNotification",
    "WAWebAppTracker",
    "WAWebBackendEventBus",
    "WAWebBrokerGlobalAppState",
    "WAWebClientFeatureFlags",
    "WAWebCoreActionsODS",
    "WAWebDbEncryptionKey",
    "WAWebFetchAndUpdateBlocklistJob",
    "WAWebFetchOwnUsernameOnPairing",
    "WAWebForceFlushWamBuffers",
    "WAWebHandleAccountSyncNotification",
    "WAWebHandleHistorySyncChunk",
    "WAWebHandleWorkerCompatibleRecentSyncChunk",
    "WAWebHistorySyncNotificationUtils",
    "WAWebJestE2ELogUtils",
    "WAWebJobOrchestrator",
    "WAWebLogoutReasonConstants",
    "WAWebMdBootstrapDataAppliedWamEvent",
    "WAWebMetricsAttributionActions",
    "WAWebNonAddressBookContactsJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebProtobufsHistorySync.pb",
    "WAWebQueryAndUpdateGroupMetadataJob",
    "WAWebSchemaHistorySyncNotification",
    "WAWebSocketLogoutJob",
    "WAWebSyncContactJob",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebSyncd",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebSyncdGetChat",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebUserPrefsAppStateSync",
    "WAWebUserPrefsHistorySync",
    "WAWebWamEnumMdBootstrapPayloadType",
    "WAWebWamEnumMdBootstrapSource",
    "WAWebWamEnumWebcScenarioType",
    "WAWebWamMemoryStat",
    "WAWebWindowsHybridBridgeInitiator",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "cr:17219",
    "getErrorSafe",
    "getSafeQplErrorMessage",
    "qpl",
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
    let T;
    let D;
    let x;
    let $;
    let P;
    let N;
    let M;
    let w;
    let A;
    let F;
    let O;
    let B;
    let W;
    let q;
    let U;
    let V;
    let H;
    let G;
    let z;
    let j;
    let K;
    let Q;
    let X;
    let Y;
    let J;
    let Z;
    let ee;
    let te;
    let ne;
    let re;
    let oe;
    let ae;
    let ie;
    let le;
    let se;
    const ue = r("requireDeferred")("WAWebBootstrapNewsletter").__setRef("WAWebSyncBootstrap");
    const ce = r("qpl")._(891423540, "2533");
    const de = n("cr:17219") == null ? undefined : n("cr:17219").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebSyncBootstrap);
    const me = 40;
    const pe = 20;
    const _e = 180;
    const fe = n("$InternalEnum").Mirrored([
        "NotStarted",
        "InProcess",
        "Completed"
    ]);
    const ge = {
        initialChatHistory: false,
        readReceipts: false,
        syncdCritical: false
    };
    const he = {
        initialChatHistoryTotalMsg: -1,
        initialChatHistoryTotalChats: -1
    };
    const ye = 20;
    const Ce = (()=>{
        function t() {
            this.$1 = {};
            this.$2 = he;
            this.$6 = false;
            this.$7 = null;
            this.$8 = null;
            this.$9 = null;
            this.$10 = false;
            this.initState();
        }
        const t_prototype = t.prototype;
        t_prototype.initState = function() {
            this.$1 = babelHelpers.extends({}, ge);
            this.$2 = babelHelpers.extends({}, he);
            this.$3 = fe.NotStarted;
            this.$4 = fe.NotStarted;
            this.$5 = fe.NotStarted;
        };
        t_prototype.$11 = function() {
            for(const e in this.$1){
                if (!this.$1[e]) {
                    return false;
                }
            }
            return true;
        };
        t_prototype.$12 = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap][history sync] completed sync for ",
                    ""
                ])), t);
                this.$1[t] = true;
                if (this.$11()) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[bootstrap][history sync] critical sync done"
                    ])));
                    yield o("WAWebUserPrefsAppStateSync").setAllCriticalDataSynced();
                    o("WAWebBackendEventBus").BackendEventBus.triggerCriticalSyncDone();
                    r("WAWebBrokerGlobalAppState").initOrUpdateTracking(o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.INITIAL_PAIRING);
                    o("WAWebWamMemoryStat").setCurrentMemoryScenario(o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE);
                    this.syncNonCriticalData();
                }
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        t_prototype.$13 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "start contact sync for ",
                    " chunks of contacts during the initial sync"
                ])), e ? t.length + 1 : 0).tags("contact-sync");
                if (e != null) {
                    yield o("WAWebSyncContactJob").syncContactListJob(Array.from(e), false, "query");
                }
                for(let n = 0; n < t.length; n++){
                    const r = Array.from(t[n]);
                    yield o("WAPromiseDelays").delayMs(pe * 1000);
                    yield o("WAWebSyncContactJob").syncContactListJob(r, true, "query");
                }
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "initial contact sync completes"
                ]))).tags("contact-sync");
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$14 = function(t) {
            if (t == null) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "syncMostRecentDevices has no contact to sync during bootstrap"
                ]))).tags("contact-sync");
                return (se || (se = n("Promise"))).resolve();
            }
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "sync ",
                " contacts for device info during the initial sync"
            ])), t.size).tags("contact-sync");
            const e = Array.from(t);
            return o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(e, null, null).catch((e)=>{
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Sync device failed"
                ]))).verbose().sendLogs(`Sync device failed: ${String(e)}`);
            });
        };
        t_prototype.setReadReceiptsSynced = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield this.$12("readReceipts");
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.setInitialChatHistorySynced = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield this.$12("initialChatHistory");
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] initial chat history synced."
                ])));
                o("WAWebSyncdGetChat").logLidPnChatDistribution({});
                be.continueProgressiveHistorySyncProcessingV2(o("WAWebHistorySyncNotificationUtils").HistorySyncScheduleSource.InitialSyncComplete);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.setSyncDCriticalSynced = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                this.$3 = fe.Completed;
                if (!this.$1.syncdCritical) {
                    yield this.$12("syncdCritical");
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.syncNonCriticalData = function() {
            const e = this;
            let t = [];
            this.$5 = fe.InProcess;
            o("WAWebQueryAndUpdateGroupMetadataJob").queryAndUpdateAllGroupMetadata({
                isHistorySyncInProgress: true
            }).then(()=>{
                t = o("WAWebNonAddressBookContactsJob").getAllContactsFromChatCollectionIntoChunks();
                e.$14(t[0]).catch((e)=>{
                    o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[bootstrap] initial device list sync failed"
                    ]))).catching(e).sendLogs("bootstrap-initial-device-list-sync-failed", {
                        sampling: 0.01
                    });
                });
                o("WAWebNonAddressBookContactsJob").getAndUpdateNonAddressBookContacts().catch((e)=>{
                    o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[bootstrap] non-address book contacts sync failed"
                    ]))).catching(e).sendLogs("bootstrap-non-address-book-contacts-sync-failed", {
                        sampling: 0.01
                    });
                });
            }).then(()=>{
                self.setTimeout(function() {
                    e.$13(t[0], t.slice(1, t.length));
                }, me * 1000);
            }).finally(()=>{
                e.$5 = fe.Completed;
            });
            o("WAWebHandleAccountSyncNotification").getAndUpdateStatus().catch((e)=>{
                o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap] status sync failed"
                ]))).catching(e).sendLogs("bootstrap-status-sync-failed", {
                    sampling: 0.01
                });
            });
            o("WAWebAccountSyncJob").getAndUpdateProfilePicture().catch((e)=>{
                o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap] profile picture sync failed"
                ]))).catching(e).sendLogs("bootstrap-profile-picture-sync-failed", {
                    sampling: 0.01
                });
            });
            o("WAWebFetchAndUpdateBlocklistJob").fetchAndUpdateBlocklist("bootstrap");
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("updateOptOutList");
            ue.load().then(({ bootstrapNewsletterBackend })=>bootstrapNewsletterBackend());
            o("WAWebFetchOwnUsernameOnPairing").initOwnUsernameFetchOnPairing();
            this.$4 = fe.InProcess;
            o("WAWebSyncd").markCollectionsForSync([
                o("WAWebSyncdConst").CollectionName.Regular,
                o("WAWebSyncdConst").CollectionName.RegularLow,
                o("WAWebSyncdConst").CollectionName.RegularHigh
            ]).then(()=>{
                e.$4 = fe.Completed;
                de?.contacts?.initialize();
            }).catch((e)=>{
                o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap] mark collection for sync failed"
                ]))).catching(e).sendLogs("bootstrap-mark-collection-for-sync-failed", {
                    sampling: 0.01
                });
            });
        };
        t_prototype.markInitialHistorySyncCountDebugStats = function(initialChatHistoryTotalMsg, initialChatHistoryTotalChats) {
            this.$2 = {
                initialChatHistoryTotalMsg,
                initialChatHistoryTotalChats
            };
        };
        t_prototype.isSyncDCriticalDataSyncInProcess = function() {
            return this.$3 === fe.InProcess;
        };
        t_prototype.isSyncDBootstrapInProcess = function() {
            return this.$3 === fe.InProcess || this.$4 === fe.InProcess;
        };
        t_prototype.isSyncDBootstrapGroupMetadataQueryInProcess = function() {
            return this.$5 === fe.InProcess;
        };
        t_prototype.$15 = function() {
            const e = this;
            if (this.$7 == null) {
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap][history sync] setting critical data syncd timeout (",
                    ")"
                ])), _e);
                this.$7 = self.setTimeout(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const t = yield e.$16("timeout");
                    if (!t) {
                        try {
                            const n = yield e.getCriticalSyncDebugSummary();
                            o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                                "[bootstrap][syncd] syncDCriticalDataState: ",
                                "\nsyncDNonCriticalDataState: ",
                                "\ndebugSummary: ",
                                ""
                            ], [
                                "[bootstrap][syncd] syncDCriticalDataState: ",
                                "\\nsyncDNonCriticalDataState: ",
                                "\\ndebugSummary: ",
                                ""
                            ])), e.$3, e.$4, n);
                            o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                                "[bootstrap][syncd] syncd critical data timeout exceeded, logging out."
                            ]))).tags("bootstrap", "syncd", "logout").sendLogs("bootstrap-syncd-timeout-logout", {
                                sampling: 0.1
                            });
                            yield o("WAPromiseDelays").delayMs(5000);
                        } catch (e) {}
                        o("WAWebMetricsAttributionActions").stopAllHistorySyncAttributionTracking();
                        o("WAWebForceFlushWamBuffers").forceFlushAllWamAndQplBuffers();
                        o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole("syncd critical data timeout exceeded, logging out");
                        o("WAWebCoreActionsODS").logSessionForcedLogout();
                        yield o("WAWebSocketLogoutJob").socketLogout(o("WAWebLogoutReasonConstants").LogoutReason.SyncdTimeout);
                    }
                    const r = yield o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete();
                    if (r !== true) {
                        try {
                            const a = yield e.getCriticalSyncDebugSummary();
                            o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                                "[bootstrap][history-sync] history sync debug summary: ",
                                ""
                            ])), a);
                            o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                                "[bootstrap][history-sync] history sync critical data timeout exceeded, logging out."
                            ]))).tags("bootstrap", "history-sync", "logout").sendLogs("bootstrap-history-sync-timeout-logout", {
                                sampling: 0.1
                            });
                            yield o("WAPromiseDelays").delayMs(5000);
                        } catch (e) {}
                        o("WAWebForceFlushWamBuffers").forceFlushAllWamAndQplBuffers();
                        o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole("history sync critical data timeout exceeded, logging out");
                        o("WAWebCoreActionsODS").logSessionForcedLogout();
                        yield o("WAWebSocketLogoutJob").socketLogout(o("WAWebLogoutReasonConstants").LogoutReason.HistorySyncTimeout);
                    }
                    o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                        "[bootstrap][history sync] all critical data synced within timeout period"
                    ])));
                }), _e * 1000);
            }
        };
        t_prototype.$16 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield o("WAWebSyncdDb").getSyncActionsRows([
                    "action"
                ], [
                    o("WAWebSyncdConst").Actions.SettingPushName
                ]);
                const length = t.filter((e)=>e.actionState === o("WAWebSyncdConst").SyncActionState.Success).length;
                const r = t.map((e)=>e.actionState ?? "null").join(",");
                const a = length > 0;
                o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap][syncd] push name persistence check: source=",
                    ", complete=",
                    ", actionRows=",
                    ", successRows=",
                    ", actionStates=",
                    ""
                ])), e, a, t.length, length, r || "none");
                return a;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.setSyncDCriticalDataSyncCompleted = function() {
            if (this.$7 != null) {
                o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap][syncd] critical data completion WAM: session ID lookup start"
                ])));
                o("WAWebSyncdMdSyncFieldstatMeta").MdSyncFieldStatsMeta.getMdSessionId().then((e)=>{
                    o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                        "[bootstrap][syncd] critical data completion WAM: session ID lookup end"
                    ])));
                    new (o("WAWebMdBootstrapDataAppliedWamEvent")).MdBootstrapDataAppliedWamEvent({
                        mdBootstrapPayloadType: o("WAWebWamEnumMdBootstrapPayloadType").MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL,
                        mdBootstrapSource: o("WAWebWamEnumMdBootstrapSource").MD_BOOTSTRAP_SOURCE.APP_STATE,
                        mdSessionId: e,
                        mdTimestamp: o("WATimeUtils").unixTimeMs()
                    }).commit();
                    o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                        "[bootstrap][syncd] critical data completion WAM: commit scheduled"
                    ])));
                }).catch((e)=>{
                    o("WALogger").WARN(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                        "[bootstrap][syncd] critical data completion WAM: commit failed"
                    ]))).catching(r("getErrorSafe")(e));
                });
            }
        };
        t_prototype.getCriticalSyncDebugSummary = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (yield this.isCriticalDataSynced()) {
                    return "-------\nAll critical data synced\n-------\n\n";
                }
                const e = yield o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
                return `-------
 Initial history sync complete: ${e ? "true" : this.$1.initialChatHistory.toString()}
 Initial msgs: ${this.$2.initialChatHistoryTotalMsg}, initial chats: ${this.$2.initialChatHistoryTotalChats}
 Receipt sync complete: ${this.$1.readReceipts.toString()} 
 ${`Critical collection sync complete: ${this.$1.syncdCritical.toString()} 
-------
`}`;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.isCriticalDataSynced = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                this.$6 = this.$6 || (yield o("WAWebUserPrefsAppStateSync").getAllCriticalDataSynced());
                return this.$6;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.syncCriticalData = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this;
                r("WAWebBrokerGlobalAppState").initOrUpdateTracking(o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.INITIAL_PAIRING);
                o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap][history sync] need to sync critical data: true"
                ])));
                const t = yield this.getCriticalSyncDebugSummary();
                o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap][history sync] ",
                    ""
                ])), t);
                o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap] syncing my device list"
                ]))).tags("history-sync");
                const a = o("WAWebSyncDeviceAdvDeviceListJob").syncMyDeviceListJob();
                const i = new (se || (se = n("Promise")))(function(t, n) {
                    o("WAWebAccountSyncJob").updatePrivacySettings().then(()=>e.setReadReceiptsSynced()).then(t).catch(n);
                }).catch((e)=>{
                    const t = r("getErrorSafe")(e);
                    o("WALogger").ERROR(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                        "failed to sync privacy settings"
                    ]))).catching(t).verbose().sendLogs("failed to update privacy settings from privacy request to server");
                    o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole("failed to sync privacy settings, logging out");
                    o("WAWebCoreActionsODS").logSessionForcedLogout();
                    o("WAWebSocketLogoutJob").socketLogout(o("WAWebLogoutReasonConstants").LogoutReason.AccountSyncError);
                });
                this.$15();
                this.$3 = fe.InProcess;
                const l = a.then(()=>o("WAWebSyncd").markCollectionsForSync([
                        o("WAWebSyncdConst").CollectionName.CriticalBlock,
                        o("WAWebSyncdConst").CollectionName.CriticalUnblockLow
                    ])).then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                        "[bootstrap][syncd] critical collection processing completed: state=",
                        ", syncdCritical=",
                        ""
                    ])), e.$3, e.$1.syncdCritical);
                    if (!e.$1.syncdCritical) {
                        const t = yield e.$16("post_collection");
                        if (t) {
                            yield e.setSyncDCriticalSynced();
                            e.setSyncDCriticalDataSyncCompleted();
                        }
                    }
                }));
                const s = yield o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete();
                if (s === true) {
                    yield this.setInitialChatHistorySynced();
                }
                const u = o("WAWebAccountSyncJob").updateDefaultDisappearingMode().catch((e)=>{
                    const t = r("getErrorSafe")(e);
                    o("WALogger").ERROR(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                        "failed to sync default disappearing mode"
                    ]))).catching(t).verbose().sendLogs("failed initial sync of default disappearing mode");
                });
                yield se.all([
                    i,
                    l,
                    u
                ]);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$17 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd) {
                    o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] Skip processLoop, until main is loaded"
                    ]))).tags("history-sync");
                    return;
                }
                const e = yield o("WAWebApiHistorySyncNotification").fetchNextHistorySyncChunkForProcessing();
                if (!e) {
                    o("WALogger").LOG(O || (O = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] no chunk found"
                    ]))).tags("history-sync");
                    return;
                }
                const t = o("QPLFlow").startQPLFlow(ce, {
                    annotations: {
                        int: {
                            syncType: e.syncType
                        }
                    },
                    timeoutInMs: 120000
                });
                try {
                    o("WALogger").LOG(B || (B = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] processLoop picked up chunk"
                    ])));
                    if (e.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT && e.chunkOrder != null) {
                        const n = e.msgKey;
                        if (o("WAWebApiHistorySyncNotification").recentSyncChunkHandlingTriedCount[n] != null) {
                            o("WAWebApiHistorySyncNotification").recentSyncChunkHandlingTriedCount[n]++;
                            if (o("WAWebApiHistorySyncNotification").recentSyncChunkHandlingTriedCount[n] > ye) {
                                o("WALogger").ERROR(W || (W = babelHelpers.taggedTemplateLiteralLoose([
                                    "[history sync][continueProgressiveHistorySyncProcessingV2] recent sync chunk handling retry limit reached"
                                ]))).sendLogs("history-sync-recent-sync-chunk-handling-retry-limit");
                            }
                        } else {
                            o("WAWebApiHistorySyncNotification").recentSyncChunkHandlingTriedCount[n] = 1;
                        }
                    }
                    if (e.syncType === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT) {
                        yield o("WAWebHandleWorkerCompatibleRecentSyncChunk").handleWorkerCompatibleRecentSyncChunk(e, t);
                    } else {
                        yield o("WAWebHandleHistorySyncChunk").handleHistorySyncChunk(e);
                    }
                    t.endSuccess();
                } catch (error) {
                    t.endFail(o("getSafeQplErrorMessage").getSafeQPLErrorMessage(error));
                    throw error;
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$18 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WALogger").LOG(q || (q = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] job starts"
                ])));
                try {
                    yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey();
                    yield this.$17();
                } catch (error) {
                    const e = r("getErrorSafe")(error);
                    o("WALogger").ERROR(U || (U = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] _progressiveHistorySyncRun failed"
                    ]))).catching(e);
                }
                o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] finish main flow"
                ])));
                const t = yield o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
                if (t?.recentCompleted === true) {
                    let n = true;
                    o("WALogger").LOG(H || (H = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] recent sync finishes, check remaining on demand sync notifications"
                    ])));
                    const a = yield o("WAWebSchemaHistorySyncNotification").getHistorySyncNotificationTable().equals([
                        "processed",
                        "syncType"
                    ], [
                        0,
                        o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.ON_DEMAND
                    ], {
                        shouldDecrypt: false
                    });
                    if (a.length > 0) {
                        n = false;
                        this.continueProgressiveHistorySyncProcessingV2(o("WAWebHistorySyncNotificationUtils").HistorySyncScheduleSource.LastProcessedNotification);
                    } else {
                        o("WALogger").LOG(G || (G = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no on demand notifications"
                        ])));
                    }
                    if (o("WAWebClientFeatureFlags").isFeatureEnabled("debug_1_year_history_sync")) {
                        o("WALogger").LOG(z || (z = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][continueProgressiveHistorySyncProcessingV2] recent sync finishes, check remaining full sync notifications"
                        ])));
                        const i = yield o("WAWebSchemaHistorySyncNotification").getHistorySyncNotificationTable().equals([
                            "processed",
                            "syncType"
                        ], [
                            0,
                            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.FULL
                        ], {
                            shouldDecrypt: false
                        });
                        if (i.length > 0) {
                            n = false;
                            this.continueProgressiveHistorySyncProcessingV2(o("WAWebHistorySyncNotificationUtils").HistorySyncScheduleSource.LastProcessedNotification);
                        } else {
                            o("WALogger").LOG(j || (j = babelHelpers.taggedTemplateLiteralLoose([
                                "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no on full sync notifications"
                            ])));
                        }
                    }
                    if (n) {
                        o("WAWebMetricsAttributionActions").stopAllHistorySyncAttributionTracking();
                    }
                    return;
                }
                o("WALogger").LOG(K || (K = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] recent sync is incompleted, check remaining recent sync notifications"
                ])));
                const l = yield o("WAWebHistorySyncNotificationUtils").getUnprocessedRecentSyncNotifications();
                if (l.length === 0) {
                    o("WALogger").LOG(Q || (Q = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no recent notifications"
                    ])));
                    return;
                }
                const chunkOrder = l[0].chunkOrder;
                if (chunkOrder == null) {
                    o("WALogger").LOG(X || (X = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as first recent notification doesn't have chunk order"
                    ])));
                    return;
                }
                const u = yield o("WAWebUserPrefsHistorySync").getLastHistoryRecentSyncedChunk();
                o("WALogger").LOG(Y || (Y = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] next unprocessed recent notification has chunk order: ",
                    ", last chunk order: ",
                    ""
                ])), chunkOrder, u?.chunkOrder);
                if (u != null && u.chunkOrder + 1 !== chunkOrder && chunkOrder !== 1) {
                    o("WALogger").LOG(J || (J = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no recent notifications with correct chunk order"
                    ])));
                    return;
                }
                if (u?.chunkOrder === this.$8 && chunkOrder === this.$9) {
                    if (!this.$10) {
                        this.$10 = true;
                        o("WALogger").ERROR(Z || (Z = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] loop detected, unexpected last chunk order"
                        ]))).sendLogs("history-sync-unexpected-chunk-order", {
                            sampling: 0.01
                        });
                    }
                    yield o("WAPromiseDelays").delayMs(5000);
                    return;
                }
                this.$8 = u?.chunkOrder;
                this.$9 = chunkOrder;
                if (o("WAWebApiHistorySyncNotification").recentSyncChunkHandlingTriedCount[l[0].msgKey] > ye) {
                    o("WALogger").LOG(ee || (ee = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as recent notification with order ",
                        " fails too many times"
                    ])), chunkOrder);
                    return;
                }
                o("WALogger").LOG(te || (te = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] init next run"
                ])));
                this.continueProgressiveHistorySyncProcessingV2(o("WAWebHistorySyncNotificationUtils").HistorySyncScheduleSource.LastProcessedNotification);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.continueProgressiveHistorySyncProcessingV2 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                if (!this.$6 && this.$1.initialChatHistory !== true) {
                    o("WALogger").LOG(ne || (ne = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] Skip job scheduling as initial chat sync is incomplete"
                    ])));
                    return (se || (se = n("Promise"))).resolve();
                }
                if (e === o("WAWebHistorySyncNotificationUtils").HistorySyncScheduleSource.BackendStart) {
                    const a = yield o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
                    if (a?.recentCompleted === true) {
                        o("WALogger").LOG(re || (re = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][continueProgressiveHistorySyncProcessingV2] Skip job scheduling as recent sync is complete when starting backend"
                        ])));
                        return (se || (se = n("Promise"))).resolve();
                    }
                }
                return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("continueProgressiveHistorySyncProcessingV2", (()=>{
                    const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                        o("WALogger").LOG(oe || (oe = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][continueProgressiveHistorySyncProcessingV2] job is scheduled, source: ",
                            ""
                        ])), e);
                        return t.$18();
                    });
                    return function(e) {
                        return r.apply(this, arguments);
                    };
                })(), {
                    priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.HISTORY_SYNC,
                    maxTimeoutMs: 120000
                }).waitUntilCompleted().catch((e)=>{
                    const t = r("getErrorSafe")(e);
                    o("WALogger").ERROR(ae || (ae = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] error while running job"
                    ]))).catching(t);
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getIsHistorySyncRunning = function() {
            const e = o("WAWebJobOrchestrator").getInstance();
            const t = e.getSnapshot(o("WAJobOrchestratorTypes").JOB_PRIORITY.HISTORY_SYNC);
            if (t != null && t.continueProgressiveHistorySyncProcessingV2 != null) {
                return t.continueProgressiveHistorySyncProcessingV2 > 0;
            }
            return false;
        };
        return t;
    })();
    var be = new Ce;
    o("WAWebBackendEventBus").BackendEventBus.onInitialChatHistorySynced(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.CriticalSync);
        yield be.setInitialChatHistorySynced();
    }));
    o("WAWebBackendEventBus").BackendEventBus.onLogout(function() {
        be.initState();
    });
    o("WAWebBackendEventBus").BackendEventBus.onRecentChatHistorySynced(function() {
        const e = o("WAWebJobOrchestrator").getInstance();
        o("WALogger").LOG(ie || (ie = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync][continueProgressiveHistorySyncProcessingV2] clearing bucket queue for type ",
            ""
        ])), o("WAJobOrchestratorTypes").JOB_PRIORITY.HISTORY_SYNC);
        e.clearQueueByPriority(o("WAJobOrchestratorTypes").JOB_PRIORITY.HISTORY_SYNC);
    });
    o("WAWebBackendEventBus").BackendEventBus.onFullChatHistorySynced(function() {
        const e = o("WAWebJobOrchestrator").getInstance();
        o("WALogger").LOG(le || (le = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync][continueProgressiveHistorySyncProcessingV2] clearing bucket queue for type ",
            ""
        ])), o("WAJobOrchestratorTypes").JOB_PRIORITY.HISTORY_SYNC);
        e.clearQueueByPriority(o("WAJobOrchestratorTypes").JOB_PRIORITY.HISTORY_SYNC);
    });
    l.default = be;
}, 98);