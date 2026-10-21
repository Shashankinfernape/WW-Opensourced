__d("WAWebPaymentRequestHeader.react", [
    "fbt",
    "WAWebBrPaymentRequest",
    "WAWebMastercardLogoIcon.react",
    "WAWebMsgGetters",
    "WAWebPaymentBoletoLogoIcon.react",
    "WAWebPaymentLogoPixIcon.react",
    "WAWebPaymentPayWithRow.react",
    "WAWebPaymentVisaLogoIcon.react",
    "WAWebThemeContext",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        payWithRow: {
            alignItems: "x6s0dn4",
            backgroundColor: "x1bu39yj",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            paddingBottom: "x12xbjc7",
            $$css: true
        },
        paywithIcon: {
            borderTopColor: "xnj1f2r",
            borderInlineEndColor: "x2uibgs",
            borderBottomColor: "xkveyfu",
            borderInlineStartColor: "x12llq9",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            verticalAlign: "xxymvpz",
            width: "x1xp8n7a",
            height: "xlup9mm",
            $$css: true
        },
        iconDarkBackground: {
            backgroundColor: "xb1i3fl",
            $$css: true
        },
        marginStart4: {
            marginInlineStart: "x1wbi8v6",
            $$css: true
        },
        paddingAll4: {
            paddingTop: "x1tiyuxx",
            paddingInlineEnd: "x1uc92m",
            paddingBottom: "x1nbhmlj",
            paddingInlineStart: "x181vq82",
            $$css: true
        },
        payWithLabel: {
            paddingInlineStart: "x12w63v0",
            $$css: true
        },
        payWithIcons: {
            paddingInlineEnd: "x1nzty39",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(13);
        const e_msgKey = e.msgKey;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let i;
            a = [
                (i = o("WAWebMsgGetters")).getInteractivePayload,
                i.getInteractiveType,
                i.getNativeFlowName,
                i.getType
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const l = o("useWAWebMsgValues").useMsgValues(e_msgKey, a);
        const d = l[0];
        const p = l[1];
        const _ = l[2];
        const f = l[3];
        let g;
        let h;
        if (t[1] !== d || t[2] !== p || t[3] !== _ || t[4] !== f) {
            h = Symbol.for("react.early_return_sentinel");
            e: {
                const y = o("WAWebBrPaymentRequest").getPaymentRequestInfoFor({
                    interactivePayload: d,
                    interactiveType: p,
                    nativeFlowName: _,
                    type: f
                });
                if (y == null) {
                    h = null;
                    break e;
                }
                const C = y.filter(m);
                if (C.length === 0) {
                    h = null;
                    break e;
                }
                let b;
                if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
                    b = o("WAWebThemeContext").isDarkTheme();
                    t[7] = b;
                } else {
                    b = t[7];
                }
                const v = b;
                let S;
                if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
                    S = [
                        c.paywithIcon,
                        c.paddingAll4,
                        c.marginStart4,
                        v && c.iconDarkBackground
                    ];
                    t[8] = S;
                } else {
                    S = t[8];
                }
                const R = S;
                let L;
                if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
                    L = function(t) {
                        if (t.paymentType === o("WAWebBrPaymentRequest").PaymentRequestCtaType.BOLETO) {
                            return u.jsx(o("WAWebPaymentBoletoLogoIcon.react").PaymentBoletoLogoIcon, {
                                iconXstyle: R
                            });
                        }
                        if (t.paymentType === o("WAWebBrPaymentRequest").PaymentRequestCtaType.PIX_DYNAMIC_CODE) {
                            return u.jsx(o("WAWebPaymentLogoPixIcon.react").PaymentLogoPixIcon, {
                                iconXstyle: R
                            });
                        }
                        if (t.paymentType === o("WAWebBrPaymentRequest").PaymentRequestCtaType.PAYMENT_LINK) {
                            return <>{u.jsx(o("WAWebPaymentVisaLogoIcon.react").PaymentVisaLogoIcon, {
                                iconXstyle: R
                            })}{u.jsx(o("WAWebMastercardLogoIcon.react").MastercardLogoIcon, {
                                iconXstyle: R
                            })}</>;
                        }
                        if (t.paymentType === o("WAWebBrPaymentRequest").PaymentRequestCtaType.OFFSITE_CARD_PAY) {
                            return null;
                        }
                        return (()=>{
                            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t.paymentType}`);
                        })();
                    };
                    t[9] = L;
                } else {
                    L = t[9];
                }
                g = C.map(L);
            }
            t[1] = d;
            t[2] = p;
            t[3] = _;
            t[4] = f;
            t[5] = g;
            t[6] = h;
        } else {
            g = t[5];
            h = t[6];
        }
        if (h !== Symbol.for("react.early_return_sentinel")) {
            return h;
        }
        const E = g;
        let k;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            k = s._("Pay with");
            t[10] = k;
        } else {
            k = t[10];
        }
        let I;
        if (t[11] !== E) {
            const Component = r("WAWebPaymentPayWithRow.react");
            I = <Component childrenXstyle={c.payWithIcons} label={k} labelXstyle={c.payWithLabel} testid="payment-request-pay-with-row" xstyle={c.payWithRow}>{E}</Component>;
            t[11] = E;
            t[12] = I;
        } else {
            I = t[12];
        }
        return I;
    }
    function m(e) {
        return e.paymentType !== o("WAWebBrPaymentRequest").PaymentRequestCtaType.OFFSITE_CARD_PAY;
    }
    l.default = d;
}, 226);