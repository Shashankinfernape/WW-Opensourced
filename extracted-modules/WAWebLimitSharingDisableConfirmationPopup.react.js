__d("WAWebLimitSharingDisableConfirmationPopup.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebText.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c({ onOK }) {
        const Component = o("WAWebText.react").WAWebTextMuted;
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 title={s._("Are you sure?")} okText={r("WAWebFbtCommon")("Continue")} onOK={n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WAWebModalManager").ModalManager.close();
            yield onOK();
        })} cancelText={r("WAWebFbtCommon")("Cancel")} onCancel={o("WAWebModalManager").closeModalManager}><Component testid="limit-sharing-disable-confirmation-popup">{s._("Advanced chat privacy was previously turned on by a member of this chat.")}</Component></Component_1>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);