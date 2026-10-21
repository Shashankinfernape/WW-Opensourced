__d("WAWebReportDbVerionsJob", [
    "WAJobOrchestratorTypes",
    "WAWebLocalSchemaVersions",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaVersions",
    "WAWebWebDbVersionNonAnonymousWamEvent",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("reportDbVersions", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebLocalSchemaVersions").getLocalSchemaVersions();
            e.forEach((e, t)=>{
                const n = o("WAWebSchemaVersions").convertDBName(t);
                if (n != null) {
                    new (o("WAWebWebDbVersionNonAnonymousWamEvent")).WebDbVersionNonAnonymousWamEvent({
                        webDbName: n,
                        webDbVersionNumber: e
                    }).commit();
                }
            });
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT,
            maxTimeoutMs: 1000 * 30
        }).waitUntilCompleted();
    }
    l.reportDbVersionsJob = e;
}, 98);