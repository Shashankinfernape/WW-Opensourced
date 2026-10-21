__d("WAWebBrazilPaymentStateKeys", [
    "WAWebInteractiveMessagesNativeFlowName"
], function(t, n, r, o, a, i, l) {
    const e = "review_and_pay";
    const s = new Set([
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO,
        e
    ]);
    const u = "br_payment_state";
    const c = "br_receipt_and_state_enabled";
    l.PAYMENT_INFO_BUTTON_NAME = r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO;
    l.PIX_CODE_REQUEST_BUTTON_NAME = e;
    l.PAYMENT_REQUEST_BUTTON_NAMES = s;
    l.BRAZIL_PAYMENT_STATE_KEY = u;
    l.RECEIPT_AND_STATE_STAMP_KEY = c;
}, 98);