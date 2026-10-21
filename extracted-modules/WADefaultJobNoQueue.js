__d("WADefaultJobNoQueue", [
    "WAJobOrchestratorTypes",
    "WARandomHex",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = (()=>{
        function e() {
            this.$2 = false;
        }
        const t = e.prototype;
        t.init = function(t, n) {
            if (this.$2) {
                throw r("err")("DefaultNoQueue has already initialized");
            }
            this.$1 = n;
            this.$2 = true;
        };
        t.updateConfig = function(t) {};
        t.isInitialized = function() {
            return this.$2;
        };
        t.clearQueue = function() {};
        t.clearQueueByPriority = function(t) {};
        t.getSnapshot = function() {
            throw r("err")("getSnapshot is not implemented for DefaultNoQueue");
        };
        t.enqueue = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                const i = n?.jobId ?? o("WARandomHex").randomHex(8).substr(0, 64);
                this.$1.logJobCreated({
                    jobId: i,
                    jobName: e,
                    jobPriority: n?.priority ?? o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW,
                    pendingJobsCount: 0
                });
                try {
                    this.$1.logJobStarted(i);
                    const l = yield t();
                    this.$1.logJobCompleted(i);
                    return l;
                } catch (e) {
                    this.$1.logJobError(i);
                    throw e;
                }
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return e;
    })();
    l.WADefaultJobNoQueue = e;
}, 98);