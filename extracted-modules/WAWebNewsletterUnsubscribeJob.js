__d("WAWebNewsletterUnsubscribeJob", [
    "WAJobOrchestratorTypes",
    "WAWebBackendErrors",
    "WAWebMexLeaveNewsletterJob",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("unsubscribeFromNewsletter", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const t = yield o("WAWebMexLeaveNewsletterJob").mexLeaveNewsletter(e);
                return t;
            } catch (error) {
                if (error instanceof o("WAWebBackendErrors").ServerStatusCodeError && error.status === 400) {
                    return true;
                }
                throw error;
            }
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.unsubscribeFromNewsletter = e;
}, 98);