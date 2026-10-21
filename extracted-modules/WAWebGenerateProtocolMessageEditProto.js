__d("WAWebGenerateProtocolMessageEditProto", [
    "WAWebBuildEditedMessageProto",
    "WAWebE2EProtoUtils",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    function e({ contextInfo, json }) {
        const editedMessage = o("WAWebBuildEditedMessageProto").buildEditedMessageProto({
            json,
            contextInfo
        });
        return {
            protocolMessage: {
                key: o("WAWebE2EProtoUtils").encodeKey(json.protocolMessageKey),
                type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT,
                timestampMs: json.latestEditSenderTimestampMs,
                editedMessage
            }
        };
    }
    l.default = e;
}, 98);