__d("WAWebEventsGenerateEventEditMessageProto", [
    "WAWebE2EProtoUtils",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    function e({ json }) {
        const n = {
            targetMessageKey: o("WAWebE2EProtoUtils").encodeKey(json.targetMessageKey),
            encIv: json.encIv,
            encPayload: json.encPayload,
            secretEncType: o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.EVENT_EDIT
        };
        return {
            secretEncryptedMessage: n
        };
    }
    l.default = e;
}, 98);