__d("WAWebNativeFlowPaymentInfoOrderDetailsHeader", [
    "fbt",
    "WAWebABProps",
    "WAWebBizOrderDetailsParams",
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebFlex.react",
    "WAWebPixLogoIcon.react",
    "WAWebText.react",
    "WAWebUserPrefsTypes",
    "WDSIconWdsSmbPaymentsPixFilled.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = {
        paddingTop6: {
            paddingTop: "x1yrsyyn",
            $$css: true
        }
    };
    const d = {
        header: {
            boxSizing: "x9f619",
            borderStartStartRadius: "x1i282gy",
            borderStartEndRadius: "xx9ypkp",
            borderEndEndRadius: "xd15eu0",
            borderEndStartRadius: "x11ecxm0",
            $$css: true
        },
        bubbleIn: {
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        bubbleOut: {
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        paymentInfo: {
            width: "xh8yej3",
            $$css: true
        },
        paymentInfoWrapper: {
            width: "xh8yej3",
            $$css: true
        },
        paymentInfoContent: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            $$css: true
        },
        iconPrimary: {
            fill: "xfifr3o",
            $$css: true
        },
        iconBackground: {
            fill: "xfifr3o",
            opacity: "x1xyvc85",
            $$css: true
        },
        pixIcon: {
            color: "x1du590y",
            backgroundColor: "x1280gxy",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            width: "x100vrsf",
            height: "x1vqgdyp",
            minWidth: "x1fns5xo",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            lineHeight: "x14ju556",
            $$css: true
        }
    };
    function m() {
        return o("WAWebABProps").getABPropConfigValue("br_pix_key_bubble_content_update");
    }
    function p(e) {
        const t = o("react-compiler-runtime").c(22);
        const { isSentByMe, orderInfo } = e;
        const orderInfo_paymentSettings = orderInfo.paymentSettings;
        let l;
        let p;
        let _;
        let f;
        if (t[0] !== isSentByMe || t[1] !== orderInfo_paymentSettings) {
            const b = orderInfo_paymentSettings?.at(0)?.[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE];
            l = o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey(b?.key ?? "", o("WAWebUserPrefsTypes").PixKeyType.cast(b?.key_type) ?? o("WAWebUserPrefsTypes").PixKeyType.PHONE);
            _ = o("WAWebBrazilPixKeyFormattingUtils").getPixKeyTypeLabel(b?.key_type);
            p = b?.merchant_name ?? "";
            f = isSentByMe ? s._("Requested by you") : s._("Requested by {merchant_name}", [
                s._param("merchant_name", p)
            ]);
            t[0] = isSentByMe;
            t[1] = orderInfo_paymentSettings;
            t[2] = l;
            t[3] = p;
            t[4] = _;
            t[5] = f;
        } else {
            l = t[2];
            p = t[3];
            _ = t[4];
            f = t[5];
        }
        const v = f;
        const S = isSentByMe ? d.bubbleOut : d.bubbleIn;
        let R;
        if (t[6] !== S) {
            R = [
                d.header,
                c.paddingTop6,
                o("WDSPaddings.stylex").wdsPaddings.paddingBottom8,
                o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
                o("WDSMargins.stylex").wdsMargins.marginBottom12,
                S
            ];
            t[6] = S;
            t[7] = R;
        } else {
            R = t[7];
        }
        let L;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            L = m() ? u.jsx(r("WDSIconWdsSmbPaymentsPixFilled.react"), {
                testid: "wds-smb-payments-pix-filled",
                height: 24,
                width: 24,
                xstyle: d.pixIcon
            }) : u.jsx(o("WAWebPixLogoIcon.react").PixLogoIcon, {
                height: 48,
                innerStyles: {
                    background: d.iconBackground,
                    primary: d.iconPrimary
                }
            });
            t[8] = L;
        } else {
            L = t[8];
        }
        let E;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            E = [
                d.paymentInfoContent,
                o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
                m() && o("WDSPaddings.stylex").wdsPaddings.paddingTop4
            ];
            t[9] = E;
        } else {
            E = t[9];
        }
        let k;
        if (t[10] !== p || t[11] !== v) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebText.react").WAWebTextTitle;
            k = m() ? <Component type="Body2Emphasized" colorName="contentDefault">{v}</Component> : <Component_1 textWrap="ellipsis">{p}</Component_1>;
            t[10] = p;
            t[11] = v;
            t[12] = k;
        } else {
            k = t[12];
        }
        let I;
        if (t[13] !== l || t[14] !== _) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebText.react").WAWebTextMuted;
            I = m() ? <Component type="Body3" colorName="contentDeemphasized">{l}</Component> : <Component_1 color="secondary" textWrap="ellipsis">{_}: {l}</Component_1>;
            t[13] = l;
            t[14] = _;
            t[15] = I;
        } else {
            I = t[15];
        }
        let T;
        if (t[16] !== k || t[17] !== I) {
            const Component = o("WAWebFlex.react").FlexColumn;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            const Component_2 = o("WAWebFlex.react").FlexRow;
            T = <Component_2 xstyle={d.paymentInfo} justify="all"><Component_1 align="center" xstyle={d.paymentInfoWrapper}>{L}<Component xstyle={E}>{k}{I}</Component></Component_1></Component_2>;
            t[16] = k;
            t[17] = I;
            t[18] = T;
        } else {
            T = t[18];
        }
        let D;
        if (t[19] !== R || t[20] !== T) {
            const Component = o("WAWebFlex.react").FlexColumn;
            D = <Component xstyle={R}>{T}</Component>;
            t[19] = R;
            t[20] = T;
            t[21] = D;
        } else {
            D = t[21];
        }
        return D;
    }
    l.default = p;
}, 226);