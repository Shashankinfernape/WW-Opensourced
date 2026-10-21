__d("WAWebBizAiAgentChatDisabledUtils", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebName.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
            surface: "unknown",
            viewName: "biz-ai-hub-chat-disabled"
        }} title={s._("This chat isn't available on this device.")} onOK={o("WAWebModalManager").closeModalManager}>{s._("Use your phone to open {chat_name}", [
            s._param("chat_name", u.jsx(o("WAWebName.react").Name, {
                chat: e
            }))
        ])}</Component>);
    }
    l.openBizAiAgentChatDisabledAlert = c;
}, 226);