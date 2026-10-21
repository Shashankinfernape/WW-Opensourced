__d("WAWebChatLockSetupCodeModal.react", [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebIconPopup.react",
    "WAWebTextUtils.react",
    "WAWebWdsPictoChatlockIcon.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c() {
        const Component = o("WAWebTextUtils.react").Bold;
        const Component_1 = o("WAWebTextUtils.react").Bold;
        const Component_2 = o("WAWebExternalLink.react").ExternalLink;
        const Component_3 = o("WAWebTextUtils.react").TextAlign;
        return u.jsx(r("WAWebIconPopup.react"), {
            icon: o("WAWebWdsPictoChatlockIcon.react").WdsPictoChatlockIcon,
            iconSize: "large",
            useFilledIcon: false,
            title: s._("Set up your secret code"),
            primaryActionText: r("WAWebFbtCommon")("OK"),
            description: <Component_3 align="center">{s._("To open locked chats on this device, you first need to create a secret code. Open {=m1} on your primary device and select {=m3}. {=m5}", [
                s._implicitParam("=m1", <Component>{s._("Locked chats")}</Component>),
                s._implicitParam("=m3", <Component_1>{s._("Settings > Secret code")}</Component_1>),
                s._implicitParam("=m5", <Component_2 href={o("WAWebFaqUrl").getChatLockSecretCodeFaqUrl()}>{s._("Learn more")}</Component_2>)
            ])}</Component_3>,
            stretchButtons: true
        });
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);