__d("WAWebBlockBusinessPopup.react", [
    "fbt",
    "WAWebBlockContactAction",
    "WAWebBlockContants",
    "WAWebBlocklistUtils",
    "WAWebBusinessProfileGetters",
    "WAWebCTWAGatingUtils",
    "WAWebChatModelUtils",
    "WAWebCheckBox.react",
    "WAWebCommonCTWADataSharing",
    "WAWebComplianceUtil",
    "WAWebConfirmPopup.react",
    "WAWebContactFormsUrl",
    "WAWebConversionTupleCollection",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingUIUtils",
    "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebRadio.react",
    "WAWebReportGatingUtils",
    "WAWebRichTextField.react",
    "WAWebSendSpamChatAction",
    "WAWebText.react",
    "WAWebUseBusinessProfile.react",
    "WDSFocusStateStyles",
    "WDSIconWdsIcMetaDataChevron.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebBusinessProfileValues",
    "useWAWebToggle"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useMemo, useState } = d;
    const f = {
        marginTop6: {
            marginTop: "x1k70j0n",
            $$css: true
        },
        paddingBottom6: {
            paddingBottom: "x10b6aqq",
            $$css: true
        }
    };
    const g = {
        border: {
            borderBottomWidth: "xso031l",
            borderBottomStyle: "x1q0q8m5",
            borderBottomColor: "x120ee7l",
            $$css: true
        },
        deemphasizedColor: {
            color: "xhslqc4",
            $$css: true
        },
        inlineIcon: {
            verticalAlign: "x16dsc37",
            $$css: true
        },
        noWrap: {
            whiteSpace: "xuxw1ft",
            $$css: true
        }
    };
    const h = [
        {
            value: o("WAWebBlockContants").BizOptOutReason.NoLongerNeeded,
            getLabel: function() {
                return s._("No longer needed");
            }
        },
        {
            value: o("WAWebBlockContants").BizOptOutReason.NoSignUp,
            getLabel: function() {
                return s._("Didn't sign up");
            }
        },
        {
            value: o("WAWebBlockContants").BizOptOutReason.Spam,
            getLabel: function() {
                return s._("Spam");
            }
        },
        {
            value: o("WAWebBlockContants").BizOptOutReason.OffensiveMessages,
            getLabel: function() {
                return s._("Offensive messages");
            }
        },
        {
            value: o("WAWebBlockContants").BizOptOutReason.Other,
            getLabel: function() {
                return s._("Other");
            }
        }
    ];
    function YComponent({ blockEntryPoint, chat, onMount, reportId, withReport }) {
        const chat_contact = chat.contact;
        const b = useState(null);
        const v = b[0];
        const S = b[1];
        const R = useState(null);
        const L = R[0];
        const E = R[1];
        const k = r("useWAWebToggle")(false);
        const I = k[0];
        const T = k[1];
        o("WAWebUseBusinessProfile.react").useBusinessProfile(chat_contact.id);
        const D = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(chat_contact.id, [
            o("WAWebBusinessProfileGetters").getIsBizBot3p
        ])?.[0] === true;
        const x = useMemo(function() {
            const e = o("WAWebChatModelUtils").getSenderMsgCount(chat);
            switch(e){
                case 0:
                    return o("WAWebBlockContants").BizOptOutFirstMessage.None;
                case 1:
                    return o("WAWebBlockContants").BizOptOutFirstMessage.True;
                default:
                    return o("WAWebBlockContants").BizOptOutFirstMessage.False;
            }
        }, [
            chat
        ]);
        useEffect(function() {
            if (onMount != null) {
                onMount();
            }
        }, [
            onMount
        ]);
        const $ = function({ text }) {
            E(text);
        };
        const P = (t)=>{
            E(null);
            S(t);
        };
        const N = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (v != null) {
                    yield o("WAWebBlockContactAction").blockContact({
                        contact: chat_contact,
                        blockEntryPoint,
                        bizOptOutArgs: {
                            reason: v,
                            reasonDescription: L,
                            firstMessage: x,
                            entryPoint: blockEntryPoint
                        }
                    });
                    if (I && chat) {
                        yield o("WAWebSendSpamChatAction").sendReport({
                            chat,
                            spamFlow: o("WAWebBlocklistUtils").getSpamFlowFromBlockEntryPoint(blockEntryPoint)
                        });
                    }
                    o("WAWebModalManager").ModalManager.close();
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const Component = o("WAWebExternalLink.react").ExternalLink;
        const M = <Component href={o("WAWebFaqUrl").getControlsWhenMessagingBusinessFaqUrl()} testid="learn-more-link">{s._("Learn more")}</Component>;
        const w = ()=>{
            if (D) {
                return s._("Block AI");
            }
            return s._("Block business");
        };
        const AComponent = (reportId)=>{
            const Component = o("WAWebExternalLink.react").ExternalLink;
            return s._("You can send an additional report under the Australian Online Safety Act. {=m2}", [
                s._implicitParam("=m2", <Component href={o("WAWebContactFormsUrl").getReportContentAUSFormUrl(reportId, o("WAWebComplianceUtil").WA_CF_RES_OSA_ID, o("WAWebComplianceUtil").WA_CF_RES_OSA)}>{s._("Learn more")}</Component>)
            ]);
        };
        const F = ()=>s._("{contact} won't be able to message or call you.", [
                s._param("contact", z)
            ]);
        const O = ()=>{
            if (D) {
                return s._("Why are you blocking this AI?");
            }
            return s._("Why are you blocking this business?");
        };
        const B = ()=>s._("The last 5 messages in this chat will be sent to WhatsApp. {link to learn more}", [
                s._param("link to learn more", M)
            ]);
        const W = ()=>s._("Report to WhatsApp");
        const Component_1 = o("WAWebExternalLink.react").ExternalLink;
        const q = <Component_1 xstyle={g.noWrap} href={o("WAWebMmSignalSharingUIUtils").getMmSignalSharingLearnMoreHCAURL()} testid="mm-signal-sharing-learn-more-link">{s._("Learn more")}</Component_1>;
        const Component_2 = o("WAWebExternalLink.react").ExternalLink;
        const U = <Component_2 xstyle={g.noWrap} href={o("WAWebCTWAGatingUtils").getCTWALearnMoreHyperLinkForCCICompliantUI()} testid="ctwa-data-sharing-learn-more-link">{s._("Learn more")}</Component_2>;
        const V = ()=>{
            if (o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled()) {
                return s._("When you block a business, Meta receives limited info that you blocked them. {link to learn more}", [
                    s._param("link to learn more", q)
                ]);
            }
            return s._("When you block a business with offers and announcements, Meta receives limited info to improve your experience. {link to learn more}", [
                s._param("link to learn more", q)
            ]);
        };
        const H = ()=>s._("When you block a business, Meta receives limited info that you blocked them. {link to learn more}", [
                s._param("link to learn more", U)
            ]);
        const GComponent = ()=>{
            const t = B();
            const n = W();
            const Component = o("WAWebCheckBox.react").CheckBox;
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            const Component_2 = r("WDSText.react");
            const Component_3 = o("WAWebText.react").WAWebTextMuted;
            const Component_4 = o("WAWebFlex.react").FlexColumn;
            const Component_5 = o("WAWebFlex.react").FlexRow;
            return <Component_5 xstyle={o("WDSMargins.stylex").wdsMargins.marginTop20} columnGap={16}><Component_1 xstyle={[
                o("WDSPaddings.stylex").wdsPaddings.paddingTop2,
                o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus
            ]}><Component onChange={T} checked={I} id="menu-icon-block" testid="report-checkbox"/></Component_1><Component_4 xstyle={o("WDSMargins.stylex").wdsMargins.marginTop4}><label htmlFor="menu-icon-block" data-testid="business-block-report-label"><Component_2 type="Body2Emphasized" colorName="contentDefault" testid="business-block-report-label-text">{n}</Component_2></label><Component_3 xstyle={f.marginTop6} testid="biz-block-popup-report-subtext">{t}</Component_3></Component_4><div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginVer12))}/></Component_5>;
        };
        var z = c.jsx(o("WAWebName.react").Name, {
            contact: chat_contact
        });
        const j = w();
        const K = O();
        const Q = F();
        const X = reportId != null && o("WAWebReportGatingUtils").isAusOSAReportingEnabled() ? AComponent(reportId) : null;
        const Y = withReport ? GComponent() : null;
        const J = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(chat) != null && o("WAWebCTWAGatingUtils").isCTWATosFilteringEnabled() && o("WAWebCTWAGatingUtils").showCTWACCICompliantUI();
        const Z = (o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() || o("WAWebMmSignalSharingGatingUtils").isMmDataSharingDisclosureEnabledAdditionalTransparencyLargeScreens()) && o("WAWebMmSignalSharingUserDisclosedInCollectionWindow").isMmSignalSharingUserDisclosedInCollectionWindow(chat.mmSignalSharingExpirationWindow);
        const ee = (()=>{
            if (!J && !Z) {
                return null;
            }
            if (J && Z) {
                const a = r("WAWebConversionTupleCollection").get(chat.id)?.timestamp ?? 0;
                const i = chat.mmSignalSharingExpirationWindow;
                const s = i?.[i.length - 1]?.unixTime.server ?? 0;
                if (a > s) {
                    return H();
                }
                return V();
            }
            if (J) {
                return H();
            }
            return V();
        })();
        const Component_3 = r("WDSText.react");
        const Component_4 = r("WDSText.react");
        const Component_5 = r("WDSText.react");
        const Component_6 = o("WAWebFlex.react").FlexRow;
        const Component_7 = o("WAWebFlex.react").FlexColumn;
        const Component_8 = r("WDSText.react");
        const Component_9 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_9 tsNavigationData={{
            surface: "block-business",
            viewName: "block-business"
        }} okDisabled={v == null} onOK={N} okText={r("WAWebFbtCommon")("Block")} onCancel={o("WAWebModalManager").closeModalManager} title={j} testid="block-business-popup">{X != null && <p {...babelHelpers.extends({
            "data-testid": "business-block-aus-osa-paragraph"
        }, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginBottom20), {
            children: <Component_3 type="Body2" colorName="contentDefault" testid="business-block-aus-osa-text">{X}</Component_3>
        })}/>}<p {...babelHelpers.extends({
            "data-testid": "business-block-description-paragraph"
        }, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginBottom20), {
            children: <Component_4 type="Body2" colorName="contentDefault" testid="business-block-description">{Q}</Component_4>
        })}/><Component_6 xstyle={[
            f.paddingBottom6,
            g.border
        ]}><Component_5 type="Body2" colorName="contentDeemphasized" testid="business-block-reason-heading">{K}</Component_5></Component_6><Component_7 role="radiogroup" aria-label={K} align="stretch">{h.map(({ getLabel, value }, t)=>{
            const a = v === value;
            const i = v == null;
            const Component = o("WAWebRadio.react").RadioWithLabel;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            const Component_2 = o("WAWebRichTextField.react").RichTextField;
            const Component_3 = o("WAWebFlex.react").FlexColumn;
            return <Component_3 key={value} align="stretch"><Component_1 xstyle={g.border}><Component testid={`block-reason-${String(value)}`} name="block-reason-radio" value={String(value)} label={getLabel()} checked={a} tabIndex={a || i && t === 0 ? 0 : -1} onChange={function() {
                return P(value);
            }}/></Component_1>{v != null && value === o("WAWebBlockContants").BizOptOutReason.Other && v === o("WAWebBlockContants").BizOptOutReason.Other && <Component_2 testid="block-reason-description" focusOnMount hideFloatingLabel showRemaining value={L} maxLength={30} onChange={$} placeholder={s._("Reason (optional)")}/>}</Component_3>;
        })}</Component_7>{Y}{ee != null && <p {...babelHelpers.extends({
            "data-testid": "business-block-meta-disclosure-paragraph"
        }, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginTop20, g.deemphasizedColor), {
            children: <Component_8 type="Body2" colorName="contentDeemphasized" testid="business-block-meta-disclosure">{c.jsx(r("WDSIconWdsIcMetaDataChevron.react"), {
                testid: "single-chevron-in-circle",
                height: 18,
                width: 18,
                xstyle: [
                    o("WDSMargins.stylex").wdsMargins.marginEnd4,
                    g.deemphasizedColor,
                    g.inlineIcon
                ],
                displayInline: true
            })}{ee}</Component_8>
        })}/>}</Component_9>;
    }
    YComponent.displayName = `${YComponent.name} [from ${i.id}]`;
    l.default = YComponent;
}, 226);