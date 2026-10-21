__d("WAWebWamChatActionEventsLogger", [
    "WAWebChatActionWamEvent"
], function(t, n, r, o, a, i, l) {
    function e({ chatActionChatType, chatActionEntryPoint, chatActionType, conversationThreadId }) {
        const i = new (o("WAWebChatActionWamEvent")).ChatActionWamEvent({
            chatActionEntryPoint,
            chatActionType
        });
        if (chatActionChatType != null) {
            i.chatActionChatType = chatActionChatType;
        }
        if (conversationThreadId != null) {
            i.conversationThreadId = conversationThreadId;
        }
        i.commit();
    }
    l.logChatActionEvent = e;
}, 98);