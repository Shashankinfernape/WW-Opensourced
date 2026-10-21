__d("WAWebConversationMsgsUtils", [
    "WALogger",
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebEnvironment",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebRenderCursor",
    "WAWebThreadModelResolver",
    "WAWebThreadMsgUtils",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return e.getBubbleElement?.() ?? e.getContainerElement();
    }
    function c(e) {
        if (e == null) {
            return null;
        }
        if (e.key != null) {
            return babelHelpers.extends({}, e, {
                msg: o("WAWebMsgCollection").MsgCollection.get(e.key)
            });
        }
        return e;
    }
    function d({ msgLoadState }) {
        return {
            noEarlierMsgs: msgLoadState.noEarlierMsgs,
            isLoadingEarlierMsgs: msgLoadState.isLoadingEarlierMsgs,
            isLoadingRecentMsgs: msgLoadState.isLoadingRecentMsgs,
            isLoadingAroundMsgs: msgLoadState.isLoadingAroundMsgs,
            contextLoaded: msgLoadState.contextLoaded,
            isRepairingMsgHistory: msgLoadState.isRepairingMsgHistory
        };
    }
    function m(t, n, r, a) {
        const i = o("WAWebThreadModelResolver").resolveThreadOrChat(t, a);
        const l = r.noEarlierMsgs && o("WAWebFrontendChatGetters").getShouldAppearInList(t) && n && i.msgChunks.some((e)=>e.some((t)=>t.getMsgChunk(a ?? undefined) === e));
        if (l) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "MRM noEarlierMsgs chat=",
                " threadId=",
                " chunks=",
                " msgs=",
                ""
            ])), String(t.id), String(a ?? ""), i.msgChunks.length, i.msgs.length).sendLogs("noEarlierMsgs-error");
        }
        return l;
    }
    function p(e, t) {
        const { chat, focusCtx, msgCollection } = e;
        const i = c(focusCtx) || _(e, t);
        const l = i?.msg;
        const s = l?.id;
        return {
            cursor: o("WAWebRenderCursor").RenderCursor.create({
                msgCollection,
                focusedMsgKey: s,
                type: o("WAWebChatGetters").getIsGroup(chat) ? o("WAWebRenderCursor").RENDER_CURSOR.GROUP_CONVERSATION : o("WAWebRenderCursor").RENDER_CURSOR.CONVERSATION
            }),
            focusCtx: i
        };
    }
    function _(e, t) {
        const { chat, focusCtx, msgCollection } = e;
        let i;
        if (chat.unreadCount) {
            i = chat.unreadCount;
        } else {
            i = t;
        }
        if (!(focusCtx && !f(e) || !i)) {
            const l = msgCollection.filter((e)=>o("WAWebMsgGetters").getIsUnreadType(e)).reverse().slice(0, i);
            let u;
            if (l.length === i) {
                u = l[l.length - 1];
            } else {
                return;
            }
            const c = chat.unreadDividerOffset;
            if (c > 0) {
                const d = msgCollection.filter(Boolean).reverse();
                const m = d.indexOf(u);
                if (d.slice(m + 1, m + c + 1).every((e)=>!!o("WAWebFrontendMsgGetters").getAsRevoked(e))) {
                    u = d[m + c];
                } else {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "invalid unreadDividerOffset: ",
                        ""
                    ])), c).sendLogs("invalid-unread-divider-offset", {
                        sampling: 0.001
                    });
                }
            }
            return {
                msg: u,
                isUnreadDivider: o("WAWebFrontendChatGetters").getShouldShowUnreadDivider(chat),
                highlightMsg: false
            };
        }
    }
    function f(e) {
        const t = o("WAWebThreadModelResolver").resolveThreadOrChat(e.chat, e.threadId);
        return t.msgs === e.msgCollection;
    }
    function g(e) {
        return o("WAWebMsgGetters").getIsSentByMe(e) && (o("WAWebMsgGetters").getLocal(e) || !r("justknobx")._("6643"));
    }
    function h(e) {
        const t = o("WAWebContactGetters").getIsUser(e) || o("WAWebContactGetters").getIsGroup(e) || o("WAWebContactGetters").getIsBroadcast(e);
        if (t) {
            if (r("WAWebEnvironment").isWindows === true) {
                return true;
            }
            return o("WAWebABProps").getABPropConfigValue("wa_web_hybrid_simple_chat_conversation_context_menu_enabled") === true;
        }
        return false;
    }
    function y({ msg, msgCollection, threadId }) {
        if (o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.CHAT, msg.viewMode)) {
            if (threadId == null || msgCollection.threadId != null) {
                return true;
            }
            return o("WAWebThreadMsgUtils").isMsgInThread(msg, threadId) || o("WAWebThreadMsgUtils").isMsgRootOfThread(msg, threadId);
        }
        return false;
    }
    l.getMessageAnchor = u;
    l.validateFocusCtx = c;
    l.getMsgLoadState = d;
    l.noEarlierMsgStateIsIncorrect = m;
    l.getInitialCursorAndFocusContext = p;
    l.getUnreadFocusCtx = _;
    l.isMostRecentCMC = f;
    l.shouldJumpToBottomForNewOwnMsg = g;
    l.isSimplifiedChatConversationMenuEnabled = h;
    l.isMsgVisibleInConversation = y;
}, 98);