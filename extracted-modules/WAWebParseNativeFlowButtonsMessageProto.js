__d("WAWebParseNativeFlowButtonsMessageProto", [
    "WAWebButtonsMessageProtoUtils",
    "WAWebE2EProtoUtils",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebNativeFlowValidation",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, bizInfo: n, bizSource: a, messageProtobuf: i, msgContext: l }) {
        const s = i.buttonsMessage;
        if (s != null) {
            const u = s.buttons;
            const c = u === void 0 ? [] : u;
            const d = s.headerType;
            const m = r("WAWebInteractiveMessagesNativeFlowName").cast(o("WAWebE2EProtoUtils").getBizNativeFlowName({
                buttonsMessage: s
            }));
            if (!(l === "relay" && (m == null || m !== r("WAWebInteractiveMessagesNativeFlowName").cast(n?.nativeFlowName)))) {
                if (!o("WAWebE2EProtoUtils").shouldParseNFM({
                    name: m,
                    bizInfo: n,
                    msgContext: l
                }) || o("WAWebE2EProtoUtils").hasUnsupportedButtons(c)) {
                    return {
                        msgData: babelHelpers.extends({}, t, {
                            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                            kind: o("WAWebMsgType").MsgKind.Unknown,
                            subtype: "phone_only_feature"
                        }),
                        contextInfo: s.contextInfo
                    };
                }
                if (d === o("WAWebProtobufsE2E.pb").Message$ButtonsMessage$HeaderType.UNKNOWN || !new Set(o("WAWebProtobufsE2E.pb").Message$ButtonsMessage$HeaderType.members()).has(d)) {
                    return {
                        msgData: babelHelpers.extends({}, t, {
                            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                            kind: o("WAWebMsgType").MsgKind.Unknown,
                            subtype: void 0
                        }),
                        contextInfo: s.contextInfo
                    };
                }
                const p = o("WAWebButtonsMessageProtoUtils").parseButtonsMessageProto({
                    buttonsMessage: s,
                    baseMessage: t,
                    msgContext: l
                });
                if (m != null) {
                    const _ = babelHelpers.extends({}, p, {
                        type: o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW,
                        kind: o("WAWebMsgType").MsgKind.NativeFlow,
                        nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName").cast(m),
                        nativeFlowButtons: c
                    });
                    if (!_.nativeFlowName || !o("WAWebNativeFlowValidation").isValidNativeFlowMessage({
                        bizSource: a,
                        msg: _
                    })) {
                        return {
                            msgData: babelHelpers.extends({}, t, {
                                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                                kind: o("WAWebMsgType").MsgKind.Unknown,
                                subtype: "phone_only_feature"
                            }),
                            contextInfo: s.contextInfo
                        };
                    }
                    return {
                        msgData: _,
                        contextInfo: s.contextInfo
                    };
                }
            }
        }
    }
    l.default = e;
}, 98);