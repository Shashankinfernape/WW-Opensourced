__d("WAWebHistorySyncMsgKeyOverrideUtils", [
    "WALogger",
    "WAWebLid1X1MigrationGating",
    "WAWebMsgKey"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t, n, a) {
        const i = t.id;
        if (!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() || i.remote.equals(n)) {
            return t;
        }
        if (a) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] msgKey remote!=chatId type=",
                " sub=",
                " kind=",
                ""
            ])), t.type ?? "unknown", t.subtype ?? "unknown", t.kind ?? "unknown").sendLogs("history-sync-override-msg-key");
        }
        return babelHelpers.extends({}, t, {
            id: new (r("WAWebMsgKey"))({
                fromMe: i.fromMe,
                remote: n,
                id: i.id,
                participant: i.participant
            })
        }, t.carouselCardsParsed != null ? {
            carouselCardsParsed: t.carouselCardsParsed.map((e)=>babelHelpers.extends({}, e, {
                    id: new (r("WAWebMsgKey"))({
                        fromMe: e.id.fromMe,
                        remote: n,
                        id: e.id.id,
                        participant: e.id.participant
                    })
                }))
        } : void 0);
    }
    l.maybeOverrideMsgKeyRemoteWithChatId = s;
}, 98);