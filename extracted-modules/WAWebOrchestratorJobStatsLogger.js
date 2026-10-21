__d("WAWebOrchestratorJobStatsLogger", [
    "WALogger",
    "WAWebBrokerGlobalAppState",
    "WAWebOrchestratorJobInfoEvent",
    "WAWebWamEnumWebcJobResultTypeCode",
    "WAWebWamEnumWebcScenarioType",
    "WAWebWebcJobInfoWamEvent",
    "cr:4324",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (()=>{
        function t() {
            this.$1 = new Map;
        }
        const a = t.prototype;
        a.logJobCreated = function(t) {
            if (!r("gkx")("26258")) {
                const { jobId: e, jobName: n, jobPriority: a, pendingJobsCount: i } = t;
                const l = r("WAWebBrokerGlobalAppState").getCurrentScenario();
                const s = new (o("WAWebOrchestratorJobInfoEvent")).JobInfoEvent({
                    jobName: n,
                    jobPriority: a,
                    pendingJobsCount: i,
                    scenario: l
                });
                s.logJobAdded();
                this.$1.set(e, s);
            }
        };
        a.logJobStarted = function(t) {
            if (!r("gkx")("26258")) {
                const e = this.$1.get(t);
                e?.logJobStarted();
            }
        };
        a.logJobCompleted = function(t) {
            this.$2(t, o("WAWebWamEnumWebcJobResultTypeCode").WEBC_JOB_RESULT_TYPE_CODE.COMPLETED);
        };
        a.logJobError = function(t) {
            this.$2(t, o("WAWebWamEnumWebcJobResultTypeCode").WEBC_JOB_RESULT_TYPE_CODE.ERROR);
        };
        a.logJobTimeout = function(t) {
            this.$2(t, o("WAWebWamEnumWebcJobResultTypeCode").WEBC_JOB_RESULT_TYPE_CODE.TIMEOUT);
        };
        a.logJobAborted = function(t) {
            this.$2(t, o("WAWebWamEnumWebcJobResultTypeCode").WEBC_JOB_RESULT_TYPE_CODE.ABORTED);
        };
        a.$2 = function(t, n) {
            if (!r("gkx")("26258")) {
                const e = this.$1.get(t);
                e?.logJobCompleted(n);
                this.$3(e);
                this.$1.delete(t);
            }
        };
        a.$3 = function(r) {
            if (r) {
                const { jobName: t, jobResultType: a, webcJobAddedT: i, webcJobCompletedT: l, webcJobStartedT: s } = r;
                const u = l - s;
                const c = s - i;
                const d = a === o("WAWebWamEnumWebcJobResultTypeCode").WEBC_JOB_RESULT_TYPE_CODE.COMPLETED;
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[job-orchestrator] ",
                    " execT=",
                    "ms waitT=",
                    "ms ok=",
                    ""
                ])), t, u, c, d);
                const m = new (o("WAWebWebcJobInfoWamEvent")).WebcJobInfoWamEvent({
                    jobName: r.jobName,
                    jobPriority: r.jobPriority,
                    jobResultType: r.jobResultType,
                    pendingJobsCount: r.pendingJobsCount,
                    scenario: r.scenario,
                    webcJobAddedT: r.webcJobAddedT,
                    webcJobCompletedT: r.webcJobCompletedT,
                    webcJobStartedT: r.webcJobStartedT
                });
                if (m.scenario === o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE) {
                    const _ = (n("cr:4324") == null ? void 0 : n("cr:4324").JOB_EVENT_SAMPLING_RATE[t]) ?? 1;
                    m.weight = _;
                }
                m.commit();
            }
        };
        return t;
    })();
    l.JobStatsLogger = s;
}, 98);