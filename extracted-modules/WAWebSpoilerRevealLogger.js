__d("WAWebSpoilerRevealLogger", [
    "WALogger",
    "WAWebABProps",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebMsgGetters",
    "WAWebSpoilerRevealWamEvent",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u(e.id.remote, o("WAWebMsgGetters").getIsSentByMe(e.unsafe()));
    }
    function u(chatWid, isOwnMessage) {
        return {
            chatWid,
            isOwnMessage
        };
    }
    function c({ chatWid, isOwnMessage }) {
        try {
            if (!o("WAWebABProps").getABPropConfigValue("rich_format_logging_enabled")) {
                return;
            }
            new (o("WAWebSpoilerRevealWamEvent")).SpoilerRevealWamEvent({
                chatType: o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(chatWid),
                isOwnMessage
            }).commit();
        } catch (error) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[spoiler] Failed to log reveal"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("spoiler-reveal-log-failed", {
                sampling: 0.1
            });
        }
    }
    l.getSpoilerRevealContext = s;
    l.getSpoilerRevealContextFromValues = u;
    l.logSpoilerReveal = c;
}, 98);