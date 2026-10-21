__d("WAWebForwardedBotDisplayName", [
    "fbt",
    "WAWebBotProfileCollection",
    "WAWebBotUtils"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        if (e.botName != null) {
            return e.botName;
        }
        const n = o("WAWebBotProfileCollection").BotProfileCollection.get(e.botId)?.name;
        return n ?? (o("WAWebBotUtils").isMetaAiBot(e.botId) ? s._("Meta AI") : s._("View AI chat"));
    }
    l.getForwardedBotDisplayName = e;
}, 226);