__d("WAWebGenerateProtocolLimitSharingMessageProto", [
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    function e({ json }) {
        const limitSharing = json.limitSharing ? {
            trigger: json.limitSharing.trigger,
            sharingLimited: json.limitSharing.sharingLimited,
            limitSharingSettingTimestamp: json.limitSharing.limitSharingSettingTimestamp,
            initiatedByMe: true
        } : undefined;
        return {
            limitSharingMessage: {
                message: {
                    protocolMessage: {
                        type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.LIMIT_SHARING,
                        limitSharing
                    }
                }
            }
        };
    }
    l.default = e;
}, 98);