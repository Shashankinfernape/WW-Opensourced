__d("WAWebSupportChatConfirmationModal.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebText.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c() {
        const Component = o("WAWebText.react").WAWebTextSmall;
        const Component_1 = o("WAWebFlex.react").FlexColumn;
        const Component_2 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_2 tsNavigationData={{
            surface: "unknown",
            viewName: "support-chat-confirmation"
        }} okText={r("WAWebFbtCommon")("OK")} onOK={o("WAWebModalManager").closeModalManager}><Component_1><Component>{s._("WhatsApp Support has received your request and will start a chat with you shortly.")}</Component></Component_1></Component_2>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);