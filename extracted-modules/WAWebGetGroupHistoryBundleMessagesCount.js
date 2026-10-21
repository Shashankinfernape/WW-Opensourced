__d("WAWebGetGroupHistoryBundleMessagesCount", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebRetrieveMessagesForBundle",
    "WAWebSerializeError",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ groupWid, targetStartMessageTime }) {
            return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getGroupHistoryBundleMessageCount", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    const t = yield o("WAWebRetrieveMessagesForBundle").retrieveMessagesForBundle(groupWid, null, targetStartMessageTime);
                    return t.length;
                } catch (error) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history] bundle msg count failed: ",
                        ""
                    ])), r("WAWebSerializeError")(error)).sendLogs("group-history-bundle-message-count-failed");
                    return 0;
                }
            }), {
                priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
            }).waitUntilCompleted();
        });
        return u.apply(this, arguments);
    }
    l.getGroupHistoryBundleMessageCount = s;
}, 98);