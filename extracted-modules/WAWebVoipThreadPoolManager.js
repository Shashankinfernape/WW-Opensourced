__d("WAWebVoipThreadPoolManager", [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebCoreActionsODS",
    "WAWebPonyfillsIdleCallback",
    "WAWebVoipHiddenPrewarmIdleWork",
    "WAWebVoipPthreadGlueFailureTracker",
    "WAWebVoipPthreadHardening",
    "WAWebVoipPthreadWorkerFields",
    "WAWebVoipQplHelpers",
    "WAWebVoipWaCallEnums",
    "getErrorSafe"
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
    let q = false;
    function U(unusedWorkers) {
        const t = unusedWorkers.length - 1;
        if (t < 0) {
            return false;
        }
        if (o("WAWebVoipPthreadWorkerFields").isPthreadWorkerLoaded(unusedWorkers[t])) {
            return true;
        }
        for(let n = t - 1; n >= 0; n--){
            if (o("WAWebVoipPthreadWorkerFields").isPthreadWorkerLoaded(unusedWorkers[n])) {
                const r = unusedWorkers[n];
                unusedWorkers[n] = unusedWorkers[t];
                unusedWorkers[t] = r;
                return true;
            }
        }
        return false;
    }
    const V = 2;
    const H = 4;
    const G = 50;
    const z = 30000;
    const j = 15000;
    class K {
        constructor(e, t, n){
            this.$3 = false;
            this.$4 = false;
            this.$6 = null;
            this.$7 = new WeakSet;
            this.$8 = 0;
            this.$9 = 0;
            this.$10 = false;
            this.$1 = e;
            this.$2 = t;
            this.$5 = n;
        }
        init() {
            if (this.$2) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: ThreadPoolManager: Initialized (enabled=",
                    ")"
                ])), String(this.$2));
                this.$11();
            }
        }
        $11() {
            const e = this;
            if (!(this.$4 || q)) {
                const t = this;
                const n = this.$1.PThread;
                const a = n.getNewWorker;
                n.getNewWorker = function() {
                    const i = t.getAvailableWorkerCount();
                    if (i === 0) {
                        const l = e.$12();
                        o("WAWebVoipQplHelpers").voipWorkerSetupQplAddPoint(l, o("WAWebVoipQplHelpers").VoipWorkerSetupQplPoint.EMERGENCY_ALLOC);
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[ThreadPoolManager] pool empty, sync alloc 1 worker"
                        ])));
                        try {
                            n.allocateUnusedWorker();
                            e.$9++;
                            const c = n.unusedWorkers[n.unusedWorkers.length - 1];
                            const d = e.$10 ? null : o("WAWebVoipQplHelpers").bindVoipInitQplPointToActiveFlow(o("WAWebVoipQplHelpers").VoipInitQplPoint.FIRST_PTHREAD_LOADED);
                            e.$10 = true;
                            e.$13(n, c).then(()=>d?.());
                            e.$14(c);
                            o("WAWebVoipQplHelpers").endVoipWorkerSetupQplSuccess(l);
                        } catch (error) {
                            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: ThreadPoolManager: Emergency worker allocation failed"
                            ]))).catching(r("getErrorSafe")(error));
                            o("WAWebVoipQplHelpers").endVoipWorkerSetupQplFail(l, "emergency_alloc_failed");
                        }
                    }
                    e.$15(n);
                    const m = a.call(n);
                    const p = e.getAvailableWorkerCount();
                    if (p <= 1) {
                        window.setTimeout(function() {
                            e.ensurePoolCapacity();
                        }, 0);
                    } else if (p <= V) {
                        e.$16();
                    }
                    return m;
                };
                q = true;
                this.$4 = true;
                const i = this.getAvailableWorkerCount();
                const l = this.getRunningWorkerCount();
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] hook installed avail=",
                    " run=",
                    " total=",
                    ""
                ])), i, l, i + l);
            }
        }
        getAvailableWorkerCount() {
            return this.$1.PThread.unusedWorkers.length;
        }
        getRunningWorkerCount() {
            return this.$1.PThread.runningWorkers.length;
        }
        getTotalWorkerCount() {
            return this.getAvailableWorkerCount() + this.getRunningWorkerCount();
        }
        isEnabled() {
            return this.$2;
        }
        ensurePoolCapacity() {
            if (!this.$2) {
                return (W || (W = n("Promise"))).resolve();
            }
            const e = this.getAvailableWorkerCount();
            const t = this.getRunningWorkerCount();
            const r = e + t;
            if (e <= V && r < G) {
                const a = Math.min(H, G - r);
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] low capacity avail=",
                    " +",
                    ""
                ])), e, a);
                return this.$17(a);
            }
            return (W || (W = n("Promise"))).resolve();
        }
        $16() {
            const e = this;
            const t = function() {
                e.ensurePoolCapacity();
            };
            if (!o("WAWebVoipHiddenPrewarmIdleWork").requestHiddenPrewarmIdleWork("pool_growth", t)) {
                o("WAWebPonyfillsIdleCallback").requestIdleCallback(t);
            }
        }
        warmPool(t) {
            if (this.$2) {
                const e = this.getTotalWorkerCount();
                const n = Math.min(t, G);
                const r = Math.max(0, n - e);
                if (r > 0) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ThreadPoolManager: Warming pool from ",
                        " to ",
                        " workers (+",
                        ")"
                    ])), e, n, r);
                    this.$17(r);
                }
            }
        }
        logPoolStats() {
            const e = this.getAvailableWorkerCount();
            const t = this.getRunningWorkerCount();
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "[ThreadPoolManager] stats avail=",
                " run=",
                " total=",
                ""
            ])), e, t, e + t);
        }
        onCallStateChanged(t) {
            const e = this;
            if (this.$2) {
                this.$18();
                if (t === o("WAWebVoipWaCallEnums").CallState.None) {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[ThreadPoolManager] call ended, shrink in ",
                        "ms"
                    ])), z);
                    this.$6 = window.setTimeout(function() {
                        e.$19();
                        e.$6 = null;
                    }, z);
                }
            }
        }
        $18() {
            if (this.$6 != null) {
                window.clearTimeout(this.$6);
                this.$6 = null;
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: ThreadPoolManager: Cancelled pending pool shrink"
                ])));
            }
        }
        $19() {
            const e = this.$5;
            const unusedWorkers = this.$1.PThread.unusedWorkers;
            const n = this.getRunningWorkerCount();
            const r = this.getTotalWorkerCount();
            if (r <= e) {
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] pool=",
                    " <= target=",
                    ""
                ])), r, e);
                return;
            }
            const a = r - e;
            const i = Math.min(a, unusedWorkers.length);
            if (i <= 0) {
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] no unused to release unused=",
                    " run=",
                    ""
                ])), unusedWorkers.length, n);
                return;
            }
            o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                "[ThreadPoolManager] shrink ",
                "->",
                " -",
                ""
            ])), r, e, i);
            const l = this.$12();
            o("WAWebVoipQplHelpers").voipWorkerSetupQplAddPoint(l, o("WAWebVoipQplHelpers").VoipWorkerSetupQplPoint.POOL_SHRINK);
            for(let s = 0; s < i; s++){
                const u = unusedWorkers.pop();
                if (u != null) {
                    u.close();
                }
            }
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "[ThreadPoolManager] shrink done total=",
                " unused=",
                " run=",
                ""
            ])), this.getTotalWorkerCount(), this.getAvailableWorkerCount(), this.getRunningWorkerCount());
            o("WAWebVoipQplHelpers").endVoipWorkerSetupQplSuccess(l);
        }
        $17(t) {
            const e = this;
            if (t <= 0) {
                return (W || (W = n("Promise"))).resolve();
            }
            if (this.$3) {
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] grow dropped cnt=",
                    " (busy)"
                ])), t);
                return (W || (W = n("Promise"))).resolve();
            }
            const a = o("WAWebVoipPthreadHardening").isVoipPoolHardeningEnabled();
            if (a && o("WAWebVoipPthreadGlueFailureTracker").hasTerminalPthreadGlueFailure()) {
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] grow skipped cnt=",
                    " (glue build mismatch latched)"
                ])), t);
                return (W || (W = n("Promise"))).resolve();
            }
            const PThread = this.$1.PThread;
            if (!PThread) {
                o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] PThread unavailable, can't grow"
                ])));
                return (W || (W = n("Promise"))).resolve();
            }
            this.$3 = true;
            const l = this.$12();
            o("WAWebVoipQplHelpers").voipWorkerSetupQplAddPoint(l, o("WAWebVoipQplHelpers").VoipWorkerSetupQplPoint.POOL_GROWTH_START);
            const length = PThread.unusedWorkers.length;
            const length_1 = PThread.runningWorkers.length;
            const c = Date.now();
            o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                "[ThreadPoolManager] grow +",
                " avail=",
                " run=",
                " total=",
                ""
            ])), t, length, length_1, length + length_1);
            const d = [];
            try {
                for(let m = 0; m < t; m++){
                    PThread.allocateUnusedWorker();
                    this.$9++;
                    d.push(PThread.unusedWorkers[PThread.unusedWorkers.length - 1]);
                }
            } catch (error) {
                o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] alloc fail ",
                    "/",
                    ": ",
                    ""
                ])), d.length, t, String(error));
                if (d.length === 0) {
                    this.$3 = false;
                    o("WAWebVoipQplHelpers").endVoipWorkerSetupQplFail(l, "alloc_failed");
                    return (W || (W = n("Promise"))).resolve();
                }
            }
            const p = Date.now() - c;
            const length_2 = PThread.unusedWorkers.length;
            const length_3 = PThread.runningWorkers.length;
            o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                "[ThreadPoolManager] alloc done ",
                "ms +",
                " avail=",
                " run=",
                ""
            ])), p.toFixed(2), d.length, length_2, length_3);
            const g = Date.now();
            const h = [];
            const y = d.map((t, n)=>{
                const r = Date.now();
                const o = a ? e.$20(PThread, t) : e.$13(PThread, t);
                return o.then(()=>{
                    const e = Date.now() - r;
                    if (h.length < 3) {
                        h.push(`Worker ${n}: ${e.toFixed(2)}ms`);
                    }
                });
            });
            const C = a ? (W || (W = n("Promise"))).allSettled(y).then((e)=>e.filter((e)=>e.status === "rejected").length) : (W || (W = n("Promise"))).all(y).then(()=>0);
            return C.then((e)=>{
                const t = Date.now() - g;
                const n = Date.now() - c;
                const length = PThread.unusedWorkers.length;
                const length_1 = PThread.runningWorkers.length;
                if (h.length > 0) {
                    o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                        "[ThreadPoolManager] WASM load ",
                        "w: ",
                        ""
                    ])), d.length, h.join(", "));
                }
                o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] grow done avail=",
                    " run=",
                    " failed=",
                    " wasmT=",
                    "ms totalT=",
                    "ms"
                ])), length, length_1, e, t.toFixed(2), n.toFixed(2));
                o("WAWebVoipQplHelpers").voipWorkerSetupQplAddPoint(l, o("WAWebVoipQplHelpers").VoipWorkerSetupQplPoint.POOL_GROWTH_END);
                if (e === y.length) {
                    o("WAWebVoipQplHelpers").endVoipWorkerSetupQplFail(l, "wasm_load_failed");
                    return;
                }
                if (e > 0) {
                    o("WAWebVoipQplHelpers").endVoipWorkerSetupQplFail(l, "wasm_load_partial");
                    return;
                }
                o("WAWebVoipQplHelpers").endVoipWorkerSetupQplSuccess(l);
            }).catch((e)=>{
                if (!a) {
                    o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ThreadPoolManager: Pool growth error: ",
                        ""
                    ])), String(e));
                    o("WAWebVoipQplHelpers").endVoipWorkerSetupQplFail(l, "wasm_load_failed");
                    return;
                }
                o("WALogger").ERROR(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] grow bookkeeping failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("voip-thread-pool-grow-bookkeeping");
                if (l.isActive()) {
                    o("WAWebVoipQplHelpers").endVoipWorkerSetupQplFail(l, "grow_bookkeeping_error");
                }
            }).finally(()=>{
                e.$3 = false;
            });
        }
        $20(t, n) {
            const e = this;
            const r = this.$13(t, n);
            const workerID = o("WAWebVoipPthreadWorkerFields").getPthreadWorkerID(n);
            return o("WAWebVoipPthreadGlueFailureTracker").failFastOnPthreadGlueFailure(o("WAPromiseTimeout").promiseTimeout(r, j, `voip: pool worker ${String(workerID)} did not load within ${j}ms`), "pthread_bootstrap", {
                workerID
            }).catch((r)=>{
                e.$21(t, n, r);
                e.$22(t, n);
                throw r;
            });
        }
        $21(t, n, r) {
            const e = r instanceof o("WACustomError").TimeoutError;
            if (e) {
                o("WAWebCoreActionsODS").logCallVoipInitThreadPoolWorkerLoadTimeout();
            }
            const a = String(o("WAWebVoipPthreadWorkerFields").getPthreadWorkerID(n));
            if (!this.$23(t, n)) {
                o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] worker ",
                    " load gave up; already loaded, taken by a pthread or released by the tracker: ",
                    ""
                ])), a, String(r));
                return;
            }
            if (r instanceof o("WACustomError").TimeoutError && (this.$24(n, r), !this.$23(t, n))) {
                o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] worker ",
                    " pinned load timed out; released via the glue failure tracker"
                ])), a);
                return;
            }
            this.$25(t, n);
            o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                "[ThreadPoolManager] released unloaded worker ",
                " (",
                "): ",
                ""
            ])), a, e ? "timeout" : "glue refused", String(r));
        }
        $23(t, n) {
            return t.unusedWorkers.includes(n) && !o("WAWebVoipPthreadWorkerFields").isPthreadWorkerLoaded(n) && !o("WAWebVoipPthreadWorkerFields").isPthreadWorkerBound(n);
        }
        $22(t, n) {
            if (!t.unusedWorkers.includes(n) && !o("WAWebVoipPthreadWorkerFields").isPthreadWorkerLoaded(n) && !o("WAWebVoipPthreadWorkerFields").isPthreadWorkerBound(n)) {
                this.$8++;
            }
        }
        $13(t, n) {
            if (Reflect.get(this.$1, "pinWorkerGlue") === true) {
                this.$7.add(n);
            }
            return t.loadWasmModuleToWorker(n);
        }
        $15(t) {
            if (!(!o("WAWebVoipPthreadHardening").isVoipPoolHardeningEnabled() || U(t.unusedWorkers))) {
                this.$26(t);
            }
        }
        $26(t) {
            const e = t.unusedWorkers.at(-1);
            if (!(e == null || !o("WAWebVoipPthreadGlueFailureTracker").isPinnedWorkerGlueUnpinnedForPage() || !this.$7.has(e))) {
                const n = this.getTotalWorkerCount();
                if (n >= G) {
                    o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                        "[ThreadPoolManager] page unpinned and only pinned loads unused, but the pool is full (",
                        "/",
                        "); handing out pinned load ",
                        ""
                    ])), n, G, String(o("WAWebVoipPthreadWorkerFields").getPthreadWorkerID(e)));
                    return;
                }
                this.$27(t);
            }
        }
        $27(t) {
            try {
                t.allocateUnusedWorker();
                this.$9++;
                const e = t.unusedWorkers[t.unusedWorkers.length - 1];
                this.$13(t, e).catch((e)=>{
                    o("WALogger").ERROR(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ThreadPoolManager: unpinned hand-out worker load failed"
                    ]))).catching(r("getErrorSafe")(e));
                });
                this.$14(e);
                o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] page unpinned and only pinned loads unused; allocated worker ",
                    " for the new pthread"
                ])), String(o("WAWebVoipPthreadWorkerFields").getPthreadWorkerID(e)));
            } catch (error) {
                o("WALogger").ERROR(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: ThreadPoolManager: unpinned worker allocation failed"
                ]))).catching(r("getErrorSafe")(error));
            }
        }
        $14(t) {
            if (o("WAWebVoipPthreadHardening").isVoipPoolHardeningEnabled()) {
                window.setTimeout(function() {
                    if (!(o("WAWebVoipPthreadWorkerFields").isPthreadWorkerLoaded(t) || o("WAWebVoipPthreadGlueFailureTracker").hasTerminalPthreadGlueFailure() || o("WAWebVoipPthreadGlueFailureTracker").hasPinnedGlueFailedForWorker(o("WAWebVoipPthreadWorkerFields").getPthreadWorkerID(t)))) {
                        o("WAWebCoreActionsODS").logCallVoipInitThreadPoolEmergencyWorkerLoadTimeout();
                        o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                            "[ThreadPoolManager] emergency worker ",
                            " has not loaded after ",
                            "ms"
                        ])), String(o("WAWebVoipPthreadWorkerFields").getPthreadWorkerID(t)), j);
                    }
                }, j);
            }
        }
        $24(t, n) {
            if (Reflect.get(this.$1, "pinWorkerGlue") === true) {
                try {
                    o("WAWebVoipPthreadGlueFailureTracker").recordPthreadGlueFailure({
                        kind: "pinned_load_failed",
                        cause: "timed_out",
                        error: `stage=pool_grow_timeout ${n.message}`,
                        workerID: o("WAWebVoipPthreadWorkerFields").getPthreadWorkerID(t)
                    });
                } catch (error) {
                    o("WALogger").ERROR(O || (O = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ThreadPoolManager: recording a pinned load timeout threw"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-thread-pool-pinned-timeout-record");
                }
            }
        }
        $12() {
            const PThread = this.$1.PThread;
            return o("WAWebVoipQplHelpers").startVoipWorkerSetupQpl({
                bool: {
                    pin_worker_glue: Reflect.get(this.$1, "pinWorkerGlue") === true
                },
                int: {
                    pool_available: PThread.unusedWorkers.length,
                    pool_running: PThread.runningWorkers.length,
                    pthread_hardening_level: o("WAWebVoipPthreadHardening").getVoipPthreadHardeningLevel(),
                    unloaded_workers_released: this.$8,
                    workers_allocated: this.$9
                }
            });
        }
        $25(t, n) {
            const e = t.unusedWorkers.indexOf(n);
            if (e >= 0) {
                t.unusedWorkers.splice(e, 1);
            }
            try {
                n.close();
            } catch (error) {
                o("WALogger").LOG(B || (B = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] close() threw for worker ",
                    ": ",
                    ""
                ])), String(o("WAWebVoipPthreadWorkerFields").getPthreadWorkerID(n)), String(error));
            }
        }
    }
    l.default = K;
}, 98);