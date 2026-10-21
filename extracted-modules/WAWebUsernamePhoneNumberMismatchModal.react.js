__d("WAWebUsernamePhoneNumberMismatchModal.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WDSText.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ onOK = o("WAWebModalManager").closeModalManager }) {
        const a = s._("Can't save changes");
        const i = s._("The phone number you added doesn't match this account. Make sure the phone number is correct and try again.");
        const Component = r("WDSText.react");
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 title={a} okButtonType="primary" onOK={onOK} okText={r("WAWebFbtCommon")("OK")}><Component type="Body2" colorName="contentDeemphasized">{i}</Component></Component_1>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);