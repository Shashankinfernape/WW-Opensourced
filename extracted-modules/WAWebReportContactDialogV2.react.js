__d("WAWebReportContactDialogV2.react", [
    "fbt",
    "WAWebBlockBusinessDialogV2.react",
    "WAWebBlocklistUtils",
    "WAWebBusinessProfileGetters",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebSendSpamChatAction",
    "WAWebUseBusinessProfile.react",
    "WDSButtonGroup.react",
    "WDSDialog.react",
    "WDSDialogBridge",
    "WDSMargins.stylex",
    "WDSText.react",
    "react",
    "useWAWebBusinessProfileValues",
    "useWAWebContactValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ chat, spamFlow }) {
        o("WAWebUseBusinessProfile.react").useBusinessProfile(chat.contact.id);
        const i = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(chat.contact.id, [
            o("WAWebBusinessProfileGetters").getIsBizBot3p
        ])?.[0] === true;
        const l = o("useWAWebContactValues").useContactValues(chat.contact.id, [
            o("WAWebFrontendContactGetters").getIsContactBlocked
        ]);
        const c = l[0];
        const p = !c;
        const _ = function() {
            o("WDSDialogBridge").closeWDSDialog();
        };
        const f = function() {
            o("WAWebSendSpamChatAction").sendReport({
                chat,
                spamFlow
            });
            o("WDSDialogBridge").closeWDSDialog();
        };
        const g = function() {
            if (i || chat.contact.isBusiness) {
                o("WAWebSendSpamChatAction").sendReport({
                    chat,
                    spamFlow
                });
                o("WDSDialogBridge").closeWDSDialog();
                const e = o("WAWebBlocklistUtils").getBlockEntryPointFromSpamFlow(spamFlow);
                o("WDSDialogBridge").openWDSDialog(u.jsx(r("WAWebBlockBusinessDialogV2.react"), {
                    chat,
                    blockEntryPoint: e,
                    withReport: false
                }));
                return;
            }
            o("WAWebSendSpamChatAction").sendReportBlock({
                chat,
                spamFlow
            });
            o("WDSDialogBridge").closeWDSDialog();
        };
        const Component = o("WAWebExternalLink.react").ExternalLink;
        const h = <Component href={o("WAWebFaqUrl").getBlockingReportingFaqUrl()} testid="learn-more-link">{r("WAWebFbtCommon")("Learn more")}</Component>;
        const y = s._("Report to WhatsApp");
        const C = d(i, chat.contact.isBusiness)(h);
        const b = m(i, chat.contact.isBusiness);
        const footer = p ? u.jsx(r("WDSButtonGroup.react"), {
            orientation: "stacked",
            width: "fill",
            primaryButtonProps: {
                label: s._("Report and block"),
                onPress: g,
                testid: "popup-controls-ok",
                type: "destructive",
                variant: "outline"
            },
            secondaryButtonProps: {
                label: r("WAWebFbtCommon")("Report"),
                onPress: f,
                testid: "popup-controls-extra",
                type: "default",
                variant: "outline"
            },
            tertiaryButtonProps: {
                label: r("WAWebFbtCommon")("Cancel"),
                onPress: _,
                testid: "popup-controls-cancel",
                variant: "borderless"
            }
        }) : u.jsx(r("WDSButtonGroup.react"), {
            orientation: "stacked",
            width: "fill",
            primaryButtonProps: {
                label: r("WAWebFbtCommon")("Report"),
                onPress: f,
                testid: "popup-controls-ok",
                type: "destructive",
                variant: "outline"
            },
            secondaryButtonProps: {
                label: r("WAWebFbtCommon")("Cancel"),
                onPress: _,
                testid: "popup-controls-cancel",
                variant: "borderless"
            }
        });
        const Component_1 = r("WDSText.react");
        const Component_2 = r("WDSText.react");
        const Component_3 = o("WAWebFlex.react").FlexColumn;
        const Component_4 = r("WDSDialog.react");
        return <Component_4 closeButton={false} footer={footer} headerType="expressive" layoutType="expressive" onDismiss={_} open size="sm" testid="report-contact-popup" title={y}><Component_3><Component_1 type="Body3" colorName="contentDeemphasized">{C}</Component_1>{p ? <Component_2 type="Body2" colorName="contentDeemphasized" xstyle={o("WDSMargins.stylex").wdsMargins.marginTop12}>{b}</Component_2> : null}</Component_3></Component_4>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    function d(e, isBusiness) {
        if (e) {
            return function(e) {
                return s._("The last 5 messages in this chat will be sent to WhatsApp. This AI won't know you reported or blocked them. {link to learn more}", [
                    s._param("link to learn more", e)
                ]);
            };
        }
        if (isBusiness) {
            return function(e) {
                return s._("The last 5 messages in this chat will be sent to WhatsApp. This business won't know you reported or blocked them. {link to learn more}", [
                    s._param("link to learn more", e)
                ]);
            };
        }
        return function(e) {
            return s._("The last 5 messages in this chat will be sent to WhatsApp. This person won't know you reported or blocked them. {link to learn more}", [
                s._param("link to learn more", e)
            ]);
        };
    }
    function m(e, t) {
        if (e) {
            return s._("If you report and block, this AI won't be able to message or call you.");
        }
        if (t) {
            return s._("If you report and block, this business won't be able to message or call you.");
        }
        return s._("If you report and block, this person won't be able to message or call you.");
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.default = c;
}, 226);