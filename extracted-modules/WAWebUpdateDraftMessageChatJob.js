__d("WAWebUpdateDraftMessageChatJob", [
    "WAAbortError",
    "WAJobOrchestratorTypes",
    "WAWebDBChatSerialization",
    "WAWebDBUpdateChatTable",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ abortSignal, chatId, draftMessage }) {
            const a = o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("updateDraftMessageChat", function(e) {
                if (e.abortSignal.aborted) {
                    throw new (o("WAAbortError")).AbortError;
                }
                return o("WAWebDBUpdateChatTable").updateChatTable(e.chatId, o("WAWebDBChatSerialization").serializeChat({
                    draftMessage: e.draftMessage
                }));
            }, {
                priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
            }).waitUntilCompleted({
                chatId,
                draftMessage,
                abortSignal
            });
            yield a;
        });
        return s.apply(this, arguments);
    }
    l.updateDraftMessageChat = e;
}, 98);