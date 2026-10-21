__d("WAWebUnblockContactDialogV2.react", [
    "fbt",
    "WAWebFbtCommon",
    "WAWebName.react",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ contact, onUnblock }) {
        const a = u.jsx(o("WAWebName.react").Name, {
            contact,
            breakWord: true
        });
        const i = s._("Unblock {contact_name}?", [
            s._param("contact_name", a)
        ]);
        const l = function() {
            onUnblock();
            o("WDSDialogBridge").closeWDSDialog();
        };
        const Component = r("WDSConfirmDialog.react");
        return <Component title={i} confirmLabel={r("WAWebFbtCommon")("Unblock")} onConfirm={l} onDismiss={o("WDSDialogBridge").closeWDSDialog} open/>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);