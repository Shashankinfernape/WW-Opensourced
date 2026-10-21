__d("WAWebOrderEphemeralExemptionUtil", [
    "WAWebDBEphemeralDisplayedExemptions",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebOrderGatingUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return o("WAWebOrderGatingUtils").inOrderMessagesEphemeralExceptionEnabled() && e === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && t === r("WAWebInteractiveMessageType").NATIVE_FLOW && (n === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS || n === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS || n === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD || n === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS || n === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO);
    }
    function s({ ephemeralDisplayedExemptions: t, ephemeralDuration: n, id: r }) {
        return r != null && n !== 0 && n != null && o("WAWebDBEphemeralDisplayedExemptions").EphemeralExemptionType.ORDERS_AND_PAYMENTS !== t;
    }
    function u({ ephemeralDisplayedExemptions: t, ephemeralDuration: n, id: r }) {
        return r != null && (n === 0 || n == null) && o("WAWebDBEphemeralDisplayedExemptions").EphemeralExemptionType.ORDERS_AND_PAYMENTS === t;
    }
    l.isMessageTypeExemptedFromDisappearing = e;
    l.shouldShowOrderExemptionSystemMessage = s;
    l.shouldUnsetChatEphemeralDisplayedExemption = u;
}, 98);