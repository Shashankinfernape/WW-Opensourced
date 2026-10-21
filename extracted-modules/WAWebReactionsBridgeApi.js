__d("WAWebReactionsBridgeApi", [
    "WAWebReactionsFrontendUtils",
    "WAWebUpdateLastAddOnPreviewChatAction",
    "WAWebUpdateOrphanReactionsMsgAction"
], function(t, n, r, o, a, i, l) {
    const e = {
        checkUpdateForOrphanReactions: function({ updatedRecords }) {
            o("WAWebUpdateOrphanReactionsMsgAction").checkUpdateForOrphanReactions(updatedRecords);
        },
        deleteModelsForLastAddOnPreview: function({ messagesIds }) {
            return o("WAWebUpdateLastAddOnPreviewChatAction").deleteModelsForLastAddOnPreview(messagesIds);
        },
        hasReactionsInCollection: function({ msgKeys }) {
            return o("WAWebReactionsFrontendUtils").hasReactionsInCollection(msgKeys);
        }
    };
    l.ReactionsBridgeApi = e;
}, 98);