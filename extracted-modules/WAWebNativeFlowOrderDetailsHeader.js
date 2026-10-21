__d("WAWebNativeFlowOrderDetailsHeader", [
    "fbt",
    "WAWebFlex.react",
    "WAWebOrderGatingUtils",
    "WAWebOrderPaymentStatus",
    "WAWebTextLineClamp.react",
    "WDSIconIcCheckCircleFilled.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        paddingTop6: {
            paddingTop: "x1yrsyyn",
            $$css: true
        }
    };
    const m = {
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
        orderId: {
            textTransform: "xtvhhri",
            $$css: true
        },
        orderInfoWrapper: {
            width: "xh8yej3",
            $$css: true
        },
        hr: {
            width: "xh8yej3",
            borderTopWidth: "x178xt8z",
            borderTopStyle: "xlya59e",
            borderTopColor: "x1exxf4d",
            $$css: true
        },
        media: {
            minWidth: "x900493",
            height: "xsdox4t",
            maxHeight: "xmz0i5r",
            backgroundPosition: "x1xsqp64",
            backgroundSize: "x18d0r48",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            $$css: true
        },
        total: {
            width: "xh8yej3",
            $$css: true
        },
        icon: {
            paddingTop: "x1gxa6cn",
            paddingInlineEnd: "x1uc92m",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(31);
        const { amount, documentPreview, isSentByMe, numberOfItems, orderId, orderPaymentStatus, payIcons, quantity, text, thumbnail, xstyle } = t;
        const v = isSentByMe ? m.bubbleOut : m.bubbleIn;
        let S;
        if (n[0] !== v || n[1] !== xstyle) {
            S = [
                m.header,
                d.paddingTop6,
                o("WDSPaddings.stylex").wdsPaddings.paddingBottom8,
                o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
                v,
                xstyle
            ];
            n[0] = v;
            n[1] = xstyle;
            n[2] = S;
        } else {
            S = n[2];
        }
        let R;
        if (n[3] !== orderId) {
            R = o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._("Charge #{order}", [
                s._param("order", orderId)
            ]) : s._("Order #{order}", [
                s._param("order", orderId)
            ]);
            n[3] = orderId;
            n[4] = R;
        } else {
            R = n[4];
        }
        let L;
        if (n[5] !== R) {
            const Component = r("WDSText.react");
            L = <div data-testid="native-flow-order-id"><Component type="Body3Emphasized" colorName="contentDeemphasized" testid="native-flow-order-id-text" xstyle={m.orderId}>{R}</Component></div>;
            n[5] = R;
            n[6] = L;
        } else {
            L = n[6];
        }
        let E;
        if (n[7] !== orderPaymentStatus) {
            const Component = r("WDSText.react");
            E = orderPaymentStatus === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured && <div data-testid="order-header-payment-status-paid"><Component type="Body3Emphasized" colorName="contentDeemphasized" testid="native-flow-order-paid-text" xstyle={m.orderId}>{c.jsx(r("WDSIconIcCheckCircleFilled.react"), {
                width: 12,
                displayInline: true,
                colorName: "accent",
                xstyle: m.icon
            })}{s._("Paid")}</Component></div>;
            n[7] = orderPaymentStatus;
            n[8] = E;
        } else {
            E = n[8];
        }
        let k;
        if (n[9] !== L || n[10] !== E) {
            const Component = o("WAWebFlex.react").FlexRow;
            k = <Component xstyle={m.total} justify="all">{L}{E}</Component>;
            n[9] = L;
            n[10] = E;
            n[11] = k;
        } else {
            k = n[11];
        }
        let I;
        if (n[12] === Symbol.for("react.memo_cache_sentinel")) {
            I = <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.hr, o("WDSMargins.stylex").wdsMargins.marginTop4, o("WDSMargins.stylex").wdsMargins.marginBottom8))}/>;
            n[12] = I;
        } else {
            I = n[12];
        }
        let T;
        if (n[13] !== documentPreview || n[14] !== numberOfItems || n[15] !== quantity || n[16] !== text || n[17] !== thumbnail) {
            const Component = r("WAWebTextLineClamp.react");
            const Component_1 = r("WDSText.react");
            const Component_2 = o("WAWebFlex.react").FlexRow;
            T = documentPreview ?? <Component_2 align="center" xstyle={m.orderInfoWrapper}>{thumbnail != null && thumbnail !== "" ? <div className={(e || (e = r("stylex")))(m.media, o("WDSMargins.stylex").wdsMargins.marginEnd8)} style={{
                backgroundImage: `url(${thumbnail})`
            }}/> : null}<div className="x6ikm8r x10wlt62"><Component maxLines={1}>{text}</Component><p data-testid="native-flow-order-item-quantity-paragraph"><Component_1 type="Body2" colorName="contentDeemphasized" testid="native-flow-order-item-quantity">{_(numberOfItems, quantity)}</Component_1></p></div></Component_2>;
            n[13] = documentPreview;
            n[14] = numberOfItems;
            n[15] = quantity;
            n[16] = text;
            n[17] = thumbnail;
            n[18] = T;
        } else {
            T = n[18];
        }
        let D;
        if (n[19] !== payIcons) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            const Component_2 = o("WAWebFlex.react").FlexRow;
            D = payIcons != null && payIcons?.length > 0 && <><div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.hr, o("WDSMargins.stylex").wdsMargins.marginVer8))}/><Component_2 xstyle={m.total} justify="all" align="center" testid="order-header-pay-with-row"><p data-testid="native-flow-order-pay-with-paragraph"><Component type="Body2" colorName="contentDefault" testid="native-flow-order-pay-with">{s._("Pay with")}</Component></p><Component_1 xstyle={m.icon} justify="end">{payIcons}</Component_1></Component_2></>;
            n[19] = payIcons;
            n[20] = D;
        } else {
            D = n[20];
        }
        let x;
        if (n[21] === Symbol.for("react.memo_cache_sentinel")) {
            x = <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.hr, o("WDSMargins.stylex").wdsMargins.marginVer8))}/>;
            n[21] = x;
        } else {
            x = n[21];
        }
        let $;
        if (n[22] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            $ = <p data-testid="native-flow-order-total-label-paragraph"><Component type="Body1" colorName="contentDefault" testid="native-flow-order-total-label">{s._("Total")}</Component></p>;
            n[22] = $;
        } else {
            $ = n[22];
        }
        let P;
        if (n[23] !== amount) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            P = <Component_1 xstyle={m.total} justify="all">{$}<p data-testid="native-flow-order-total-value-paragraph"><Component type="Body1Emphasized" colorName="contentDefault" testid="native-flow-order-total-value">{amount}</Component></p></Component_1>;
            n[23] = amount;
            n[24] = P;
        } else {
            P = n[24];
        }
        let N;
        if (n[25] !== P || n[26] !== S || n[27] !== k || n[28] !== T || n[29] !== D) {
            const Component = o("WAWebFlex.react").FlexColumn;
            N = <Component xstyle={S}>{k}{I}{T}{D}{x}{P}</Component>;
            n[25] = P;
            n[26] = S;
            n[27] = k;
            n[28] = T;
            n[29] = D;
            n[30] = N;
        } else {
            N = n[30];
        }
        return N;
    }
    function _(e, t) {
        if (e != null && e > 1) {
            return s._("_j{\"*\":\"{number-of-items} items\",\"_1\":\"1 item\"}", [
                s._plural(e, "number-of-items")
            ]);
        }
        return s._("Quantity {item-quantity}", [
            s._param("item-quantity", t)
        ]);
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.default = p;
}, 226);