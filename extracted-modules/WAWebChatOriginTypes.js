__d("WAWebChatOriginTypes", [], function(t, n, r, o, a, i) {
    const e = new Set([
        "createChat",
        "createChatOnNewMsg",
        "debugOpenChatFlow",
        "debugConvertToLidChat",
        "debugCreateChat",
        "jest",
        "updateDeviceTableApi",
        "fixturesChatFactory",
        "securityCodeApi",
        "restoreMessagesForChat",
        "processUnreadMessage",
        "loadLastMessagesFromDb",
        "processPreviewMessageInChat",
        "historyMsgHandlerAction",
        "updateMessageUIAction",
        "msgCollectionFindQuery",
        "msgCollectionGetStarred",
        "msgCollectionGetEvents",
        "msgCollectionGetGroupMemberUpdates",
        "msgCollectionGetVoipCallLogs",
        "msgCollectionGetMessagesById",
        "msgCollectionQueryVCard",
        "msgCollectionIncrementalStarredUpdate",
        "msgCollectionQueryMedia",
        "msgCollectionSearch",
        "msgCollectionGetContext",
        "username_change_notification",
        "username_contactless_search",
        "voipCallLog"
    ]);
    const l = new Set([
        "username_change_notification",
        "username_contactless_search"
    ]);
    i.VALID_LID_ORIGINS = e;
    i.VALID_USERNAME_ORIGINS = l;
}, 66);