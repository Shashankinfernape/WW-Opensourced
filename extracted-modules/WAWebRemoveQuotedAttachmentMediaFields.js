__d("WAWebRemoveQuotedAttachmentMediaFields", [], function(t, n, r, o, a, i) {
    const e = [
        "acp2SettingMessage",
        "associatedChildMessage",
        "audioStickerMessage",
        "botForwardedMessage",
        "botGroupParticipantMessage",
        "botInvokeMessage",
        "botPlatformRegistrationSuccessMessage",
        "botTaskMessage",
        "documentWithCaptionMessage",
        "editedMessage",
        "ephemeralMessage",
        "eventCoverImage",
        "groupMentionedMessage",
        "groupStatusMentionMessage",
        "groupStatusMessage",
        "groupStatusMessageV2",
        "limitSharingMessage",
        "lottieStickerMessage",
        "newsletterAdminProfileMessage",
        "newsletterAdminProfileStatusMessage",
        "newsletterScheduledMessage",
        "pollCreationMessageV4",
        "pollCreationOptionImageMessage",
        "questionMessage",
        "questionReplyMessage",
        "spoilerMessage",
        "statusAddYours",
        "statusMentionMessage",
        "viewOnceMessage",
        "viewOnceMessageV2",
        "viewOnceMessageV2Extension"
    ];
    const l = [
        "albumMessage",
        "audioMessage",
        "buttonsMessage",
        "buttonsResponseMessage",
        "call",
        "contactMessage",
        "contactsArrayMessage",
        "documentMessage",
        "eventInviteMessage",
        "eventMessage",
        "extendedTextMessage",
        "groupInviteMessage",
        "imageMessage",
        "instantImageMessage",
        "interactiveMessage",
        "interactiveResponseMessage",
        "listMessage",
        "listResponseMessage",
        "liveLocationMessage",
        "locationMessage",
        "messageHistoryBundle",
        "messageHistoryNotice",
        "musicMessage",
        "newsletterAdminInviteMessage",
        "newsletterFollowerInviteMessageV2",
        "orderMessage",
        "pollCreationMessage",
        "pollCreationMessageV2",
        "pollCreationMessageV3",
        "pollCreationMessageV5",
        "pollCreationMessageV6",
        "pollResultSnapshotMessage",
        "pollResultSnapshotMessageV3",
        "productMessage",
        "ptvMessage",
        "requestLocationMessage",
        "requestPhoneNumberMessage",
        "richResponseMessage",
        "splitPaymentMessage",
        "stickerMessage",
        "stickerPackMessage",
        "templateButtonReplyMessage",
        "templateMessage",
        "videoMessage"
    ];
    const s = {
        directPath: null,
        fileEncSha256: null,
        mediaKey: null,
        mediaKeyTimestamp: null,
        url: null
    };
    const u = {
        thumbnailDirectPath: null,
        thumbnailEncSha256: null
    };
    function c(e) {
        return e.isOpenBotGroup === true || e.isTeeBotGroup === true || (e.groupAgentParticipants ?? []).length > 0;
    }
    function d(e) {
        const t = m(e) ? p(e) : babelHelpers.extends({}, e);
        y(t, d);
        return t;
    }
    function m(e) {
        return l.some((t)=>e[t]?.contextInfo?.quotedMessage != null);
    }
    function p(e) {
        const t = babelHelpers.extends({}, e, {
            albumMessage: _(e.albumMessage),
            audioMessage: _(e.audioMessage),
            buttonsMessage: _(e.buttonsMessage),
            buttonsResponseMessage: _(e.buttonsResponseMessage),
            call: _(e.call),
            contactMessage: _(e.contactMessage),
            contactsArrayMessage: _(e.contactsArrayMessage),
            documentMessage: _(e.documentMessage),
            eventInviteMessage: _(e.eventInviteMessage),
            eventMessage: _(e.eventMessage),
            extendedTextMessage: _(e.extendedTextMessage),
            groupInviteMessage: _(e.groupInviteMessage),
            imageMessage: _(e.imageMessage),
            instantImageMessage: _(e.instantImageMessage),
            interactiveMessage: _(e.interactiveMessage),
            interactiveResponseMessage: _(e.interactiveResponseMessage),
            listMessage: _(e.listMessage),
            listResponseMessage: _(e.listResponseMessage),
            liveLocationMessage: _(e.liveLocationMessage),
            locationMessage: _(e.locationMessage),
            messageHistoryBundle: _(e.messageHistoryBundle),
            messageHistoryNotice: _(e.messageHistoryNotice),
            musicMessage: _(e.musicMessage),
            newsletterAdminInviteMessage: _(e.newsletterAdminInviteMessage),
            newsletterFollowerInviteMessageV2: _(e.newsletterFollowerInviteMessageV2),
            orderMessage: _(e.orderMessage),
            pollCreationMessage: _(e.pollCreationMessage),
            pollCreationMessageV2: _(e.pollCreationMessageV2),
            pollCreationMessageV3: _(e.pollCreationMessageV3),
            pollCreationMessageV5: _(e.pollCreationMessageV5),
            pollCreationMessageV6: _(e.pollCreationMessageV6),
            pollResultSnapshotMessage: _(e.pollResultSnapshotMessage),
            pollResultSnapshotMessageV3: _(e.pollResultSnapshotMessageV3),
            productMessage: _(e.productMessage),
            ptvMessage: _(e.ptvMessage),
            requestLocationMessage: _(e.requestLocationMessage),
            requestPhoneNumberMessage: _(e.requestPhoneNumberMessage),
            richResponseMessage: _(e.richResponseMessage),
            splitPaymentMessage: _(e.splitPaymentMessage),
            stickerMessage: _(e.stickerMessage),
            stickerPackMessage: _(e.stickerPackMessage),
            templateButtonReplyMessage: _(e.templateButtonReplyMessage),
            templateMessage: _(e.templateMessage),
            videoMessage: _(e.videoMessage)
        });
        for (const n of l){
            if (t[n] == null) {
                delete t[n];
            }
        }
        return t;
    }
    function _(e) {
        if (e?.contextInfo?.quotedMessage == null) {
            return e;
        }
        return babelHelpers.extends({}, e, {
            contextInfo: f(e.contextInfo)
        });
    }
    function f(contextInfo) {
        if (contextInfo?.quotedMessage == null) {
            return contextInfo;
        }
        return babelHelpers.extends({}, contextInfo, {
            quotedMessage: g(contextInfo.quotedMessage)
        });
    }
    function g(e) {
        const t = babelHelpers.extends({}, e);
        if (e.imageMessage != null) {
            t.imageMessage = babelHelpers.extends({}, e.imageMessage, s, u, {
                contextInfo: h(e.imageMessage.contextInfo)
            });
        }
        if (e.videoMessage != null) {
            t.videoMessage = babelHelpers.extends({}, e.videoMessage, s, u, {
                contextInfo: h(e.videoMessage.contextInfo)
            });
        }
        if (e.ptvMessage != null) {
            t.ptvMessage = babelHelpers.extends({}, e.ptvMessage, s, u, {
                contextInfo: h(e.ptvMessage.contextInfo)
            });
        }
        if (e.documentMessage != null) {
            t.documentMessage = babelHelpers.extends({}, e.documentMessage, s, u, {
                contextInfo: h(e.documentMessage.contextInfo)
            });
        }
        if (e.audioMessage != null) {
            t.audioMessage = babelHelpers.extends({}, e.audioMessage, s, {
                contextInfo: h(e.audioMessage.contextInfo)
            });
        }
        if (e.stickerMessage != null) {
            t.stickerMessage = babelHelpers.extends({}, e.stickerMessage, s, {
                contextInfo: h(e.stickerMessage.contextInfo)
            });
        }
        y(t, g);
        return t;
    }
    function h(contextInfo) {
        if (contextInfo?.mediaDomainInfo == null) {
            return contextInfo;
        }
        return babelHelpers.extends({}, contextInfo, {
            mediaDomainInfo: null
        });
    }
    function y(t, n) {
        for (const r of e){
            const o = t[r];
            const a = o?.message;
            if (o != null && a != null) {
                t[r] = babelHelpers.extends({}, o, {
                    message: n(a)
                });
            }
        }
    }
    i.FUTUREPROOF_WRAPPER_KEYS = e;
    i.QUOTE_CARRIER_KEYS = l;
    i.isGroupWithAgentParticipant = c;
    i.removeQuotedAttachmentMediaFields = d;
}, 66);