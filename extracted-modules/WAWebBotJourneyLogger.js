__d("WAWebBotJourneyLogger", [
    "WALogger",
    "WAWebBotJourneyWamEvent",
    "WAWebBotLoggingUtils",
    "WAWebGetSharedSessionId",
    "WAWebWamEnumBotEntryPointType",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumTsSurface"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(e) {
        const t = e != null ? o("WAWebBotLoggingUtils").getBotMetricsEntryPointFromBotEntryPoint(e) : void 0;
        if (t != null) {
            return o("WAWebBotLoggingUtils").getBotOriginFromBotMetricsEntryPoint(t);
        }
    }
    const c = (()=>{
        function t() {
            this.$1 = null;
        }
        const n = t.prototype;
        n.setAiSessionId = function(t) {
            this.$5 = t;
        };
        n.setEntryPoint = function(t) {
            this.$1 = t;
        };
        n.getEntryPoint = function() {
            return this.$1;
        };
        n.setBotMetricsEntryPoint = function(t) {
            this.$2 = t;
        };
        n.getBotMetricsEntryPoint = function() {
            return this.$2;
        };
        n.setDestinationId = function(t) {
            this.$3 = t;
        };
        n.getDestinationId = function() {
            return this.$3;
        };
        n.setBotPersonaId = function(t) {
            this.$4 = t;
        };
        n.log = function({ actionType: a, additionalCategory: i, aiSessionId: l, conversationStarterIndex: s, conversationStarterName: c, entryPoint: d, eventTsMs: m, originEntryPoint: p, uiSurface: _ }) {
            const f = d ?? this.$1 ?? void 0;
            const g = u(p !== void 0 ? p : f);
            const h = new (o("WAWebBotJourneyWamEvent")).BotJourneyWamEvent({
                appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
                actionType: a,
                botEntryPoint: f,
                rawBotEntryPoint: g ?? void 0,
                botPersonaId: this.$4 ?? void 0,
                uiSurface: _,
                aiSessionId: l,
                eventTsMs: m,
                additionalCategory: i,
                conversationStarterName: c,
                conversationStarterIndex: s
            });
            const y = o("WAWebBotLoggingUtils").getBotEntryPointTypeName(f);
            const C = o("WAWebBotLoggingUtils").getChatFilterActionTypeName(a);
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "BotJourneyWamEvent:commit entryPoint=",
                " actionType=",
                ""
            ])), y, C);
            h.commit();
        };
        n.logAiChatClick = function() {
            this.log({
                actionType: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.AI_CHAT_CLICK
            });
        };
        n.logFabClick = function({ isMetaAiAssistant: e }) {
            try {
                const r = o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.FAB;
                new (o("WAWebBotJourneyWamEvent")).BotJourneyWamEvent({
                    appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
                    actionType: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.AI_FAB_CLICK,
                    botEntryPoint: r,
                    rawBotEntryPoint: u(r) ?? void 0,
                    isMetaAiAssistant: e,
                    eventTsMs: Date.now()
                }).commit();
            } catch (e) {
                try {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[BotJourneyLogger] FAB click log failed"
                    ]))).sendLogs("bot-journey-fab-click-log-failed");
                } catch (e) {}
            }
        };
        n.logTosView = function(t) {
            this.log({
                actionType: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.AI_TOS_VIEW,
                entryPoint: t
            });
        };
        n.logTosAccept = function(t) {
            this.log({
                actionType: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.AI_TOS_ACCEPT_CLICK,
                entryPoint: t
            });
        };
        n.logTosDismiss = function(t) {
            this.log({
                actionType: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.AI_TOS_DISMISS_CLICK,
                entryPoint: t
            });
        };
        n.logNullStatePromptSend = function(t, n) {
            const a = Date.now();
            this.log({
                actionType: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.CONVERSATION_STARTER_TAP,
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.META_AI_CHAT,
                aiSessionId: this.$5 ?? void 0,
                conversationStarterName: t ?? void 0,
                conversationStarterIndex: n,
                eventTsMs: a
            });
            this.log({
                actionType: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.AI_NULL_STATE_PROMPT_SEND,
                entryPoint: o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.AI_NULL_STATE,
                originEntryPoint: this.$1,
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.META_AI_CHAT,
                aiSessionId: this.$5 ?? void 0,
                eventTsMs: a
            });
        };
        n.logModeSelectionImpression = function(t = o("WAWebWamEnumTsSurface").TS_SURFACE.META_AI_CHAT_COMPOSER) {
            const n = this.$1;
            if (n != null) {
                this.log({
                    actionType: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.MODE_SELECTION_IMPRESSION,
                    entryPoint: n,
                    uiSurface: t,
                    aiSessionId: this.$5 ?? void 0,
                    eventTsMs: Date.now()
                });
            }
        };
        n.logModeSelectionClick = function(t = o("WAWebWamEnumTsSurface").TS_SURFACE.META_AI_MODE_SELECTION_BOTTOM_SHEET) {
            if (this.$1 != null) {
                this.log({
                    actionType: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.MODE_SELECTION_CLICK,
                    uiSurface: t,
                    aiSessionId: this.$5 ?? void 0,
                    eventTsMs: Date.now()
                });
            }
        };
        return t;
    })();
    const d = new c;
    l.BotJourneyLogger = d;
}, 98);