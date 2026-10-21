__d("WAWebNewsletterFutureProofUtils", [
    "WAWebABProps",
    "WAWebCompactSet",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMusicGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebPollCreationUtils",
    "WAWebQuestionsGatingUtils"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new Map([
        [
            1,
            (e = o("WAWebMsgType")).MSG_TYPE.CHAT
        ],
        [
            2,
            e.MSG_TYPE.IMAGE
        ],
        [
            3,
            e.MSG_TYPE.VIDEO
        ],
        [
            4,
            e.MSG_TYPE.AUDIO
        ],
        [
            5,
            e.MSG_TYPE.PTT
        ],
        [
            6,
            e.MSG_TYPE.LOCATION
        ],
        [
            7,
            e.MSG_TYPE.VCARD
        ],
        [
            8,
            e.MSG_TYPE.DOCUMENT
        ],
        [
            11,
            e.MSG_TYPE.MULTI_VCARD
        ],
        [
            12,
            e.MSG_TYPE.REACTION
        ],
        [
            13,
            e.MSG_TYPE.POLL_CREATION
        ],
        [
            14,
            e.MSG_TYPE.POLL_UPDATE
        ],
        [
            15,
            e.MSG_TYPE.STICKER
        ],
        [
            16,
            e.MSG_TYPE.POLL_RESULT_SNAPSHOT
        ],
        [
            17,
            e.MSG_TYPE.STICKER_PACK
        ]
    ]);
    function u() {
        return r("WAWebCompactSet")(o("WAWebABProps").getABPropConfigValue("channel_supported_message_types").split(","), function(e) {
            const t = Number.parseInt(e, 10);
            if (Number.isSafeInteger(t)) {
                return s.get(t);
            }
            return null;
        });
    }
    function c(e) {
        const t = u().has(e);
        switch(e){
            case o("WAWebMsgType").MSG_TYPE.PTT:
                return o("WAWebNewsletterGatingUtils").isNewsletterPTTReceivingEnabled();
            case o("WAWebMsgType").MSG_TYPE.PTV:
                return true;
            case o("WAWebMsgType").MSG_TYPE.POLL_CREATION:
            case o("WAWebMsgType").MSG_TYPE.POLL_UPDATE:
                return o("WAWebNewsletterGatingUtils").isNewsletterPollsReceivingEnabled();
            case o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT:
                return true;
            case o("WAWebMsgType").MSG_TYPE.AUDIO:
                return o("WAWebNewsletterGatingUtils").isNewsletterAudioFileReceivingEnabled();
            case o("WAWebMsgType").MSG_TYPE.ALBUM:
                return o("WAWebNewsletterGatingUtils").isNewsletterAlbumsV2ReceiverEnabled();
            case o("WAWebMsgType").MSG_TYPE.NEWSLETTER_FOLLOWER_INVITE:
                return o("WAWebNewsletterGatingUtils").isChannelInviteContactsToFollowConsumerEnabled();
            default:
                return t;
        }
    }
    function d(e) {
        const t = e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN ? e.futureproofType : e.type;
        if (t == null) {
            return {
                supported: false
            };
        }
        if (c(t)) {
            if (o("WAWebMsgGetters").getIsReply(e) && !o("WAWebNewsletterGatingUtils").isNewsletterReceivingAdminRepliesEnabled()) {
                return {
                    supported: false
                };
            }
            if (o("WAWebMsgGetters").getIsQuestion(e) && !o("WAWebQuestionsGatingUtils").isQuestionReceiverEnabledForMsg(e)) {
                return {
                    supported: false
                };
            }
            if (o("WAWebMsgGetters").getIsQuestionReply(e) && !o("WAWebQuestionsGatingUtils").isQuestionReplyReceiverEnabledForMsg(e)) {
                return {
                    supported: false
                };
            }
            if (o("WAWebMsgGetters").getPollType(e) === o("WAWebPollCreationUtils").PollType.QUIZ && !o("WAWebNewsletterGatingUtils").isNewsletterQuizReceiverEnabled()) {
                return {
                    supported: false
                };
            }
            if (e.newsletterAdminProfile != null && !o("WAWebNewsletterGatingUtils").isNewsletterAdminProfilesReceiverEnabled()) {
                return {
                    supported: false
                };
            }
            if (o("WAWebMsgGetters").isNewsletterMsgWithMusic(e) && !o("WAWebMsgGetters").getIsNewsletterStatus(e) && !o("WAWebMusicGatingUtils").isStatusMusicReceiverEnabledForNewsletter()) {
                return {
                    supported: false,
                    reason: "phone_only_feature"
                };
            }
            return {
                supported: true
            };
        }
        return {
            supported: false
        };
    }
    l.isMsgTypeSupported = c;
    l.isMsgSupported = d;
}, 98);