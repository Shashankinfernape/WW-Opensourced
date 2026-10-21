__d("WAWebSyncdReportSyncdStatJob", [
    "WAJobOrchestratorTypes",
    "WAWebMdAppStateSyncMutationStatsWamEvent",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSyncdWamUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e() {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("reportSyncdStats", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield o("WAWebSyncdWamUtils").generateActionStatCounts();
                for (const t of e.values()){
                    let n;
                    new (o("WAWebMdAppStateSyncMutationStatsWamEvent")).MdAppStateSyncMutationStatsWamEvent({
                        syncdAction: t.action,
                        applied: (n = o("WAWebSyncdWamUtils")).convertToBucket(t.applied),
                        invalid: n.convertToBucket(t.invalid),
                        orphan: n.convertToBucket(t.orphan),
                        unsupported: n.convertToBucket(t.unsupported),
                        failed: n.convertToBucket(t.failed)
                    }).commit();
                }
            }), {
                priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT,
                maxTimeoutMs: 1000 * 30
            }).waitUntilCompleted();
        });
        return s.apply(this, arguments);
    }
    l.reportSyncdStatsJob = e;
}, 98);