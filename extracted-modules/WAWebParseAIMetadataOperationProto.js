__d("WAWebParseAIMetadataOperationProto", [
    "WAWebParseBizAIMetadataSyncProto",
    "WAWebParseHatchMetadataSyncProto",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = e.messageProtobuf.protocolMessage;
        if (t == null || t.type !== o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.AI_METADATA_OPERATION) {
            return null;
        }
        const n = t.aiMetadataOperation;
        if (n?.bizAiMetadataSync != null) {
            return r("WAWebParseBizAIMetadataSyncProto")(e);
        }
        return r("WAWebParseHatchMetadataSyncProto")(e, n);
    }
    l.default = e;
}, 98);