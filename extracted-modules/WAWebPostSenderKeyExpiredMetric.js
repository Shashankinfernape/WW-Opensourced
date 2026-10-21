__d("WAWebPostSenderKeyExpiredMetric", [
    "WAWebGetMessageChatTypeFromWid",
    "WAWebSenderKeyExpiredWamEvent",
    "WAWebWamNumberToSizeBucket",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e({ chatId, deviceCount, expiryReason }) {
        const i = new (o("WAWebSenderKeyExpiredWamEvent")).SenderKeyExpiredWamEvent;
        if (expiryReason != null) {
            i.expiryReason = expiryReason;
        }
        if (chatId != null) {
            const l = o("WAWebWidFactory").createWidFromWidLike(chatId);
            i.chatType = o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(l);
        }
        if (deviceCount != null && deviceCount > 0) {
            i.deviceSizeBucket = r("WAWebWamNumberToSizeBucket")(deviceCount);
        }
        i.commit();
    }
    l.postSenderKeyExpiredMetric = e;
}, 98);