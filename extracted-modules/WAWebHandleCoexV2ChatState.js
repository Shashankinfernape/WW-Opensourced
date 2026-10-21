__d("WAWebHandleCoexV2ChatState", [
    "WAHandleChatStateProtocol",
    "WALogger",
    "WASmaxChatstateServerNotificationRPC",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2ChatState",
    "WAWebCoexV2GatingUtils",
    "WAWebDecodeJid",
    "WAWebHandleChatState",
    "WAWebWid",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        const n = d(e.attrs.from?.toString());
        if (n == null || !n.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) || !o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()) {
            return null;
        }
        return u(e, n);
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            try {
                const i = d(t.attrs.participant?.toString());
                const l = o("WAWebCoexV2ChatState").normalizeCoexV2BotChatStateWid(n, i);
                if (l == null) {
                    return "NO_ACK";
                }
                const s = o("WASmaxChatstateServerNotificationRPC").receiveServerNotificationRPC(t);
                const u = s.parsedRequest.stateTypes;
                const c = o("WAHandleChatStateProtocol").parseChatStatus(u);
                yield o("WAWebHandleChatState").handleIndividualChatState({
                    jid: o("WAWebWidToJid").widToUserJid(l),
                    status: c
                });
                return "NO_ACK";
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to handle CoEx v2 chatstate"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("coexv2-chatstate-handle-fail", {
                    sampling: 0.1
                });
                return "NO_ACK";
            }
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        const t = o("WAWebDecodeJid").decodeJid(e);
        if (t instanceof r("WAWebWid")) {
            return t;
        }
        return null;
    }
    l.maybeHandleCoexV2ChatStateStanza = s;
}, 98);