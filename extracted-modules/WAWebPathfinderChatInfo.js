__d("WAWebPathfinderChatInfo", [
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return e === "chat" || e === "channel-thread";
    }
    function s(t) {
        if (e(t)) {
            const l = o("WAWebChatCollection").ChatCollection.getActive();
            if (l != null) {
                return u({
                    id: l.id,
                    unreadCount: l.unreadCount,
                    groupSize: l.groupMetadata?.size ?? l.groupMetadata?.participants?.length ?? 0,
                    isMetaAiThread: o("WAWebBotUtils").isMetaAiBot(l.id)
                });
            }
        }
    }
    function u(e) {
        const t = {
            chat_has_unread_messages: e.unreadCount > 0 ? "true" : "false",
            chat_is_meta_ai_thread: e.isMetaAiThread ? "true" : "false"
        };
        const n = c(e.id, e.isMetaAiThread);
        if (n != null) {
            t.chat_type = n;
        }
        if (n === "group" && e.groupSize > 0) {
            t.chat_group_size = String(e.groupSize);
        }
        const r = d(e.id);
        if (r != null) {
            t.ai_bot_type = r;
        }
        return t;
    }
    function c(e, t) {
        if (r("WAWebWid").isGroup(e)) {
            return "group";
        }
        if (e.isBroadcastList()) {
            return "broadcast";
        }
        if (r("WAWebWid").isNewsletter(e)) {
            return "channel";
        }
        if (t) {
            return "meta_ai";
        }
        if (r("WAWebWid").isStatus(e)) {
            return "status";
        }
        if (r("WAWebWid").isUser(e)) {
            return "individual";
        }
        return null;
    }
    function d(e) {
        if (o("WAWebBotUtils").isMetaAiBot(e) || o("WAWebBotUtils").isBusinessAssistantBot(e) || e.isAiHub()) {
            return "meta_ai";
        }
        if (e.isBot()) {
            return "other_bot";
        }
        return null;
    }
    l.getActiveChatInfoMetadata = s;
    l.buildChatInfoMetadata = u;
}, 98);