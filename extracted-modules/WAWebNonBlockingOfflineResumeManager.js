__d("WAWebNonBlockingOfflineResumeManager", [
    "WALogger",
    "WAShiftTimer",
    "WAWebApiPendingDeviceSync",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBrokerGlobalAppState",
    "WAWebChatThreadLogging",
    "WAWebHandleMsgTypes.flow",
    "WAWebJSHaltDetector",
    "WAWebMessageQueue",
    "WAWebMessageQueueImpl",
    "WAWebOffdStorageUpdateOfflinePeerReceipts",
    "WAWebOfflineResumeConst",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebOfflineResumeTypes",
    "WAWebOfflineResumeUtils",
    "WAWebOneQueue",
    "WAWebSignalProtocolStore",
    "WAWebThreadMetadata",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumWebcScenarioType",
    "WAWebWamMemoryStat",
    "WAWebWamOfflineResumeReporter",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "cr:37442",
    "gkx"
], function(t, n, r, o, a, i, l) {
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
    const S = n("cr:37442") ?? {};
    const R = S.reconcileMetaAiUnreadCounts;
    const L = 100;
    const E = (()=>{
        function e(e) {
            const t = this;
            this.$9 = null;
            this.$11 = new (o("WAShiftTimer")).ShiftTimer(function() {
                o("WAWebBackendApi").frontendFireAndForget("triggerOfflineProgressUpdateFromBridge", {});
                t.$11.onOrAfter(o("WAWebOfflineResumeConst").UI_UPDATE_TIME_MS);
            });
            this.$12 = 95;
            this.resumeType = o("WAWebOfflineResumeTypes").ResumeType.NonBlocking;
            if (e != null && e.mainScreenLoaded) {
                this.$6 = true;
            }
            this.$13();
        }
        const t = e.prototype;
        t.updateOptions = function(t) {
            this.$6 = t?.mainScreenLoaded ?? false;
        };
        t.$13 = function() {
            this.offlineMessagePreviewCounter = -1;
            this.$2 = 0;
            this.$3 = 0;
            this.$4 = false;
            this.$5 = null;
            this.$1 = o("WAWebOfflineResumeConst").ResumeStatus.INIT;
        };
        t.$14 = function(t) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume][non-blocking] offline resume stage: ",
                " -> ",
                ""
            ])), this.$1, t);
            this.$1 = t;
        };
        t.processOfflinePreview = function(t) {
            o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logOfflinePreviewT();
            if (this.$6) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[resume-from-open-tab] reset offline delivery end to false"
                ])));
                o("WAWebBackendEventBus").BackendEventBus.triggerOfflineDeliveryStateReset();
            }
            if (this.isResumeFromRestartComplete()) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume][non-blocking] Offline session is complete when receiving offline preview ib."
                ])));
                if (o("WAWebOfflineResumeUtils").exceedResumeWithOpenTabLimit(t.message, t.receipt)) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][non-blocking] restart client due to exceed the LIMIT, message: ",
                        ", receipt: ",
                        ""
                    ])), t.message, t.receipt);
                    o("WAWebOfflineResumeUtils").refreshWindow("open_tab_limit_nonblocking", {
                        msg: t.message,
                        receipt: t.receipt
                    });
                }
                o("WAWebJSHaltDetector").jsHaltDetector.restartDetection();
                this.$14(o("WAWebOfflineResumeConst").ResumeStatus.RESUME_WITH_OPEN_TAB);
                this.$15(t.message, t.receipt);
                o("WAWebBackendApi").frontendFireAndForget("updateChatSortListener", {
                    enable: false
                });
                self.setTimeout(function() {
                    o("WAWebBackendApi").frontendFireAndForget("updateChatSortListener", {
                        enable: true
                    });
                }, 7000);
            } else if (this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.INIT) {
                r("WAWebBrokerGlobalAppState").initOrUpdateTracking(o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.OFFLINE_RESUME);
                o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logOfflineCount(t);
                o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.activate(t);
                this.offlineMessagePreviewCounter = t.message;
                this.$5 = false;
                this.$4 = true;
                this.$2 = 0;
                this.$10 = Date.now();
                o("WAWebSignalProtocolStore").enableMemSignalStore();
                o("WAWebBackendApi").frontendFireAndForget("triggerOfflineProgressUpdateFromBridge", {});
                o("WAWebJSHaltDetector").jsHaltDetector.restartDetection();
                this.$11.onOrAfter(o("WAWebOfflineResumeConst").UI_UPDATE_TIME_MS);
                this.$14(o("WAWebOfflineResumeConst").ResumeStatus.RESUME_ON_RESTART);
                this.$15(t.message, t.receipt);
                if (this.$6) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[resume-from-open-tab] Main screen is loaded"
                    ])));
                } else {
                    this.$7 = o("WAWebOfflineResumeUtils").loadMainScreen({});
                }
            } else {
                const e = this.$10;
                if (e != null) {
                    const n = Date.now() - e;
                    if (n < o("WAWebOfflineResumeConst").OFFLINE_PREVIEW_PERIOD_MS) {
                        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][non-blocking] Accept multiple offline preview ibs during offline resume, delay ",
                            "."
                        ])), n);
                        this.offlineMessagePreviewCounter += t.message;
                        this.$5 = false;
                        this.$4 = true;
                        o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logOfflineCount(t);
                    } else if (r("gkx")("26258")) {
                        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][non-blocking] Reject multiple offline preview ib during offline resume, delay ",
                            "."
                        ])), n);
                    } else {
                        o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][non-blocking] Reject multiple offline preview ibs during offline resume, delay ",
                            ""
                        ])), n).sendLogs("offline-multiple-preview");
                    }
                }
                this.$16();
            }
        };
        t.getOfflineDeliveryProgress = function() {
            if (this.offlineMessagePreviewCounter === 0) {
                return this.$12;
            }
            return Math.min(Math.ceil(100 * this.$2 / this.offlineMessagePreviewCounter), this.$12);
        };
        t.getProcessedOfflineMessageCount = function() {
            return Math.min(this.$2, Math.max(this.offlineMessagePreviewCounter, 0));
        };
        t.processOfflineSessionComplete = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const n = this;
                self.setTimeout(function() {
                    o("WAWebBackendApi").frontendFireAndForget("updateChatSortListener", {
                        enable: true
                    });
                }, 3000);
                this.$9?.cancel();
                this.$9 = null;
                if (this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE) {
                    o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logLastStanzaT();
                    o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.commit();
                    return;
                } else if (this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.RESUME_WITH_OPEN_TAB) {
                    if (!o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
                        yield o("WAWebMessageQueue").waitForLegacyOnlineMessageQueue();
                    }
                    yield o("WAWebApiPendingDeviceSync").doPendingDeviceSync();
                    this.$14(o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE);
                    o("WAWebThreadMetadata").resetThreadMeta();
                    o("WAWebBackendEventBus").BackendEventBus.triggerOfflineDeliveryEnd();
                    o("WAWebBackendApi").frontendFireAndForget("updateChatSortListener", {
                        enable: true
                    });
                    return;
                } else {
                    if (this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.INIT) {
                        this.$5 = false;
                        this.$4 = true;
                        o("WAWebBackendApi").frontendFireAndForget("triggerOfflineProgressUpdateFromBridge", {});
                        if (!this.$6 && !this.$7) {
                            this.$7 = o("WAWebOfflineResumeUtils").loadMainScreen({});
                        }
                    }
                }
                yield this.$7;
                this.$8 = 0;
                self.setTimeout(function() {
                    if (n.$8 > o("WAWebOfflineResumeConst").OFFLINE_STANZA_COUNT_LIMIT) {
                        o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][non-blocking] ",
                            " received after offline completion marker. Refreshing window due to potential server issue."
                        ])), n.$8);
                        o("WAWebOfflineResumeUtils").refreshWindow("stanzas_after_complete_nonblocking");
                    }
                }, o("WAWebOfflineResumeConst").OFFLINE_STANZA_COUNT_CHECK_TIMEOUT_MS);
                this.$14(o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE);
                return this.$17();
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.isResumeFromRestartComplete = function() {
            return this.$1 !== o("WAWebOfflineResumeConst").ResumeStatus.RESUME_ON_RESTART && this.$1 !== o("WAWebOfflineResumeConst").ResumeStatus.INIT;
        };
        t.isResumeFromRestartInProgress = function() {
            return this.$1 !== o("WAWebOfflineResumeConst").ResumeStatus.INIT && !o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd;
        };
        t.isResumeOnSocketDisconnectInProgress = function() {
            return this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.RESUME_WITH_OPEN_TAB;
        };
        t.isResumeComplete = function() {
            return this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE;
        };
        t.getHasMessagesToDownload = function() {
            return this.$5;
        };
        t.getFinishedDownloading = function() {
            return this.getOfflineDeliveryProgress() === 100;
        };
        t.shouldUseOfflineResumeScreen = function() {
            return this.offlineMessagePreviewCounter > this.$2;
        };
        t.processDecryptResult = function(t) {
            this.$16();
            this.$2 += 1;
            if (t === o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY) {
                this.$3 += 1;
            }
        };
        t.offlineStanzaReceivedAfterComplete = function() {
            if (this.isResumeFromRestartComplete()) {
                this.$8 += 1;
            }
        };
        t.newOfflineStanza = function(t, n) {
            o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logAddOfflineSizeBytes(n);
            o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logOldestStanzaTime(t);
            this.$16();
        };
        t.getResumeUIProgressBarType = function() {
            if (!o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd && this.offlineMessagePreviewCounter >= L) {
                return o("WAWebOfflineResumeTypes").ResumeUIProgressBarType.Toastbar;
            }
            return o("WAWebOfflineResumeTypes").ResumeUIProgressBarType.None;
        };
        t.$16 = function() {
            if (this.$9) {
                this.$9.onOrAfter(o("WAWebOfflineResumeConst").OFFLINE_STANZA_TIMEOUT_MS);
            }
        };
        t.$15 = function(t, n) {
            const r = this;
            this.$9?.cancel();
            this.$9 = new (o("WAShiftTimer")).ShiftTimer(function() {
                if (r.$1 !== o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE) {
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][non-blocking]: offline session completed by timeout"
                    ])));
                    o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][non-blocking] offline resume finished by timeout"
                    ]))).sendLogs("non-blocking-offline-resume-timeout", {
                        sampling: 0.01
                    });
                    o("WAWebOneQueue").handleOneQueueOfflineEnd();
                    r.processOfflineSessionComplete(t + n);
                    r.$9 = null;
                    o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logMissedOfflineComplete();
                }
            });
            this.$9.onOrAfter(o("WAWebOfflineResumeConst").OFFLINE_STANZA_TIMEOUT_MS);
        };
        t.$17 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled() ? o("WAWebOneQueue").waitForOneQueueOfflineEnd() : o("WAWebMessageQueue").waitForLegacyOfflineMessageQueue();
                o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logOfflineDecryptionErrorCount(this.$3);
                o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logLastStanzaT();
                o("WAWebThreadMetadata").resetThreadMeta();
                o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume][non-blocking] _onOfflineComplete: waitForOfflineMsgThread done, total decryption error: ",
                    ""
                ])), this.$3);
                this.$3 = 0;
                yield o("WAWebOfflineResumeUtils").clearOfflineSnapShot();
                this.$12 = 97;
                yield this.$7;
                yield o("WAWebOffdStorageUpdateOfflinePeerReceipts").updatePeerReceipts();
                try {
                    yield R?.();
                } catch (e) {
                    o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][non-blocking] reconcileMetaAiUnreadCounts failed: ",
                        ""
                    ])), String(e));
                }
                this.$12 = 99;
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume][non-blocking] _onOfflineComplete: clearOfflineSnapShot done."
                ])));
                o("WAWebBackendEventBus").BackendEventBus.triggerOfflineDeliveryEnd();
                o("WAWebUserPrefsGeneral").setOfflinePushCount(0);
                this.$11.forceRunNow();
                this.$11.cancel();
                o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.commit();
                o("WAWebSignalProtocolStore").enablePersistSignalStore();
                o("WAWebOfflineResumeUtils").runReceiptCleanUpLoop();
                o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("processAllOrphanPaymentNotifications");
                o("WAWebChatThreadLogging").uploadChatThreadLoggingEvents();
                r("WAWebBrokerGlobalAppState").initOrUpdateTracking(o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE);
                o("WAWebWamMemoryStat").setCurrentMemoryScenario(o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE);
                self.setTimeout(function() {
                    o("WAWebApiPendingDeviceSync").doPendingDeviceSync();
                }, o("WAWebOfflineResumeConst").OFFLINE_DEVICE_SYNC_DELAY);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return e;
    })();
    l.OfflineNonBlockingResumeStageManager = E;
}, 98);