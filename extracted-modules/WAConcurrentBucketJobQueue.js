__d("WAConcurrentBucketJobQueue", [
    "Promise",
    "WABase64",
    "WACryptoDependencies",
    "WACustomError",
    "WAJobOrchestratorTypes",
    "WAJobPriorityBucket",
    "WALogger",
    "WAMetrics",
    "WAPromiseTimeout",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = 30;
    const d = new Map([
        [
            o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH,
            5
        ],
        [
            o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW,
            1
        ]
    ]);
    function m(e) {
        const t = new Uint8Array(e);
        o("WACryptoDependencies").getCrypto().getRandomValues(t);
        return o("WABase64").encodeB64(t);
    }
    const p = (()=>{
        function t() {
            this.$1 = false;
            this.$2 = 0;
            this.$3 = 0;
            this.$4 = 0;
            this.$5 = new Map;
            this.$6 = new Map;
            this.$7 = new Map;
            this.$9 = 0;
        }
        const a = t.prototype;
        a.init = function(t, n) {
            if (this.$1) {
                throw r("err")("WAConcurrentBucketJobQueue has already initialized");
            }
            this.$4 = t?.bestEffortWaitTimeoutSec ?? c;
            this.$2 = t.maxConcurrency;
            this.$3 = t.maxConcurrency;
            this.$8 = n;
            this.$7 = this.$11(t?.jobPrioritiesQuota);
            this.$6 = new Map(this.$7);
            this.$5 = new Map;
            this.$9 = Date.now();
            const d = new (o("WAJobPriorityBucket")).BaseJobBucket({
                jobMaxConcurrencyMap: t.maxConcurrencyPerJob ?? {}
            });
            const m = new (o("WAJobPriorityBucket")).LowJobBucket({
                jobMaxConcurrencyMap: t.maxConcurrencyPerJob ?? {}
            });
            const p = new (o("WAJobPriorityBucket")).LowJobBucket({
                jobMaxConcurrencyMap: t.maxConcurrencyPerJob ?? {}
            });
            const _ = new (o("WAJobPriorityBucket")).BaseJobBucket({
                jobMaxConcurrencyMap: t.maxConcurrencyPerJob ?? {}
            });
            const f = new (o("WAJobPriorityBucket")).BaseJobBucket({
                jobMaxConcurrencyMap: t.maxConcurrencyPerJob ?? {}
            });
            this.$5.set(o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION, d);
            this.$5.set(o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH, d);
            this.$5.set(o("WAJobOrchestratorTypes").JOB_PRIORITY.OFFLINE, _);
            this.$5.set(o("WAJobOrchestratorTypes").JOB_PRIORITY.HISTORY_SYNC, f);
            this.$5.set(o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW, m);
            this.$5.set(o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT, p);
            this.$1 = true;
        };
        a.updateConfig = function(n) {
            this.$3 += n.maxConcurrency - this.$2;
            this.$2 = n.maxConcurrency;
            this.$5.forEach((e)=>e.updateConfig({
                    jobMaxConcurrencyMap: n.maxConcurrencyPerJob ?? {}
                }));
            this.$7 = this.$11(n?.jobPrioritiesQuota);
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[job-orchestator]: updated WAConcurrentBucketJobQueue config"
            ])));
        };
        a.isInitialized = function() {
            return this.$1;
        };
        a.clearQueue = function() {
            if (!this.$1) {
                throw r("err")("WAConcurrentBucketJobQueue not initialized");
            }
            this.$5.forEach((e)=>e.clear());
        };
        a.clearQueueByPriority = function(t) {
            if (!this.$1) {
                throw r("err")("WAConcurrentBucketJobQueue not initialized");
            }
            this.$5.get(t)?.clearWaitingTasks();
        };
        a.getIntStats = function() {
            const e = this;
            const t = function(n) {
                const o = e.$5.get(n);
                return (o?.count() ?? 0) + (o?.pendingCount() ?? 0);
            };
            return {
                highPriorityBucketSize: t(o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH),
                lowPriorityBucketSize: t(o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW),
                bestEffortPriorityBucketSize: t(o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT)
            };
        };
        a.getStringStats = function() {
            const e = this;
            const t = function(n) {
                const o = e.$5.get(n)?.getStats() ?? {};
                const a = Object.keys(o).reduce(([n, r], t)=>{
                    const a = o[t];
                    if (a > n) {
                        return [
                            a,
                            t
                        ];
                    }
                    return [
                        n,
                        r
                    ];
                }, [
                    0,
                    null
                ]);
                const i = a[1];
                return i;
            };
            return {
                highPriorityMaxJob: t(o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH),
                lowPriorityMaxJob: t(o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW),
                bestEffortPriorityMaxJob: t(o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT)
            };
        };
        a.enqueue = function(t, a, i, l) {
            const c = this;
            if (!this.$1) {
                return (u || (u = n("Promise"))).reject(r("err")("WAConcurrentBucketJobQueue not initialized"));
            }
            let d;
            let p;
            const _ = new (u || (u = n("Promise")))(function(e, t) {
                d = e;
                p = t;
            });
            const f = babelHelpers.extends({
                priority: o("WAJobOrchestratorTypes").DEFAULT_JOB_PRIORITY
            }, i);
            const g = this.getJobBucketByType(f.priority);
            if (!g) {
                return (u || (u = n("Promise"))).reject(r("err")(`WAConcurrentBucketJobQueue no bucket for job with name ${t} was found.`));
            }
            o("WAMetrics").getEventLoopDelay().then((e)=>{
                if (l != null && l.isActive()) {
                    if (l != null) {
                        l.addPoint("measure_event_loop_delay", {
                            int: {
                                eventLoopDelay: e
                            }
                        });
                    }
                }
            });
            l?.addPoint("scheduling_job", {
                string: babelHelpers.extends({}, this.getStringStats(), {
                    priority: f.priority
                }),
                int: babelHelpers.extends({}, this.getIntStats(), {
                    maxTimeoutMs: i?.maxTimeoutMs ?? 0
                })
            });
            const h = `${f.priority}-${t}-${i?.jobId ?? m(8)}`;
            const y = g.add(t, f, h, n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    c.$8.logJobStarted(h);
                    const e = yield c.$12(a(), i?.maxTimeoutMs);
                    c.$8.logJobCompleted(h);
                    d(e);
                } catch (e) {
                    if (e instanceof o("WACustomError").TimeoutError) {
                        c.$8.logJobTimeout(h);
                    } else {
                        c.$8.logJobError(h);
                    }
                    p(e);
                }
            }));
            this.$8.logJobCreated({
                jobId: h,
                jobName: t,
                jobPriority: f.priority,
                pendingJobsCount: g.count()
            });
            if (i && i.priority === o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION) {
                this.$13(y);
            }
            this.$14();
            return _;
        };
        a.getAvailableThreadsCount = function() {
            return this.$3;
        };
        a.getJobQuotaConfig = function() {
            return this.$7;
        };
        a.getRemainingJobCountMap = function() {
            return this.$6;
        };
        a.getJobBucketByType = function(t) {
            return this.$5.get(t);
        };
        a.getSnapshot = function(t) {
            const e = this.getJobBucketByType(t);
            if (e) {
                return e.getStats();
            }
            return null;
        };
        a.$11 = function(t) {
            let e;
            if (t) {
                e = new Map(t);
            } else {
                e = new Map(d);
            }
            e.set(o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT, 0);
            return e;
        };
        a.$15 = function(t) {
            return this.$6.get(t) ?? 0;
        };
        a.$16 = function() {
            this.$6 = new Map(this.$7);
        };
        a.$17 = function(t = true) {
            const e = this;
            let n = 0;
            let r = null;
            let a = 0;
            this.$5.forEach((t, o)=>{
                n += t?.count();
                a += e.$15(o);
                if (r == null && t.count() > 0 && e.$15(o) > 0) {
                    r = t;
                }
            });
            const i = r == null || a === 0;
            if (i) {
                this.$16();
            }
            if (this.$18(n, i)) {
                return this.getJobBucketByType(o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT);
            }
            if (r == null && t) {
                return this.$17(false);
            }
            return r;
        };
        a.$18 = function(t, n) {
            const r = this;
            function a(e, t) {
                const n = Date.now();
                if (e > n) {
                    return false;
                }
                return n - e < t * 1000;
            }
            function i(e, t) {
                const n = Math.ceil(e - Date.now()) + t * 1000;
                if (n > 0) {
                    return n;
                }
                return 0;
            }
            const l = this.getJobBucketByType(o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT);
            const s = t - (l?.count() ?? 0);
            const u = l?.getLastJobStartedTimestamp();
            if (l?.count() === 0) {
                return false;
            }
            if (u == null && a(this.$9, this.$4)) {
                if (this.$10 == null) {
                    const c = i(this.$9, this.$4);
                    this.$10 = setTimeout(()=>{
                        r.$14();
                        r.$10 = null;
                    }, c);
                }
                return false;
            }
            if (s > 0 && u != null && a(u, this.$4)) {
                return false;
            }
            return n;
        };
        a.$19 = function(t) {
            const e = this.$20(t);
            return r("nullthrows")(this.$5.get(e));
        };
        a.$20 = function(t) {
            const e = t.split("-")[0];
            const n = o("WAJobOrchestratorTypes").JOB_PRIORITY.cast(e);
            if (!n) {
                throw r("err")(`ConcurrentBucketQueue cannot extract known job priority type from id: ${t}`);
            }
            return n;
        };
        a.$21 = function(t) {
            const e = this.$20(t);
            if (this.$15(e) > 0) {
                this.$6.set(e, this.$15(e) - 1);
            } else {
                this.$6.set(e, 0);
            }
        };
        a.$14 = function() {
            const e = this;
            while(this.$3 > 0){
                const t = this.$17();
                const n = t?.next();
                if (n == null) {
                    break;
                }
                n.forEach((t)=>{
                    e.$21(t.jobId);
                    e.$13(t);
                });
            }
        };
        a.$12 = function(t, n) {
            if (n !== void 0) {
                return o("WAPromiseTimeout").promiseTimeout(t, n);
            }
            return t;
        };
        a.$13 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const n = this.$19(e.jobId);
                this.$3--;
                n.markJobTaskPending(e);
                const { jobId: r, jobName: a, run: i } = e;
                try {
                    yield this.$12(i(), e.jobInfo?.maxTimeoutMs === void 0 ? o("WAJobOrchestratorTypes").DEFAULT_JOB_TIMEOUT_MS : void 0);
                } catch (e) {
                    if (e instanceof o("WACustomError").TimeoutError) {
                        this.$8.logJobTimeout(r);
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[job-orchestator]: ",
                            " exceeding the timeout, release the thread."
                        ])), a);
                    } else {
                        throw e;
                    }
                } finally{
                    this.$3++;
                    n.markJobTaskDone(r);
                    if (this.$3 > 0) {
                        setTimeout(()=>t.$14(), 0);
                    }
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    l.WAConcurrentBucketJobQueue = p;
}, 98);