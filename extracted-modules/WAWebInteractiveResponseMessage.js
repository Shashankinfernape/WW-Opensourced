__d("WAWebInteractiveResponseMessage", [
    "WAWebGalaxyFlowFeatureSupport",
    "WAWebInteractiveBubble.react",
    "WAWebInteractiveGalaxyFlowResponseMessage.react",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    const e = [
        "msgKey",
        "quotedMsg"
    ];
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const n = o("react-compiler-runtime").c(14);
        let a;
        let i;
        let l;
        if (n[0] !== t) {
            a = t.msgKey;
            l = t.quotedMsg;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
        }
        let s;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            let c;
            s = [
                (c = o("WAWebMsgGetters")).getType,
                c.getNativeFlowName,
                c.getInteractiveType,
                c.getInteractivePayload,
                c.getTo
            ];
            n[4] = s;
        } else {
            s = n[4];
        }
        const d = o("useWAWebMsgValues").useMsgValues(a, s);
        const m = d[0];
        const p = d[1];
        const _ = d[2];
        const f = d[3];
        const g = d[4];
        if (m !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE) {
            return null;
        }
        let h;
        if (n[5] !== l) {
            h = l ? <div className="x1198e8h x1lxpwgx xzueoph xw01apr">{l}</div> : null;
            n[5] = l;
            n[6] = h;
        } else {
            h = n[6];
        }
        let y;
        if (n[7] !== a || n[8] !== i || n[9] !== h) {
            y = u.jsx(r("WAWebInteractiveBubble.react"), babelHelpers.extends({}, i, {
                msgKey: a,
                header: h,
                displayFooter: false
            }));
            n[7] = a;
            n[8] = i;
            n[9] = h;
            n[10] = y;
        } else {
            y = n[10];
        }
        const defaultMsg = y;
        if (p === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW && o("WAWebGalaxyFlowFeatureSupport").isFlowResponseSupportedFor({
            buttonParamsJson: f?.buttonParamsJson,
            interactiveType: _,
            to: g
        })) {
            let b;
            if (n[11] !== defaultMsg || n[12] !== a) {
                b = u.jsx(r("WAWebInteractiveGalaxyFlowResponseMessage.react"), {
                    msgKey: a,
                    defaultMsg
                });
                n[11] = defaultMsg;
                n[12] = a;
                n[13] = b;
            } else {
                b = n[13];
            }
            return b;
        }
        return defaultMsg;
    }
    l.default = c;
}, 98);