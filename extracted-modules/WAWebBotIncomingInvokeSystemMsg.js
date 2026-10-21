__d("WAWebBotIncomingInvokeSystemMsg", [
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBotSystemMsg",
    "WAWebDBGroupsGroupMetadata",
    "WAWebSchemaChat",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.id.remote;
            const n = e.t;
            if ((yield u(t)) !== true && !t.isBot()) {
                const a = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
                if (a?.isOpenBotGroup === true || a?.isTeeBotGroup === true) {
                    return null;
                }
                const i = o("WAWebBotSystemMsg").createBotInvokeSystemMsg(t, n, e.botGroupParticipant ?? e.invokedBotWid);
                return i;
            }
            return null;
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t = null;
            if (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd) {
                const n = yield o("WAWebBackendApi").frontendSendAndReceive("getChat", {
                    chatId: e
                });
                if (n) {
                    t = n.hasCreatedBotInvokeSystemMsg;
                }
                return t;
            }
            const r = yield o("WAWebSchemaChat").getChatTable().get(e.toString());
            t = r?.hasCreatedBotInvokeSystemMsg;
            return t;
        });
        return c.apply(this, arguments);
    }
    l.createSysMsgForIncomingBotInvoke = e;
}, 98);