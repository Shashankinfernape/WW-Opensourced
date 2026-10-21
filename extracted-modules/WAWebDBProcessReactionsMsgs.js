__d("WAWebDBProcessReactionsMsgs", [
    "WAWebApiBulkUpdateChatLastAddOnPreview",
    "WAWebBackendApi",
    "WAWebDBCreateOrUpdateReactions",
    "WAWebDBMarkFutureproofMessagesReparsed",
    "WAWebLastAddOnDBSerialization",
    "WAWebReactionsBEUtils",
    "WAWebShouldUpdateLastAddOnPreview",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length > 0) {
                const t = yield o("WAWebReactionsBEUtils").createReactionsRowFromMsg(e);
                const n = yield o("WAWebDBCreateOrUpdateReactions").createOrUpdateReactions(t);
                yield o("WAWebReactionsBEUtils").updateHasReactionFromParent(n);
                const r = e.map((e)=>e.id.toString());
                yield o("WAWebDBMarkFutureproofMessagesReparsed").markFutureproofMessagesReparsed(r);
                const a = yield o("WAWebShouldUpdateLastAddOnPreview").filterChatsWithAddOnPreviewUpdates(n.map((e)=>o("WAWebLastAddOnDBSerialization").lastAddOnPreviewCandidateFromReactionRowType(e)));
                yield o("WAWebApiBulkUpdateChatLastAddOnPreview").bulkUpdateChatLastAddOnPreview(a);
                o("WAWebBackendApi").frontendFireAndForget("updateChatLastAddOnPreview", {
                    chatMap: a
                });
            }
        });
        return s.apply(this, arguments);
    }
    l.processReactionMsgs = e;
}, 98);