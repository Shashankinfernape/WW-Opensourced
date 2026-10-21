__d("WAWebOrchestratorJobInfoEvent", [], function(t, n, r, o, a, i) {
    const e = (()=>{
        function e({ jobName: t, jobPriority: n, pendingJobsCount: r, scenario: o }) {
            this.jobName = t;
            this.scenario = o;
            this.pendingJobsCount = r;
            this.jobPriority = n;
        }
        const t = e.prototype;
        t.logJobAdded = function() {
            this.webcJobAddedT = Date.now();
        };
        t.logJobStarted = function() {
            this.webcJobStartedT = Date.now();
        };
        t.logJobCompleted = function(t) {
            this.webcJobCompletedT = Date.now();
            this.jobResultType = t;
        };
        return e;
    })();
    i.JobInfoEvent = e;
}, 66);