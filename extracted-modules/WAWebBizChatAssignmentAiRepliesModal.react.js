__d("WAWebBizChatAssignmentAiRepliesModal.react", [
    "fbt",
    "WAWebABProps",
    "WAWebAiAgentAutoReplyControlMutation",
    "WAWebBizChatAssignmentModal.react",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ chat }) {
        const n = s._("To assign a chat to another device, AI replies need to be turned off from your phone.");
        if (!o("WAWebABProps").getABPropConfigValue("smb_ai_agents_web_chat_assignment_interop_enabled")) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            return <Component tsNavigationData={{
                surface: "unknown",
                viewName: "chat-assignment-ai-replies"
            }} onOK={o("WAWebModalManager").closeModalManager} okText={r("WAWebFbtCommon")("OK")}>{n}</Component>;
        }
        const a = s._("To assign a chat to another device, AI replies need to be turned off from your phone.");
        const i = s._("Assign chat");
        const l = s._("Turn off AI replies");
        const c = s._("Dismiss");
        const d = ()=>{
            m();
            chat.setForceDismissAiAgentBlockingBar(true);
        };
        var m = ()=>{
            o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                action: {
                    actionText: r("WAWebFbtCommon")("OK"),
                    dismiss: true
                },
                msg: s._("Automatic replies could not be turned off. Please try again.")
            }));
        };
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component tsNavigationData={{
            surface: "unknown",
            viewName: "chat-assignment-ai-replies"
        }} title={i} onOK={function() {
            o("WAWebAiAgentAutoReplyControlMutation").changeAiReplyStatus(chat.id, "MUTED").then((e)=>{
                if (e.isSuccess) {
                    o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBizChatAssignmentModal.react"), {
                        chats: [
                            chat
                        ],
                        entryPoint: o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.CONVERSATION_MENU
                    }));
                } else {
                    d();
                }
            }).catch(()=>{
                d();
            });
            o("WAWebModalManager").ModalManager.close();
        }} okText={l} onCancel={o("WAWebModalManager").closeModalManager} cancelText={c}>{a}</Component>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);