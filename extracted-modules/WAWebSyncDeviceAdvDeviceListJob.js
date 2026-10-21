__d("WAWebSyncDeviceAdvDeviceListJob", [
    "WAJobOrchestratorTypes",
    "WAWebAdvSyncDeviceListApi",
    "WAWebOrchestratorNonPersistedJob"
], function(t, n, r, o, a, i, l) {
    function e(wids, context, n) {
        const r = {
            wids,
            context,
            phash: n
        };
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("syncDeviceList", function(e) {
            return o("WAWebAdvSyncDeviceListApi").syncDeviceList(e);
        }).waitUntilCompleted(r);
    }
    function s() {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("syncMyDeviceList", function(e) {
            return o("WAWebAdvSyncDeviceListApi").syncMyDeviceList();
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP
        }).waitUntilCompleted();
    }
    l.syncDeviceListJob = e;
    l.syncMyDeviceListJob = s;
}, 98);