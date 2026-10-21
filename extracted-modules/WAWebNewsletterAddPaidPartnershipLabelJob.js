__d("WAWebNewsletterAddPaidPartnershipLabelJob", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexNewsletterAddPaidPartnershipLabelJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s({ messageType, msgId, newsletterJid, serverId }) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("addPaidPartnershipLabel", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const t = yield o("WAWebMexNewsletterAddPaidPartnershipLabelJob").mexNewsletterAddPaidPartnershipLabelJob(newsletterJid, serverId, messageType);
                if (t === true) {
                    yield o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge([
                        {
                            id: msgId,
                            hasPaidPartnershipLabel: true
                        }
                    ]);
                }
                return t;
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][dsa-26-paid-partnership] add label failed"
                ]))).tags("newsletter").sendLogs("newsletter-add-paid-partnership-label-job-failed");
                return false;
            }
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.addPaidPartnershipLabel = s;
}, 98);