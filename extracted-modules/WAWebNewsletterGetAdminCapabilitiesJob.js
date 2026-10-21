__d("WAWebNewsletterGetAdminCapabilitiesJob", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexFetchNewsletterAdminCapabilitiesJob",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getNewsletterAdminCapabilities", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                return o("WAWebMexFetchNewsletterAdminCapabilitiesJob").mexFetchNewsletterAdminCapabilities(t);
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[NEWSLETTER][getNewsletterAdminCapabilities] fetch failed"
                ])));
                return new Set;
            }
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.getNewsletterAdminCapabilities = s;
}, 98);