__d("WAWebSmbDataSharingOptInModalDialog", [
    "fbt",
    "Promise",
    "WALogger",
    "WASmaxInBizSettingsEnums",
    "WAWebABProps",
    "WAWebCTWADataSharingModel",
    "WAWebCTWAGatingUtils",
    "WAWebCommonCTWADataSharing",
    "WAWebConfirmPopup.react",
    "WAWebCtwaPerCustomerDataSharingSync",
    "WAWebDataSharing3pdLidCollection",
    "WAWebDataSharingOptInCoolOffModel",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebSMBDataSharingSettingAction",
    "WAWebSmbDataSharingConsentScreenWamEvent",
    "WAWebSpinner.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebTosUrl",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WAWebWamEnumSmbDataSharingConsentScreenType",
    "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
    "WDSIconIcAccountCircle.react",
    "WDSIconIcSettings.react",
    "WDSIconIcVisibilityOff.react",
    "WDSIllustrationWdsSmbPictoArrowsTransfer.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "compactMap",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    const p = m || (m = o("react"));
    const _ = m;
    const { useEffect, useRef, useState } = _;
    const y = {
        illustration: {
            width: "xh8yej3",
            $$css: true
        },
        centered_text: {
            textAlign: "x2b8uid",
            $$css: true
        },
        iconDescription: {
            maxWidth: "x1i5r0r9",
            $$css: true
        },
        iconColor: {
            color: "xhslqc4",
            $$css: true
        },
        iconColorNew: {
            color: "xhslqc4",
            $$css: true
        },
        spinnerWrapper: {
            height: "x1lgcfn3",
            $$css: true
        },
        marginBottom12: {
            marginBottom: "xcytdqz",
            $$css: true
        },
        marginStart24: {
            marginInlineStart: "xyxtwap",
            $$css: true
        },
        paddingTop24: {
            paddingTop: "xl7twdi",
            $$css: true
        },
        paddingBottom24: {
            paddingBottom: "xvg22vi",
            $$css: true
        }
    };
    const C = 3;
    function b() {
        return {
            viewStartTime: Date.now(),
            previousImpressionCount: o("WAWebUserPrefsGeneral").getCTWADataSharingDisclosureShownCount(),
            previousOptOutImpressionCount: o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false ? o("WAWebUserPrefsGeneral").getCTWADataSharingOptOutDisclosureShownCount() : null
        };
    }
    function v(e, t, n) {
        e.smbDataSharingConsentScreenVersion = C;
        e.elapsedTimeMs = n === o("WAWebWamEnumSmbDataSharingConsentScreenType").SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_VIEW ? 0 : Math.max(0, Date.now() - t.viewStartTime);
        e.previousImpressionCount = t.previousImpressionCount;
        if (t.previousOptOutImpressionCount != null) {
            e.previousOptOutImpressionCount = t.previousOptOutImpressionCount;
        }
    }
    const S = function() {
        const e = s._("OK");
        o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, {
            action: {
                dismiss: true,
                actionText: e
            },
            msg: s._("Error updating Data Sharing setting."),
            id: o("WAWebToast.react").genId()
        }));
    };
    const R = ()=>{
        const e = r("WAWebFbtCommon")("OK");
        o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, {
            action: {
                dismiss: true,
                actionText: e
            },
            msg: s._("Couldn't update some per-customer Data Sharing settings"),
            id: o("WAWebToast.react").genId()
        }));
    };
    const L = (n, entrypoint, a)=>{
        const t = new (o("WAWebSmbDataSharingConsentScreenWamEvent")).SmbDataSharingConsentScreenWamEvent;
        t.smbDataSharingConsentScreenVersion = 0;
        t.smbDataSharingConsentDisclosureVersion = o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled() ? o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION : o("WAWebCTWADataSharingModel").BASE_DISCLOSURE_VERSION;
        t.smbDataSharingConsentScreenType = n;
        t.smbDataSharingConsentScreenEntryPoint = entrypoint;
        if (a != null) {
            v(t, a, n);
        }
        t.commitAndWaitForFlush().catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "logDataSharingOptInInteraction: metric failed"
            ])));
        });
    };
    const E = (t, entrypoint, r)=>{
        const e = t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true ? o("WAWebWamEnumSmbDataSharingConsentScreenType").SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_AGREE : o("WAWebWamEnumSmbDataSharingConsentScreenType").SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_DISAGREE;
        const a = t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true && o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled() ? o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION : undefined;
        return o("WAWebSMBDataSharingSettingAction").setSMBDataSharingSettingAction(t, a).then(()=>L(e, entrypoint, r)).catch(S);
    };
    function maybeShowOrderDataSharingDialog(e, t, n) {
        if (!o("WAWebCommonCTWADataSharing").shouldShowOrderDataSharingDialog(e)) {
            return t();
        }
        o("WAWebModalManager").ModalManager.open(<W1Component entrypoint={n} callback={t} chats={[
            e
        ]}/>);
    }
    function maybeShowLabelDataSharingDialog({ cb, chats, entrypoint, target }) {
        const i = chats.some((e)=>o("WAWebCommonCTWADataSharing").shouldShowLabelDataSharingDialog(e, target));
        if (!i) {
            return cb();
        }
        o("WAWebModalManager").ModalManager.open(<W1Component entrypoint={entrypoint} callback={cb} chats={chats}/>);
    }
    function maybeShowChatEntryDataSharingDialog(e, t, n) {
        if (!o("WAWebCommonCTWADataSharing").shouldShowChatEntryDataSharingDialog(e)) {
            return t();
        }
        o("WAWebModalManager").ModalManager.open(<W1Component entrypoint={n} callback={t} chats={[
            e
        ]}/>);
    }
    function maybeShowListsManagementDataSharingDialog(e) {
        if (!o("WAWebCommonCTWADataSharing").shouldShowListsManagementDataSharingDialog()) {
            return e();
        }
        o("WAWebModalManager").ModalManager.open(<W1Component entrypoint={o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LISTS_MANAGEMENT} callback={e}/>);
    }
    function X16(e) {
        const t = o("react-compiler-runtime").c(40);
        const { isEpd, useNewLayout } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                y.paddingTop24,
                y.paddingBottom24,
                y.illustration
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexRow;
            l = <Component xstyle={i} justify="center">{p.jsx(r("WDSIllustrationWdsSmbPictoArrowsTransfer.react"), {
                testid: "wds-smb-picto-arrows-transfer"
            })}</Component>;
            t[1] = l;
        } else {
            l = t[1];
        }
        const u = useNewLayout ? "center" : undefined;
        let c;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            c = o("WAWebABProps").getABPropConfigValue("ctwa_3pd_data_sharing_title_change") ? s._("Improve your ads by sharing customer-related activities") : s._("Share customer-related activities to help improve your ads");
            t[2] = c;
        } else {
            c = t[2];
        }
        let d;
        if (t[3] !== u) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            d = <Component_1><Component type="Headline2" colorName="contentDefault" testid="ctwa-data-sharing-opt-in-title" textAlign={u} xstyle={y.marginBottom12}>{c}</Component></Component_1>;
            t[3] = u;
            t[4] = d;
        } else {
            d = t[4];
        }
        const m = useNewLayout ? "contentDeemphasized" : "contentDefault";
        const _ = useNewLayout ? "center" : undefined;
        let f;
        if (t[5] !== isEpd) {
            f = <$ isEpd={isEpd}/>;
            t[5] = isEpd;
            t[6] = f;
        } else {
            f = t[6];
        }
        let g;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            g = <Component href={o("WAWebTosUrl").getBizDataSharingHcaUrl()}>{s._("Learn more")}</Component>;
            t[7] = g;
        } else {
            g = t[7];
        }
        let h;
        if (t[8] !== m || t[9] !== _ || t[10] !== f) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            h = <Component_1 xstyle={y.marginBottom12}><Component type="Body1" colorName={m} testid="ctwa-data-sharing-opt-in-description" textAlign={_}>{f} {g}</Component></Component_1>;
            t[8] = m;
            t[9] = _;
            t[10] = f;
            t[11] = h;
        } else {
            h = t[11];
        }
        const C = useNewLayout ? y.iconColorNew : y.iconColor;
        let b;
        if (t[12] !== C) {
            b = p.jsx(r("WDSIconIcVisibilityOff.react"), {
                height: 22,
                width: 22,
                xstyle: C
            });
            t[12] = C;
            t[13] = b;
        } else {
            b = t[13];
        }
        let v;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
            v = [
                y.marginStart24,
                y.iconDescription
            ];
            t[14] = v;
        } else {
            v = t[14];
        }
        let S;
        if (t[15] !== useNewLayout) {
            const Component = r("WDSText.react");
            S = <Component type="Body1" colorName="contentDefault" testid="ctwa-data-sharing-opt-in-content-exclusion" xstyle={v}>{useNewLayout ? s._("Message and call content is not shared.") : s._("Message and call content is not shared")}</Component>;
            t[15] = useNewLayout;
            t[16] = S;
        } else {
            S = t[16];
        }
        let R;
        if (t[17] !== b || t[18] !== S) {
            const Component = o("WAWebFlex.react").FlexRow;
            R = <Component align="center" xstyle={y.marginBottom12}>{b}{S}</Component>;
            t[17] = b;
            t[18] = S;
            t[19] = R;
        } else {
            R = t[19];
        }
        const L = useNewLayout ? y.iconColorNew : y.iconColor;
        let E;
        if (t[20] !== L) {
            E = p.jsx(r("WDSIconIcSettings.react"), {
                xstyle: L
            });
            t[20] = L;
            t[21] = E;
        } else {
            E = t[21];
        }
        let k;
        if (t[22] === Symbol.for("react.memo_cache_sentinel")) {
            k = [
                y.marginStart24,
                y.iconDescription
            ];
            t[22] = k;
        } else {
            k = t[22];
        }
        let I;
        if (t[23] !== useNewLayout) {
            const Component = r("WDSText.react");
            I = <Component type="Body1" colorName="contentDefault" testid="ctwa-data-sharing-opt-in-settings-guidance" xstyle={k}>{s._("You can always change this in the {settingsType}", [
                s._param("settingsType", useNewLayout ? "Data Sharing Settings." : "Ads Data Sharing Settings")
            ])}</Component>;
            t[23] = useNewLayout;
            t[24] = I;
        } else {
            I = t[24];
        }
        let T;
        if (t[25] !== E || t[26] !== I) {
            const Component = o("WAWebFlex.react").FlexRow;
            T = <Component align="center" xstyle={y.marginBottom12}>{E}{I}</Component>;
            t[25] = E;
            t[26] = I;
            t[27] = T;
        } else {
            T = t[27];
        }
        let D;
        if (t[28] !== useNewLayout) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            D = useNewLayout && <Component_1 align="center" xstyle={y.marginBottom12}>{p.jsx(r("WDSIconIcAccountCircle.react"), {
                xstyle: y.iconColorNew
            })}<Component type="Body1" colorName="contentDefault" testid="ctwa-data-sharing-opt-in-individual-guidance" xstyle={[
                y.marginStart24,
                y.iconDescription
            ]}>{s._("You can change this for individual customers in their contact info.")}</Component></Component_1>;
            t[28] = useNewLayout;
            t[29] = D;
        } else {
            D = t[29];
        }
        const x = useNewLayout && y.centered_text;
        let P;
        if (t[30] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            P = s._("Per Meta's {=m1}, you must comply with all applicable laws. This includes informing your customers and having permission to share data with Meta.", [
                s._implicitParam("=m1", <Component href={o("WAWebTosUrl").getMetaBizTosUrl()}>{s._("Business Tools Terms")}</Component>)
            ]);
            t[30] = P;
        } else {
            P = t[30];
        }
        let N;
        if (t[31] !== x) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            N = <Component_1><Component type="Body2" colorName="contentDeemphasized" xstyle={x}>{P}</Component></Component_1>;
            t[31] = x;
            t[32] = N;
        } else {
            N = t[32];
        }
        let M;
        if (t[33] !== h || t[34] !== R || t[35] !== T || t[36] !== D || t[37] !== N || t[38] !== d) {
            const Component = o("WAWebFlex.react").FlexColumn;
            M = <Component>{l}{d}{h}{R}{T}{D}{N}</Component>;
            t[33] = h;
            t[34] = R;
            t[35] = T;
            t[36] = D;
            t[37] = N;
            t[38] = d;
            t[39] = M;
        } else {
            M = t[39];
        }
        return M;
    }
    function $(e) {
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
    const P = function() {
        const Component = o("WAWebFlex.react").FlexColumn;
        return <Component align="center" justify="center" xstyle={y.spinnerWrapper}>{p.jsx(o("WAWebSpinner.react").Spinner, {
            color: "default",
            size: 48,
            stroke: 6
        })}</Component>;
    };
    const N = (entrypoint, n)=>{
        const e = new (o("WAWebSmbDataSharingConsentScreenWamEvent")).SmbDataSharingConsentScreenWamEvent;
        e.smbDataSharingConsentScreenVersion = 0;
        e.smbDataSharingConsentDisclosureVersion = o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled() ? o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION : o("WAWebCTWADataSharingModel").BASE_DISCLOSURE_VERSION;
        e.smbDataSharingConsentScreenType = o("WAWebWamEnumSmbDataSharingConsentScreenType").SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_VIEW;
        e.smbDataSharingConsentScreenEntryPoint = entrypoint;
        if (n != null) {
            v(e, n, o("WAWebWamEnumSmbDataSharingConsentScreenType").SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_VIEW);
        }
        e.commitAndWaitForFlush().catch((e)=>{
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "logModalDialogView: metric failed"
            ])));
        });
    };
    function M(callback, entrypoint, n) {
        L(o("WAWebWamEnumSmbDataSharingConsentScreenType").SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_CANCEL, entrypoint, n);
        o("WAWebDataSharingOptInCoolOffModel").DataSharingOptInCoolOffModel.startCoolOff();
        o("WAWebModalManager").ModalManager.close();
        callback();
    }
    function W1Component(e) {
        const t = o("react-compiler-runtime").c(28);
        const { callback, chats, entrypoint } = e;
        const u = useState(false);
        const m = u[0];
        const _ = u[1];
        let y;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            y = o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled();
            t[0] = y;
        } else {
            y = t[0];
        }
        const C = y;
        let v;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            v = o("WAWebCTWAGatingUtils").isPerCustomerDataSharingControlsEnabled() || C;
            t[1] = v;
        } else {
            v = t[1];
        }
        const useNewLayout = v;
        const kRef = useRef(null);
        let I;
        let T;
        if (t[2] !== entrypoint) {
            I = function() {
                const e = o("WAWebABProps").getABPropConfigValue("ctwa_3pd_data_sharing_additional_logging") ? b() : null;
                kRef.current = e;
                const t = o("WAWebUserPrefsGeneral").getCTWADataSharingDisclosureShownCount();
                o("WAWebUserPrefsGeneral").setCTWADataSharingDisclosureShownCount(t + 1);
                if (o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false && o("WAWebCTWAGatingUtils").isCTWA3pdOptOutCounterOptimizationEnabled()) {
                    const n = o("WAWebUserPrefsGeneral").getCTWADataSharingOptOutDisclosureShownCount();
                    o("WAWebUserPrefsGeneral").setCTWADataSharingOptOutDisclosureShownCount(n + 1);
                }
                N(entrypoint, e);
                o("WAWebCommonCTWADataSharing").markV2DisclosureSeen();
            };
            T = [
                entrypoint
            ];
            t[2] = entrypoint;
            t[3] = I;
            t[4] = T;
        } else {
            I = t[3];
            T = t[4];
        }
        useEffect(I, T);
        let D;
        if (t[5] !== callback || t[6] !== chats || t[7] !== entrypoint) {
            D = function(t) {
                const e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false;
                _(true);
                E(t, entrypoint, kRef.current).then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true && chats != null && chats.length > 0) {
                        const s = r("compactMap")(chats, O);
                        const u = s.filter(F);
                        const m = u.map((e)=>r("WAWebCtwaPerCustomerDataSharingSync").sendPerCustomerDataSharingUpdate({
                                accountLid: e,
                                entryPoint: o("WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT.SMB_DATA_SHARING_CONSENT_SCREEN,
                                globalDataSharingEntryPoint: entrypoint,
                                isEnabled: true
                            }));
                        const p = yield (d || (d = n("Promise"))).allSettled(m);
                        const _ = p.some(A);
                        if (_) {
                            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "Per-customer data sharing opt-in failed"
                            ]))).sendLogs("ctwa-per-customer-opt-in-fail");
                            R();
                        }
                    } else {
                        if (t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false) {
                            if (!e && o("WAWebCTWAGatingUtils").isCTWA3pdOptOutCounterOptimizationEnabled()) {
                                o("WAWebUserPrefsGeneral").setCTWADataSharingOptOutDisclosureShownCount(0);
                            }
                            o("WAWebDataSharingOptInCoolOffModel").DataSharingOptInCoolOffModel.startCoolOff();
                        }
                    }
                    o("WAWebModalManager").ModalManager.close();
                    callback();
                })).catch(S);
            };
            t[5] = callback;
            t[6] = chats;
            t[7] = entrypoint;
            t[8] = D;
        } else {
            D = t[8];
        }
        const $ = D;
        let w;
        if (t[9] !== $) {
            w = function() {
                return $(o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true);
            };
            t[9] = $;
            t[10] = w;
        } else {
            w = t[10];
        }
        const B = w;
        let W;
        if (t[11] !== $) {
            W = function() {
                return $(o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false);
            };
            t[11] = $;
            t[12] = W;
        } else {
            W = t[12];
        }
        const q = W;
        let U;
        if (t[13] !== callback || t[14] !== entrypoint) {
            U = function() {
                M(callback, entrypoint, kRef.current);
            };
            t[13] = callback;
            t[14] = entrypoint;
            t[15] = U;
        } else {
            U = t[15];
        }
        const onOverlayClick = U;
        let H;
        if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
            H = s._("Enable");
            t[16] = H;
        } else {
            H = t[16];
        }
        const G = H;
        let z;
        if (t[17] === Symbol.for("react.memo_cache_sentinel")) {
            z = s._("Allow");
            t[17] = z;
        } else {
            z = t[17];
        }
        const j = z;
        let K;
        if (t[18] === Symbol.for("react.memo_cache_sentinel")) {
            K = s._("Don't enable");
            t[18] = K;
        } else {
            K = t[18];
        }
        const Q = K;
        let X;
        if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
            X = s._("Don't allow");
            t[19] = X;
        } else {
            X = t[19];
        }
        const Y = X;
        let J;
        if (t[20] !== m) {
            J = m ? <P/> : <X16 useNewLayout={useNewLayout} isEpd={C}/>;
            t[20] = m;
            t[21] = J;
        } else {
            J = t[21];
        }
        let Z;
        if (t[22] !== q || t[23] !== onOverlayClick || t[24] !== B || t[25] !== m || t[26] !== J) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            Z = <Component testid="ctwa-business-data-sharing-modal-dialog" buttonsDirection="horizontal" type={o("WAWebModal.react").ModalTheme.DataSharing} onOK={B} okDisabled={m} cancelDisabled={m} okText={useNewLayout ? G : j} onCancel={q} onOverlayClick={onOverlayClick} cancelText={useNewLayout ? Q : Y}>{J}</Component>;
            t[22] = q;
            t[23] = onOverlayClick;
            t[24] = B;
            t[25] = m;
            t[26] = J;
            t[27] = Z;
        } else {
            Z = t[27];
        }
        return Z;
    }
    function A(e) {
        return e.status === "rejected";
    }
    function F(e) {
        return !o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.isDataSharingEnabled(e.toString());
    }
    function O(e) {
        return e.accountLid;
    }
    const B = {
        maybeShowOrderDataSharingDialog,
        maybeShowLabelDataSharingDialog,
        maybeShowChatEntryDataSharingDialog,
        maybeShowListsManagementDataSharingDialog,
        SmbDataSharingOptInModalDialog: W1Component
    };
    l.default = B;
}, 226);