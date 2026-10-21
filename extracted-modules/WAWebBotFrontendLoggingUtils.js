__d("WAWebBotFrontendLoggingUtils", [
    "WAWebThreadJourneyLogger",
    "WAWebThreadMsgUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const n = o("WAWebThreadMsgUtils").getMsgAiThread(t);
        if (n != null) {
            const r = o("WAWebThreadJourneyLogger").ThreadJourneyLogger.getLastMessageSentAiThreadId();
            if (n !== r) {
                const l = e.aiThreads?.get(n);
                const s = l?.creationTimestamp ?? Date.now();
                o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logFirstPromptSent(n, s);
            }
        }
    }
    l.maybeLogFirstPromptSentInAiThread = e;
}, 98);