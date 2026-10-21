__d("WAWebBrazilPaymentStateUpdatePayload", [
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebPaymentDetailsModels"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return JSON.stringify({
            payment_message_id: e,
            status: o("WAWebPaymentDetailsModels").PaymentDetailsStatus.MARKED_AS_PAID,
            actor: o("WAWebPaymentDetailsModels").PaymentDetailsActor.REQUESTER,
            timestamp: t
        });
    }
    function s(e, receipt_message_id, n) {
        return JSON.stringify({
            payment_message_id: e,
            receipt_message_id,
            timestamp: n
        });
    }
    function u(e, t) {
        return JSON.stringify({
            payment_message_id: e,
            receipt_removed: true,
            timestamp: t
        });
    }
    function c(e) {
        return e != null && e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").BR_PAYMENT_STATE;
    }
    function d(e) {
        let t;
        if (!c(e) || e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE || !((t = e.interactivePayload) != null && t.buttons)) {
            return null;
        }
        const e_interactivePayload = e.interactivePayload;
        return m(_(e_interactivePayload));
    }
    function m(e) {
        const r = p(e);
        if (r == null) {
            return null;
        }
        const paymentMsgId = f(r.payment_message_id);
        if (paymentMsgId == null) {
            return null;
        }
        return {
            paymentMsgId,
            status: o("WAWebPaymentDetailsModels").PaymentDetailsStatus.cast(f(r.status)) ?? null,
            actor: o("WAWebPaymentDetailsModels").PaymentDetailsActor.cast(f(r.actor)) ?? null,
            receiptMsgId: f(r.receipt_message_id),
            isReceiptRemoved: r.receipt_removed === true,
            timestampMs: typeof r.timestamp === "number" && r.timestamp > 0 ? r.timestamp : 0
        };
    }
    function p(e) {
        if (e == null) {
            return null;
        }
        try {
            const t = JSON.parse(e);
            if (t != null && typeof t === "object" && !Array.isArray(t)) {
                return t;
            }
            return null;
        } catch (e) {
            return null;
        }
    }
    function _({ buttons }) {
        if (buttons.length !== 1) {
            return null;
        }
        const buttonParamsJson = buttons[0].buttonParamsJson;
        if (buttonParamsJson == null || buttonParamsJson === "") {
            return null;
        }
        return buttonParamsJson;
    }
    function f(e) {
        if (typeof e === "string" && e !== "") {
            return e;
        }
        return null;
    }
    l.buildMarkAsPaidUpdateParams = e;
    l.buildReceiptUpdateParams = s;
    l.buildReceiptRemovalParams = u;
    l.isBrazilPaymentStateUpdateMsg = c;
    l.getBrazilPaymentStateUpdate = d;
    l.parseBrazilPaymentStateUpdate = m;
}, 98);