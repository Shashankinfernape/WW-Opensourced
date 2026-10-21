__d("WAWebDeleteExpiredPinsJob", [
    "WALogger",
    "WAWebAddonDeleteMsgs",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(parentMsgKeys) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("deleteExpiredPins", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                yield o("WAWebAddonDeleteMsgs").deleteAddonMsgsByParentKeys({
                    parentMsgKeys
                });
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Expired pins deletion failed"
                ])));
                throw error;
            }
        })).waitUntilCompleted();
    }
    l.deleteExpiredPins = s;
}, 98);