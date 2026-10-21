__d("WAWebParseEphemeralSyncResponseMessageProto", [
    "WALogger",
    "WALongInt",
    "WAWebDisappearingModeProtoUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ baseMessage: i, messageProtobuf: l, msgContext: s }) {
        const u = l.protocolMessage;
        if (!(u == null || s !== "relay" || u.type !== o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.EPHEMERAL_SYNC_RESPONSE)) {
            const { disappearingMode: c, ephemeralExpiration: d, ephemeralSettingTimestamp: m } = u;
            if (d == null || m == null || c == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "EPHEMERAL_SYNC_RESPONSE msg does not contain all fields"
                ])));
                return;
            }
            let p;
            if (u.disappearingMode != null) {
                p = o("WAWebDisappearingModeProtoUtils").protoToDisappearingMode(u, u.disappearingMode);
            }
            return {
                msgData: babelHelpers.extends({}, i, {
                    type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                    kind: o("WAWebMsgType").MsgKind.Protocol,
                    subtype: "ephemeral_sync_response",
                    ephemeralDuration: d,
                    ephemeralSettingTimestamp: o("WALongInt").numberOrThrowIfTooLarge(m),
                    disappearingModeInitiator: r("nullthrows")(o("WAWebDisappearingModeProtoUtils").protoToDisappearingModeInitiator(i, c)),
                    disappearingModeTrigger: p?.disappearingModeTrigger,
                    disappearingModeInitiatedByMe: p?.initiatedByMe
                }),
                contextInfo: null
            };
        }
    }
    l.default = s;
}, 98);