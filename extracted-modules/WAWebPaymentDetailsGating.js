__d("WAWebPaymentDetailsGating", [
    "WAWebBrazilPaymentState",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMobilePlatforms",
    "WAWebMsgType",
    "WAWebPaymentsGatingUtils"
], function(t, n, r, o, a, i, l) {
    const e = [
        "msgKey"
    ];
    function s(e) {
        return u({
            interactivePayload: e.interactivePayload,
            interactiveType: e.interactiveType,
            msgKey: e.id,
            nativeFlowName: e.nativeFlowName,
            type: e.type
        });
    }
    function u(t) {
        const t_msgKey = t.msgKey;
        const r = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const n_remote = t_msgKey.remote;
        return n_remote.isUser() && !n_remote.isBot() && (!o("WAWebMobilePlatforms").isSMB() || t_msgKey.fromMe) && o("WAWebBrazilPaymentState").isReceiptAndStateStamped(m(r)) && o("WAWebPaymentsGatingUtils").isBrazilPaymentDetailsAvailable();
    }
    function c(e) {
        return (!o("WAWebMobilePlatforms").isSMB() || e) && o("WAWebPaymentsGatingUtils").isBrazilPaymentDetailsAvailable();
    }
    function d(e) {
        return m({
            interactivePayload: e.interactivePayload,
            interactiveType: e.interactiveType,
            nativeFlowName: e.nativeFlowName,
            type: e.type
        });
    }
    function m({ interactivePayload, interactiveType, nativeFlowName, type }) {
        if (type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE || interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW || !(interactivePayload != null && interactivePayload.buttons)) {
            return null;
        }
        const l = interactivePayload;
        if (p(nativeFlowName, l)) {
            return l;
        }
        return null;
    }
    function p(nativeFlowName, t) {
        return nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO || nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS && o("WAWebBrazilPaymentState").isPixCodeRequestPayload(t);
    }
    l.isPaymentDetailsEnabledForMsg = s;
    l.isPaymentDetailsEnabledFor = u;
    l.isPaymentDetailsEnabledForReceiptNotice = c;
    l.getPaymentRequestPayload = d;
}, 98);