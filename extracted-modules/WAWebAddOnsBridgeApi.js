__d("WAWebAddOnsBridgeApi", [
    "WAWebAddOnsUpdateSendStatesAction",
    "WAWebCommentAction",
    "WAWebMarkAddOnsAsReadAction",
    "WAWebPinMessageAction",
    "WAWebPollsPollVoteCollection",
    "WAWebPollsUpsertVotesModelCollectionMsgAction",
    "WAWebReactionsMsgAction",
    "WAWebUpsertEventResponsesModelCollectionAction"
], function(t, n, r, o, a, i, l) {
    const e = {
        updateAddOnCollectionAcks: function({ updatesByType }) {
            o("WAWebAddOnsUpdateSendStatesAction").updateAddOnCollectionsSendStatesAction(updatesByType);
        },
        upsertVotesModelCollection: function({ restoredFromDb, votes, votesToRemove }) {
            o("WAWebPollsUpsertVotesModelCollectionMsgAction").upsertVotesModelCollection(votes, votesToRemove, restoredFromDb);
        },
        markAddOnsAsReadUi: function({ updatedMsgKeys }) {
            o("WAWebMarkAddOnsAsReadAction").markAddOnsAsReadUiAction(updatedMsgKeys);
        },
        updatePinCollection: function({ msgs, removeMsgs }) {
            return o("WAWebPinMessageAction").updatePinCollection(msgs, removeMsgs);
        },
        hasPollVotesInCollection: function({ msgKeys }) {
            return msgKeys.map((e)=>!!o("WAWebPollsPollVoteCollection").PollVoteCollection.getByMsgKey(e));
        },
        handleCommentNotification: function({ comments, revokes }) {
            o("WAWebCommentAction").handleCommentNotification(comments, revokes);
        },
        upsertEventResponsesModelCollection: function({ eventResponses, eventResponsesToRemove }) {
            return o("WAWebUpsertEventResponsesModelCollectionAction").upsertEventResponsesModelCollection(eventResponses, eventResponsesToRemove);
        },
        upsertCommentModelCollection: function({ comments, commentsToRemove }) {
            return o("WAWebCommentAction").upsertCommentModelCollection(comments, commentsToRemove);
        },
        handleReactionNotification: function({ reactions }) {
            o("WAWebReactionsMsgAction").handleReactionNotification(reactions);
        }
    };
    l.AddOnsBridgeApi = e;
}, 98);