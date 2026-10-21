__d("WAWebWamWorkerOfflineProcessReporter", [
    "Promise",
    "WALogger",
    "WARandomHex",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebBuildConstants",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMultiDevice",
    "WAWebWamEnumOfflineProcessRunReasons",
    "WAWebWamEnumOfflineProcessStages",
    "WAWebWamOfflineResumeReporter",
    "WAWebWebcOfflineNotificationProcessWamEvent",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = 10000;
    const _ = 120000;
    const f = (()=>{
        function t() {
            this.$8 = null;
            this.$9 = null;
            this.$1 = `${o("WARandomHex").randomHex(4)}${o("WATimeUtils").unixTimeWithoutClockSkewCorrection().toString(10)}`;
            this.$2 = o("WAWebWamEnumOfflineProcessRunReasons").OFFLINE_PROCESS_RUN_REASONS.PUSH_NOTIFICATION;
            this.pageLoadT = self.performance.now();
            this.$3 = 0;
            this.$4 = 0;
            this.$5 = 0;
            this.$6 = 0;
            this.$7 = 0;
            this.$10 = 0;
            this.$11 = 0;
            this.$12 = 0;
        }
        const r = t.prototype;
        r.$14 = function(t, n) {
            const e = new (o("WAWebWebcOfflineNotificationProcessWamEvent")).WebcOfflineNotificationProcessWamEvent({
                offlineProcessSessionId: this.$1,
                offlineProcessStageTimestampMs: n,
                currentOfflineProcessStage: t,
                swVersion: o("WAWebBuildConstants").VERSION_BASE,
                runReason: this.$2
            });
            if (t === o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PROCESSING || t === o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PROCESS_COMPLETE || t === o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PROCESS_INTERRUPTED) {
                this.$15(e);
            }
            if (t === o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PROCESS_COMPLETE || t === o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PROCESS_INTERRUPTED) {
                e.commitAndWaitForFlush(true);
            } else {
                e.commit();
            }
        };
        r.$15 = function(t) {
            t.offlineProcessMessageCount = o("WAWebWamOfflineResumeReporter").roundUp(this.$11 ?? 0, 10);
            t.offlineProcessNotificationCount = o("WAWebWamOfflineResumeReporter").roundUp(this.$12 ?? 0, 10);
            t.offlineProcessMailboxAge = o("WAWebWamOfflineResumeReporter").countDays(this.$7 ?? 0);
            t.offlineProcessDecryptErrorCount = this.$10 ?? 0;
        };
        r.$16 = function() {
            const t = this;
            if (this.$8 == null) {
                this.$8 = new (o("WAShiftTimer")).ShiftTimer(function() {
                    if (t.$13 === o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PROCESSING) {
                        const n = Math.floor(self.performance.now() - t.pageLoadT);
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume] progress pMsg=",
                            " pNotif=",
                            " procT=",
                            ""
                        ])), t.$11, t.$12, n);
                        if (n > _) {
                            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[offline-resume] processing too long"
                            ]))).sendLogs("worker-offline-process-takes-too-long");
                            return;
                        }
                        t.$14(o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PROCESSING, n);
                        t.$16();
                    }
                });
            }
            this.$8.onOrAfter(p);
        };
        r.$17 = function() {
            this.$13 = o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PROCESSING;
            this.$8?.cancel();
            this.$16();
        };
        r.$18 = function(t = -1) {
            const e = this.$13 === o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PROCESS_INTERRUPTED;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume] ends msg=",
                " rcpt=",
                " notif=",
                " call=",
                " pMsg=",
                " pNotif=",
                ""
            ])), this.$3, this.$4, this.$5, this.$6, this.$11, this.$12);
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume] err=",
                " sockT=",
                " prevT=",
                " doneT=",
                " age=",
                " int=",
                ""
            ])), this.$10, this.socketConnectT, this.offlinePreviewT, this.processCompleteT, t, e);
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume] reason=",
                ""
            ])), this.$2);
        };
        r.getCurrentStage = function() {
            return this.$13;
        };
        r.updateOldestStanzaTime = function(t) {
            if (this.$7 == null || this.$7 > t) {
                this.$7 = t;
            }
        };
        r.updateOfflineCount = function(t) {
            this.$3 = t.message;
            this.$4 = t.receipt;
            this.$5 = t.notification;
            this.$6 = t.call;
        };
        r.updateOfflineDecryptionErrorCount = function(t) {
            this.$10 = t;
        };
        r.updateProcessedMessageCount = function() {
            if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
                this.$11 += 1;
            }
        };
        r.updateProcessedNotificationCount = function() {
            if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
                this.$12 += 1;
            }
        };
        r.logWorkerInitialized = function(t) {
            this.$13 = o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PAGE_LOAD;
            this.$2 = t;
            this.$14(o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PAGE_LOAD, 0);
        };
        r.logSocketConnect = function() {
            this.$13 = o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.SOCKET_CONNECT;
            const e = Math.floor(self.performance.now() - this.pageLoadT);
            this.socketConnectT = e;
            this.$14(o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.SOCKET_CONNECT, e);
        };
        r.logOfflinePreview = function() {
            this.$13 = o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.OFFLINE_PREVIEW;
            const e = Math.floor(self.performance.now() - this.pageLoadT);
            this.offlinePreviewT = e;
            this.$14(o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.OFFLINE_PREVIEW, e);
            this.$17();
        };
        r.logProcessComplete = function() {
            const e = this;
            if (this.$9 != null) {
                return this.$9;
            }
            if (this.$13 === o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PROCESS_COMPLETE || this.$13 === o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PROCESS_INTERRUPTED) {
                return (m || (m = n("Promise"))).resolve();
            }
            var t = this.$19().finally(()=>{
                if (e.$9 === t) {
                    e.$9 = null;
                }
            });
            this.$9 = t;
            return t;
        };
        r.$19 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = o("WAWebWamOfflineResumeReporter").countDays(this.$7);
                yield o("WAWebUserPrefsMultiDevice").setRecentMailboxAgeDays(t);
                if (!(this.$13 === o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PROCESS_COMPLETE || this.$13 === o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PROCESS_INTERRUPTED)) {
                    this.$13 = o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PROCESS_COMPLETE;
                    this.$8?.cancel();
                    this.$8 = null;
                    const n = Math.floor(self.performance.now() - this.pageLoadT);
                    this.processCompleteT = n;
                    this.$18(t);
                    this.$14(o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PROCESS_COMPLETE, n);
                    o("WAWebUserPrefsGeneral").setLastPushCompleteTimestamp(o("WATimeUtils").unixTimeMs());
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.logProcessInterrupted = function() {
            if (!(this.$13 == null || this.$13 === o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PROCESS_COMPLETE || this.$13 === o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PROCESS_INTERRUPTED)) {
                this.$13 = o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PROCESS_INTERRUPTED;
                this.$8?.cancel();
                this.$8 = null;
                const t = Math.floor(self.performance.now() - this.pageLoadT);
                this.processCompleteT = t;
                this.$18();
                this.$14(o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES.PROCESS_INTERRUPTED, t);
            }
        };
        return t;
    })();
    const g = new f;
    l.WorkerOfflineResumeReporter = g;
}, 98);