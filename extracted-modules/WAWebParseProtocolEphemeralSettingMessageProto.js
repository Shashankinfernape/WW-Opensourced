__d("WAWebParseProtocolEphemeralSettingMessageProto", [
    "WAWebAfterReadUtils",
    "WAWebDisappearingModeProtoUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: r, messageProtobuf: a }) {
        const i = a.protocolMessage;
        if (i != null && i.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.EPHEMERAL_SETTING) {
            let l;
            if (i.disappearingMode != null) {
                l = o("WAWebDisappearingModeProtoUtils").protoToDisappearingMode(r, i.disappearingMode);
            }
            const s = babelHelpers.extends({}, r, {
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                kind: o("WAWebMsgType").MsgKind.Protocol,
                subtype: "ephemeral_setting",
                ephemeralDuration: i.ephemeralExpiration,
                disappearingModeTrigger: l?.disappearingModeTrigger,
                disappearingModeInitiatedByMe: l?.initiatedByMe,
                afterReadDuration: i.afterReadDuration != null && o("WAWebAfterReadUtils").isAfterReadEnabled() ? i.afterReadDuration : void 0
            });
            return {
                msgData: s,
                contextInfo: void 0
            };
        }
    }
    l.default = e;
}, 98);