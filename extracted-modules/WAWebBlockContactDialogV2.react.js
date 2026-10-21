__d("WAWebBlockContactDialogV2.react", [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebName.react",
    "WDSBaseCheckbox.react",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "WDSText.react",
    "react",
    "useWAWebToggle"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        marginTop18: {
            marginTop: "xhrpt6u",
            $$css: true
        },
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
        const Component_1 = r("WDSBaseCheckbox.react");
        const Component_2 = r("WDSText.react");
        const Component_3 = r("WDSText.react");
        const Component_4 = o("WAWebFlex.react").FlexColumn;
        const Component_5 = o("WAWebFlex.react").FlexRow;
        const b = <Component_5 align="start" columnGap={8} xstyle={c.marginTop18}><Component_1 value={m} onChange={p} id="menu-icon-block" testid="report-contact-checkbox"/><Component_4><Component_2 type="Body2Emphasized" colorName="contentDefault" testid="report-contact-title">{h}</Component_2><Component_3 type="Body3" colorName="contentDeemphasized" xstyle={c.marginTop6} testid="report-contact-subtext">{C}</Component_3></Component_4></Component_5>;
        const Component_6 = o("WAWebFlex.react").FlexColumn;
        const v = <Component_6>{g}{b}</Component_6>;
        const S = s._("{content}", [
            s._param("content", v)
        ]);
        const R = function() {
            if (m) {
                onReportSpamBlock();
            } else {
                onBlock();
            }
            o("WDSDialogBridge").closeWDSDialog();
        };
        const L = function() {
            o("WDSDialogBridge").closeWDSDialog();
            onCancel();
        };
        const Component_7 = r("WDSConfirmDialog.react");
        return <Component_7 title={f} description={S} confirmLabel={r("WAWebFbtCommon")("Block")} destructive onConfirm={R} onDismiss={L} open/>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 226);