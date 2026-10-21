__d("WAWebLimitSharingInvokeBlockedPopup.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebLimitSharingUIUtils",
    "WAWebModalManager",
    "WAWebText.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c({ chat }) {
        const Component = o("WAWebText.react").WAWebTextMuted;
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 title={s._("Can't mention Meta AI in this chat")} okText={r("WAWebFbtCommon")("OK")} onOK={o("WAWebModalManager").closeModalManager} cancelText={r("WAWebFbtCommon")("Learn more")} onCancel={function() {
            o("WAWebLimitSharingUIUtils").showLimitSharingDrawer(chat);
            o("WAWebModalManager").ModalManager.close();
        }}><Component testid="limit-sharing-invoke-blocked-popup">{s._("Advanced chat privacy has been turned on, and prevents mentioning Meta AI in this chat.")}</Component></Component_1>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);