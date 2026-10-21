__d("WAWebGenerateProtocolMemberLabelMessageProto", [
    "WAWebProtobufsE2E.pb",
    "err"
], function(t, n, r, o, a, i, l) {
    function e({ json }) {
        const json_memberLabelData = json.memberLabelData;
        if (json_memberLabelData == null) {
            throw r("err")("Missing memberLabelData for member label message");
        }
        return {
            protocolMessage: {
                type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.GROUP_MEMBER_LABEL_CHANGE,
                memberLabel: {
                    label: json_memberLabelData.label,
                    labelTimestamp: json_memberLabelData.labelTimestamp
                }
            }
        };
    }
    l.default = e;
}, 98);