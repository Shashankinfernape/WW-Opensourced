__d("WAWebWrapperShouldHaveTail", [
    "WAWebChatGetters",
    "WAWebDisplayType",
    "WAWebMessagePosition"
], function(t, n, r, o, a, i, l) {
    function e({ chat, displayType, isDisplayedAsNotification, position, tailOverride }) {
        return !o("WAWebChatGetters").getIsPSA(chat) && !isDisplayedAsNotification && ![
            o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
            o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER,
            o("WAWebDisplayType").DISPLAY_TYPE.BOT_INVOKE_RESPONSE
        ].includes(displayType) && !tailOverride && (position === o("WAWebMessagePosition").MsgPosition.FRONT || position === o("WAWebMessagePosition").MsgPosition.SINGLE) || displayType === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO || !!tailOverride;
    }
    l.shouldHaveTail = e;
}, 98);