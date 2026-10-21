__d("WAWebInteractiveOrderQuotedMessage.react", [
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebOrderStatus",
    "WAWebQuotedMsg.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(17);
        const { displayType, msgKey, quotedMsg } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let u;
            l = [
                (u = o("WAWebMsgGetters")).getType,
                u.getInteractiveType,
                u.getInteractivePayload,
                u.getNativeFlowButtons,
                u.getNativeFlowName,
                u.getIsNewsletterMsg,
                o("WAWebFrontendMsgGetters").getSafeMsg
            ];
            t[0] = l;
        } else {
            l = t[0];
        }
        const d = o("useWAWebMsgValues").useMsgValues(msgKey, l);
        const m = d[0];
        const interactiveType = d[1];
        const interactivePayload = d[2];
        const nativeFlowButtons = d[3];
        const nativeFlowName = d[4];
        const h = d[5];
        const y = d[6];
        if (quotedMsg) {
            return quotedMsg;
        }
        let C;
        let b;
        if (t[1] !== interactivePayload || t[2] !== interactiveType || t[3] !== h || t[4] !== msgKey || t[5] !== nativeFlowButtons || t[6] !== nativeFlowName || t[7] !== m) {
            C = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(msgKey, h);
            const S = o("WAWebOrderStatus").getOrderStatusInfoFor({
                interactivePayload,
                interactiveType,
                nativeFlowButtons,
                nativeFlowName,
                type: m
            })?.refId;
            b = C == null || S == null ? null : o("WAWebOrderStatus").findOrderDetailsMessage(C, S);
            t[1] = interactivePayload;
            t[2] = interactiveType;
            t[3] = h;
            t[4] = msgKey;
            t[5] = nativeFlowButtons;
            t[6] = nativeFlowName;
            t[7] = m;
            t[8] = C;
            t[9] = b;
        } else {
            C = t[8];
            b = t[9];
        }
        const R = b;
        let L;
        if (t[10] !== y) {
            L = c(y);
            t[10] = y;
            t[11] = L;
        } else {
            L = t[11];
        }
        const rootMsg = L;
        if (C == null || R == null || rootMsg == null) {
            return null;
        }
        let k;
        if (t[12] !== C || t[13] !== displayType || t[14] !== R || t[15] !== rootMsg) {
            k = s.jsx(r("WAWebQuotedMsg.react"), {
                msg: R,
                chat: C,
                rootMsg,
                displayType
            });
            t[12] = C;
            t[13] = displayType;
            t[14] = R;
            t[15] = rootMsg;
            t[16] = k;
        } else {
            k = t[16];
        }
        return k;
    }
    function c(e) {
        if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE || e.type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW) {
            return e;
        }
        return null;
    }
    l.default = u;
}, 98);