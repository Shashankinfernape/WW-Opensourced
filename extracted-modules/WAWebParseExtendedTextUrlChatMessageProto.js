__d("WAWebParseExtendedTextUrlChatMessageProto", [
    "WAWebMsgType",
    "WAWebParseExtendedTextMessageProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n, msgContext: r, msgMeta: a, rcat: i }) {
        const l = n.extendedTextMessage;
        if (l != null && o("WAWebParseExtendedTextMessageProtoUtils").isUrlExtendedTextMessage(l)) {
            const s = o("WAWebParseExtendedTextMessageProtoUtils").parseExtendedTextMessageProto({
                messageProtobuf: n,
                baseMessage: t,
                msgContext: r,
                msgMeta: a
            });
            const u = babelHelpers.extends({}, t, s?.msgData, {
                type: o("WAWebMsgType").MSG_TYPE.CHAT,
                kind: o("WAWebMsgType").MsgKind.Chat,
                subtype: "url",
                rcat: i
            });
            return {
                msgData: u,
                contextInfo: l?.contextInfo
            };
        }
    }
    l.default = e;
}, 98);