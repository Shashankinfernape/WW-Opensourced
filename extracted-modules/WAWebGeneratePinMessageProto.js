__d("WAWebGeneratePinMessageProto", [
    "WAWebE2EProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e({ json }) {
        return {
            pinInChatMessage: {
                key: o("WAWebE2EProtoUtils").encodeKey(json.pinParentKey),
                type: json.pinMessageType,
                senderTimestampMs: json.pinSenderTimestampMs
            },
            messageContextInfo: {
                messageAddOnDurationInSecs: json.pinExpiryDuration
            }
        };
    }
    l.default = e;
}, 98);