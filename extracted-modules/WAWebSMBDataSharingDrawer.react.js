__d("WAWebSMBDataSharingDrawer.react", [
    "fbt",
    "WASmaxInBizSettingsEnums",
    "WAWebCTWADataSharingModel",
    "WAWebCTWAGatingUtils",
    "WAWebCheckBox.react",
    "WAWebCommonCTWADataSharing",
    "WAWebCsv3pdSignals",
    "WAWebDataSharingOptInCoolOffModel",
    "WAWebDataSharingUpsellModel",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebGroupInfoSeparator.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebSMBDataSharingSettingAction",
    "WAWebSmbDataSharingConsentSettingWamEvent",
    "WAWebSmbDataSharingOptInModalDialog",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebTosUrl",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WDSButton.react",
    "WDSIconIcDownload.react",
    "WDSIconIcLock.react",
    "WDSIconIcSettings.react",
    "WDSIconIcVisibilityOff.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "WDSText.react",
    "fbs",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useState } = d;
    const _ = {
        paddingTop14: {
            paddingTop: "xyinxu5",
            $$css: true
        },
        marginInlineStart18: {
            marginInlineStart: "xnkmj2t",
            $$css: true
        },
        marginBottom25: {
            marginBottom: "x1ibc7va",
            $$css: true
        }
    };
    const f = {
        iconColor: {
            color: "xhslqc4",
            $$css: true
        },
        icon: {
            color: "xhslqc4",
            width: "xvy4d1p",
            height: "xxk0z11",
            $$css: true
        },
        toggleNote: {
            marginTop: "x1de0gy",
            $$css: true
        }
    };
    const g = ()=>{
        o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebSmbDataSharingOptInModalDialog").SmbDataSharingOptInModalDialog, {
            entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.DATA_SHARING_TOOLS,
            callback: r("WAWebNoop")
        }));
    };
    function h(t) {
        const n = o("react-compiler-runtime").c(43);
        const { entrypoint, onClose, ref } = t;
        const u = r("useWAWebUnmountSignal")();
        let d;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            d = o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled();
            n[0] = d;
        } else {
            d = n[0];
        }
        const h = d;
        const C = useState(null);
        const b = C[0];
        const v = C[1];
        let S;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            S = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion();
            n[1] = S;
        } else {
            S = n[1];
        }
        const R = useState(S);
        const L = R[0];
        const E = R[1];
        let k;
        if (n[2] !== b || n[3] !== L) {
            k = o("WAWebCommonCTWADataSharing").isGlobalDataSharingAccepted(b, L);
            n[2] = b;
            n[3] = L;
            n[4] = k;
        } else {
            k = n[4];
        }
        const I = k;
        let T;
        let D;
        if (n[5] !== u.aborted) {
            T = function() {
                const e = function() {
                    v(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue());
                    E(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion());
                };
                o("WAWebSMBDataSharingSettingAction").getSMBDataSharingSettingAction().then((t)=>{
                    if (!u.aborted) {
                        v(t);
                        E(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion());
                        o("WAWebCTWADataSharingModel").CTWADataSharingModel.subscribeForUpdates(e);
                    }
                });
                return function() {
                    o("WAWebCTWADataSharingModel").CTWADataSharingModel.unsubscribeFromUpdates(e);
                };
            };
            D = [
                u.aborted
            ];
            n[5] = u.aborted;
            n[6] = T;
            n[7] = D;
        } else {
            T = n[6];
            D = n[7];
        }
        useEffect(T, D);
        let x;
        if (n[8] !== b || n[9] !== entrypoint || n[10] !== I || n[11] !== u.aborted) {
            x = function() {
                const e = o("WAWebUserPrefsGeneral").getCTWADataSharingCoolOffTimestamp() == null;
                const t = o("WAWebCommonCTWADataSharing").shouldShowV2Disclosure();
                if (b === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset && e || t) {
                    g();
                } else {
                    const n = I ? o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false : o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true;
                    const smbDataSharingConsentSettingVersion = h ? o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION : o("WAWebCTWADataSharingModel").BASE_DISCLOSURE_VERSION;
                    if (n === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false) {
                        if (o("WAWebCTWAGatingUtils").isCTWA3pdOptOutCounterOptimizationEnabled()) {
                            o("WAWebUserPrefsGeneral").setCTWADataSharingOptOutDisclosureShownCount(0);
                        }
                        o("WAWebDataSharingOptInCoolOffModel").DataSharingOptInCoolOffModel.resetCoolOffStartTimestamp();
                    }
                    new (o("WAWebSmbDataSharingConsentSettingWamEvent")).SmbDataSharingConsentSettingWamEvent({
                        smbDataSharingConsentSettingVersion,
                        smbDataSharingConsentSettingType: n === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true,
                        smbDataSharingConsentSettingEntryPoint: entrypoint
                    }).commit();
                    o("WAWebDataSharingUpsellModel").enableUpsell();
                    o("WAWebSMBDataSharingSettingAction").setSMBDataSharingSettingAction(n, smbDataSharingConsentSettingVersion).then((e)=>{
                        if (!u.aborted) {
                            v(e?.value ?? null);
                        }
                    });
                }
            };
            n[8] = b;
            n[9] = entrypoint;
            n[10] = I;
            n[11] = u.aborted;
            n[12] = x;
        } else {
            x = n[12];
        }
        const $ = x;
        let P;
        if (n[13] !== u.aborted) {
            const N = function() {
                o("WAWebCsv3pdSignals").downloadCsvFor3pdSignals().then(()=>{
                    if (!u.aborted) {
                        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                            msg: s._("Download of data report completed")
                        }));
                    }
                }).catch(()=>{
                    if (!u.aborted) {
                        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                            msg: s._("Couldn't download data report")
                        }));
                    }
                });
            };
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            const Component_2 = o("WAWebExternalLink.react").ExternalLink;
            const Component_3 = r("WDSText.react");
            const Component_4 = o("WAWebFlex.react").FlexRow;
            const Component_5 = r("WDSButton.react");
            const Component_6 = r("WDSText.react");
            const Component_7 = o("WAWebFlex.react").FlexRow;
            const Component_8 = o("WAWebFlex.react").FlexColumn;
            P = o("WAWebCTWAGatingUtils").isDownload3PDSignalsEnabled() ? <Component_8 xstyle={[
                o("WDSPaddings.stylex").wdsPaddings.paddingHor32,
                o("WDSMargins.stylex").wdsMargins.marginTop20
            ]}><Component_1><Component type="Body1" colorName="contentDefault" testid="ctwa-data-sharing-report-heading" xstyle={o("WDSMargins.stylex").wdsMargins.marginBottom16}>{s._("Your data report")}</Component></Component_1><Component_4><Component_3 type="Body2" colorName="contentDeemphasized" testid="ctwa-data-sharing-report-description" xstyle={o("WDSMargins.stylex").wdsMargins.marginBottom16}>{s._("Your report is available to download. You can share this data with Meta to help improve your ads. {=m2}", [
                s._implicitParam("=m2", <Component_2 href={o("WAWebFaqUrl").sharingCustomerRelatedActivityLearnMoreURL()}>{s._("Learn more")}</Component_2>)
            ])}</Component_3></Component_4><Component_7 align="center"><span data-testid="ctwa-data-sharing-download-button-wrapper"><Component_5 key="download" Icon={r("WDSIconIcDownload.react")} xstyle={f.icon} onPress={N} testid="download-3pd-signals-button" aria-label={r("fbs")._("Download")} variant="borderless"/></span><span {...babelHelpers.extends({
                "data-testid": "ctwa-data-sharing-report-label-wrapper"
            }, (e || (e = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingStart24), {
                children: <Component_6 type="Body1" colorName="contentDefault" testid="ctwa-data-sharing-report-label">{s._("Download data on customer-related activities")}</Component_6>
            })}/></Component_7></Component_8> : null;
            n[13] = u.aborted;
            n[14] = P;
        } else {
            P = n[14];
        }
        const M = P;
        let w;
        if (n[15] === Symbol.for("react.memo_cache_sentinel")) {
            w = s._("Your customers' activity");
            n[15] = w;
        } else {
            w = n[15];
        }
        const A = w;
        let F;
        if (n[16] === Symbol.for("react.memo_cache_sentinel")) {
            F = {
                surface: "unknown",
                viewName: "smb-data-sharing"
            };
            n[16] = F;
        } else {
            F = n[16];
        }
        let O;
        if (n[17] !== onClose) {
            const Component = o("WAWebDrawerHeader.react").DrawerHeader;
            O = <Component title={A} onBack={onClose} type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL}/>;
            n[17] = onClose;
            n[18] = O;
        } else {
            O = n[18];
        }
        let B;
        if (n[19] === Symbol.for("react.memo_cache_sentinel")) {
            B = [
                o("WDSPaddings.stylex").wdsPaddings.paddingHor32,
                _.paddingTop14,
                o("WDSMargins.stylex").wdsMargins.marginBottom20
            ];
            n[19] = B;
        } else {
            B = n[19];
        }
        let W;
        if (n[20] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            W = <Component_1><Component type="Body1" colorName="contentDefault" testid="ctwa-data-sharing-settings-header" xstyle={o("WDSMargins.stylex").wdsMargins.marginBottom16}>{h ? s._("Data sharing with Meta") : s._("Share customer-related activities to help improve your ads")}</Component></Component_1>;
            n[20] = W;
        } else {
            W = n[20];
        }
        let q;
        if (n[21] === Symbol.for("react.memo_cache_sentinel")) {
            q = <Y15 isEpd={h}/>;
            n[21] = q;
        } else {
            q = n[21];
        }
        let U;
        let V;
        if (n[22] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            const Component_1 = r("WDSText.react");
            const Component_2 = o("WAWebFlex.react").FlexRow;
            U = <Component_2><Component_1 type="Body2" colorName="contentDeemphasized" testid="ctwa-data-sharing-settings-body" xstyle={o("WDSMargins.stylex").wdsMargins.marginBottom16}>{q} {h && <Component href={o("WAWebTosUrl").getBizDataSharingHcaUrl()}>{s._("Learn more")}</Component>}</Component_1></Component_2>;
            const Component_3 = r("WDSText.react");
            const Component_4 = o("WAWebFlex.react").FlexRow;
            const Component_5 = r("WDSText.react");
            const Component_6 = o("WAWebFlex.react").FlexRow;
            const Component_7 = r("WDSText.react");
            const Component_8 = o("WAWebFlex.react").FlexRow;
            V = !h && <><Component_4 align="center" xstyle={o("WDSMargins.stylex").wdsMargins.marginBottom16}>{c.jsx(r("WDSIconIcVisibilityOff.react"), {
                height: 24,
                width: 24,
                xstyle: [
                    o("WDSMargins.stylex").wdsMargins.marginStart8,
                    f.iconColor
                ]
            })}<Component_3 type="Body2" colorName="contentDefault" testid="ctwa-data-sharing-content-exclusion" xstyle={_.marginInlineStart18}>{s._("Message and call content is not shared")}</Component_3></Component_4><Component_6 align="center" xstyle={o("WDSMargins.stylex").wdsMargins.marginBottom16}>{c.jsx(r("WDSIconIcLock.react"), {
                height: 24,
                width: 24,
                xstyle: [
                    o("WDSMargins.stylex").wdsMargins.marginStart8,
                    f.iconColor
                ]
            })}<Component_5 type="Body2" colorName="contentDefault" testid="ctwa-data-sharing-contact-details-exclusion" xstyle={_.marginInlineStart18}>{s._("Customer names, email addresses and phone numbers are not shared")}</Component_5></Component_6><Component_8 align="center" xstyle={o("WDSMargins.stylex").wdsMargins.marginBottom16}>{c.jsx(r("WDSIconIcSettings.react"), {
                height: 24,
                width: 24,
                xstyle: [
                    o("WDSMargins.stylex").wdsMargins.marginStart8,
                    f.iconColor
                ]
            })}<Component_7 type="Body2" colorName="contentDefault" testid="ctwa-data-sharing-settings-guidance" xstyle={_.marginInlineStart18}>{s._("You can always come back here to change this setting")}</Component_7></Component_8></>;
            n[22] = U;
            n[23] = V;
        } else {
            U = n[22];
            V = n[23];
        }
        let H;
        if (n[24] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            const Component_1 = r("WDSText.react");
            const Component_2 = o("WAWebFlex.react").FlexRow;
            H = <Component_2 xstyle={_.marginBottom25}><Component_1 type="Body2" colorName="contentDeemphasized" testid="ctwa-data-sharing-terms">{s._("Per Meta's {=m2}, you must comply with all applicable laws. This includes informing your customers and having permission to share data with Meta.", [
                s._implicitParam("=m2", <Component href={o("WAWebTosUrl").getMetaBizTosUrl()}>{s._("Business Tools Terms")}</Component>)
            ])}</Component_1></Component_2>;
            n[24] = H;
        } else {
            H = n[24];
        }
        let G;
        if (n[25] !== $ || n[26] !== I) {
            const Component = o("WAWebCheckBox.react").CheckBox;
            G = <span data-testid="ctwa-data-sharing-checkbox-wrapper"><Component checked={I} onChange={$} testid="data-sharing-setting-checkbox"/></span>;
            n[25] = $;
            n[26] = I;
            n[27] = G;
        } else {
            G = n[27];
        }
        let z;
        if (n[28] === Symbol.for("react.memo_cache_sentinel")) {
            z = (e || (e = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingStart24);
            n[28] = z;
        } else {
            z = n[28];
        }
        let j;
        if (n[29] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            j = <span {...babelHelpers.extends({
                "data-testid": "ctwa-data-sharing-toggle-label-wrapper"
            }, z, {
                children: <Component type="Body1" colorName="contentDefault" testid="ctwa-data-sharing-toggle-label">{h ? s._("Enable data sharing with Meta about customer-related activities") : s._("Allow Meta to receive information about events")}</Component>
            })}/>;
            n[29] = j;
        } else {
            j = n[29];
        }
        let K;
        if (n[30] !== G) {
            const Component = o("WAWebFlex.react").FlexRow;
            K = <Component align="center">{G}{j}</Component>;
            n[30] = G;
            n[31] = K;
        } else {
            K = n[31];
        }
        let Q;
        if (n[32] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            Q = h && <Component_1 xstyle={f.toggleNote} testid="ctwa-data-sharing-per-customer-note"><Component type="Body2" colorName="contentDeemphasized" testid="ctwa-data-sharing-per-customer-note">{s._("You can change this for individual customers in their contact info.")}</Component></Component_1>;
            n[32] = Q;
        } else {
            Q = n[32];
        }
        let X;
        if (n[33] !== K) {
            const Component = o("WAWebFlex.react").FlexColumn;
            X = <Component xstyle={B}>{W}{U}{V}{H}{K}{Q}</Component>;
            n[33] = K;
            n[34] = X;
        } else {
            X = n[34];
        }
        let Y;
        if (n[35] === Symbol.for("react.memo_cache_sentinel")) {
            Y = o("WAWebCTWAGatingUtils").isDownload3PDSignalsEnabled() && c.jsx(r("WAWebGroupInfoSeparator.react"), {});
            n[35] = Y;
        } else {
            Y = n[35];
        }
        let J;
        if (n[36] !== M || n[37] !== X) {
            const Component = r("WAWebDrawerSection.react");
            const Component_1 = r("WAWebDrawerBody.react");
            J = <Component_1><Component theme="expand-height" animation={false}>{X}{Y}{M}</Component></Component_1>;
            n[36] = M;
            n[37] = X;
            n[38] = J;
        } else {
            J = n[38];
        }
        let Z;
        if (n[39] !== ref || n[40] !== O || n[41] !== J) {
            const Component = r("WAWebDrawer.react");
            Z = <Component ref={ref} theme="settings" tsNavigationData={F}>{O}{J}</Component>;
            n[39] = ref;
            n[40] = O;
            n[41] = J;
            n[42] = Z;
        } else {
            Z = n[42];
        }
        return Z;
    }
    function Y15(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_isEpd = e.isEpd;
        if (o("WAWebCTWAGatingUtils").shouldShowMetaAdSourceCopy()) {
            let r;
            if (t[0] !== e_isEpd) {
                r = e_isEpd ? s._("To help your ads reach the right audience and improve Meta ads, you can share information to Meta about customer-related activities, such as message interaction data, or when an order is created, updated, or paid for.") : s._("To help your ads reach the right audience and improve Meta ads, you can share information to Meta about customer-related activities, such as when an order is created, updated, or paid for.");
                t[0] = e_isEpd;
                t[1] = r;
            } else {
                r = t[1];
            }
            return r;
        }
        let a;
        if (t[2] !== e_isEpd) {
            a = e_isEpd ? s._("To help your ads reach the right audience on Facebook and Instagram and improve Meta ads, you can share information to Meta about customer-related activities, such as message interaction data, or when an order is created, updated, or paid for.") : s._("To help your ads reach the right audience on Facebook and Instagram and improve Meta ads, you can share information to Meta about customer-related activities, such as when an order is created, updated, or paid for.");
            t[2] = e_isEpd;
            t[3] = a;
        } else {
            a = t[3];
        }
        return a;
    }
    l.default = h;
}, 226);