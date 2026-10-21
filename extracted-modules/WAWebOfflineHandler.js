__d("WAWebOfflineHandler", [
    "invariant",
    "WALogger",
    "WASmaxOfflineBatchRPC",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebBackendEventBus",
    "WAWebEventsWaitForReadyForOffline",
    "WAWebHandleOfflineAbProps",
    "WAWebMessageQueueImpl",
    "WAWebOfflineResumeUtils",
    "WAWebOneQueue",
    "WAWebPageLoadLogging",
    "WAWebQplFlowWrapper",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebWamOfflineResumeReporter",
    "asyncToGeneratorRuntime",
    "qpl"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    const y = r("qpl")._(891431279, "3267");
    const offlineBatchCount = 200;
    const b = 10;
    const v = 200;
    const S = 100;
    const R = new Map([
        [
            0,
            200
        ],
        [
            1,
            100
        ],
        [
            2,
            50
        ],
        [
            3,
            10
        ]
    ]);
    const L = I();
    const E = (()=>{
        function t() {
            this.$2 = false;
            this.$3 = 0;
            this.$4 = false;
            this.$5 = false;
            this.$7 = offlineBatchCount;
            this.$8 = 0;
            this.$9 = false;
            this.$10 = 0;
            this.$11 = null;
        }
        const t_prototype = t.prototype;
        t_prototype.initState = function(n) {
            if (this.offlineResumeManager != null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume] initState called more than once"
                ])));
            }
            this.offlineResumeManager = n.getBlockingStageManager();
            o("WAWebPageLoadLogging").addPageLoadQplAnnotation({
                blocking_resume: true
            });
            this.$1 = n.getNonblockingStageManager;
        };
        t_prototype.processOfflinePreviewIb = function(t) {
            o("WAWebPageLoadLogging").addPageLoadQplPoint("offline_preview_received");
            o("WAWebQplFlowWrapper").QPL.markerPoint(y, "OfflinePreviewReceived");
            o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.OfflineResume);
            this.$13();
            this.$9 = !o("WAWebRuntimeEnvironmentUtils").isServiceWorker();
            if (this.$1 != null) {
                const e = this.$1;
                if (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd && this.isResumeFromRestartComplete()) {
                    if (D(t.message)) {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[resume-from-open-tab][non-blocking] resume from current state of app"
                        ])));
                        this.offlineResumeManager = e({
                            mainScreenLoaded: true
                        });
                    } else {
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[resume-from-open-tab] restart client due to exceed the LIMIT, message: ",
                            ""
                        ])), t.message);
                        o("WAWebOfflineResumeUtils").refreshWindow("open_tab_limit", {
                            msg: t.message
                        });
                    }
                } else if (!this.$2 && !this.isResumeFromRestartComplete() && D(t.message)) {
                    o("WAWebPageLoadLogging").addPageLoadQplAnnotation({
                        blocking_resume: false
                    });
                    this.offlineResumeManager = e();
                }
            }
            this.$2 = true;
            T();
            o("WAWebOneQueue").handleOneQueueOfflineStart(t);
            this.offlineResumeManager.processOfflinePreview(t);
        };
        t_prototype.processMessageDecryptResult = function(t) {
            this.offlineResumeManager.processDecryptResult(t);
            this.$3 -= 1;
            this.$14();
        };
        t_prototype.addOfflinePendingMessage = function() {
            if (!this.isResumeFromRestartComplete()) {
                this.$3 += 1;
            }
        };
        t_prototype.newOfflineStanza = function(t, n, r) {
            const e = this;
            this.$15();
            this.$4 = false;
            this.$8 = Math.max(this.$8, r);
            if (this.$6 == null) {
                this.$6 = self.setTimeout(function() {
                    e.$14();
                    e.$6 = null;
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][adaptive] _endBatchCheck: done"
                    ])));
                }, 0);
            }
            return this.offlineResumeManager.newOfflineStanza(t, n, r);
        };
        t_prototype.offlineStanzaReceivedAfterComplete = function() {
            return this.offlineResumeManager.offlineStanzaReceivedAfterComplete();
        };
        t_prototype.getOfflineDeliveryProgress = function() {
            return this.offlineResumeManager.getOfflineDeliveryProgress();
        };
        t_prototype.getProcessedOfflineMessageCount = function() {
            return this.offlineResumeManager.getProcessedOfflineMessageCount();
        };
        t_prototype.getOfflineMessageCount = function() {
            return Math.max(this.offlineResumeManager.offlineMessagePreviewCounter, 0);
        };
        t_prototype.isResumeOnSocketDisconnectInProgress = function() {
            return this.offlineResumeManager.isResumeOnSocketDisconnectInProgress();
        };
        t_prototype.isResumeFromRestartComplete = function() {
            return this.offlineResumeManager.isResumeFromRestartComplete();
        };
        t_prototype.isResumeComplete = function() {
            return this.offlineResumeManager.isResumeComplete();
        };
        t_prototype.getHasMessagesToDownload = function() {
            return this.offlineResumeManager.getHasMessagesToDownload();
        };
        t_prototype.getFinishedDownloading = function() {
            return this.getOfflineDeliveryProgress() === 100;
        };
        t_prototype.processOfflineIb = function(t) {
            o("WAWebPageLoadLogging").addPageLoadQplPoint("offline_received");
            o("WAWebQplFlowWrapper").QPL.markerPoint(y, "OfflineIbReceived");
            o("WAWebOneQueue").handleOneQueueOfflineIb();
            return this.offlineResumeManager.processOfflineSessionComplete(t).finally(()=>{
                o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.OfflineResume);
            });
        };
        t_prototype.shouldUseOfflineResumeScreen = function() {
            return this.offlineResumeManager.shouldUseOfflineResumeScreen();
        };
        t_prototype.getResumeUIProgressBarType = function() {
            return this.offlineResumeManager.getResumeUIProgressBarType();
        };
        t_prototype.hasReceivedOfflinePreviewIb = function() {
            return this.$2;
        };
        t_prototype.hasInitOfflineResumeManager = function() {
            return this.offlineResumeManager != null;
        };
        t_prototype.getResumeType = function() {
            return this.offlineResumeManager.resumeType;
        };
        t_prototype.$13 = function() {
            this.$4 = false;
            this.$5 = false;
            this.$10 = 0;
            this.$11 = null;
        };
        t_prototype.$16 = function() {
            this.$11 = self.performance.now();
            o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logOfflineBatchRequest();
        };
        t_prototype.$15 = function() {
            const $11 = this.$11;
            if ($11 != null) {
                this.$11 = null;
                o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logOfflineBatchArrival(self.performance.now() - $11);
            }
        };
        t_prototype.$17 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = self.performance.now();
                yield o("WAWebEventsWaitForReadyForOffline").waitForOfflineProcessReady();
                o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logOfflineBatchReadyWait(self.performance.now() - e);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$18 = function(offlineBatchCount, n = false) {
            const e = this;
            const r = n === true || this.$10 === 0;
            if (this.$12 != null) {
                self.clearTimeout(this.$12);
            }
            if (r) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume][adaptive][debounced] _maybeRequestMoreStanza: request next batch, pending message ",
                    ""
                ])), this.$3);
                o("WASmaxOfflineBatchRPC").sendBatchRPC({
                    offlineBatchCount
                });
                this.$16();
                this.$10 = Date.now();
                this.$8 = 0;
                this.$4 = true;
                this.$5 = false;
            } else {
                this.$12 = self.setTimeout(function() {
                    e.$19();
                }, S);
            }
        };
        t_prototype.$19 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e = false) {
                const t = Date.now() - this.$10;
                const n = e || !this.isResumeComplete() && this.$3 <= offlineBatchCount && t >= S && this.$4 === false && this.$5 === true;
                if (!((this.isResumeComplete() || this.$4 || this.$5) && (this.isResumeComplete() || o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume][adaptive][debounced] _maybeRequestMoreStanzaDebounced: skipDebouncing: ",
                    ", prevPending: ",
                    ", currentPending: ",
                    ", complete: ",
                    ""
                ])), n, this.$4, this.$5, this.isResumeComplete()), n === false)) && this.$3 <= offlineBatchCount) {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][adaptive][debounced] _maybeRequestMoreStanzaDebounced: start request next batch"
                    ])));
                    this.$5 = true;
                    yield this.$17();
                    let r = offlineBatchCount;
                    r = L(this.$8, this.$7);
                    this.$7 = r;
                    this.$18(r, n);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$14 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e = false) {
                if (this.$9) {
                    return this.$19(e);
                }
                if (this.isResumeComplete() || this.$4 || this.$5) {
                    if (!this.isResumeComplete()) {
                        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][adaptive] _maybeRequestMoreStanza: skip, prevPending: ",
                            ", currentPending: ",
                            ", complete: ",
                            ""
                        ])), this.$4, this.$5, this.isResumeComplete());
                    }
                    return;
                }
                if (this.$3 <= offlineBatchCount) {
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][adaptive] _maybeRequestMoreStanza: start request next batch"
                    ])));
                    this.$5 = true;
                    yield this.$17();
                    o("WASmaxOfflineBatchRPC").sendBatchRPC({
                        offlineBatchCount
                    });
                    this.$16();
                    this.$5 = false;
                    this.$4 = true;
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][adaptive] _maybeRequestMoreStanza: request next batch, pending message ",
                        ""
                    ])), this.$3);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    function k({ currentSize, multiplier = 0.2, prevRetryCount, retryCount }) {
        if (retryCount === 0) {
            return v;
        }
        if (retryCount > 3) {
            return b;
        }
        let i = null;
        const l = retryCount - (prevRetryCount ?? 0);
        if (l === 0) {
            i = Math.floor(currentSize * multiplier) + currentSize;
            if ((R.get(retryCount - 1) ?? v) <= i) {
                i = currentSize;
            }
        } else {
            i = R.get(retryCount);
        }
        if (i == null) {
            s(0, 75725, retryCount, prevRetryCount ?? "N/A", currentSize);
        }
        return i ?? v;
    }
    function I() {
        let e = null;
        return function(retryCount, currentSize) {
            const r = o("WAWebHandleOfflineAbProps").getOfflineDynamicBatchConfig();
            const { multiplier, version } = r;
            const prevRetryCount = e;
            e = retryCount;
            if (version === "progressive") {
                return k({
                    currentSize,
                    multiplier,
                    prevRetryCount,
                    retryCount
                });
            }
            return v;
        };
    }
    function T() {
        const message_queue_impl = o("WAWebMessageQueueImpl").getMessageQueueImpl();
        o("WAWebPageLoadLogging").addPageLoadQplAnnotation({
            message_queue_impl
        });
        o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addAnnotations({
            string: {
                message_queue_impl
            }
        });
    }
    function D(message) {
        return !(message >= o("WAWebABProps").getABPropConfigValue("web_non_blocking_offline_resume_max_message_count"));
    }
    const x = new E;
    l.DEFAULT_MAX_BATCH_SIZE = v;
    l.OfflineMessageHandlerImpl = E;
    l.OfflineMessageHandler = x;
}, 98);