__d("WAWebPinInChatMetricUtils", [
    "WAWebChatGetters",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebMsgGetters",
    "WAWebPinInChatInteractionWamEvent",
    "WAWebPinInChatMessageSendWamEvent",
    "WAWebPinMsgConstants",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumGroupRoleType",
    "WAWebWamEnumGroupTypeClient",
    "WAWebWamEnumPinInChatInteractionType",
    "WAWebWamEnumPinInChatType",
    "WAWebWamMsgUtils",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e({ chat, msg, parentMsg, timeRemainingToExpirySecs = 0 }) {
        const u = o("WAWebChatGetters").getIsGroup(chat);
        let p;
        let _;
        if (u) {
            const f = r("nullthrows")(chat.groupMetadata);
            p = d(o("WAWebGroupMetadataGetters").getGroupType(f));
            _ = m(f.participants.iAmAdmin());
        }
        new (o("WAWebPinInChatMessageSendWamEvent")).PinInChatMessageSendWamEvent({
            pinInChatType: c(r("nullthrows")(msg.pinMessageType)),
            isAGroup: u,
            groupTypeClient: p,
            groupRole: _,
            mediaType: o("WAWebWamMsgUtils").getWamMediaType(parentMsg),
            pinInChatExpirySecs: msg.pinExpiryDuration ?? 0,
            isSelfParentMessage: o("WAWebMsgGetters").getIsSentByMe(parentMsg),
            isSelfPin: o("WAWebMsgGetters").getIsSentByMe(msg),
            timeRemainingToExpirySecs
        }).commit();
    }
    function s({ chat, msg, pin, pinCount, pinIndex }) {
        const s = o("WAWebChatGetters").getIsGroup(chat);
        let u;
        let c;
        let groupSize;
        if (s) {
            const _ = r("nullthrows")(chat.groupMetadata);
            u = d(o("WAWebGroupMetadataGetters").getGroupType(_));
            c = m(_.participants.iAmAdmin());
            groupSize = _.participants.length;
        }
        new (o("WAWebPinInChatInteractionWamEvent")).PinInChatInteractionWamEvent({
            pinInChatInteractionType: o("WAWebWamEnumPinInChatInteractionType").PIN_IN_CHAT_INTERACTION_TYPE.TAP_ON_BANNER,
            isAGroup: s,
            groupTypeClient: u,
            groupRole: c,
            groupSize,
            mediaType: msg != null ? o("WAWebWamMsgUtils").getWamMediaType(msg) : undefined,
            pinCount,
            pinIndex,
            isSelfPin: o("WAWebUserPrefsMeUser").isMeAccount(pin?.sender)
        }).commit();
    }
    function u(e) {
        if (e != null) {
            const t = e.leftExpirationTime();
            if (t === o("WAWebPinMsgConstants").PIN_TIME_REMAINING_INFINITE) {
                return 0;
            }
            return t;
        }
    }
    function c(e) {
        switch(e){
            case o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.PIN_FOR_ALL:
                return o("WAWebWamEnumPinInChatType").PIN_IN_CHAT_TYPE.PIN_FOR_ALL;
            case o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.UNPIN_FOR_ALL:
                return o("WAWebWamEnumPinInChatType").PIN_IN_CHAT_TYPE.UNPIN_FOR_ALL;
            default:
                throw r("err")(`Unsupported pin message type: ${e}`);
        }
    }
    function d(e) {
        switch(e){
            case o("WAWebGroupType").GroupType.DEFAULT:
                return o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT.REGULAR_GROUP;
            case o("WAWebGroupType").GroupType.LINKED_SUBGROUP:
                return o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT.SUB_GROUP;
            case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
                return o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT.DEFAULT_SUB_GROUP;
            case o("WAWebGroupType").GroupType.COMMUNITY:
                return o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT.PARENT_GROUP;
            case o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP:
                return o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT.SUB_GROUP;
        }
    }
    function m(e) {
        if (e) {
            return o("WAWebWamEnumGroupRoleType").GROUP_ROLE_TYPE.ADMIN;
        }
        return o("WAWebWamEnumGroupRoleType").GROUP_ROLE_TYPE.MEMBER;
    }
    l.logPinInChatMessageSend = e;
    l.logPinInChatTapOnBanner = s;
    l.getFiniteTimeRemainingSecs = u;
}, 98);