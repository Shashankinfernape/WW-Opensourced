__d("WAWebScheduledMsgLimitDialog.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WDSText.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const Component = r("WDSText.react");
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(<Component_1 onOK={o("WAWebModalManager").closeModalManager} testid="scheduled_message_limit_reached_dialog"><Component type="Body1" colorName="contentDefault">{s._("You have reached the maximum number of messages you can schedule.")}</Component></Component_1>);
    }
    l.showScheduledMsgLimitReachedDialog = c;
}, 226);