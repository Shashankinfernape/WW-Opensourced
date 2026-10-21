__d("WAWebOutContactSmsInviteConfirmModal.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtIntlList",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ names, onCancel, onConfirm }) {
        const i = r("WAWebFbtIntlList")(names, r("WAWebFbtIntlList").CONJUNCTIONS.AND, r("WAWebFbtIntlList").DELIMITERS.COMMA);
        const l = names.length === 1;
        const c = l ? s._("{name_list} isn't on WhatsApp. Do you want to invite them to join WhatsApp and your group?", [
            s._param("name_list", i)
        ]) : s._("{name_list} aren't on WhatsApp. Do you want to invite them to join WhatsApp and your group?", [
            s._param("name_list", i)
        ]);
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component title={s._("Send SMS invites?")} okText={s._("Invite via SMS")} cancelText={s._("Not now")} onOK={onConfirm} onCancel={onCancel}>{c}</Component>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);