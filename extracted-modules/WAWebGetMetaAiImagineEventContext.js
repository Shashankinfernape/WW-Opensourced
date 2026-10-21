__d("WAWebGetMetaAiImagineEventContext", [
    "WAWebChatThreadLogging",
    "WAWebThreadJourneyLogger",
    "WAWebUnifiedSession",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const a = e.aiThreads?.getFirstActivated()?.id;
            const i = a != null ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(a) : null;
            return {
                aiSessionId: o("WAWebThreadJourneyLogger").ThreadJourneyLogger.getAiSessionId() ?? undefined,
                metaAiConversationThreadId: i ?? undefined,
                unifiedSessionId: o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId() ?? undefined
            };
        });
        return s.apply(this, arguments);
    }
    l.getMetaAiImagineEventContext = e;
}, 98);