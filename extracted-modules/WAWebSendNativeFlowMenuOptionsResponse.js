__d("WAWebSendNativeFlowMenuOptionsResponse", [
    "WAWebBotBaseGating",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebInteractiveResponseMessageType",
    "WAWebMsgDataUtils",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return o("WAWebBotUtils").isAnyMetaAiBot(e) && t === r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY;
    }
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, quotedMsg, { label, selectionId }) {
            if (!(label == null || selectionId == null)) {
                const i = yield c({
                    chat: e,
                    label,
                    quotedMsg,
                    selectionId
                });
                yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(e, i)[1];
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, label, quotedMsg, selectionId }) {
            const s = yield o("WAWebMsgDataUtils").genOutgoingMsgData(chat, o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE);
            const u = chat.id.isBot() && (o("WAWebBotBaseGating").isBotEnabled() || chat.id.isSupportAgentBot());
            const c = u ? self.crypto.getRandomValues(new Uint8Array(32)) : undefined;
            const d = u ? o("WAWebBotProfileCollection").BotProfileCollection.get(chat.id)?.personaId : undefined;
            return babelHelpers.extends({}, s, {
                type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
                kind: o("WAWebMsgType").MsgKind.InteractiveResponse,
                interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
                nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName").MENU_OPTIONS,
                interactivePayload: {
                    type: r("WAWebInteractiveResponseMessageType").NATIVE_FLOW,
                    name: r("WAWebInteractiveMessagesNativeFlowName").MENU_OPTIONS,
                    version: 1,
                    paramsJson: JSON.stringify({
                        id: selectionId
                    })
                },
                body: label,
                messageSecret: c,
                botPersonaId: d
            }, quotedMsg.msgContextInfo(chat.id));
        });
        return d.apply(this, arguments);
    }
    l.shouldUseNativeFlowMenuOptionsResponse = e;
    l.sendNativeFlowMenuOptionsResponse = s;
}, 98);