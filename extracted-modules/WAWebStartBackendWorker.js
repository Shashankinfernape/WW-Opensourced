__d("WAWebStartBackendWorker", [
    "Promise",
    "QPLFlow",
    "WACrossWorkerPortal",
    "WAErrors",
    "WALogger",
    "WATimeUtils",
    "WATransferableResult",
    "WAWap",
    "WAWebABPropsCache",
    "WAWebApiHydrateWidsUtil",
    "WAWebAppTracker",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackendWorkerBridge",
    "WAWebBackendWorkerClient",
    "WAWebBackendWorkerInitState",
    "WAWebBackendWorkerV2Resource",
    "WAWebCommsHandleStanza",
    "WAWebCommsWorkerProxy",
    "WAWebCommsWorkerReady",
    "WAWebCrashlog",
    "WAWebGetMessageCache",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebIdentityChangeApiWorkerCompatible",
    "WAWebLogger",
    "WAWebMainThreadQplHandler",
    "WAWebMainThreadUploadManagerHandler",
    "WAWebMediaHosts",
    "WAWebMediaHostsRawStateManager",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMsgKey",
    "WAWebNetworkStatusStateManager",
    "WAWebNoiseInfoMainThread",
    "WAWebNoop",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebPageLoadLogging",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebRegisterPassiveTasksForConnect",
    "WAWebSyncdOrphanWorkerCompatible",
    "WAWebUA",
    "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsScreenLockMainThread",
    "WAWebUserPrefsTabMutex",
    "WAWebWorkerSafeBackendApi",
    "WAXMultiSiteWebWorkerV4HasteResponseControllerRouteBuilder",
    "WAXMultiSiteWebWorkerV4InitScriptControllerRouteBuilder",
    "WebWorkerV4Resource",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "getSafeQplErrorMessage",
    "gkx",
    "qpl",
    "supportsModuleWorker"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    const g = [
        "serializedError"
    ];
    let h;
    function y(e) {
        throw new TypeError(`"${e}" is read-only`);
    }
    const C = `WAWebBackendWorker-${o("WAWebUserPrefsTabMutex").THIS_TAB}`;
    const b = "worker-killswitch-stolen";
    const v = r("qpl")._(891427260, "2714");
    const S = new Map;
    const R = {
        initScriptRouteBuilder: r("WAXMultiSiteWebWorkerV4InitScriptControllerRouteBuilder"),
        hasteResponseRouteBuilder: r("WAXMultiSiteWebWorkerV4HasteResponseControllerRouteBuilder")
    };
    function L(e) {
        const t = null;
        const n = {
            onmessage: t,
            postMessage: function(n, r) {
                e.postMessage(n, r);
            },
            close: function() {
                e.terminate();
            }
        };
        e.addEventListener("message", function(e) {
            if (n.onmessage != null) {
                n.onmessage(e);
            }
        });
        return n;
    }
    function E() {
        let t;
        const a = o("WAWebBackendWorkerBridge").createBridge([
            {
                namespace: "abPropsExposure",
                handlers: {
                    recordExposure: function({ configCode: e }) {
                        o("WAWebABPropsCache").saveExposure(e);
                    }
                }
            },
            {
                namespace: "qpl",
                handlers: {
                    dispatch: function(t) {
                        return o("WAWebMainThreadQplHandler").handleQplBridgeMessage(t);
                    }
                }
            },
            {
                namespace: "backendEventBus",
                handlers: {
                    triggerAppStateSyncCompleted: function({ collectionDetails: e }) {
                        o("WAWebBackendEventBus").BackendEventBus.triggerAppStateSyncCompleted(e);
                    },
                    triggerLogout: function() {
                        o("WAWebBackendEventBus").BackendEventBus.triggerLogout();
                    },
                    triggerRefreshQR: function() {
                        o("WAWebBackendEventBus").BackendEventBus.triggerRefreshQR();
                    },
                    triggerInitialChatHistorySynced: function() {
                        o("WAWebBackendEventBus").BackendEventBus.triggerInitialChatHistorySynced();
                    },
                    triggerRecentChatHistorySynced: function() {
                        o("WAWebBackendEventBus").BackendEventBus.triggerRecentChatHistorySynced();
                    },
                    triggerFullChatHistorySynced: function() {
                        o("WAWebBackendEventBus").BackendEventBus.triggerFullChatHistorySynced();
                    },
                    triggerCriticalSyncDone: function() {
                        o("WAWebBackendEventBus").BackendEventBus.triggerCriticalSyncDone();
                    },
                    triggerStorageInitializationError: function() {
                        o("WAWebBackendEventBus").BackendEventBus.triggerStorageInitializationError();
                    },
                    triggerSocketStreamDisconnected: function() {
                        o("WAWebBackendEventBus").BackendEventBus.triggerSocketStreamDisconnected();
                    },
                    triggerOpenSocketStream: function() {
                        o("WAWebBackendEventBus").BackendEventBus.triggerOpenSocketStream();
                    },
                    triggerReconnectSocket: function() {
                        o("WAWebBackendEventBus").BackendEventBus.triggerReconnectSocket();
                    },
                    triggerSetSocketState: function({ state: e }) {
                        o("WAWebBackendEventBus").BackendEventBus.triggerSetSocketState(e);
                    },
                    triggerMainStreamModeReady: function() {
                        o("WAWebBackendEventBus").BackendEventBus.triggerMainStreamModeReady();
                    },
                    triggerOfflineProcessReady: function() {
                        o("WAWebBackendEventBus").BackendEventBus.triggerOfflineProcessReady();
                    },
                    triggerOfflineDeliveryEnd: function() {
                        o("WAWebBackendEventBus").BackendEventBus.triggerOfflineDeliveryEnd();
                    },
                    triggerOfflineDeliveryStateReset: function() {
                        o("WAWebBackendEventBus").BackendEventBus.triggerOfflineDeliveryStateReset();
                    },
                    triggerAbPropsUpdate: function(t) {
                        o("WAWebBackendEventBus").BackendEventBus.triggerAbPropsUpdate(t);
                    },
                    triggerAbPropsLoaded: function() {
                        o("WAWebBackendEventBus").BackendEventBus.triggerAbPropsLoaded();
                    },
                    triggerPrimaryFeaturesSynced: function({ changedFeatures: e }) {
                        o("WAWebBackendEventBus").BackendEventBus.triggerPrimaryFeaturesSynced(new Set(e));
                    }
                }
            },
            {
                namespace: "mainthread_callbacks",
                handlers: {
                    handleSingleMsg: function(t) {
                        o("WAWebApiHydrateWidsUtil").hydrateWids(t);
                        return o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg(babelHelpers.extends({}, t, {
                            newMsg: babelHelpers.extends({}, t.newMsg, {
                                id: r("WAWebMsgKey").from(t.newMsg.id)
                            })
                        }));
                    },
                    checkOrphanMutations: function({ chatIds: e, msgIds: n, threadIds: r }) {
                        return o("WAWebSyncdOrphanWorkerCompatible").checkOrphanMutations(n, e, r);
                    },
                    maybeInsertDebugPlaceholder: function(t) {
                        o("WAWebApiHydrateWidsUtil").hydrateWids(t);
                        return o("WAWebMessageInsertDebugPlaceholderWorkerCompatible").maybeInsertDebugPlaceholder(t);
                    },
                    updateMmSignalSharingExpirationWindow: function({ contextInfo: e, msg: n }) {
                        o("WAWebApiHydrateWidsUtil").hydrateWids(n);
                        return o("WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible").updateMmSignalSharingExpirationWindow(n, e);
                    }
                }
            },
            {
                namespace: "mainthread_jobmanager",
                handlers: {
                    fireAndForget: function(t) {
                        o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().fireAndForget(t);
                    },
                    waitUntilPersisted: function(t) {
                        return o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().waitUntilPersisted(t);
                    },
                    waitUntilCompleted: function(t) {
                        return o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().waitUntilCompleted(t);
                    },
                    loadAndRunJobFromId: function({ jobId: e }) {
                        return o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().loadAndRunJobFromId(e);
                    },
                    deletePersistedJob: (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ jobId: t }) {
                            yield o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().accessors.deletePersistedJob(t);
                        });
                        function t(t) {
                            return e.apply(this, arguments);
                        }
                        return t;
                    })(),
                    maybeCreateJob: function(t) {
                        return o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().accessors.maybeCreateJob(t);
                    }
                }
            },
            {
                namespace: "mainthread_crashlog",
                handlers: {
                    sendLogs: function({ options: e, reason: n }) {
                        return o("WAWebCrashlog").sendLogs(n, e);
                    }
                }
            },
            {
                namespace: "mainthread_fblogger",
                handlers: {
                    logFBError: function(t) {
                        const e = t.serializedError;
                        const n = babelHelpers.objectWithoutPropertiesLoose(t, g);
                        const a = r("err")(e.message);
                        a.stack = e.stack;
                        a.name = e.name;
                        o("WAWebLogger").logToFBLoggerLocal(babelHelpers.extends({}, n, {
                            error: a
                        }));
                    }
                }
            },
            {
                namespace: "mainthread_messagecache",
                handlers: {
                    addMessages: function({ flushImmediately: e, messages: n }) {
                        o("WAWebApiHydrateWidsUtil").hydrateWids(n);
                        return o("WAWebGetMessageCache").getMessageCache().addMessages(n, e);
                    },
                    addAdditionalInfo: function({ dangerouslyFlushImmediately: e, info: n }) {
                        o("WAWebGetMessageCache").getMessageCache().addAdditionalInfo(n, e);
                    },
                    createSnapshot: function() {
                        o("WAWebGetMessageCache").getMessageCache().createSnapshot();
                    },
                    checkpointQueueWait: function() {
                        return o("WAWebGetMessageCache").getMessageCache().checkpointQueueWait();
                    },
                    checkpointQueueSize: function() {
                        return o("WAWebGetMessageCache").getMessageCache().checkpointQueueSize();
                    },
                    size: function() {
                        return o("WAWebGetMessageCache").getMessageCache().size();
                    }
                }
            },
            {
                namespace: "mainthread_msgreporter",
                handlers: {
                    startMarker: function({ markerId: e, stage: n }) {
                        const r = o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.startMarker(n);
                        if (r) {
                            S.set(e, r);
                        }
                    },
                    endMarker: function({ markerId: e }) {
                        const n = S.get(e);
                        if (n) {
                            n();
                            S.delete(e);
                        }
                    },
                    activate: function({ count: e }) {
                        o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.activate(e);
                    }
                }
            },
            {
                namespace: "mainthread_identitychange",
                handlers: {
                    handleNewIdentity: function({ deviceWid: e, offline: n }) {
                        o("WAWebApiHydrateWidsUtil").hydrateWids({
                            deviceWid: e
                        });
                        return o("WAWebIdentityChangeApiWorkerCompatible").handleNewIdentity(e, n);
                    },
                    clearDeviceRecordForIdentityChange: function(t) {
                        o("WAWebApiHydrateWidsUtil").hydrateWids(t);
                        return o("WAWebIdentityChangeApiWorkerCompatible").clearDeviceRecordForIdentityChange(t);
                    }
                }
            },
            {
                namespace: "mainthread_clockSkew",
                handlers: {
                    setClockSkew: function({ newClockSkew: e }) {
                        o("WATimeUtils").setClockSkew(e);
                    }
                }
            },
            {
                namespace: "mainthread_noiseInfo",
                handlers: {
                    getNoiseInfo: function() {
                        return o("WAWebNoiseInfoMainThread").noiseInfoMainThread.getNoiseInfo();
                    },
                    setCertificateChain: function({ cert: e }) {
                        return o("WAWebNoiseInfoMainThread").noiseInfoMainThread.setCertificateChain(e);
                    }
                }
            },
            {
                namespace: "mainthread_userPrefsScreenLock",
                handlers: {
                    getScreenLockEnabled: function() {
                        return o("WAWebUserPrefsScreenLockMainThread").userPrefsScreenLockMainThread.getScreenLockEnabled();
                    }
                }
            },
            {
                namespace: "mainthread_mediaHostsSync",
                handlers: {
                    refresh: function() {
                        o("WAWebMediaHosts").mediaHosts.forceRefresh(new AbortController().signal).catch((t)=>{
                            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "Failed to refresh media hosts: ",
                                ""
                            ])), r("getErrorSafe")(t)).sendLogs("media-hosts-refresh-failed");
                        });
                    }
                }
            },
            {
                namespace: "mainthread_appTracker",
                handlers: {
                    start: function({ type }) {
                        const n = o("WAWebAppTracker").AppTrackerType.cast(type);
                        if (n == null) {
                            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "Invalid app tracker type: ",
                                ""
                            ])), type).sendLogs("invalid-app-tracker-type");
                            return;
                        }
                        o("WAWebAppTracker").AppTracker.start(n);
                    },
                    stop: function({ type }) {
                        const n = o("WAWebAppTracker").AppTrackerType.cast(type);
                        if (n == null) {
                            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "Invalid app tracker type: ",
                                ""
                            ])), type).sendLogs("invalid-app-tracker-type");
                            return;
                        }
                        o("WAWebAppTracker").AppTracker.stop(n);
                    }
                }
            },
            {
                namespace: "mainthread_uploadmanager",
                handlers: {
                    handleEncryptionStart: (t = o("WAWebMainThreadUploadManagerHandler")).handleEncryptionStart,
                    handleEncryptionSuccess: t.handleEncryptionSuccess,
                    handleStreamUploadStart: t.handleStreamUploadStart,
                    handleArrayBufferCreated: t.handleArrayBufferCreated,
                    handleCheckExistingSuccess: t.handleCheckExistingSuccess,
                    handleCheckExistingError: t.handleCheckExistingError,
                    handleUploadHostFound: t.handleUploadHostFound,
                    handleUploadAttemptSuccess: t.handleUploadAttemptSuccess,
                    handleUploadAttemptError: t.handleUploadAttemptError,
                    handleUploadProgress: t.handleUploadProgress,
                    handleUploadSuccess: t.handleUploadSuccess,
                    handleUploadError: t.handleUploadError
                }
            },
            {
                namespace: "userPrefsFromWorker",
                handlers: {
                    syncSet: function({ key, value: n }) {
                        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.applySyncSet(key, n);
                    },
                    syncRemove: function({ key }) {
                        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.applySyncRemove(key);
                    },
                    syncClear: function() {
                        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.applySyncClear();
                    },
                    syncBulkSet: function({ entries: e }) {
                        for (const n of e){
                            const { key: r, value: a } = n;
                            o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.applySyncSet(r, a);
                        }
                    }
                }
            },
            {
                namespace: "mainthread_comms",
                handlers: {
                    onSocketStateChange: function({ isConnected: e, socketId: n }) {
                        o("WAWebCommsWorkerProxy").updateCommsProxySocketState(e, n);
                    },
                    handleStanza: (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ size: t, socketId: a, stanza: i }) {
                            const l = yield o("WAWap").decodeStanza(i, function(e) {
                                return (h || (h = n("Promise"))).resolve(e);
                            });
                            const s = yield r("WAWebCommsHandleStanza")(l, a, t);
                            if (s instanceof o("WAWap").WapNode) {
                                const u = o("WAWap").encodeStanza(s);
                                return o("WATransferableResult").withTransferables(u, [
                                    u.buffer
                                ]);
                            }
                            return s;
                        });
                        function t(t) {
                            return e.apply(this, arguments);
                        }
                        return t;
                    })()
                }
            },
            {
                namespace: "mainthread_passiveMode",
                handlers: {
                    registerPassiveTasksForConnect: function() {
                        return o("WAWebRegisterPassiveTasksForConnect").registerPassiveTasksForConnectMainThread.registerPassiveTasksForConnect();
                    },
                    shouldConnectAsPassiveMode: function() {
                        return o("WAWebRegisterPassiveTasksForConnect").registerPassiveTasksForConnectMainThread.shouldConnectAsPassiveMode();
                    }
                }
            },
            {
                namespace: "mainthread_pageloadqpl",
                handlers: {
                    endPageLoadQpl: function({ locale: e, qrScreen: n, qrScreenExperience: r }) {
                        o("WAWebPageLoadLogging").endPageLoadQpl(n, r, e);
                    },
                    startPageLoadQplMeasure: function({ measure: e }) {
                        o("WAWebPageLoadLogging").startPageLoadQplMeasure(e);
                    },
                    endPageLoadQplMeasure: function({ measure: e }) {
                        o("WAWebPageLoadLogging").endPageLoadQplMeasure(e);
                    },
                    addPageLoadQplPoint: function({ point: e }) {
                        o("WAWebPageLoadLogging").addPageLoadQplPoint(e);
                    },
                    addPageLoadQplAnnotation: function({ annotations: e }) {
                        o("WAWebPageLoadLogging").addPageLoadQplAnnotation(e);
                    },
                    addPageLoadQplAnnotationNow: function({ annotations: e }) {
                        o("WAWebPageLoadLogging").addPageLoadQplAnnotationNow(e);
                    },
                    incrementPageLoadQplSocketError: function() {
                        o("WAWebPageLoadLogging").incrementPageLoadQplSocketError();
                    },
                    addPageLoadValidationData: function({ data: e, point: n }) {
                        o("WAWebPageLoadLogging").addPageLoadValidationData(n, e);
                    },
                    setWamCompleteForValidation: function() {
                        o("WAWebPageLoadLogging").setWamCompleteForValidation();
                    }
                }
            }
        ]);
        a.setNamespaceHandler("event", function(e, t, n) {
            if (new Set([
                "updateChatLimitSharing",
                "updateChatAcp2Setting",
                "chatCollectionAdd"
            ]).has(e)) {
                o("WAWebApiHydrateWidsUtil").hydrateWids(t);
            }
            if (n) {
                n(o("WAWebBackendApi").frontendSendAndReceive(e, t));
            } else {
                o("WAWebBackendApi").frontendFireAndForget(e, t);
            }
        });
        a.setNamespaceHandler("workerSafeEvent", function(e, t, n) {
            if (e === "syncContactListJob") {
                o("WAWebApiHydrateWidsUtil").hydrateWids(t);
            }
            if (n) {
                n(o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(e, t));
            } else {
                o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(e, t);
            }
        });
        return a;
    }
    let k = null;
    let I = null;
    let T = null;
    function D(e, t) {
        if (e != null) {
            const n = o("WACrossWorkerPortal").rejectPendingRequests(e, "comms", new (o("WAErrors")).Disconnected(t));
            if (n > 0) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[comms] failed ",
                    " in-flight request(s): ",
                    ""
                ])), n, t);
            }
        }
    }
    const x = 3;
    const $ = 10;
    let P = (h || (h = n("Promise"))).resolve();
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            P = P.catch(r("WAWebNoop")).then(()=>O(e));
            return P;
        });
        return M.apply(this, arguments);
    }
    let w;
    let A;
    function F() {
        if (w != null) {
            w.abort();
        }
        o("WAWebCommsWorkerReady").setCommsWorkerReady(false);
        D(T, "tab taken over");
        if (A != null) {
            A.terminate();
        }
        if (globalThis.navigator.locks != null) {
            globalThis.navigator.locks.request(`${C}-kill-switch-lock`, {
                steal: true
            }, function() {
                return (h || (h = n("Promise"))).resolve();
            });
        }
    }
    function O(e) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WAWebPageLoadLogging").startPageLoadQplMeasure("backendWorker");
            if (w != null) {
                w.abort();
            }
            w = new AbortController;
            const i = e?.retryStart ?? 0;
            const l = e?.qpl ?? o("QPLFlow").startQPLFlow(v, {
                annotations: {
                    bool: {
                        wa_web_media_wasm_worker_split: r("gkx")("24042"),
                        supportModule: r("supportsModuleWorker")(false),
                        early_backend_worker: r("gkx")("27242")
                    },
                    int: {
                        retryStart: i
                    }
                },
                timeoutInMs: 60000
            });
            try {
                l.addPoint("create_worker_start");
                const s = o("WAWebUA").UA.isFirefox && parseInt(o("WAWebUA").UA.browserVersion.split(".")[0], 10) <= 115;
                const u = o("WebWorkerV4Resource").createDedicatedV4WebWorker(r("WAWebBackendWorkerV2Resource"), R, C, s, l);
                const { initReady: c, worker: g } = u;
                A = g;
                l.addPoint("worker_connect_start");
                l.addPoint("worker_init_start");
                l.addPoint("worker_ready_start");
                yield (h || (h = n("Promise"))).all([
                    c.then(()=>{
                        l.addPoint("worker_init_end");
                    }),
                    W(g).then(()=>{
                        l.addPoint("worker_ready_end");
                    })
                ]);
                l.addPoint("worker_connect_end");
                let y;
                if (o("WAWebBackendWorkerClient").isBackendWorkerBridgeReady()) {
                    y = yield o("WAWebBackendWorkerClient").getBackendWorkerBridge();
                } else {
                    y = E();
                }
                const S = L(g);
                const P = T;
                T = o("WAWebBackendWorkerBridge").attachBridgeToPortal(y, S, [
                    "historySync",
                    "deviceSync",
                    "crypto",
                    "media",
                    "abProps",
                    "backendEventBusSync",
                    "userPrefs",
                    "workerInit",
                    "mediaHostsSync",
                    "networkStatusSync",
                    "comms"
                ]);
                D(P, "backend worker restarted");
                o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((e)=>{
                    k?.();
                    e.fireAndForget("mediaHostsSync", "snapshot", {
                        data: o("WAWebMediaHostsRawStateManager").mediaHostsRawStateManager.get()
                    });
                    k = o("WAWebMediaHostsRawStateManager").mediaHostsRawStateManager.onSet(function(t) {
                        e.fireAndForget("mediaHostsSync", "snapshot", {
                            data: t
                        });
                    });
                }).catch((e)=>{
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to set up media hosts sync: ",
                        ""
                    ])), r("getErrorSafe")(e)).sendLogs("media-hosts-sync-failed");
                });
                o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((e)=>{
                    I?.();
                    e.fireAndForget("networkStatusSync", "updateNetworkStatus", {
                        online: o("WAWebNetworkStatusStateManager").networkStatusStateManager.get()
                    });
                    I = o("WAWebNetworkStatusStateManager").networkStatusStateManager.onSet(function(t) {
                        e.fireAndForget("networkStatusSync", "updateNetworkStatus", {
                            online: t
                        });
                    });
                }).catch((e)=>{
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to set up network status sync: ",
                        ""
                    ])), r("getErrorSafe")(e)).sendLogs("network-status-sync-failed");
                });
                o("WAWebBackendWorkerClient").setBackendWorkerBridge(y);
                l.addPoint("init_data");
                o("WAWebBackendWorkerInitState").sendInitState(y).catch((e)=>{
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to set worker init state: ",
                        ""
                    ])), r("getErrorSafe")(e)).sendLogs("backend-worker-init-state-failed");
                });
                o("WAWebCommsWorkerProxy").rebuildCommsInRestartedWorker();
                l.addPoint("create_worker_end");
                l.endSuccess();
                o("WAWebPageLoadLogging").endPageLoadQplMeasure("backendWorker");
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebBackendWorker is initialised"
                ])));
                if (globalThis.navigator.locks != null) {
                    globalThis.navigator.locks.request(`${C}-kill-switch-lock`, {
                        signal: w.signal
                    }, function() {
                        o("WAWebCommsWorkerReady").setCommsWorkerReady(false);
                        D(T, "backend worker stopped");
                        if (i < $) {
                            N({
                                retryStart: i + 1
                            });
                        }
                    });
                }
            } catch (t) {
                if (globalThis.navigator.locks != null) {
                    yield globalThis.navigator.locks.request(`${C}-kill-switch-lock`, {
                        steal: true
                    }, function() {
                        return (h || (h = n("Promise"))).resolve();
                    });
                }
                const F = r("getErrorSafe")(t);
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebBackendWorkerClient init fails"
                ]))).catching(F).sendLogs("main-thread-backend-worker-init-fails");
                if (F.message.includes(b)) {
                    l.endFail("error", {
                        string: {
                            error: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(t)
                        }
                    });
                    return;
                }
                const O = e?.retryInit ?? 0;
                if (O < x && globalThis.navigator.locks != null) {
                    l.addPoint(`retry_${O}`);
                    N({
                        qpl: l,
                        retryInit: O + 1
                    });
                } else {
                    l.endFail("error", {
                        string: {
                            error: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(t)
                        }
                    });
                }
            }
        });
        return B.apply(this, arguments);
    }
    function W(e) {
        return new (h || (h = n("Promise")))(function(t, n) {
            const r = function({ data: o }) {
                const { message: i, type: l } = o;
                if (l === "worker_setup") {
                    e.removeEventListener("message", r);
                    if (i === "worker_started") {
                        t();
                    } else if (i === "worker_failed") {
                        n();
                    }
                }
            };
            e.addEventListener("message", r);
        });
    }
    l.startBackendWorker = N;
    l.terminateBackendWorker = F;
}, 98);