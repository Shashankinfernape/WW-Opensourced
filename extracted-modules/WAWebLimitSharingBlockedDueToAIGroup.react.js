__d("WAWebLimitSharingBlockedDueToAIGroup.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebText.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c() {
        const Component = o("WAWebText.react").WAWebTextMuted;
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 title={s._("Advanced chat privacy and Meta AI")} okText={r("WAWebFbtCommon")("OK")} onOK={o("WAWebModalManager").closeModalManager}><Component testid="limit-sharing-blocked-due-to-ai-group-popup">{s._("Meta AI is in this chat. To turn on advanced chat privacy, Meta AI must first be removed from the group chat.")}</Component></Component_1>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);