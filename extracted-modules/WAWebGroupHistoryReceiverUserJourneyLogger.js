__d("WAWebGroupHistoryReceiverUserJourneyLogger", [
    "WALogger",
    "WATimeUtils",
    "WAWebGroupHistoryReceiverUserJourneyWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumGroupHistoryReceiverUserJourneyActionType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    class s {
        $1(n) {
            const unifiedSessionId = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
            if (unifiedSessionId == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] Unified session ID is null"
                ])));
                return;
            }
            new (o("WAWebGroupHistoryReceiverUserJourneyWamEvent")).GroupHistoryReceiverUserJourneyWamEvent(babelHelpers.extends({}, n, {
                userJourneyMs: o("WATimeUtils").unixTimeMs(),
                unifiedSessionId
            })).commit();
        }
        downloadStarted(t, isAutoProcess) {
            this.$1({
                groupHistoryReceiverActionType: o("WAWebWamEnumGroupHistoryReceiverUserJourneyActionType").GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE.GROUP_HISTORY_DOWNLOAD_STARTED,
                groupHistoryReceiverGroupId: t,
                isAutoProcess
            });
        }
        downloadSucceeded(t) {
            this.$1({
                groupHistoryReceiverActionType: o("WAWebWamEnumGroupHistoryReceiverUserJourneyActionType").GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE.GROUP_HISTORY_DOWNLOAD_SUCCEEDED,
                groupHistoryReceiverGroupId: t
            });
        }
        downloadFailed(t, receiverFailureReason) {
            this.$1({
                groupHistoryReceiverActionType: o("WAWebWamEnumGroupHistoryReceiverUserJourneyActionType").GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE.GROUP_HISTORY_DOWNLOAD_FAILED,
                groupHistoryReceiverGroupId: t,
                receiverFailureReason
            });
        }
        downloadExpired(t) {
            this.$1({
                groupHistoryReceiverActionType: o("WAWebWamEnumGroupHistoryReceiverUserJourneyActionType").GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE.GROUP_HISTORY_DOWNLOAD_EXPIRED,
                groupHistoryReceiverGroupId: t
            });
        }
        parseHistoryProtoFailed({ groupHistoryMessagesCount, groupHistoryOutWindowPinsCount, groupHistoryReceiverGroupId, receiverFailureReason }) {
            this.$1({
                groupHistoryReceiverActionType: o("WAWebWamEnumGroupHistoryReceiverUserJourneyActionType").GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE.GROUP_HISTORY_PARSE_HISTORY_PROTO_FAILED,
                groupHistoryReceiverGroupId,
                groupHistoryMessagesCount,
                groupHistoryOutWindowPinsCount,
                receiverFailureReason
            });
        }
        parseHistoryProtoSucceeded({ groupHistoryMessagesCount, groupHistoryOutWindowPinsCount, groupHistoryPinsCount, groupHistoryReceiverGroupId, groupHistoryUncountedMessagesCount }) {
            this.$1({
                groupHistoryReceiverActionType: o("WAWebWamEnumGroupHistoryReceiverUserJourneyActionType").GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE.GROUP_HISTORY_PARSE_HISTORY_PROTO_SUCCEEDED,
                groupHistoryReceiverGroupId,
                groupHistoryMessagesCount,
                groupHistoryOutWindowPinsCount,
                groupHistoryPinsCount,
                groupHistoryUncountedMessagesCount
            });
        }
        dbInserted({ groupHistoryDbIgnoredOlderMessages, groupHistoryMessagesCount, groupHistoryOutWindowPinsCount, groupHistoryReceiverGroupId }) {
            this.$1({
                groupHistoryReceiverActionType: o("WAWebWamEnumGroupHistoryReceiverUserJourneyActionType").GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE.GROUP_HISTORY_DB_INSERTED,
                groupHistoryReceiverGroupId,
                groupHistoryMessagesCount,
                groupHistoryDbIgnoredOlderMessages,
                groupHistoryOutWindowPinsCount
            });
        }
        downloadButtonClicked(t) {
            this.$1({
                groupHistoryReceiverActionType: o("WAWebWamEnumGroupHistoryReceiverUserJourneyActionType").GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE.GROUP_HISTORY_DOWNLOAD_BUTTON_CLICKED,
                groupHistoryReceiverGroupId: t
            });
        }
        viewButtonClicked(t) {
            this.$1({
                groupHistoryReceiverActionType: o("WAWebWamEnumGroupHistoryReceiverUserJourneyActionType").GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE.GROUP_HISTORY_VIEW_BUTTON_CLICKED,
                groupHistoryReceiverGroupId: t
            });
        }
        footerInlineShown(t) {
            this.$1({
                groupHistoryReceiverActionType: o("WAWebWamEnumGroupHistoryReceiverUserJourneyActionType").GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE.GROUP_HISTORY_FOOTER_INLINE_SHOWN,
                groupHistoryReceiverGroupId: t
            });
        }
        footerFloatingShown(t) {
            this.$1({
                groupHistoryReceiverActionType: o("WAWebWamEnumGroupHistoryReceiverUserJourneyActionType").GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE.GROUP_HISTORY_FOOTER_FLOATING_SHOWN,
                groupHistoryReceiverGroupId: t
            });
        }
    }
    const u = new s;
    l.GroupHistoryReceiverUserJourneyLogger = u;
}, 98);