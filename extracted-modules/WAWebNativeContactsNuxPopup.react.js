__d("WAWebNativeContactsNuxPopup.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebContactLogging",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WDSIllustrationWdsIllContactBook.react",
    "WDSMargins.stylex",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    const d = {
        text: {
            maxWidth: "x1lr1uin",
            $$css: true
        }
    };
    function m({ source }) {
        e_useEffect(function() {
            o("WAWebContactLogging").logViewNativeContactNux(source);
        }, []);
        const n = s._("Manage contacts from web");
        const Component = o("WAWebExternalLink.react").ExternalLink;
        const a = s._("On your phone, turn on WhatsApp contacts to start managing contacts from web. Go to WhatsApp > Settings > Privacy > Contacts. {=m2}", [
            s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNativeContactLearnMoreFaqUrl()}>{s._("Learn more")}</Component>)
        ]);
        const Component_1 = o("WAWebText.react").WAWebTextLarge;
        const Component_2 = o("WAWebText.react").WAWebTextMuted;
        const Component_3 = o("WAWebFlex.react").FlexColumn;
        const Component_4 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_4 onOK={o("WAWebModalManager").closeModalManager} okText={r("WAWebFbtCommon")("OK")}><Component_3 align="center">{u.jsx(r("WDSIllustrationWdsIllContactBook.react"), {
            testid: "wds-ill-favorites"
        })}<Component_1 weight="bold" xstyle={o("WDSMargins.stylex").wdsMargins.marginTop20} textAlign="center">{n}</Component_1><Component_2 xstyle={[
            o("WDSMargins.stylex").wdsMargins.marginTop16,
            d.text
        ]} textAlign="center">{a}</Component_2></Component_3></Component_4>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.default = m;
}, 226);