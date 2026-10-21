__d("WAWebSendMsgDatabaseJob", [
    "WAJobOrchestratorTypes",
    "WAWebDBDeviceListFanout",
    "WAWebOrchestratorNonPersistedJob"
], function(t, n, r, o, a, i, l) {
    function e(wids, chatWidSetToIncludeHostedInFanoutOneToOneChatOnly, n) {
        const r = {
            wids,
            chatWidSetToIncludeHostedInFanoutOneToOneChatOnly,
            shouldMergeAltDevices: n ?? false
        };
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getFanOutList", function(e) {
            return o("WAWebDBDeviceListFanout").getFanOutList(e);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP
        }).waitUntilCompleted(r);
    }
    l.getFanOutListJob = e;
}, 98);