__d("WAWebSendBotFeedbackAction", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebBotMessageSecret",
    "WAWebBotProfileCollection",
    "WAWebDBProcessMessage",
    "WAWebFrontendMsgGetters",
    "WAWebMsgDataUtils",
    "WAWebMsgGetters",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSendMsgRecordAction",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, botFeedbackKind, botFeedbackText) {
            if (!o("WAWebMsgGetters").getIsBotResponse(t)) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "sendBotFeedback: sending bot feedback for non-bot responses"
                ]))).sendLogs("send-bot-feedback");
                return;
            }
            const c = o("WAWebFrontendMsgGetters").getMaybeChat(t);
            if (c == null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "sendBotFeedback: no chat for the rated response"
                ]))).sendLogs("send-bot-feedback-no-chat");
                return;
            }
            const d = t.id.participant ?? t.id.remote;
            const m = d.isBot() ? d : undefined;
            const p = self.crypto.getRandomValues(new Uint8Array(32));
            const _ = yield o("WAWebBotMessageSecret").genBotMsgSecretFromMsgSecret(p);
            const f = m != null ? o("WAWebBotProfileCollection").BotProfileCollection.get(m)?.personaId : undefined;
            const g = t?.botTargetSenderJid;
            let botTargetSenderJid = null;
            if (g != null && !o("WAWebUserPrefsMeUser").isMeAccount(g)) {
                botTargetSenderJid = t?.botTargetSenderJid;
            }
            const y = babelHelpers.extends({}, (yield o("WAWebMsgDataUtils").genOutgoingMsgData(c, o("WAWebMsgType").MSG_TYPE.PROTOCOL)), {
                kind: o("WAWebMsgType").MsgKind.Protocol,
                subtype: "bot_feedback",
                protocolMessageKey: t.id,
                bizBotType: t.bizBotType,
                messageSecret: p,
                botMessageSecret: new Uint8Array(_),
                botPersonaId: f,
                botFeedbackKind,
                botFeedbackText,
                botTargetSenderJid
            });
            const C = new (o("WAWebMsgModel")).Msg(y);
            yield o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendMessage", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    yield o("WAWebDBProcessMessage").storeMessages([
                        y
                    ], c.id);
                } catch (error) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "sendBotFeedback: failed to storeMessages into storage"
                    ]))).verbose().sendLogs("send-bot-feedback-store-failed");
                    throw error;
                }
                return o("WAWebSendMsgRecordAction").sendMsgRecord(C);
            }), {
                priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
            }).waitUntilCompleted();
        });
        return d.apply(this, arguments);
    }
    l.sendBotFeedback = c;
}, 98);