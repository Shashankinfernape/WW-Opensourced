__d("WAWebMessageHandlers", [
    "fbt",
    "WALogger",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebCommentsModal.react",
    "WAWebComposeBoxActions",
    "WAWebConfirmPopup.react",
    "WAWebDisplayType",
    "WAWebFbtCommon",
    "WAWebForwardMessageFlowLoadable",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetDisplayType",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebMultiSelectBar.react",
    "WAWebQuotedMessageUserJourneyLogger",
    "WAWebStateUtils",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    function m({ handleBack, handleSelectClick, msg, multiSelect, onForward, openAsSupportModal = false }) {
        let m;
        const p = o("WAWebFrontendMsgGetters").getIsUnsentMedia(msg);
        const _ = o("WAWebFrontendMsgGetters").getAsRevoked(msg);
        const f = o("WAWebMsgGetters").getType(msg);
        const g = o("WAWebGetDisplayType").getDisplayType(msg.unsafe());
        const h = o("WAWebDisplayType").isConversationDisplay(g);
        if (f === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
            m = s._("Wait until this message is fully delivered before forwarding.");
        } else if (_) {
            m = s._("Couldn't forward unsent message.");
        } else if (p) {
            m = s._("_j{\"*\":\"Wait until the messages finish sending and displays a checkmark before forwarding.\",\"_1\":\"Wait until the message finishes sending and displays a checkmark before forwarding.\"}", [
                s._plural(1)
            ]);
        } else {
            if (multiSelect && h) {
                if (handleSelectClick) {
                    handleSelectClick(o("WAWebMultiSelectBar.react").MultiSelectMode.FORWARD);
                }
                return;
            }
            if (openAsSupportModal) {
                const Component = o("WAWebForwardMessageFlowLoadable").ForwardMessageFlowLoadable;
                o("WAWebModalManager").ModalManager.openSupportModal(<Component msgs={[
                    o("WAWebStateUtils").unproxy(msg)
                ]} onBack={handleBack} onClose={function() {
                    o("WAWebModalManager").ModalManager.closeSupportModal();
                }} onForward={onForward}/>, {
                    transition: "modal-flow"
                });
                return;
            }
            const Component = o("WAWebForwardMessageFlowLoadable").ForwardMessageFlowLoadable;
            o("WAWebModalManager").ModalManager.open(<Component msgs={[
                o("WAWebStateUtils").unproxy(msg)
            ]} onBack={handleBack} onClose={function() {
                o("WAWebModalManager").ModalManager.close();
            }} onForward={onForward}/>, {
                transition: "modal-flow"
            });
            return;
        }
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
            surface: "unknown",
            viewName: "message-handler"
        }} title={s._("Can't forward")} onOK={o("WAWebModalManager").closeModalManager} okText={r("WAWebFbtCommon")("OK")}>{m}</Component>);
    }
    function p(e, t, n, a) {
        o("WAWebModalManager").closeModalManager();
        if (o("WAWebFrontendChatGetters").getIsCAG(e)) {
            o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebCommentsModal.react"), {
                parentMsgs: [
                    t
                ]
            }));
        } else {
            const i = o("WAWebStateUtils").unproxy(t);
            e.composeQuotedMsg = o("WAWebMsgModelUtils").createMsgSnapshot(i);
            if (a?.replyInPlace === true || e === o("WAWebChatCollection").ChatCollection.getActive()) {
                o("WAWebComposeBoxActions").ComposeBoxActions.focus(e);
            } else {
                o("WAWebCmd").Cmd.openChatBottom({
                    chat: e,
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.MessageReply
                });
            }
            o("WAWebQuotedMessageUserJourneyLogger").QuotedMessageUserJourneyLogger.quotedMessageAdded(e.id, n, t);
        }
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            o("WAWebModalManager").closeModalManager();
            try {
                t.shouldHideQuotedMsgAuthor = true;
                const n = o("WAWebStateUtils").unproxy(t);
                const r = yield o("WAWebBotFrontendUtils").getMetaAiChat();
                if (r == null) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[handleAskMetaAi] Failed to get Meta AI chat - chat is null"
                    ]))).sendLogs("ask-meta-ai-null-chat");
                    return;
                }
                r.composeQuotedMsg = o("WAWebMsgModelUtils").createMsgSnapshot(n);
                const a = t.id.remote;
                const i = a.isGroup();
                const l = i ? o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAIGroup : o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI1on1;
                if (o("WAWebBotGating").isAiChatThreadsEnabled()) {
                    o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(r, i ? {
                        type: "AskMetaAiGroup"
                    } : {
                        type: "AskMetaAi1on1"
                    });
                } else {
                    yield o("WAWebCmd").Cmd.openChatBottom({
                        chat: r,
                        chatEntryPoint: l
                    });
                }
            } catch (e) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleAskMetaAi] Failed to handle Ask Meta AI action"
                ]))).sendLogs("ask-meta-ai-error");
            }
        });
        return f.apply(this, arguments);
    }
    l.handleOpenForwardFlow = m;
    l.handleMessageReply = p;
    l.handleAskMetaAi = _;
}, 226);