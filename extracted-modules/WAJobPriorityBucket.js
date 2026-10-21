__d("WAJobPriorityBucket", [
    "WAJobOrchestratorTypes",
    "WALogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = (()=>{
        function t(e) {
            this.tasks = [];
            this.pendingTasks = [];
            this.lastJobStartedTimestampMs = null;
            this.jobMaxConcurrency = e.jobMaxConcurrencyMap ?? {};
        }
        const n = t.prototype;
        n.updateConfig = function(t) {
            this.jobMaxConcurrency = t.jobMaxConcurrencyMap ?? {};
        };
        n.getStats = function() {
            return [].concat(this.tasks, this.pendingTasks).reduce((e, t)=>{
                const r = e[t.jobName] ?? 0;
                e[t.jobName] = r + 1;
                return e;
            }, {});
        };
        n.next = function() {
            const e = this;
            if (this.tasks.length === 0) {
                return null;
            }
            const t = this.pendingTasks.reduce((e, t)=>{
                const r = e.get(t.jobName) ?? 0;
                e.set(t.jobName, r + 1);
                return e;
            }, new Map);
            const n = this.tasks.filter((n)=>(t.get(n.jobName) ?? 0) < (e.jobMaxConcurrency[n.jobName] ?? o("WAJobOrchestratorTypes").DEFAULT_CONCURRENCY));
            if (n.length > 0) {
                return [
                    n[0]
                ];
            }
            return null;
        };
        n.add = function(t, n, r, o) {
            const e = {
                jobId: r,
                jobInfo: n,
                jobName: t,
                run: o
            };
            this.tasks.push(e);
            return e;
        };
        n.markJobTaskPending = function(n) {
            if (this.pendingTasks.includes(function(e) {
                return e.jobId === n.jobId;
            })) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Assertion failed::markJobTaskPending found jobId: ",
                    " in pending tasks"
                ])), n.jobId).sendLogs("JobOrchestrator::markJobTaskPending");
            }
            this.lastJobStartedTimestampMs = Date.now();
            this.pendingTasks.push(n);
            this.tasks = this.tasks.filter((e)=>e.jobId !== n.jobId);
        };
        n.markJobTaskDone = function(t) {
            this.pendingTasks = this.pendingTasks.filter((e)=>e.jobId !== t);
            if (this.tasks.includes(function(e) {
                return e.jobId === t;
            })) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Assertion failed::markJobTaskDone found jobId: ",
                    " in scheduled tasks"
                ])), t).sendLogs("JobOrchestrator::markJobTaskDone");
            }
        };
        n.count = function() {
            return this.tasks.length;
        };
        n.pendingCount = function() {
            return this.pendingTasks.length;
        };
        n.clearWaitingTasks = function() {
            this.tasks = [];
        };
        n.clear = function() {
            this.tasks = [];
            this.pendingTasks = [];
        };
        n.getLastJobStartedTimestamp = function() {
            return this.lastJobStartedTimestampMs;
        };
        return t;
    })();
    const c = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.next = function() {
            const e = this;
            if (this.tasks.length === 0) {
                return null;
            }
            const r = this.pendingTasks.reduce((e, t)=>{
                const r = e.get(t.jobName) ?? 0;
                e.set(t.jobName, r + 1);
                return e;
            }, new Map);
            const o = this.tasks.filter((t)=>(r.get(t.jobName) ?? 0) < (e.jobMaxConcurrency[t.jobName] ?? 1));
            if (o.length === 0) {
                return null;
            }
            const a = this.jobMaxConcurrency[o[0].jobName] ?? 1;
            const i = r.get(o[0].jobName) ?? 0;
            if (a > 1 && i < a) {
                const l = o.filter((e)=>e.jobName === o[0].jobName);
                const s = Math.min(l.length, a - i);
                return l.slice(0, s);
            }
            return [
                o[0]
            ];
        };
        return t;
    })(u);
    l.BaseJobBucket = u;
    l.LowJobBucket = c;
}, 98);