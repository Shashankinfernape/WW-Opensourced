__d("WAWebPersistedJobManager", [
    "Promise",
    "WAPersistedJobManager",
    "WARandomHex",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebJobsStorage",
    "WAWebNoop",
    "WAWebNullFunc",
    "WAWebPersistedJob",
    "WAWebPersistedJobTaskScheduler",
    "WAWebSchemaJobs",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s = null;
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebJobsStorage").initialize();
            const e = o("WAWebSchemaJobs").getTable();
            s = new (o("WAPersistedJobManager")).PersistedJobManager({
                accessors: _(),
                unfinishedJobEntries: e.all().then((e)=>{
                    m(e);
                    return e;
                }),
                isRestartAfterCrash: false,
                listeners: {
                    onJobStarted: r("WAWebNoop"),
                    onJobFinished: o("WAWebNullFunc").returnNull
                },
                deprecatedJobs: {},
                executionScheduler: r("WAWebPersistedJobTaskScheduler"),
                useExecutionScheduler: d
            });
            r("WAWebPersistedJob")(s);
        });
        return c.apply(this, arguments);
    }
    function d() {
        return o("WAWebABProps").getABPropConfigValue("wmi_jm_to_ts_m1");
    }
    function m(e) {
        e.forEach((e)=>{
            if (!(e.step === o("WAPersistedJobManager").FINISHED_JOB || e.stepHardStartCountAfterTimeout >= o("WAPersistedJobManager").MAX_STEP_HARD_START_COUNT_AFTER_TIMEOUT)) {
                p(e.type);
            }
        });
    }
    function p(e) {
        o("WAWebBackendApi").frontendFireAndForget("logPersistedJobJobsStoreTriggered", {
            type: e
        });
    }
    function _() {
        return {
            deletePersistedJob: function(t) {
                const e = o("WAWebSchemaJobs").getTable();
                return e.remove(t);
            },
            updatePersistedJob: function(t) {
                const e = o("WAWebSchemaJobs").getTable();
                return e.createOrReplace(t);
            },
            readPersistedJob: function(t) {
                const e = o("WAWebSchemaJobs").getTable();
                return e.get(t);
            },
            loadAllJobs: function() {
                const e = o("WAWebSchemaJobs").getTable();
                return e.all();
            },
            maybeCreateJob: f
        };
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const l = o("WAWebSchemaJobs").getTable();
            const s = C(t.type, t.uniqKey ?? o("WARandomHex").randomHex(32));
            const u = {
                type: t.type,
                uniqKey: s,
                startTime: o("WATimeUtils").unixTime(),
                version: t.version ?? 1,
                original: t.args,
                current: t.args,
                step: o("WAPersistedJobManager").UNSTARTED_JOB,
                waitUntil: t?.waitUntil ?? null,
                stepFirstStartTime: null,
                stepHardStartCountAfterTimeout: 0,
                stepUnexpectedErrorCount: 0,
                backedOffCount: 0
            };
            if (t.uniqKey == null) {
                return l.createOrReplace(u).then((e)=>({
                        id: e,
                        newlyCreated: true
                    }));
            }
            const c = yield l.equals([
                "uniqKey"
            ], [
                t.uniqKey
            ]);
            if (c.length === 0) {
                return l.createOrReplace(u).then((e)=>({
                        id: e,
                        newlyCreated: true
                    }));
            }
            const d = [];
            let m = null;
            for (const p of c){
                if (p.step !== o("WAPersistedJobManager").FINISHED_JOB) {
                    m = p;
                } else {
                    d.push(l.remove(p.jobId));
                }
            }
            yield (e || (e = n("Promise"))).all(d);
            if (m != null) {
                return {
                    id: m.jobId,
                    newlyCreated: false
                };
            }
            return l.createOrReplace(u).then((e)=>({
                    id: e,
                    newlyCreated: true
                }));
        });
        return g.apply(this, arguments);
    }
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebSchemaJobs").getTable().equals([
                "uniqKey"
            ], C(e, t));
            return n.some((e)=>e.step !== o("WAPersistedJobManager").FINISHED_JOB);
        });
        return y.apply(this, arguments);
    }
    function C(e, t) {
        return JSON.stringify([
            e,
            t
        ]);
    }
    function b() {
        if (s == null) {
            throw r("err")("jobs manager has not been initialized");
        }
        return s;
    }
    l.startWebPersistedJobManager = u;
    l.maybeCreateJob = f;
    l.hasUnfinishedJob = h;
    l.getJobManager = b;
}, 98);