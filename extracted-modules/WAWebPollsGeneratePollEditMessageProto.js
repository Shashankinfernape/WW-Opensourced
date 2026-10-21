__d("WAWebPollsGeneratePollEditMessageProto", [
    "WAWebE2EProtoUtils",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    function e({ json }) {
        const n = {
            targetMessageKey: o("WAWebE2EProtoUtils").encodeKey(json.targetMessageKey),
            encIv: json.encIv,
            encPayload: json.encPayload,
            secretEncType: o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.POLL_EDIT
        };
        return {
            secretEncryptedMessage: n,
            messageContextInfo: {
                messageSecret: json.messageSecret
            }
        };
    }
    l.default = e;
}, 98);