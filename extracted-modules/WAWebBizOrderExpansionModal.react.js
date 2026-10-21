__d("WAWebBizOrderExpansionModal.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebOrderGatingUtils",
    "WDSIconIcReceipt.react",
    "WDSIconIcShieldLock.react",
    "WDSIconWdsIcChat.react",
    "WDSIllustrationWdsPictoBusiness.react",
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
        paddingInline18: {
            paddingInlineStart: "xwn43p0",
            paddingInlineEnd: "x1x5flf6",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        paddingInline30: {
            paddingInlineStart: "x162tt16",
            paddingInlineEnd: "x5zjp28",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        }
    };
    const m = {
        iconColor: {
            color: "xx2jlie",
            $$css: true
        },
        illustration: {
            display: "x78zum5",
            justifyContent: "xl56j7k",
            $$css: true
        }
    };
    function P1Component(t) {
        const n = o("react-compiler-runtime").c(22);
        const { onDismiss, onOk } = t;
        let l;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                surface: "unknown",
                viewName: "biz-order-expansion"
            };
            n[0] = l;
        } else {
            l = n[0];
        }
        let u;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            u = s._("OK");
            n[1] = u;
        } else {
            u = n[1];
        }
        let p;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexRow;
            p = <Component justify="center" align="center" alignSelf="center" xstyle={o("WDSPaddings.stylex").wdsPaddings.paddingTop28}>{c.jsx(r("WDSIllustrationWdsPictoBusiness.react"), {
                testid: "wds-picto-business",
                xstyle: m.illustration
            })}</Component>;
            n[2] = p;
        } else {
            p = n[2];
        }
        let _;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            _ = <Component_1><Component type="Headline1" colorName="contentDefault" textAlign="center" testid="biz-order-expansion-title" xstyle={o("WDSMargins.stylex").wdsMargins.marginVer24}>{o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._("Manage your charges like a pro") : s._("Use orders to manage your sales like a pro")}</Component></Component_1>;
            n[3] = _;
        } else {
            _ = n[3];
        }
        let f;
        let g;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                o("WDSMargins.stylex").wdsMargins.marginBottom16,
                d.paddingInline18
            ];
            g = c.jsx(r("WDSIconWdsIcChat.react"), {
                height: 22,
                width: 22,
                xstyle: m.iconColor
            });
            n[4] = f;
            n[5] = g;
        } else {
            f = n[4];
            g = n[5];
        }
        let h;
        if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
            h = (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStart24);
            n[6] = h;
        } else {
            h = n[6];
        }
        let y;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            y = <Component type="Body1Emphasized" colorName="contentDefault" testid="biz-order-expansion-chat-title" xstyle={o("WDSMargins.stylex").wdsMargins.marginBottom4}>{s._("Easy to do in chat")}</Component>;
            n[7] = y;
        } else {
            y = n[7];
        }
        let C;
        if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            C = <Component_1 align="center" xstyle={f}>{g}<div {...babelHelpers.extends({
                "data-testid": "biz-order-expansion-chat-benefit"
            }, h, {
                children: [
                    y,
                    <Component type="Body1" colorName="contentDeemphasized" testid="biz-order-expansion-chat-description">{s._("Simply open a chat with a customer, then attach an order.")}</Component>
                ]
            })}/></Component_1>;
            n[8] = C;
        } else {
            C = n[8];
        }
        let b;
        let v;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            b = [
                o("WDSMargins.stylex").wdsMargins.marginBottom16,
                d.paddingInline18
            ];
            v = c.jsx(r("WDSIconIcShieldLock.react"), {
                height: 22,
                width: 22,
                xstyle: m.iconColor
            });
            n[9] = b;
            n[10] = v;
        } else {
            b = n[9];
            v = n[10];
        }
        let S;
        if (n[11] === Symbol.for("react.memo_cache_sentinel")) {
            S = (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStart24);
            n[11] = S;
        } else {
            S = n[11];
        }
        let R;
        if (n[12] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            R = <Component type="Body1Emphasized" colorName="contentDefault" testid="biz-order-expansion-trust-title" xstyle={o("WDSMargins.stylex").wdsMargins.marginBottom4}>{s._("Build trust with customers")}</Component>;
            n[12] = R;
        } else {
            R = n[12];
        }
        let L;
        if (n[13] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            L = <Component_1 align="center" xstyle={b}>{v}<div {...babelHelpers.extends({
                "data-testid": "biz-order-expansion-trust-benefit"
            }, S, {
                children: [
                    R,
                    <Component type="Body1" colorName="contentDeemphasized" testid="biz-order-expansion-trust-description">{s._("Send receipts and status updates for their purchases, all in chat.")}</Component>
                ]
            })}/></Component_1>;
            n[13] = L;
        } else {
            L = n[13];
        }
        let E;
        let k;
        if (n[14] === Symbol.for("react.memo_cache_sentinel")) {
            E = [
                o("WDSMargins.stylex").wdsMargins.marginBottom16,
                d.paddingInline18
            ];
            k = c.jsx(r("WDSIconIcReceipt.react"), {
                height: 22,
                width: 22,
                xstyle: m.iconColor,
                testid: "order_expansion_icon"
            });
            n[14] = E;
            n[15] = k;
        } else {
            E = n[14];
            k = n[15];
        }
        let I;
        if (n[16] === Symbol.for("react.memo_cache_sentinel")) {
            I = (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStart24);
            n[16] = I;
        } else {
            I = n[16];
        }
        let T;
        if (n[17] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            T = <Component type="Body1Emphasized" colorName="contentDefault" testid="biz-order-expansion-management-title" xstyle={o("WDSMargins.stylex").wdsMargins.marginBottom4}>{o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._("Simple management") : s._("Simple order management")}</Component>;
            n[17] = T;
        } else {
            T = n[17];
        }
        let D;
        if (n[18] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            D = <Component_2 xstyle={d.paddingInline30}>{p}{_}{C}{L}<Component_1 align="center" xstyle={E}>{k}<div {...babelHelpers.extends({
                "data-testid": "biz-order-expansion-management-benefit"
            }, I, {
                children: [
                    T,
                    <Component type="Body1" colorName="contentDeemphasized" testid="biz-order-expansion-management-description">{s._("Track which items you'Voe sold and if you'Voe been paid.")}</Component>
                ]
            })}/></Component_1></Component_2>;
            n[18] = D;
        } else {
            D = n[18];
        }
        let x;
        if (n[19] !== onDismiss || n[20] !== onOk) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            x = <Component tsNavigationData={l} onOK={onOk} okText={u} onOverlayClick={onDismiss}>{D}</Component>;
            n[19] = onDismiss;
            n[20] = onOk;
            n[21] = x;
        } else {
            x = n[21];
        }
        return x;
    }
    function _(e) {
        const onDismiss = function() {
            e();
            o("WAWebModalManager").ModalManager.close();
        };
        const onOk = function() {
            e();
            o("WAWebModalManager").ModalManager.close();
        };
        o("WAWebModalManager").ModalManager.open(<P1Component onDismiss={onDismiss} onOk={onOk}/>);
    }
    l.BizOrderExpansionModal = P1Component;
    l.openOrderExpansionModal = _;
}, 226);