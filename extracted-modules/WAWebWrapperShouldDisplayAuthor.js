__d("WAWebWrapperShouldDisplayAuthor", [
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebMessagePosition",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebPipIsParsableOnlineVideoUrl",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e({ displayType, msg, position }) {
        if (r("WAWebWid").isPSA(o("WAWebFrontendMsgGetters").getChat(msg).id) || displayType === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT || displayType === o("WAWebDisplayType").DISPLAY_TYPE.BOT_INVOKE_RESPONSE || o("WAWebMsgGetters").getIsBotFutureproofPlaceholder(msg)) {
            return true;
        }
        if ((o("WAWebMsgGetters").getIsSentByMe(msg) || !o("WAWebMsgGetters").getIsGroupMsg(msg)) && !(o("WAWebMsgGetters").getNewsletterAdminProfile(msg) && o("WAWebNewsletterGatingUtils").isNewsletterAdminProfilesReceiverEnabled())) {
            return false;
        }
        if (msg.type === o("WAWebMsgType").MSG_TYPE.CHAT || msg.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE) {
            return !!(displayType !== o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS && msg.quotedMsg || position !== o("WAWebMessagePosition").MsgPosition.MID && position !== o("WAWebMessagePosition").MsgPosition.END || displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY || o("WAWebMsgGetters").getLinkPreview(msg) || o("WAWebPipIsParsableOnlineVideoUrl").isParsableOnlineVideoURL(msg.richPreviewType, msg.matchedText, msg.doNotPlayInline) || o("WAWebFrontendMsgGetters").getIsTransparentMsg(msg));
        }
        return true;
    }
    l.shouldDisplayAuthor = e;
}, 98);