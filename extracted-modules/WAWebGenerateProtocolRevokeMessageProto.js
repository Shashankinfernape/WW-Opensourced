__d("WAWebGenerateProtocolRevokeMessageProto", [
    "WAWebE2EProtoUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e({ json }) {
        return babelHelpers.extends({
            protocolMessage: {
                key: o("WAWebE2EProtoUtils").encodeKey(json.protocolMessageKey ?? json.id),
                type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE
            }
        }, json.botTargetSenderJid instanceof r("WAWebWid") ? {
            messageContextInfo: {
                botMetadata: {
                    invokerJid: json.botTargetSenderJid.toJid()
                }
            }
        } : {});
    }
    l.default = e;
}, 98);