__d("WAWebParseProtocolMemberLabelMessageProto", [
    "WAWebHandleMemberLabelChange",
    "WAWebMemberLabelGating",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n }) {
        const r = n.protocolMessage;
        if (r == null) {
            return null;
        }
        const { memberLabel: a, type: i } = r;
        if (i !== o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.GROUP_MEMBER_LABEL_CHANGE || a == null) {
            return null;
        }
        if (o("WAWebMemberLabelGating").isMemberLabelInfraEnabled()) {
            o("WAWebHandleMemberLabelChange").handleMemberLabelChange({
                memberLabel: a,
                baseMessage: t
            });
            return {
                msgData: babelHelpers.extends({}, t, {
                    type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                    kind: o("WAWebMsgType").MsgKind.Protocol,
                    subtype: "member_label"
                }),
                contextInfo: null
            };
        }
        return {
            msgData: babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                kind: o("WAWebMsgType").MsgKind.Unknown,
                futureproofType: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                futureproofSubtype: "member_label"
            }),
            contextInfo: null
        };
    }
    l.default = e;
}, 98);