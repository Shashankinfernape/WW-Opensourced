__d("WAWebWamOfflineResumeReporter", [
    "$InternalEnum",
    "QPLFlow",
    "WALogger",
    "WARandomHex",
    "WATimeUtils",
    "WAWebAppTracker",
    "WAWebDBTableUsage",
    "WAWebGetAllModelStorageTableNames",
    "WAWebLongTaskAccumulator",
    "WAWebMessageReceiveFlow",
    "WAWebNullFunc",
    "WAWebOfflineResumeStageWamEvent",
    "WAWebOfflineResumeWamEvent",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMultiDevice",
    "WAWebWamEnumOfflineResumeModes",
    "WAWebWamEnumOfflineResumeStages",
    "WAWebWamEnumWebScenarioCode",
    "asyncToGeneratorRuntime",
    "gkx",
    "qpl"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = r("qpl")._(891431279, "3267");
    const sampling = 0.01;
    const h = n("$InternalEnum").Mirrored([
        "ResumeFromRestart",
        "ResumeFromOpentab"
    ]);
    class y {
        constructor(e){
            this._longTasksAtStart = o("WAWebLongTaskAccumulator").getLongTaskTotals();
            this._startedAt = 0;
            this._mode = e;
        }
        start() {
            this.drop();
            this._longTasksAtStart = o("WAWebLongTaskAccumulator").getLongTaskTotals();
            this._startedAt = self.performance.now();
            o("WAWebMessageReceiveFlow").resetOfflineResumeReceiveTotals();
            this._qplFlow = o("QPLFlow").startQPLFlow(f, {
                annotations: {
                    string: {
                        mode: h.getName(this._mode)
                    }
                }
            });
        }
        end() {
            const n = o("WAWebMessageReceiveFlow").takeOfflineResumeReceiveTotals(this._startedAt);
            if (n != null) {
                this._qplFlow?.addAnnotations(n);
            }
            this._qplFlow?.endSuccess(o("WAWebLongTaskAccumulator").getLongTaskAnnotationsSince(this._longTasksAtStart) ?? undefined);
            this._qplFlow = undefined;
        }
        drop() {
            this._qplFlow?.endCancel(4);
            this._qplFlow = undefined;
        }
        _addPoint(t, n) {
            this._qplFlow?.addPoint(t, n);
        }
        markOfflinePreviewReceived() {
            this._addPoint("offlinePreviewReceived");
        }
        markProcessComplete() {
            this._addPoint("processComplete");
        }
        markMainScreenLoad() {
            this._addPoint("mainScreenLoad");
        }
        setAnnotations(t) {
            this._qplFlow?.addAnnotations(t);
        }
        addPoint(t) {
            this._qplFlow?.addPoint(t);
        }
        addAnnotations(t) {
            this._qplFlow?.addAnnotations(t);
        }
    }
    class C {
        constructor(e, t){
            this._sessionId = t;
            this._offlineStartT = self.performance.now();
            this._resumeMode = e;
            if (globalThis.document != null) {
                this._isStartedInForeground = !globalThis.document.hidden;
            }
        }
        _commitOfflineStage(currentOfflineStage) {
            const e = {
                offlineSessionId: this._sessionId,
                offlineResumeMode: this._resumeMode === h.ResumeFromOpentab ? o("WAWebWamEnumOfflineResumeModes").OFFLINE_RESUME_MODES.RESUME_FROM_OPEN_TAB : o("WAWebWamEnumOfflineResumeModes").OFFLINE_RESUME_MODES.RESUME_FROM_RESTART,
                offlineStageTimestampMs: Math.floor(self.performance.now() - this._offlineStartT),
                currentOfflineStage
            };
            if (globalThis.document != null) {
                e.isResumeInForeground = !globalThis.document.hidden;
            }
            if (this._isStartedInForeground != null) {
                e.isResumeStartedInForeground = this._isStartedInForeground;
            }
            const n = new (o("WAWebOfflineResumeStageWamEvent")).OfflineResumeStageWamEvent(e);
            this._addOfflineMetadata(n);
            n.commit();
        }
        logOfflineStart() {
            this._offlineStartT = self.performance.now();
        }
        logSocketConnect() {
            this._commitOfflineStage(o("WAWebWamEnumOfflineResumeStages").OFFLINE_RESUME_STAGES.SOCKET_CONNECT);
        }
        logProcessComplete() {
            this._commitOfflineStage(o("WAWebWamEnumOfflineResumeStages").OFFLINE_RESUME_STAGES.PROCESS_COMPLETE);
        }
        logScreenLoad() {
            this._commitOfflineStage(o("WAWebWamEnumOfflineResumeStages").OFFLINE_RESUME_STAGES.SCREEN_LOAD);
        }
        logOfflinePreview() {
            this._commitOfflineStage(o("WAWebWamEnumOfflineResumeStages").OFFLINE_RESUME_STAGES.OFFLINE_PREVIEW);
        }
        logOfflineCount(t) {
            if ((this._offlineMessageCount ?? 0) === 0) {
                this._offlineMessageCount = t.message;
            }
            if ((this._offlineReceiptCount ?? 0) === 0) {
                this._offlineReceiptCount = t.receipt;
            }
            if ((this._offlineNotificationCount ?? 0) === 0) {
                this._offlineNotificationCount = t.notification;
            }
            if ((this._offlineCallCount ?? 0) === 0) {
                this._offlineCallCount = t.call;
            }
        }
        logOfflineDecryptionErrorCount(t) {
            this._offlineDecryptErrorCount = t;
        }
        logOfflineChatThreadCount(t) {
            this._chatThreadCount = t;
        }
        logOldestStanzaTime(t) {
            if (this._oldestStanzaTs == null || this._oldestStanzaTs > t) {
                this._oldestStanzaTs = t;
            }
        }
        setLastPushCompleteTimestamp() {
            this._lastPushCompleteTimestampMs = o("WAWebUserPrefsGeneral").getLastPushCompleteTimestamp();
        }
        _addOfflineMetadata(t) {
            if (this._offlineMessageCount != null) {
                t.offlineMessageCount = this._offlineMessageCount;
            }
            if (this._offlineReceiptCount != null) {
                t.offlineReceiptCount = this._offlineReceiptCount;
            }
            if (this._offlineNotificationCount != null) {
                t.offlineNotificationCount = this._offlineNotificationCount;
            }
            if (this._offlineCallCount != null) {
                t.offlineCallCount = this._offlineCallCount;
            }
            if (this._oldestStanzaTs != null) {
                t.mailboxAge = E(this._oldestStanzaTs);
            }
            if (this._offlineDecryptErrorCount != null) {
                t.offlineDecryptErrorCount = this._offlineDecryptErrorCount;
            }
            if (this._chatThreadCount != null) {
                t.chatThreadCount = L(this._chatThreadCount, 10);
            }
            if (this._lastPushCompleteTimestampMs != null && t.currentOfflineStage === o("WAWebWamEnumOfflineResumeStages").OFFLINE_RESUME_STAGES.SOCKET_CONNECT) {
                t.lastPushTimestampMs = this._lastPushCompleteTimestampMs;
                o("WAWebUserPrefsGeneral").clearLastPushCompleteTimestamp();
                this._lastPushCompleteTimestampMs = null;
            }
        }
    }
    const b = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.offlinePreviewCount = 0;
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebOfflineResumeWamEvent").OfflineResumeWamEvent);
    function v() {
        return {
            requestCount: 0,
            readyWaitMs: 0,
            waitMs: 0,
            maxWaitMs: 0
        };
    }
    const S = (()=>{
        function t() {
            this.offlineBatch = v();
            this.getPageLoadId = o("WAWebNullFunc").returnNull;
            this._initEvents(h.ResumeFromRestart);
        }
        const t_prototype = t.prototype;
        t_prototype._initEvents = function(t) {
            this.isInitialSync = false;
            this.oldestStanzaTs = 0;
            this.offlineResume = new b;
            this.offlineResume.offlineMessageCount = 0;
            this.offlineResume.offlineReceiptCount = 0;
            this.offlineResume.offlineNotificationCount = 0;
            this.offlineResume.offlineCallCount = 0;
            this.offlineResume.offlineDecryptErrorCount = 0;
            this.offlineResume.offlineSizeBytes = 0;
            this.offlineResume.chatThreadCount = 0;
            this.offlineResume.preackMessageCount = 0;
            this.offlineResume.preackReceiptCount = 0;
            this.offlineResume.isOfflineCompleteMissed = false;
            this.offlineBatch = v();
            this.qpl = new y(t);
            const offlineSessionId = this._generateOfflineSessionId();
            this.offlineStage = new C(t, offlineSessionId);
            this.endTableUsageMetric = o("WAWebDBTableUsage").beginDBTableUsage({
                webScenario: o("WAWebWamEnumWebScenarioCode").WEB_SCENARIO_CODE.OFFLINE_RESUME,
                tablesToLog: new Set(o("WAWebGetAllModelStorageTableNames").allModelStorageTableNames),
                offlineSessionId
            });
        };
        t_prototype.logOldestStanzaTime = function(t) {
            this.offlineStage.logOldestStanzaTime(t);
            if (this.offlineResume != null && (this.oldestStanzaTs === 0 || this.oldestStanzaTs > t)) {
                this.oldestStanzaTs = t;
            }
        };
        t_prototype.logOfflineCount = function(t) {
            this.offlineStage.logOfflineCount(t);
            this.offlineStage.logOfflinePreview();
            if (this.offlineResume) {
                this.offlineResume.offlinePreviewCount = t.count;
                if ((this.offlineResume.offlineMessageCount ?? 0) === 0) {
                    this.offlineResume.offlineMessageCount = t.message;
                }
                if ((this.offlineResume.offlineReceiptCount ?? 0) === 0) {
                    this.offlineResume.offlineReceiptCount = t.receipt;
                }
                if ((this.offlineResume.offlineNotificationCount ?? 0) === 0) {
                    this.offlineResume.offlineNotificationCount = t.notification;
                }
                if ((this.offlineResume.offlineCallCount ?? 0) === 0) {
                    this.offlineResume.offlineCallCount = t.call;
                }
                this.qpl.addAnnotations({
                    int: {
                        offlinePreviewCount: t.count
                    }
                });
            }
        };
        t_prototype.logOfflineDecryptionErrorCount = function(t) {
            this.offlineStage.logOfflineDecryptionErrorCount(t);
            if (this.offlineResume) {
                this.offlineResume.offlineDecryptErrorCount = t;
            }
        };
        t_prototype.logAddOfflineSizeBytes = function(t) {
            if (this.offlineResume) {
                this.offlineResume.offlineSizeBytes += t;
            }
        };
        t_prototype.logOfflineChatThreadCount = function(t) {
            this.offlineStage.logOfflineChatThreadCount(t);
            const e = L(t, 10);
            if (this.offlineResume) {
                this.offlineResume.chatThreadCount = e;
            }
        };
        t_prototype.logOfflinePreackCount = function(t, n = false) {
            if (this.offlineResume) {
                if (n === true) {
                    this.offlineResume.preackMessageCount += t;
                } else {
                    this.offlineResume.preackReceiptCount += t;
                }
            }
        };
        t_prototype.logOfflineBatchRequest = function() {
            this.offlineBatch.requestCount++;
        };
        t_prototype.logOfflineBatchReadyWait = function(t) {
            this.offlineBatch.readyWaitMs += t;
        };
        t_prototype.logOfflineBatchArrival = function(t) {
            this.offlineBatch.waitMs += t;
            this.offlineBatch.maxWaitMs = Math.max(this.offlineBatch.maxWaitMs, t);
        };
        t_prototype.logOfflinePassiveT = function() {
            if (this.offlineResume?.passiveModeT == null) {
                this._logPerformanceT("passiveModeT");
            }
        };
        t_prototype._logPerformanceT = function(t) {
            const e = Math.floor(self.performance.now());
            if (this.offlineResume != null) {
                this.offlineResume[t] = e;
            }
        };
        t_prototype.logLastStanzaT = function() {
            if (this.offlineResume?.lastStanzaT == null) {
                this._logPerformanceT("lastStanzaT");
                this.qpl.markProcessComplete();
                if (!this.isInitialSync) {
                    this.offlineStage.logProcessComplete();
                }
            }
        };
        t_prototype.logMainScreenLoadT = function() {
            this._logPerformanceT("mainScreenLoadT");
            this.qpl.markMainScreenLoad();
            if (!this.isInitialSync) {
                this.offlineStage.logScreenLoad();
            }
        };
        t_prototype.logOfflinePreviewT = function() {
            this._logPerformanceT("offlinePreviewT");
            this.qpl.markOfflinePreviewReceived();
        };
        t_prototype.logOfflineStartT = function() {
            this._logPerformanceT("pageLoadT");
            this.offlineStage.logOfflineStart();
            if (globalThis.document != null && this.offlineResume) {
                this.offlineResume.isResumeStartedInForeground = !globalThis.document.hidden;
            }
        };
        t_prototype.logSocketConnectT = function() {
            this._logPerformanceT("socketConnectT");
            if (!this.isInitialSync) {
                this.$1();
                this.offlineStage.logSocketConnect();
            }
        };
        t_prototype.$1 = function() {
            this.qpl.start();
            const isResumeStartedInForeground = this.offlineResume?.isResumeStartedInForeground;
            if (isResumeStartedInForeground != null) {
                this.qpl.addAnnotations({
                    bool: {
                        isResumeStartedInForeground
                    }
                });
            }
            const page_load_id = this.getPageLoadId();
            if (page_load_id != null) {
                this.qpl.addAnnotations({
                    string: {
                        page_load_id
                    }
                });
            }
        };
        t_prototype.setPageLoadIdProvider = function(t) {
            this.getPageLoadId = t;
        };
        t_prototype.logMissedOfflineComplete = function() {
            if (this.offlineResume) {
                this.offlineResume.isOfflineCompleteMissed = true;
            }
        };
        t_prototype.setIsInitialSync = function() {
            this.isInitialSync = true;
        };
        t_prototype.setLastPushCompleteTimestamp = function() {
            return this.offlineStage.setLastPushCompleteTimestamp();
        };
        t_prototype.isBlockingOfflineResume = function(t) {
            if (t.lastStanzaT != null && t.mainScreenLoadT != null) {
                return t.lastStanzaT < t.mainScreenLoadT;
            }
            if (t.socketConnectT != null && t.lastStanzaT != null && t.mainScreenLoadT == null) {
                return true;
            }
            if (t.socketConnectT != null && t.lastStanzaT == null && t.mainScreenLoadT != null) {
                return false;
            }
            return null;
        };
        t_prototype.commit = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const offlineResume = this.offlineResume;
                if (offlineResume) {
                    offlineResume.offlineSizeBytes = L(offlineResume.offlineSizeBytes, 1000);
                    offlineResume.mailboxAge = E(this.oldestStanzaTs);
                    yield o("WAWebUserPrefsMultiDevice").setRecentMailboxAgeDays(offlineResume.mailboxAge);
                    const isBlockingOfflineResume = this.isBlockingOfflineResume(offlineResume);
                    if (offlineResume.lastStanzaT != null && offlineResume.socketConnectT != null) {
                        offlineResume.offlineProcessingT = offlineResume.lastStanzaT - offlineResume.socketConnectT;
                        o("WAWebAppTracker").attachWAMAppContext(offlineResume, offlineResume.offlineProcessingT);
                    }
                    if (globalThis.document != null) {
                        offlineResume.isResumeInForeground = !globalThis.document.hidden;
                    }
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume] done cnt=",
                        " msg=",
                        " rcpt=",
                        " notif=",
                        " call=",
                        " chat=",
                        ""
                    ])), offlineResume.offlinePreviewCount, offlineResume.offlineMessageCount, offlineResume.offlineReceiptCount, offlineResume.offlineNotificationCount, offlineResume.offlineCallCount, offlineResume.chatThreadCount);
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume] sz=",
                        " decErr=",
                        " preMsg=",
                        " preRcpt=",
                        " lastT=",
                        " pageT=",
                        ""
                    ])), offlineResume.offlineSizeBytes, offlineResume.offlineDecryptErrorCount, offlineResume.preackMessageCount, offlineResume.preackReceiptCount, offlineResume.lastStanzaT, offlineResume.pageLoadT);
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume] sockT=",
                        " passT=",
                        " prevT=",
                        " mainT=",
                        " procT=",
                        " fg=",
                        ""
                    ])), offlineResume.socketConnectT, offlineResume.passiveModeT, offlineResume.offlinePreviewT, offlineResume.mainScreenLoadT, offlineResume.offlineProcessingT, offlineResume.isResumeInForeground);
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume] done startFg=",
                        " blocking=",
                        " age=",
                        ""
                    ])), offlineResume.isResumeStartedInForeground, isBlockingOfflineResume, offlineResume.mailboxAge);
                    const a = offlineResume.offlinePreviewCount === 0;
                    if (!this.isInitialSync && !a) {
                        offlineResume.commit();
                        this.qpl.setAnnotations({
                            int: {
                                messageCount: offlineResume.offlineMessageCount,
                                receiptCount: offlineResume.offlineReceiptCount,
                                notificationCount: offlineResume.offlineNotificationCount,
                                chatThreadCount: offlineResume.chatThreadCount,
                                sizeBytes: offlineResume.offlineSizeBytes,
                                decryptErrorCount: offlineResume.offlineDecryptErrorCount,
                                preackMessageCount: offlineResume.preackMessageCount,
                                preackReceiptCount: offlineResume.preackReceiptCount
                            },
                            bool: {
                                isResumeInForeground: offlineResume.isResumeInForeground,
                                isBlockingOfflineResume
                            }
                        });
                        if (r("gkx")("20665")) {
                            this.qpl.addAnnotations(R(this.offlineBatch));
                        }
                        this.qpl.end();
                        this.endTableUsageMetric();
                        const i = 120 * 1000;
                        const l = 10;
                        const f = Math.max(offlineResume.mainScreenLoadT, offlineResume.lastStanzaT);
                        if (f - offlineResume.socketConnectT > i) {
                            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "[offline-resume] load time > limit: ",
                                ""
                            ])), offlineResume.mainScreenLoadT).sendLogs("slow-offline-resume", {
                                sampling
                            });
                        }
                        if (offlineResume.offlineDecryptErrorCount > l) {
                            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                "[offline-resume] decrypt err > limit: ",
                                ""
                            ])), offlineResume.offlineDecryptErrorCount).sendLogs("slow-offline-resume", {
                                sampling
                            });
                        }
                    } else {
                        if (this.isInitialSync) {
                            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                "[offline-resume] skip: initial sync"
                            ])));
                        } else if (a) {
                            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "[offline-resume] skip: no envelopes"
                            ])));
                        }
                        this.qpl.drop();
                    }
                    this.offlineResume = null;
                }
            });
            function a() {
                return t.apply(this, arguments);
            }
            return a;
        })();
        t_prototype.resetEvent = function() {
            if (this.offlineResume == null) {
                this._initEvents(h.ResumeFromOpentab);
                this.logOfflineStartT();
            }
        };
        t_prototype._generateOfflineSessionId = function() {
            return `${o("WARandomHex").randomHex(4)}${o("WATimeUtils").unixTimeWithoutClockSkewCorrection().toString(10)}`;
        };
        return t;
    })();
    function R(offlineBatch) {
        return {
            int: {
                offline_batch_request_count: offlineBatch.requestCount,
                offline_batch_ready_wait_ms: Math.round(offlineBatch.readyWaitMs),
                offline_batch_wait_ms: Math.round(offlineBatch.waitMs),
                offline_batch_max_wait_ms: Math.round(offlineBatch.maxWaitMs)
            }
        };
    }
    function L(e, t) {
        if (r("gkx")("26258")) {
            return Math.round(e / t) * t;
        }
        return e;
    }
    function E(e) {
        if (e === 0) {
            return 0;
        }
        const t = o("WATimeUtils").unixTime() - e;
        return Math.round(t / o("WATimeUtils").DAY_SECONDS);
    }
    const k = new S;
    l.roundUp = L;
    l.countDays = E;
    l.OfflineResumeReporter = k;
}, 98);