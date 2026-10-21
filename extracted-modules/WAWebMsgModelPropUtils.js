__d("WAWebMsgModelPropUtils", [
    "WAWebBusinessProfileTypes",
    "WAWebChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebStateUtils",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    const e = [
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS,
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO,
        r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION
    ];
    const s = [
        "loading_media",
        "image",
        "video",
        "ptv",
        "audio",
        "ptt",
        "location",
        "vcard",
        "multi_vcard",
        "document",
        "ciphertext",
        "debug_placeholder",
        "oversized",
        "unknown",
        "call_log",
        "revoked",
        "sticker",
        "music",
        "payment",
        "poll_creation",
        "poll_result_snapshot",
        "groups_v4_invite",
        "newsletter_admin_invite",
        "product",
        "order",
        "event_creation",
        "sharable_event_invite",
        "biz_content_placeholder",
        "album",
        "sticker-pack",
        "newsletter_follower_invite",
        "quarantined"
    ];
    function u(t) {
        const n = o("WAWebStateUtils").unproxy(t);
        if (n.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            return n.interactiveType === r("WAWebInteractiveMessageType").SHOPS_STOREFRONT || n.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW && n.nativeFlowName != null && e.includes(n.nativeFlowName);
        }
        if (n.type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW) {
            return n.nativeFlowName != null && e.includes(n.nativeFlowName);
        }
        if (n.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL) {
            return n.subtype === "event_edit_decrypted";
        }
        return s.includes(n.type);
    }
    function c(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        if (o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebMsgGetters").getSender(t)) || t.senderObj != null && o("WAWebFrontendContactGetters").getIsMyContact(t.senderObj)) {
            return true;
        }
        const n = o("WAWebFrontendMsgGetters").getChat(t);
        if (o("WAWebChatGetters").getIsGroup(n) || o("WAWebChatGetters").getIsNewsletter(n)) {
            return n.isTrusted();
        }
        if (o("WAWebMsgGetters").getIsPSA(t) || o("WAWebMsgGetters").getIsCAPISupport(t) || t.isFromTemplate) {
            return true;
        }
        const r = o("WAWebChatGetters").getIsGroup(n) ? t.senderObj : n.contact;
        if (r?.verifiedLevel === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH) {
            return true;
        }
        return n.notSpam;
    }
    function d({ chatContactVerifiedLevel, chatNotSpam, chatTrusted, isCAPISupport, isChatGroup, isChatNewsletter, isFromTemplate, isPSA, isSenderMe, isSenderMyContact }) {
        if (isSenderMe || isSenderMyContact || isChatNewsletter) {
            return true;
        }
        if (isChatGroup) {
            return chatTrusted === true;
        }
        if (isPSA || isCAPISupport || isFromTemplate === true || chatContactVerifiedLevel === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH) {
            return true;
        }
        return chatNotSpam === true;
    }
    function m(e) {
        const n = o("WAWebStateUtils").unproxy(e);
        return o("WAWebFrontendMsgGetters").getChat(n).groupMetadata?.participants.iAmMember() === true;
    }
    l.hasSymbol = u;
    l.isTrusted = c;
    l.isTrustedFor = d;
    l.iAmGroupParticipant = m;
}, 98);