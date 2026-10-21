__d("WAWebGenerateNewsletterFollowerInviteMessageProto", [
    "WAWebE2EProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e({ contextInfo, json }) {
        const json_newsletterFollowerInviteInfo = json.newsletterFollowerInviteInfo;
        const { inviteMessage, newsletterId, newsletterName, pictureThumbnail } = json_newsletterFollowerInviteInfo;
        return {
            newsletterFollowerInviteMessageV2: {
                newsletterJid: o("WAWebE2EProtoUtils").encodeJid(newsletterId),
                newsletterName,
                caption: inviteMessage,
                jpegThumbnail: o("WAWebE2EProtoUtils").encodeBytes(pictureThumbnail),
                contextInfo
            }
        };
    }
    l.default = e;
}, 98);