__d("WAWebGenerateNewsletterAdminInviteMessageProto", [
    "WAWebE2EProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e({ contextInfo, json }) {
        const json_newsletterAdminInviteInfo = json.newsletterAdminInviteInfo;
        const { inviteExpiration, inviteMessage, newsletterId, newsletterName, pictureThumbnail } = json_newsletterAdminInviteInfo;
        return {
            newsletterAdminInviteMessage: {
                newsletterJid: o("WAWebE2EProtoUtils").encodeJid(newsletterId),
                newsletterName,
                caption: inviteMessage,
                inviteExpiration,
                jpegThumbnail: o("WAWebE2EProtoUtils").encodeBytes(pictureThumbnail),
                contextInfo
            }
        };
    }
    l.default = e;
}, 98);