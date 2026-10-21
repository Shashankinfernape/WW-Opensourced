__d("WAWebBlockContactPopup.react", [
    "fbt",
    "WAWebCheckBox.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebName.react",
    "WDSFocusStateStyles",
    "WDSMargins.stylex",
    "WDSText.react",
    "react",
    "useWAWebToggle"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        marginTop6: {
            marginTop: "x1k70j0n",
            $$css: true
        }
    };
    function d({ contact, isReportPreChecked, onBlock, onCancel, onReportSpamBlock }) {
        const d = r("useWAWebToggle")(isReportPreChecked);
        const m = d[0];
        const p = d[1];
        const _ = u.jsx(o("WAWebName.react").Name, {
            contact,
            breakWord: true
        });
        const f = s._("Block {contact}?", [
            s._param("contact", _)
        ]);
        const g = s._("This person won't be able to message or call you. They won't know you blocked or reported them.");
        const h = s._("Report to WhatsApp");
        const Component = o("WAWebExternalLink.react").ExternalLink;
        const y = <Component href={o("WAWebFaqUrl").getBlockingReportingFaqUrl()} testid="learn-more-link">{r("WAWebFbtCommon")("Learn more")}</Component>;
        const C = s._("The last 5 messages from this user will be sent to WhatsApp. {link to learn more}", [
            s._param("link to learn more", y)
        ]);
        const Component_1 = r("WDSText.react");
        const Component_2 = o("WAWebCheckBox.react").CheckBox;
        const Component_3 = o("WAWebFlex.react").FlexColumn;
        const Component_4 = r("WDSText.react");
        const Component_5 = r("WDSText.react");
        const Component_6 = o("WAWebFlex.react").FlexColumn;
        const Component_7 = o("WAWebFlex.react").FlexRow;
        const Component_8 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_8 tsNavigationData={{
            surface: "block-contact",
            viewName: "block-contact"
        }} onOK={m ? onReportSpamBlock : onBlock} okButtonType="solid-warning" okText={r("WAWebFbtCommon")("Block")} onCancel={onCancel} title={f}><Component_1 type="Body2" colorName="contentDeemphasized" testid="block-contact-description">{g}</Component_1><Component_7 xstyle={o("WDSMargins.stylex").wdsMargins.marginVer12} columnGap={8}><Component_3 xstyle={o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus}><Component_2 onChange={p} checked={m} id="menu-icon-block" tabIndex={0}/></Component_3><Component_6 xstyle={o("WDSMargins.stylex").wdsMargins.marginTop2}><label data-testid="block-contact-report-label-wrapper" htmlFor="menu-icon-block"><Component_4 type="Body2Emphasized" colorName="contentDefault" testid="block-contact-report-label">{h}</Component_4></label><Component_5 type="Body2" colorName="contentDeemphasized" xstyle={c.marginTop6} testid="block-contact-report-description">{C}</Component_5></Component_6></Component_7></Component_8>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 226);