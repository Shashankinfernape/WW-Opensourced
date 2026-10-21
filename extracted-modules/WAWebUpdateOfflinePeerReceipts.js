__d("WAWebUpdateOfflinePeerReceipts", [
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebGroupUnreadMessageType",
    "WAWebMsgCollection",
    "WAWebNewsletterCollection",
    "WAWebUnreadMentionModel"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (o("WAWebCmd").Cmd.isMainStreamReadyMd) {
            e.forEach(({ chatId, unreadCount, unreadMentionsOfMe })=>{
                const l = o("WAWebChatCollection").ChatCollection.get(chatId) ?? r("WAWebNewsletterCollection").get(chatId);
                if (l != null) {
                    const s = unreadMentionsOfMe.map((e)=>new (r("WAWebUnreadMentionModel"))({
                            id: e.id,
                            timestamp: e.timestamp
                        }));
                    l.unreadMentionMetadata.reset();
                    l.unreadMentionMetadata.addUnreadMentions(s, o("WAWebGroupUnreadMessageType").UnreadMessageType.PERSISTANCE_LOAD);
                    l.set({
                        unreadCount
                    });
                }
            });
            t.forEach(({ ack, msgKey })=>{
                const r = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                if (r) {
                    r.updateAck(ack);
                }
            });
        }
    }
    l.updateOfflinePeerReceipt = e;
}, 98);