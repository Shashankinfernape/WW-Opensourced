__d("WAWebThreadMetadataUtil", [
    "WALogger",
    "WAWebBotUtils",
    "WAWebLidMigrationUtils"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ accountLid, chatId, chatTimestamp }) {
        if (chatTimestamp != null && !o("WAWebBotUtils").isHatchBot(chatId)) {
            if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(chatId)) {
                if (accountLid == null) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[getOfflineMetaPreviewForChat] accountLid null, migrated"
                    ]))).sendLogs("account-lid-null-offline-metadata");
                } else {
                    const i = chatTimestamp[accountLid.toString({
                        legacy: true
                    })];
                    if (i) {
                        return i;
                    }
                }
            }
            return chatTimestamp[chatId.toString({
                legacy: true
            })];
        }
    }
    l.getOfflineMetaPreviewForChat = s;
}, 98);