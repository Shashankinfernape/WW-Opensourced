__d("WAWebGenerateEphemeralSyncResponseMessageProto", [
    "WAWebE2EProtoUtils",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    function e({ json }) {
        const n = {
            type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.EPHEMERAL_SYNC_RESPONSE,
            ephemeralExpiration: json.ephemeralDuration,
            ephemeralSettingTimestamp: json.ephemeralSettingTimestamp,
            disappearingMode: o("WAWebE2EProtoUtils").disappearingModeInitiatorToProto(json.disappearingModeInitiator, json.disappearingModeTrigger, json.disappearingModeInitiatedByMe)
        };
        return {
            protocolMessage: n
        };
    }
    l.default = e;
}, 98);