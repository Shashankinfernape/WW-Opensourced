__d("WAWebParseNonNFMButtonsMessageProto", [
    "WAWebButtonsMessageProtoUtils",
    "WAWebE2EProtoUtils",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, bizInfo: n, messageProtobuf: a, msgContext: i }) {
        const l = a.buttonsMessage;
        if (l != null) {
            const s = l.buttons;
            const u = s === void 0 ? [] : s;
            const c = l.headerType;
            const d = r("WAWebInteractiveMessagesNativeFlowName").cast(o("WAWebE2EProtoUtils").getBizNativeFlowName({
                buttonsMessage: l
            }));
            if (!(d != null || n?.nativeFlowName != null)) {
                if (o("WAWebE2EProtoUtils").hasUnsupportedButtons(u)) {
                    return {
                        msgData: babelHelpers.extends({}, t, {
                            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                            kind: o("WAWebMsgType").MsgKind.Unknown,
                            subtype: "phone_only_feature"
                        }),
                        contextInfo: l.contextInfo
                    };
                }
                if (c === o("WAWebProtobufsE2E.pb").Message$ButtonsMessage$HeaderType.UNKNOWN || !new Set(o("WAWebProtobufsE2E.pb").Message$ButtonsMessage$HeaderType.members()).has(c)) {
                    return {
                        msgData: babelHelpers.extends({}, t, {
                            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                            kind: o("WAWebMsgType").MsgKind.Unknown
                        }),
                        contextInfo: l.contextInfo
                    };
                }
                const m = o("WAWebButtonsMessageProtoUtils").parseButtonsMessageProto({
                    buttonsMessage: l,
                    baseMessage: t,
                    msgContext: i
                });
                if (u.length) {
                    return {
                        msgData: babelHelpers.extends({}, m, {
                            isDynamicReplyButtonsMsg: true,
                            dynamicReplyButtons: u
                        }),
                        contextInfo: l.contextInfo
                    };
                }
                return {
                    msgData: m,
                    contextInfo: l.contextInfo
                };
            }
        }
    }
    l.default = e;
}, 98);