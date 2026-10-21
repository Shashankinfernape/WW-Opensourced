__d("WAWebCleanUtmJob", [
    "WAJobOrchestratorTypes",
    "WAPromiseCallSync",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebUtmBizPrefs",
    "WAWebUtmBizUtils"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("cleanExpiredUtm", function() {
            return s();
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT
        }).waitUntilCompleted();
    }
    function s() {
        return o("WAPromiseCallSync").promiseCallSync(function() {
            const e = o("WAWebUtmBizPrefs").getAllUtmsFromLocalStorage();
            Object.keys(e).forEach((t)=>{
                const n = e[t];
                if (o("WAWebUtmBizUtils").hasUtmExpired(n)) {
                    o("WAWebUtmBizPrefs").removeUtmFromLocalStorage(t);
                }
            });
        });
    }
    l.cleanExpiredUtmJob = e;
}, 98);