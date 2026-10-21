__d("WAWebSendStickerToActiveChatStickersAction", [
    "WALogger",
    "WAWebApiPrepareCtwaContextSend",
    "WAWebGetActiveStickerChat",
    "WAWebSendStickerAction",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t, n, a) {
        const i = r("WAWebGetActiveStickerChat")();
        if (i == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Cannot call sendStickerToActiveChat without an active chat"
            ])));
            return;
        }
        const l = i.getComposeContents();
        const u = {
            stickerSendOrigin: n,
            quotedMsg: i.composeQuotedMsg,
            ctwaContext: o("WAWebApiPrepareCtwaContextSend").prepareCtwaContextSend(l?.ctwaContextLinkData, l?.ctwaContext)
        };
        if (a === true) {
            u.isWamoSub = true;
        }
        i.composeQuotedMsg = null;
        o("WAWebSendStickerAction").sendStickerToChat(i, t, u).catch((e)=>o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to send sticker to active chat"
            ]))).catching(r("getErrorSafe")(e)).sendLogs("sticker-send-active-chat-failed"));
    }
    l.default = u;
}, 98);