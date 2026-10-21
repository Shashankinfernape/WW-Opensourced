__d("WAWebLogDailyStatsJob", [
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    const e = r("requireDeferred")("WAWebTasksDailyStatsTask").__setRef("WAWebLogDailyStatsJob");
    function s() {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("logDailyStats", (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = yield e.load();
                const r = n.logDailyStats;
                return r();
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })(), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT
        }).waitUntilCompleted();
    }
    l.logDailyStatsJob = s;
}, 98);