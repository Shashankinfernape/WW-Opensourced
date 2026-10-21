__d("WAWebReportContactDialogUtils", [
    "WAWebABProps",
    "WAWebModalManager",
    "WAWebReportContactDialogV2.react",
    "WAWebReportContactPopup.react",
    "WDSDialogBridge",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e, spamFlow) {
        if (o("WAWebABProps").getABPropConfigValue("wds_web_dialog")) {
            o("WDSDialogBridge").openWDSDialog(s.jsx(r("WAWebReportContactDialogV2.react"), {
                chat: e,
                spamFlow
            }));
        } else {
            o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebReportContactPopup.react"), {
                chat: e,
                spamFlow
            }));
        }
    }
    l.openReportContactPopup = u;
}, 98);