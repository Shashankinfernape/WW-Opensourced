__d("WAWebJobOrchestrator", [
    "WAConcurrentBucketJobQueue",
    "WADefaultJobNoQueue",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebBrokerGlobalAppState",
    "WAWebJobOrchestratorHelper",
    "WAWebOrchestratorJobStatsLogger",
    "WAWebWamEnumWebcScenarioType"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = {
        maxConcurrency: 1,
        bestEffortWaitTimeoutSec: o("WATimeUtils").FIVE_MINUTES,
        jobPrioritiesQuota: new Map([
            [
                (s = o("WAJobOrchestratorTypes")).JOB_PRIORITY.HIGH,
                5
            ],
            [
                s.JOB_PRIORITY.LOW,
                1
            ],
            [
                s.JOB_PRIORITY.OFFLINE,
                3
            ],
            [
                s.JOB_PRIORITY.HISTORY_SYNC,
                1
            ]
        ])
    };
    const c = {
        maxConcurrency: 1,
        bestEffortWaitTimeoutSec: o("WATimeUtils").FIVE_MINUTES,
        jobPrioritiesQuota: new Map([
            [
                s.JOB_PRIORITY.HIGH,
                5
            ],
            [
                s.JOB_PRIORITY.LOW,
                1
            ],
            [
                s.JOB_PRIORITY.OFFLINE,
                1
            ],
            [
                s.JOB_PRIORITY.HISTORY_SYNC,
                1
            ]
        ])
    };
    const d = "default";
    const m = "bucket";
    function p() {
        const e = r("WAWebBrokerGlobalAppState").getCurrentScenario();
        if (e === o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE) {
            return u;
        }
        if (e === o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.OFFLINE_RESUME) {
            return c;
        }
        return u;
    }
    let _ = u;
    let f;
    function g() {
        if (!f) {
            f = new (o("WAWebOrchestratorJobStatsLogger")).JobStatsLogger;
        }
        return f;
    }
    const h = {};
    function y(t = false) {
        const n = t ? d : m;
        const r = p();
        if (h[n]) {
            if (o("WAWebJobOrchestratorHelper").hasConfigChanged(_, r)) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[job-orchestrator] config changed "
                ])));
                _ = r;
                h[n].updateConfig(r);
            }
            return h[n];
        }
        const a = n === "bucket" ? new (o("WAConcurrentBucketJobQueue")).WAConcurrentBucketJobQueue : new (o("WADefaultJobNoQueue")).WADefaultJobNoQueue;
        a.init(r, g());
        h[n] = a;
        _ = r;
        return a;
    }
    l.getInstance = y;
}, 98);