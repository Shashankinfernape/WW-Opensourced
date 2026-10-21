__d("WAWebBlockBusinessDialogV2.react", [
    "fbt",
    "WAWebBlockContactAction",
    "WAWebBlockContants",
    "WAWebBlocklistUtils",
    "WAWebBusinessProfileGetters",
    "WAWebCTWAGatingUtils",
    "WAWebChatModelUtils",
    "WAWebCommonCTWADataSharing",
    "WAWebComplianceUtil",
    "WAWebContactFormsUrl",
    "WAWebConversionTupleCollection",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingUIUtils",
    "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
    "WAWebName.react",
    "WAWebReportGatingUtils",
    "WAWebSendSpamChatAction",
    "WAWebUseBusinessProfile.react",
    "WAWebWDSRichTextField.react",
    "WDSBaseCheckbox.react",
    "WDSBaseRadio.react",
    "WDSButtonGroup.react",
    "WDSDialog.react",
    "WDSDialogBridge",
    "WDSIconWdsIcMetaDataChevron.react",
    "WDSMargins.stylex",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebBusinessProfileValues",
    "useWAWebToggle"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useEffect, useMemo, useState } = c;
    const _ = {
        marginTop18: {
            marginTop: "xhrpt6u",
            $$css: true
        },
        marginTop6: {
            marginTop: "x1k70j0n",
            $$css: true
        },
        paddingBottom6: {
            paddingBottom: "x10b6aqq",
            $$css: true
        }
    };
    const f = {
        deemphasized: {
            color: "xhslqc4",
            $$css: true
        },
        noWrap: {
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        radioLabel: {
            flexGrow: "x1iyjqo2",
            $$css: true
        }
    };
    const g = [
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
    function HComponent({ blockEntryPoint, chat, onMount, reportId, withReport }) {
        const chat_contact = chat.contact;
        const C = u.jsx(o("WAWebName.react").Name, {
            contact: chat_contact
        });
        const b = useState(null);
        const v = b[0];
        const S = b[1];
        const R = useState(null);
        const reasonDescription = R[0];
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
        const $ = (t)=>{
            if (t !== v) {
                E(null);
                S(t);
            }
        };
        const P = function() {
            o("WDSDialogBridge").closeWDSDialog();
        };
        const N = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (v != null) {
                    yield o("WAWebBlockContactAction").blockContact({
                        contact: chat_contact,
                        blockEntryPoint,
                        bizOptOutArgs: {
                            reason: v,
                            reasonDescription,
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
                    o("WDSDialogBridge").closeWDSDialog();
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const Component = o("WAWebExternalLink.react").ExternalLink;
        const M = <Component href={o("WAWebFaqUrl").getControlsWhenMessagingBusinessFaqUrl()} testid="learn-more-link">{s._("Learn more")}</Component>;
        const w = D ? s._("Block AI") : s._("Block business");
        const A = s._("{contact} won't be able to message or call you.", [
            s._param("contact", C)
        ]);
        const F = D ? s._("Why are you blocking this AI?") : s._("Why are you blocking this business?");
        const O = s._("The last 5 messages in this chat will be sent to WhatsApp. {link to learn more}", [
            s._param("link to learn more", M)
        ]);
        const B = s._("Report to WhatsApp");
        const Component_1 = o("WAWebExternalLink.react").ExternalLink;
        const W = <Component_1 xstyle={f.noWrap} href={o("WAWebMmSignalSharingUIUtils").getMmSignalSharingLearnMoreHCAURL()} testid="mm-signal-sharing-learn-more-link">{s._("Learn more")}</Component_1>;
        const Component_2 = o("WAWebExternalLink.react").ExternalLink;
        const q = <Component_2 xstyle={f.noWrap} href={o("WAWebCTWAGatingUtils").getCTWALearnMoreHyperLinkForCCICompliantUI()} testid="ctwa-data-sharing-learn-more-link">{s._("Learn more")}</Component_2>;
        const U = ()=>{
            if (o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled()) {
                return s._("When you block a business, Meta receives limited info that you blocked them. {link to learn more}", [
                    s._param("link to learn more", W)
                ]);
            }
            return s._("When you block a business with offers and announcements, Meta receives limited info to improve your experience. {link to learn more}", [
                s._param("link to learn more", W)
            ]);
        };
        const V = ()=>s._("When you block a business, Meta receives limited info that you blocked them. {link to learn more}", [
                s._param("link to learn more", q)
            ]);
        const Component_3 = o("WAWebExternalLink.react").ExternalLink;
        const H = reportId != null && o("WAWebReportGatingUtils").isAusOSAReportingEnabled() ? s._("You can send an additional report under the Australian Online Safety Act. {=m2}", [
            s._implicitParam("=m2", <Component_3 href={o("WAWebContactFormsUrl").getReportContentAUSFormUrl(reportId, o("WAWebComplianceUtil").WA_CF_RES_OSA_ID, o("WAWebComplianceUtil").WA_CF_RES_OSA)}>{s._("Learn more")}</Component_3>)
        ]) : null;
        const G = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(chat) != null && o("WAWebCTWAGatingUtils").isCTWATosFilteringEnabled() && o("WAWebCTWAGatingUtils").showCTWACCICompliantUI();
        const z = (o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() || o("WAWebMmSignalSharingGatingUtils").isMmDataSharingDisclosureEnabledAdditionalTransparencyLargeScreens()) && o("WAWebMmSignalSharingUserDisclosedInCollectionWindow").isMmSignalSharingUserDisclosedInCollectionWindow(chat.mmSignalSharingExpirationWindow);
        const j = (()=>{
            if (!G && !z) {
                return null;
            }
            if (G && z) {
                const a = r("WAWebConversionTupleCollection").get(chat.id)?.timestamp ?? 0;
                const l = chat.mmSignalSharingExpirationWindow;
                const s = l?.[l.length - 1]?.unixTime.server ?? 0;
                if (a > s) {
                    return V();
                }
                return U();
            }
            if (G) {
                return V();
            }
            return U();
        })();
        const Component_4 = r("WDSBaseCheckbox.react");
        const Component_5 = r("WDSText.react");
        const Component_6 = r("WDSText.react");
        const Component_7 = o("WAWebFlex.react").FlexColumn;
        const Component_8 = o("WAWebFlex.react").FlexRow;
        const K = withReport ? <Component_8 align="start" columnGap={8} xstyle={_.marginTop18}><Component_4 value={I} onChange={T} id="menu-icon-block" testid="report-checkbox"/><Component_7><Component_5 type="Body2Emphasized" colorName="contentDefault" testid="report-business-title">{B}</Component_5><Component_6 type="Body3" colorName="contentDeemphasized" xstyle={_.marginTop6} testid="biz-block-popup-report-subtext">{O}</Component_6></Component_7></Component_8> : null;
        const Q = u.jsx(r("WDSButtonGroup.react"), {
            orientation: "stacked",
            width: "fill",
            primaryButtonProps: {
                label: r("WAWebFbtCommon")("Block"),
                onPress: function() {
                    N();
                },
                testid: "popup-controls-ok",
                type: "destructive",
                variant: "outline",
                disabled: v == null
            },
            tertiaryButtonProps: {
                label: s._("Cancel"),
                onPress: P,
                testid: "popup-controls-cancel",
                variant: "borderless"
            }
        });
        const Component_9 = r("WDSText.react");
        const Component_10 = r("WDSText.react");
        const Component_11 = o("WAWebFlex.react").FlexRow;
        const Component_12 = o("WAWebFlex.react").FlexColumn;
        const Component_13 = r("WDSText.react");
        const Component_14 = o("WAWebFlex.react").FlexRow;
        const Component_15 = r("WDSDialog.react");
        return <Component_15 closeButton={false} description={A} footer={Q} headerType="expressive" layoutType="expressive" onDismiss={P} open size="sm" testid="block-business-popup" title={w}>{H != null && <Component_9 type="Body2" colorName="contentDeemphasized" xstyle={o("WDSMargins.stylex").wdsMargins.marginBottom20}>{H}</Component_9>}<Component_11 xstyle={_.paddingBottom6}><Component_10 type="Body2" colorName="contentDeemphasized">{F}</Component_10></Component_11><Component_12 role="radiogroup" aria-label={F} align="stretch">{g.map(({ getLabel, value }, t)=>{
            const i = v === value;
            const l = v == null;
            const Component = r("WDSBaseRadio.react");
            const Component_1 = r("WDSText.react");
            const Component_2 = r("WAWebWDSRichTextField.react");
            const Component_3 = o("WAWebFlex.react").FlexColumn;
            return <Component_3 key={String(value)} align="stretch"><label {...babelHelpers.extends({}, {
                0: {
                    className: "x6s0dn4 xfex06f x1ypdohk x78zum5 xz9dl7a xsag5q8"
                },
                1: {
                    className: "x6s0dn4 xfex06f x1ypdohk x78zum5 xz9dl7a xsag5q8 x120ee7l x1q0q8m5 xso031l"
                }
            }[(value !== o("WAWebBlockContants").BizOptOutReason.Other) << 0], {
                children: [
                    <Component name="block-reason-radio" value={String(value)} checked={i} onChange={function() {
                        return $(value);
                    }} tabIndex={i || l && t === 0 ? 0 : -1} testid={`block-reason-${String(value)}`}/>,
                    <Component_1 type="Body1" colorName="contentDefault" xstyle={f.radioLabel}>{getLabel()}</Component_1>
                ]
            })}/>{value === o("WAWebBlockContants").BizOptOutReason.Other && v === o("WAWebBlockContants").BizOptOutReason.Other && <Component_2 testid="block-reason-description" initialText={reasonDescription ?? undefined} onValueChange={E} maxLength={30} maxCharacterCount={30} placeholder={s._("Reason (optional)")}/>}</Component_3>;
        })}</Component_12>{K}{j != null && <Component_14 align="start" columnGap={4} xstyle={o("WDSMargins.stylex").wdsMargins.marginTop20}>{u.jsx(r("WDSIconWdsIcMetaDataChevron.react"), {
            testid: "single-chevron-in-circle",
            height: 18,
            width: 18,
            xstyle: [
                o("WDSMargins.stylex").wdsMargins.marginEnd4,
                f.deemphasized
            ],
            displayInline: true
        })}<Component_13 type="Body2" colorName="contentDeemphasized">{j}</Component_13></Component_14>}</Component_15>;
    }
    HComponent.displayName = `${HComponent.name} [from ${i.id}]`;
    l.default = HComponent;
}, 226);