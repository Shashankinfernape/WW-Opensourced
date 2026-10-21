__d("WAWebSendBotRequestWelcomeAction", [
    "WAJobOrchestratorTypes",
    "WAMemoizeConcurrent",
    "WAWebBotMessageSecret",
    "WAWebBotUtils",
    "WAWebBotWelcomeRequestSync",
    "WAWebDBProcessMessage",
    "WAWebHatchLogging",
    "WAWebMsgDataUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t != null) {
                return c(e, t);
            }
            return u({
                chat: e,
                signal: new AbortController().signal
            });
        });
        return s.apply(this, arguments);
    }
    var u = r("WAMemoizeConcurrent")(function({ chat }) {
        return chat.id.toString();
    }, (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat }) {
            return c(chat);
        });
        return function(t) {
            return e.apply(this, arguments);
        };
    })());
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, botDeepLinkToken) {
            const a = e.id;
            const i = self.crypto.getRandomValues(new Uint8Array(32));
            const l = yield o("WAWebBotMessageSecret").genBotMsgSecretFromMsgSecret(i);
            const s = babelHelpers.extends({}, (yield o("WAWebMsgDataUtils").genOutgoingMsgData(e, o("WAWebMsgType").MSG_TYPE.PROTOCOL)), {
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                kind: o("WAWebMsgType").MsgKind.Protocol,
                subtype: "bot_request_welcome",
                messageSecret: i,
                botMessageSecret: new Uint8Array(l),
                botDeepLinkToken
            });
            const u = new (o("WAWebMsgModel")).Msg(s);
            e.hasRequestedWelcomeMsg = true;
            yield o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendMessage", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebDBProcessMessage").storeMessages([
                    s
                ], a);
                const e = yield o("WAWebSendMsgRecordAction").sendMsgRecord(u);
                if (e.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                    if (o("WAWebBotUtils").isHatchBot(a)) {
                        o("WAWebHatchLogging").logHatchRequestWelcomeMsgSent();
                    }
                    const t = yield r("WAWebBotWelcomeRequestSync").getBotWelcomeRequestSetMutation(a, true);
                    yield o("WAWebSyncdCoreApi").lockForSync([
                        "chat"
                    ], [
                        t
                    ], (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t]) {
                            return t.merge(a.toString(), {
                                hasRequestedWelcomeMsg: true
                            });
                        });
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    })());
                }
                return e;
            }), {
                priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
            }).waitUntilCompleted();
        });
        return d.apply(this, arguments);
    }
    l.sendBotRequestWelcome = e;
}, 98);