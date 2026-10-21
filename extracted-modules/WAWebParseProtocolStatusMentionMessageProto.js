__d("WAWebParseProtocolStatusMentionMessageProto", [
    "WAWebBatchedStatusIdUtils",
    "WAWebMsgType",
    "WAWebStatusGatingUtils"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n, msgContext: r }) {
        const a = n.statusMentionMessage;
        if (!(a == null || a?.message == null)) {
            if (o("WAWebStatusGatingUtils").isStatusMentionMessageEnabled()) {
                const l = a.message;
                const s = l?.protocolMessage?.key;
                const u = s?.id;
                return {
                    msgData: babelHelpers.extends({}, t, {
                        type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                        subtype: "status_mention_message",
                        kind: o("WAWebMsgType").MsgKind.Protocol
                    }),
                    contextInfo: {
                        stanzaId: u != null ? o("WAWebBatchedStatusIdUtils").normalizeStatusStanzaId(u) : u,
                        mentionedJid: [],
                        groupMentions: [],
                        statusAttributions: [],
                        experienceIds: []
                    }
                };
            }
            return {
                msgData: babelHelpers.extends({}, t, {
                    type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                    kind: o("WAWebMsgType").MsgKind.Unknown,
                    futureproofType: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                    futureproofSubtype: "status_mention_message"
                }),
                contextInfo: null
            };
        }
    }
    l.default = e;
}, 98);