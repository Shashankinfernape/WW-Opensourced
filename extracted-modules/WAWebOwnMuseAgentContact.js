__d("WAWebOwnMuseAgentContact", [
    "WAWebBotProfileCollection",
    "WAWebBotTosIds",
    "WAWebContactCollection",
    "WAWebFetchOwnMuseAgent",
    "WAWebInitializeBotContact",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e() {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebBotTosIds").getMuseGroupInitiatorNoticeId() == null) {
                return null;
            }
            const t = yield o("WAWebFetchOwnMuseAgent").fetchOwnMuseAgent();
            if (t == null) {
                return null;
            }
            const n = o("WAWebContactCollection").ContactCollection.gadd(t);
            const r = o("WAWebBotProfileCollection").BotProfileCollection.get(t)?.name;
            if (r != null && r !== "" && (n.name == null || n.name === o("WAWebInitializeBotContact").getBotPlaceholderName())) {
                n.set({
                    name: r
                });
            }
            return n;
        });
        return s.apply(this, arguments);
    }
    l.fetchOwnMuseAgentContact = e;
}, 98);