__d("WAWebVerifyProtobufMsgObjectKeys", [
    "$InternalEnum",
    "WALogger",
    "WAWebCurrentUser",
    "WAWebHandleMsgError",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "err",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = 3;
    const c = n("$InternalEnum")({
        Buttons: 1,
        Template: 2,
        SenderKeyDistribution: 3,
        UnknownMessageKey: 4,
        RootSecretDistribute: 5
    });
    function d(e, t) {
        if (e === "$$unknownFieldCount") {
            if (t[e] === 0) {
                return null;
            }
            return o("WAWebMsgType").MSG_TYPE.UNKNOWN;
        }
        if (e === "messageContextInfo" || e === "statusLinkPreviewMetadata") {
            return null;
        }
        if (e === "contactMessage") {
            return o("WAWebMsgType").MSG_TYPE.VCARD;
        }
        if (e === "contactsArrayMessage") {
            return o("WAWebMsgType").MSG_TYPE.MULTI_VCARD;
        }
        if (e === "conversation" || e === "extendedTextMessage") {
            return o("WAWebMsgType").MSG_TYPE.CHAT;
        }
        if (e === "imageMessage") {
            return o("WAWebMsgType").MSG_TYPE.IMAGE;
        }
        if (e === "locationMessage" || e === "liveLocationMessage") {
            return o("WAWebMsgType").MSG_TYPE.LOCATION;
        }
        if (e === "documentMessage") {
            return o("WAWebMsgType").MSG_TYPE.DOCUMENT;
        }
        if (e === "audioMessage") {
            return o("WAWebMsgType").MSG_TYPE.AUDIO;
        }
        if (e === "videoMessage") {
            return o("WAWebMsgType").MSG_TYPE.VIDEO;
        }
        if (e === "protocolMessage" || e === "highlyStructuredMessage") {
            return o("WAWebMsgType").MSG_TYPE.PROTOCOL;
        }
        if (e === "statusNotificationMessage") {
            return o("WAWebMsgType").MSG_TYPE.STATUS_NOTIFICATION;
        }
        if (e === "sendPaymentMessage" || e === "requestPaymentMessage" || e === "paymentInviteMessage") {
            return o("WAWebMsgType").MSG_TYPE.PAYMENT;
        }
        if (e === "declinePaymentRequestMessage" || e === "cancelPaymentRequestMessage") {
            return o("WAWebMsgType").MSG_TYPE.UNKNOWN;
        }
        if (e === "stickerMessage") {
            return o("WAWebMsgType").MSG_TYPE.STICKER;
        }
        if (e === "groupInviteMessage") {
            return o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE;
        }
        if (e === "templateButtonReplyMessage") {
            return o("WAWebMsgType").MSG_TYPE.TEMPLATE_BUTTON_REPLY;
        }
        if (e === "productMessage") {
            return o("WAWebMsgType").MSG_TYPE.PRODUCT;
        }
        if (e === "listMessage") {
            return o("WAWebMsgType").MSG_TYPE.LIST;
        }
        if (e === "orderMessage") {
            return o("WAWebMsgType").MSG_TYPE.ORDER;
        }
        if (e === "listResponseMessage") {
            return o("WAWebMsgType").MSG_TYPE.LIST_RESPONSE;
        }
        if (e === "buttonsResponseMessage") {
            return o("WAWebMsgType").MSG_TYPE.BUTTONS_RESPONSE;
        }
        if (e === "interactiveMessage") {
            return o("WAWebMsgType").MSG_TYPE.INTERACTIVE;
        }
        if (e === "interactiveResponseMessage") {
            return o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE;
        }
        if (e === "reactionMessage") {
            return o("WAWebMsgType").MSG_TYPE.REACTION;
        }
        if (e === "encReactionMessage") {
            return o("WAWebMsgType").MSG_TYPE.REACTION_ENC;
        }
        if (e === "encCommentMessage") {
            return o("WAWebMsgType").MSG_TYPE.COMMENT;
        }
        if (e === "pinInChatMessage") {
            return o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE;
        }
        if (e === "pollCreationMessage" || e === "pollCreationMessageV2" || e === "pollCreationMessageV3" || e === "pollCreationMessageV5" || e === "pollCreationMessageV6") {
            return o("WAWebMsgType").MSG_TYPE.POLL_CREATION;
        }
        if (e === "pollUpdateMessage") {
            return o("WAWebMsgType").MSG_TYPE.POLL_UPDATE;
        }
        if (e === "keepInChatMessage") {
            return o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT;
        }
        if (e === "requestPhoneNumberMessage") {
            return o("WAWebMsgType").MSG_TYPE.REQUEST_PHONE_NUMBER;
        }
        if (e === "ptvMessage") {
            return o("WAWebMsgType").MSG_TYPE.PTV;
        }
        if (e === "callLogMesssage") {
            return o("WAWebMsgType").MSG_TYPE.CALL_LOG;
        }
        if (e === "buttonsMessage") {
            return c.Buttons;
        }
        if (e === "templateMessage") {
            return c.Template;
        }
        if (e === "senderKeyDistributionMessage" || e === "fastRatchetKeySenderKeyDistributionMessage") {
            return c.SenderKeyDistribution;
        }
        if (e === "newsletterAdminInviteMessage") {
            return o("WAWebMsgType").MSG_TYPE.NEWSLETTER_ADMIN_INVITE;
        }
        if (e === "newsletterFollowerInviteMessageV2") {
            return o("WAWebMsgType").MSG_TYPE.NEWSLETTER_FOLLOWER_INVITE;
        }
        if (e === "eventMessage") {
            return o("WAWebMsgType").MSG_TYPE.EVENT_CREATION;
        }
        if (e === "eventInviteMessage") {
            return o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE;
        }
        if (e === "encEventResponseMessage") {
            return o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE;
        }
        if (e === "secretEncryptedMessage" && t[e]?.secretEncType === o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.EVENT_EDIT) {
            return o("WAWebMsgType").MSG_TYPE.EVENT_EDIT_ENCRYPTED;
        }
        if (e === "secretEncryptedMessage" && t[e]?.secretEncType === o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.MESSAGE_EDIT) {
            return o("WAWebMsgType").MSG_TYPE.MESSAGE_EDIT_ENCRYPTED;
        }
        if (e === "secretEncryptedMessage" && t[e]?.secretEncType === o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.POLL_EDIT) {
            return o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED;
        }
        if (e === "secretEncryptedMessage" && t[e]?.secretEncType === o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.POLL_ADD_OPTION) {
            return o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_ENCRYPTED;
        }
        if (e === "albumMessage") {
            return o("WAWebMsgType").MSG_TYPE.ALBUM;
        }
        if (e === "musicMessage") {
            return o("WAWebMsgType").MSG_TYPE.MUSIC;
        }
        if (e === "stickerPackMessage") {
            return o("WAWebMsgType").MSG_TYPE.STICKER_PACK;
        }
        if (e === "pollResultSnapshotMessage" || e === "pollResultSnapshotMessageV3") {
            return o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT;
        }
        if (e === "richResponseMessage") {
            return o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE;
        }
        if (e === "messageHistoryBundle") {
            return o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE;
        }
        if (e === "messageHistoryNotice") {
            return o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE;
        }
        if (e === "acp2SettingMessage" || e === "associatedChildMessage" || e === "audioStickerMessage" || e === "bcallMessage" || e === "botForwardedMessage" || e === "botGroupParticipantMessage" || e === "botInvokeMessage" || e === "botPlatformRegistrationSuccessMessage" || e === "botTaskMessage" || e === "call" || e === "chat" || e === "commentMessage" || e === "conditionalRevealMessage" || e === "deviceSentMessage" || e === "documentWithCaptionMessage" || e === "editedMessage" || e === "ephemeralMessage" || e === "eventCoverImage" || e === "groupMentionedMessage" || e === "groupStatusMentionMessage" || e === "groupStatusMessage" || e === "groupStatusMessageV2" || e === "instantImageMessage" || e === "invoiceMessage" || e === "lottieStickerMessage" || e === "newsletterAdminProfileMessage" || e === "newsletterAdminProfileStatusMessage" || e === "newsletterScheduledMessage" || e === "placeholderMessage" || e === "pollCreationMessageV4" || e === "pollCreationOptionImageMessage" || e === "pollAddOptionMessage" || e === "requestLocationMessage" || e === "requestLocationUpdateMessage" || e === "scheduledCallCreationMessage" || e === "scheduledCallEditMessage" || e === "secretEncryptedMessage" || e === "spoilerMessage" || e === "statusAddYours" || e === "statusMentionMessage" || e === "statusQuotedMessage" || e === "statusStickerInteractionMessage" || e === "stickerSyncRmrMessage" || e === "viewOnceMessage" || e === "viewOnceMessageV2" || e === "viewOnceMessageV2Extension" || e === "limitSharingMessage" || e === "questionMessage" || e === "statusQuestionAnswerMessage" || e === "questionResponseMessage" || e === "questionReplyMessage" || e === "groupRootKeyShare" || e === "paymentReminderMessage" || e === "splitPaymentMessage" || e === "splitPaymentUpdateMessage") {
            return c.UnknownMessageKey;
        }
        if (e === "rootSecretDistributeMessage") {
            return c.RootSecretDistribute;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function m(e) {
        if (e != null && typeof e === "object" && "message" in e) {
            const t = e.message;
            if (t != null && typeof t === "object") {
                return t;
            }
        }
        return null;
    }
    function p(e) {
        g(e);
        let t;
        for (const n of Object.keys(e)){
            const r = m(e[n]);
            if (r != null) {
                const o = _(r);
                for (const [i, l] of o){
                    if (typeof i !== "number") {
                        t = r;
                    }
                }
            } else {
                const s = d(n, e);
                if (s != null) {
                    t = e;
                }
            }
            if (t != null) {
                break;
            }
        }
        return t;
    }
    function _(t, n = 0) {
        const a = [];
        if (r("justknobx")._("2451") && n >= u) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[getProtobufMessageTypesToKeys] nesting depth > ",
                ""
            ])), u).tags("messaging").sendLogs("protobuf-msg-keys-max-depth");
            return [];
        }
        for (const i of Object.keys(t)){
            const l = m(t[i]);
            if (l != null) {
                const s = _(l, n + 1);
                if (s.length === 0) {
                    a.push([
                        o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                        i
                    ]);
                } else {
                    a.push(..._(l, n + 1));
                }
            } else {
                const c = d(i, t);
                if (c != null) {
                    a.push([
                        c,
                        i
                    ]);
                }
            }
        }
        return a;
    }
    function f(e) {
        return !!e.find(([t])=>typeof t === "number" && t === c.SenderKeyDistribution);
    }
    function g(e) {
        const t = _(e);
        const n = t.length === 1 || t.length === 2 && f(t);
        if (!n) {
            if (o("WAWebCurrentUser").isEmployee()) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Protobuf message keys validation failed: ",
                    ""
                ])), t.join()).sendLogs("protobuf-msg-keys-validation-failed-intern");
            }
            throw new (o("WAWebHandleMsgError")).MessageProtobufInvalidMessageTypes(t.map(([t, n])=>n));
        }
    }
    function h(e) {
        const t = new Set;
        for (const [o, a] of _(e)){
            if (typeof o !== "number") {
                t.add(o);
            } else if (c.cast(o) != null && (o === c.Buttons || o === c.Template)) {
                throw r("err")("Undeclared message types");
            }
        }
        return t;
    }
    l.UndeclaredMessageType = c;
    l.getWrappedMessage = m;
    l.getUnwrappedProtobufMessage = p;
    l.getProtobufMessageTypesToKeys = _;
    l.verifyProtobufMessageObjectKeys = g;
    l.getProtobufMessageTypesSet = h;
}, 98);