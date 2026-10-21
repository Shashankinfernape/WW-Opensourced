__d("WAWebGetMessageChatTypeFromWid", [
    "WAWebWamEnumMessageChatType"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e.isUser()) {
            return o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.INDIVIDUAL;
        }
        if (e.isGroup()) {
            return o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.GROUP;
        }
        if (e.isBroadcast()) {
            return o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.BROADCAST;
        }
        if (e.isStatus()) {
            return o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.STATUS;
        }
        if (e.isNewsletter()) {
            return o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.CHANNEL;
        }
        return o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.OTHER;
    }
    l.getMessageChatTypeFromWid = e;
}, 98);