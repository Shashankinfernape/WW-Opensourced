__d("WAWebSeedBotProfilesFromHistorySync", [
    "WALogger",
    "WAWebBotStaticProfiles",
    "WAWebPersistBotProfiles",
    "WAWebSchemaBotProfile",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = new Map;
            t.forEach((e)=>{
                if (!o("WAWebBotStaticProfiles").isStaticProfile(e.wid)) {
                    n.set(e.wid.toString(), e);
                }
            });
            const a = Array.from(n.values());
            if (a.length !== 0) {
                try {
                    const i = yield o("WAWebSchemaBotProfile").getBotProfileTable().bulkGet(a.map(({ wid })=>wid.toString()));
                    const l = a.filter((e, t)=>i[t] == null);
                    if (l.length > 0) {
                        yield o("WAWebPersistBotProfiles").mergeBotSupportFieldsBatch(l.map(({ name, wid })=>({
                                fields: {
                                    name
                                },
                                wid
                            })));
                    }
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] seeded ",
                        " bot profile names"
                    ])), l.length);
                } catch (error) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] seeding bot profile names failed"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("history-sync-seed-bot-profile-failed");
                }
            }
        });
        return c.apply(this, arguments);
    }
    l.seedBotProfilesFromHistorySync = u;
}, 98);