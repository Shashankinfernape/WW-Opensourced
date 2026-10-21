__d("WAWebGenerateAiMediaCollectionProtocolMsg", [
    "WAWebProtobufsE2E.pb",
    "err"
], function(t, n, r, o, a, i, l) {
    function e({ json }) {
        const json_aiMediaCollectionInfo = json.aiMediaCollectionInfo;
        if (json_aiMediaCollectionInfo == null || json_aiMediaCollectionInfo.expectedMediaCount == null || json_aiMediaCollectionInfo.hasGlobalCaption == null) {
            throw r("err")("Missing required parent envelope fields for ai media collection message");
        }
        return {
            protocolMessage: {
                type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.AI_MEDIA_COLLECTION_MESSAGE,
                aiMediaCollectionMessage: {
                    collectionId: json_aiMediaCollectionInfo.collectionId,
                    expectedMediaCount: json_aiMediaCollectionInfo.expectedMediaCount,
                    hasGlobalCaption: json_aiMediaCollectionInfo.hasGlobalCaption
                }
            }
        };
    }
    l.default = e;
}, 98);