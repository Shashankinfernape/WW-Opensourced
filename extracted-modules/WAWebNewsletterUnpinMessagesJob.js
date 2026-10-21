__d("WAWebNewsletterUnpinMessagesJob", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexNewsletterUnpinMessagesJob",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t, a) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("unpinNewsletterMessages", (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                try {
                    return yield o("WAWebMexNewsletterUnpinMessagesJob").mexNewsletterUnpinMessages(t.newsletterJid, t.messageIds);
                } catch (error) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[MEX][NEWSLETTER] unpin messages failed"
                    ]))).catching(r("getErrorSafe")(error)).tags("GQL", "MEX", "NEWSLETTER", "PIN").sendLogs("newsletter-unpin-job-failed");
                    throw error;
                }
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })(), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted({
            newsletterJid: t,
            messageIds: a
        });
    }
    l.unpinNewsletterMessages = s;
}, 98);