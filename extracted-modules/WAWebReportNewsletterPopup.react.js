__d("WAWebReportNewsletterPopup.react", [
    "fbt",
    "WAWebCheckBox.react",
    "WAWebCommonNewsletterStrings",
    "WAWebComplianceReportPopupLoadable",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterIntegrityUtils",
    "WAWebNewsletterUnsubscribeAction",
    "WAWebSendSpamChatAction",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumTsSurface",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "WDSText.react",
    "react",
    "stylex",
    "useWAWebShouldShowNewsletterUnfollowUpsell"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useState = u.useState;
    const m = {
        border: {
            borderBottomWidth: "xso031l",
            borderBottomStyle: "x1q0q8m5",
            borderBottomColor: "x120ee7l",
            $$css: true
        },
        checkboxRow: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            $$css: true
        }
    };
    function p({ chat, spamFlow }) {
        const i = u_useState(false);
        const l = i[0];
        const u = i[1];
        const p = o("useWAWebShouldShowNewsletterUnfollowUpsell").useShouldShowNewsletterUnfollowUpsell(chat);
        const _ = s._("Report to WhatsApp?");
        const Component = o("WAWebExternalLink.react").ExternalLink;
        const f = <Component href={o("WAWebFaqUrl").getNewsletterReportLearnMoreUrl()}>{r("WAWebFbtCommon")("Learn more")}</Component>;
        const g = o("WAWebNewsletterGatingUtils").isNewsletterUKOSAReportingEnabled() ? s._("No one in the channel will know about this report. {link to learn more}", [
            s._param("link to learn more", f)
        ]) : s._("No one in the channel will know about this report.");
        const h = o("WAWebCommonNewsletterStrings").getUnfollowNewsletterText();
        let y;
        const C = function() {
            o("WAWebSendSpamChatAction").sendReport({
                chat,
                spamFlow
            }).then((e)=>{
                if (e != null) {
                    y = e;
                }
                return l && o("WAWebNewsletterUnsubscribeAction").unsubscribeFromNewsletterAction(chat, {
                    eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
                    discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_PROFILE
                });
            }).finally(()=>{
                o("WAWebModalManager").ModalManager.close();
                const e = o("WAWebNewsletterIntegrityUtils").getNewsletterReportComplianceConfig({
                    reportId: y
                });
                if (e != null) {
                    o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebComplianceReportPopupLoadable").ComplianceReportPopupLoadable, {
                        learnMoreUrl: e.learnMoreUrl,
                        bannerText: e.bannerText,
                        actionText: e.actionText,
                        showViewReport: e.showViewReport
                    }));
                }
            });
        };
        const Component_1 = o("WAWebCheckBox.react").CheckBox;
        const Component_2 = r("WDSText.react");
        const Component_3 = r("WDSText.react");
        const Component_4 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_4 onOK={C} okText={s._("Report")} onCancel={o("WAWebModalManager").closeModalManager} title={_}>{p && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.checkboxRow, o("WDSMargins.stylex").wdsMargins.marginVer12, o("WDSPaddings.stylex").wdsPaddings.paddingBottom20, m.border, o("WDSMargins.stylex").wdsMargins.marginEnd0), {
            children: [
                <Component_1 onChange={function() {
                    return u(function(e) {
                        return !e;
                    });
                }} checked={l} id="newsletter-upsell-unfollow"/>,
                <label {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStart8), {
                    "data-testid": "newsletter-upsell-unfollow-label",
                    htmlFor: "newsletter-upsell-unfollow",
                    children: <Component_2 type="Body2" colorName="contentDefault" testid="newsletter-report-unfollow-text">{h}</Component_2>
                })}/>
            ]
        })}/>}<p {...babelHelpers.extends({
            "data-testid": "newsletter-report-description-paragraph"
        }, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginBottom12), {
            children: <Component_3 type="Body2" colorName="contentDefault" testid="newsletter-report-description">{g}</Component_3>
        })}/></Component_4>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.default = p;
}, 226);