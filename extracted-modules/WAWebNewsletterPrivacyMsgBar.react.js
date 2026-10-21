__d("WAWebNewsletterPrivacyMsgBar.react", [
    "fbt",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebNewsletterPhoneNumberPrivacyNux.react",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "WDSTextualLink.react",
    "WDSTooltip.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    function d({ onDismiss }) {
        const n = e_useCallback(function() {
            o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebNewsletterPhoneNumberPrivacyNux.react"), {}));
        }, []);
        const Component = r("WDSTextualLink.react");
        const Component_1 = o("WAWebFlex.react").FlexItem;
        const Component_2 = r("WDSButton.react");
        const Component_3 = r("WDSTooltip.react");
        const Component_4 = o("WAWebFlex.react").FlexItem;
        const Component_5 = o("WAWebFlex.react").FlexRow;
        return <Component_5 align="center" gap={8}><Component_1><span className="x126k92a" data-testid="newsletter-privacy-msg-bar">{s._("This channel has added privacy for your profile and phone number.")} <Component onClick={n}>{r("WAWebFbtCommon")("Learn more")}</Component></span></Component_1><Component_4 grow={0} align="center"><Component_3 label={r("WAWebFbtCommon")("Close")}><Component_2 variant="borderless" type="default" size="medium" onPress={onDismiss} Icon={r("WDSIconIcClose.react")} aria-label={r("WAWebFbtCommon")("Close")}/></Component_3></Component_4></Component_5>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 226);