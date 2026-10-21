__d("WAWebBotFrontendUtils", [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebAiThreadCollection",
    "WAWebAiThreadCreationUtils",
    "WAWebAiThreadModel",
    "WAWebAiThreadTypeUtils",
    "WAWebBotGating",
    "WAWebBotLogging",
    "WAWebBotUtils",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebContactCollection",
    "WAWebFindChatAction",
    "WAWebMaybeGetAiThreadInfo",
    "WAWebMsgType",
    "WAWebMultiSelectChatListTypes",
    "WAWebPttComposerRecordingStopReason",
    "WAWebResolveThreadForEntryPoint",
    "WAWebRichResponseMsgUtils",
    "WAWebSendTextMsgChatAction",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield P();
            const n = yield o("WAWebCmd").Cmd.openChatFromUnread({
                chat: t,
                chatEntryPoint: e
            });
            if (n) {
                o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
                o("WAWebCmd").Cmd.scrollToActiveChat();
                return t;
            }
            return null;
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (o("WAWebBotGating").isAiChatThreadsEnabled()) {
                const n = yield P();
                $(n, {
                    type: "MetaAiSearchSuggestion",
                    query: e
                });
            } else {
                const r = yield m(t);
                if (r == null) {
                    return;
                }
                o("WAWebSendTextMsgChatAction").sendTextMsgToChat(r, e);
            }
        });
        return f.apply(this, arguments);
    }
    const g = "";
    function h(e) {
        return y({
            body: e.body,
            richResponse: e.richResponse,
            type: e.type
        });
    }
    function y({ body, richResponse, type }) {
        if (type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE && richResponse != null) {
            return o("WAWebRichResponseMsgUtils").getRichResponseBodyLength(richResponse);
        }
        return body?.length;
    }
    function C({ msgs }) {
        return msgs.length === 0 || msgs.length === 1 && msgs.last()?.subtype === "bot_init";
    }
    function b(e, t) {
        if (e.length) {
            return e.find((e)=>t(e).equals(o("WAWebBotUtils").META_BOT_PN_WID)) || e[0];
        }
        return null;
    }
    function v(e, t) {
        const n = e.filter((e)=>o("WAWebBotUtils").isMetaAiBot(e.id));
        const r = b(n, (e)=>e.id);
        if (r != null) {
            return {
                itemKey: r.id.toString(),
                type: o("WAWebMultiSelectChatListTypes").Row.ROW_CHATS,
                data: r
            };
        }
        const a = t.filter((e)=>o("WAWebBotUtils").isMetaAiBot(e.id));
        const i = b(a, (e)=>e.id);
        if (i != null) {
            return {
                itemKey: i.id.toString(),
                type: o("WAWebMultiSelectChatListTypes").Row.ROW_CONTACTS,
                data: i
            };
        }
        return null;
    }
    function S() {
        return o("WAWebContactCollection").ContactCollection.get(o("WAWebBotUtils").META_BOT_FBID_WID) ?? o("WAWebContactCollection").ContactCollection.get(o("WAWebBotUtils").META_BOT_PN_WID);
    }
    function R() {
        return o("WAWebContactCollection").ContactCollection.get(o("WAWebBotUtils").HATCH_BOT_FBID_WID);
    }
    function L(e) {
        switch(e){
            case o("WAWebBotLogging").BotEntryPointType.Search:
            case o("WAWebBotLogging").BotEntryPointType.Shortcut:
                return "shortcut";
            case o("WAWebBotLogging").BotEntryPointType.Invoke:
                return "invoke";
        }
    }
    function E(e, t) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let n;
            let threadCreationTs;
            if (o("WAWebBotGating").isImplicitThreadRoutingEnabled()) {
                n = o("WAWebResolveThreadForEntryPoint").resolveThreadIdForEntryPoint(e);
                x(e, n);
                threadCreationTs = null;
            } else {
                const l = e.aiThreads?.head();
                n = l?.id ?? T(e);
                threadCreationTs = l?.creationTimestamp;
            }
            const s = yield o("WAWebCmd").Cmd.openChatBottom({
                chat: e,
                chatEntryPoint: t,
                threadId: n
            });
            if (s) {
                return {
                    threadId: n,
                    threadCreationTs,
                    success: true
                };
            }
            return {
                success: false
            };
        });
        return k.apply(this, arguments);
    }
    function I(e, t, n) {
        let r;
        if (o("WAWebBotGating").isImplicitThreadRoutingEnabled()) {
            r = o("WAWebResolveThreadForEntryPoint").resolveThreadIdForEntryPoint(e);
            x(e, r);
            o("WAWebCmd").Cmd.openChatBottom({
                chat: e,
                chatEntryPoint: n,
                threadId: r
            });
        } else {
            r = D(e, n);
        }
        const a = o("WAWebMaybeGetAiThreadInfo").maybeGetAiThreadInfo(e, r);
        o("WAWebSendTextMsgChatAction").sendTextMsgToChat(e, t, {
            threadIds: [
                r
            ],
            aiThreadInfo: a
        });
        return r;
    }
    function T(e) {
        o("WAWebPttComposerRecordingStopReason").cancelChatRecordingForThreadSwitch(e);
        const t = o("WAWebAiThreadCreationUtils").createAiThreadId(e.id);
        const n = new (r("WAWebAiThreadModel"))({
            id: t,
            title: undefined,
            aiThreadType: o("WAWebAiThreadTypeUtils").AiThreadType.Default,
            lastMessageTimestamp: o("WATimeUtils").unixTime(),
            unreadCount: 0,
            isPending: true
        });
        if (e.aiThreads == null) {
            e.aiThreads = new (o("WAWebAiThreadCollection")).AiThreadCollection;
        }
        e.aiThreads.add([
            n
        ]);
        return t;
    }
    function D(e, t) {
        const n = T(e);
        o("WAWebCmd").Cmd.openChatBottom({
            chat: e,
            chatEntryPoint: t,
            threadId: n
        });
        return n;
    }
    function x(e, t) {
        if (!(e.aiThreads != null && e.aiThreads.get(t) != null)) {
            const n = new (r("WAWebAiThreadModel"))({
                id: t,
                title: undefined,
                aiThreadType: o("WAWebAiThreadTypeUtils").AiThreadType.Default,
                lastMessageTimestamp: o("WATimeUtils").unixTime(),
                unreadCount: 0,
                isPending: true
            });
            if (e.aiThreads == null) {
                e.aiThreads = new (o("WAWebAiThreadCollection")).AiThreadCollection;
            }
            e.aiThreads.add([
                n
            ]);
        }
    }
    function $(t, n) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[runMetaAiThreadsFlow] called with entryPoint type=",
            ", chatId=",
            ""
        ])), n.type, t.id.toString());
        o("WAWebCmd").Cmd.openMetaAiThreadDrawer(t, n);
    }
    function P() {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[getMetaAiChat] finding chat wid=",
                ""
            ])), o("WAWebBotUtils").META_BOT_PN_WID.toString());
            try {
                const e = yield o("WAWebFindChatAction").findOrCreateLatestChat(o("WAWebBotUtils").META_BOT_PN_WID, "metaBotChatListShortcut");
                const t = e.chat;
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[getMetaAiChat] success, chatId=",
                    ""
                ])), t.id.toString());
                return t;
            } catch (error) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[getMetaAiChat] failed with error"
                ])));
                throw error;
            }
        });
        return N.apply(this, arguments);
    }
    function M() {
        return s._("Meta AI").toString();
    }
    l.openMetaBotChat = m;
    l.sendMetaBotQuery = _;
    l.META_AI_LLAMA_VERSION_TITLE = g;
    l.getBotMsgBodyLength = h;
    l.getBotMsgBodyLengthFor = y;
    l.isMetaAiChatEmpty = C;
    l.maybeGetTopMetaAiRow = v;
    l.getMetaAiContact = S;
    l.getHatchContact = R;
    l.getBotNuxOriginType = L;
    l.openLatestOrNewMetaAiThread = E;
    l.openMetaAiThreadAndSendQuery = I;
    l.createNewMetaAiThread = T;
    l.createAndOpenNewMetaAiThread = D;
    l.ensureThreadModelExists = x;
    l.runMetaAiThreadsFlow = $;
    l.getMetaAiChat = P;
    l.getMetaAiTEEBotDisplayName = M;
}, 226);