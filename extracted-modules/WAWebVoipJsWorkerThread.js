__d("WAWebVoipJsWorkerThread", [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseDelays",
    "WAWebBackendApi",
    "WAWebVoipPthreadHardening",
    "WAWebVoipPthreadWorkerFields",
    "WorkerMessagePort",
    "asyncToGeneratorRuntime",
    "err"
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
    const g = 0;
    const h = 10;
    const y = 28;
    const C = 71;
    const b = 4;
    const v = 100;
    const S = 10000;
    const R = 5000;
    const L = 10 * 60000;
    const E = 60000;
    class k {
        constructor(){
            this.$1 = self.performance.now();
            this.$2 = 0;
        }
        elapsedMs() {
            return this.$2;
        }
        sleep(t) {
            const e = this;
            return o("WAPromiseDelays").delayMs(t).then(()=>{
                const n = self.performance.now();
                const r = n - e.$1;
                e.$1 = n;
                e.$2 += Math.min(Math.max(r, t), E);
            });
        }
    }
    const I = (()=>{
        function a(e, t = "legacy-pj") {
            this.$8 = null;
            this.$7 = "busy";
            this.$9 = false;
            this.$1 = e;
            this.$2 = t;
            if (t === "pre-init") {
                this.$3 = e.startPreInitJsWorkerThread();
            } else {
                this.$3 = e.startJsWorkerThread();
            }
            if (this.$3 === 0) {
                throw r("err")("voip: failed to create JsWorkerThread");
            }
            this.$4 = t === "pre-init" ? this.$3 : e.getJsWorkerPThreadId(this.$3);
            this.$5 = e.PThread.pthreads[this.$4];
            this.worker = o("WorkerMessagePort").CastWorkerMessagePort(this.$5);
            this.$6 = o("WAWebVoipPthreadHardening").isVoipWorkerLifecycleHardeningEnabled();
        }
        a.create = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = "legacy-pj") {
                const n = e ?? (yield o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm"));
                return new a(n, t);
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        const a_prototype = a.prototype;
        a_prototype.getWorkerID = function() {
            return o("WAWebVoipPthreadWorkerFields").getPthreadWorkerID(this.worker);
        };
        a_prototype.discardUnloadedWorker = function() {
            const PThread = this.$1.PThread;
            this.$7 = "unjoinable";
            this.$8 = (f || (f = n("Promise"))).resolve();
            this.$9 = true;
            if (PThread.pthreads[this.$4] === this.$5) {
                delete PThread.pthreads[this.$4];
            }
            const r = PThread.runningWorkers.indexOf(this.$5);
            if (r >= 0) {
                PThread.runningWorkers.splice(r, 1);
            }
            Reflect.set(this.worker, "pthread_ptr", 0);
            try {
                this.worker.close();
            } catch (error) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [JsWorkerThread] closing unloaded worker threw: ",
                    ""
                ])), String(error));
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [JsWorkerThread] discarded thread ",
                " on worker ",
                " that never loaded"
            ])), this.$4, String(this.getWorkerID()));
        };
        a_prototype.joinJsWorkerThread = function() {
            if (!this.$6) {
                return this.$10();
            }
            if (this.$7 !== "busy") {
                return (f || (f = n("Promise"))).resolve();
            }
            const e = this.$8;
            if (e != null) {
                return e;
            }
            const t = this.$11();
            this.$8 = t;
            return t;
        };
        a_prototype.$10 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this;
                if (this.$12() !== g) {
                    t.setTimeout(function() {
                        e.$10();
                    }, v);
                }
            });
            function r() {
                return e.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.$11 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = new k;
                yield this.$13(e, S, b, v);
                if (this.$7 === "busy") {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [JsWorkerThread] join still busy after ",
                        "ms; releasing callers"
                    ])), e.elapsedMs());
                    this.$14(e).catch((e)=>{
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [JsWorkerThread] background reclaim failed: ",
                            ""
                        ])), String(e));
                    });
                    throw new (o("WACustomError")).TimeoutError(`voip: JsWorkerThread join timed out after ${S}ms`);
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$14 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield e.sleep(R);
                yield this.$13(e, L, R, R);
                if (this.$7 !== "busy") {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [JsWorkerThread] late join completed after ",
                        "ms"
                    ])), e.elapsedMs());
                    return;
                }
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [JsWorkerThread] thread never became joinable within ",
                    "ms; abandoning"
                ])), L);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$13 = function(t, r, o, a) {
            const e = this;
            if (this.$15() !== "busy" || t.elapsedMs() >= r) {
                return (f || (f = n("Promise"))).resolve();
            }
            return t.sleep(o).then(()=>e.$13(t, r, Math.min(o * 2, a), a));
        };
        a_prototype.$15 = function() {
            if (this.$7 !== "busy") {
                return this.$7;
            }
            const e = this.$12();
            if (e === h) {
                return "busy";
            }
            if (e === g) {
                this.$7 = "joined";
            } else {
                this.$7 = "unjoinable";
                this.$16(e);
            }
            return this.$7;
        };
        a_prototype.$16 = function(t) {
            if (t === C || t === y) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [JsWorkerThread] nothing to join (tryjoin=",
                    ")"
                ])), t);
                return;
            }
            o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [JsWorkerThread] unexpected tryjoin result ",
                "; treating the thread as unjoinable"
            ])), t);
        };
        a_prototype.$12 = function() {
            if (this.$2 === "pre-init") {
                return this.$1.tryJoinPreInitJsWorkerThread(this.$3);
            }
            return this.$1.tryJoinJsWorkerThread(this.$3);
        };
        a_prototype.shutdown = function() {
            if (this.$6) {
                if (!this.$9) {
                    this.$9 = true;
                    this.worker.postMessage({
                        type: "cmd",
                        cmd: "jsWorkerCmd",
                        jsWorkerCmd: "shutdown"
                    });
                }
                return this.joinJsWorkerThread();
            }
            return this.$17();
        };
        a_prototype.$17 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                this.worker.postMessage({
                    type: "cmd",
                    cmd: "jsWorkerCmd",
                    jsWorkerCmd: "shutdown"
                });
                yield this.$10();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })();
    l.default = I;
}, 98);