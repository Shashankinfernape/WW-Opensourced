__d("WAWebBizAiRepliesControlPopup.react", [
    "fbt",
    "WAWebAIAgentAIReplyUtils",
    "WAWebBizAiAgentStatusUtils",
    "WAWebConfirmPopup.react",
    "WAWebGenAiAgentLogEvents",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useState = e.useState;
    function DComponent(e) {
        const t = o("react-compiler-runtime").c(18);
        const e_chat = e.chat;
        let r;
        if (t[0] !== e_chat) {
            r = o("WAWebBizAiAgentStatusUtils").isChatAiEnabled(e_chat);
            t[0] = e_chat;
            t[1] = r;
        } else {
            r = t[1];
        }
        const a = !r;
        o("WAWebGenAiAgentLogEvents").useLogViewGenAiAgentAutoReplyConfirmationDialog(a);
        const i = e_useState(false);
        const l = i[0];
        const d = i[1];
        let p;
        if (t[2] !== a) {
            p = a ? s._("AI responses") : s._("Respond manually");
            t[2] = a;
            t[3] = p;
        } else {
            p = t[3];
        }
        const _ = p;
        let f;
        if (t[4] !== a) {
            f = a ? s._("AI will automatically respond to messages in this chat. You'll be notified with an unread message if AI doesn't have a response.") : s._("AI will stop automatically responding to messages in this chat.");
            t[4] = a;
            t[5] = f;
        } else {
            f = t[5];
        }
        const g = f;
        let h;
        if (t[6] !== a) {
            h = a ? s._("Turn on") : s._("Respond");
            t[6] = a;
            t[7] = h;
        } else {
            h = t[7];
        }
        const y = h;
        let C;
        if (t[8] !== e_chat || t[9] !== a) {
            C = function() {
                o("WAWebGenAiAgentLogEvents").logGenAiAgentAutoReplyConfirmationDialogEvent(a ? o("WAWebGenAiAgentLogEvents").WAWebGenAIAgentUserActionTargetEnum.TURN_ON : o("WAWebGenAiAgentLogEvents").WAWebGenAIAgentUserActionTargetEnum.TURN_OFF);
                d(true);
                o("WAWebAIAgentAIReplyUtils").mutateAiReplyStatus(e_chat).then((e)=>{
                    if (!e) {
                        e_chat.setForceDismissAiAgentBlockingBar(true);
                    }
                    o("WAWebModalManager").ModalManager.close();
                });
            };
            t[8] = e_chat;
            t[9] = a;
            t[10] = C;
        } else {
            C = t[10];
        }
        const b = C;
        const v = m;
        const okSpinner = l === true;
        let R;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            R = s._("Cancel");
            t[11] = R;
        } else {
            R = t[11];
        }
        let L;
        if (t[12] !== g || t[13] !== b || t[14] !== y || t[15] !== okSpinner || t[16] !== _) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            L = <Component testid="ai-replies-control-popup" title={_} okText={y} onOK={b} okSpinner={okSpinner} okButtonType="primary" cancelText={R} onCancel={v}>{g}</Component>;
            t[12] = g;
            t[13] = b;
            t[14] = y;
            t[15] = okSpinner;
            t[16] = _;
            t[17] = L;
        } else {
            L = t[17];
        }
        return L;
    }
    function m() {
        o("WAWebGenAiAgentLogEvents").logGenAiAgentAutoReplyConfirmationDialogEvent(o("WAWebGenAiAgentLogEvents").WAWebGenAIAgentUserActionTargetEnum.CANCEL);
        o("WAWebModalManager").ModalManager.close();
    }
    l.default = DComponent;
}, 226);