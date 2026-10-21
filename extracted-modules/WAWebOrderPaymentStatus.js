__d("WAWebOrderPaymentStatus", [
    "$InternalEnum",
    "WAWebE2EProtoUtils",
    "WAWebInteractiveMessageType",
    "WAWebMsgType",
    "WAWebOrderStatus"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = -1000;
    const u = (e = n("$InternalEnum"))({
        Pending: "pending",
        Captured: "captured",
        Failed: "failed"
    });
    const c = e({
        Confirm: "confirm",
        PaymentInstruction: "payment_instruction"
    });
    const d = e({
        CPI: "cpi",
        PIX: "pix",
        NATIVE: "native",
        PAYMENT_LINK: "payment_link",
        BOLETO: "boleto"
    });
    const m = e({
        P2M_LITE: "p2m_lite",
        P2M_PRO: "p2m_pro",
        P2M_BASIC: "p2m_basic"
    });
    function p(e) {
        let t = {};
        try {
            t = JSON.parse(e);
        } catch (e) {
            return null;
        }
        if (t == null) {
            return null;
        }
        const n = t;
        const { payment_method: r, payment_status: o, reference_id: a } = n;
        if (a == null || o == null && r == null) {
            return null;
        }
        return {
            refId: a,
            paymentMethod: r,
            paymentStatus: o
        };
    }
    function _(e) {
        if (e == null) {
            return null;
        }
        try {
            const t = JSON.parse(e);
            const { order: n, reference_id: r } = t;
            const a = o("WAWebOrderStatus").OrderStatus.cast(n?.status);
            if (r == null || a == null) {
                return null;
            }
            return a;
        } catch (e) {
            return null;
        }
    }
    function f(e) {
        let t;
        if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW && o("WAWebE2EProtoUtils").isOrderNativeFlow(e.nativeFlowName) && (t = e.interactivePayload) != null && t.buttons) {
            const n = e.interactivePayload;
            const a = n.buttons[0].buttonParamsJson;
            if (a != null) {
                return p(a);
            }
        }
        return null;
    }
    function g(e) {
        let t;
        if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW && o("WAWebE2EProtoUtils").isOrderNativeFlow(e.nativeFlowName) && (t = e.interactivePayload) != null && t.buttons) {
            return e.interactivePayload.buttons[0];
        }
        return null;
    }
    function h(e) {
        const t = g(e);
        if (t == null) {
            return null;
        }
        const { buttonParamsJson: n, name: r } = t;
        if (r != null && n != null) {
            return p(n);
        }
        return null;
    }
    function y(e, t) {
        const n = e.msgs.getModelsArray().slice(s);
        let a = null;
        const i = n.findLast((e)=>{
            if (e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && e.subtype === "phone_only_feature" && e.quotedMsg != null) {
                a = f(e.quotedMsg);
                if (a?.refId === t) {
                    return true;
                }
            } else if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW && o("WAWebE2EProtoUtils").isOrderNativeFlow(e.nativeFlowName)) {
                a = h(e);
                if (a?.refId === t) {
                    return true;
                }
            }
            return false;
        });
        if (i != null && a != null) {
            return a;
        }
        return null;
    }
    l.OrderPaymentStatus = u;
    l.OrderPaymentMethod = c;
    l.OrderAcceptedPaymentMethods = d;
    l.OrderP2MType = m;
    l.paramsJsonToOrderPaymentInfo = p;
    l.paramsJsonToOrderStatus = _;
    l.getOrderPaymentStatusInfo = f;
    l.getOrderPaymentStatusInfoFromNativeFlow = h;
    l.findLastOrderPaymentStatusInfo = y;
}, 98);