__d("WAWebPttMessageUserJourneyLogger", [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotUtils",
    "WAWebGetSharedSessionId",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebPttMessageUserJourneyWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumChatbarInitialState",
    "WAWebWamEnumPttMessageUserJourneyAction",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumUserJourneyChatType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    class s {
        constructor(e = o("WAWebGetSharedSessionId").getSharedSessionId()){
            this.loggingEnabled = false;
            this.$3 = false;
            this.loggingEnabled = o("WAWebABProps").getABPropConfigValue("ptt_user_journey_logging_wam_enabled");
            this.$1 = e;
        }
        setHasDraft(t = true) {
            this.$3 = t;
        }
        start(t, n) {
            this.$3 = false;
            this.$4({
                chatId: t,
                uiSurface: m(t),
                action: o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.START,
                containsQuotedItem: n
            });
        }
        pause(t, n) {
            this.$4({
                chatId: t,
                uiSurface: m(t),
                action: o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.PAUSE,
                containsQuotedItem: n
            });
        }
        resume(t, n) {
            this.$4({
                chatId: t,
                uiSurface: m(t),
                action: o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.RESUME,
                containsQuotedItem: n
            });
        }
        send(t, n) {
            this.$4({
                chatId: t,
                uiSurface: m(t),
                action: o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.SEND,
                containsQuotedItem: n
            });
            this.$3 = false;
        }
        delete(t, n) {
            this.$4({
                chatId: t,
                uiSurface: m(t),
                action: o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.DELETE,
                containsQuotedItem: n
            });
            this.$3 = false;
        }
        draftSaved(t, n) {
            this.$4({
                chatId: t,
                uiSurface: m(t),
                action: o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_SAVED,
                containsQuotedItem: n
            });
        }
        $4(n) {
            if (this.loggingEnabled) {
                const t = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
                if (t == null) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[uj] [ptt message] Unified session ID is null"
                    ])));
                    return;
                }
                if (u(n.action) && this.$2 == null) {
                    this.$2 = r("WAWebPonyfillsCryptoRandomUUID")();
                }
                const a = this.$2;
                if (a != null) {
                    const i = d(n.chatId);
                    const l = new (o("WAWebPttMessageUserJourneyWamEvent")).PttMessageUserJourneyWamEvent;
                    l.appSessionId = this.$1;
                    l.unifiedSessionId = t;
                    l.userJourneyFunnelId = a;
                    l.uiSurface = n.uiSurface;
                    if (i != null) {
                        l.userJourneyChatType = i;
                    }
                    l.userJourneyEventMs = o("WATimeUtils").unixTimeMs();
                    l.chatbarInitialState = this.$3 ? o("WAWebWamEnumChatbarInitialState").CHATBAR_INITIAL_STATE.CONTAINS_DRAFT : o("WAWebWamEnumChatbarInitialState").CHATBAR_INITIAL_STATE.EMPTY;
                    l.pttIntensityAggregateValue = 0;
                    l.pttMessageUserJourneyAction = n.action;
                    l.pttMessageUserJourneyContainsQuotedItem = n.containsQuotedItem;
                    l.isMetaAiThread = o("WAWebBotUtils").isMetaAiBot(n.chatId);
                    l.commit();
                    if (c(n.action)) {
                        this.$2 = null;
                    }
                }
            }
        }
    }
    function u(action) {
        if (action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.AUTO_CANCEL || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.FAIL || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_SAVED || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_LOADED) {
            return false;
        }
        if (action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.START || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.RESUME || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.PAUSE || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.DELETE || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.SEND || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.WIDGET_TAP || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.PTT_WIDGET_FORWARD_PICKER_SHOWN || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.PTT_WIDGET_RECIPIENT_SELECTED || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.PREVIEW_PLAYBACK || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.LOCK) {
            return true;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${action}`);
        })();
    }
    function c(action) {
        if (action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.SEND || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.AUTO_CANCEL || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.FAIL || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_SAVED || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_LOADED || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.DELETE) {
            return true;
        }
        if (action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.START || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.RESUME || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.PAUSE || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.WIDGET_TAP || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.PTT_WIDGET_FORWARD_PICKER_SHOWN || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.PTT_WIDGET_RECIPIENT_SELECTED || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.PREVIEW_PLAYBACK || action === o("WAWebWamEnumPttMessageUserJourneyAction").PTT_MESSAGE_USER_JOURNEY_ACTION.LOCK) {
            return false;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${action}`);
        })();
    }
    function d(chatId) {
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
    function m(e) {
        if (e.isGroup()) {
            return o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT;
        }
        return o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD;
    }
    const p = new s;
    l.PttMessageUserJourneyLogger = p;
}, 98);