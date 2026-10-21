__d("WAWebRequestBotList", [
    "WALogger",
    "WASmaxBotBotListRPC",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WASmaxBotBotListRPC").sendBotListRPC({
                botV: "2"
            });
            switch(t.name){
                case "BotListResponseSuccessV2":
                    {
                        const n = t.value;
                        const { botDefaultJid, botDefaultPersonaId, botSection } = n;
                        const l = [];
                        botSection.forEach((e)=>{
                            e.bot.forEach(({ jid, personaId })=>{
                                l.push({
                                    id: o("WAWebWidFactory").createWid(jid),
                                    isDefault: jid === botDefaultJid,
                                    personaId
                                });
                            });
                        });
                        if (!l.some((e)=>e.isDefault)) {
                            l.unshift({
                                id: o("WAWebWidFactory").createWid(botDefaultJid),
                                isDefault: true,
                                personaId: botDefaultPersonaId
                            });
                        }
                        return l;
                    }
                case "BotListResponseSuccessV3":
                    {
                        const s = t.value;
                        const { botDefault, botSection } = s;
                        const d = [];
                        botSection.forEach((e)=>{
                            e.bot.forEach(({ jid, personaId })=>{
                                d.push({
                                    id: o("WAWebWidFactory").createWid(jid),
                                    isDefault: jid === botDefault?.jid,
                                    personaId
                                });
                            });
                        });
                        if (botDefault != null && !d.some((e)=>e.isDefault)) {
                            d.unshift({
                                id: o("WAWebWidFactory").createWid(botDefault.jid),
                                isDefault: true,
                                personaId: botDefault.personaId
                            });
                        }
                        return d;
                    }
                case "BotListResponseError":
                    {
                        const m = t.value.errorBotListErrors.value;
                        const { code, text } = m;
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[bot] requestBotList failed"
                        ])));
                        return [];
                    }
            }
        });
        return u.apply(this, arguments);
    }
    l.requestBotList = s;
}, 98);