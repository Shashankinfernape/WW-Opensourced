__d("WAWebQuotedMessageUserJourneyLogger", [
    "WALogger",
    "WAWebABProps",
    "WAWebGetSharedSessionId",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebQuotedMessageUserJourneyWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumQuotedMessageUserJourneyAction",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumUserJourneyChatType",
    "WAWebWamMsgUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    class s {
        constructor(e = o("WAWebGetSharedSessionId").getSharedSessionId()){
            this.loggingEnabled = false;
            this.loggingEnabled = o("WAWebABProps").getABPropConfigValue("quoted_message_user_journey_logging_enabled");
            this.$1 = e;
        }
        quotedMessageAdded(t, n, quotedMessage) {
            let QUOTED_MESSAGE_ADDED = o("WAWebWamEnumQuotedMessageUserJourneyAction").QUOTED_MESSAGE_USER_JOURNEY_ACTION.QUOTED_MESSAGE_ADDED;
            if (this.$8 != null && !this.$8.equals(quotedMessage.id)) {
                QUOTED_MESSAGE_ADDED = o("WAWebWamEnumQuotedMessageUserJourneyAction").QUOTED_MESSAGE_USER_JOURNEY_ACTION.QUOTED_MESSAGE_UPDATED;
            }
            this.$8 = quotedMessage.id;
            this.$9({
                chatId: t,
                entryPoint: n,
                action: QUOTED_MESSAGE_ADDED,
                quotedMessage
            });
        }
        quotedMessageDeleted(t) {
            this.$9({
                chatId: t,
                action: o("WAWebWamEnumQuotedMessageUserJourneyAction").QUOTED_MESSAGE_USER_JOURNEY_ACTION.QUOTED_MESSAGE_DELETED
            });
        }
        quotedMessageTappedInComposer(t) {
            this.$9({
                chatId: t,
                action: o("WAWebWamEnumQuotedMessageUserJourneyAction").QUOTED_MESSAGE_USER_JOURNEY_ACTION.QUOTED_MESSAGE_TAPPED_IN_COMPOSER
            });
        }
        quotedMessageBubbleTapped(t, quotedMessage) {
            this.$9({
                chatId: t,
                action: o("WAWebWamEnumQuotedMessageUserJourneyAction").QUOTED_MESSAGE_USER_JOURNEY_ACTION.QUOTED_MESSAGE_BUBBLE_TAPPED,
                quotedMessage
            });
        }
        quotedMessageSent(t) {
            this.$9({
                chatId: t,
                action: o("WAWebWamEnumQuotedMessageUserJourneyAction").QUOTED_MESSAGE_USER_JOURNEY_ACTION.QUOTED_MESSAGE_SENT
            });
        }
        $9(n) {
            if (this.loggingEnabled) {
                const t = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
                if (t == null) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[uj] [quoted message] Unified session ID is null"
                    ])));
                    return;
                }
                if (!(this.$2 != null && u(n.action))) {
                    if (u(n.action) && this.$2 == null) {
                        this.$2 = r("WAWebPonyfillsCryptoRandomUUID")();
                        this.$5 = n.entryPoint;
                        if (n.chatId != null) {
                            this.$3 = d(n.chatId);
                        }
                        this.$4 = m(n.chatId);
                    }
                    const a = this.$2;
                    if (a != null) {
                        const i = n.quotedMessage;
                        if (i != null) {
                            this.$6 = o("WAWebWamMsgUtils").getWamMediaType(i);
                            this.$7 = o("WAWebWamMsgUtils").getWamMessageType(i);
                        }
                        const l = new (o("WAWebQuotedMessageUserJourneyWamEvent")).QuotedMessageUserJourneyWamEvent;
                        l.appSessionId = this.$1;
                        l.unifiedSessionId = t;
                        l.userJourneyFunnelId = a;
                        if (this.$4 != null) {
                            l.uiSurface = this.$4;
                        }
                        if (this.$3 != null) {
                            l.userJourneyChatType = this.$3;
                        }
                        if (this.$6 != null) {
                            l.quotedMediaType = this.$6;
                        }
                        if (this.$7 != null) {
                            l.quotedMessageTypeEnum = this.$7;
                        }
                        l.quotedMessageUserJourneyAction = n.action;
                        if (this.$5 != null) {
                            l.quotedMessageUserJourneyEntryPoint = this.$5;
                        }
                        l.commit();
                        if (c(n.action)) {
                            this.$2 = null;
                            this.$5 = null;
                            this.$3 = null;
                            this.$4 = null;
                            this.$6 = null;
                            this.$7 = null;
                            this.$8 = null;
                        }
                    }
                }
            }
        }
    }
    function u(action) {
        return action === o("WAWebWamEnumQuotedMessageUserJourneyAction").QUOTED_MESSAGE_USER_JOURNEY_ACTION.QUOTED_MESSAGE_ADDED || action === o("WAWebWamEnumQuotedMessageUserJourneyAction").QUOTED_MESSAGE_USER_JOURNEY_ACTION.QUOTED_MESSAGE_BUBBLE_TAPPED;
    }
    function c(action) {
        return action === o("WAWebWamEnumQuotedMessageUserJourneyAction").QUOTED_MESSAGE_USER_JOURNEY_ACTION.QUOTED_MESSAGE_BUBBLE_TAPPED || action === o("WAWebWamEnumQuotedMessageUserJourneyAction").QUOTED_MESSAGE_USER_JOURNEY_ACTION.QUOTED_MESSAGE_DELETED || action === o("WAWebWamEnumQuotedMessageUserJourneyAction").QUOTED_MESSAGE_USER_JOURNEY_ACTION.QUOTED_MESSAGE_SENT;
    }
    function d(e) {
        if (e == null) {
            return null;
        }
        if (e.isUser()) {
            return o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE.INDIVIDUAL;
        }
        if (e.isGroup()) {
            return o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE.GROUP;
        }
        if (e.isNewsletter()) {
            return o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE.CHANNEL;
        }
        return null;
    }
    function m(chatId) {
        if (chatId.isGroup()) {
            return o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT;
        }
        return o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD;
    }
    const p = new s;
    l.getChatType = d;
    l.QuotedMessageUserJourneyLogger = p;
}, 98);