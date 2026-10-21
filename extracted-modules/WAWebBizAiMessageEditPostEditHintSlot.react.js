__d("WAWebBizAiMessageEditPostEditHintSlot.react", [
    "WAWebBizAiMessageEditPostEditHintContext",
    "WAWebBizAiMessageEditPostEditHintHostLoadable.react",
    "WAWebMsgActionCapability",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useContext = e.useContext;
    function c(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_msg = e.msg;
        const activeHint = e_useContext(r("WAWebBizAiMessageEditPostEditHintContext"));
        if (activeHint == null) {
            return null;
        }
        const i = activeHint.messageId === e_msg.id.id && activeHint.chatId.equals(e_msg.id.remote);
        if (!i || !e_msg.id.fromMe || !o("WAWebMsgActionCapability").shouldCoachAgentEdit(e_msg.unsafe())) {
            return null;
        }
        let l;
        if (t[0] !== activeHint) {
            l = s.jsx(r("WAWebBizAiMessageEditPostEditHintHostLoadable.react"), {
                activeHint
            });
            t[0] = activeHint;
            t[1] = l;
        } else {
            l = t[1];
        }
        return l;
    }
    l.default = c;
}, 98);