__d("WAWebAskMetaAiQuotedMediaSend", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBotForwardCapability",
    "WAWebBotGating",
    "WAWebBotReplaceMentionWidsWithPushnames",
    "WAWebBotUtils",
    "WAWebLazyLoadedRetriable",
    "WAWebMetaAiForwardedText",
    "WAWebMsgType",
    "WAWebSendMsgResultAction",
    "WAWebSendTextMsgChatAction",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = r("WAWebLazyLoadedRetriable")(function() {
        return r("JSResourceForInteraction")("WAWebMediaForwardMediaMsg").__setRef("WAWebAskMetaAiQuotedMediaSend").load();
    }, "AskMetaAiForwardMediaMsg");
    function d(e, t) {
        if (t == null || !o("WAWebBotUtils").isMetaAiBot(e.id)) {
            return false;
        }
        const remote = t.id.remote;
        if (remote == null || remote.equals(e.id) || !o("WAWebBotForwardCapability").canForwardMsgToMetaAi([
            t
        ])) {
            return false;
        }
        return o("WAWebBotGating").isAskMetaAiImprovementEnabled();
    }
    function m(e, t) {
        if (t.type !== o("WAWebMsgType").MSG_TYPE.IMAGE && t.type !== o("WAWebMsgType").MSG_TYPE.VIDEO) {
            return false;
        }
        const remote = t.id.remote;
        return o("WAWebBotUtils").isMetaAiBot(e.id) && remote != null && !remote.equals(e.id) && o("WAWebBotForwardCapability").canForwardMsgToMetaAi([
            t
        ]);
    }
    function p(e, t, n) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a) {
            const a_quotedMsg = a.quotedMsg;
            if (a_quotedMsg == null || !d(t, a_quotedMsg)) {
                const l = yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(t, n, a);
                return l?.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK;
            }
            if (a_quotedMsg.type === o("WAWebMsgType").MSG_TYPE.CHAT) {
                let u = a_quotedMsg.body ?? "";
                try {
                    u = o("WAWebBotReplaceMentionWidsWithPushnames").replaceMentionsInText(u, (yield o("WAWebBotReplaceMentionWidsWithPushnames").buildMentionMap(a_quotedMsg.mentionedJidList, a_quotedMsg.groupMentions)));
                } catch (error) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[askMetaAi] failed to resolve quoted mention names, forwarding the raw body"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("ask-meta-ai-quoted-mention-name-fail");
                }
                const c = yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(t, o("WAWebMetaAiForwardedText").composeMetaAiForwardedText(u, n), babelHelpers.extends({}, a, {
                    quotedMsg: undefined
                }));
                return c?.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK;
            }
            const m = yield f(t, a_quotedMsg, n, a);
            if (m) {
                return true;
            }
            const p = yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(t, n, a);
            return p?.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK;
        });
        return _.apply(this, arguments);
    }
    function f(e, t, n, r) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, appendedText, a) {
            try {
                const l = yield c();
                const d = l.forwardMediaMsg;
                const m = yield d({
                    aiThreadInfo: a.aiThreadInfo,
                    appendedText,
                    chat: e,
                    includeCaption: false,
                    msg: t,
                    threadId: a.threadIds?.[0]
                });
                const p = m.messageSendResult;
                if (p === o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                    return true;
                }
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[askMetaAi] quoted media send to Meta AI returned ",
                    ", keeping the reply quote"
                ])), String(p)).sendLogs("ask-meta-ai-quoted-media-forward-fail");
            } catch (error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[askMetaAi] failed to forward quoted media to Meta AI, keeping the reply quote"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("ask-meta-ai-quoted-media-forward-fail");
            }
            return false;
        });
        return g.apply(this, arguments);
    }
    l.shouldForwardAskMetaAiQuotedMsg = d;
    l.shouldHideAskMetaAiQuotedCaption = m;
    l.sendAskMetaAiAwareTextMsg = p;
}, 98);