__d("WAWebMessageYourselfMetricUtils", [
    "WARandomHex",
    "WAWebChatConstants",
    "WAWebUiMessageYourselfActionWamEvent",
    "WAWebWamEnumUiMessageYourselfActionType",
    "WAWebWamEnumUiMessageYourselfFunnelName"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor(e){
            this.$2 = e;
        }
        $3(uiMessageYourselfActionType) {
            new (o("WAWebUiMessageYourselfActionWamEvent")).UiMessageYourselfActionWamEvent({
                uiMessageYourselfActionSessionId: this.$1,
                uiMessageYourselfActionType,
                uiMessageYourselfFunnelName: this.$2
            }).commit();
        }
        startSession() {
            this.$1 = o("WARandomHex").randomHex(16);
        }
        newChatPressed() {
            this.$3(o("WAWebWamEnumUiMessageYourselfActionType").UI_MESSAGE_YOURSELF_ACTION_TYPE.NEW_CHAT_PRESSED);
        }
        youSelected() {
            this.$3(o("WAWebWamEnumUiMessageYourselfActionType").UI_MESSAGE_YOURSELF_ACTION_TYPE.YOU_SELECTED);
        }
        searchBarPressed() {
            this.$3(o("WAWebWamEnumUiMessageYourselfActionType").UI_MESSAGE_YOURSELF_ACTION_TYPE.SEARCH_BAR_PRESSED);
        }
        logMessageYourselfOpenedEvent(t, n) {
            if (n) {
                this.searchFullNameYouSelected();
            } else {
                this.youSelected();
            }
            if (t.msgs.length || t.endOfHistoryTransferType === o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.INCOMPLETE) {
                this.existingMessageYourselfOpened();
            } else {
                this.newMessageYourselfCreated();
            }
        }
        searchFullNameYouSelected() {
            this.$3(o("WAWebWamEnumUiMessageYourselfActionType").UI_MESSAGE_YOURSELF_ACTION_TYPE.SEARCH_FULL_NAME_YOU_SELECTED);
        }
        newMessageYourselfCreated() {
            this.$3(o("WAWebWamEnumUiMessageYourselfActionType").UI_MESSAGE_YOURSELF_ACTION_TYPE.NEW_NTS_CREATED);
        }
        existingMessageYourselfOpened() {
            this.$3(o("WAWebWamEnumUiMessageYourselfActionType").UI_MESSAGE_YOURSELF_ACTION_TYPE.EXISTING_NTS_OPENED);
        }
    }
    const s = new e(o("WAWebWamEnumUiMessageYourselfFunnelName").UI_MESSAGE_YOURSELF_FUNNEL_NAME.NEW_CHAT);
    const u = new e(o("WAWebWamEnumUiMessageYourselfFunnelName").UI_MESSAGE_YOURSELF_FUNNEL_NAME.CONTACT_AND_GLOBAL_SEARCH);
    l.UiMessageYourselfNewChatAction = s;
    l.UiMessageYourselfSearchAction = u;
}, 98);