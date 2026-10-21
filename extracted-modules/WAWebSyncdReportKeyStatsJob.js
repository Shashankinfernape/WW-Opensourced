__d("WAWebSyncdReportKeyStatsJob", [
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSyncdKeyCountWamEvent",
    "WAWebSyncdWamUtils",
    "asyncToGeneratorRuntime",
    "gkx"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("reportSyncdKeyStats", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!r("gkx")("26258")) {
                const e = yield o("WAWebSyncdWamUtils").getKeyStats();
                const t = {
                    keysUsedInSnapshotCount: e.keysUsedInSnapshotCount,
                    p80MuationsPerKey: e.p80MuationsPerKey,
                    p95MuationsPerKey: e.p95MuationsPerKey,
                    totalKeyCount: e.totalKeyCount
                };
                if (e.syncdSessionLengthDays != null) {
                    t.syncdSessionLengthDays = e.syncdSessionLengthDays;
                }
                new (o("WAWebSyncdKeyCountWamEvent")).SyncdKeyCountWamEvent(t).commit();
            }
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT,
            maxTimeoutMs: 1000 * 30
        }).waitUntilCompleted();
    }
    l.reportSyncdKeyStatsJob = e;
}, 98);