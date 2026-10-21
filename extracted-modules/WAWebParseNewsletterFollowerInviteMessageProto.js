__d("WAWebParseNewsletterFollowerInviteMessageProto", [
    "WAArrayBufferUtils",
    "WAWebDecodeJid",
    "WAWebMsgType",
    "WAWebNewsletterFollowerInviteMessageValidationError",
    "WAWebNewsletterGatingUtils",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n }) {
        const r = n.newsletterFollowerInviteMessageV2;
        const a = r;
        if (a != null) {
            if (!o("WAWebNewsletterGatingUtils").isChannelInviteContactsToFollowConsumerEnabled()) {
                return {
                    msgData: babelHelpers.extends({}, t, {
                        type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                        kind: o("WAWebMsgType").MsgKind.Unknown,
                        futureproofType: o("WAWebMsgType").MSG_TYPE.NEWSLETTER_FOLLOWER_INVITE
                    }),
                    contextInfo: a.contextInfo
                };
            }
            const { caption: i, contextInfo: l, jpegThumbnail: s, newsletterJid: u, newsletterName: c } = a;
            if (u == null) {
                throw new (o("WAWebNewsletterFollowerInviteMessageValidationError")).NewsletterFollowerInviteMessageValidationError(o("WAWebNewsletterFollowerInviteMessageValidationError").NewsletterFollowerInviteMessageValidationErrorCode.MISSING_NEWSLETTER_JID, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (c == null) {
                throw new (o("WAWebNewsletterFollowerInviteMessageValidationError")).NewsletterFollowerInviteMessageValidationError(o("WAWebNewsletterFollowerInviteMessageValidationError").NewsletterFollowerInviteMessageValidationErrorCode.MISSING_NEWSLETTER_NAME, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const d = o("WAWebDecodeJid").strictDecodeJid(u);
            if (d == null) {
                throw new (o("WAWebNewsletterFollowerInviteMessageValidationError")).NewsletterFollowerInviteMessageValidationError(o("WAWebNewsletterFollowerInviteMessageValidationError").NewsletterFollowerInviteMessageValidationErrorCode.INVALID_NEWSLETTER_JID, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            return {
                msgData: babelHelpers.extends({}, t, {
                    type: o("WAWebMsgType").MSG_TYPE.NEWSLETTER_FOLLOWER_INVITE,
                    kind: o("WAWebMsgType").MsgKind.NewsletterFollowerInvite,
                    newsletterFollowerInviteInfo: {
                        newsletterId: o("WAWebWidFactory").asNewsletterWidOrThrow(d),
                        newsletterName: c,
                        inviteMessage: i ?? "",
                        pictureThumbnail: s ? o("WAArrayBufferUtils").arrayBufferToString(s) : null
                    }
                }),
                contextInfo: l
            };
        }
    }
    l.default = e;
}, 98);