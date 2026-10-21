__d("WAWebParseAiMediaCollectionProtocolMsg", [
    "WALogger",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ baseMessage: n, messageProtobuf: r }) {
        const a = r.protocolMessage;
        if (a == null) {
            return null;
        }
        const { aiMediaCollectionMessage: i, type: l } = a;
        if (l !== o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.AI_MEDIA_COLLECTION_MESSAGE || i == null) {
            return null;
        }
        const { collectionId: s, expectedMediaCount: u, hasGlobalCaption: c } = i;
        if (s == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[ai_media_collection] missing collectionId, dropping msg"
            ]))).sendLogs("ai-media-collection-parse-missing-collection-id");
            return null;
        }
        return {
            msgData: babelHelpers.extends({}, n, {
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                kind: o("WAWebMsgType").MsgKind.AiMediaCollection,
                subtype: "ai_media_collection",
                aiMediaCollectionInfo: {
                    collectionId: s,
                    expectedMediaCount: u,
                    hasGlobalCaption: c
                }
            }),
            contextInfo: null
        };
    }
    l.default = s;
}, 98);