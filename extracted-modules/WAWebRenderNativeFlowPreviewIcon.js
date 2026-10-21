__d("WAWebRenderNativeFlowPreviewIcon", [
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WDSIconIcReceipt.react",
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
        const t = o("react-compiler-runtime").c(3);
        const e_msg = e.msg;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebMsgGetters").getNativeFlowName
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebMsgValues").useMsgValues(e_msg.id, a);
        const l = i[0];
        if (l === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS) {
            let c;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                c = s.jsx(r("WDSIconIcReceipt.react"), {
                    xstyle: [
                        u.container,
                        u.marginTop2
                    ],
                    width: 13,
                    height: 13,
                    "aria-hidden": true,
                    testid: "order_details_preview_icon"
                });
                t[1] = c;
            } else {
                c = t[1];
            }
            return c;
        }
        let d;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            d = s.jsx(r("WDSIconWdsIcUnsupportedMessage.react"), {
                width: 20,
                height: 20,
                testid: "message-fail"
            });
            t[2] = d;
        } else {
            d = t[2];
        }
        return d;
    }
    l.default = c;
}, 98);