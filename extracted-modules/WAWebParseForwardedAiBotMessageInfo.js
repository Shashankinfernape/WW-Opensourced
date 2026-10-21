__d("WAWebParseForwardedAiBotMessageInfo", [
    "WAWebDecodeJid",
    "WAWebWidFactory",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e({ botJid, botName, creatorName }) {
        const i = o("WAWebDecodeJid").strictDecodeJid(botJid);
        return {
            botId: o("WAWebWidFactory").asBotWidOrThrow(r("nullthrows")(i)),
            botName,
            creatorName,
            validationStatus: "pending"
        };
    }
    l.parseForwardedAiBotMessageInfo = e;
}, 98);