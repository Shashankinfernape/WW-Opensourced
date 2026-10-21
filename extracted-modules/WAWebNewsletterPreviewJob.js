__d("WAWebNewsletterPreviewJob", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WAWebCreateChat",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterGetMessagesQueryJob",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterMetadataQueryJob",
    "WAWebNewsletterStorageUtils",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterUpdateNewslettersRecordsJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(inviteCode, a, qpl) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getNewsletterPreviewData", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const l = yield (e || (e = n("Promise"))).all([
                o("WAWebNewsletterMetadataQueryJob").queryNewsletterMetadataByInviteCode(inviteCode, a),
                o("WAWebNewsletterGetMessagesQueryJob").queryNewsletterMessagesByInviteCode({
                    inviteCode,
                    messagesCount: o("WAWebNewsletterGatingUtils").getMaxMsgCountFromServer(),
                    qpl
                })
            ]);
            const newsletterMetadata = l[0];
            const u = l[1];
            const { messages, timestamp } = u;
            const m = newsletterMetadata != null ? o("WAWebWidFactory").createWid(newsletterMetadata?.idJid) : null;
            const p = yield o("WAWebNewsletterBackendAddOnsUtils").getMsgsAndAddOnsFromUpdates(messages, r("nullthrows")(m, "Unexpected null metadata"), timestamp);
            const { ids, msgs, pollVotes, reactions } = p;
            return {
                newsletterMetadata,
                newsletterMessages: msgs,
                newsletterReactions: reactions,
                newsletterVotes: pollVotes,
                timestamp,
                ids
            };
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function u(e, t, r) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("persistPreviewNewsletterInfoInDb", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(o("WAWebNewsletterStorageUtils").createNewsletterMetadataObjectForStorage(t));
            yield o("WAWebNewsletterUpdateNewslettersRecordsJob").updateNewsletterChatRecords([
                o("WAWebCreateChat").createNewsletterObjectForStorage(e)
            ]);
            yield o("WAWebNewsletterUpdateMsgsRecordsJob").addNewsletterMsgsRecords(r);
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.getNewsletterPreviewData = s;
    l.persistPreviewNewsletterInfoInDb = u;
}, 98);