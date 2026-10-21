__d("WAWebChatShowUnreadInTitle", [
    "WAWebBotFrontendGating",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebMsgGetters",
    "WAWebNotificationHelpers"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = !!e.muteExpiration;
        if (e.archive) {
            e.showUnreadInTitle = false;
            return;
        }
        if (e.isLocked) {
            e.showUnreadInTitle = false;
            return;
        }
        if (o("WAWebBotUtils").isHiddenBotWid(e.id)) {
            e.showUnreadInTitle = false;
            return;
        }
        if (o("WAWebBotFrontendGating").isBotChatUnavailable(e.id)) {
            e.showUnreadInTitle = false;
            return;
        }
        if (o("WAWebFrontendChatGetters").getOptimisticUnreadCount(e) <= 0) {
            e.showUnreadInTitle = false;
            return;
        }
        if (!o("WAWebChatGetters").getIsGroup(e)) {
            e.showUnreadInTitle = !t;
            return;
        }
        if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata) === o("WAWebGroupType").GroupType.COMMUNITY) {
            e.showUnreadInTitle = false;
            return;
        }
        if (!t) {
            e.showUnreadInTitle = true;
            return;
        }
        if (!e.msgs || e.msgs.length === 0) {
            e.showUnreadInTitle = false;
            return;
        }
        let n = false;
        for(let r = e.msgs, a = o("WAWebFrontendChatGetters").getOptimisticUnreadCount(e), i = Math.max(0, r.length - a); i < r.length; i++){
            const l = e.msgs.at(i);
            if (l && o("WAWebNotificationHelpers").isMeUserMentionedOrQuoted(l)) {
                const s = o("WAWebMsgGetters").getSender(l);
                const u = s != null ? e.getCollection().get(s) : null;
                if (!u || !u.muteExpiration) {
                    n = true;
                    break;
                }
            }
        }
        e.showUnreadInTitle = n;
    }
    l.computeShowUnreadInTitle = e;
}, 98);