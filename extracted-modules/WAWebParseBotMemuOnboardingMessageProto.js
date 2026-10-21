__d("WAWebParseBotMemuOnboardingMessageProto", [
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: n, messageProtobuf: r }) {
        if (r.protocolMessage?.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.BOT_MEMU_ONBOARDING_MESSAGE) {
            return {
                msgData: babelHelpers.extends({}, n, {
                    type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                    kind: o("WAWebMsgType").MsgKind.Protocol,
                    subtype: "bot_memu_onboarding"
                }),
                contextInfo: null
            };
        }
    }
    l.default = e;
}, 98);