__d("WAWebRemoveBrazilPaymentStatePlaceholdersAction", [
    "WAWebChatCollection",
    "WAWebFrontendMsgGetters",
    "WAWebLidMigrationUtils",
    "WAWebMsgCollection",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        e.forEach((e)=>{
            const t = c(e);
            if (t != null) {
                u(t);
                t.delete();
            }
        });
        t.forEach(({ chatId, count })=>{
            const r = s(chatId);
            if (r != null && r.unreadCount > 0) {
                r.unreadCount = Math.max(r.unreadCount - count, 0);
            }
        });
    }
    function s(chatId) {
        return o("WAWebChatCollection").ChatCollection.get(chatId) ?? o("WAWebChatCollection").ChatCollection.getLatestChatForWid(o("WAWebWidFactory").createWid(chatId));
    }
    function u(e) {
        const t = o("WAWebFrontendMsgGetters").getMaybeChat(e);
        if (t != null && t.activeUnreadCount > 0 && t.isActiveUnreadMsg(e)) {
            t.activeUnreadCount -= 1;
        }
    }
    function c(e) {
        const n = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
        return o("WAWebMsgCollection").MsgCollection.get(e) ?? (n != null ? o("WAWebMsgCollection").MsgCollection.get(n) : null);
    }
    l.removeResolvedBrazilPaymentStatePlaceholders = e;
}, 98);