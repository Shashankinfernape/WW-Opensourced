__d("WAWebSuspiciousConsumerCard.react", [
    "fbt",
    "WAWebBlockContactUtils",
    "WAWebBlockContants",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebName.react",
    "WAWebNoop",
    "WAWebSendNotSpamAction",
    "WDSButton.react",
    "WDSButtonGroup.react",
    "WDSIconIcBlock.react",
    "WDSIconIcCheckCircle.react",
    "WDSIconIcErrorFilled.react",
    "WDSIconIcPrivacyTip.react",
    "WDSText.react",
    "react",
    "useWAWebContactValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = 30;
    const d = {
        container: {
            maxWidth: "xlnrm6",
            width: "xh8yej3",
            boxSizing: "x9f619",
            paddingTop: "xl7twdi",
            paddingBottom: "xvg22vi",
            paddingInlineStart: "x1iw51ew",
            paddingInlineEnd: "xde1mab",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        }
    };
    function m({ chat, trustSignals }) {
        const chat_contact = chat.contact;
        const i = o("useWAWebContactValues").useContactValues(chat_contact.id, [
            o("WAWebContactGetters").getId
        ]);
        const l = i[0];
        const m = function() {
            r("WAWebSendNotSpamAction")(chat).catch(r("WAWebNoop"));
        };
        const p = function() {
            o("WAWebBlockContactUtils").handleBlock(chat, o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlockSuspicious);
        };
        const Component = r("WDSText.react");
        const Component_1 = r("WDSText.react");
        const Component_2 = o("WAWebFlex.react").FlexColumn;
        const Component_3 = r("WDSButton.react");
        const Component_4 = o("WAWebFlex.react").FlexColumn;
        return <Component_4 align="center" xstyle={d.container}><Component_2 align="center"><div className="x1n2onr6">{u.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: l,
            size: o("WAWebDetailImage.react").DetailImageSize.Medium,
            quality: o("WAWebDetailImage.react").DetailImageQuality.High,
            tabIndex: 0,
            ariaLabel: s._("Profile picture")
        })}<div aria-hidden className="x10l6tqk xtijo5x x1ey2m1c x1849jeq x1gnnpzl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1280gxy x78zum5 x6s0dn4 xl56j7k xqnyt8g">{u.jsx(r("WDSIconIcErrorFilled.react"), {
            height: c,
            width: c
        })}</div></div><div className="x16ovd2e"><Component type="Headline2" colorName="contentDefault">{u.jsx(o("WAWebName.react").Name, {
            contact: chat_contact
        })}</Component></div><div className="x16ovd2e" data-testid="fmx-card-trust-signals"><Component_1 type="Body2" colorName="contentDeemphasized">{trustSignals.map((e, t)=><span key={t}>{e}{t < trustSignals.length - 1 && <> • </>}</span>)}</Component_1></div></Component_2><div className="x1p57kb1 x5w4yej x78zum5 xdt5ytf x6s0dn4"><Component_3 variant="borderless" onPress={r("WAWebNoop")} Icon={r("WDSIconIcPrivacyTip.react")} testid="fmx-suspicious-prompt" label={s._("Do you trust this person?")}/>{u.jsx(r("WDSButtonGroup.react"), {
            width: "hug",
            orientation: "horizontal",
            secondaryButtonProps: {
                variant: "outline",
                type: "destructive",
                onPress: p,
                Icon: r("WDSIconIcBlock.react"),
                testid: "fmx-card-block-btn",
                label: r("WAWebFbtCommon")("Block")
            },
            primaryButtonProps: {
                variant: "outline",
                type: "default",
                onPress: m,
                Icon: r("WDSIconIcCheckCircle.react"),
                testid: "fmx-card-trust-btn",
                label: s._("Trust")
            }
        })}</div></Component_4>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.default = m;
}, 226);