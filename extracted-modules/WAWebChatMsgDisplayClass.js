__d("WAWebChatMsgDisplayClass", [
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebUtilsShouldShowVideoPreview"
], function(t, n, r, o, a, i, l) {
    function e({ displayType, msg }) {
        if (o("WAWebFrontendMsgGetters").getIsTransparentMsg(msg)) {
            return "messageTransparent";
        }
        if (r("WAWebUtilsShouldShowVideoPreview")(msg)) {
            if (o("WAWebDisplayType").isWideDisplay(displayType)) {
                return "messageVideoLinkPreviewWide";
            }
            return "messageVideoLinkPreview";
        }
        if (o("WAWebMsgGetters").getBotPluginMaybeParent(msg) === true) {
            return "messageChat messageChatBotPluginParent";
        }
        return "messageChat";
    }
    l.default = e;
}, 98);