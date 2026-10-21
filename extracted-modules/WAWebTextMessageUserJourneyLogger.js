__d("WAWebTextMessageUserJourneyLogger", [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebGetSharedSessionId",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebTextMessageUserJourneyWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumChatbarInitialState",
    "WAWebWamEnumTextMessageUserJourneyAction",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumUserJourneyChatType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    class s {
        constructor(e = o("WAWebGetSharedSessionId").getSharedSessionId()){
            this.loggingEnabled = false;
            this.loggingEnabled = o("WAWebABProps").getABPropConfigValue("text_user_journey_logging_wam_enabled");
            this.$1 = e;
        }
        log(n) {
            if (this.loggingEnabled) {
                const t = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
                if (t == null) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[uj] [text message] Unified session ID is null"
                    ])));
                    return;
                }
                if (u(n.action) && this.$2 == null) {
                    this.$2 = r("WAWebPonyfillsCryptoRandomUUID")();
                }
                const a = this.$2;
                if (a != null) {
                    const i = d(n.chatId);
                    const l = m(n.chatId);
                    const s = new (o("WAWebTextMessageUserJourneyWamEvent")).TextMessageUserJourneyWamEvent;
                    s.appSessionId = this.$1;
                    s.unifiedSessionId = t;
                    s.userJourneyFunnelId = a;
                    s.uiSurface = l;
                    s.textMessageUserJourneyAction = n.action;
                    if (n.containsQuotedItem != null) {
                        s.textMessageUserJourneyContainsQuotedItem = n.containsQuotedItem;
                    }
                    s.userJourneyChatType = i;
                    s.userJourneyEventMs = o("WATimeUtils").unixTimeMs();
                    s.chatbarInitialState = n.hasDraft ? o("WAWebWamEnumChatbarInitialState").CHATBAR_INITIAL_STATE.CONTAINS_DRAFT : o("WAWebWamEnumChatbarInitialState").CHATBAR_INITIAL_STATE.EMPTY;
                    s.commit();
                    if (c(n.action)) {
                        this.$2 = null;
                    }
                }
            }
        }
    }
    function u(action) {
        if (action === o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.TYPING_START || action === o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.CLEARED || action === o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.CLICK_ON_COMPOSER || action === o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.SENT) {
            return true;
        }
        if (action === o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.DELIVERED || action === o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_SAVED || action === o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_LOADED || action === o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.EXIT) {
            return false;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${action}`);
        })();
    }
    function c(action) {
        if (action === o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_SAVED || action === o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_LOADED || action === o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.SENT || action === o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.EXIT) {
            return true;
        }
        if (action === o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.CLEARED || action === o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.CLICK_ON_COMPOSER || action === o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.DELIVERED || action === o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.TYPING_START) {
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
        return o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE.MULTIPLE;
    }
    function m(chatId) {
        if (chatId.isGroup()) {
            return o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT;
        }
        return o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD;
    }
    const p = new s;
    l.TextMessageUserJourneyLogger = p;
}, 98);