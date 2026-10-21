__d("WAWebGetDisplayType", [
    "WAWebBotGroupGatingUtils",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterCommonGatingUtils"
], function(t, n, r, o, a, i, l) {
    function e(chat) {
        const t = chat?.groupMetadata;
        return t?.isOpenBotGroup === true || t?.isTeeBotGroup === true;
    }
    function s(e) {
        if (e == null) {
            return o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION;
        }
        return u({
            botGroupParticipant: e.botGroupParticipant,
            chat: o("WAWebFrontendMsgGetters").getChat(e),
            isBotInvokeResponse: o("WAWebMsgGetters").getIsMetaBotInvokeResponse(e),
            isStatus: o("WAWebMsgGetters").getIsStatus(e),
            msgKey: e.id,
            type: e.type
        });
    }
    function u({ botGroupParticipant, chat, isBotInvokeResponse, isStatus, msgKey, type }) {
        const u = o("WAWebBotGroupGatingUtils").isGroupBotMessage({
            authorWid: msgKey.participant,
            botGroupParticipant,
            chatWid: msgKey.remote,
            isBotInvoke: isBotInvokeResponse === true
        });
        if (u || e(chat) && (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() || o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled())) {
            return o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION;
        }
        if (isStatus) {
            return o("WAWebDisplayType").DISPLAY_TYPE.STATUS;
        }
        const c = chat != null && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(chat);
        const d = o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() && chat != null && o("WAWebChatGetters").getIsNewsletter(chat);
        const m = type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE;
        if (isBotInvokeResponse === true) {
            return o("WAWebDisplayType").DISPLAY_TYPE.BOT_INVOKE_RESPONSE;
        }
        if (m === true) {
            return o("WAWebDisplayType").DISPLAY_TYPE.MESSAGE_HISTORY_BUNDLE;
        }
        if (c === true) {
            return o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT;
        }
        if (d === true) {
            return o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER;
        }
        return o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION;
    }
    l.getDisplayType = s;
    l.getDisplayTypeFor = u;
}, 98);