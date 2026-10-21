__d("WAWebMetaAiChatActionLogger", [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBotUtils",
    "WAWebMetaAiThreadChat",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumChatActionEntryPoint",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = r("JSResourceForInteraction")("WAWebMetaAiChatActionEvents").__setRef("WAWebMetaAiChatActionLogger");
    function d(e) {
        if (e.isUser()) {
            if (o("WAWebBotUtils").isMetaAiBot(e)) {
                return "META_AI";
            }
            if (o("WAWebMetaAiThreadChat").isMetaAiThreadChat(e)) {
                return "META_AI_THREAD";
            }
            return null;
        }
        return null;
    }
    function m(e, threadInboxPosition) {
        if (e != null && !e.isEmptyQuery()) {
            return {
                entryPoint: o("WAWebWamEnumChatActionEntryPoint").CHAT_ACTION_ENTRY_POINT.SEARCH_LIST,
                threadInboxPosition: null
            };
        }
        if (threadInboxPosition == null) {
            return null;
        }
        return {
            entryPoint: o("WAWebWamEnumChatActionEntryPoint").CHAT_ACTION_ENTRY_POINT.CONVERSATION_LIST,
            threadInboxPosition
        };
    }
    function p(chatWid, t, n) {
        if (n == null) {
            return null;
        }
        const chatType = d(chatWid);
        const originLid = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()?.toString();
        if (chatType == null || originLid == null || !o("WAWebABProps").getABPropConfigValue("ai_chat_action_logging_addition_enabled")) {
            return null;
        }
        const l = _();
        return {
            commit: function() {
                return l.then((r)=>r?.commitMetaAiChatListAction({
                        chatWid,
                        chatType,
                        originLid
                    }, t, n));
            }
        };
    }
    function _() {
        return c.load().catch(()=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[meta-ai-chat-action] load-failed"
            ]))).sendLogs("meta-ai-chat-action-load-failed");
            return null;
        });
    }
    function f(e) {
        const r = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()?.toString();
        const a = d(e);
        const i = a == null || !o("WAWebABProps").getABPropConfigValue("ai_chat_action_logging_addition_enabled") ? (u || (u = n("Promise"))).resolve({}) : _().then((t)=>t?.readMetaAiChatActionFields(e, a) ?? {});
        return {
            resolve: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const t = yield i;
                    if (o("WAWebUserPrefsMeUser").getMaybeMeLidUser()?.toString() !== r) {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[meta-ai-chat-action] account-changed"
                        ])));
                        return null;
                    }
                    return t;
                });
                function t() {
                    return e.apply(this, arguments);
                }
                return t;
            })()
        };
    }
    l.resolveMetaAiChatActionChatType = d;
    l.getMetaAiChatListRow = m;
    l.startMetaAiChatListAction = p;
    l.captureMetaAiChatActionFields = f;
}, 98);