__d("WAWebNewsletterGetMessageUpdatesJob", [
    "WAJobOrchestratorTypes",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterGetMessageUpdatesQuery",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ids"
    ];
    function s(t, r) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getNewsletterMessageUpdates", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const r_ids = r.ids;
            const a = babelHelpers.objectWithoutPropertiesLoose(r, e);
            const i = yield o("WAWebNewsletterGetMessageUpdatesQuery").getNewsletterMessageUpdatesQuery(t, a);
            const { timestamp, updates } = i;
            const u = yield o("WAWebNewsletterBackendAddOnsUtils").getMsgsAndAddOnsFromUpdates(updates, o("WAWebWidFactory").createWid(t), timestamp);
            yield o("WAWebNewsletterBackendAddOnsUtils").updateAddOnDbRecords(babelHelpers.extends({}, u, {
                ids: r_ids,
                timestamp
            }));
            return babelHelpers.extends({}, u, {
                timestamp,
                ids: r_ids
            });
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.getNewsletterMessageUpdates = s;
}, 98);