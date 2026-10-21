__d("WAWebQuotedMessageProtoUtils", [
    "WALogger",
    "WAWebE2EProtoParser",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ isCarouselCardReply, msgContext, quotedMsg }) {
        return o("WAWebE2EProtoParser").parseMsgProto({
            messageProtobuf: quotedMsg,
            message: {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN
            },
            msgContext: msgContext === "history" ? "history_quoted" : "quoted",
            bizSource: isCarouselCardReply ? "quoted_carousel_card" : null
        });
    }
    function u(t) {
        try {
            return s(t);
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "failed parsing quoted message: ",
                ""
            ])), error).sendLogs("parse-quoted-msg-error");
            return null;
        }
    }
    l.parseQuotedMessage = u;
}, 98);