__d("WAWebPassiveModeManager", [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAPromiseQueue",
    "WAPromiseRaceAbort",
    "WAResolvable",
    "WASendPassiveModeProtocol",
    "WAWebBackendEventBus",
    "WAWebPageLoadLogging",
    "WAWebQplFlowWrapper",
    "WAWebWamOfflineResumeReporter",
    "getErrorSafe",
    "qpl"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
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
    const E = r("qpl")._(891431279, "3267");
    const k = 60000;
    const I = (()=>{
        function t() {
            const t = this;
            this.$1 = new AbortController;
            this.$2 = new (o("WAResolvable")).Resolvable;
            this.$3 = false;
            this.$4 = [];
            this.$5 = [];
            this.$7 = k;
            this.$8 = new (o("WAPromiseQueue")).PromiseQueue;
            this.$9 = false;
            this.$10 = 0;
            o("WAWebBackendEventBus").BackendEventBus.onSocketStreamDisconnected(function() {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "PassiveModeManager: trying to abort passive mode because of disconnect"
                ])));
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "PassiveModeManager: ",
                    " tasks from current or last run: ",
                    ""
                ])), t.$5.length, t.$5.map((e)=>e.name).join(", "));
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "PassiveModeManager: processing tasks finished: ",
                    ""
                ])), t.$2.resolveWasCalled());
                t.$1?.abort();
                t.resetState();
            });
        }
        const a = t.prototype;
        a.passiveTimeoutTimer_TESTONLY = function() {
            return this.$6;
        };
        a.resetState = function() {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "PassiveModeManager: reset status"
            ])));
            this.$5 = [];
            if (this.$6 != null) {
                self.clearTimeout(this.$6);
                this.$6 = null;
            }
            this.$3 = false;
            if (!this.$2.resolveWasCalled()) {
                this.$2.resolve();
            }
            this.$2 = new (o("WAResolvable")).Resolvable;
            this.$1 = new AbortController;
        };
        a.registerPassiveTask = function(t, n) {
            if (this.$4.find((e)=>e.name === t)) {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "PassiveModeManager: passive task ",
                    " already registered"
                ])), t);
            } else {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "PassiveModeManager: register passive task ",
                    ""
                ])), t);
                this.$4.push({
                    name: t,
                    task: n
                });
            }
        };
        a.enableDebugPassiveMode = function() {};
        a.stayInPassiveMode_GuestExperiencesOnly = function() {
            this.$9 = true;
        };
        a.executePassiveTasks = function() {
            const e = this;
            this.$10++;
            o("WAWebPageLoadLogging").addPageLoadQplAnnotationNow({
                passive_execute_count: this.$10,
                passive_task_count: this.$4.length,
                passive_task_names: this.$4.map((e)=>e.name).join(",") || "none"
            });
            if (!this.shouldConnectAsPassiveMode()) {
                this.$2.resolve();
                return;
            }
            const t = [].concat(this.$4);
            this.$4 = [];
            this.$8.enqueue(function() {
                e.$5 = t;
                o("WAWebPageLoadLogging").startPageLoadQplMeasure("passive_tasks");
                o("WAWebQplFlowWrapper").QPL.markerPoint(E, "PassiveTasks_start");
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "PassiveModeManager: executePassiveTasks: start to execute ",
                    " passive tasks: ",
                    ""
                ])), t.length, t.map((e)=>e.name).join(", "));
                const a = r("WAPromiseRaceAbort")((L || (L = n("Promise"))).all(t.map(({ task: n })=>n(e.$1.signal).catch((e)=>{
                        if (r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR) {
                            throw e;
                        }
                        o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "PassiveModeManager: executePassiveTasks: failed for single task with ",
                            ""
                        ])), e);
                    }))), e.$1.signal).then(()=>{
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "PassiveModeManager: executePassiveTasks: complete all tasks"
                    ])));
                    e.$11();
                }).catch(o("WAAbortError").catchAbort(function() {
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "PassiveModeManager: executePassiveTasks: abort by disconnect, skip send active"
                    ])));
                    e.$2.resolve();
                })).catch((t)=>{
                    o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "PassiveModeManager: executePassiveTasks: end with error ",
                        ""
                    ])), t);
                    e.$11();
                }).finally(()=>{
                    o("WAWebPageLoadLogging").endPageLoadQplMeasure("passive_tasks");
                    o("WAWebQplFlowWrapper").QPL.markerPoint(E, "PassiveTasks_end");
                    o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "PassiveModeManager: executePassiveTasks: done"
                    ])));
                    e.resetState();
                });
                const i = new L(function(t) {
                    e.$6 = self.setTimeout(function() {
                        o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                            "PassiveModeManager: executePassiveTasks: passive mode end with timeout"
                        ]))).sendLogs("passive-timeout");
                        e.$11();
                        e.resetState();
                        t();
                    }, e.$7);
                });
                return L.race([
                    a,
                    i
                ]);
            });
        };
        a.$11 = function() {
            if (!this.$9) {
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "PassiveModeManager: _endPassiveMode"
                ])));
                this.$2.resolve();
                o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logOfflinePassiveT();
                if (!this.$3) {
                    o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                        "PassiveModeManager: send passive active iq"
                    ])));
                    o("WASendPassiveModeProtocol").sendPassiveModeProtocol("active");
                }
            }
        };
        a.waitForPassiveTaskEnd = function() {
            return this.$2.promise;
        };
        a.shouldConnectAsPassiveMode = function() {
            return this.$3 || this.$4.length > 0 || this.$9;
        };
        a.setPassiveModeTimeout = function(t) {
            o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                "PassiveModeManager: setPassiveModeTimeout: config timeout to be ",
                ""
            ])), t);
            this.$7 = t;
        };
        return t;
    })();
    const T = new I;
    l.DEFAULT_MAX_PASSIVE_MODE_TIME_MS = k;
    l.PassiveTaskManager = T;
}, 98);