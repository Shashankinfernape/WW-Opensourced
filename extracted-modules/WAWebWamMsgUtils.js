__d("WAWebWamMsgUtils", [
    "WAWebApiParse",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebHandleMsgCommon",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumAgentEngagementEnumType",
    "WAWebWamEnumBotType",
    "WAWebWamEnumE2eDeviceType",
    "WAWebWamEnumInvisibleMessageCategoryType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageType",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e.isDynamicReplyButtonsMsg === true) {
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.BUTTON_MESSAGE;
        }
        switch(e.type){
            case "image":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.PHOTO;
            case "video":
                if (e.isGif === true) {
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.GIF;
                }
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.VIDEO;
            case "ptv":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.PUSH_TO_VIDEO;
            case "audio":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.AUDIO;
            case "ptt":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.PTT;
            case "document":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.DOCUMENT;
            case "unknown":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.FUTURE;
            case "location":
                if (e.isLive === true) {
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.LIVE_LOCATION;
                }
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.LOCATION;
            case "vcard":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.CONTACT;
            case "multi_vcard":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.CONTACT_ARRAY;
            case "chat":
                return _(e.matchedText);
            case "sticker":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.STICKER;
            case "product":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.PRODUCT_IMAGE;
            case "list":
                {
                    const r = e.list?.listType ?? o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.UNKNOWN;
                    switch(r){
                        case o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.SINGLE_SELECT:
                            return o("WAWebWamEnumMediaType").MEDIA_TYPE.LIST;
                        case o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST:
                            return o("WAWebWamEnumMediaType").MEDIA_TYPE.PRODUCT_LIST;
                        default:
                            return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
                    }
                }
            case "list_response":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.LIST_REPLY;
            case "buttons_response":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.BUTTON_RESPONSE_MESSAGE;
            case "order":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.ORDER;
            case "interactive":
                return m(e);
            case "reaction":
            case "reaction_enc":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.REACTION;
            case "poll_creation":
            case "poll_edit_encrypted":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.POLL_CREATE;
            case "poll_result_snapshot":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.POLL_RESULT_SNAPSHOT;
            case "poll_update":
                if (e.subtype === "poll_vote") {
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.POLL_VOTE;
                }
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
            case "keep_in_chat":
                if (e.keepType === o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL) {
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.KEEP;
                }
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.UNKEEP;
            case "pin_message":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.PIN_IN_CHAT;
            case "protocol":
                if (e.subtype === "ephemeral_sync_response") {
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.EPHEMERAL_SYNC_RESPONSE;
                }
                if (e.subtype === "poll_edit_decrypted") {
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.POLL_CREATE;
                }
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
            case "event_creation":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.EVENT_CREATE;
            case "event_response":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.EVENT_RESPOND;
            case "album":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.MEDIA_ALBUM;
            case "sticker-pack":
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.STICKER_PACK;
            default:
                e.type;
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
        }
    }
    function s(e) {
        return u({
            broadcastId: o("WAWebMsgGetters").getBroadcastId(e),
            isGroupMsg: o("WAWebMsgGetters").getIsGroupMsg(e),
            isStatus: o("WAWebMsgGetters").getIsStatus(e),
            remote: e.id.remote
        });
    }
    function u({ broadcastId: t, isGroupMsg: n, isStatus: a, remote: i }) {
        if (a) {
            return o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS;
        }
        if (n) {
            return o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP;
        }
        if (r("WAWebWid").isBroadcast(i) || t != null) {
            return o("WAWebWamEnumMessageType").MESSAGE_TYPE.BROADCAST;
        }
        if (r("WAWebWid").isNewsletter(i)) {
            return o("WAWebWamEnumMessageType").MESSAGE_TYPE.CHANNEL;
        }
        return o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL;
    }
    function c(e) {
        if (r("WAWebWid").isGroup(e)) {
            return o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP;
        }
        return o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL;
    }
    function d(e) {
        if (e === "chat") {
            return o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL;
        }
        if (e === "group") {
            return o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP;
        }
        if (e === "peer_broadcast" || e === "other_broadcast") {
            return o("WAWebWamEnumMessageType").MESSAGE_TYPE.BROADCAST;
        }
        if (e === "direct_peer_status" || e === "other_status") {
            return o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function m(e) {
        const t = e.interactiveType;
        if (t == null) {
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
        }
        switch(t){
            case r("WAWebInteractiveMessageType").SHOPS_STOREFRONT:
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.SHOP_STOREFRONT;
            case r("WAWebInteractiveMessageType").NATIVE_FLOW:
                return p(e);
            case r("WAWebInteractiveMessageType").CAROUSEL:
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_CAROUSEL;
        }
    }
    function p(e) {
        if (e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW) {
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
        }
        return o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM;
    }
    function _(e) {
        if (e == null) {
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
        }
        if (o("WAWebApiParse").matchCatalogUrl(e)) {
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.CATALOG_LINK;
        }
        if (o("WAWebApiParse").matchProductUrl(e)) {
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.PRODUCT_LINK;
        }
        return o("WAWebWamEnumMediaType").MEDIA_TYPE.URL;
    }
    function f(e) {
        if (e instanceof r("WAWebWid")) {
            if (o("WAWebUserPrefsMeUser").isMeAccount(e)) {
                if (e.isCompanion()) {
                    if (e.isHosted()) {
                        return o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE.MY_HOSTED_COMPANION;
                    }
                    return o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE.MY_COMPANION;
                }
                return o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE.MY_PRIMARY;
            }
            if (e.isCompanion()) {
                if (e.isHosted()) {
                    return o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE.OTHER_HOSTED_COMPANION;
                }
                return o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE.OTHER_COMPANION;
            }
            return o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE.OTHER_PRIMARY;
        }
        return null;
    }
    function g(e) {
        if (e.id.remote.isBot()) {
            return o("WAWebWamEnumAgentEngagementEnumType").AGENT_ENGAGEMENT_ENUM_TYPE.DIRECT_CHAT;
        }
        const t = o("WAWebMsgGetters").getIsBotQuery(e);
        const n = o("WAWebMsgGetters").getIsMetaBotResponse(e);
        if (t || n) {
            return o("WAWebWamEnumAgentEngagementEnumType").AGENT_ENGAGEMENT_ENUM_TYPE.INVOKED;
        }
        return null;
    }
    function h({ automatedType: t, bizBotType: n, chatId: r }) {
        if (o("WAWebBotUtils").isHatchBot(r)) {
            return o("WAWebWamEnumBotType").BOT_TYPE.HATCH;
        }
        if (r.isBot()) {
            return o("WAWebWamEnumBotType").BOT_TYPE.METABOT;
        }
        if (n) {
            if (n === o("WAWebBotTypes").BizBotType.BIZ_1P) {
                return o("WAWebWamEnumBotType").BOT_TYPE.BOT_1P_BIZ;
            }
            if (n === o("WAWebBotTypes").BizBotType.BIZ_3P) {
                return o("WAWebWamEnumBotType").BOT_TYPE.BOT_3P_BIZ;
            }
        }
        if (t) {
            if (t === o("WAWebBotTypes").BizBotAutomatedType.PARTIAL_1P) {
                return o("WAWebWamEnumBotType").BOT_TYPE.BOT_1P_BIZ;
            }
            if (t === o("WAWebBotTypes").BizBotAutomatedType.FULL_3P) {
                return o("WAWebWamEnumBotType").BOT_TYPE.BOT_3P_BIZ;
            }
        }
        return o("WAWebWamEnumBotType").BOT_TYPE.UNKNOWN;
    }
    function y(e) {
        if (e == null || e === "") {
            return null;
        }
        switch(e){
            case o("WAWebHandleMsgCommon").MSG_CATEGORY.peer:
                return o("WAWebWamEnumInvisibleMessageCategoryType").INVISIBLE_MESSAGE_CATEGORY_TYPE.PEER;
            default:
                return null;
        }
    }
    function C(e, t, n) {
        if (t.isGroup()) {
            return !!n;
        }
        if (t.isStatus()) {
            return e.id.participant?.isLid() ?? false;
        }
        return e.from.isLid() || e.to.isLid();
    }
    l.getWamMediaType = e;
    l.getWamMessageType = s;
    l.getWamMessageTypeFor = u;
    l.getWamMessageTypeForScheduledMsg = c;
    l.getMessageTypeFromMsgInfoType = d;
    l.getInteractiveWamType = m;
    l.getWamE2eSenderType = f;
    l.getWamAgentEngagementType = g;
    l.getWamBotType = h;
    l.getWamInvisibleMessageCategoryType = y;
    l.msgIsLid = C;
}, 98);