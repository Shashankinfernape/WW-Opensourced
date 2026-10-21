__d("WAWebGenerateKeepInChatMessageProto", [
    "WAWebE2EProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e({ json }) {
        return {
            keepInChatMessage: {
                key: o("WAWebE2EProtoUtils").encodeKey(json.keptMessageKey),
                keepType: json.keepType,
                timestampMs: json.senderTimestampMs
            }
        };
    }
    l.default = e;
}, 98);