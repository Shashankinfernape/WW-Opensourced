__d("WAWebSmbPerCustomerDataSharingOptInModal", [
    "fbt",
    "Promise",
    "WAWebCTWAGatingUtils",
    "WAWebConfirmPopup.react",
    "WAWebCtwaPerCustomerDataSharingSync",
    "WAWebDataSharing3pdLidCollection",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebPerCustomerDataSharingControlLogging",
    "WAWebSpinner.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebTosUrl",
    "WAWebWamEnumSmbPerCustomerDataSharingControlAction",
    "WAWebWidFactory",
    "WDSIconIcAccountCircle.react",
    "WDSIconIcSettings.react",
    "WDSIconIcVisibilityOff.react",
    "WDSIllustrationWdsSmbPictoArrowsTransfer.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useState } = d;
    const _ = false;
    function f(e) {
        o("WAWebPerCustomerDataSharingControlLogging").logPerCustomerDataSharingControlEvent({
            action: e.action,
            actionOptInStatus: e.actionOptInStatus,
            currentOptInStatus: _,
            entryPoint: e.entryPoint
        });
    }
    function useG(entryPoint) {
        const t = o("react-compiler-runtime").c(3);
        let n;
        let r;
        if (t[0] !== entryPoint) {
            n = function() {
                f({
                    action: o("WAWebWamEnumSmbPerCustomerDataSharingControlAction").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION.CONSENT_SCREEN_VIEW,
                    entryPoint
                });
            };
            r = [
                entryPoint
            ];
            t[0] = entryPoint;
            t[1] = n;
            t[2] = r;
        } else {
            n = t[1];
            r = t[2];
        }
        useEffect(n, r);
    }
    const h = {
        illustration: {
            width: "xh8yej3",
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
    const y = ()=>{
        const e = s._("OK");
        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
            action: {
                dismiss: true,
                actionText: e
            },
            msg: s._("Error updating Data Sharing setting."),
            id: o("WAWebToast.react").genId()
        }));
    };
    function CComponent() {
        const e = o("react-compiler-runtime").c(11);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = [
                h.paddingTop24,
                h.paddingBottom24,
                h.illustration
            ];
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexRow;
            n = <Component xstyle={t} justify="center">{c.jsx(r("WDSIllustrationWdsSmbPictoArrowsTransfer.react"), {
                testid: "wds-smb-picto-arrows-transfer"
            })}</Component>;
            e[1] = n;
        } else {
            n = e[1];
        }
        let a;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            a = <Component_1><Component type="Headline2" colorName="contentDefault" testid="ctwa-per-customer-sharing-opt-in-title" textAlign="center" xstyle={h.marginBottom12}>{s._("Start sharing data for this customer?")}</Component></Component_1>;
            e[2] = a;
        } else {
            a = e[2];
        }
        let i;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            i = o("WAWebCTWAGatingUtils").shouldShowMetaAdSourceCopy() ? s._("Sharing information to Meta about customer-related activities can help your ads reach the right audience and improve Meta ads.") : s._("Sharing information to Meta about customer-related activities can help your ads reach the right audience on Facebook and Instagram and improve Meta ads.");
            e[3] = i;
        } else {
            i = e[3];
        }
        let l;
        if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            const Component_1 = r("WDSText.react");
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            l = <Component_2 xstyle={h.marginBottom12}><Component_1 type="Body1" colorName="contentDeemphasized" testid="ctwa-per-customer-sharing-opt-in-description">{i} <Component href={o("WAWebTosUrl").getBizDataSharingHcaUrl()}>{s._("Learn more")}</Component></Component_1></Component_2>;
            e[4] = l;
        } else {
            l = e[4];
        }
        let u;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
            u = c.jsx(r("WDSIconIcVisibilityOff.react"), {
                height: 22,
                width: 22,
                xstyle: h.iconColor
            });
            e[5] = u;
        } else {
            u = e[5];
        }
        let d;
        if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            d = <Component_1 align="center" xstyle={h.marginBottom12}>{u}<Component type="Body1" colorName="contentDefault" testid="ctwa-per-customer-sharing-opt-in-content-exclusion" xstyle={[
                h.marginStart24,
                h.iconDescription
            ]}>{s._("Message and call content is not shared.")}</Component></Component_1>;
            e[6] = d;
        } else {
            d = e[6];
        }
        let m;
        if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
            m = c.jsx(r("WDSIconIcSettings.react"), {
                xstyle: h.iconColor
            });
            e[7] = m;
        } else {
            m = e[7];
        }
        let p;
        if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            p = <Component_1 align="center" xstyle={h.marginBottom12}>{m}<Component type="Body1" colorName="contentDefault" testid="ctwa-per-customer-sharing-opt-in-settings-guidance" xstyle={[
                h.marginStart24,
                h.iconDescription
            ]}>{s._("You can always change this in the Data Sharing Settings.")}</Component></Component_1>;
            e[8] = p;
        } else {
            p = e[8];
        }
        let _;
        if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
            _ = c.jsx(r("WDSIconIcAccountCircle.react"), {
                xstyle: h.iconColor
            });
            e[9] = _;
        } else {
            _ = e[9];
        }
        let f;
        if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            f = <Component_2>{n}{a}{l}{d}{p}<Component_1 align="center" xstyle={h.marginBottom12}>{_}<Component type="Body1" colorName="contentDefault" testid="ctwa-per-customer-sharing-opt-in-individual-guidance" xstyle={[
                h.marginStart24,
                h.iconDescription
            ]}>{s._("You can change this for individual customers in their contact info.")}</Component></Component_1></Component_2>;
            e[10] = f;
        } else {
            f = e[10];
        }
        return f;
    }
    const B1Component = function() {
        const Component = o("WAWebFlex.react").FlexColumn;
        return <Component align="center" justify="center" xstyle={h.spinnerWrapper}>{c.jsx(o("WAWebSpinner.react").Spinner, {
            color: "default",
            size: 48,
            stroke: 6
        })}</Component>;
    };
    function VComponent(t) {
        const a = o("react-compiler-runtime").c(14);
        const { accountLids, entryPoint } = t;
        const u = useState(false);
        const d = u[0];
        const m = u[1];
        useG(entryPoint);
        let h;
        if (a[0] !== accountLids || a[1] !== entryPoint) {
            h = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    m(true);
                    const t = accountLids.map(L).filter(R);
                    const a = yield (e || (e = n("Promise"))).allSettled(t.map((e)=>r("WAWebCtwaPerCustomerDataSharingSync").sendPerCustomerDataSharingUpdate({
                            accountLid: e,
                            entryPoint,
                            isEnabled: true
                        })));
                    const s = a.every(S);
                    if (!s) {
                        y();
                    }
                    m(false);
                    o("WAWebModalManager").ModalManager.close();
                });
                return function() {
                    return t.apply(this, arguments);
                };
            })();
            a[0] = accountLids;
            a[1] = entryPoint;
            a[2] = h;
        } else {
            h = a[2];
        }
        const v = h;
        let E;
        if (a[3] !== entryPoint) {
            E = function() {
                f({
                    action: o("WAWebWamEnumSmbPerCustomerDataSharingControlAction").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION.CONSENT_SCREEN_CANCEL,
                    actionOptInStatus: _,
                    entryPoint
                });
                o("WAWebModalManager").closeModalManager();
            };
            a[3] = entryPoint;
            a[4] = E;
        } else {
            E = a[4];
        }
        const k = E;
        let I;
        if (a[5] === Symbol.for("react.memo_cache_sentinel")) {
            I = s._("Enable");
            a[5] = I;
        } else {
            I = a[5];
        }
        let T;
        if (a[6] === Symbol.for("react.memo_cache_sentinel")) {
            T = s._("Don't enable");
            a[6] = T;
        } else {
            T = a[6];
        }
        let D;
        if (a[7] !== d) {
            D = d ? <B1Component/> : <CComponent/>;
            a[7] = d;
            a[8] = D;
        } else {
            D = a[8];
        }
        let x;
        if (a[9] !== k || a[10] !== v || a[11] !== d || a[12] !== D) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            x = <Component testid="ctwa-business-per-customer-data-sharing-opt-in-modal" buttonsDirection="horizontal" type={o("WAWebModal.react").ModalTheme.DataSharing} onOK={v} okDisabled={d} cancelDisabled={d} okText={I} onCancel={k} onOverlayClick={k} cancelText={T}>{D}</Component>;
            a[9] = k;
            a[10] = v;
            a[11] = d;
            a[12] = D;
            a[13] = x;
        } else {
            x = a[13];
        }
        return x;
    }
    function S(e) {
        return e.status === "fulfilled";
    }
    function R(e) {
        return !o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.isDataSharingEnabled(e.toString());
    }
    function L(e) {
        return o("WAWebWidFactory").createUserLidOrThrow(e);
    }
    l.default = VComponent;
}, 226);