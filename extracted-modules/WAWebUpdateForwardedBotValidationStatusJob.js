__d("WAWebUpdateForwardedBotValidationStatusJob", [
    "WAJobOrchestratorTypes",
    "WAWebModelStorageUtils",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, validationStatus) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("updateForwardedBotValidationStatus", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebModelStorageUtils").getStorage().lock([
                "message"
            ], (()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*([r]) {
                    const o = yield r.get(e.toString());
                    if (o?.forwardedAiBotMessageInfo != null) {
                        yield r.merge(e.toString(), {
                            forwardedAiBotMessageInfo: babelHelpers.extends({}, o.forwardedAiBotMessageInfo, {
                                validationStatus
                            })
                        });
                    }
                });
                return function(e) {
                    return r.apply(this, arguments);
                };
            })());
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.updateForwardedBotValidationStatus = e;
}, 98);