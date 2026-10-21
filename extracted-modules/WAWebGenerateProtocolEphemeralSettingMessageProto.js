__d("WAWebGenerateProtocolEphemeralSettingMessageProto", [
    "WAWebAfterReadUtils",
    "WAWebE2EProtoUtils",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    function e({ json }) {
        return {
            protocolMessage: {
                type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.EPHEMERAL_SETTING,
                ephemeralExpiration: json.ephemeralDuration,
                disappearingMode: o("WAWebE2EProtoUtils").disappearingModeInitiatorToProto(json.disappearingModeInitiator, json.disappearingModeTrigger, json.disappearingModeInitiatedByMe),
                afterReadDuration: json.afterReadDuration != null && o("WAWebAfterReadUtils").isAfterReadEnabled() ? json.afterReadDuration : undefined
            }
        };
    }
    l.default = e;
}, 98);