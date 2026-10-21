__d("WAWebThreadJourneyLogger", [
    "Promise",
    "WALogger",
    "WAWebAiThreadsUserJourneyWamEvent",
    "WAWebBotJourneyLogger",
    "WAWebBotLoggingUtils",
    "WAWebChatThreadLogging",
    "WAWebGetSharedSessionId",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWamEnumMetaAiActionEntryPoint",
    "WAWebWamEnumThreadActionTypes",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = (()=>{
        function t() {
            const e = this;
            this.logFirstPromptSent = function(t, n) {
                e.$3 = t;
                e.log({
                    threadActionType: o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.FIRST_PROMPT_SENT,
                    threadCreationTs: n?.toString(),
                    threadId: t
                });
            };
        }
        const a = t.prototype;
        a.maybeGenAiSessionId = function() {
            if (this.$1 == null) {
                this.$1 = r("WAWebPonyfillsCryptoRandomUUID")();
                o("WAWebBotJourneyLogger").BotJourneyLogger.setAiSessionId(this.$1);
            }
        };
        a.getAiSessionId = function() {
            return this.$1;
        };
        a.getLastMessageSentAiThreadId = function() {
            return this.$3;
        };
        a.clearAiThreadLoggingContext = function() {
            this.$1 = null;
            this.$3 = null;
            o("WAWebBotJourneyLogger").BotJourneyLogger.setAiSessionId(null);
        };
        a.log = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ entryPoint: r, hashedThreadId: a, threadActionType: i, threadCreationTs: l, threadId: u }) {
                const c = this.$1;
                if (c == null) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "ThreadJourneyWamEvent:skipped - aiSessionId is null"
                    ])));
                    return;
                }
                const d = r ?? this.$2 ?? void 0;
                if (r != null) {
                    this.$2 = r;
                }
                const m = o("WAWebBotJourneyLogger").BotJourneyLogger.getEntryPoint();
                const p = m != null ? o("WAWebBotLoggingUtils").getBotMetricsEntryPointFromBotEntryPoint(m) : void 0;
                const _ = p != null ? o("WAWebBotLoggingUtils").getBotOriginFromBotMetricsEntryPoint(p) : void 0;
                const f = a ?? (u != null ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(u) : void 0);
                const g = new (o("WAWebAiThreadsUserJourneyWamEvent")).AiThreadsUserJourneyWamEvent({
                    aiSessionId: c,
                    appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
                    conversationThreadCreationTs: l ?? void 0,
                    conversationThreadId: f ?? void 0,
                    eventTsMs: Date.now(),
                    metaAiActionEntryPoint: d,
                    rawBotEntryPoint: _ ?? void 0,
                    threadActionType: i
                });
                const h = o("WAWebBotLoggingUtils").getMetaAiActionEntryPointName(d);
                const y = o("WAWebBotLoggingUtils").getThreadActionTypeName(i);
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "ThreadJourneyWamEvent:commit entryPoint=",
                    " actionType=",
                    ""
                ])), h, y);
                g.commit();
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a.logNewChatClick = function(t) {
            this.log({
                entryPoint: t,
                threadActionType: o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.CLICK_NEW_CHAT
            });
        };
        a.logThreeDotMenuClick = function() {
            this.log({
                entryPoint: o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT.THREE_DOT_MENU,
                threadActionType: o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.THREE_DOT_MENU
            });
        };
        a.logThreadEnter = function(t, n, r) {
            this.log({
                entryPoint: n,
                threadActionType: o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.THREAD_ENTER,
                threadCreationTs: r?.toString(),
                threadId: t
            });
        };
        a.logThreadRename = function(t, n) {
            this.log({
                threadActionType: o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.RENAME,
                threadCreationTs: n?.toString(),
                threadId: t
            });
        };
        a.logThreadPin = function(t, n) {
            this.log({
                threadActionType: o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.PIN,
                threadCreationTs: n?.toString(),
                threadId: t
            });
        };
        a.logThreadUnpin = function(t, n) {
            this.log({
                threadActionType: o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.UNPIN,
                threadCreationTs: n?.toString(),
                threadId: t
            });
        };
        a.logThreadDelete = function(t, r) {
            const e = this;
            n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const a = yield (u || (u = n("Promise"))).all(t.map((e)=>o("WAWebChatThreadLogging").getThreadIDHMAC(e)));
                yield u.all(a.map((t, n)=>e.log({
                        hashedThreadId: t,
                        threadActionType: o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.DELETE,
                        threadCreationTs: r?.[n]?.toString()
                    })));
            })();
        };
        a.logSearchResultShown = function() {
            this.log({
                threadActionType: o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.SEARCH_RESULT_SHOWN
            });
        };
        a.logSearchResultClick = function(t, n) {
            this.log({
                threadActionType: o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.SEARCH_RESULT_CLICK,
                threadCreationTs: n?.toString(),
                threadId: t
            });
        };
        return t;
    })();
    const d = new c;
    l.ThreadJourneyLogger = d;
}, 98);