__d("WAWebNewsletterGetAdminInfoJob", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexFetchNewsletterAdminInfoJob",
    "WAWebNewsletterModelUtils",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getNewsletterAdminInfo", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const n = yield o("WAWebMexFetchNewsletterAdminInfoJob").mexFetchNewsletterAdminInfo(t);
                const { adminCount, adminProfile, adminProfilesSettingEnabled } = n;
                return {
                    adminCount: adminCount ?? o("WAWebNewsletterModelUtils").DEFAULT_NEWSLETTER_ADMIN_COUNT,
                    adminProfile,
                    adminProfilesSettingEnabled
                };
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[getNewsletterAdminInfo] fetch failed, using default"
                ])));
                return {
                    adminCount: o("WAWebNewsletterModelUtils").DEFAULT_NEWSLETTER_ADMIN_COUNT,
                    adminProfile: null,
                    adminProfilesSettingEnabled: false
                };
            }
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.getNewsletterAdminInfo = s;
}, 98);