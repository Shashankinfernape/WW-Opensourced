__d("WAWebNewsletterUpdateNewslettersRecordsJob", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaChat"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "updateNewsletterChatRecords"
        ])));
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("updateNewsletterChatRecords", function() {
            return o("WAWebSchemaChat").getChatTable().bulkCreateOrMerge(t);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.updateNewsletterChatRecords = s;
}, 98);