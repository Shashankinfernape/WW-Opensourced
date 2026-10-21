__d("WAWebReactionNotificationUtils", [
    "fbt",
    "WAWebABProps",
    "WAWebChatContactUtils",
    "WAWebChatGetters",
    "WAWebChatSquelchConstants",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmoji",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebGroupMetadataCollection",
    "WAWebMsgGetters",
    "WAWebMsgNotificationPreview",
    "WAWebMsgType",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebNotificationHelpers",
    "WAWebReactionsBEUtils",
    "WAWebSettingsGetters",
    "WAWebSettingsModel",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        return o("WAWebWidFactory").asUserWidOrThrow(r("nullthrows")(o("WAWebMsgGetters").getSender(e)));
    }
    function u(t) {
        const { reactionText, read } = t;
        const a = e(t).toString();
        return !!(read === true || o("WAWebUserPrefsMeUser").isSerializedWidMe(a) || !t.reactionParentKey.fromMe || reactionText === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT || o("WAWebNotificationHelpers").isOfflineResumeInProgress());
    }
    function c(e) {
        const t = o("WAWebABProps").getABPropConfigValue("wa_web_enable_granular_notifications");
        if (t) {
            const n = o("WAWebFrontendMsgGetters").getChat(e);
            const r = o("WAWebChatGetters").getIsGroup(n);
            if (r) {
                return o("WAWebMuteCollection").MuteCollection.getGlobalGroupNotificationReactionsEnabled();
            }
            return o("WAWebMuteCollection").MuteCollection.getGlobalNotificationReactionsEnabled();
        }
        return !o("WAWebMuteGetters").getIsMuted(o("WAWebMuteCollection").MuteCollection.globalReactionsMute());
    }
    function d(e, t) {
        if (!o("WAWebChatGetters").getIsGroup(e)) {
            return false;
        }
        const n = Date.now();
        const a = t.squelch || 0;
        if (n > a) {
            r("WAWebGroupMetadataCollection").find(e.id).then((n)=>{
                if (n != null) {
                    const r = o("WAWebNotificationHelpers")._calculateTimeoutFromGroupMetadata(e.id, n);
                    const a = Date.now() + r;
                    t.squelch = a;
                    if (e.reactionSquelch === o("WAWebChatSquelchConstants").SQUELCH_RESET_VALUE) {
                        e.reactionSquelch = a;
                    }
                }
            });
            return false;
        }
        return true;
    }
    function m(t, n) {
        let r;
        const a = e(n);
        const i = o("WAWebContactCollection").ContactCollection.gadd(a);
        const l = o("WAWebFrontendMsgGetters").getChat(t);
        const s = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(l);
        if (a.isLid() && i.phoneNumber) {
            const c = o("WAWebContactCollection").ContactCollection.get(i.phoneNumber);
            const d = o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(c) && s;
            const m = c != null ? o("WAWebContactGetters").getNotifyName(c) : null;
            r = c?.name ?? (d && m != null ? o("WAWebChatContactUtils").getFormattedNotifyName(m).toString() : o("WAWebWidFormat").widToFormattedUser(i.phoneNumber));
        } else {
            const _ = o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(i) && s;
            r = i.name ?? (_ && o("WAWebContactGetters").getNotifyName(i) != null ? o("WAWebChatContactUtils").getFormattedNotifyName(o("WAWebContactGetters").getNotifyName(i)).toString() : o("WAWebWidFormat").widToFormattedUser(i.id));
        }
        return r;
    }
    function p(e, t) {
        let r;
        let a;
        if (o("WAWebMsgGetters").getIsGroupMsg(e)) {
            a = m(e, t);
        }
        const i = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(t.reactionText) ?? o("WAWebEmoji").OPEN_BOX_CHAR;
        const l = s._("Reacted {emoji} to", [
            s._param("emoji", i)
        ]);
        if (e.type === o("WAWebMsgType").MSG_TYPE.CHAT && !o("WAWebMsgNotificationPreview").shouldShowMsgNotificationPreview(e)) {
            r = s._("a message");
        } else {
            r = o("WAWebGetNotificationStrings").getNotificationMessageBody(e);
            r = s._("\"{originalMessageBody}\"", [
                s._param("originalMessageBody", r)
            ]);
        }
        return {
            body: r.toString(),
            author: a,
            action: l.toString()
        };
    }
    function _(e, t) {
        return {
            body: s._("Liked your status").toString(),
            author: m(e, t)
        };
    }
    function f(e) {
        return !(!o("WAWebSettingsGetters").getShowArchiveV2(r("WAWebSettingsModel")) || !e.archive);
    }
    l.getReactionSenderJid = e;
    l.nonHydratedShouldMuteReactionNotification = u;
    l.shouldEnableReactionsNotificationGranular = c;
    l.shouldSquelchReactionMessage = d;
    l.getNotificationPartsForChatReaction = p;
    l.getNotificationPartsForStatusReaction = _;
    l.isArchivedChat = f;
}, 226);