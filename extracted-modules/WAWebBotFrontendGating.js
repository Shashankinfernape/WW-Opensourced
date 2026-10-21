__d("WAWebBotFrontendGating", [
    "WAWebBotBaseGating",
    "WAWebBotUtils",
    "WAWebHatchFrontendGating",
    "WAWebMobilePlatforms"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (!e.isBot() || e.isSupportAgentBot()) {
            return false;
        }
        if (o("WAWebMobilePlatforms").isSMB()) {
            if (o("WAWebBotUtils").isBusinessAssistantBot(e)) {
                return !o("WAWebBotBaseGating").isBotEnabled();
            }
            if (o("WAWebBotUtils").isMetaAiBot(e)) {
                return true;
            }
            return !o("WAWebBotBaseGating").isBotEnabled();
        }
        if (o("WAWebBotUtils").isHatchBot(e)) {
            return !o("WAWebHatchFrontendGating").isHatchIntegrationEnabled();
        }
        return !o("WAWebBotBaseGating").isBotEnabled();
    }
    l.isBotChatUnavailable = e;
}, 98);