__d("WAWebRestoreBotProfilesFromDb", [
    "WALogger",
    "WAWebBotProfileCollection",
    "WAWebSchemaBotProfile",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = [
        "commands",
        "id",
        "prompts"
    ];
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WAWebSchemaBotProfile").getBotProfileTable().all();
            let n = 0;
            let r = 0;
            t.forEach((t)=>{
                const { commands: a, id: i, prompts: l } = t;
                const c = babelHelpers.objectWithoutPropertiesLoose(t, m);
                let d;
                try {
                    d = o("WAWebWidFactory").createUserWidOrThrow(i);
                } catch (t) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "restore-bot-profiles: invalid id"
                    ]))).sendLogs("restore-bot-profiles: invalid id");
                    return;
                }
                let p = [];
                if (l) {
                    try {
                        p = JSON.parse(l);
                        if (!Array.isArray(p)) {
                            p = [];
                            n++;
                        }
                    } catch (e) {
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "restore-bot-profiles: prompts parsing failed"
                        ]))).sendLogs("restore-bot-profiles: prompts parsing failed");
                    }
                }
                let _ = [];
                if (a != null) {
                    try {
                        _ = JSON.parse(a);
                        if (!Array.isArray(_)) {
                            _ = [];
                            r++;
                        }
                    } catch (e) {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "restore-bot-profiles: commands parsing failed"
                        ]))).sendLogs("restore-bot-profiles: commands parsing failed");
                    }
                }
                o("WAWebBotProfileCollection").BotProfileCollection.gadd(babelHelpers.extends({
                    id: d,
                    commands: _,
                    prompts: p
                }, c));
            });
            if (n > 0) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "restore-bot-profiles: ",
                    " prompts are not an array"
                ])), n).sendLogs("restore-bot-profiles: prompts are not an array");
            }
            if (r > 0) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "restore-bot-profiles: ",
                    " commands are not an array"
                ])), r).sendLogs("restore-bot-profiles: commands are not an array");
            }
        });
        return _.apply(this, arguments);
    }
    l.restoreBotProfilesFromDb = p;
}, 98);