__d("WAWebAttachMediaViewOnceNux.react", [
    "fbt",
    "WAWebBox.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebText.react",
    "WDSIconIcLockFilled.react",
    "WDSIconWdsIcViewOnce.react",
    "WDSIllustrationWdsPictoViewOnce.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        icon: {
            color: "xhslqc4",
            $$css: true
        },
        sectionIcon: {
            width: "xvy4d1p",
            $$css: true
        },
        sectionTitle: {
            width: "xxsgkw5",
            lineHeight: "x1o2sk6j",
            $$css: true
        }
    };
    function d(e) {
        let t;
        const e_onOkClick = e.onOkClick;
        const a = s._("View once messages give you more privacy");
        const i = {
            width: 24,
            height: 24,
            iconXstyle: c.icon
        };
        const l = [
            {
                icon: u.jsx(r("WDSIconWdsIcViewOnce.react"), babelHelpers.extends({}, i)),
                description: s._("When you send a photo, video or voice message, it disappears from the chat after it is opened.")
            },
            {
                icon: u.jsx(r("WDSIconIcLockFilled.react"), babelHelpers.extends({}, i, {
                    testid: "lock"
                })),
                description: s._("For added privacy, the recipient can't share, forward, copy, save, or take a screenshot of it.")
            }
        ];
        const Component = o("WAWebText.react").WAWebTextLarge;
        const Component_1 = r("WAWebBox.react");
        const Component_2 = o("WAWebFlex.react").FlexColumn;
        const Component_3 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_3 tsNavigationData={{
            surface: "unknown",
            viewName: "view-once-nux"
        }} onOK={e_onOkClick} cancelText={r("WAWebFbtCommon")("Learn more")} onCancel={m}><Component_2 align="center" xstyle={(t = o("WDSMargins.stylex")).wdsMargins.marginVerAuto}>{u.jsx(r("WDSIllustrationWdsPictoViewOnce.react"), {
            testid: "wds-picto-view-once",
            xstyle: t.wdsMargins.marginVer16
        })}<Component_1 alignSelf="center" xstyle={[
            t.wdsMargins.marginHor8,
            t.wdsMargins.marginTop16,
            t.wdsMargins.marginBottom8
        ]}><Component weight="bold">{a}</Component></Component_1>{l.map(({ description, icon }, t)=>{
            const Component = o("WAWebFlex.react").FlexItem;
            const Component_1 = o("WAWebText.react").WAWebTextMuted;
            const Component_2 = o("WAWebFlex.react").FlexItem;
            const Component_3 = o("WAWebFlex.react").FlexRow;
            return <Component_3 key={t} xstyle={[
                o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
                o("WDSMargins.stylex").wdsMargins.marginVer16
            ]}><Component xstyle={[
                o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
                c.sectionIcon
            ]}>{icon}</Component><Component_2 xstyle={[
                o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
                c.sectionTitle
            ]}><Component_1>{description}</Component_1></Component_2></Component_3>;
        })}</Component_2></Component_3>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    function m() {
        o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getViewOnceFaqUrl());
    }
    l.default = d;
}, 226);