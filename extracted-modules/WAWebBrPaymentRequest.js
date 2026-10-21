__d("WAWebBrPaymentRequest", [
    "$InternalEnum",
    "WAWebABProps",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        BOLETO: "boleto",
        PIX_DYNAMIC_CODE: "pix_dynamic_code",
        PAYMENT_LINK: "payment_link",
        OFFSITE_CARD_PAY: "offsite_card_pay"
    });
    function s() {
        return o("WAWebABProps").getABPropConfigValue("br_payments_payment_request_cta");
    }
    function u() {
        return o("WAWebABProps").getABPropConfigValue("br_payments_payment_detection_enhancement");
    }
    function c(e) {
        if (e) {
            return s();
        }
        return u();
    }
    function d(e) {
        if (e) {
            return s();
        }
        u();
        return false;
    }
    function m(t) {
        try {
            const i = JSON.parse(t);
            const l = i.payment_setting;
            if (l == null) {
                return null;
            }
            const s = e.cast(l.type);
            if (s == null) {
                return null;
            }
            const u = {
                paymentType: s
            };
            if (s === e.BOLETO && l.boleto?.digitable_line != null) {
                u.digitableLine = l.boleto.digitable_line;
            } else if (s === e.PIX_DYNAMIC_CODE && l.pix_dynamic_code?.code != null) {
                u.code = l.pix_dynamic_code.code;
                if (typeof l.pix_dynamic_code.flow_type === "string") {
                    u.pixFlowType = l.pix_dynamic_code.flow_type;
                }
            } else if (s === e.PAYMENT_LINK && l.payment_link?.uri != null) {
                u.uri = l.payment_link.uri;
                if (typeof l.payment_link.psp === "string") {
                    u.psp = l.payment_link.psp;
                }
            } else if (s === e.OFFSITE_CARD_PAY && l.offsite_card_pay?.last_four_digits != null) {
                u.lastFourDigits = l.offsite_card_pay.last_four_digits;
            } else {
                return null;
            }
            return u;
        } catch (e) {
            return null;
        }
    }
    function p(e) {
        if (e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            return null;
        }
        return _({
            interactivePayload: e.interactivePayload,
            interactiveType: e.interactiveType,
            nativeFlowName: e.nativeFlowName,
            type: e.type
        });
    }
    function _({ interactivePayload: t, interactiveType: n, nativeFlowName: a, type }) {
        if (a !== r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST || type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE || n !== r("WAWebInteractiveMessageType").NATIVE_FLOW) {
            return null;
        }
        const l = t?.buttons;
        if (l == null) {
            return null;
        }
        const s = [];
        for (const c of l){
            const d = c?.buttonParamsJson;
            if (d != null) {
                const p = m(d);
                if (p != null) {
                    s.push(p);
                }
            }
        }
        if (s.length > 0) {
            return s;
        }
        return null;
    }
    function f(t) {
        if (t.nativeFlowName !== r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST) {
            return false;
        }
        const o = t.interactivePayload?.buttons;
        if (o == null) {
            return false;
        }
        return o.some((t)=>{
            const n = t?.buttonParamsJson;
            return n != null && g(n) === e.OFFSITE_CARD_PAY;
        });
    }
    function g(t) {
        try {
            const r = JSON.parse(t);
            return e.cast(r.payment_setting?.type);
        } catch (e) {
            return null;
        }
    }
    function h(e) {
        if (e?.name !== r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST) {
            return null;
        }
        const t = e.buttonParamsJson;
        if (t == null) {
            return null;
        }
        return m(t);
    }
    l.PaymentRequestCtaType = e;
    l.isPaymentDetectionEnhancementEnabled = u;
    l.isPaymentRequestFeatureEnabled = c;
    l.shouldShowPaymentRequestPayWithHeader = d;
    l.getPaymentRequestInfo = p;
    l.getPaymentRequestInfoFor = _;
    l.hasPaymentRequestOffsiteCardPay = f;
    l.parsePaymentRequestButton = h;
}, 98);