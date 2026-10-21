__d("WAWebRenderCursorGuessMessageHeight", [
    "WAUnicodeUtils",
    "WAWebMessageLiveLocation.react",
    "WAWebMessageLocation.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUnifiedResponseHeightEstimate"
], function(t, n, r, o, a, i, l) {
    const e = 10;
    function s(t) {
        let a = 0;
        if (!t) {
            return a;
        }
        if (o("WAWebMsgGetters").getIsBotPluginCarouselMsg(t)) {
            return e;
        }
        if (t.quotedMsg) {
            a += 54;
        }
        if (t.caption != null && t.caption !== "") {
            a += 31;
        }
        switch(t.type){
            case o("WAWebMsgType").MSG_TYPE.NOTIFICATION:
            case o("WAWebMsgType").MSG_TYPE.GP2:
            case o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION:
            case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION:
            case o("WAWebMsgType").MSG_TYPE.CALL_LOG:
            case o("WAWebMsgType").MSG_TYPE.CIPHERTEXT:
            case o("WAWebMsgType").MSG_TYPE.REVOKED:
            case o("WAWebMsgType").MSG_TYPE.CHAT:
                {
                    if (o("WAWebMsgGetters").getLinkPreview(t)) {
                        a += 53;
                    }
                    const l = o("WAUnicodeUtils").numCodepoints(t.body?.slice(0, o("WAWebMsgGetters").getInitialPageSize(t)).toString());
                    return a + Math.ceil(l / 100) * 19 + 13;
                }
            case o("WAWebMsgType").MSG_TYPE.IMAGE:
                if (a + (t.mediaData?.fullWidth && t.mediaData?.fullHeight || 0)) {
                    return Math.floor(Math.min(330 / t.mediaData.fullWidth * t.mediaData.fullHeight, 330));
                }
                return 330;
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
            case o("WAWebMsgType").MSG_TYPE.AUDIO:
                if (t.isGif) {
                    return a + 137;
                }
                return a + 166;
            case o("WAWebMsgType").MSG_TYPE.LOCATION:
                if (a + t.isLive) {
                    return o("WAWebMessageLiveLocation.react").MSG_HEIGHT;
                }
                return o("WAWebMessageLocation.react").PREVIEW_HEIGHT;
            case o("WAWebMsgType").MSG_TYPE.PTT:
                return a + 67;
            case o("WAWebMsgType").MSG_TYPE.VCARD:
                return a + 74;
            case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                return a + 188;
            case o("WAWebMsgType").MSG_TYPE.STICKER:
                return a + 125;
            case o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE:
                return a + o("WAWebUnifiedResponseHeightEstimate").estimateRichResponseMsgHeight(t);
            case o("WAWebMsgType").MSG_TYPE.UNKNOWN:
            default:
                return a;
        }
    }
    l.default = s;
}, 98);