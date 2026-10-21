__d("WAWebHandleBizBotWelcomeMsgProtocolModeAction", [
    "WAWebApiBusinessProfile",
    "WAWebBotGating",
    "WAWebBotTypes",
    "WAWebBotWelcomeRequestSync",
    "WAWebChatCollection",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (o("WAWebBotGating").isBizBot3pAvailable()) {
                const r = o("WAWebChatCollection").ChatCollection.get(e);
                if (r) {
                    let a = t;
                    if (!a) {
                        const l = yield o("WAWebApiBusinessProfile").getBusinessProfileRowLidAware(e.toString());
                        a = o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.cast(l?.welcomeMsgProtocolMode) ?? o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE;
                    }
                    const s = n ?? o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE;
                    if (a !== s && s === o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE) {
                        yield u(r);
                    }
                }
            }
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.hasRequestedWelcomeMsg) {
                e.hasRequestedWelcomeMsg = false;
                const t = yield r("WAWebBotWelcomeRequestSync").getBotWelcomeRequestSetMutation(e.id, false);
                yield o("WAWebSyncdCoreApi").lockForSync([
                    "chat"
                ], [
                    t
                ], (()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                        return n.merge(e.id.toString(), {
                            hasRequestedWelcomeMsg: false
                        });
                    });
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })());
            }
        });
        return c.apply(this, arguments);
    }
    l.handleBizBotWelcomeMsgProtocolModeTransition = e;
}, 98);