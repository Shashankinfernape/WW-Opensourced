__d("WAWebShowMessageActionFallbackErrorAction", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtAppName",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = function(t = {}) {
        const e = t;
        const e_title = e.title;
        const Component = o("WAWebFbtAppName").WAWebAppShortName;
        const a = e_title === undefined ? s._("{=m0} can't show this message.", [
            s._implicitParam("=m0", <Component>{s._("")}</Component>)
        ]) : e_title;
        const e_body = e.body;
        const l = e_body === undefined ? s._("Use WhatsApp on your phone to view it.") : e_body;
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(<Component_1 tsNavigationData={{
            surface: "unknown",
            viewName: "message-action-error"
        }} title={a} okText={r("WAWebFbtCommon")("OK")} onOK={function() {
            return o("WAWebModalManager").ModalManager.close();
        }}>{l}</Component_1>);
    };
    l.default = c;
}, 226);