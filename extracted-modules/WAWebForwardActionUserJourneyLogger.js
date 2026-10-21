__d("WAWebForwardActionUserJourneyLogger", [
    "WALogger",
    "WAWebABProps",
    "WAWebForwardActionUserJourneyWamEvent",
    "WAWebGetSharedSessionId",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebShareContentUserJourneyLogger",
    "WAWebUnifiedSession",
    "WAWebWamEnumForwardActionUserJourneyAction",
    "WAWebWamEnumShareContentUserJourneyEntryPoint",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumUserJourneyChatType",
    "WAWebWamMsgUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    class u {
        constructor(e = o("WAWebGetSharedSessionId").getSharedSessionId()){
            this.loggingEnabled = false;
            this.loggingEnabled = o("WAWebABProps").getABPropConfigValue("forwarded_message_user_journey_logging_enabled");
            this.$1 = e;
        }
        contextMenuShownWithForward(t, n) {
            this.$9({
                chatId: t,
                message: n,
                uiSurface: p(t),
                action: o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.CONTEXT_MENU_SHOWN_WITH_FORWARD
            });
        }
        contextMenuShownWithoutForward(t, n) {
            this.$9({
                chatId: t,
                message: n,
                uiSurface: p(t),
                action: o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.CONTEXT_MENU_SHOWN_WITHOUT_FORWARD
            });
        }
        forwardTappedInContextMenu() {
            this.$9({
                action: o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.FORWARD_TAPPED_IN_CONTEXT_MENU
            });
        }
        fastForwardButtonTapped(t, n) {
            this.$9({
                chatId: t,
                message: n,
                selectedMessages: [
                    n
                ],
                uiSurface: p(t),
                action: o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.FAST_FORWARD_BUTTON_TAPPED
            });
        }
        messageForwardSelect(t) {
            this.$9({
                action: t ? o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.MESSAGE_FORWARD_SELECT : o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.MESSAGE_FORWARD_UNSELECT
            });
        }
        cancelInForwardToolbar() {
            this.$9({
                action: o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.CANCEL_IN_FORWARD_TOOLBAR
            });
        }
        contextMenuDismissed() {
            this.$9({
                action: o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.CONTEXT_MENU_DISMISSED
            });
        }
        forwardButtonTappedInForwardToolbar(selectedMessages) {
            this.$9({
                action: o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.FORWARD_BUTTON_TAPPED_IN_FORWARD_TOOLBAR,
                selectedMessages
            });
        }
        forwardToolbarDismissed() {
            this.$9({
                action: o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.FORWARD_TOOLBAR_DISMISSED
            });
        }
        selectTappedInContextMenu() {
            this.$9({
                action: o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.SELECT_TAPPED_IN_CONTEXT_MENU,
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD
            });
        }
        selectTappedInMoreMenu() {
            this.$9({
                action: o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.SELECT_TAPPED_IN_MORE_MENU,
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD
            });
        }
        $9(n) {
            if (this.loggingEnabled) {
                const t = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
                if (t == null) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[uj] [forward] Unified session ID is null"
                    ])));
                    return;
                }
                if (c(n.action) && this.$2 == null) {
                    this.$2 = r("WAWebPonyfillsCryptoRandomUUID")();
                    this.$5 = r("WAWebPonyfillsCryptoRandomUUID")();
                    if (n.chatId != null) {
                        this.$3 = m(n.chatId);
                    }
                    this.$4 = n.uiSurface;
                    const a = n.message;
                    if (a != null && a.id != null) {
                        this.$6 = a.id.fromMe;
                        this.$7 = o("WAWebWamMsgUtils").getWamMediaType(a);
                        this.$8 = o("WAWebWamMsgUtils").getWamMessageType(a);
                    }
                }
                const i = this.$2;
                if (i != null) {
                    const l = new (o("WAWebForwardActionUserJourneyWamEvent")).ForwardActionUserJourneyWamEvent;
                    l.appSessionId = this.$1;
                    l.unifiedSessionId = t;
                    l.userJourneyFunnelId = i;
                    if (this.$4 != null) {
                        l.uiSurface = this.$4;
                    }
                    if (this.$3 != null) {
                        l.userJourneyChatType = this.$3;
                    }
                    l.forwardActionUserJourneyAction = n.action;
                    if (this.$5 != null) {
                        l.forwardUserJourneyFunnelId = this.$5;
                    }
                    if (this.$6 != null) {
                        l.messageIsFromMe = this.$6;
                    }
                    if (this.$7 != null) {
                        l.messageMediaType = this.$7;
                    }
                    if (this.$8 != null) {
                        l.messageType = this.$8;
                    }
                    l.commit();
                    this.$10(n.action, n.selectedMessages);
                    if (d(n.action)) {
                        this.$2 = null;
                        this.$3 = null;
                        this.$4 = null;
                        this.$5 = null;
                        this.$6 = null;
                        this.$7 = null;
                        this.$8 = null;
                    }
                }
            }
        }
        $10(t, n) {
            const e = t === o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.FAST_FORWARD_BUTTON_TAPPED;
            const r = t === o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.FORWARD_BUTTON_TAPPED_IN_FORWARD_TOOLBAR;
            if (!(n == null || n.length === 0) && (e || r)) {
                if (this.$5 == null) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[uj] [forward] Shared forward user journey funnel ID is null"
                    ])));
                }
                let a;
                if (r) {
                    a = o("WAWebWamEnumShareContentUserJourneyEntryPoint").SHARE_CONTENT_USER_JOURNEY_ENTRY_POINT.TOOLBAR;
                } else {
                    a = o("WAWebWamEnumShareContentUserJourneyEntryPoint").SHARE_CONTENT_USER_JOURNEY_ENTRY_POINT.FASTFORWARD;
                }
                o("WAWebShareContentUserJourneyLogger").ShareContentUserJourneyLogger.funnelStart({
                    entryPoint: a,
                    forwardUserJourneyFunnelId: this.$5,
                    selectedMessages: n,
                    uiSurface: this.$4
                });
            }
        }
    }
    function c(action) {
        return action === o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.CONTEXT_MENU_SHOWN_WITH_FORWARD || action === o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.CONTEXT_MENU_SHOWN_WITHOUT_FORWARD || action === o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.FAST_FORWARD_BUTTON_TAPPED || action === o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.SELECT_TAPPED_IN_CONTEXT_MENU || action === o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.SELECT_TAPPED_IN_MORE_MENU;
    }
    function d(action) {
        return action === o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.CANCEL_IN_FORWARD_TOOLBAR || action === o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.CONTEXT_MENU_DISMISSED || action === o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.FAST_FORWARD_BUTTON_TAPPED || action === o("WAWebWamEnumForwardActionUserJourneyAction").FORWARD_ACTION_USER_JOURNEY_ACTION.FORWARD_TOOLBAR_DISMISSED;
    }
    function m(chatId) {
        if (chatId.isUser()) {
            return o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE.INDIVIDUAL;
        }
        if (chatId.isGroup()) {
            return o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE.GROUP;
        }
        if (chatId.isNewsletter()) {
            return o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE.CHANNEL;
        }
        return null;
    }
    function p(e) {
        if (e.isGroup()) {
            return o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT;
        }
        return o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD;
    }
    const _ = new u;
    l.ForwardActionUserJourneyLogger = _;
}, 98);