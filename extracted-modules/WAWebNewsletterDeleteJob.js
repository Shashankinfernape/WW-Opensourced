__d("WAWebNewsletterDeleteJob", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebJidToWid",
    "WAWebMexDeleteNewsletterJob",
    "WAWebNewsletterDeleteChatJob",
    "WAWebNewsletterMetadataJob",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("deleteNewsletter", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                yield o("WAWebMexDeleteNewsletterJob").mexDeleteNewsletter(t);
                yield o("WAWebNewsletterMetadataJob").deleteNewsletterMetadata(t.toString());
                yield o("WAWebNewsletterDeleteChatJob").deleteNewsletterChat(o("WAWebJidToWid").newsletterJidToWid(t));
                yield o("WAWebNewsletterMetadataJob").deleteNewsletterPicture(t.toString());
                return true;
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][deleteNewsletter] Failed to delete newsletter"
                ]))).tags("newsletter").sendLogs("newsletter-delete-job-fail");
                throw error;
            }
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.deleteNewsletter = s;
}, 98);