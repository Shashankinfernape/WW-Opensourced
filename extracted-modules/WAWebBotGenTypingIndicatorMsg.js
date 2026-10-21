__d("WAWebBotGenTypingIndicatorMsg", [
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebBizBotProfileUtils",
    "WAWebBotBaseGating",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebWid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = "bot_typing_placeholder";
    function s(e) {
        d(e);
    }
    function u(e, t) {
        if (c(e, t)) {
            d(e);
        }
    }
    function c(e, t) {
        const n = o("WAWebBotBaseGating").isBotEnabled() && e.id instanceof r("WAWebWid") && e.id.isBot();
        const a = o("WAWebBotBaseGating").isBizBot3pEnabled() && o("WAWebBizBotProfileUtils").isBizBot3pBusinessProfile(e.contact.businessProfile);
        return (n || a) && t.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL && t.type === o("WAWebMsgType").MSG_TYPE.CHAT;
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebBotBaseGating").isBotEnabled()) {
                const t = e.id;
                if (!(t instanceof r("WAWebWid") && !t.isBot() && !o("WAWebBizBotProfileUtils").isBizBot3pBusinessProfile(e.contact.businessProfile))) {
                    const n = new (r("WAWebMsgKey"))({
                        fromMe: false,
                        remote: t,
                        id: r("WAWebMsgKey").newId_DEPRECATED()
                    });
                    o("WAWebBackendApi").frontendFireAndForget("addInitialBotTypingIndicatorToChat", {
                        chatId: t,
                        msgKey: n
                    });
                }
            }
        });
        return m.apply(this, arguments);
    }
    function p() {
        const e = o("WAWebABProps").getABPropConfigValue("bonsai_ti_timeout_duration_ms");
        return e;
    }
    l.BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE = e;
    l.showBotTypingIndicator = s;
    l.maybeGenBotTypingIndicatorMessage = u;
    l.getBotTypingIndicatorTimeout = p;
}, 98);