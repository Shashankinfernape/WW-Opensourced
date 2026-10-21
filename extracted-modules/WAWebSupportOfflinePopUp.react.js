__d("WAWebSupportOfflinePopUp.react", [
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
        const Component = o("WAWebText.react").WAWebTextLarge;
        const Component_1 = o("WAWebText.react").WAWebTextSmall;
        const Component_2 = o("WAWebFlex.react").FlexColumn;
        const Component_3 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_3 tsNavigationData={{
            surface: "unknown",
            viewName: "support-offline"
        }} okText={r("WAWebFbtCommon")("OK")} onOK={o("WAWebModalManager").closeModalManager}><Component_2><Component marginBottom={20}>{s._("No internet")}</Component><Component_1>{s._("You must connect to the internet to access chat with WhatsApp Support. Check your device's internet connection and try again.")}</Component_1></Component_2></Component_3>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);