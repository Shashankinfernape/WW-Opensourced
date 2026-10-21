__d("WAWebRenderInteractivePreviewIcon", [
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WDSIconIcEventFilled.react",
    "WDSIconIcReceipt.react",
    "WDSIconIcShoppingBagFill.react",
    "WDSIconWdsIcUnsupportedMessage.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        container: {
            display: "x1rg5ohu",
            marginInlineEnd: "xjn30re",
            $$css: true
        },
        marginTop2: {
            marginTop: "xfl633f",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_msg = e.msg;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebMsgGetters").getInteractiveType,
                o("WAWebMsgGetters").getNativeFlowName
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebMsgValues").useMsgValues(e_msg.id, a);
        const l = i[0];
        const c = i[1];
        if (l === r("WAWebInteractiveMessageType").SHOPS_STOREFRONT) {
            let d;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                d = s.jsx(r("WDSIconIcShoppingBagFill.react"), {
                    xstyle: [
                        u.container,
                        u.marginTop2
                    ],
                    width: 14,
                    height: 14
                });
                t[1] = d;
            } else {
                d = t[1];
            }
            return d;
        }
        if (l === r("WAWebInteractiveMessageType").NATIVE_FLOW) {
            let m;
            if (t[2] !== c) {
                m = c === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS ? s.jsx(r("WDSIconIcReceipt.react"), {
                    xstyle: [
                        u.container,
                        u.marginTop2
                    ],
                    width: 13,
                    height: 13,
                    testid: "order_details_preview_icon"
                }) : c === r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION ? s.jsx(r("WDSIconIcEventFilled.react"), {
                    iconXstyle: [
                        u.container,
                        u.marginTop2
                    ],
                    width: 14,
                    height: 14,
                    testid: "booking-confirmation-preview-icon"
                }) : c === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO ? null : s.jsx(r("WDSIconWdsIcUnsupportedMessage.react"), {
                    width: 20,
                    height: 20,
                    testid: "message-fail"
                });
                t[2] = c;
                t[3] = m;
            } else {
                m = t[3];
            }
            return m;
        }
        let p;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            p = s.jsx(r("WDSIconWdsIcUnsupportedMessage.react"), {
                width: 20,
                height: 20,
                testid: "message-fail"
            });
            t[4] = p;
        } else {
            p = t[4];
        }
        return p;
    }
    l.default = c;
}, 98);