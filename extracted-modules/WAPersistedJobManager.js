__d("WAPersistedJobManager", [
    "Promise",
    "WAJobRequirement",
    "WALogger",
    "WAPromiseBackoffs",
    "WATimeUtils",
    "asyncToGeneratorRuntime"
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
    const w = 1;
    const A = (()=>{
        function e(e) {
            this.feature = e;
        }
        const t = e.prototype;
        t.toString = function() {
            return `RequiresPage: ${this.feature}`;
        };
        return e;
    })();
    const F = (()=>{
        function e(e) {
            this.backoffOptions = e;
        }
        const t = e.prototype;
        t.toString = function() {
            return "RetryOnBackoff";
        };
        return e;
    })();
    const O = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.toString = function() {
            return "NonRetryableError";
        };
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const B = function(t) {
        this.result = t;
    };
    const W = "$unstarted";
    const q = "$finished";
    const U = 5;
    const V = (()=>{
        function t(t) {
            const r = this;
            const { accessors: i, isRestartAfterCrash: l, unfinishedJobEntries: u } = t;
            const c = new Map;
            const d = u.then((t)=>{
                const a = [];
                const u = [];
                t.forEach((e)=>{
                    if (e.stepHardStartCountAfterTimeout >= U) {
                        a.push(e);
                    } else {
                        u.push(e);
                    }
                });
                return (M || (M = n("Promise"))).all(a.map((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": stuck on the step ",
                        ", aborting the job"
                    ])), G(t), t.step).sendLogs(`job-stuck-${t.type}`);
                    return i.deletePersistedJob(t.jobId);
                })).then(()=>{
                    u.forEach((e)=>{
                        if (!c.has(e.jobId)) {
                            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                ": restarting"
                            ])), H(e));
                            c.set(e.jobId, r.$1(e, l));
                        }
                    });
                });
            });
            this.implementationLoaders = new Map;
            this.implementations = new Map;
            this.stepBlockers = new WeakMap;
            this.accessors = i;
            this.activeJobs = c;
            this.initialJobsPromise = d;
            this.listeners = t.listeners;
            this.deprecatedJobs = t.deprecatedJobs;
            this.executionScheduler = t.executionScheduler;
            this.useExecutionScheduler = t.useExecutionScheduler ?? function() {
                return false;
            };
        }
        const r = t.prototype;
        r.loadAndRunJobFromId = function(t) {
            const e = this.activeJobs.get(t);
            if (e != null) {
                return e;
            }
            const n = this.$2(t);
            this.activeJobs.set(t, n);
            return n;
        };
        r.$2 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this.accessors;
                const n = this.initialJobsPromise;
                yield n;
                const r = yield t.readPersistedJob(e);
                if (r) {
                    return this.$1(r, false);
                }
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Persisted job missing for given ID"
                ])));
                return null;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.$3 = function(t) {
            const e = this.implementationLoaders;
            const n = this.implementations;
            const r = n.get(t);
            if (r) {
                return r;
            }
            const o = e.get(t);
            if (!o) {
                return null;
            }
            const a = o();
            n.set(t, a);
            return a;
        };
        r.$4 = function(t, r) {
            if (r == null || r.length === 0) {
                return (M || (M = n("Promise"))).resolve();
            }
            const e = this.stepBlockers;
            let a = e.get(r);
            if (a == null) {
                a = o("WAJobRequirement").joinRequirements(r.map((e)=>e()), j);
                e.set(r, a);
            }
            return a(t);
        };
        r.$5 = function(t, n, r = false, a) {
            const e = this;
            const i = t.step;
            const l = n.findIndex((e)=>e.stepName === i);
            const s = n[l].info(t.current, t.original, K(t, r));
            const { code: u, requirements: d } = s;
            let m = this.$4(t, d);
            if (a) {
                m = m.then(a);
            }
            return m.then(()=>e.$6(t, function() {
                    return u(t.current, t.original, K(t, r));
                })).then((a)=>{
                if (a instanceof B) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": InterruptJob"
                    ])), z(t));
                    return a.result;
                }
                const i = l + 1;
                if (i >= n.length) {
                    return a;
                }
                const s = n[i];
                t.step = s.stepName;
                t.current = a;
                t.stepHardStartCountAfterTimeout = 0;
                t.stepFirstStartTime = o("WATimeUtils").unixTime();
                t.stepUnexpectedErrorCount = 0;
                t.waitUntil = null;
                t.backedOffCount = 0;
                return e.accessors.updatePersistedJob(t).then(()=>e.$5(t, n, r));
            });
        };
        r.$6 = function(t, r) {
            const e = function() {
                return (M || (M = n("Promise"))).resolve().then(()=>{
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": running step"
                    ])), z(t));
                    return r();
                });
            };
            const a = this.executionScheduler;
            if (a == null || !this.useExecutionScheduler()) {
                return e();
            }
            return a.run(e, {
                name: `${t.type}.${t.step}`
            }).promise;
        };
        r.$1 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const a = this;
                const i = this.accessors;
                const l = this.activeJobs;
                const s = this.deprecatedJobs;
                const u = this.listeners;
                const { onJobFinished: c, onJobStarted: d } = u;
                let D = yield this.$3(e.type);
                const x = s[e.type];
                if (!D) {
                    if (x) {
                        if (x === "NOOP") {
                            o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                "No implementation for deprecated ",
                                ", job deleted"
                            ])), e.type);
                            yield i.deletePersistedJob(e.jobId);
                            return null;
                        }
                    } else {
                        o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "No implementation for ",
                            ". Maybe it should have been put to the deprecated list?"
                        ])), e.type).sendLogs("missing-job-implementation");
                        yield i.deletePersistedJob(e.jobId);
                        return null;
                    }
                    D = yield x();
                }
                const $ = D;
                if (x) {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "Running deprecated job ",
                        ""
                    ])), e.type);
                }
                const P = e.stepFirstStartTime ?? o("WATimeUtils").unixTime();
                e.stepFirstStartTime = P;
                e.stepUnexpectedErrorCount = e.stepUnexpectedErrorCount || 0;
                e.backedOffCount = e.backedOffCount || 0;
                if (e.step === q) {
                    let N = e.waitUntil;
                    const O = o("WATimeUtils").secondsUntil(P);
                    if (N != null && o("WATimeUtils").isInFuture(N) && O > 0) {
                        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            ": skew detected, adjusting accordingly"
                        ])), H(e));
                        N = o("WATimeUtils").castToUnixTime(N - O);
                        if (o("WATimeUtils").isInFuture(N)) {
                            e.stepFirstStartTime = o("WATimeUtils").castToUnixTime(P - O);
                            e.waitUntil = N;
                            yield this.accessors.updatePersistedJob(e);
                        }
                    }
                    if (N == null || !o("WATimeUtils").isInFuture(N)) {
                        o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            ": removing completed, expired job from db"
                        ])), H(e));
                        yield i.deletePersistedJob(e.jobId);
                    }
                    l.delete(e.jobId);
                    return e.current;
                }
                const B = e.step !== W ? D.find((t)=>t.stepName === e.step) : D[0];
                if (!B) {
                    o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "No implementation for ",
                        ".",
                        ""
                    ])), e.type, e.step).sendLogs("missing-job-step");
                    yield i.deletePersistedJob(e.jobId);
                    return null;
                }
                e.step = B.stepName;
                const U = function() {
                    const r = e.waitUntil;
                    let i = (M || (M = n("Promise"))).resolve();
                    if (r != null) {
                        const l = o("WATimeUtils").futureUnixTime(o("WATimeUtils").DAY_SECONDS);
                        if (r > l) {
                            o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                ": trim wait from ",
                                " to ",
                                ""
                            ])), z(e), r, l);
                            e.waitUntil = l;
                            i = a.accessors.updatePersistedJob(e).then(()=>o("WATimeUtils").delayUntil(l));
                        } else {
                            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                ": delaying until ",
                                ""
                            ])), z(e), r);
                            i = o("WATimeUtils").delayUntil(r);
                        }
                    }
                    return i.then(()=>{
                        const r = function() {
                            e.waitUntil = null;
                            if (!o("WATimeUtils").happenedWithin(P, o("WATimeUtils").DAY_SECONDS)) {
                                e.stepHardStartCountAfterTimeout++;
                            }
                            return a.accessors.updatePersistedJob(e);
                        };
                        return a.$5(e, $, t, r).catch((t)=>{
                            if (t instanceof A) {
                                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                                    "",
                                    ": requires page"
                                ])), z(e));
                                if (e.stepHardStartCountAfterTimeout > 0) {
                                    --e.stepHardStartCountAfterTimeout;
                                    a.accessors.updatePersistedJob(e);
                                }
                                return new (M || (M = n("Promise")))(function() {});
                            }
                            if (t instanceof F) {
                                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                                    "",
                                    ": RetryOnBackoff"
                                ])), z(e));
                                const r = o("WAPromiseBackoffs").getDelay(++e.backedOffCount, t.backoffOptions);
                                e.waitUntil = o("WATimeUtils").futureUnixTime(Math.ceil(r / 1000));
                                if (e.stepHardStartCountAfterTimeout > 0) {
                                    --e.stepHardStartCountAfterTimeout;
                                }
                                return a.accessors.updatePersistedJob(e).then(U);
                            } else if (e.stepUnexpectedErrorCount < w) {
                                o("WALogger").WARN(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                                    "",
                                    ": Unhandled exception. Tried ",
                                    " times"
                                ])), z(e), e.stepUnexpectedErrorCount);
                                o("WALogger").WARN(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                                    "",
                                    ": Unhandled exception: ",
                                    ""
                                ])), z(e), t);
                                e.stepUnexpectedErrorCount++;
                                return a.accessors.updatePersistedJob(e).then(U);
                            }
                            throw t;
                        });
                    });
                };
                const V = U();
                const G = V.then((()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                        o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            ": finished job"
                        ])), z(e));
                        let n = null;
                        try {
                            n = c(e.jobId, e.type, e.original, t);
                        } catch (t) {
                            o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                                "onJobFinished for ",
                                " threw exception ",
                                ""
                            ])), e.type, t).sendLogs("onJobFinished-threw");
                        }
                        if (n != null && n > 0) {
                            e.waitUntil = o("WATimeUtils").futureUnixTime(Math.ceil(n / 1000));
                            e.step = q;
                            e.current = t;
                            e.stepFirstStartTime = o("WATimeUtils").unixTime();
                            yield a.accessors.updatePersistedJob(e);
                        } else {
                            yield i.deletePersistedJob(e.jobId);
                            l.delete(e.jobId);
                        }
                    });
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })(), (()=>{
                    const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                        o("WALogger").ERROR(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " failed with error ",
                            ""
                        ])), e.type, n).sendLogs(`job-threw-exception-${e.type}`);
                        const r = $.find((t)=>t.stepName === e.step);
                        if (!r) {
                            o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                ": ",
                                " step not found"
                            ])), e.type, e.step);
                        } else {
                            const a = r.info(e.current, e.original, K(e, t));
                            if (a.stopRetryIf != null) {
                                yield a.stopRetryIf.onStopRetry(e.current, e.original, K(e, t));
                            }
                        }
                        yield i.deletePersistedJob(e.jobId);
                        l.delete(e.jobId);
                    });
                    return function(e) {
                        return r.apply(this, arguments);
                    };
                })());
                try {
                    d(e.jobId, e.type, e.original);
                } catch (t) {
                    o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                        "onJobStarted for ",
                        " threw exception ",
                        ""
                    ])), e.type, t).sendLogs("onJobStarted-threw");
                }
                return G.then(()=>V);
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.addPersistedJobImplementation = function(t, n) {
            const e = this.deprecatedJobs;
            const r = this.implementationLoaders;
            if (r.has(t)) {
                o("WALogger").ERROR(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                    "addPersistedJobImplementation called twice for ",
                    ""
                ])), t).sendLogs("repeat-job-loader");
                return;
            }
            e && e[t];
            r.set(t, n);
        };
        r.fireAndForget = function(t) {
            const e = this;
            this.accessors.maybeCreateJob(t).then(({ id: n })=>e.loadAndRunJobFromId(n));
        };
        r.waitUntilPersisted = function(t) {
            const e = this;
            return this.accessors.maybeCreateJob(t).then(({ id: n })=>{
                e.loadAndRunJobFromId(n);
            });
        };
        r.waitUntilCompleted = function(t) {
            const e = this;
            return this.accessors.maybeCreateJob(t).then(({ id: n })=>e.loadAndRunJobFromId(n));
        };
        r.fireAndForgetNonPersisted = function(t) {
            o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                "fireAndForgetNonPersisted not implemented in PersistedJobManager"
            ])));
        };
        r.waitUntilCompletedNonPersisted = function(t) {
            return (M || (M = n("Promise"))).resolve(function() {
                return o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "waitUntilCompletedNonPersisted not implemented in PersistedJobManager"
                ])));
            });
        };
        return t;
    })();
    function H(e) {
        return `Job[${e.jobId}] (${e.type})`;
    }
    function G(e) {
        return `[Job ${e.type}] `;
    }
    function z(e) {
        return `Job[${e.jobId}] (${e.type}.${e.step})`;
    }
    function j(e, t, n) {
        if (e === "unsatisfiable") {
            o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " halting because of ",
                ""
            ])), z(n), t);
        } else if (e === "unsatisfied") {
            o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " waiting on ",
                ""
            ])), z(n), t);
        }
    }
    function K(e, t = false) {
        return {
            jobStartTime: e.startTime,
            afterCrash: t,
            interruptJob: Q
        };
    }
    function Q(e) {
        return new B(e);
    }
    l.RetryOnBackoff = F;
    l.NonRetryableError = O;
    l.InterruptJob = B;
    l.UNSTARTED_JOB = W;
    l.FINISHED_JOB = q;
    l.MAX_STEP_HARD_START_COUNT_AFTER_TIMEOUT = U;
    l.PersistedJobManager = V;
}, 98);