__d("WAWebParseKeepInChatMessageProto", [
    "WALongInt",
    "WAWebE2EProtoUtils",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n }) {
        const r = n.keepInChatMessage;
        if (r != null) {
            const { keepType: a, key: i, timestampMs: l } = r;
            const s = babelHelpers.extends({}, t, {
                keptMessageKey: o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(i, t),
                type: o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT,
                kind: o("WAWebMsgType").MsgKind.KeepInChat,
                keepType: a,
                senderTimestampMs: o("WALongInt").maybeNumberOrThrowIfTooLarge(l)
            });
            return {
                msgData: s,
                contextInfo: null
            };
        }
    }
    l.default = e;
}, 98);