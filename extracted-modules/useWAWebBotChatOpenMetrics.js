__d("useWAWebBotChatOpenMetrics", [
    "WAWebBotJourneyLogger",
    "WAWebBotLoggingUtils",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebPonyfillsCryptoRandomUUID",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function u({ chat, chatEntryPoint }) {
        useEffect(function() {
            const chat_id = chat.id;
            const a = o("WAWebBotUtils").isMetaAiBot(chat_id);
            if (!(!a && !o("WAWebBotUtils").isHatchBot(chat_id))) {
                const i = o("WAWebBotLoggingUtils").getBotEntryPoint(chatEntryPoint);
                const l = i ?? o("WAWebBotJourneyLogger").BotJourneyLogger.getEntryPoint();
                if (l != null) {
                    if (a) {
                        const u = o("WAWebBotProfileCollection").BotProfileCollection.get(chat_id)?.personaId;
                        if (u == null) {
                            return;
                        }
                        if (i != null) {
                            o("WAWebBotJourneyLogger").BotJourneyLogger.setDestinationId(r("WAWebPonyfillsCryptoRandomUUID")());
                        }
                        o("WAWebBotJourneyLogger").BotJourneyLogger.setBotPersonaId(u);
                    }
                    o("WAWebBotJourneyLogger").BotJourneyLogger.setEntryPoint(l);
                    const c = o("WAWebBotLoggingUtils").getBotMetricsEntryPointFromChatEntryPoint(chatEntryPoint);
                    if (c != null) {
                        o("WAWebBotJourneyLogger").BotJourneyLogger.setBotMetricsEntryPoint(c);
                    }
                    if (a) {
                        o("WAWebBotJourneyLogger").BotJourneyLogger.logAiChatClick();
                    }
                }
            }
        }, []);
    }
    l.useBotChatOpenMetrics = u;
}, 98);