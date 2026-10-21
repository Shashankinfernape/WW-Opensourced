__d("WAWebSimplifiedPaymentHeader.react", [
    "fbt",
    "WAWebBizOrderDetailsParams",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebMessageMeta.react",
    "WAWebOrderPaymentStatus",
    "WAWebPaymentAmountDisplay.react",
    "WAWebPaymentPayWithRow.react",
    "WDSIconIcCheck.react",
    "WDSIconWdsIcCurrencyReal.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        container: {
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
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        bubbleOut: {
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        total: {
            width: "xh8yej3",
            paddingTop: "x1yrsyyn",
            $$css: true
        },
        subtitle: {
            width: "xh8yej3",
            $$css: true
        },
        requestedByText: {
            paddingInlineStart: "x25sj25",
            $$css: true
        },
        meta: {
            paddingTop: "x1gxa6cn",
            paddingInlineEnd: "x1uc92m",
            height: "xiryn5a",
            $$css: true
        },
        checkIcon: {
            marginTop: "x1k70j0n",
            marginInlineStart: "x13fj5qh",
            marginInlineEnd: "xnnr8r",
            color: "x1du590y",
            backgroundColor: "x1280gxy",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            width: "xvy4d1p",
            height: "xxk0z11",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            paddingTop: "x1yrsyyn",
            paddingInlineEnd: "x1icxu4v",
            paddingBottom: "x10b6aqq",
            paddingInlineStart: "x25sj25",
            $$css: true
        },
        canceledIcon: {
            marginTop: "x1k70j0n",
            marginInlineStart: "x13fj5qh",
            marginInlineEnd: "xnnr8r",
            color: "x30a034",
            backgroundColor: "x1280gxy",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            width: "xvy4d1p",
            height: "xxk0z11",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            paddingTop: "x1yrsyyn",
            paddingInlineEnd: "x1icxu4v",
            paddingBottom: "x10b6aqq",
            paddingInlineStart: "x25sj25",
            $$css: true
        },
        pendingIcon: {
            marginTop: "x1k70j0n",
            marginInlineStart: "x13fj5qh",
            marginInlineEnd: "xnnr8r",
            color: "xhslqc4",
            backgroundColor: "x1280gxy",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            width: "xvy4d1p",
            height: "xxk0z11",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            paddingTop: "x1yrsyyn",
            paddingInlineEnd: "x1icxu4v",
            paddingBottom: "x10b6aqq",
            paddingInlineStart: "x25sj25",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(36);
        const { amount1000, chat, currency, displayType, isPaymentRequest, isSentByMe, msgKey, orderPaymentStatus, payIcons, paymentSettings, xstyle } = e;
        const chat_contact = chat.contact;
        let b;
        if (t[0] !== chat_contact || t[1] !== paymentSettings) {
            b = m(paymentSettings) ?? (chat_contact.verifiedName || chat_contact.name || o("WAWebFrontendContactGetters").getDisplayName(chat_contact));
            t[0] = chat_contact;
            t[1] = paymentSettings;
            t[2] = b;
        } else {
            b = t[2];
        }
        const S = b;
        const R = isSentByMe ? c.bubbleOut : c.bubbleIn;
        let L;
        if (t[3] !== R || t[4] !== xstyle) {
            L = [
                c.container,
                R,
                xstyle
            ];
            t[3] = R;
            t[4] = xstyle;
            t[5] = L;
        } else {
            L = t[5];
        }
        const isStrikethrough = orderPaymentStatus === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed;
        let k;
        if (t[6] !== amount1000 || t[7] !== currency || t[8] !== isStrikethrough) {
            k = u.jsx(r("WAWebPaymentAmountDisplay.react"), {
                amount1000,
                currency,
                isStrikethrough
            });
            t[6] = amount1000;
            t[7] = currency;
            t[8] = isStrikethrough;
            t[9] = k;
        } else {
            k = t[9];
        }
        let I;
        if (t[10] !== S || t[11] !== orderPaymentStatus) {
            const Component = r("WDSText.react");
            const Component_1 = r("WDSText.react");
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            const Component_3 = o("WAWebFlex.react").FlexRow;
            I = orderPaymentStatus === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured && <Component_3>{u.jsx(r("WDSIconIcCheck.react"), {
                width: 24,
                height: 24,
                iconXstyle: c.checkIcon
            })}<Component_2 xstyle={c.total} justify="all" align="start" testid="simplified-order-header-payment-status-paid"><p data-testid="simplified-payment-paid-merchant-paragraph" className="x25sj25"><Component type="Body2Emphasized" colorName="contentDefault" testid="simplified-payment-paid-merchant">{s._("Sent to {merchant-name}", [
                s._param("merchant-name", S)
            ])}</Component></p><p data-testid="simplified-payment-completed-paragraph" className="x25sj25"><Component_1 type="Body3" colorName="contentActionEmphasized" testid="simplified-payment-completed">{s._("Completed")}</Component_1></p></Component_2></Component_3>;
            t[10] = S;
            t[11] = orderPaymentStatus;
            t[12] = I;
        } else {
            I = t[12];
        }
        let T;
        if (t[13] !== S || t[14] !== orderPaymentStatus) {
            const Component = r("WDSText.react");
            const Component_1 = r("WDSText.react");
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            const Component_3 = o("WAWebFlex.react").FlexRow;
            T = orderPaymentStatus === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed && <Component_3>{u.jsx(r("WDSIconWdsIcCurrencyReal.react"), {
                iconXstyle: c.canceledIcon
            })}<Component_2 xstyle={c.total} justify="all" align="start" testid="simplified-order-header-payment-status-canceled"><p data-testid="simplified-payment-failed-merchant-paragraph" className="x25sj25"><Component type="Body2Emphasized" colorName="contentDefault" testid="simplified-payment-failed-merchant">{s._("Send to {merchant-name}", [
                s._param("merchant-name", S)
            ])}</Component></p><p data-testid="simplified-payment-failed-paragraph" className="x25sj25"><Component_1 type="Body3" colorName="secondaryNegativeEmphasized" testid="simplified-payment-failed">{s._("Failed")}</Component_1></p></Component_2></Component_3>;
            t[13] = S;
            t[14] = orderPaymentStatus;
            t[15] = T;
        } else {
            T = t[15];
        }
        let D;
        if (t[16] !== S || t[17] !== orderPaymentStatus) {
            const Component = r("WDSText.react");
            const Component_1 = r("WDSText.react");
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            const Component_3 = o("WAWebFlex.react").FlexRow;
            D = orderPaymentStatus === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending && <Component_3>{u.jsx(r("WDSIconWdsIcCurrencyReal.react"), {
                iconXstyle: c.pendingIcon
            })}<Component_2 xstyle={c.total} justify="all" align="start" testid="simplified-order-header-payment-status-pending"><p data-testid="simplified-payment-pending-merchant-paragraph" className="x25sj25"><Component type="Body2Emphasized" colorName="contentDefault" testid="simplified-payment-pending-merchant">{s._("Send to {merchant-name}", [
                s._param("merchant-name", S)
            ])}</Component></p><p data-testid="simplified-payment-pending-paragraph" className="x25sj25"><Component_1 type="Body3" colorName="contentDeemphasized" testid="simplified-payment-pending">{s._("Pending")}</Component_1></p></Component_2></Component_3>;
            t[16] = S;
            t[17] = orderPaymentStatus;
            t[18] = D;
        } else {
            D = t[18];
        }
        let x;
        if (t[19] !== orderPaymentStatus || t[20] !== payIcons) {
            const Component = r("WAWebPaymentPayWithRow.react");
            x = payIcons != null && payIcons?.length > 0 && orderPaymentStatus == null && <Component label={s._("Pay with")} testid="simplified-order-header-pay-with-row">{payIcons}</Component>;
            t[19] = orderPaymentStatus;
            t[20] = payIcons;
            t[21] = x;
        } else {
            x = t[21];
        }
        let $;
        if (t[22] !== displayType || t[23] !== isPaymentRequest || t[24] !== isSentByMe || t[25] !== S || t[26] !== msgKey) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            const Component_2 = o("WAWebFlex.react").FlexRow;
            $ = isPaymentRequest && <Component_2 xstyle={c.subtitle} justify="all" align="center" testid="simplified-order-header-payment-requested-by-row"><Component type="Body3" colorName="contentDeemphasized" xstyle={c.requestedByText}>{isSentByMe ? s._("You requested a payment") : s._("{merchant-name} requested a payment", [
                s._param("merchant-name", S)
            ])}</Component><Component_1 xstyle={c.meta} justify="end">{u.jsx(o("WAWebMessageMeta.react").Meta, {
                msgKey,
                displayType
            })}</Component_1></Component_2>;
            t[22] = displayType;
            t[23] = isPaymentRequest;
            t[24] = isSentByMe;
            t[25] = S;
            t[26] = msgKey;
            t[27] = $;
        } else {
            $ = t[27];
        }
        let P;
        if (t[28] !== $ || t[29] !== L || t[30] !== k || t[31] !== I || t[32] !== T || t[33] !== D || t[34] !== x) {
            const Component = o("WAWebFlex.react").FlexColumn;
            P = <Component xstyle={L}>{k}{I}{T}{D}{x}{$}</Component>;
            t[28] = $;
            t[29] = L;
            t[30] = k;
            t[31] = I;
            t[32] = T;
            t[33] = D;
            t[34] = x;
            t[35] = P;
        } else {
            P = t[35];
        }
        return P;
    }
    function m(paymentSettings) {
        for (const t of paymentSettings ?? []){
            const a = t.type === o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_DYNAMIC_CODE ? t[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_DYNAMIC_CODE]?.merchant_name : t.type === o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE ? t[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE]?.merchant_name : null;
            if (a != null && a !== "") {
                return a;
            }
        }
        return null;
    }
    l.default = d;
}, 226);