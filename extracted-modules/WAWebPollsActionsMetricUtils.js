__d("WAWebPollsActionsMetricUtils", [
    "WAWeb-moment",
    "WAWebChatGetters",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebPollsActionsWamEvent",
    "WAWebWamEnumPollActionType",
    "WAWebWamNumberToClientGroupSizeBucket"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return {
            creationDateInSeconds: e.t,
            hideVoterName: e.pollHideVoterNames ?? undefined,
            pollDurationMs: e.pollEndTime == null ? undefined : e.pollEndTime - e.t * 1000,
            pollOptionsCount: e.pollOptions.length
        };
    }
    function s(e) {
        const t = c(e, o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.OPEN_CREATE_MODAL);
        t.commit();
    }
    function u({ action, chat, creationDateInSeconds, hideVoterName, pollDurationMs, pollOptionsCount }) {
        const l = c(chat, action);
        l.pollCreationDs = d(creationDateInSeconds);
        l.pollOptionsCount = pollOptionsCount;
        if (hideVoterName != null) {
            l.hideVoterName = hideVoterName;
        }
        if (pollDurationMs != null) {
            l.pollDurationMs = pollDurationMs;
        }
        l.commit();
    }
    function c(e, pollAction) {
        const n = new (o("WAWebPollsActionsWamEvent")).PollsActionsWamEvent({
            pollAction
        });
        if (o("WAWebChatGetters").getIsGroup(e)) {
            n.groupSizeBucket = r("WAWebWamNumberToClientGroupSizeBucket")(e.getParticipantCount());
            n.isAdmin = e.iAmAdmin();
        }
        n.chatType = o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(e.id);
        return n;
    }
    function d(e) {
        const t = r("WAWeb-moment").utc(e * 1000);
        t.startOf("day");
        return t.unix();
    }
    l.getPollMetricFieldsFromCreationMsg = e;
    l.commitPollOpenCreationModal = s;
    l.commitPollsActionsMetric = u;
    l.getNearestDayEpochDatestamp = d;
}, 98);