__d("WAWebGroupHistoryBridgeApi", [
    "WAWebGroupHistoryReceiverUserJourneyLogger",
    "WAWebUpdateGroupHistoryBundleStateAction"
], function(t, n, r, o, a, i, l) {
    const e = {
        updateGroupHistoryBundleState: function({ messageKey, processState }) {
            o("WAWebUpdateGroupHistoryBundleStateAction").updateGroupHistoryBundleState(messageKey, processState);
        },
        logGroupHistoryParseHistoryProtoSucceeded: function({ groupId, messagesCount, oowPinsCount, pinsCount, uncountedCount }) {
            o("WAWebGroupHistoryReceiverUserJourneyLogger").GroupHistoryReceiverUserJourneyLogger.parseHistoryProtoSucceeded({
                groupHistoryMessagesCount: messagesCount,
                groupHistoryOutWindowPinsCount: oowPinsCount,
                groupHistoryPinsCount: pinsCount,
                groupHistoryReceiverGroupId: groupId,
                groupHistoryUncountedMessagesCount: uncountedCount
            });
        },
        logGroupHistoryParseHistoryProtoFailed: function({ groupId, messagesCount, oowPinsCount }) {
            o("WAWebGroupHistoryReceiverUserJourneyLogger").GroupHistoryReceiverUserJourneyLogger.parseHistoryProtoFailed({
                groupHistoryMessagesCount: messagesCount,
                groupHistoryOutWindowPinsCount: oowPinsCount,
                groupHistoryReceiverGroupId: groupId
            });
        },
        logGroupHistoryDbInserted: function({ dbIgnoredOlderMessages, groupId, messagesCount, oowPinsCount }) {
            o("WAWebGroupHistoryReceiverUserJourneyLogger").GroupHistoryReceiverUserJourneyLogger.dbInserted({
                groupHistoryDbIgnoredOlderMessages: dbIgnoredOlderMessages,
                groupHistoryMessagesCount: messagesCount,
                groupHistoryOutWindowPinsCount: oowPinsCount,
                groupHistoryReceiverGroupId: groupId
            });
        }
    };
    l.GroupHistoryBridgeApi = e;
}, 98);