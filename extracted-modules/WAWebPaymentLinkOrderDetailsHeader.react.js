__d("WAWebPaymentLinkOrderDetailsHeader.react", [
    "fbt",
    "WAWebFlex.react",
    "WAWebMastercardLogoIcon.react",
    "WAWebMediaLinkPreviewContainer.react",
    "WAWebPaymentAmountDisplay.react",
    "WAWebPaymentVisaLogoIcon.react",
    "WDSIconIcLink.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = {
        header: {
            boxSizing: "x9f619",
            borderStartStartRadius: "x1i282gy",
            borderStartEndRadius: "xx9ypkp",
            borderEndEndRadius: "xd15eu0",
            borderEndStartRadius: "x11ecxm0",
            marginTop: "xfl633f",
            marginBottom: "xefnzgg",
            marginInlineStart: "x1sbwfh8",
            marginInlineEnd: "x16q7b9a",
            marginLeft: null,
            marginRight: null,
            paddingBottom: "xwib8y2",
            $$css: true
        },
        bubbleIn: {
            backgroundColor: "x6egj2d",
            $$css: true
        },
        bubbleOut: {
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        subdomainRow: {
            marginTop: "x9otpla",
            $$css: true
        },
        subdomainText: {
            fontSize: "x1pg5gke",
            color: "xhslqc4",
            paddingInlineStart: "x135b78x",
            $$css: true
        },
        payWithRow: {
            width: "xh8yej3",
            paddingTop: "x1yrsyyn",
            paddingBottom: "x18d9i69",
            $$css: true
        },
        payWithText: {
            fontWeight: "xk50ysn",
            fontSize: "x1f6kntn",
            $$css: true
        },
        iconsContainer: {
            flexGrow: "x1iyjqo2",
            justifyContent: "x13a6bvl",
            alignSelf: "xpvyfi4",
            $$css: true
        },
        linkIconSmall: {
            width: "x6jxa94",
            height: "x1v9usgg",
            color: "xhslqc4",
            $$css: true
        },
        cardBrandIcon: {
            marginInlineStart: "xdwrcjd",
            marginTop: "x1gslohp",
            backgroundColor: "x1p8t8ri",
            width: "x1849jeq",
            height: "xxk0z11",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "x1ekq09l",
            borderInlineEndColor: "xlmuga0",
            borderBottomColor: "x54tcbp",
            borderInlineStartColor: "xlzwp1d",
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(21);
        const { isSentByMe, matchedText, onClick, parsedAmount } = e;
        const d = isSentByMe ? c.bubbleOut : c.bubbleIn;
        let m;
        if (t[0] !== d) {
            m = [
                c.header,
                d
            ];
            t[0] = d;
            t[1] = m;
        } else {
            m = t[1];
        }
        let p;
        if (t[2] !== parsedAmount.amount1000 || t[3] !== parsedAmount.currency) {
            p = u.jsx(r("WAWebPaymentAmountDisplay.react"), {
                amount1000: parsedAmount.amount1000,
                currency: parsedAmount.currency
            });
            t[2] = parsedAmount.amount1000;
            t[3] = parsedAmount.currency;
            t[4] = p;
        } else {
            p = t[4];
        }
        let _;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            _ = [
                o("WDSPaddings.stylex").wdsPaddings.paddingBottom8,
                o("WDSPaddings.stylex").wdsPaddings.paddingHor8
            ];
            t[5] = _;
        } else {
            _ = t[5];
        }
        let f;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexRow;
            f = <Component xstyle={c.payWithText}>{s._("Pay with")}</Component>;
            t[6] = f;
        } else {
            f = t[6];
        }
        let g;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            g = u.jsx(o("WAWebPaymentVisaLogoIcon.react").PaymentVisaLogoIcon, {
                iconXstyle: c.cardBrandIcon,
                viewBox: {
                    x: 0,
                    y: 5,
                    width: 24,
                    height: 14
                }
            });
            t[7] = g;
        } else {
            g = t[7];
        }
        let h;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexRow;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            h = <Component_1 xstyle={c.payWithRow} align="center" testid="payment-link-order-preview-pay-with-row">{f}<Component xstyle={c.iconsContainer}>{g}{u.jsx(o("WAWebMastercardLogoIcon.react").MastercardLogoIcon, {
                iconXstyle: c.cardBrandIcon,
                viewBox: {
                    x: -2,
                    y: -1.5,
                    width: 26,
                    height: 16
                }
            })}</Component></Component_1>;
            t[8] = h;
        } else {
            h = t[8];
        }
        let y;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            y = u.jsx(r("WDSIconIcLink.react"), {
                testid: "ic-link-subdomain",
                iconXstyle: c.linkIconSmall
            });
            t[9] = y;
        } else {
            y = t[9];
        }
        let C;
        if (t[10] !== matchedText) {
            C = o("WAWebMediaLinkPreviewContainer.react").getHostnameForUrl(matchedText);
            t[10] = matchedText;
            t[11] = C;
        } else {
            C = t[11];
        }
        let b;
        if (t[12] !== C) {
            const Component = o("WAWebFlex.react").FlexRow;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            b = <Component_2 xstyle={_}>{h}<Component_1 align="center" xstyle={c.subdomainRow}>{y}<Component xstyle={c.subdomainText}>{C}</Component></Component_1></Component_2>;
            t[12] = C;
            t[13] = b;
        } else {
            b = t[13];
        }
        let v;
        if (t[14] !== b || t[15] !== m || t[16] !== p) {
            const Component = o("WAWebFlex.react").FlexColumn;
            v = <Component testid="payment-link-order-preview-header" align="stretch" xstyle={m}>{p}{b}</Component>;
            t[14] = b;
            t[15] = m;
            t[16] = p;
            t[17] = v;
        } else {
            v = t[17];
        }
        let S;
        if (t[18] !== onClick || t[19] !== v) {
            S = <div role="button" onClick={onClick} onKeyPress={onClick} tabIndex={0} data-testid="payment-link-order-preview-container">{v}</div>;
            t[18] = onClick;
            t[19] = v;
            t[20] = S;
        } else {
            S = t[20];
        }
        return S;
    }
    l.default = d;
}, 226);