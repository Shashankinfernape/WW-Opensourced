__d("WAWebWamChatPSALogger", [
    "WAWebChatMuteWamEvent",
    "WAWebChatPsaActionWamEvent",
    "WAWebChatPsaReadWamEvent",
    "WAWebChatPsaRemoveWamEvent",
    "WAWebWamEnumActionConducted",
    "WAWebWamEnumChatMuteNotificationChoice",
    "WAWebWamEnumMuteChatType",
    "WAWebWamEnumPsaMessageActionType",
    "WAWebWamEnumPsaMessageRemoveAction",
    "WAWebWamEnumPsaMessageRemoveEntryPoint",
    "WAWebWamEnumReadEntryPoint",
    "WAWebWamEnumWaOfficialAccountName",
    "WAWebWamMsgUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e.campaignId != null) {
            new (o("WAWebChatPsaReadWamEvent")).ChatPsaReadWamEvent({
                messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
                psaMsgId: e.id.id.toString(),
                psaCampaignId: e.campaignId?.toString(),
                readEntryPoint: o("WAWebWamEnumReadEntryPoint").READ_ENTRY_POINT.CHAT
            }).commit();
        }
    }
    function s(e, muteDuration) {
        new (o("WAWebChatMuteWamEvent")).ChatMuteWamEvent({
            actionConducted: o("WAWebWamEnumActionConducted").ACTION_CONDUCTED.MUTE,
            chatMuteNotificationChoice: o("WAWebWamEnumChatMuteNotificationChoice").CHAT_MUTE_NOTIFICATION_CHOICE.NO_NOTIFICATIONS_WHEN_MUTED,
            muteChatType: o("WAWebWamEnumMuteChatType").MUTE_CHAT_TYPE.ONE_ON_ONE,
            muteDuration,
            muteEntryPoint: e,
            waOfficialAccountName: o("WAWebWamEnumWaOfficialAccountName").WA_OFFICIAL_ACCOUNT_NAME.WHATSAPP_CHATPSA
        }).commit();
    }
    function u(e) {
        new (o("WAWebChatMuteWamEvent")).ChatMuteWamEvent({
            actionConducted: o("WAWebWamEnumActionConducted").ACTION_CONDUCTED.UNMUTE,
            muteChatType: o("WAWebWamEnumMuteChatType").MUTE_CHAT_TYPE.ONE_ON_ONE,
            muteEntryPoint: e,
            waOfficialAccountName: o("WAWebWamEnumWaOfficialAccountName").WA_OFFICIAL_ACCOUNT_NAME.WHATSAPP_CHATPSA
        }).commit();
    }
    function c(e) {
        new (o("WAWebChatPsaActionWamEvent")).ChatPsaActionWamEvent({
            messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
            psaCampaignId: e.campaignId?.toString(),
            psaMessageActionType: o("WAWebWamEnumPsaMessageActionType").PSA_MESSAGE_ACTION_TYPE.SAVE,
            psaMsgId: e.id.id.toString()
        }).commit();
    }
    function d(e) {
        new (o("WAWebChatPsaActionWamEvent")).ChatPsaActionWamEvent({
            messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
            psaCampaignId: e.campaignId?.toString(),
            psaMessageActionType: o("WAWebWamEnumPsaMessageActionType").PSA_MESSAGE_ACTION_TYPE.DELETE,
            psaMsgId: e.id.id.toString()
        }).commit();
    }
    function m(e) {
        new (o("WAWebChatPsaActionWamEvent")).ChatPsaActionWamEvent({
            messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
            psaCampaignId: e.campaignId?.toString(),
            psaMessageActionType: o("WAWebWamEnumPsaMessageActionType").PSA_MESSAGE_ACTION_TYPE.FORWARD,
            psaMsgId: e.id.id.toString()
        }).commit();
    }
    function p(messageMediaType, t, n) {
        new (o("WAWebChatPsaActionWamEvent")).ChatPsaActionWamEvent({
            messageMediaType,
            psaCampaignId: t?.toString(),
            psaMessageActionType: o("WAWebWamEnumPsaMessageActionType").PSA_MESSAGE_ACTION_TYPE.MEDIA_PLAY,
            psaMsgId: n.toString()
        }).commit();
    }
    function _(e, t, n) {
        if (e) {
            new (o("WAWebChatPsaRemoveWamEvent")).ChatPsaRemoveWamEvent({
                lastReceivedMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
                lastReceivedMessageTs: e.t,
                lastReceivedMsgId: e.id.id.toString(),
                psaMessageRemoveAction: f(t),
                psaMessageRemoveEntryPoint: g(n),
                waOfficialAccountName: o("WAWebWamEnumWaOfficialAccountName").WA_OFFICIAL_ACCOUNT_NAME.WHATSAPP_CHATPSA
            }).commit();
        } else {
            new (o("WAWebChatPsaRemoveWamEvent")).ChatPsaRemoveWamEvent({
                psaMessageRemoveAction: f(t),
                psaMessageRemoveEntryPoint: g(n),
                waOfficialAccountName: o("WAWebWamEnumWaOfficialAccountName").WA_OFFICIAL_ACCOUNT_NAME.WHATSAPP_CHATPSA
            }).commit();
        }
    }
    function f(e) {
        switch(e){
            case 1:
                return o("WAWebWamEnumPsaMessageRemoveAction").PSA_MESSAGE_REMOVE_ACTION.BLOCK;
            case 2:
                return o("WAWebWamEnumPsaMessageRemoveAction").PSA_MESSAGE_REMOVE_ACTION.UNBLOCK;
            case 3:
                return o("WAWebWamEnumPsaMessageRemoveAction").PSA_MESSAGE_REMOVE_ACTION.ARCHIVE;
            case 4:
                return o("WAWebWamEnumPsaMessageRemoveAction").PSA_MESSAGE_REMOVE_ACTION.UNARCHIVE;
            case 5:
                return o("WAWebWamEnumPsaMessageRemoveAction").PSA_MESSAGE_REMOVE_ACTION.CLEAR;
            case 6:
                return o("WAWebWamEnumPsaMessageRemoveAction").PSA_MESSAGE_REMOVE_ACTION.DELETE_ALL;
            default:
                return undefined;
        }
    }
    function g(e) {
        switch(e){
            case 1:
                return o("WAWebWamEnumPsaMessageRemoveEntryPoint").PSA_MESSAGE_REMOVE_ENTRY_POINT.BLOCK_FROM_CONTACT_INFO;
            case 2:
                return o("WAWebWamEnumPsaMessageRemoveEntryPoint").PSA_MESSAGE_REMOVE_ENTRY_POINT.BLOCK_FROM_CHAT;
            case 3:
                return o("WAWebWamEnumPsaMessageRemoveEntryPoint").PSA_MESSAGE_REMOVE_ENTRY_POINT.UNBLOCK_FROM_CONTACT_INFO;
            case 4:
                return o("WAWebWamEnumPsaMessageRemoveEntryPoint").PSA_MESSAGE_REMOVE_ENTRY_POINT.UNBLOCK_FROM_CHAT;
            case 5:
                return o("WAWebWamEnumPsaMessageRemoveEntryPoint").PSA_MESSAGE_REMOVE_ENTRY_POINT.UNBLOCK_FROM_PRIVACY_SETTINGS;
            case 6:
                return o("WAWebWamEnumPsaMessageRemoveEntryPoint").PSA_MESSAGE_REMOVE_ENTRY_POINT.ARCHIVE_FROM_CHAT_LIST;
            case 7:
                return o("WAWebWamEnumPsaMessageRemoveEntryPoint").PSA_MESSAGE_REMOVE_ENTRY_POINT.ARCHIVE_FROM_DELETE_OPTION;
            case 8:
                return o("WAWebWamEnumPsaMessageRemoveEntryPoint").PSA_MESSAGE_REMOVE_ENTRY_POINT.UNARCHIVE_FROM_ARCHIVED_CHAT_LIST;
            case 9:
                return o("WAWebWamEnumPsaMessageRemoveEntryPoint").PSA_MESSAGE_REMOVE_ENTRY_POINT.CLEAR_FROM_CONTACT_INFO;
            case 10:
                return o("WAWebWamEnumPsaMessageRemoveEntryPoint").PSA_MESSAGE_REMOVE_ENTRY_POINT.CLEAR_FROM_CHAT_LIST;
            case 11:
                return o("WAWebWamEnumPsaMessageRemoveEntryPoint").PSA_MESSAGE_REMOVE_ENTRY_POINT.DELETE_ALL_FROM_CHAT_LIST;
            case 12:
                return o("WAWebWamEnumPsaMessageRemoveEntryPoint").PSA_MESSAGE_REMOVE_ENTRY_POINT.DELETE_ALL_FROM_CONTACT_INFO;
            case 13:
                return o("WAWebWamEnumPsaMessageRemoveEntryPoint").PSA_MESSAGE_REMOVE_ENTRY_POINT.DELETE_ALL_FROM_CONVERSATION;
            case 14:
                return o("WAWebWamEnumPsaMessageRemoveEntryPoint").PSA_MESSAGE_REMOVE_ENTRY_POINT.CLEAR_FROM_CONVERSATION;
        }
    }
    l.logChatPSARead = e;
    l.logChatPSAMute = s;
    l.logChatPSAUnmute = u;
    l.logChatPSAStar = c;
    l.logChatPSADelete = d;
    l.logChatPSAForward = m;
    l.logChatPSAMediaPlay = p;
    l.logChatPSARemove = _;
}, 98);