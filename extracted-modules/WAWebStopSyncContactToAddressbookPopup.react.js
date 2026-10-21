__d("WAWebStopSyncContactToAddressbookPopup.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebText.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ onCancel, onOK }) {
        const a = s._("Stop syncing and delete phone contact");
        const i = s._("This contact will no longer be synced to your phone, and will be deleted from your phone. It will still be saved in WhatsApp.");
        const Component = o("WAWebText.react").WAWebTextMuted;
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 okText={r("WAWebFbtCommon")("Continue")} onOK={onOK} cancelText={r("WAWebFbtCommon")("Cancel")} onCancel={onCancel} title={a}><Component>{i}</Component></Component_1>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);