__d("WAWebUnexpectedFatalErrorModal.react", [
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebSocketModel",
    "WAWebStopEvent",
    "gkx",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u({ bugReportDescription, children, reason }) {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component onOverlayClick={o("WAWebStopEvent").preventDefault} onOK={function() {
            o("WAWebSocketModel").Socket.logout(reason);
        }} okText={r("WAWebFbtCommon")("OK")} okButtonType={r("gkx")("9092") ? "secondary" : "primary"} buttonsDirection="horizontal" extraButtonProps={r("gkx")("9092") ? {
            text: "Report a bug (internal)",
            onClick: function() {
                o("WAWebCmd").Cmd.trigger("trigger_bugreport_v2", {
                    prefilledDescription: bugReportDescription,
                    prefilledTitle: reason == null ? "Unintended Logout" : `Unintended Logout: ${reason}`
                });
            },
            type: "primary"
        } : null}>{children}</Component>;
    }
    u.displayName = `${u.name} [from ${i.id}]`;
    l.default = u;
}, 98);