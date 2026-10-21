__d("WAWebBizMessageOpenCallModal", [
    "fbt",
    "WAWebButton.react",
    "WAWebFbtCommon",
    "WAWebModal.react",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const Component = o("WAWebButton.react").Button;
        const e = <Component key={0} testid="popup-controls-ok" type="primary" onClick={o("WAWebModalManager").closeModalManager}>{r("WAWebFbtCommon")("OK")}</Component>;
        const Component_1 = o("WAWebModal.react").Modal;
        o("WAWebModalManager").ModalManager.open(<Component_1 actions={[
            e
        ]}>{s._("Calls are not supported on WhatsApp Web. Open WhatsApp on your phone to call this business.")}</Component_1>);
    }
    l.default = c;
}, 226);