__d("WAWebChatThreadLoggingCountFields", [], function(t, n, r, o, a, i) {
    const e = {
        profileViews: 0,
        statusViews: 0,
        statusReplies: 0,
        groupMembershipReplies: 0,
        groupPrivateReplies: 0,
        profileReplies: 0,
        chatOverflowClicks: 0,
        pdpViews: 0,
        ordersSent: 0,
        repliesSent: 0,
        commentsReceived: 0,
        afterReadMessagesSent: 0,
        afterReadMessagesReceived: 0,
        afterReadMessagesExpired: 0,
        afterReadMessagesUnreadExpired: 0,
        statusReactionsSent: 0,
        statusReactionsReceived: 0,
        bizAiSuggestedRepliesSeen: 0,
        bizAiSuggestedRepliesSentWithEdits: 0,
        bizAiSuggestedRepliesSentWithoutEdits: 0
    };
    const l = Object.freeze(e);
    const s = Object.freeze(Object.keys(e));
    function u(e) {
        return s.find((t)=>t === e);
    }
    i.COUNT_FIELDS = l;
    i.COUNT_FIELD_NAMES = s;
    i.toMaybeCountActionType = u;
}, 66);