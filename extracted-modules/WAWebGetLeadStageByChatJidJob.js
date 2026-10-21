__d("WAWebGetLeadStageByChatJidJob", [
    "WAJobOrchestratorTypes",
    "WAWebLeadStageSublistSelector",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatJid }) {
            return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getLeadStageByChatJid", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return o("WAWebLeadStageSublistSelector").getLeadStageForChatFromSublist(chatJid);
            }), {
                priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
            }).waitUntilCompleted();
        });
        return s.apply(this, arguments);
    }
    l.getLeadStageByChatJidJob = e;
}, 98);