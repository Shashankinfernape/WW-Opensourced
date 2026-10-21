__d("WAWebGetOnlyNoteByChatJidJob", [
    "WAJobOrchestratorTypes",
    "WAWebDBNoteDatabaseApi",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatJid }) {
            return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getOnlyNoteByChatJid", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return o("WAWebDBNoteDatabaseApi").getOnlyNoteByChatJid(chatJid);
            }), {
                priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
            }).waitUntilCompleted();
        });
        return s.apply(this, arguments);
    }
    l.getOnlyNoteByChatJidJob = e;
}, 98);