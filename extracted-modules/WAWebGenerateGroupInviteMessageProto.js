__d("WAWebGenerateGroupInviteMessageProto", [
    "WAWebE2EProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e({ contextInfo, json }) {
        return {
            groupInviteMessage: {
                inviteCode: json.inviteCode,
                inviteExpiration: parseInt(json.inviteCodeExp, 10),
                groupJid: json.inviteGrp,
                groupName: json.inviteGrpName,
                caption: json.comment,
                jpegThumbnail: o("WAWebE2EProtoUtils").encodeBytes(json.inviteGrpJpegThum),
                contextInfo
            }
        };
    }
    l.default = e;
}, 98);