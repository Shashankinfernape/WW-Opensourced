__d("WAWebMessageDestinationChat", [
    "WALogger",
    "WAWebLid1X1MigrationGating",
    "WAWebWidFactory",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ chat: n, msg: a, msgInfo: i }) {
        if (n.isRegularUser()) {
            if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                const l = o("WAWebWidFactory").asUserWidOrThrow(a.id.remote);
                if (l.isLid()) {
                    return {
                        chatId: l,
                        accountLid: l
                    };
                }
                const s = i.accountLid;
                if (s == null) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "determineDestinationChatForIncomingMessage: accountLid=null"
                    ]))).sendLogs("determineDestinationChatForIncomingMessage-account-lid-null");
                    throw r("err")("determineDestinationChatForIncomingMessage: accountLid is null for incoming message (LID migrated)");
                }
                return {
                    chatId: l,
                    accountLid: s
                };
            }
            const u = !o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && n.isLid();
            if (u) {
                return {
                    chatId: a.id.remote
                };
            }
        }
        return {
            chatId: n
        };
    }
    l.determineDestinationChatForIncomingMessage = s;
}, 98);