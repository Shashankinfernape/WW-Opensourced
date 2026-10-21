__d("WAWebSmbPerCustomerDataSharingOptOutModal", [
    "fbt",
    "WAWebCTWAGatingUtils",
    "WAWebConfirmPopup.react",
    "WAWebCtwaPerCustomerDataSharingSync",
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
    "WDSIllustrationWdsSmbPictoArrowsTransfer.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useEffect, useState } = c;
    const p = true;
    function _(e) {
        o("WAWebPerCustomerDataSharingControlLogging").logPerCustomerDataSharingControlEvent({
            action: e.action,
            actionOptInStatus: e.actionOptInStatus,
            currentOptInStatus: p,
            entryPoint: e.entryPoint
        });
    }
    function useF(entryPoint) {
        const t = o("react-compiler-runtime").c(3);
        let n;
        let r;
        if (t[0] !== entryPoint) {
            n = function() {
                _({
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
    const g = ()=>{
        const e = s._("OK");
        o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
            action: {
                dismiss: true,
                actionText: e
            },
            msg: s._("Error updating Data Sharing setting."),
            id: o("WAWebToast.react").genId()
        }));
    };
    const h = {
        illustration: {
            width: "xh8yej3",
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
        paddingTop24: {
            paddingTop: "xl7twdi",
            $$css: true
        },
        paddingBottom24: {
            paddingBottom: "xvg22vi",
            $$css: true
        }
    };
    function Y1Component() {
        const e = o("react-compiler-runtime").c(5);
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
            n = <Component xstyle={t} justify="center">{u.jsx(r("WDSIllustrationWdsSmbPictoArrowsTransfer.react"), {
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
            a = <Component_1><Component type="Headline2" colorName="contentDefault" testid="ctwa-per-customer-sharing-opt-out-title" textAlign="center" xstyle={h.marginBottom12}>{s._("Stop sharing data for this customer?")}</Component></Component_1>;
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
            const Component_3 = o("WAWebFlex.react").FlexColumn;
            l = <Component_3>{n}{a}<Component_2 xstyle={h.marginBottom12}><Component_1 type="Body1" colorName="contentDeemphasized" testid="ctwa-per-customer-sharing-opt-out-description">{i} <Component href={o("WAWebTosUrl").getBizDataSharingHcaUrl()}>{s._("Learn more")}</Component></Component_1></Component_2></Component_3>;
            e[4] = l;
        } else {
            l = e[4];
        }
        return l;
    }
    const CComponent = function() {
        const Component = o("WAWebFlex.react").FlexColumn;
        return <Component align="center" justify="center" xstyle={h.spinnerWrapper}>{u.jsx(o("WAWebSpinner.react").Spinner, {
            color: "default",
            size: 48,
            stroke: 6
        })}</Component>;
    };
    function BComponent({ accountLid, entryPoint }) {
        const i = useState(false);
        const l = i[0];
        const c = i[1];
        useF(entryPoint);
        const d = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                c(true);
                try {
                    const e = o("WAWebWidFactory").createUserLidOrThrow(accountLid);
                    yield r("WAWebCtwaPerCustomerDataSharingSync").sendPerCustomerDataSharingUpdate({
                        accountLid: e,
                        entryPoint,
                        isEnabled: false
                    });
                } catch (e) {
                    g();
                } finally{
                    c(false);
                    o("WAWebModalManager").ModalManager.close();
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const h = function() {
            _({
                action: o("WAWebWamEnumSmbPerCustomerDataSharingControlAction").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION.CONSENT_SCREEN_CANCEL,
                actionOptInStatus: p,
                entryPoint
            });
            o("WAWebModalManager").ModalManager.close();
        };
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component testid="ctwa-business-per-customer-data-sharing-opt-out-modal" buttonsDirection="horizontal" type={o("WAWebModal.react").ModalTheme.DataSharing} onOK={d} okDisabled={l} cancelDisabled={l} okText={s._("Stop sharing")} onCancel={h} onOverlayClick={h} cancelText={s._("Continue sharing")}>{l ? <CComponent/> : <Y1Component/>}</Component>;
    }
    BComponent.displayName = `${BComponent.name} [from ${i.id}]`;
    l.default = BComponent;
}, 226);